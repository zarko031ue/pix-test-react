import { PricingHeader } from "./PricingHeader";
import { PricingCard } from "./PricingCard";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Great for trying out Frames X component and templates.",
    featured: false,
    features: [
      "Design Guidelines",
      "10 Web Components",
      "5 Web Templates",
      "Component Properties",
      "Advanced Security",
    ],
  },
  {
    name: "Professional",
    price: "$20",
    description: "Best for professional freelancers and small teams.",
    featured: true,
    features: [
      "Everything in Free",
      "20 Web Components",
      "15 Web Templates",
      "Variants & Properties",
      "Enhanced Security",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Best for growing large company or enterprise design team.",
    featured: false,
    features: [
      "Design System Foundation",
      "50 Web Components",
      "25 Web Templates",
      "Variants & Properties",
      "Priority Security",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center p-[var(--spacing-6)]">
      <div className="w-full max-w-[1480px] mx-auto flex flex-col gap-[var(--spacing-16)] py-[var(--spacing-14)] px-[var(--spacing-6)] md:px-[var(--spacing-14)]">
        <PricingHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-6)]">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}