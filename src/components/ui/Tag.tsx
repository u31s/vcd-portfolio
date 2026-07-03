export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-line px-3 py-1 text-xs tracking-wide text-muted">
      {children}
    </span>
  );
}
