
import React from 'react';

interface FooterProps {
  onNotify: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotify }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 style={{fontSize:16,fontWeight:800,marginBottom:8}}>PAK JERSEY HUB</h3>
            <p className="small text-muted">The #1 destination for football fans in Pakistan. We provide high-quality kits for clubs and national teams across the globe.</p>
          </div>
          <div>
            <h4 style={{fontSize:12,fontWeight:700,marginBottom:8}}>Quick Links</h4>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
              <li><button onClick={onNotify} className="small text-muted">Privacy Policy</button></li>
              <li><button onClick={onNotify} className="small text-muted">Shipping Policy</button></li>
              <li><button onClick={onNotify} className="small text-muted">Refund Policy</button></li>
              <li><button onClick={onNotify} className="small text-muted">Terms of Service</button></li>
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:12,fontWeight:700,marginBottom:8}}>Support</h4>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
              <li><button onClick={onNotify} className="small text-muted">Track Order</button></li>
              <li><button onClick={onNotify} className="small text-muted">Contact Us</button></li>
              <li><button onClick={onNotify} className="small text-muted">FAQ</button></li>
              <li><button onClick={onNotify} className="small text-muted">Size Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:12,fontWeight:700,marginBottom:8}}>Newsletter</h4>
            <p className="small text-muted">Get the latest on sales, new releases and more.</p>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <input type="email" placeholder="Email address" style={{flex:1,padding:8,border:'1px solid var(--border)',borderRadius:6}} />
              <button onClick={onNotify} style={{padding:'8px 12px',background:'#111827',color:'#fff',borderRadius:6}}>Join</button>
            </div>
          </div>
        </div>

        <div style={{borderTop:'1px solid var(--border)',paddingTop:16,display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
          <p className="small text-muted">© 2024 Pak Jersey Hub. All Rights Reserved.</p>
          <div style={{display:'flex',gap:12,color:'#9ca3af'}}>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-apple-pay"></i>
            <i className="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
