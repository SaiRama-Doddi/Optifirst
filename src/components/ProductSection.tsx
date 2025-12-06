import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductSection({
  id,
  title,
  products,
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section id={id} className="relative py-16 overflow-hidden">
      {/* Animated Hen Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gray-50 bg-repeat opacity-30"
        style={{
          backgroundImage: "url('/hen-pattern.jpg')",
          backgroundSize: "160px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
