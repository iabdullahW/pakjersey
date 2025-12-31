
import React from 'react';

interface NavbarProps {
  onNotify: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNotify }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="mobile-btn">
              <button onClick={onNotify} className="mobile-btn" aria-label="menu">
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="nav-logo">PAK <span>JERSEY HUB</span></div>
          </div>

          <div className="nav-links">
            <button onClick={onNotify}>Home</button>
            <button onClick={onNotify}>New Arrivals</button>
            <button onClick={onNotify}>National Team</button>
            <button onClick={onNotify}>Tracking</button>
          </div>

          <div className="nav-icons">
            <button onClick={onNotify}><i className="fas fa-search"></i></button>
            <button onClick={onNotify} style={{position:'relative'}}>
              <i className="fas fa-shopping-bag"></i>
              <span style={{position:'absolute',top:-6,right:-6,display:'flex',height:16,width:16,alignItems:'center',justifyContent:'center',borderRadius:999,background:'var(--accent)',color:'#fff',fontSize:10,fontWeight:700}}>0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
