
import React from 'react';

interface FooterProps {
  onNotify: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotify }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4">PAK JERSEY HUB</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              The #1 destination for football fans in Pakistan. We provide high-quality kits for clubs and national teams across the globe.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Privacy Policy</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Shipping Policy</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Refund Policy</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Terms of Service</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-2">
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Track Order</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Contact Us</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">FAQ</button></li>
              <li><button onClick={onNotify} className="text-xs text-gray-600 hover:text-green-700 transition-colors">Size Guide</button></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-[10px] text-gray-500 mb-4">Get the latest on sales, new releases and more.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button 
                onClick={onNotify}
                className="bg-gray-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-gray-500">© 2024 Pak Jersey Hub. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <i className="fab fa-cc-visa text-gray-400 text-xl"></i>
            <i className="fab fa-cc-mastercard text-gray-400 text-xl"></i>
            <i className="fab fa-cc-apple-pay text-gray-400 text-xl"></i>
            <i className="fas fa-money-bill-wave text-gray-400 text-xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
