import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewAccount.css';

export default function NewAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    gender: '',
    email: '',
    dob: '1992-05-09',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: your registration logic here
    // e.g. send form to server, then navigate:
    navigate('/');
  };

  return (
    <div className="newacct-page">
      <aside className="newacct-notices">
        <section className="notice paalala">
          <h2>PAALALA:</h2>
          <ol>
            <li>
              Ilagay ang iyong personal information base sa pagkakasulat nito sa iyong valid
              passport.
            </li>
            <li>
              Gumamit lamang ng valid at active na personal email address upang siguradong
              makakatanggap ng email confirmation.
            </li>
            <li>
              Kung walang matatanggap na email confirmation o may maling na‑i‑encode sa paggawa
              o pagre‑register, huwag gumawa ng panibagong account, i‑file ang concern sa POEA
              Online Helpdesk.
            </li>
            <li>
              Siguraduhing tama at sariling impormasyon ang gagamitin sa paggawa ng account.
            </li>
            <li>
              Basahin at i‑double check ang lahat ng detalye bago tumuloy sa pagre‑register.
            </li>
            <li>
              Tandaan ang ginamit na email address at ang magge‑generate na
              eRegistration Number matapos i‑click ang Register.
            </li>
          </ol>
        </section>
        <hr />
        <section className="notice babala">
          <h2>BABALA:</h2>
          <p>
            Ang ano mang uri ng paglabag o pagsisinungaling sa MALING IMPORMASYON / MISREPRESENTATION
            at paggawa ng MULTIPLE ACCOUNT ay maaring maging dahilan ng pagkakasale ang pribilehiyong
            gamit ng eRegistration System at pag-access/pass sa POEA processing. Kung makakaranas ng
            problema sa paggawa ng account/pagre‑register, o pagbubukas ng iyong account, mag‑file
            ng Ticket sa DMW Helpdesk.
          </p>
        </section>
      </aside>

      <div className="newacct-form">
        <h3 className="newacct-form__title">New Account</h3>
        <p className="newacct-form__subtitle">
          *Please enter the details that appear in your passport
        </p>
        <form onSubmit={handleSubmit}>
          <div className="newacct-form__row">
            <label>
              First Name
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
          </div>

          <div className="newacct-form__row">
            <label>
              Middle Name
              <input
                name="middleName"
                type="text"
                value={form.middleName}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
          </div>

          <div className="newacct-form__row">
            <label>
              Last Name
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
          </div>

          <div className="newacct-form__grid2">
            <label>
              Suffix (if applicable)
              <input
                name="suffix"
                type="text"
                value={form.suffix}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
            <label>
              Gender
              <input
                name="gender"
                type="text"
                value={form.gender}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
          </div>

          <div className="newacct-form__row">
            <label>
              Email address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Input text"
              />
            </label>
          </div>

          <div className="newacct-form__row">
            <label>
              Birth Date
              <input
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className="newacct-form__submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
