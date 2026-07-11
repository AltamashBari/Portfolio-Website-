import Link from "next/link";
import Image from "next/image";
import { TiltFrame } from "@/components/motion/TiltFrame";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  /** Tailwind aspect utility for the image frame, e.g. "aspect-[4/5]". */
  aspectClass?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  aspectClass = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className={`group block ${className}`}>
      <TiltFrame className={`${aspectClass} bg-sand`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.06]"
        />
      </TiltFrame>

      <div className="mt-5 flex items-baseline justify-between gap-6">
        <h3 className="font-display text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-olive md:text-[1.7rem]">
          {project.title}
        </h3>
        <span className="tabular shrink-0 text-sm text-taupe">{project.year}</span>
      </div>

      <div className="mt-1 flex items-center justify-between gap-4">
        <p className="text-sm text-brown/80">
          {project.category} &middot; {project.location}
        </p>
        <span className="label-eyebrow shrink-0 text-[0.62rem] text-taupe">{project.status}</span>
      </div>
    </Link>
  );
}
