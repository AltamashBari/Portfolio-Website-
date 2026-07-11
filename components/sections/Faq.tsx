import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
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
              <details className="group border-t border-stone/80 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-xl text-ink md:text-2xl">{faq.question}</h3>
                  <Plus
                    size={20}
                    className="shrink-0 text-olive transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-brown/85">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
