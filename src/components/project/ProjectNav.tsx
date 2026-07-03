import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectNav({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <nav
      aria-label="项目导航"
      className="mt-20 grid grid-cols-2 border-t border-line pt-8"
    >
      <div>
        {prev && (
          <Link href={`/work/${prev.slug}`} className="group block">
            <span className="text-xs tracking-[0.15em] text-muted">
              ← PREVIOUS
            </span>
            <p className="mt-1 text-sm text-ink group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link href={`/work/${next.slug}`} className="group block">
            <span className="text-xs tracking-[0.15em] text-muted">
              NEXT →
            </span>
            <p className="mt-1 text-sm text-ink group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
