import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/project/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "视觉传达设计作品项目：品牌视觉、包装设计、文创 IP 与项目执行案例。",
};

export default function WorkPage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Work</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
          Selected Projects
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          每个项目都是一个完整的 case study：从需求理解、视觉方向到反馈修改与落地交付。
        </p>
      </FadeIn>
      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
}
