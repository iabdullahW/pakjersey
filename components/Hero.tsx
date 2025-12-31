
import React from 'react';

interface HeroProps {
  onNotify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  return (
    <div className="relative bg-gray-900 py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop" 
          alt="Football Field" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">
          SPECIAL EDITION <span className="text-green-500">KITS</span>
        </h2>
        <p className="text-sm md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          Discover the latest training gear and matchday jerseys. Authentic quality, embroidered logos, and precision fitting.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onNotify}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-all uppercase tracking-widest text-sm"
          >
            Shop Now
          </button>
          <button 
            onClick={onNotify}
            className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-md transition-all uppercase tracking-widest text-sm"
          >
            New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};
