import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hubs = [
  { id: 'himalayas', name: 'Kinnaur, Himalayas', x: '65%', y: '30%', products: 'Pine Nuts' },
  { id: 'kashmir', name: 'Kashmir Valley', x: '60%', y: '25%', products: 'Walnuts' },
  { id: 'california', name: 'San Joaquin Valley', x: '15%', y: '35%', products: 'Almonds' },
  { id: 'turkey', name: 'Izmir, Turkey', x: '45%', y: '30%', products: 'Figs, Apricots' },
  { id: 'iran', name: 'Rafsanjan, Iran', x: '52%', y: '35%', products: 'Pistachios' },
  { id: 'jordan', name: 'Jordan Valley', x: '48%', y: '40%', products: 'Medjool Dates' },
  { id: 'brazil', name: 'Amazon Basin', x: '25%', y: '70%', products: 'Brazil Nuts' }
];

export default function TraceabilityMap() {
  const [activeHub, setActiveHub] = useState(null);

  return (
    <div className="w-full relative py-20 md:py-32 flex flex-col items-center justify-center bg-brand-dark text-white border-y border-white/5 overflow-hidden">
      
      {/* Background Graphic Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="text-center mb-16 relative z-10">
         <motion.span 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[#BA7041] uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
         >
           Total Geographic Transparency
         </motion.span>
         <motion.h3 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="font-serif text-4xl md:text-5xl lg:text-6xl font-black mb-6"
         >
           The Sourcing Matrix
         </motion.h3>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-white/60 font-sans max-w-lg mx-auto text-sm md:text-base leading-relaxed px-6"
         >
           No intermediaries. Every single premium product we harvest is mathematically tracked to its exact geographic soil across the globe. Hover over active hubs to trace your harvest.
         </motion.p>
      </div>

      <div className="relative w-full max-w-5xl h-[300px] md:h-[500px] flex items-center justify-center">
        
        {/* Abstract Topographic Mapping Lines */}
        <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
           <path d="M50,250 Q200,450 450,250 T850,250" stroke="white" strokeWidth="2" fill="none" strokeDasharray="6,12" />
           <path d="M150,150 Q300,50 600,200 T950,150" stroke="#BA7041" strokeWidth="1" fill="none" strokeDasharray="3,8" />
           <path d="M250,500 Q400,200 700,400 T900,100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2,20" />
           
           {/* Longitudes and Latitudes grids */}
           <line x1="200" y1="0" x2="200" y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
           <line x1="400" y1="0" x2="400" y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
           <line x1="600" y1="0" x2="600" y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
           <line x1="800" y1="0" x2="800" y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
        </svg>

        {/* Dynamic Glowing Origin Hubs */}
        {hubs.map((hub, index) => (
          <motion.div 
            key={hub.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="absolute z-20"
            style={{ left: hub.x, top: hub.y }}
            onMouseEnter={() => setActiveHub(hub)}
            onMouseLeave={() => setActiveHub(null)}
          >
            {/* Hard Core Point */}
            <div className="relative w-2 h-2 md:w-3 md:h-3 bg-[#BA7041] rounded-full cursor-pointer shadow-[0_0_20px_rgba(186,112,65,1)]" />
            
            {/* Harmonic Pulsing Aura */}
            <motion.div 
               className="absolute inset-0 bg-[#BA7041]/60 rounded-full"
               animate={{ scale: [1, 3, 1], opacity: [0.8, 0, 0.8] }}
               transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Smart Tracking Tooltip */}
            <AnimatePresence>
              {activeHub?.id === hub.id && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 bg-white text-brand-dark p-4 md:p-6 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[200px] md:w-[250px] pointer-events-none border-b-4 border-[#BA7041]"
                >
                  <p className="font-serif font-black text-xl leading-tight mb-3 tracking-wide">{hub.name}</p>
                  <p className="uppercase text-[9px] tracking-widest text-brand-dark/50 font-bold mb-1">Provides Premium</p>
                  <p className="font-sans font-bold text-[#BA7041] text-sm md:text-base uppercase tracking-wider">{hub.products}</p>
                  
                  {/* Absolute positioning mapping indicator arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#BA7041]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
