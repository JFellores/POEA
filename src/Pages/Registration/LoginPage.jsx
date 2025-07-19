// src/Pages/Registration/LoginPage.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate }                 from 'react-router-dom'
import { supabase }                    from '../../supabaseClient'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      // 1) get the user
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError || !user) {
        console.error('Auth error or not logged in:', userError)
        return navigate('/login')
      }

      // 2) fetch profile, allowing zero rows
      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('first_name, middle_name, last_name, email, dob')
        .eq('user_id', user.id)
        .maybeSingle()

      if (profileError) {
        console.error('Error fetching profile:', profileError)
        setError(profileError.message)
      } else if (!data) {
        console.warn('No profile row found for user', user.id)
      } else {
        setProfile(data)
      }

      setLoading(false)
    }

    fetchProfile()
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')   // ← now takes you to the homepage
  }

  if (loading) return <div className="login-page">Loading...</div>
  if (error)   return <div className="login-page error">{error}</div>
  if (!profile) {
    return (
      <div className="login-page">
        <p>No profile data yet. Please complete your registration.</p>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="profile-card">
        <div className="avatar">
          <svg width="80" height="80" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" fill="#ccc" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#ccc" />
          </svg>
        </div>

        <h2 className="name">
          {profile.first_name}
          {profile.middle_name && ` ${profile.middle_name.charAt(0)}.`}
          {` ${profile.last_name}`}
        </h2>

        <div className="info">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Birth Date:</strong> {new Date(profile.dob).toLocaleDateString()}</p>
        </div>

        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
