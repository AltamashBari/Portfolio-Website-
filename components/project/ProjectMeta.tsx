import type { ProjectSpec } from "@/lib/types";

export function ProjectMeta({ specs }: { specs: ProjectSpec[] }) {
  return (
    <dl className="divide-y divide-stone/80 border-t border-stone/80">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-baseline justify-between gap-6 py-4">
          <dt className="text-sm text-taupe">{spec.label}</dt>
          <dd className="text-right text-ink">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
