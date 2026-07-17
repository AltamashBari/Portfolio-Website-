import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingRow } from "@/components/sections/FloatingRow";
import { getProjectsByWorkType } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected architecture and interior projects by Studio Sorrel, across homes, workplaces, hospitality, and public spaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const architectural = getProjectsByWorkType("Architectural");
  const interior = getProjectsByWorkType("Interior");
  const competition = getProjectsByWorkType("Competition");

  return (
    <>
      <section className="bg-charcoal pb-20 pt-40 text-canvas md:pb-28 md:pt-48">
        <Container>
          <Reveal>
            <p className="label-eyebrow text-canvas/60">Selected works</p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              Work
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-canvas/70">
              A cross-section of Altamash Bari&rsquo;s work, from a 300-bed hospital and an
              inter-state transit hub to award-winning residential towers and interior case
              studies, organised into architectural projects, interior design and design
              competition entries.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-[var(--spacing-section)]">
        <FloatingRow
          index={1}
          label="Architectural Projects"
          projects={architectural}
          direction="left"
          speed={34}
          priority
        />
        <FloatingRow
          index={2}
          label="Interior Design"
          projects={interior}
          direction="right"
          speed={30}
        />
        <FloatingRow
          index={3}
          label="Design Competition Entries"
          projects={competition}
          direction="left"
          speed={40}
        />
      </section>
    </>
  );
}
