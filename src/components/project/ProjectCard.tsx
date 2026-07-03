import Link from "next/link";
import type { Project } from "@/data/projects";
import ImageFrame from "@/components/ui/ImageFrame";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      <ImageFrame
        src={project.cover}
        alt={`${project.title} 项目封面`}
        aspect="aspect-[4/3]"
      />
      <div className="mt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-ink group-hover:text-accent">
            {project.title}
          </h3>
          <span className="text-xs text-muted">{project.period}</span>
        </div>
        <p className="mt-1 text-sm text-muted">{project.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.keywords.map((k) => (
            <Tag key={k}>{k}</Tag>
          ))}
        </div>
        <span className="mt-4 inline-block text-xs tracking-[0.15em] text-accent">
          VIEW CASE →
        </span>
      </div>
    </Link>
  );
}
