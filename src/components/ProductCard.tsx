import { Plus } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const INR_TO_USD = 83;

export const convertToUSD = (priceInINR: number) => {
  return (priceInINR / INR_TO_USD).toFixed(2); // example: ₹180 → $2.16
};


export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className=" overflow-hidden group  ">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
         ${convertToUSD(product.price)}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>

        {product.weight && (
          <p className="text-orange-600 font-semibold mb-2">{product.weight}</p>
        )}

        {product.quantity && (
          <p className="text-orange-600 font-semibold mb-2">{product.quantity} pieces</p>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
