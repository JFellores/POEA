import React, { useState } from 'react'
import { useNavigate }     from 'react-router-dom'
import { supabase }        from '../../supabaseClient'
import Group25             from '../../assets/Group25.png'
import Rectangle2          from '../../assets/Rectangle2.png'
import ArrowBack           from '../../assets/arrow-circle-left.png'
import './ORAAPage.css'

export default function ORAAPage() {
  const navigate = useNavigate()

  // form state
  const [form, setForm]       = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email:    form.email,
      password: form.password,
    })

    setLoading(false)

    if (signInError) {
      setError(signInError.message)
    } else {
      navigate('/oraalogin')
    }
  }

  return (
    <div className="oraa-page">
      {/* ─── Banner ─────────────────────────── */}
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

      {/* ─── Header ─────────────────────────── */}
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

      {/* ─── Content ────────────────────────── */}
      <div className="oraa-page__content">
        <p className="oraa-page__intro">
          The Online Recruitment Authority Application (ORAA) v.2 is an integrated system for
          filing of recruitment application for three types of Recruitment Authorities, such as:
          Special Recruitment Application (SRA), Letter of Authority (LOA), and combined SRA with LOA.
        </p>

        <div className="oraa-page__form-layout">
          <div className="oraa-page__form-card">
            {error && <div className="oraa-page__error">{error}</div>}

            <div className="oraa-page__field">
              <label className="oraa-page__label">Enter Username</label>
              <input
                name="email"
                className="oraa-page__input"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="oraa-page__field">
              <label className="oraa-page__label">Enter Password</label>
              <input
                name="password"
                className="oraa-page__input"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button
              className="oraa-page__login-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in…' : 'Login'}
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
              <button
                className="oraa-page__recover-btn"
                onClick={() => navigate('/registration')}
              >
                Recover account
              </button>
            </p>
          </aside>
        </div>
      </div>
    </div>
  )
}
