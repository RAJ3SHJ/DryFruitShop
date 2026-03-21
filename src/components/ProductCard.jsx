import React, { useState, useEffect, useRef } from 'react';
import { Info, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={cardRef} className="group relative flex flex-col bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Info Button Top Right */}
        <button 
          onClick={(e) => { e.stopPropagation(); setShowInfo(true); }}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-brand-dark shadow hover:bg-white transition-colors z-10"
          aria-label="Product Information"
        >
          <Info className="w-5 h-5" />
        </button>

        {/* Added Overlay */}
        <div className={`absolute inset-0 bg-brand-dark/40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${added ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'}`}>
          <div className={`bg-brand-light text-brand-dark px-6 py-2 rounded-sm font-bold tracking-widest uppercase shadow-2xl transition-transform duration-500 ${added ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Added!
          </div>
        </div>

        {/* Info Overlay Panel */}
        <div 
          className={`absolute inset-0 bg-brand-dark/95 backdrop-blur-sm text-brand-light p-5 overflow-y-auto transition-transform duration-300 z-30 cursor-pointer ${showInfo ? 'translate-y-0' : 'translate-y-full'}`}
          onClick={(e) => { e.stopPropagation(); setShowInfo(false); }}
        >
          <h4 className="font-serif text-xl font-bold mb-3 pr-6">{product.name}</h4>
          <div className="text-sm space-y-4">
            <div>
              <strong className="text-brand-gold uppercase text-[10px] tracking-widest block mb-1">Summary</strong>
              <p className="font-light leading-relaxed">{product.summary}</p>
            </div>
            <div>
              <strong className="text-brand-gold uppercase text-[10px] tracking-widest block mb-1">Serving Suggestion</strong>
              <p className="font-light leading-relaxed">{product.serving}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 text-center bg-white z-10">
        <h3 className="font-sans font-semibold text-brand-dark text-base uppercase tracking-wider mb-2 truncate" title={product.name}>{product.name}</h3>
        <div className="text-sm font-medium flex items-center justify-center space-x-3 mb-4">
          <span className="text-brand-dark/50 line-through">₹{product.oldPrice}</span>
          <span className="text-brand-dark font-bold text-lg">₹{product.price}</span>
        </div>
        
        {/* Buy Button */}
        <button 
          onClick={handleAdd}
          className="mt-auto w-full flex items-center justify-center space-x-2 bg-brand-gold text-brand-light py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-brand-gold transition-colors duration-300 rounded-sm shadow"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
}
