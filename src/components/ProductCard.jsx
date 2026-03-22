import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Info } from 'lucide-react';
import { useQuickView } from '../context/QuickViewContext';

export default function ProductCard({ product }) {
  const { setActiveProduct } = useQuickView();
  
  // High-performance 3D Tilt Logic
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="group flex flex-col h-full bg-white rounded-md shadow-sm border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 relative z-10 w-full">
      
      {/* Nutrient Badge Overlay */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-[#BA7041] text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-md rounded-[2px]">
          {product.nutrientBadge || 'Premium Core'}
        </span>
      </div>

      {/* 3D Interactive Container Layer */}
      <div 
        className="relative aspect-square cursor-pointer bg-surface overflow-hidden rounded-t-md p-6"
        style={{ perspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setActiveProduct(product)}
      >
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full relative border border-transparent"
        >
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-sm pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ translateZ: 50 }}
            loading="lazy"
          />
          <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none mix-blend-overlay transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-sm"
              style={{ translateZ: 80 }}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
          <span className="bg-white/95 text-brand-dark text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-3 shadow-2xl backdrop-blur-md rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
            Quick View
          </span>
        </div>
      </div>
      
      {/* Product Details Section */}
      <div className="p-6 flex flex-col flex-1 text-center bg-white z-10">
        <h3 className="font-sans font-semibold text-brand-dark text-sm md:text-sm uppercase tracking-[0.15em] mb-2 truncate" title={product.name}>{product.name}</h3>
        
        <div className="text-sm font-medium flex items-center justify-center space-x-3 mb-6">
          <span className="text-brand-dark/30 line-through">₹{product.oldPrice}</span>
          <span className="text-brand-dark font-bold text-xl font-serif">₹{product.price}</span>
        </div>
        
        <button 
          onClick={() => setActiveProduct(product)}
          className="mt-auto w-full flex items-center justify-center space-x-2 bg-transparent border border-brand-dark/10 text-brand-dark/80 py-3.5 font-bold uppercase tracking-[0.15em] text-[10px] hover:bg-brand-dark hover:text-white transition-colors duration-300 rounded-sm"
        >
          <Info className="w-[14px] h-[14px]" />
          <span>Discover More</span>
        </button>
      </div>
    </div>
  );
}
