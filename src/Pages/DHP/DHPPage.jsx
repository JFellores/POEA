// src/Pages/DHPPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './DHPPage.css'

export default function DHPPage() {
  const navigate = useNavigate()

  return (
    <div className="dhp-page">
      {/* ─── Title Bar ───────────────────────── */}
      <div className="dhp-page__titlebar">
               <button
         className="dhp-page__back"
         onClick={() => navigate(-1)}
         aria-label="Go back"
      >
         ←
       </button>
        <h1>Direct Hire Processing</h1>
      </div>

      {/* ─── Content Grid ─────────────────────── */}
      <div className="dhp-page__content">
        {/* ─── Login Card ──────────────────────── */}
        <div className="dhp-page__form-card">
          <div className="dhp-page__field">
            <label>Username</label>
            <input type="text" placeholder="Input text" />
          </div>
          <div className="dhp-page__field">
            <label>Password</label>
            <div className="dhp-page__password-wrapper">
              <input type="password" placeholder="Input text" />

            </div>
          </div>
         <button
           className="dhp-page__login-btn"
           onClick={() => navigate('/dhp/login')}
         >
           Login
         </button>
        </div>

        {/* ─── Aside Links ─────────────────────── */}
        <aside className="dhp-page__aside">
          <p>
            Don’t have an account?{' '}
            <button
              className="dhp-page__register-btn"
              onClick={() => navigate('/registration')}
            >
              Register
            </button>
          </p>
          <p>
            Can’t remember your account details?{' '}
            <a href="#" className="dhp-page__recover-link">
              Recover account
            </a>
          </p>
        </aside>
      </div>
    </div>
  )
}
