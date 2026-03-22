import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const healthGoals = ['All', 'Immunity Booster', 'Brain Power', 'Skin Glow', 'Weight Management'];

export default function AllProductsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  // The first 4 are featured in the Cinematic Scroll, so we display the rest here
  const remainingProducts = products.slice(4);

  const filteredProducts = activeFilter === 'All' 
    ? remainingProducts 
    : remainingProducts.filter(p => p.healthGoals?.includes(activeFilter));

  return (
    <section id="all-products" className="py-24 bg-surface min-h-[80vh]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold uppercase tracking-[0.2em] font-bold text-xs mb-4">
            Premium Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            Explore the Harvest
          </h2>
          <p className="text-brand-dark/70 font-sans max-w-md">
            Discover our complete repertoire of globally sourced, uncompromised nutritional excellence.
          </p>
        </div>

        {/* Functional Health Filter Bar (Sticky) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 sticky top-[90px] z-[50] py-4 bg-gradient-to-b from-surface via-surface/90 to-transparent">
          {healthGoals.map(goal => (
            <button
              key={goal}
              onClick={() => setActiveFilter(goal)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeFilter === goal 
                  ? 'bg-[#BA7041] border-[#BA7041] text-white shadow-lg shadow-[#BA7041]/30' 
                  : 'bg-white/50 border-brand-dark/10 text-brand-dark/60 hover:border-[#BA7041] hover:text-[#BA7041]'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>

        {/* Shuffling Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                className="will-change-transform" // Performance hint for smooth layout shifts
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20 text-brand-dark/50 font-serif text-2xl italic"
          >
            Currently nurturing the harvest for this specific goal. Check back soon.
          </motion.div>
        )}

      </div>
    </section>
  );
}
