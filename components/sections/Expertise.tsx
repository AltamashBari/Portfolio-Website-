import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { capabilities } from "@/lib/content";

export function Expertise() {
  return (
    <section id="expertise" className="bg-sand py-[var(--spacing-section)]">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow text-olive">Expertise</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            From first sketch to construction detail.
          </h2>
        </Reveal>

        <div className="mt-14 lg:mt-20">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={i * 0.04}>
              <div className="group grid grid-cols-1 gap-2 border-t border-stone/80 py-8 last:border-b md:grid-cols-[4rem_1fr_1.5fr] md:items-baseline md:gap-8 md:py-9">
                <span className="tabular text-sm text-olive">0{i + 1}</span>
                <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-olive md:text-[1.9rem]">
                  {capability.title}
                </h3>
                <p className="max-w-md leading-relaxed text-brown/85">{capability.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
