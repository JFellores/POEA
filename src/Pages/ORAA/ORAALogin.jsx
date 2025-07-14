import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ORAALogin.css';

import image13    from '../../assets/image13.png';
import ArrowBack  from '../../assets/arrow-circle-left.png';
import RQIcon     from '../../assets/rq.png'

export default function ORAALogin() {
  const navigate = useNavigate();

  return (
    <div className="oraalogin-page">
      {/* ─── Header / Banner ────────────────────────────── */}
      <header className="oraalogin__header">
        <img src={image13}    alt="Banner" className="oraalogin__banner" />
      </header>

      {/* ─── Back + Title ───────────────────────────────── */}
      <div className="oraalogin__topbar">
        <button
          className="oraalogin__back"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <img src={ArrowBack} alt="" />
        </button>

        <h2 className="oraalogin__title">
          Online Recruitment Authority Application
        </h2>
      </div>

      {/* ─── Big Blue Card ─────────────────────────────── */}
    <div
            className="oraalogin__card"
            onClick={() => navigate('/oraa/requirements')}
        >
            {/* icon on the left */}
            <img
            src={RQIcon}
            alt="Requirements icon"
            className="oraalogin__card-icon"
            />
            Requirements and Qualifications
    </div>

    <h3 className="oraalogin__actions-title">
      Select transaction:
    </h3>

      {/* ─── Actions Grid ──────────────────────────────── */}
      <section className="oraalogin__actions">
        <button onClick={() => navigate('/oraalogin/apply')}>
          Apply Recruitment Authority
        </button>
        <button onClick={() => navigate('/oraalogin/status')}>
          View Status of Application
        </button>
        <button onClick={() => navigate('/oraalogin/compliance')}>
          For Compliance
        </button>
        <button onClick={() => navigate('/oraalogin/report')}>
          Submit Report
        </button>
      </section>

      {/* ─── Logout ────────────────────────────────────── */}
      <button
        className="oraalogin__logout"
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </div>
  );
}
