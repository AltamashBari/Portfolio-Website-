import { NextResponse } from "next/server";
import { profile } from "@/lib/content";

// Route Handlers run on Vercel as serverless functions — no extra config needed.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
  company?: string; // honeypot field, must stay empty
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const company = String(body.company ?? "").trim();

  // Honeypot: real visitors never fill this hidden field. Pretend success so
  // bots don't learn anything, but skip actually sending an email.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in all required fields with a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet — please email directly instead." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  // Defaults to Resend's shared test sender, which works with zero setup but
  // only delivers to the Resend account owner's own inbox. Verify a domain in
  // Resend and set CONTACT_FROM_EMAIL to send from your own address in production.
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${projectType || "Not specified"}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Contact form: Resend API error", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again or email directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
