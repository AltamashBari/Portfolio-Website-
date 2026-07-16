import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/types";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="More projects" className="border-t border-stone bg-sand">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-stone md:grid-cols-2 md:divide-x md:divide-y-0">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-3 py-14 md:pr-12"
          >
            <span className="flex items-center gap-2 text-sm text-taupe">
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-1 group-hover:scale-125"
              />{" "}
              Previous
            </span>
            <span className="font-display text-2xl text-ink transition-colors group-hover:text-olive md:text-3xl">
              {prev.title}
            </span>
          </Link>

          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-3 py-14 md:items-end md:pl-12"
          >
            <span className="flex items-center gap-2 text-sm text-taupe">
              Next{" "}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-125"
              />
            </span>
            <span className="font-display text-2xl text-ink transition-colors group-hover:text-olive md:text-right md:text-3xl">
              {next.title}
            </span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
