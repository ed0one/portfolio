import { contactSchema } from "@/lib/schemas";
import { getResend } from "@/lib/resend";
import { getSupabase } from "@/lib/supabase";

const PRIMARY_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Eduard Iliescu <contact@ed0one.dev>";
const FALLBACK_FROM_EMAIL = "Eduard Iliescu <contact@taskcapture.xyz>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "eduard.iliescu.devidevs@gmail.com";

const MIN_SENDER_INTERVAL_MS = 30_000;
const MAX_REQUESTS_PER_WINDOW = 30;
const WINDOW_MS = 10 * 60_000;

function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

const lastSentBySender = new Map<string, number>();
let recentRequestTimestamps: number[] = [];

function isRateLimited(sender: string): boolean {
  const now = Date.now();
  const last = lastSentBySender.get(sender);
  if (last !== undefined && now - last < MIN_SENDER_INTERVAL_MS) {
    return true;
  }
  lastSentBySender.set(sender, now);
  recentRequestTimestamps = recentRequestTimestamps.filter((t) => now - t < WINDOW_MS);
  if (recentRequestTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  recentRequestTimestamps.push(now);
  return false;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return Response.json(
      { ok: false, error: issue?.message ?? "Please check your input." },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const normalizedEmail = email.trim().toLowerCase();

  if (isRateLimited(normalizedEmail)) {
    return Response.json(
      { ok: false, error: "Too many messages. Please try again later." },
      { status: 429 }
    );
  }

  // 1. Supabase persistence (best-effort)
  try {
    const supabase = getSupabase();
    await supabase.from("contact_messages").insert({
      name,
      email: normalizedEmail,
      message,
    });
  } catch (err) {
    console.error("Supabase insert error:", errorMessage(err));
  }

  // 2. Resend email delivery to personal inbox
  let resend: ReturnType<typeof getResend> = null;
  try {
    resend = getResend();
  } catch (err) {
    console.error("Resend init error:", errorMessage(err));
  }

  if (resend) {
    const subject = `[Portfolio] Mesaj nou de la ${name}`;
    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #FAF7F3; border-radius: 16px; border: 1px solid rgba(0,0,0,0.08);">
        <h2 style="margin-top: 0; color: #111111; font-size: 20px; border-bottom: 1px solid rgba(0,0,0,0.08); padding-bottom: 12px;">
          Mesaj nou prin Portofoliu
        </h2>
        <div style="margin: 16px 0; padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06);">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #555555;"><strong>Nume:</strong> ${name}</p>
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #555555;"><strong>Email expeditor:</strong> <a href="mailto:${normalizedEmail}" style="color: #111111; font-weight: bold;">${normalizedEmail}</a></p>
          <p style="margin: 0; font-size: 14px; color: #555555;"><strong>Data:</strong> ${new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })}</p>
        </div>
        <div style="margin: 16px 0; padding: 16px; background: #ffffff; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06);">
          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #888888;">Mesaj:</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #111111; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #888888; text-align: center;">
          Răspunde direct la acest email pentru a-i scrie lui ${name} (${normalizedEmail}).
        </p>
      </div>
    `;
    const text = `Mesaj nou prin Portofoliu\n\nNume: ${name}\nEmail: ${normalizedEmail}\nData: ${new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })}\n\nMesaj:\n${message}`;

    // Try primary from address first
    let sendResult = await resend.emails.send({
      from: PRIMARY_FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: normalizedEmail,
      subject,
      html,
      text,
    });

    // If unverified domain error, retry with verified fallback
    if (sendResult.error) {
      console.warn("Primary from failed, trying fallback:", sendResult.error.message);
      sendResult = await resend.emails.send({
        from: FALLBACK_FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: normalizedEmail,
        subject,
        html,
        text,
      });
    }

    if (sendResult.error) {
      console.error("Resend delivery failed:", sendResult.error);
      return Response.json({ ok: false, error: "Failed to send email message." }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  }

  return Response.json({ ok: true }, { status: 200 });
}