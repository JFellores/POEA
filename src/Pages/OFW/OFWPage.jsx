import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OFWPage.css';
import ArrowButton from '../../assets/arrow-circle-left.png';

export default function OFWPage() {
    const navigate     = useNavigate();
    return (
        <div className="transfer-page">
            <div className='lower-header'>
                <div className='button-container'>
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
                </div>

                <div className='title-container'>
                    <h1>Transfer Of Records</h1>
                    <p>Old Balik-Manggawa (BM) Record Transfer to POEA Online Processing System for Balik-Manggagawa (POPS BAM)</p>
                </div>

            </div>
            <div className='lower-body'>

                <div className='left-column'>
                     <h1>Retrieve your previous Balik‑Manggagawa records</h1>
                        <div className="form-card">
                            <label>
                                First Name
                                <input type="text" placeholder="Input text" />
                                <span className="eye-icon">👁️</span>
                            </label>
                            <label>
                                Middle Name
                                <input type="text" placeholder="Input text" />
                                <span className="eye-icon">👁️</span>
                            </label>
                            <label>
                                Last Name
                                <input type="text" placeholder="Input text" />
                                <span className="eye-icon">👁️</span>
                            </label>
                            <label>
                                Birth Date
                                <input type="date" defaultValue="1992-05-09" />
                            </label>
                            <button className="find-button">Find</button>
                        </div>
                    </div>

                <div className='right-column'>
                    <h2>Reminders:</h2>

                        <div className="reminders-box">
                            <ol>
                            <li>Input your details as shown in your previous account or OEC</li>
                            <li>
                                Create an e‑registration account first before transferring your
                                records. You must be able to log in to that account; creating
                                multiple accounts may cause problems.
                            </li>
                            <li>Check that your records are correct.</li>
                            </ol>
                        </div>

                          <hr id="ofw-page__divider" />

                       <ul className="notes-list">
                        <li>Please input your information from the old Balik‑Manggagawa system.</li>
                        <li>
                        <strong>
                            Your records from the old BM System are automatically transferred
                            2–6 hours after you have created your e‑registration account.
                        </strong>
                        </li>
                        <li>Please use this facility if you created your account more than 6 hours ago.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
