import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingRow } from "@/components/sections/FloatingRow";
import { getFeaturedProjects } from "@/lib/projects";

/**
 * Homepage "Selected work" teaser: the same floating-row gallery used on
 * /projects, scoped to featured projects. The Interior Design row only
 * appears once a featured interior project exists, so no empty row shows.
 */
export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const architectural = featured.filter((p) => p.workType === "Architectural");
  const interior = featured.filter((p) => p.workType === "Interior");
  const competition = featured.filter((p) => p.workType === "Competition");

  return (
    <section id="work" className="bg-canvas py-[var(--spacing-section)]">
      <Container>
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-stone pt-8">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-none tracking-[-0.01em]">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-olive"
          >
            All projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-125"
            />
          </Link>
        </Reveal>
      </Container>

      <div className="mt-14 lg:mt-20">
        <FloatingRow
          label="Architectural Projects"
          projects={architectural}
          direction="left"
          speed={32}
          priority
          numbered={false}
        />
        {interior.length > 0 && (
          <FloatingRow
            label="Interior Design"
            projects={interior}
            direction="right"
            speed={28}
            numbered={false}
          />
        )}
        <FloatingRow
          label="Design Competition Entries"
          projects={competition}
          direction="left"
          speed={38}
          numbered={false}
        />
      </div>
    </section>
  );
}
