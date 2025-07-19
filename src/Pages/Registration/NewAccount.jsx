// src/Pages/Registration/NewAccount.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate }                      from 'react-router-dom'
import Modal                                from 'react-modal'
import { supabase }                         from '../../supabaseClient'
import './NewAccount.css'

// Accessibility: tie modal to your root element
Modal.setAppElement('#root')

export default function NewAccount() {
  const navigate = useNavigate()
  // form state
  const [form, setForm] = useState({
    firstName:  '',
    middleName: '',
    lastName:   '',
    suffix:     '',
    gender:     '',
    email:      '',
    password:   '',
    dob:        '1992-05-09',
  })
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // We'll stash the profile data here until the user actually signs in.
  const pendingProfileRef = useRef(null)

  // Listen for auth changes (including the post-confirm login event)
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        // Only act when the user is fully logged in (session.user exists)
        const userId = session?.user?.id
        if (userId && pendingProfileRef.current) {
          console.log('Auth change detected, inserting profile for', userId)
          const profileData = pendingProfileRef.current
          const { error: insertError } = await supabase
            .from('profiles')
            .insert({ user_id: userId, ...profileData })
          if (insertError) {
            console.error('Profile insert failed:', insertError)
          } else {
            console.log('Profile inserted successfully')
          }
          // Clear out the pending data so we don't run again
          pendingProfileRef.current = null
        }
      }
    )
    return () => listener.subscription.unsubscribe()
  }, [])

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    console.log('▶️ handleSubmit start', form)

    // 1) Trigger sign-up (sends confirmation email if required)
    const { user, session, error: signUpError } = await supabase.auth.signUp({
      email:    form.email,
      password: form.password,
    })
    console.log('🔹 signUp result', { user, session, signUpError })
    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // 2) Save profile data to apply later on first login
    pendingProfileRef.current = {
      first_name:  form.firstName,
      middle_name: form.middleName,
      last_name:   form.lastName,
      suffix:      form.suffix,
      gender:      form.gender,
      email:       form.email,
      dob:         form.dob,
    }

    // 3) Show confirmation modal
    console.log('✅ registration initiated – showing confirmation modal')
    setLoading(false)
    setShowConfirmation(true)
  }

  return (
    <>
      <div className="newacct-page">
        <aside className="newacct-notices">
          <section className="notice paalala">
            <h2>PAALALA:</h2>
            <ol>
              <li>Ilagay ang iyong personal information base sa pagkakasulat nito sa iyong valid passport.</li>
              <li>Gumamit lamang ng valid at active na personal email address upang siguradong makakatanggap ng email confirmation.</li>
              <li>Kung walang matatanggap na email confirmation o may maling na‑i‑encode sa paggawa o pagre‑register, huwag gumawa ng panibagong account, i‑file ang concern sa POEA Online Helpdesk.</li>
              <li>Siguraduhing tama at sariling impormasyon ang gagamitin sa paggawa ng account.</li>
              <li>Basahin at i‑double check ang lahat ng detalye bago tumuloy sa pagre‑register.</li>
              <li>Tandaan ang ginamit na email address at ang magge‑generate na eRegistration Number matapos i‑click ang Register.</li>
            </ol>
          </section>
          <hr />
          <section className="notice babala">
            <h2>BABALA:</h2>
            <p>
              Ang ano mang uri ng paglabag o pagsisinungaling sa MALING IMPORMASYON / MISREPRESENTATION at paggawa ng MULTIPLE ACCOUNT ay maaring maging dahilan ng pagkakasale ang pribilehiyong gamit ng eRegistration System at pag-access/pass sa POEA processing. Kung makakaranas ng problema sa paggawa ng account/pagre‑register, o pagbubukas ng iyong account, mag‑file ng Ticket sa DMW Helpdesk.
            </p>
          </section>
        </aside>

        <div className="newacct-form">
          <h3 className="newacct-form__title">New Account</h3>
          <p className="newacct-form__subtitle">*Please enter the details that appear in your passport</p>

          {error && <div className="newacct-form__error">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="newacct-form__row">
              <label>
                First Name
                <input name="firstName" type="text" value={form.firstName} onChange={handleChange} required/>
              </label>
            </div>
            {/* Middle Name */}
            <div className="newacct-form__row">
              <label>
                Middle Name
                <input name="middleName" type="text" value={form.middleName} onChange={handleChange}/>
              </label>
            </div>
            {/* Last Name */}
            <div className="newacct-form__row">
              <label>
                Last Name
                <input name="lastName" type="text" value={form.lastName} onChange={handleChange} required/>
              </label>
            </div>
            {/* Suffix & Gender */}
            <div className="newacct-form__grid2">
              <label>
                Suffix (if applicable)
                <input name="suffix" type="text" value={form.suffix} onChange={handleChange}/>
              </label>
              <label>
                Gender
                <input name="gender" type="text" value={form.gender} onChange={handleChange} required/>
              </label>
            </div>
            {/* Email */}
            <div className="newacct-form__row">
              <label>
                Email address
                <input name="email" type="email" value={form.email} onChange={handleChange} required/>
              </label>
            </div>
            {/* Password */}
            <div className="newacct-form__row">
              <label>
                Password
                <input name="password" type="password" value={form.password} onChange={handleChange} required/>
              </label>
            </div>
            {/* Birth Date */}
            <div className="newacct-form__row">
              <label>
                Birth Date
                <input name="dob" type="date" value={form.dob} onChange={handleChange} required/>
              </label>
            </div>

            <button type="submit" className="newacct-form__submit" disabled={loading}>
              {loading ? 'Registering…' : 'Register'}
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onRequestClose={() => setShowConfirmation(false)}
        contentLabel="Check your email"
        className="email-modal"
        overlayClassName="email-modal__overlay"
      >
        <h2>Almost there!</h2>
        <p>
          A confirmation link has been sent to <strong>{form.email}</strong>. Please check your inbox (or spam) and click the link to finish registration.
        </p>
        <button onClick={() => navigate('/login')}>
          OK, take me to Login
        </button>
      </Modal>
    </>
  )
}
