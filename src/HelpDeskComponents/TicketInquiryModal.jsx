import React from 'react';
import MagnifierIcon from '../assets/magnifier.svg'; // your magnifier icon

export default function TicketInquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="ti-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="ti-modal"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="ti-title">DMW Ticket Inquiry</h2>
        <div className="ti-underline" />

        <label className="ti-label" htmlFor="ticketNo">
          Input Inquiry ticket number:
        </label>
        <div className="ti-input-group">
          <input
            id="ticketNo"
            type="text"
            placeholder="ticket no."
            className="ti-input"
          />
          <button
            className="ti-search-btn"
            onClick={() => alert('Searching…')}
          >
            <img src={MagnifierIcon} alt="Search" className="ti-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
