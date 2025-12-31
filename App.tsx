
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
    <div className="app-root">
      <Navbar onNotify={notifyOutOfStock} />

      <main className="main">
        <Hero onNotify={notifyOutOfStock} />

        <section className="container">
          <div className="section-head">
            <div>
              <h2 className="hero-title">SPECIAL EDITION</h2>
              <div className="kicker"></div>
            </div>
            <div className="text-muted small">
              <span>Home</span>
              <i className="fas fa-chevron-right" style={{margin:'0 6px', fontSize:10}}></i>
              <span style={{color:'#111827'}}>Jerseys</span>
            </div>
          </div>

          <div className="products-grid">
            {JERSEYS.map((jersey) => (
              <ProductCard 
                key={jersey.id} 
                product={jersey} 
                onNotify={notifyOutOfStock} 
              />
            ))}
          </div>

          <div style={{marginTop:32,display:'flex',justifyContent:'center',gap:12,alignItems:'center'}}>
            <button onClick={notifyOutOfStock} className="btn"> <i className="fas fa-chevron-left"></i></button>
            <div className="small text-muted"><strong>1</strong> / 18</div>
            <button onClick={notifyOutOfStock} className="btn"> <i className="fas fa-chevron-right"></i></button>
          </div>
        </section>

        <section style={{background:'#f3f4f6',padding:'32px 0',marginTop:32}}>
          <div className="container">
            <div style={{display:'grid',gridTemplateColumns:'1fr',gap:16}}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:16}}>
                <div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:999,background:'#fff',marginBottom:12,boxShadow:'var(--shadow-sm)'}}>
                  <i className="fas fa-truck" style={{color:'var(--accent)'}}></i>
                </div>
                <h4 style={{fontSize:13,fontWeight:700,margin:0}}>Fast Shipping</h4>
                <p className="small text-muted">Delivering nationwide across Pakistan within 3-5 days.</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:16}}>
                <div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:999,background:'#fff',marginBottom:12,boxShadow:'var(--shadow-sm)'}}>
                  <i className="fas fa-shield-alt" style={{color:'var(--accent)'}}></i>
                </div>
                <h4 style={{fontSize:13,fontWeight:700,margin:0}}>Secure Payments</h4>
                <p className="small text-muted">COD and Bank Transfer available for your security.</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:16}}>
                <div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:999,background:'#fff',marginBottom:12,boxShadow:'var(--shadow-sm)'}}>
                  <i className="fas fa-undo" style={{color:'var(--accent)'}}></i>
                </div>
                <h4 style={{fontSize:13,fontWeight:700,margin:0}}>Easy Returns</h4>
                <p className="small text-muted">No questions asked return policy within 7 days.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNotify={notifyOutOfStock} />

      <div className="fab-whatsapp" onClick={notifyOutOfStock} title="Contact us on WhatsApp">
        <i className="fab fa-whatsapp" style={{fontSize:20}}></i>
      </div>

      <OutofStockModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
