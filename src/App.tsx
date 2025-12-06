import { useState } from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import ProductSection from "./components/ProductSection";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal, { type UserDetails } from "./components/CheckoutModal";
import { products } from "./types/product";
import type { Product, CartItem } from "./types/product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const wholeChickenProducts = products.filter(
    (p) => p.category === "whole-chicken"
  );
  const cutsProducts = products.filter((p) => p.category === "cuts");
  const offalsProducts = products.filter((p) => p.category === "offals");
  const eggsProducts = products.filter((p) => p.category === "eggs");

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, cartQuantity: 1 }];
    });
  };

  const INR_TO_USD = 83;

  const convertToUSD = (priceInINR: number) => {
    return (priceInINR / INR_TO_USD).toFixed(2); // example: ₹180 → $2.16
  };

  const updateQuantity = (productId: string, change: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === productId
            ? { ...item, cartQuantity: Math.max(1, item.cartQuantity + change) }
            : item
        )
        .filter((item) => item.cartQuantity > 0);
    });
  };

  const handleCheckout = (userDetails: UserDetails) => {
    const orderMessage = generateWhatsAppMessage(userDetails, cartItems);
    const whatsappUrl = `https://wa.me/255748503492?text=${encodeURIComponent(
      orderMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  const generateWhatsAppMessage = (
    userDetails: UserDetails,
    items: CartItem[]
  ) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );

    let message = `*New Order from OptiFirst*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${userDetails.name}\n`;
    message += `Phone: ${userDetails.phone}\n`;
    message += `Address: ${userDetails.address}\n\n`;
    message += `*Order Items:*\n`;

    items.forEach((item) => {
      const weight = item.weight || `${item.quantity} pieces`;
      message += `• ${item.name} (${weight}) x ${item.cartQuantity} = ₹${(
        Number(convertToUSD(item.price)) * item.cartQuantity
      ).toFixed(2)}\n`;
    });

    message += `\n*Total Amount: ₹${total.toFixed(2)}*`;
    return message;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <HeroCarousel />

      <ProductSection
        id="whole-chicken"
        title="Whole Chicken"
        products={wholeChickenProducts}
        onAddToCart={addToCart}
      />

      <ProductSection
        id="cuts"
        title="Chicken Cuts"
        products={cutsProducts}
        onAddToCart={addToCart}
      />

      <ProductSection
        id="offals"
        title="Offals"
        products={offalsProducts}
        onAddToCart={addToCart}
      />

      <ProductSection
        id="eggs"
        title="Farm Fresh Eggs"
        products={eggsProducts}
        onAddToCart={addToCart}
      />
      <About />
      <Contact />
      <footer className="bg-gray-900 text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
              />

              <p className="text-gray-400 text-sm leading-relaxed">
                Premium quality chicken & eggs delivered fresh to your doorstep.
                <br />
                Hygienic • Fresh • Trusted.
              </p>

              {/* Social Icons */}
         

<div className="flex space-x-4 mt-5">
  {[
    {
      href: "https://facebook.com",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      href: "https://www.instagram.com/optifirsttz?igsh=MWN2dHY2emp6Y3Q0MQ%3D%3D",
      icon: Instagram,
      color: "hover:bg-pink-600",
    },
    {
      href: "https://www.linkedin.com/company/optifirst-tz-limited/",
      icon: Linkedin,
      color: "hover:bg-green-500",
    },
  ].map((s, index) => (
    <a
      key={index}
      href={s.href}
      target="_blank"
      className={`w-11 h-11 flex items-center justify-center bg-gray-800 rounded-full transition ${s.color}`}
    >
      <s.icon className="w-5 h-5 text-white" />
    </a>
  ))}
</div>

            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-l-4 border-orange-500 pl-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { id: "whole-chicken", label: "Whole Chicken" },
                  { id: "cuts", label: "Chicken Cuts" },
                  { id: "offals", label: "Offals" },
                  { id: "eggs", label: "Eggs" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-400 hover:text-orange-400 transition font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-l-4 border-orange-500 pl-3">
                Contact Us
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                📞 Phone:{" "}
                <span className="font-medium text-orange-400">
                  +91 98765 43210
                </span>
              </p>
              <p className="text-gray-400 text-sm">🕒 7 AM – 9 PM</p>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                📍 Address:
                <br />
                <span className="font-medium text-orange-300">
                  PO Box 79711 Azikiwe GP,
                  <br />
                  Vijibweni, Block 27 Uzunguni Street Kigamboni.
                </span>
              </p>
            </div>

            {/* Newsletter */}
            {/* Help & Support */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-l-4 border-orange-500 pl-3">
                Help & Support
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                ❓ Need help with orders?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                💬 Our team is available 7 AM – 9 PM
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="inline-flex items-center px-5 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-gray-800 pt-6">
            <p className="text-center text-gray-500 text-sm">
              © 2024 OptiFirst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onSubmit={handleCheckout}
      />
    </div>
  );
}

export default App;
