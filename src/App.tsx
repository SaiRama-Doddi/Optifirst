import { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductSection from './components/ProductSection';
import CartSidebar from './components/CartSidebar';
import CheckoutModal, { type UserDetails } from './components/CheckoutModal';
import { products } from './types/product';
import type { Product, CartItem } from './types/product';
import Contact from './pages/Contact'
import About from './pages/About';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const wholeChickenProducts = products.filter(
    (p) => p.category === 'whole-chicken'
  );
  const cutsProducts = products.filter((p) => p.category === 'cuts');
  const offalsProducts = products.filter((p) => p.category === 'offals');
  const eggsProducts = products.filter((p) => p.category === 'eggs');

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
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      orderMessage
    )}`;
    window.open(whatsappUrl, '_blank');
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
       (Number(convertToUSD(item.price)) * item.cartQuantity).toFixed(2)

      )}\n`
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
      <About/>
      <Contact />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OptiFirst</h3>
              <p className="text-gray-400">
                Premium quality chicken and eggs delivered fresh to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#whole-chicken" className="text-gray-400 hover:text-white transition">
                    Whole Chicken
                  </a>
                </li>
                <li>
                  <a href="#cuts" className="text-gray-400 hover:text-white transition">
                    Chicken Cuts
                  </a>
                </li>
                <li>
                  <a href="#offals" className="text-gray-400 hover:text-white transition">
                    Offals
                  </a>
                </li>
                <li>
                  <a href="#eggs" className="text-gray-400 hover:text-white transition">
                    Eggs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Phone: +91 98765 43210</p>
              <p className="text-gray-400">Available: 7 AM - 9 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OptiFirst. All rights reserved.</p>
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
