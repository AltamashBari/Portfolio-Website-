import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

/** Asymmetric magazine grid - varied spans, aspects, and vertical offsets. */
const layout = [
  { span: "lg:col-span-7", aspect: "aspect-[16/11]", offset: "" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", offset: "lg:mt-28" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", offset: "" },
  { span: "lg:col-span-7", aspect: "aspect-[16/11]", offset: "lg:mt-28" },
  { span: "lg:col-span-6", aspect: "aspect-[3/2]", offset: "" },
  { span: "lg:col-span-6", aspect: "aspect-[3/2]", offset: "lg:mt-28" },
];

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

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
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-y-8">
          {projects.map((project, i) => {
            const spec = layout[i % layout.length];
            return (
              <Reveal
                key={project.slug}
                delay={i % 2 === 1 ? 0.08 : 0}
                className={`${spec.span} ${spec.offset}`}
              >
                <ProjectCard
                  project={project}
                  aspectClass={spec.aspect}
                  priority={i === 0}
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                  }
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
