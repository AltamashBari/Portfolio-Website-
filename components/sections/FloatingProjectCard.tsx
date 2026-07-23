import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/types";

interface FloatingProjectCardProps {
  project: Project;
  priority?: boolean;
  /**
   * Enables the card image -> case study hero shared-element transition
   * (View Transitions API). Only ever pass this for a single rendered
   * instance of a given project per page - FloatingRow's looping marquee
   * renders each card twice for a seamless loop, so it only forwards this
   * for the first (non-duplicated) copy to keep view-transition-name
   * unique document-wide, as the spec requires.
   */
  viewTransitionName?: string;
}

/**
 * Compact card used inside a FloatingRow marquee. Same visual language as
 * ProjectCard (font-display title, label-eyebrow meta) at a fixed width so
 * rows of cards drift and loop predictably. Title, year, location, category
 * and the "View Project" cue are always visible - never hover-gated - so
 * keyboard and touch users get full information without a hover state.
 */
export function FloatingProjectCard({
  project,
  priority = false,
  viewTransitionName,
}: FloatingProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block w-[78vw] shrink-0 select-none sm:w-[320px] lg:w-[380px]"
      draggable={false}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-sand transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:shadow-[0_20px_44px_-18px_rgba(32,29,24,0.4)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_20px_44px_-18px_rgba(32,29,24,0.4)]"
        style={viewTransitionName ? ({ viewTransitionName } as React.CSSProperties) : undefined}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 320px, 380px"
          priority={priority}
          draggable={false}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl leading-tight text-ink transition-colors duration-300 group-hover:text-olive">
          {project.title}
        </h3>
        <span className="tabular shrink-0 text-sm text-taupe">{project.year}</span>
      </div>

      <div className="mt-1 flex items-center justify-between gap-4">
        <p className="truncate text-sm text-brown/80">
          {project.category}
          {project.location ? <>&nbsp;&middot; {project.location}</> : null}
        </p>
        <span className="label-eyebrow flex shrink-0 items-center gap-1 text-[0.6rem] text-taupe transition-colors duration-300 group-hover:text-olive">
          View Project
          <ArrowRight
            size={12}
            weight="bold"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-125"
          />
        </span>
      </div>
    </Link>
  );
}
