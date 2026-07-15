"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { profile, socialLinks } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = ["Residential", "Commercial", "Hospitality", "Interior", "Other"];

const fieldClass =
  "mt-2 w-full rounded-[2px] border border-stone bg-canvas px-4 py-3 text-ink transition-colors focus:border-olive";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim(); // honeypot

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please tell me your name.";
    if (!email) nextErrors.email = "Please add an email so I can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email address looks incomplete.";
    if (!message) nextErrors.message = "A sentence or two about your project helps.";

    setErrors(nextErrors);
    setFormError(null);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message, company }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setFormError(
          payload?.error ?? "Something went wrong sending your message. Please email me directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setFormError("Something went wrong sending your message. Please email me directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-[var(--spacing-section)]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.01em]">
                Let&rsquo;s build something.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-brown/85">
                {profile.availability}. Tell me about the project, the site, and the timeline, and I
                will get back to you personally.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 space-y-8">
              <div>
                <p className="text-sm text-taupe">Email</p>
                <a href={`mailto:${profile.email}`} className="mt-1 block break-all text-lg text-ink hover:text-olive">
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-taupe">Phone</p>
                <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1">
                  <a href={`tel:${profile.phoneUAE.replace(/\s+/g, "")}`} className="text-lg text-ink hover:text-olive">
                    {profile.phoneUAE}
                  </a>
                  <a href={`tel:${profile.phoneIN.replace(/\s+/g, "")}`} className="text-lg text-ink hover:text-olive">
                    {profile.phoneIN}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm text-taupe">Based in</p>
                <p className="mt-1 text-lg text-ink">{profile.location}</p>
              </div>
              <div>
                <p className="text-sm text-taupe">Elsewhere</p>
                <ul className="mt-1 flex flex-wrap gap-5">
                  {socialLinks.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="text-lg text-ink hover:text-olive"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {status === "success" ? (
              <Reveal className="flex h-full min-h-64 flex-col justify-center border border-stone bg-sand/40 p-10">
                <div role="status" aria-live="polite">
                  <p className="font-display text-3xl text-ink">Thank you.</p>
                  <p className="mt-3 max-w-sm text-brown/85">
                    Your message is on its way. I reply to every enquiry personally, usually within a
                    couple of working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-olive underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} noValidate className="grid gap-6">
                  {/* Honeypot: hidden from real visitors, ignored by assistive tech, but bots tend to fill it. */}
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="name" className="text-sm text-brown">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-[#93392b]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm text-brown">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-[#93392b]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="projectType" className="text-sm text-brown">
                      Project type
                    </label>
                    <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm text-brown">
                      About your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${fieldClass} resize-y`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-[#93392b]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {formError && (
                    <p role="alert" aria-live="assertive" className="text-sm text-[#93392b]">
                      {formError}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2.5 rounded-[2px] bg-ink px-7 py-3.5 text-sm text-canvas transition-colors duration-300 hover:bg-olive disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending" : "Send enquiry"}
                    </button>
                    <p className="text-sm text-taupe">
                      Prefer email?{" "}
                      <a href={`mailto:${profile.email}`} className="text-ink underline underline-offset-4 hover:text-olive">
                        Write to me directly
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
