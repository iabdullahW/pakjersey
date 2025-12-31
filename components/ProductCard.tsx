
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onNotify: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNotify }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.tag && (
          <span style={{position:'absolute',top:8,left:8,background:'#111827',color:'#fff',padding:'4px 8px',fontSize:11,fontWeight:700,borderRadius:6}}>{product.tag}</span>
        )}
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-meta">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fas fa-star`} style={{fontSize:12,color:i < Math.floor(product.rating) ? '#f59e0b':'#d1d5db'}}></i>
          ))}
          <span className="small text-muted">({product.reviewCount})</span>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:8,marginTop:8}}>
          <div className="price">Rs.{product.price.toLocaleString()}.00 PKR</div>
          {product.originalPrice && (<div style={{textDecoration:'line-through',color:'#9ca3af',fontSize:12}}>Rs.{product.originalPrice.toLocaleString()}.00</div>)}
        </div>

        <p className="small text-muted">From Rs.{product.price.toLocaleString()}.00 PKR</p>

        <button onClick={onNotify} className="btn-choose">Choose options</button>
      </div>
    </div>
  );
};
