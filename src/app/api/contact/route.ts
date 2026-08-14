import { contactSchema } from "@/lib/schemas";
import { getResend } from "@/lib/resend";
import { getSupabase } from "@/lib/supabase";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "ed0one <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@ed0one.dev";

const MIN_SENDER_INTERVAL_MS = 60_000;
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

  let insertError: unknown = null;
  try {
    const supabase = getSupabase();
    const result = await supabase
      .from("contact_messages")
      .insert({ name, email: normalizedEmail, message });
    insertError = result.error;
  } catch (err) {
    console.error("Supabase insert failed", errorMessage(err));
  }

  if (!insertError) {
    return Response.json({ ok: true }, { status: 200 });
  }

  console.error("Supabase insert failed", errorMessage(insertError));

  let resend: ReturnType<typeof getResend> = null;
  try {
    resend = getResend();
  } catch (err) {
    console.error("Resend client init failed", errorMessage(err));
  }

  if (resend) {
    try {
      const { error: emailError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: normalizedEmail,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${normalizedEmail}\n\n${message}`,
      });

      if (!emailError) {
        return Response.json({ ok: true }, { status: 200 });
      }

      console.error("Resend send failed", errorMessage(emailError));
    } catch (err) {
      console.error("Resend send failed", errorMessage(err));
    }
    return Response.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }

  return Response.json({ ok: false, error: "Failed to save message." }, { status: 500 });
}