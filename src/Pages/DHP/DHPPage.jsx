import React, { useState } from 'react'
import { useNavigate }     from 'react-router-dom'
import { supabase }        from '../../supabaseClient'
import ArrowBack           from '../../assets/arrow-circle-left.png'
import './DHPPage.css'

export default function DHPPage() {
  const navigate = useNavigate()

  // form state
  const [form, setForm]       = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  // update form fields
  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  // submit login
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
      // on success, navigate to DHPLogin page
      navigate('/dhp/login')
    }
  }

  return (
    <div className="dhp-page">
      {/* ─── Title Bar ───────────────────────── */}
      <div className="dhp-page__titlebar">
        <button
          className="dhp-page__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <img
            src={ArrowBack}
            alt="Go back"
            className="dhp-page__back-icon"
          />
        </button>
        <h1>Direct Hire Processing</h1>
      </div>

      {/* ─── Content Grid ─────────────────────── */}
      <div className="dhp-page__content">
        {/* ─── Login Card ──────────────────────── */}
        <div className="dhp-page__form-card">
          {error && <div className="dhp-page__error">{error}</div>}

          <div className="dhp-page__field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="dhp-page__field">
            <label>Password</label>
            <div className="dhp-page__password-wrapper">
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="dhp-page__login-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </div>

        {/* ─── Aside Links ─────────────────────── */}
        <aside className="dhp-page__aside">
          <p>
            Don’t have an account?{' '}
            <button
              className="dhp-page__register-btn"
              onClick={() => navigate('/registration/new')}
            >
              Register
            </button>
          </p>
          <p className="dhp-page__recover">
            Can’t remember your account details?{' '}
            <button
              className="dhp-page__recover-link"
              onClick={() => navigate('/registration')}
            >
              Recover account
            </button>
          </p>
        </aside>
      </div>
    </div>
  )
}
