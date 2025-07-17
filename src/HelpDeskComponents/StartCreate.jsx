import React from 'react';
import './StartCreate.css';  // or remove
import step1 from '../assets/step1.png';

export default function StartCreate({ onNext, onBack, step, totalSteps }) {
    console.log('StartCreate rendered'); // debug
    return (
        <div className="startcreate-main">

            <div className="process-image">
                <img src={step1} alt="Step1" />
            </div>

            <h1>How can we be of service today?</h1>
            <div className='service-container'>
                <div className='service1'>
                    <p>Select a Service</p>
                    <select className="service1__select" defaultValue="">
                        <option value="" disabled>-- Select Service --</option>
                        <option value="document-processing">Document Processing</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="tech-support">Technical Support</option>
                        <option value="other-service">Other</option>
                    </select>
                </div>
                <div className='service2'>
                    <p>Select a Concern</p>
                    <select className="service2__select" defaultValue="">
                        <option value="" disabled>-- Select Concern --</option>
                        <option value="account">Account Issue</option>
                        <option value="payment">Payment Issue</option>
                        <option value="schedule">Schedule Change</option>
                        <option value="status">Status Update</option>
                        <option value="feedback">Feedback / Suggestion</option>
                    </select>
                </div>
            </div>

            <div className='button-container'>
                {onBack && (
                    <button
                        type="button"
                        className="next-button"
                        onClick={onBack}
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

        </div >
    );
}
