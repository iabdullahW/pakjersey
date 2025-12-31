
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { OutofStockModal } from './components/OutofStockModal';
import { JERSEYS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const notifyOutOfStock = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-100 selection:text-green-900">
      <Navbar onNotify={notifyOutOfStock} />
      
      <main className="flex-grow">
        <Hero onNotify={notifyOutOfStock} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">SPECIAL EDITION</h2>
              <div className="h-1 w-20 bg-green-600 mt-2"></div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1.5 rounded-full self-start md:self-end">
              <span>Home</span>
              <i className="fas fa-chevron-right text-[8px]"></i>
              <span className="text-gray-900">Jerseys</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {JERSEYS.map((jersey) => (
              <ProductCard 
                key={jersey.id} 
                product={jersey} 
                onNotify={notifyOutOfStock} 
              />
            ))}
          </div>

          {/* Pagination Dummy UI */}
          <div className="mt-16 flex items-center justify-center space-x-4">
            <button onClick={notifyOutOfStock} className="p-2 text-gray-400 hover:text-gray-900">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="text-sm font-medium text-gray-600">
              <span className="text-gray-900 font-bold">1</span> / 18
            </div>
            <button onClick={notifyOutOfStock} className="p-2 text-gray-400 hover:text-gray-900">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-4 shadow-sm">
                  <i className="fas fa-truck text-green-600 text-xl"></i>
                </div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Fast Shipping</h4>
                <p className="text-xs text-gray-500">Delivering nationwide across Pakistan within 3-5 days.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-4 shadow-sm">
                  <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                </div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Secure Payments</h4>
                <p className="text-xs text-gray-500">COD and Bank Transfer available for your security.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-4 shadow-sm">
                  <i className="fas fa-undo text-green-600 text-xl"></i>
                </div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Easy Returns</h4>
                <p className="text-xs text-gray-500">No questions asked return policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNotify={notifyOutOfStock} />

      {/* Sticky WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
        <div className="hidden group-hover:block mb-2 px-3 py-1 bg-white shadow-xl rounded-lg border border-gray-100 animate-fade-in">
          <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Contact Us</p>
        </div>
        <button 
          onClick={notifyOutOfStock}
          className="h-14 w-14 md:h-16 md:w-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ring-4 ring-white"
        >
          <i className="fab fa-whatsapp text-3xl md:text-4xl"></i>
        </button>
      </div>

      <OutofStockModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
