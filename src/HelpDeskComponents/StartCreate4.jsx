import React from 'react';
import './StartCreate4.css';  // or remove
import step4 from '../assets/step4.png';

export default function StartCreate({ onNext, onBack, step, totalSteps }) {
    console.log('StartCreate rendered'); // debug
    return (
        <div className="startcreate-main">

            <div className="process-image">
                <img src={step4} alt="Step4" />
            </div>
            <div className="verify-container">
                <h2 className="verify-title">Verification</h2>

                <div className="verify-otp-row">
                    <input className="verify-otp-input" type="text" maxLength={1} />
                    <input className="verify-otp-input" type="text" maxLength={1} />
                    <input className="verify-otp-input" type="text" maxLength={1} />
                    <input className="verify-otp-input" type="text" maxLength={1} />
                    <input className="verify-otp-input" type="text" maxLength={1} />
                    <input className="verify-otp-input" type="text" maxLength={1} />
                </div>

                <button type="button" className="verify-resend">Resend code</button>
            </div>



            <div className='button-container'>
                {onBack && (
                    <button
                        type="button"
                        className="next-button"
                        onClick={onBack}
                        aria-label="Go to previous step"
                        style={{ marginRight: '10px' }}

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
