import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DHPLogin.css';

import ArrowBack from '../../assets/arrow-circle-left.png';  // new import
import Job1      from '../../assets/image14.png';
import Job2      from '../../assets/image15.png';
import Job3      from '../../assets/image16.png';
import Job4      from '../../assets/image17.png';

export default function DHPLogin() {
  const navigate = useNavigate();

  return (
    <div className="dhp-login-page">
      {/* ─── Full-width Title Bar ─────────────────────── */}
      <section className="dhp-login-page__titlebar">
        <button
          className="dhp-login-page__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <img
            src={ArrowBack}
            alt="Go back"
            className="dhp-login-page__back-icon"
          />
        </button>
        <h1>Direct Hire Processing</h1>
      </section>

      {/* ─── Foreign Job Listings ───────────────── */}
      <section className="dhp-login-page__jobs-section">
        <h2 className="dhp-login-page__jobs-title">
          Foreign Job listings
        </h2>

        <div className="dhp-login-page__search">
          <input
            type="text"
            placeholder="Search listings..."
          />
          <button aria-label="Search">🔍</button>
        </div>

        <div className="dhp-login-page__jobs-grid">
          <img src={Job1} alt="Job listing 1" />
          <img src={Job2} alt="Job listing 2" />
          <img src={Job3} alt="Job listing 3" />
          <img src={Job4} alt="Job listing 4" />
        </div>
      </section>
    </div>
  );
}
