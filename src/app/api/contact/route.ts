import { contactSchema } from "@/lib/schemas";
import { getResend } from "@/lib/resend";
import { getSupabase } from "@/lib/supabase";

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

  const supabase = getSupabase();
  const { error: insertError } = await supabase
    .from("contact_messages")
    .insert({ name, email, message });

  if (!insertError) {
    return Response.json({ ok: true }, { status: 200 });
  }

  console.error("Supabase insert failed", insertError);

  const resend = getResend();
  if (resend) {
    const { error: emailError } = await resend.emails.send({
      from: "ed0one <onboarding@resend.dev>",
      to: "hello@ed0one.dev",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (!emailError) {
      return Response.json({ ok: true }, { status: 200 });
    }

    console.error("Resend send failed", emailError);
    return Response.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }

  return Response.json({ ok: false, error: "Failed to save message." }, { status: 500 });
}