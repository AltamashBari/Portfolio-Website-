import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FaqItem } from "@/components/motion/FaqItem";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-[var(--spacing-section)]">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Questions, answered.
          </h2>
        </Reveal>
        <div className="mt-14 max-w-3xl lg:mt-16">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.04}>
              <FaqItem question={faq.question} answer={faq.answer} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
