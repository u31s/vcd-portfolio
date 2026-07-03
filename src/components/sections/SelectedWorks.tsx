import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedWorks() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="border-b border-line py-16 md:py-24">
      <PageContainer>
        <SectionHeading en="Selected Works" zh="精选项目" />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/work" variant="secondary">
            View All Works
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
