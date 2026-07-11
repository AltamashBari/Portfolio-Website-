import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="py-[var(--spacing-section)]">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Trained inside real practice.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-brown/85">
            From a landmark Mumbai firm to independent commissions across Uttar Pradesh.
          </p>
        </Reveal>

        <ol className="mt-14 lg:mt-20">
          {experience.map((item, i) => (
            <Reveal key={`${item.role}-${item.period}-${i}`} delay={i * 0.05}>
              <li className="grid gap-3 border-t border-stone/80 py-8 last:border-b md:grid-cols-[7rem_1fr] md:gap-12 md:py-10">
                <div className="tabular text-sm text-olive">{item.period}</div>
                <div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">{item.role}</h3>
                  <p className="mt-1.5 text-sm text-taupe">
                    {item.organisation}, {item.location}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-brown/85">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
