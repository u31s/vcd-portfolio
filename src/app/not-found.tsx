import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageContainer className="py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-medium text-ink">页面不存在</h1>
      <p className="mt-4 text-sm text-muted">你访问的页面可能已被移动或删除。</p>
      <div className="mt-8">
        <Button href="/">返回首页</Button>
      </div>
    </PageContainer>
  );
}
