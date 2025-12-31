
import React from 'react';

interface OutofStockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutofStockModal: React.FC<OutofStockModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div style={{textAlign:'center'}}>
          <div style={{margin:'0 auto',display:'flex',height:64,width:64,alignItems:'center',justifyContent:'center',borderRadius:999,background:'#fee2e2',marginBottom:18}}>
            <i className="fas fa-exclamation-triangle" style={{color:'#dc2626',fontSize:20}}></i>
          </div>
          <h3 style={{fontSize:20,fontWeight:800,margin:0}}>Out of Stock</h3>
          <p className="small text-muted" style={{margin:'12px 0 20px'}}>Sorry, we are currently not accepting orders. Please check back later!</p>
          <button onClick={onClose} className="btn btn-primary" style={{width:'100%',padding:12,borderRadius:8}}>Got it</button>
        </div>
      </div>
    </div>
  );
};
