
import React from 'react';

interface NavbarProps {
  onNotify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNotify }) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={onNotify}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-green-700 tracking-tight">
              PAK <span className="text-gray-900">JERSEY HUB</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <button onClick={onNotify} className="text-gray-600 hover:text-green-700 font-medium transition-colors">Home</button>
            <button onClick={onNotify} className="text-gray-600 hover:text-green-700 font-medium transition-colors">New Arrivals</button>
            <button onClick={onNotify} className="text-gray-600 hover:text-green-700 font-medium transition-colors">National Team</button>
            <button onClick={onNotify} className="text-gray-600 hover:text-green-700 font-medium transition-colors">Tracking</button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onNotify}
              className="text-gray-500 hover:text-gray-900 focus:outline-none transition-colors"
            >
              <i className="fas fa-search text-lg"></i>
            </button>
            <button 
              onClick={onNotify}
              className="relative text-gray-500 hover:text-gray-900 focus:outline-none transition-colors"
            >
              <i className="fas fa-shopping-bag text-lg"></i>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
