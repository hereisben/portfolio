import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, email, message, interest } = body ?? {};

    if (!name || !email || !message || !interest) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return Response.json(
        { ok: false, error: "CONTACT_TO_EMAIL is missing in env" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Ben Nguyen <hi@hereisben.dev>",
      to: "hi.imben.nguyen@gmail.com",
      subject: `[Portfolio] ${interest ?? "Message"} - ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
    });

    if (error) {
      console.log("RESEND ERROR:", error);
      return Response.json({ ok: false, error }, { status: 500 });
    }

    return Response.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    console.log("CONTACT API CRASH:", err);
    return Response.json({ ok: false, error: "Bad Request" }, { status: 500 });
  }
}
