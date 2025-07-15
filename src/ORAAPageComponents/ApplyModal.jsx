// src/ORAAPageComponents/ApplyModal.jsx
import React from 'react';
import './ApplyModal.css';

export default function ApplyModal({ onClose }) {
  return (
    <div className="req-modal__backdrop" onClick={onClose}>
      <div className="req-modal__card" onClick={e => e.stopPropagation()}>
        <button className="req-modal__close" onClick={onClose}>×</button>

        <div className="req-modal__actions">
          <button className="req-modal__action">Upload Files</button>
          <button className="req-modal__action">Submit</button>
        </div>
      </div>
    </div>
  );
}