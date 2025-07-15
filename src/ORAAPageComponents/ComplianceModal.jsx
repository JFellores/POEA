// src/ORAAPageComponents/ComplianceModal.jsx
import React from 'react';
import './RequirementsModal.css';
export default function ComplianceModal({ onClose }) {
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