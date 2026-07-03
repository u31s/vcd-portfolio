import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import PageContainer from "@/components/layout/PageContainer";
import { aiWorkflow } from "@/data/aiWorkflow";

export default function AiPreview() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <PageContainer>
        <SectionHeading en="AI-assisted Workflow" zh="AI 辅助工作流" />
        <FadeIn>
          <p className="max-w-2xl text-lg leading-relaxed text-ink">
            {aiWorkflow.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {aiWorkflow.intro}
          </p>
          <div className="mt-8">
            <Button href="/ai-workflow" variant="ghost">
              See how I work with AI →
            </Button>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  );
}
