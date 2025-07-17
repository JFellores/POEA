import React from 'react';
import './StartCreate2.css';  // or remove
import step2 from '../assets/step2.png';

export default function StartCreate({ onNext, onBack, step, totalSteps }) {    console.log('StartCreate rendered'); // debug
    return (
        <div className="startcreate-main">

            <div className="process-image">
                <img src={step2} alt="Step1" />
            </div>

            <h1>FAQs (Frequently Asked Questions)</h1>
            <div className="faq-container">
                <ul className="faq-grid">
                    <li>
                        <strong>Account Login Issues</strong>
                        <ul className="faq-answers">
                            <li>Use “Forgot Password” to reset.</li>
                            <li>Contact support if no reset email arrives.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>OFW Pass Issuance</strong>
                        <ul className="faq-answers">
                            <li>Upload a clear passport image.</li>
                            <li>Allow up to 24 hrs for review.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Payment Not Showing</strong>
                        <ul className="faq-answers">
                            <li>Include payment reference number.</li>
                            <li>Receipts sync in 1 banking day.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Update Employment Info</strong>
                        <ul className="faq-answers">
                            <li>Submit new contract or employer letter.</li>
                            <li>Check updates under My Profile.</li>
                        </ul>
                    </li>
                </ul>
            </div>


            <div className='button-container'>
                {onBack && (
                    <button
                        type="button"
                        className="next-button"
                        onClick={onBack}
                        style={{ marginRight: '10px' }}
                        aria-label="Go to previous step"
                    >
                        Back
                    </button>
                )}
                <button
                    type="button"
                    className="next-button"
                    onClick={onNext}
                    aria-label="Go to next step"
                >
                    {step === totalSteps - 1 ? 'Finish' : 'Next'}
                </button>
            </div >

        </div>
    );
}
