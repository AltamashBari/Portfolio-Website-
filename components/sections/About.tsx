import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MaskedImage } from "@/components/motion/MaskedImage";
import { profile, skillGroups } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-[var(--spacing-section)]">
      <Container>
        <Reveal>
          <h2 className="max-w-[24ch] text-balance font-display text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.01em]">
            I read architecture with a curious lens, and design to evoke emotion, spark curiosity,
            and connect people.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-start gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <MaskedImage
              src="/portfolio/altamash.jpg"
              alt="Portrait of Altamash Bari"
              width={822}
              height={1029}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full"
              imgClassName="h-full w-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-brown">
              <p>{profile.intro}</p>
              <p>
                He treats design as a way to evoke emotion, spark curiosity, and connect people. The
                method rarely changes: understand the place, strip away the noise, and let one clear
                idea carry the building.
              </p>
            </div>

            <p className="mt-8 font-display text-3xl italic text-olive">{profile.motto}</p>

            <dl className="mt-10 grid gap-8 border-t border-stone pt-8 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm text-taupe">{group.label}</dt>
                  <dd className="mt-2 space-y-1 text-sm text-brown/90">
                    {group.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
