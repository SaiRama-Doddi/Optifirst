import { useState } from "react";
import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";
import type { CartItem } from "../types/product";

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export default function Header({ cartItems, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");



  const totalItems = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-9xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center text-sm bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="flex items-center gap-4">
          <a   href="tel:+0757612525" className="flex items-center gap-2 hover:text-yellow-400">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">0 757 612 525</span>
          </a>
          <a href="mailto:info@optifirst.co.tz" className="flex items-center gap-2 hover:text-yellow-400">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@optifirst.co.tz</span>
          </a>
        </div>
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
              href="#home" onClick={(e) => {
    e.preventDefault();               // stop default jump
    setActiveLink("home");            // set active menu
    window.scrollTo({                 // scroll to top smoothly
      top: 0,
      behavior: "smooth",
    });
  }} 
               className={
      activeLink === "home"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    } // Default Active
            >
              Home
            </a>
            <a href="#whole-chicken"
             onClick={() => setActiveLink("whole-chicken")}
            
            className={
      activeLink === "whole-chicken"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }>
              Whole Chicken
            </a>
            <a href="#cuts"
             onClick={() => setActiveLink("cuts")}
            
           className={
      activeLink === "cuts"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }>
              Cuts
            </a>
            <a href="#offals" 
             onClick={() => setActiveLink("offals")}
            
            className={
      activeLink === "offals"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }>
              Offals
            </a>
            <a href="#eggs" 
             onClick={() => setActiveLink("eggs")}
           className={
      activeLink === "eggs"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }
            >
              Eggs
            </a>
            <a href="#about"
             onClick={() => setActiveLink("about")}
           className={
      activeLink === "about"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }>
              About Us
            </a>
            <a href="#contact"
            onClick={() => setActiveLink("contact")}
           className={
      activeLink === "contact"
        ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600 transition"
    }>
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
              className={activeLink === "home" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("home");
      setMenuOpen(false);
  }}
            
            >
              Home
            </a>

            <a href="#whole-chicken" 
            
          className={activeLink === "whole-chicken" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("whole-chicken");
      setMenuOpen(false);
  }}>
              Whole Chicken
            </a>

            <a href="#cuts"
            
           className={activeLink === "cuts" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("cuts");
      setMenuOpen(false);
  }}>
              Cuts
            </a>

            <a href="#offals" 
            className={activeLink === "offals" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("offals");
      setMenuOpen(false);
  }}>
              Offals
            </a>

            <a href="#eggs"
           className={activeLink === "eggs" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("eggs");
      setMenuOpen(false);
  }}>
              Eggs
            </a>

            <a href="#about"
            className={activeLink === "about" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("about");
      setMenuOpen(false);
  }}>
              About Us
            </a>

            <a href="#contact"
             className={activeLink === "contact" 
      ? "px-6 py-2 text-orange-600 font-semibold border-b border-orange-600"
      : "px-6 py-2 text-gray-700 hover:bg-gray-100"}
  onClick={() => { 
      setActiveLink("contact");
      setMenuOpen(false);
  }}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
