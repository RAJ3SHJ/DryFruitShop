import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const bestSellers = products.slice(0, 4);

export default function BestSellers() {
  return (
    <section id="best-sellers" className="py-16 md:py-24 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-brand-light mb-4 tracking-tight">
          Best Sellers
        </h2>
        <p className="text-brand-light/70 font-sans max-w-md text-base md:text-lg">
          The most requested premium harvests from our global sourcing network.
        </p>
      </div>

      <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex w-max px-6 md:px-12 space-x-6 md:space-x-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="snap-center shrink-0 w-[300px] md:w-[400px] relative group rounded-sm overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
              {/* Product Image Layer */}
              <div className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                
                {/* Nutritional Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-gold text-brand-dark text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-md rounded-[2px]">
                    {product.nutrientBadge || 'Premium Core'}
                  </span>
                </div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <h3 className="font-serif text-3xl font-bold text-white leading-tight mb-2">
                    {product.name.split(' (')[0]}
                  </h3>
                  <p className="text-brand-gold font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    {product.source}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-2 border-t border-white/20 pt-6">
                  <div className="flex flex-col">
                    <span className="text-white/50 line-through text-sm font-sans block leading-none mb-1">₹{product.oldPrice}</span>
                    <span className="text-3xl font-sans font-black text-white tracking-tighter leading-none">₹{product.price}</span>
                  </div>
                  <QuickAddButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAddButton({ product }) {
  const { addToCart } = useCart();
  
  return (
    <button 
      onClick={() => addToCart(product)}
      className="bg-brand-gold text-brand-dark w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-xl group/btn"
      aria-label="Add to Bag"
    >
      <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
    </button>
  );
}
