import { Plus } from "lucide-react";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const INR_TO_USD = 83;

export const convertToUSD = (priceInINR: number) => {
  return (priceInINR / INR_TO_USD).toFixed(2);
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div
      className="
        group rounded-xl border border-white/20 bg-white/5 
        backdrop-blur-md shadow-lg hover:shadow-2xl
        transition-all duration-300 hover:-translate-y-2 
        p-4 w-[280px] mx-auto
      "
    >
      {/* Product Image */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
          ${convertToUSD(product.price)}
        </div>
      </div>

      {/* Content wrapper with narrow width */}
      <div className="mt-4 space-y-1 w-[230px] mx-auto text-center">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition">
          {product.name}
        </h3>

        {product.weight && (
          <p className="text-orange-600 text-sm font-semibold">{product.weight}</p>
        )}

        {product.quantity && (
          <p className="text-orange-600 text-sm font-semibold">
            {product.quantity} pieces
          </p>
        )}

        <p className="text-gray-600 text-xs line-clamp-2 leading-snug">
          {product.description}
        </p>
      </div>

      {/* Compact Add To Cart button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => onAddToCart(product)}
          className="
            px-5 py-2 rounded-lg bg-gradient-to-r 
            from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 
            text-white font-semibold text-sm flex items-center space-x-2 
            transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer
          "
        >
          <Plus className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
