export default function ProcessSteps({
  steps,
}: {
  steps: { step: string; desc: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.step} className="border-t border-line pt-4">
          <span className="text-xs tracking-[0.2em] text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h4 className="mt-2 text-base font-medium text-ink">{s.step}</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
