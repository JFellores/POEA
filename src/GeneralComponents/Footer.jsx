import React from 'react';
import './Footer.css';
import crest from '../assets/crest.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-col footer-col1">
        <img src={crest} alt="Philippine Seal" className="footer-logo" />
      </div>

      <div className="footer-col footer-col2">
        <h1>Republic of the Philippines</h1>
        <p>
          All content is in the public domain<br />
          unless otherwise stated.
        </p>
      </div>

      <div className="footer-col footer-col3">
        <h1>About GovPH</h1>
        <p>
          Learn more about the Philippine government, its structure,
          how government works and the people behind it.
        </p>
        <ul>
          <li>Official Gazette</li>
          <li>GOVPH</li>
          <li>About The Government</li>
        </ul>
      </div>

      <div className="footer-col footer-col4">
        <h1>Government Links</h1>
        <p>
          All content is in the public domain<br />
          unless otherwise stated.
        </p>
        <ul>
          <li>Office of the President</li>
          <li>Office of the Vice President</li>
          <li>Senate of the Philippines</li>
          <li>House of Representatives</li>
          <li>Supreme Court</li>
          <li>Court of Appeals</li>
          <li>Sandiganbayan</li>
          <li>Government Procurement Policy Board</li>
        </ul>
      </div>

      <div className="footer-social">
        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#"><img src={twitterIcon} alt="X / Twitter" /></a>
      </div>
    </footer>
  );
}
