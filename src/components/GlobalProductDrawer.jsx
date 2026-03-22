import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useQuickView } from '../context/QuickViewContext';

const createParticles = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  for(let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'fixed rounded-full pointer-events-none z-[9999]';
    const colors = ['bg-[#BA7041]', 'bg-[#2B1D14]', 'bg-[#D4AF37]', 'bg-white border border-[#BA7041]'];
    particle.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`;
    
    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    document.body.appendChild(particle);

    const targetX = window.innerWidth - (window.innerWidth < 768 ? 40 : 80);
    const targetY = 30;
    
    const animation = particle.animate([
      { transform: `translate(0, 0) scale(1)`, opacity: 1 },
      { transform: `translate(${(Math.random() - 0.5) * 120}px, ${(Math.random() - 0.5) * 120 - 50}px) scale(1.6)`, opacity: 0.9, offset: 0.4 },
      { transform: `translate(${targetX - x}px, ${targetY - y}px) scale(0)`, opacity: 0 }
    ], {
      duration: 700 + Math.random() * 500,
      easing: 'cubic-bezier(0.25, 1, 0.4, 1)'
    });
    
    animation.onfinish = () => particle.remove();
  }
};

export default function GlobalProductDrawer() {
  const { activeProduct: product, setActiveProduct } = useQuickView();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const isOpen = !!product;
  const onClose = () => setActiveProduct(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto' };
  }, [isOpen]);

  const handleSecureHarvest = (e) => {
    createParticles(e);
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
      onClose();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <React.Fragment key="global-drawer-portal">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2B1D14]/60 backdrop-blur-sm z-[250]"
            onClick={onClose}
          />
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-[300] flex flex-col overflow-y-auto"
          >
            {/* Header Block without X Button */}
            <div className="relative h-[350px] w-full bg-surface">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              
              {/* Product Badge Overlay */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#BA7041] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest shadow-md rounded-[2px]">
                  {product.nutrientBadge || 'Premium Core'}
                </span>
              </div>
            </div>

            {/* Informational Body */}
            <div className="p-8 md:p-10 flex-1 flex flex-col bg-white">
              <h2 className="font-serif text-3xl font-bold text-brand-dark leading-tight mb-2">
                {product.name}
              </h2>
              <p className="text-brand-dark/50 font-serif italic mb-8 border-l-2 border-[#BA7041] pl-4">
                Sourced exclusively from {product.source}
              </p>

              <p className="text-brand-dark/80 font-sans text-sm md:text-base leading-relaxed mb-10">
                {product.story}
              </p>

              {/* Functional Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface p-5 rounded-sm border border-brand-dark/5">
                  <span className="block uppercase tracking-[0.2em] text-[8px] font-bold text-[#BA7041] mb-2 leading-tight">Taste Profile</span>
                  <span className="font-serif font-bold text-brand-dark text-sm md:text-base">
                    {product.tasteProfile?.join(' · ')}
                  </span>
                </div>
                <div className="bg-surface p-5 rounded-sm border border-brand-dark/5">
                  <span className="block uppercase tracking-[0.2em] text-[8px] font-bold text-[#BA7041] mb-2 leading-tight">Best Paired With</span>
                  <span className="font-serif font-bold text-brand-dark text-sm md:text-base">
                    {product.pairedWith?.join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-auto pt-8 border-t border-brand-dark/10">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-brand-dark/40 line-through text-base block mb-0.5">₹{product.oldPrice}</span>
                    <div className="text-4xl font-serif font-bold text-brand-dark tracking-tighter leading-none">₹{product.price}</div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-[#BA7041] font-bold block mb-2">Availability</span>
                    <span className="text-sm font-semibold text-brand-dark flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                      <Leaf className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-800 text-xs">Fresh Harvest</span>
                    </span>
                  </div>
                </div>

                <button 
                  onClick={handleSecureHarvest}
                  disabled={isAdding}
                  className="w-full bg-[#BA7041] text-white py-5 font-bold tracking-[0.2em] uppercase text-sm md:text-base hover:bg-brand-dark transition-colors flex items-center justify-center space-x-3 shadow-[0_15px_30px_-5px_rgba(186,112,65,0.4)] rounded-sm relative overflow-hidden group"
                >
                  <ShoppingCart className={`w-5 h-5 transition-transform duration-300 ${isAdding ? 'scale-0' : 'scale-100'}`} />
                  <span>{isAdding ? 'Securing...' : 'Secure Harvest'}</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-sweep rounded-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
