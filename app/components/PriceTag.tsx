interface PriceTagProps {
  price: string;
}

export function PriceTag({ price }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-[var(--spacing-1)]">
      <span
        className="text-[length:var(--text-4xl)] font-bold text-[var(--color-ink-soft)]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {price}
      </span>
      <span
        className="text-[length:var(--text-lg)] font-normal text-[var(--color-ink-soft)]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        /per month
      </span>
    </div>
  );
}