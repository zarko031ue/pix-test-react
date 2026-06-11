"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export interface PricingCardProps {
  tier: string;
  price: number;
  period?: "month" | "year";
  description?: string;
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
  onSelect?: () => void;
}

export function PricingCard({
  tier,
  price,
  period = "month",
  description,
  features,
  ctaLabel = "Get started",
  highlighted = false,
  onSelect,
}: PricingCardProps) {
  return (
    <Card
      elevated={highlighted}
      className={`w-[280px] flex flex-col ${highlighted ? "border-primary" : ""}`}
    >
      <CardHeader>
        <CardTitle>{tier}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-xs">
          <span className="text-xl font-bold text-text-primary">${price}</span>
          <span className="text-sm text-text-secondary">/ {period}</span>
        </div>
        <ul className="flex flex-col gap-sm mt-md text-base text-text-primary">
          {features.map((f, i) => (
            <li key={i}>✓ {f}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant={highlighted ? "primary" : "outline"} onClick={onSelect} className="w-full">
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
