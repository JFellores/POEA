import React, { useState } from 'react';
import { useNavigate }      from 'react-router-dom';
import './CreateTicketPage.css';


import TicketWizard from '../../HelpDeskComponents/TicketWizard';

import TicketPic from '../../assets/TicketPic.png';
import ArrowButton from '../../assets/arrow-circle-left-white.png';


export default function CreateTicketPage() {
    const navigate = useNavigate();
    return (
        <div className="create-ticket-page-main">
            <div className='left-column-1'>
                <div className='Button-Container'>
                    <button
                        className="back-button"
                        onClick={() => navigate('/helpdesk')}
                        aria-label="Go back"
                    >
                        <img
                            src={ArrowButton}
                            alt="Go back"
                            className="back-button__icon"
                        />
                    </button>
                </div>
                <div className='Picture-Container'>
                    <img src={TicketPic} alt="Ticket" className='Ticket-Pic' />
                </div>
            </div>
            <div className='right-column-1'>
                <div className='Title-Container'>
                    <h1>Create an Inquiry<br/> Ticket</h1>
                </div>
                <div className='Process-Container'>
                    <TicketWizard />
                </div>
            </div>
        </div>
    );
}