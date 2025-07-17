import React from 'react';
import './StartCreate5.css';  // or remove
import step5 from '../assets/step5.png';

export default function StartCreate({ onNext, onBack, step, totalSteps }) {    console.log('StartCreate rendered'); // debug
    return (
        <div className="startcreate-main">

            <div className="process-image">
                <img src={step5} alt="Step4" />
            </div>

            <div className="status-container">
                <span className="status-label">STATUS:</span>
                <div className="status-card">
                    {/* swap ✔ for an icon/img if you have one */}
                    <span className="status-card__icon" aria-hidden="true">✔</span>
                    <span className="status-card__text">User details changed successfully</span>
                </div>
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
