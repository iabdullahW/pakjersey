
import React from 'react';

interface HeroProps {
  onNotify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  return (
    <div className="hero">
      <img className="bg-img" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop" alt="Football Field" />
      <div className="hero-inner">
        <h2 className="hero-title">SPECIAL EDITION <span className="accent">KITS</span></h2>
        <p className="hero-sub">Discover the latest training gear and matchday jerseys. Authentic quality, embroidered logos, and precision fitting.</p>
        <div className="hero-ctas">
          <button onClick={onNotify} className="btn btn-primary">Shop Now</button>
          <button onClick={onNotify} className="btn btn-ghost">New Arrivals</button>
        </div>
      </div>
    </div>
  );
};
