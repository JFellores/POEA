import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ORAAPage.css'

import Group25    from '../../assets/Group25.png'
import Rectangle2 from '../../assets/Rectangle2.png'
import ArrowBack  from '../../assets/arrow-circle-left.png'

export default function ORAAPage() {
  const navigate = useNavigate()

  return (
    <div className="oraa-page">
      {/* ─── Banner ───────────────────────────────────────── */}
      <div className="oraa-banner">
        <img
          className="oraa-banner__img"
          src={Group25}
          alt="People meeting banner"
        />
        <img
          className="oraa-banner__overlay"
          src={Rectangle2}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* ─── Full-Bleed Header: Back + Title ───────────────── */}
      <header className="oraa-page__header">
        <button
          className="oraa-page__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <img
            src={ArrowBack}
            alt="Back"
            className="oraa-page__back-icon"
          />
        </button>
        <h1 className="oraa-page__title">
          Online Recruitment Authority Application
        </h1>
      </header>

      {/* ─── Centered Page Content ─────────────────────────── */}
      <div className="oraa-page__content">
        <p className="oraa-page__intro">
          The Online Recruitment Authority Application (ORAA) v.2 is an integrated system for
          filing of recruitment application for three types of Recruitment Authorities, such as:
          Special Recruitment Application (SRA), Letter of Authority (LOA), and combined SRA with LOA.
        </p>

        <div className="oraa-page__form-layout">
          <div className="oraa-page__form-card">
            <div className="oraa-page__field">
              <label className="oraa-page__label">Enter Username</label>
              <input
                className="oraa-page__input"
                type="text"
                placeholder="Input text"
              />
            </div>
            <div className="oraa-page__field">
              <label className="oraa-page__label">Enter Password</label>
              <input
                className="oraa-page__input"
                type="password"
                placeholder="Input text"
              />
            </div>
            <button
              className="oraa-page__login-btn"
              onClick={() => navigate('/oraalogin')}
            >
              Login
            </button>
          </div>

          <aside className="oraa-page__aside">
            <p className="oraa-page__aside-line">
              Don’t have an account?{' '}
              <button
                className="oraa-page__register-btn"
                onClick={() => navigate('/registration/new')}
              >
                Register
              </button>
            </p>
            <p className="oraa-page__aside-line">
              Can’t remember your account details?{' '}
              <a href="#" className="oraa-page__recover-link">
                Recover account
              </a>
            </p>
          </aside>
        </div>
      </div>
    </div>
  )
}
