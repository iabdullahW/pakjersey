
import React from 'react';

interface OutofStockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutofStockModal: React.FC<OutofStockModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all animate-scale-up"
      >
        <div className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
            <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Out of Stock</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Sorry, we are currently not accepting orders. Please check back later!
          </p>
          <button
            onClick={onClose}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
