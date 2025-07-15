import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OFWPage.css';
import ArrowBack from '../../assets/arrow-circle-left.png';

export default function OFWPage() {
  const navigate = useNavigate();

  return (
    <div className="ofw-page">
      {/* Title Bar */}
      <header className="ofw-page__header">
        <button
          className="ofw-page__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <img src={ArrowBack} alt="Back" />
        </button>
        <div className="ofw-page__titles">
          <h1>Transfer of Records</h1>
          <p className="ofw-page__subtitle">
            Old Balik-Manggawa (BM) Record Transfer to POEA Online Processing System for Balik-Manggagawa (POPS BAM)
          </p>
        </div>
      </header>

      {/* Main Content */}
     <main className="ofw-page__main">
        {/* left: blue card */}
        <div className="ofw-page__card">
          <label>
            First Name
            <input type="text" placeholder="Input text" />
          </label>
          <label>
            Middle Name
            <input type="text" placeholder="Input text" />
          </label>
          <label>
            Last Name
            <input type="text" placeholder="Input text" />
          </label>
          <label>
            Birth Date
            <input type="date" />
          </label>
          <button className="ofw-page__find-btn">Find</button>
        </div>

        {/* right: reminders box */}
        <aside className="ofw-page__reminders">
          <h2>Reminders:</h2>
          <ol>
            <li>Input your details as shown in your previous account or OEC.</li>
            <li>Create an eregistration account first before transfering your records, make sure you can login your eregistration account please note that if you created multiple account you will encounter problems.</li>
            <li>Check that your records are correct.</li>
          </ol>
        </aside>
      </main>

                <div className="ofw-page__divider" />


      {/* Bullets outside the box */}
      <ul className="ofw-page__notes">
        <li>Please input your information from the old Balik-Manggagawa system.</li>
        <li><strong>Your records from the old BM System are automatically transferred 2–6 hours <br></br>after you have created your e-registration account.</strong></li>
        <li>Please use this facility if you have created your account more than 6 hours already.</li>
      </ul>
    </div>
  );
}
