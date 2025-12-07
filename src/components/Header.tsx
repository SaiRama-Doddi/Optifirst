import { useState } from "react";
import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";
import type { CartItem } from "../types/product";

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export default function Header({ cartItems, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-9xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-yellow-400">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+123 456 7890</span>
          </a>
          <a href="mailto:info@optifirst.co.tz" className="flex items-center gap-2 hover:text-yellow-400">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@optifirst.co.tz</span>
          </a>
        </div>

        <div className="text-xs sm:text-sm">Free Delivery on Orders Above $50</div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased Height */}
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-30 h-28 rounded-full object-cover" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-lg italic">
            <a
              href="#home"
              className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1" // Default Active
            >
              Home
            </a>
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
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col py-4 space-y-2">
            
            <a
              href="#home"
              className="px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a href="#whole-chicken" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Whole Chicken
            </a>

            <a href="#cuts" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Cuts
            </a>

            <a href="#offals" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Offals
            </a>

            <a href="#eggs" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Eggs
            </a>

            <a href="#about" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              About Us
            </a>

            <a href="#contact" className="px-6 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
