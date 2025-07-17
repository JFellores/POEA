import React from 'react'
import { useNavigate } from 'react-router-dom'
import './RegistrationPage.css'
import bannerVision from '../../assets/bannervision.png'
import ArrowBack    from '../../assets/arrow-circle-left.png'

export default function RegistrationPage() {
  const navigate = useNavigate()

  return (
    <div className="registration-page">
      {/* ─── Top Banner ─────────────────────────── */}
      <div className="registration-page__banner">
        <div className="registration-page__banner-text">
          <h1>E‑Registration</h1>
          <p>
            Sign‑up and get your e‑Registration Number here or log‑in to your
            account to update your Profile and important details required to get
            hired for a job abroad.
          </p>
        </div>
        <div className="registration-page__banner-img">
          <img src={bannerVision} alt="Our Vision" />
        </div>
      </div>

      {/* ─── Two‑column login/register area ─────── */}
      <div className="registration-page__content">
        {/* ─── Left: login form ─────────────────── */}
        <div className="registration-page__left">
          <button
            className="registration-page__back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={ArrowBack} alt="Back" />
          </button>

          <label className="registration-page__form-label">Login</label>
          <div className="registration-page__input-wrapper">
            <input type="email" placeholder="Input Email" />
          </div>
          <button
            className="registration-page__next"
            onClick={() => { /* handle Next click */ }}
          >
            Next
          </button>
        </div>

          {/* ─── Right: register/recover ───────────── */}
          <div className="registration-page__right">
            <div className="registration-page__register-row">
              <label className="registration-page__form-label">
                Create an account here:
              </label>
              <button
                className="registration-page__register"
                onClick={() => navigate('/registration/new')}

              >
                Register
              </button>
            </div>
            <p className="registration-page__recover">
              Can’t remember your account details?{' '}
              <a href="#">Recover account</a>
            </p>
          </div>

      </div>
    </div>
  )
}
