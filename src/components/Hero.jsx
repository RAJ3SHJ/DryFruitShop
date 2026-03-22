import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100vh] flex items-center overflow-hidden mt-16 md:mt-0">
      
      {/* Full Page Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
        style={{ backgroundImage: `url('/Hero Pine Nuts.webp')` }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        
        {/* Text Box (Left Aligned) */}
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-start text-left">
          <span className="text-[#333333] text-[10px] md:text-sm font-bold tracking-[4px] uppercase mb-4">
            Introducing
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-[#333333] font-mona mb-6 leading-[1.0] tracking-tighter">
            Pine nuts
          </h1>
          <p className="text-[#333333] text-lg md:text-[20px] font-light font-sans max-w-lg leading-relaxed mb-10">
            Experience the rare, delicate flavor of nature's most exclusive and luxurious nut.
          </p>
        </div>
      </div>

      {/* Button Bottom Right */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 w-[calc(100%-3rem)] md:w-auto">
        <button 
          className="bg-[#BA7041] w-full md:w-auto text-white px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-bold font-sans hover:bg-[#A05D33] transition-colors shadow-2xl rounded-sm tracking-[0.2em] uppercase"
          onClick={() => window.location.href = '/cart'}
        >
          SHOP PINE NUTS
        </button>
      </div>
    </section>
  );
}
