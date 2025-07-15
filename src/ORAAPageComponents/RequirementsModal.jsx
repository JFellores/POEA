// src/Pages/ORAA/RequirementsModal.jsx
import React from 'react';
import './RequirementsModal.css';

export default function RequirementsModal({ onClose }) {
  return (
    <div className="req-modal__backdrop" onClick={onClose}>
      <div
        className="req-modal__card"
        onClick={e => e.stopPropagation() /* don’t close when clicking inside */}
      >
        <button className="req-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2>Requirements:</h2>
        <p>The requirements for availing of this online service are the following:</p>
        <ul>
          <li>Letter of Request</li>
          <li>Notarized Affidavit of Undertaking</li>
          <li>Authorized Letter from the Principal</li>
          <li>No Objection Certificate</li>
          <li>Internet Connection</li>
          <li>Desktop</li>
        </ul>

        <h2>Qualifications:</h2>
        <p>
          The persons who are qualified for availing of this online service are the
          licensed recruitment agencies and manning agencies.
        </p>
      </div>
    </div>
  );
}
