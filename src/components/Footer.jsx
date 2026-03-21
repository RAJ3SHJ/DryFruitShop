import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-brand-dark text-brand-light pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Newsletter</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-10 tracking-wide">
              Join Our Artisan Community
            </h2>
            <div className="flex bg-brand-light/10 p-2 rounded-sm border border-brand-gold/30 backdrop-blur-sm focus-within:border-brand-gold transition-colors">
              <input 
                type="tel" 
                placeholder="ENTER YOUR PHONE NUMBER" 
                className="flex-1 px-6 py-4 bg-transparent outline-none text-brand-light placeholder-brand-light/50 tracking-widest font-light text-sm"
              />
              <button className="bg-brand-gold text-brand-dark px-10 md:px-14 py-4 font-bold tracking-[0.2em] uppercase hover:bg-brand-light transition-colors rounded-sm">
                JOIN
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto border-t border-brand-gold/20 pt-20 text-center md:text-left">
            {/* Left Column */}
            <div className="flex flex-col md:pl-16">
              <h3 className="font-bold text-brand-gold text-sm mb-8 uppercase tracking-[0.2em]">Quick Links</h3>
              <ul className="space-y-5 text-brand-light/80 text-sm tracking-wide">
                <li><a href="#products" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start"><span className="w-4 h-[1px] bg-brand-gold mr-4 hidden md:block"></span>Our Collection</a></li>
                <li><a href="#blog" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start"><span className="w-4 h-[1px] bg-brand-gold mr-4 hidden md:block"></span>Journal</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start"><span className="w-4 h-[1px] bg-brand-gold mr-4 hidden md:block"></span>Privacy & Policies</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start"><span className="w-4 h-[1px] bg-brand-gold mr-4 hidden md:block"></span>Shipping & Returns</a></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="flex flex-col md:pl-16">
              <h3 className="font-bold text-brand-gold text-sm mb-8 uppercase tracking-[0.2em]">Concierge</h3>
              <ul className="space-y-6 text-brand-light/80 text-sm tracking-wide flex flex-col items-center md:items-start">
                <li className="flex flex-col items-center md:items-start">
                  <span className="text-brand-gold/60 uppercase text-[10px] tracking-widest mb-1.5 font-bold">WhatsApp Line</span> 
                  <a href="https://wa.me/919876543210" className="hover:text-brand-gold transition-colors text-lg font-serif">+91 98765 43210</a>
                </li>
                <li className="flex flex-col items-center md:items-start">
                  <span className="text-brand-gold/60 uppercase text-[10px] tracking-widest mb-1.5 font-bold">Email Support</span> 
                  <a href="mailto:concierge@dryfruitshop.com" className="hover:text-brand-gold transition-colors">concierge@dryfruitshop.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center pt-10 border-t border-brand-gold/10">
            <div className="flex space-x-10 mb-8 text-brand-gold">
              <a href="#" aria-label="Facebook" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Facebook className="w-6 h-6"/></a>
              <a href="#" aria-label="Instagram" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Instagram className="w-6 h-6"/></a>
              <a href="#" aria-label="Youtube" className="hover:text-brand-light hover:-translate-y-1 transition-all"><Youtube className="w-6 h-6"/></a>
            </div>
            <p className="text-xs text-brand-light/40 tracking-widest uppercase font-serif">© 2026 Dry Fruit Store. Curated with excellence.</p>
          </div>
          
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-500 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
      </a>
    </>
  );
}
