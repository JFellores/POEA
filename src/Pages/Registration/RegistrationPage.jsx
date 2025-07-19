import React, { useState }   from 'react'
import { useNavigate }       from 'react-router-dom'
import Modal                from 'react-modal'
import { supabase }          from '../../supabaseClient'
import './RegistrationPage.css'
import bannerVision          from '../../assets/bannervision.png'
import ArrowBack             from '../../assets/arrow-circle-left.png'

Modal.setAppElement('#root')

export default function RegistrationPage() {
  const navigate = useNavigate()

  // login form state
  const [form, setForm]           = useState({ email: '', password: '' })
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)

  // recovery modal state
  const [showRecover, setShowRecover]       = useState(false)
  const [recoverEmail, setRecoverEmail]     = useState('')
  const [recoverLoading, setRecoverLoading] = useState(false)
  const [recoverError, setRecoverError]     = useState(null)
  const [recoverMessage, setRecoverMessage] = useState(null)

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
    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }
    setLoading(false)
    navigate('/login')  // or your post-login route
  }

  const openRecover = () => {
    setRecoverEmail(form.email)
    setRecoverError(null)
    setRecoverMessage(null)
    setShowRecover(true)
  }

  const sendRecovery = async () => {
    setRecoverLoading(true)
    setRecoverError(null)
    setRecoverMessage(null)

    const { error } = await supabase.auth.resetPasswordForEmail(recoverEmail, {
      redirectTo: `${window.location.origin}/reset-password`
    })

    if (error) {
      setRecoverError(error.message)
    } else {
      setRecoverMessage(
        `If an account exists for ${recoverEmail}, you’ll receive a reset email shortly.`
      )
    }
    setRecoverLoading(false)
  }

  return (
    <div className="registration-page">
      {/* ─── Top Banner ─────────────────────────── */}
      <div className="registration-page__banner">
        <div className="registration-page__banner-text">
          <h1>E‑Registration</h1>
          <p>Sign‑up or log‑in to update your Profile and get hired abroad.</p>
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="registration-page__input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          {error && <div className="registration-page__error">{error}</div>}
          <button
            className="registration-page__next"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </div>

        {/* ─── Right: register + forgot ─────────── */}
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
            <a href="#" className="registration-page__link" onClick={openRecover}>
              Forgot password
            </a>
          </p>
        </div>
      </div>

      {/* ─── Recovery Modal ────────────────────── */}
      <Modal
        isOpen={showRecover}
        onRequestClose={() => setShowRecover(false)}
        className="email-modal"
        overlayClassName="email-modal__overlay"
      >
        <h2>Reset your password</h2>
        <p>Enter your email to receive a reset link:</p>
        <input
          type="email"
          value={recoverEmail}
          onChange={e => setRecoverEmail(e.target.value)}
          placeholder="Email"
          className="modal-input"
        />

        {recoverError && (
          <div className="registration-page__error">{recoverError}</div>
        )}
        {recoverMessage && (
          <div className="registration-page__message">{recoverMessage}</div>
        )}

        <div className="modal-btns">
          <button
            onClick={sendRecovery}
            disabled={recoverLoading}
            className="modal-btn"
          >
            {recoverLoading ? 'Sending…' : 'Send'}
          </button>
          <button
            onClick={() => setShowRecover(false)}
            className="modal-btn"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  )
}
