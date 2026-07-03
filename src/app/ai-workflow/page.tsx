import type { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { aiWorkflow } from "@/data/aiWorkflow";

export const metadata: Metadata = {
  title: "AI Workflow",
  description:
    "AI 辅助设计工作流：调研整理、视觉参考、文案优化与网站搭建。AI 提高效率，设计判断由人完成。",
};

export default function AiWorkflowPage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          AI Workflow
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
          {aiWorkflow.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
          {aiWorkflow.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {aiWorkflow.intro}
        </p>
      </FadeIn>

      <div className="mt-20 space-y-0">
        {aiWorkflow.sections.map((s, i) => (
          <FadeIn key={s.title}>
            <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[80px_240px_1fr] md:gap-8">
              <span className="text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-medium text-ink">{s.title}</h2>
                <p className="mt-1 text-xs tracking-[0.15em] text-muted">
                  {s.zh}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <Button href="/work/ai-visual-exploration" variant="secondary">
          View AI-assisted Exploration Project →
        </Button>
      </div>
    </PageContainer>
  );
}
