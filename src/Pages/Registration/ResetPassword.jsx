import React, { useState, useEffect } from 'react'
import { useNavigate }                from 'react-router-dom'
import { supabase }                   from '../../supabaseClient'
import './ResetPassword.css'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [message, setMessage]   = useState(null)

  useEffect(() => {
    // 1) grab tokens from URL hash
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const access_token  = params.get('access_token')
    const refresh_token = params.get('refresh_token')

    if (!access_token || !refresh_token) {
      setError('Invalid or expired reset link.')
      return
    }

    // 2) establish session in the client
    supabase.auth
      .setSession({ access_token, refresh_token })
      .then(({ error }) => {
        if (error) {
          console.error('Error setting session:', error)
          setError('Failed to validate reset link.')
        }
      })
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // 3) now update the password
    const { error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) {
      setError(updateError.message)
    } else {
      setMessage('Password reset! Redirecting to login…')
      setTimeout(() => navigate('/login'), 3000)
    }

    setLoading(false)
  }

  return (
    <div className="reset-page">
      <div className="reset-card">
        <h2>Reset Password</h2>

        {error && <p className="reset-error">{error}</p>}
        {message ? (
          <p className="reset-message">{message}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              New Password
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="reset-input"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="reset-btn reset-btn-primary"
            >
              {loading ? 'Updating…' : 'Reset Password'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/login')}
              className="reset-btn reset-btn-secondary"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  )
}