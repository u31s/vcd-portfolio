import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import ImageFrame from "@/components/ui/ImageFrame";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProcessSteps from "@/components/project/ProcessSteps";
import ProjectNav from "@/components/project/ProjectNav";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <header className="border-b border-line">
        <PageContainer className="py-16 md:py-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              {project.titleEn}
            </p>
            <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80">
              {project.summary}
            </p>
            <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Type
                </dt>
                <dd className="mt-1 text-ink">{project.category}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Period
                </dt>
                <dd className="mt-1 text-ink">{project.period}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Role
                </dt>
                <dd className="mt-1 text-ink">{project.role}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.keywords.map((k) => (
                <Tag key={k}>{k}</Tag>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-12">
            <ImageFrame
              src={project.cover}
              alt={`${project.title} 项目封面大图`}
              aspect="aspect-[16/9]"
            />
          </FadeIn>
        </PageContainer>
      </header>

      <section className="border-b border-line py-16 md:py-24">
        <PageContainer className="grid gap-14 md:grid-cols-2">
          <FadeIn>
            <SectionHeading en="Project Overview" zh="项目背景" />
            <p className="text-sm leading-relaxed text-ink/80">
              {project.overview}
            </p>
            <div className="mt-10">
              <SectionHeading en="Challenge / Goal" zh="目标与挑战" />
              <p className="text-sm leading-relaxed text-ink/80">
                {project.challenge}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading en="My Role" zh="我的角色" />
            <ul className="space-y-3">
              {project.myRole.map((r) => (
                <li
                  key={r}
                  className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink/80"
                >
                  {r}
                </li>
              ))}
            </ul>
          </FadeIn>
        </PageContainer>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <PageContainer>
          <SectionHeading en="Process" zh="项目过程" />
          <ProcessSteps steps={project.process} />
        </PageContainer>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <PageContainer className="grid gap-14 md:grid-cols-2">
          <FadeIn>
            <SectionHeading en="Deliverables" zh="项目输出" />
            <ul className="space-y-2">
              {project.deliverables.map((d) => (
                <li key={d} className="text-sm leading-relaxed text-ink/80">
                  — {d}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading en="Reflection" zh="项目收获" />
            <ul className="space-y-4">
              {project.reflection.map((r) => (
                <li key={r} className="text-sm leading-relaxed text-muted">
                  {r}
                </li>
              ))}
            </ul>
          </FadeIn>
        </PageContainer>
      </section>

      <section className="py-16 md:py-24">
        <PageContainer>
          <SectionHeading en="Gallery" zh="项目图片" />
          <ProjectGallery blocks={project.gallery} />
          <ProjectNav prev={prev} next={next} />
        </PageContainer>
      </section>
    </article>
  );
}
