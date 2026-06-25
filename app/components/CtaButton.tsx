interface CtaButtonProps {
  featured: boolean;
}

export function CtaButton({ featured }: CtaButtonProps) {
  return (
    <button
      className={`w-full h-[var(--spacing-11)] rounded-[var(--radius-sm)] text-[length:var(--text-lg)] font-semibold text-[var(--color-white)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity hover:opacity-90 ${
        featured
          ? "bg-[var(--color-brand)] focus:ring-[var(--color-brand)]"
          : "bg-[var(--color-ink)] focus:ring-[var(--color-ink)]"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      Get Started
    </button>
  );
}