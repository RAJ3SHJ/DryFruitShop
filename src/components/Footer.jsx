import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import TraceabilityMap from './TraceabilityMap';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-brand-dark pt-0">
      <TraceabilityMap />
      
      {/* Community Newsletter Section */}
      <div className="container mx-auto px-4 md:px-8 pb-12 pt-16 border-b border-brand-light/10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-brand-gold uppercase tracking-[0.2em] font-bold text-xs mb-4 block">Join Our Community</span>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-brand-light mb-6">
            Exclusive Harvests & Offers
          </h3>
          <p className="text-brand-light/70 font-sans mb-8">
            Subscribe to deeply rooted traditions and get 15% off your first luxury reserve order.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 bg-transparent border-b border-brand-light/30 px-4 py-3 text-brand-light placeholder:text-brand-light/50 focus:outline-none focus:border-brand-gold font-sans transition-colors mb-4 sm:mb-0 sm:mr-4"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-brand-dark px-8 py-3 font-bold tracking-widest text-xs uppercase hover:bg-brand-light transition-colors duration-300 flex items-center justify-center space-x-2 rounded-sm"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-2xl font-bold text-brand-light mb-6 tracking-tight">Dry Fruit Store</h4>
            <p className="text-brand-light/60 font-sans max-w-sm leading-relaxed mb-8">
              Curating nature's most exclusive nutritional luxuries. We travel the world to bring you uncompromising quality, flavor, and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-sans font-bold text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6">Explore</h5>
            <ul className="space-y-4 text-brand-light/70 font-sans text-sm">
              <li><a href="#best-sellers" className="hover:text-brand-gold transition-colors">The Heritage Collection</a></li>
              <li><a href="#all-products" className="hover:text-brand-gold transition-colors">Functional Nutrition</a></li>
              <li><a href="#gifting" className="hover:text-brand-gold transition-colors">Corporate Gifting</a></li>
              <li><a href="#sustainability" className="hover:text-brand-gold transition-colors">Traceability Pledge</a></li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h5 className="font-sans font-bold text-brand-gold uppercase tracking-[0.2em] text-[10px] mb-6">Concierge</h5>
            <ul className="space-y-4 text-brand-light/70 font-sans text-sm">
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="#shipping" className="hover:text-brand-gold transition-colors">Global Shipping</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-light/10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-6 md:mb-0 text-brand-light/50">
            <a href="#" aria-label="Facebook" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Facebook className="w-5 h-5"/></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="Youtube" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Youtube className="w-5 h-5"/></a>
          </div>
          <p className="text-[10px] text-brand-light/40 tracking-[0.2em] uppercase font-sans font-bold">© 2026 Dry Fruit Store. Curated with uncompromised excellence.</p>
        </div>
      </div>
    </footer>
  );
}
