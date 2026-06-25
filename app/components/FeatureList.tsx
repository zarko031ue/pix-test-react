import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="flex flex-col gap-[var(--spacing-5)]">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-[var(--spacing-3)]">
          <span className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-xs)] bg-[var(--color-neutral-50)] flex-shrink-0">
            <Check size={16} color="var(--color-success)" strokeWidth={2.5} />
          </span>
          <span
            className="text-[length:var(--text-lg)] font-medium text-[var(--color-ink-soft)]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}