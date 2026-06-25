export function PricingHeader() {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-5)] text-center">
      <h1
        className="text-[length:var(--text-5xl)] font-bold text-[var(--color-ink)] leading-tight max-w-[620px]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Simple and affordable pricing for FE developers
      </h1>
      <p
        className="text-[length:var(--text-xl)] font-normal text-[var(--color-ink-soft)]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Star building your best product today
      </p>
    </div>
  );
}