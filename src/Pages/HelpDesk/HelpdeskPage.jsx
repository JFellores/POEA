import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';
import './HelpdeskPage.css';

import ArrowButton     from '../../assets/arrow-circle-left.png';
import HelpdeskImg     from '../../assets/HelpdeskImage.png';
import HelpdeskOverlay from '../../assets/HelpdeskOverlay.png';

import TicketInquiryModal from '../../HelpDeskComponents/TicketInquiryModal';
import '../../HelpDeskComponents/TicketInquiryModal.css';

export default function HelpdeskPage() {
  const navigate     = useNavigate();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="helpdesk-page">
      <div className="helpdesk-col1">
          <button
            className="back-button"
            onClick={() => navigate('/')}
            aria-label="Go back"
          >
            <img
              src={ArrowButton}
              alt="Go back"
              className="back-button__icon"
            />
          </button>

        <h1>Help Desk <br /> Support</h1>

        <p className="lead">Welcome to DMW Helpdesk,</p>
        <p className="paragraph">
          please file your concern here. Make sure you select your
          concern category properly in order for us to help you, Thank you.
        </p>

        <div className="button-group">
          <button
            className="helpdesk-button"
             onClick={() => navigate('/create-ticket')}
          >
            Create Ticket
          </button>
          <button
            className="helpdesk-button"
            onClick={() => {
              console.log('Inquire clicked');
              setInquiryOpen(true);
            }}
          >
            Inquire Ticket
          </button>
        </div>

        <button className="helpdesk-button-below" onClick={() => navigate('/transfer')}>
          Transfer Old BM Records
        </button>
      </div>

      <div className="helpdesk-col2">
        <img
          src={HelpdeskImg}
          alt="Helpdesk background"
          className="base-image"
        />
        <img
          src={HelpdeskOverlay}
          alt=""
          className="helpdesk-overlay"
        />
      </div>

      <TicketInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}
