// src/ORAAPageComponents/StatusModal.jsx
import React from 'react';
import './RequirementsModal.css';
export default function StatusModal({ onClose }) {
  return (
    <div className="req-modal__backdrop" onClick={onClose}>
      <div className="req-modal__card" onClick={e => e.stopPropagation()}>
        <button className="req-modal__close" onClick={onClose}>×</button>
        <h2>APPLICATION: <span style={{color:'green'}}>APPROVED</span></h2>
      </div>
    </div>
  );
}
