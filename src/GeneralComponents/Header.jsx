import React from 'react';
import './Header.css';
import logo from '../assets/poea_logo.png';
import menuIcon from '../assets/menu.png';

const navItems = [
  'Issuance',
  'OFW pass',
  'Online Services',
  'Licensed Recruitment Agencies',
  'Approved Job Orders',
  'Procurement',
  'FAQs',
];

export default function Header() {
  return (
    <header className="header">

      {/* ─── Row 1: logo / title / search ─── */}
      <div className="header__top">
        <div className="header__left">
          <img src={logo} alt="DMW Logo" className="header__logo" />
          <div className="header__text">
            <div className="header__topline">Republic of the Philippines</div>
            <hr className="header__divider" />
            <h1 className="header__title">Department of Migrant Workers</h1>
            <p className="header__subtitle">
              Kagawaran ng Manggagawang Pandarayuhan
            </p>
          </div>
        </div>
        <div className="header__search">
          <label htmlFor="search-input" className="header__search-label">
            Search
          </label>
          <div className="header__search-box">
            <input id="search-input" type="text" placeholder="Search" />
            <button aria-label="Search">🔍</button>
          </div>
        </div>
      </div>

      {/* ─── Row 2: horizontal navbar ─── */}
      <nav className="header__nav">
        <button className="nav__toggle" aria-label="Open menu">
         <img src={menuIcon} alt="" />
       </button>
        <ul className="navbar__list">
          {navItems.map(item => (
            <li key={item} className="navbar__item">
              <a href={`#${item.replace(/\s+/g, '')}`} className="navbar__link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
          
    </header>
  );
}
