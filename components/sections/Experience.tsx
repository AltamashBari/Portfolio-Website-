import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="py-[var(--spacing-section)]">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow text-taupe">Experience / Career Timeline</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Trained inside real practice.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-brown/85">
            From landmark BIM delivery in Dubai to independent commissions across India.
          </p>
        </Reveal>

        <ol className="mt-14 lg:mt-20">
          {experience.map((item, i) => (
            <Reveal key={`${item.role}-${item.period}-${i}`} delay={i * 0.05}>
              <li className="group relative grid gap-3 overflow-hidden border-t border-stone/80 px-4 py-8 -mx-4 transition-colors duration-300 last:border-b hover:bg-sand/50 md:grid-cols-[7rem_1fr_1.6fr] md:gap-10 md:px-6 md:py-10 md:-mx-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-olive transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                />
                <div className="tabular text-sm text-olive transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                  {item.period}
                </div>
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                  <h3 className="font-display text-2xl text-ink md:text-3xl">{item.role}</h3>
                  <p className="mt-1.5 text-sm text-taupe">
                    {item.organisation}, {item.location}
                  </p>
                </div>
                <p className="max-w-2xl leading-relaxed text-brown/85 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 md:mt-0">
                  {item.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
