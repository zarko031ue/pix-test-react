import { PriceTag } from "./PriceTag";
import { CtaButton } from "./CtaButton";
import { FeatureList } from "./FeatureList";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  featured: boolean;
  features: string[];
}

export function PricingCard({ name, price, description, featured, features }: PricingCardProps) {
  return (
    <article
      className={`flex flex-col gap-[var(--spacing-8)] bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-[var(--spacing-6)] ${
        featured
          ? "border-2 border-[var(--color-brand)]"
          : "border border-[var(--color-border)]"
      }`}
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex flex-col gap-[var(--spacing-4)]">
        <span
          className={`text-[length:var(--text-xl)] font-semibold ${
            featured ? "text-[var(--color-brand)]" : "text-[var(--color-ink-soft)]"
          }`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {name}
        </span>
        <PriceTag price={price} />
        <p
          className="text-[length:var(--text-lg)] font-normal text-[var(--color-ink-soft)]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {description}
        </p>
        <CtaButton featured={featured} />
      </div>
      <div className="border-t border-dashed border-[var(--color-border)]" />
      <FeatureList features={features} />
    </article>
  );
}