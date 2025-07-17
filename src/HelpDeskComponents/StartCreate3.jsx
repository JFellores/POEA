import React from 'react';
import './StartCreate3.css';  // or remove
import step3 from '../assets/step3.png';

export default function StartCreate({ onNext, onBack, step, totalSteps }) {    console.log('StartCreate rendered'); // debug
    return (
        <div className="startcreate-main">

            <div className="process-image">
                <img src={step3} alt="Step1" />
            </div>

            <div className="acct-container">
                <ul className="acct-list">
                    <li className="acct-item">
                        <strong>Retrieve your account information</strong>
                        <ul className="acct-sublist">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </li>
                </ul>

                <hr className="acct-separator" />

                <ul className="acct-list">
                    <li className="acct-item">
                        <strong>None of those worked?</strong>
                        <ul className="acct-sublist">
                            <li><a href="#!">Link 1</a></li>
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
