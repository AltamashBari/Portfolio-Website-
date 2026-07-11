import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-ink py-[var(--spacing-section)] text-canvas">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.9rem)] font-medium leading-[1.1]">
            A fast start, with range you can measure.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:mt-24 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-t border-canvas/20 pt-6">
                <p className="tabular font-display text-[clamp(3rem,7vw,5.25rem)] font-medium leading-none">
                  <CountUp value={Number(stat.value)} />
                  {stat.suffix ? <span className="text-olive-soft">{stat.suffix}</span> : null}
                </p>
                <p className="mt-5 max-w-[20ch] text-sm leading-relaxed text-canvas/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
