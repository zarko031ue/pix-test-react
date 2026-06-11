"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  rating?: number;
  inStock?: boolean;
  onAddToCart?: () => void;
}

export function ProductCard({
  title,
  price,
  imageUrl,
  rating = 0,
  inStock = true,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card elevated className="flex flex-col gap-sm w-[280px]">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {!inStock ? <Badge variant="danger">Out</Badge> : null}
      </div>
      <div className="flex items-center justify-between text-text-secondary">
        <span>★ {rating.toFixed(1)}</span>
        <span className="text-text-primary font-bold">${price.toFixed(2)}</span>
      </div>
      <Button onClick={onAddToCart} disabled={!inStock}>
        {inStock ? "Add to Cart" : "Out of Stock"}
      </Button>
    </Card>
  );
}
