import { ShoppingCart, Menu,Phone,Mail } from 'lucide-react';
import type { CartItem } from '../types/product';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export default function Header({ cartItems, onCartClick }: HeaderProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">


  <div className="max-w-9xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex justify-between items-center text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+123 456 7890</span>
            </a>
            <a href="mailto:info@optifirst.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@optifirst.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Free Delivery on Orders Above $50
          </div>
        </div>
    



        
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            
            <div>
              <img
              src="/logo.png"
              alt="Logo"
              className="w-25 h-25 rounded-full  object-cover "
            />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#whole-chicken" className="text-gray-700 hover:text-orange-600 transition">
              Whole Chicken
            </a>
            <a href="#cuts" className="text-gray-700 hover:text-orange-600 transition">
              Cuts
            </a>
            <a href="#offals" className="text-gray-700 hover:text-orange-600 transition">
              Offals
            </a>
            <a href="#eggs" className="text-gray-700 hover:text-orange-600 transition">
              Eggs
            </a>
             <a href="#about" className="text-gray-700 hover:text-orange-600 transition">
              About us
            </a>
             <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
