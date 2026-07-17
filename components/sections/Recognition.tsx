import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { certifications, profile } from "@/lib/content";

export function Recognition() {
  return (
    <section className="bg-sand py-[var(--spacing-section)]">
      <Container>
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Certified, and always learning.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <blockquote className="font-display text-[1.6rem] leading-snug text-ink md:text-[2.1rem]">
                Worked on Monte South, a winner of Best Residential High-Rise Development at the
                Asia Pacific Property Awards, inside one of India&rsquo;s most prolific practices.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brown">
                That grounding carried into Dubai, where he now leads architectural and façade BIM
                delivery on landmark developments including the Sheikh Zayed Museum, Expo City&rsquo;s
                Sky and Mangrove Residences, and Bristol Towers. His practice spans institutional and
                transit competition work, award-winning residential towers, and interior architecture,
                most recently a full residential fit-out in Qatar.
              </p>
              <p className="mt-8 border-t border-stone/80 pt-6 text-brown">{profile.degree}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal>
              <h3 className="text-sm font-medium text-brown">Certifications &amp; workshops</h3>
              <ul className="mt-8">
                {certifications.map((c) => (
                  <li
                    key={`${c.title}-${c.year}`}
                    className="border-t border-stone/80 py-5 first:border-t-0 first:pt-0"
                  >
                    <p className="text-ink">{c.title}</p>
                    <p className="mt-1 text-sm text-taupe">
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
  );
}
