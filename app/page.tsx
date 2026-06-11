import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-md p-lg">
      <h1 className="text-xl font-bold text-text-primary">Pix Test React</h1>
      <Button variant="primary">Click me</Button>
      <ProductCard
        title="Sample Product"
        price={29.99}
        imageUrl="https://placehold.co/300x200"
      />
    </main>
  );
}
