
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onNotify: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNotify }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-gray-800/80 text-white text-[10px] font-bold uppercase rounded">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
          <button 
            onClick={onNotify}
            className="bg-white text-gray-900 px-4 py-2 rounded shadow-lg font-semibold text-sm hover:bg-gray-100"
          >
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2 h-10 leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <i 
              key={i} 
              className={`fas fa-star text-[10px] ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            ></i>
          ))}
          <span className="text-[10px] text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="flex items-center flex-wrap gap-2 pt-1">
          <span className="text-sm md:text-base font-bold text-gray-900">
            Rs.{product.price.toLocaleString()}.00 PKR
          </span>
          {product.originalPrice && (
            <span className="text-[10px] md:text-xs text-gray-400 line-through">
              Rs.{product.originalPrice.toLocaleString()}.00 PKR
            </span>
          )}
        </div>

        <p className="text-[10px] md:text-xs text-gray-600 font-medium">
          From Rs.{product.price.toLocaleString()}.00 PKR
        </p>

        <button 
          onClick={onNotify}
          className="w-full mt-2 py-2 border border-gray-900 text-gray-900 text-xs md:text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-wider"
        >
          Choose options
        </button>
      </div>
    </div>
  );
};
