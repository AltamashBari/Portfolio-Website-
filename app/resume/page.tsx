import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PrintButton } from "@/components/ui/PrintButton";
import {
  capabilities,
  certifications,
  experience,
  profile,
  skillGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.positioning}`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      {/* Intro band — matches the projects index header */}
      <section className="resume-hero bg-ink pb-16 pt-40 text-canvas md:pb-20 md:pt-48">
        <Container>
          <Reveal>
            <p className="label-eyebrow text-canvas/60">Curriculum vitae</p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              Resume
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-canvas/70">
              {profile.positioning}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-canvas/80">
              <a href={`mailto:${profile.email}`} className="hover:text-olive-soft">
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneUAE.replace(/\s+/g, "")}`}
                className="hover:text-olive-soft"
              >
                {profile.phoneUAE}
              </a>
              <span>{profile.location}</span>
            </div>
            <div className="mt-10 print:hidden">
              <PrintButton />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Education */}
      <section className="py-[var(--spacing-section)]">
        <Container>
          <Reveal>
            <h2 className="label-eyebrow text-olive">Education</h2>
            <div className="mt-8 border-t border-stone/80 py-8">
              <h3 className="font-display text-2xl text-ink md:text-3xl">{profile.degree}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-brown/85">
                {profile.availability}.
              </p>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal className="mt-16">
            <h2 className="label-eyebrow text-olive">Experience</h2>
          </Reveal>
          <ol className="mt-8">
            {experience.map((item, i) => (
              <Reveal key={`${item.role}-${item.period}-${i}`} delay={i * 0.04}>
                <li className="grid gap-3 border-t border-stone/80 py-8 last:border-b md:grid-cols-[7rem_1fr] md:gap-12">
                  <div className="tabular text-sm text-olive">{item.period}</div>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{item.role}</h3>
                    <p className="mt-1.5 text-sm text-taupe">
                      {item.organisation}, {item.location}
                    </p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-brown/85">{item.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Expertise + Skills */}
          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="label-eyebrow text-olive">Expertise</h2>
                <ul className="mt-8">
                  {capabilities.map((c) => (
                    <li key={c.title} className="border-t border-stone/80 py-5 last:border-b">
                      <p className="text-ink">{c.title}</p>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-brown/80">
                        {c.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal>
                <h2 className="label-eyebrow text-olive">Skills</h2>
                <dl className="mt-8 space-y-8">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="border-t border-stone/80 pt-5">
                      <dt className="text-sm text-taupe">{group.label}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-brown/90">
                        {group.items.join(", ")}
                      </dd>
                    </div>
                  ))}
                </dl>

                <h2 className="label-eyebrow mt-14 text-olive">Certifications</h2>
                <ul className="mt-8">
                  {certifications.map((c) => (
                    <li
                      key={`${c.title}-${c.year}`}
                      className="border-t border-stone/80 py-4"
                    >
                      <p className="text-sm text-ink">{c.title}</p>
                      <p className="mt-0.5 text-sm text-taupe">
                        {c.organisation}, {c.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
