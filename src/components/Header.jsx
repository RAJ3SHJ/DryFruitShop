import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount, toggleCart } = useCart();

  return (
    <header className="fixed top-0 w-full z-[100] bg-brand-light/90 backdrop-blur-md border-b border-surface/50 shadow-sm transition-all duration-300">
      {/* Announcement Bar (Sticky Layer 1) */}
      <div className="bg-brand-dark text-brand-gold text-center py-2 text-xs md:text-sm font-semibold tracking-widest uppercase">
        Get 10% OFF on Prepaid Orders
      </div>

      {/* Navigation Bar (Sticky Layer 2) */}
      <div className="container mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="text-4xl md:text-5xl font-black text-brand-dark cursor-pointer font-mona tracking-tighter" onClick={() => window.scrollTo(0, 0)}>
          Dry Fruit Store
        </div>

        {/* Menu (Center) */}
        <nav className="hidden lg:flex space-x-12 text-brand-dark flex-1 justify-center font-medium text-sm tracking-[0.2em] uppercase">
          <a href="#home" className="hover:text-brand-gold transition-colors duration-300">Home</a>
          <a href="#all-products" className="hover:text-brand-gold transition-colors duration-300">Products</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors duration-300">Contact</a>
        </nav>

        {/* Icons (Right) */}
        <div className="flex items-center space-x-6 md:space-x-8 text-brand-dark">
          <button className="hover:text-brand-gold transition-colors" aria-label="Search">
            <Search className="w-[22px] h-[22px]" />
          </button>
          <button className="hover:text-brand-gold transition-colors hidden sm:block" aria-label="User Profile">
            <User className="w-[22px] h-[22px]" />
          </button>
          
          {/* Dynamic Cart Button */}
          <button 
            className="hover:text-brand-gold transition-colors relative flex items-center group" 
            aria-label="Shopping Bag"
            onClick={toggleCart}
          >
            <ShoppingBag className="w-[22px] h-[22px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-brand-gold text-brand-light text-[10px] font-bold rounded-full h-[18px] w-[18px] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
