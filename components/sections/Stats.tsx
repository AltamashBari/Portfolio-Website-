import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-charcoal py-[var(--spacing-section)] text-canvas">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow text-canvas/50">Practice in numbers</p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.9rem)] font-medium leading-[1.1]">
            Built through practice. Measured in outcomes.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:mt-24 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.tag ?? stat.label} delay={i * 0.08}>
              <div className="group border-t border-canvas/20 pt-6 transition-colors duration-300 hover:border-olive-soft/70">
                <p className="tabular font-display text-[clamp(3rem,7vw,5.25rem)] font-medium leading-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  <CountUp value={Number(stat.value)} />
                  {stat.suffix ? <span className="text-olive-soft">{stat.suffix}</span> : null}
                </p>
                {stat.tag && (
                  <p className="label-eyebrow mt-5 text-olive-soft">{stat.tag}</p>
                )}
                <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-canvas/60">
                  {stat.description ?? stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
