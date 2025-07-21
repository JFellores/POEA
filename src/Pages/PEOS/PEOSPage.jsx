import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PEOSPage.css';

// module icons
import PricestIcon     from '../../assets/icons/Pricest.png';
import JobSearchIcon   from '../../assets/icons/jobSearch.png';
import ForewarnedIcon  from '../../assets/icons/foreWarmed.png';
import PriceRightIcon  from '../../assets/icons/thePrice.png';
import SealDealIcon    from '../../assets/icons/SealDdeal.png';
import CountryInfoIcon from '../../assets/icons/countryinfo.png';
import HealthSafeIcon  from '../../assets/icons/health.png';
import DMWCaresIcon    from '../../assets/icons/DMWcares.png';

// seminar photos
import Img1            from '../../assets/icons/peosImg1.png';
import Img2            from '../../assets/icons/peosImg2.png';
import Img3            from '../../assets/icons/peosImg3.png';

// back arrow image (black arrow, from /assets)
import ArrowBack       from '../../assets/arrow-circle-left.png';

export default function PEOSPage() {
  useEffect(() => console.log('✅ PEOSPage mounted'), []);
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Pricest',
      icon:   PricestIcon,
      desc:   'Contains general information about concerns when working overseas such as physical mobility, relationships, income & expenses, career movement & direction, environment, skill set, and time.'
    },
    {
      title: 'Job Search',
      icon:   JobSearchIcon,
      desc:   'Contains specific information on the various application channels for overseas jobs, document requirements, and the importance of having an Overseas Employment Certificate (OEC).'
    },
    {
      title: 'Forewarned, and Forarmed',
      icon:   ForewarnedIcon,
      desc:   'Contains information on precautionary measures for illegal recruitment and various forms of illegal recruitment.'
    },
    {
      title: 'The Price is Right',
      icon:   PriceRightIcon,
      desc:   'Contains a list of required fees for pre-departure including placement fee rulings as well as government-mandated fees.'
    },
    {
      title: 'Seal the Deal',
      icon:   SealDealIcon,
      desc:   'Contains a list of minimum provisions required in the standard overseas employment contract.'
    },
    {
      title: 'Country Information',
      icon:   CountryInfoIcon,
      desc:   'Continue to keep your options open; get to know more about the country you are interested in.'
    },
    {
      title: 'Health and Safe',
      icon:   HealthSafeIcon,
      desc:   'Contains information about the top security and health risks that Overseas Filipino Workers (OFWs) may encounter.'
    },
    {
      title: 'DMW Cares',
      icon:   DMWCaresIcon,
      desc:   'Directory of the DMW regional offices and extension units.'
    },
  ];

  return (
    <div className="peos-container" style={{ position: 'relative' }}>
      {/* Back Arrow Button */}
      <button
        className="peos-back-btn"
        onClick={() => navigate(-1)}
        aria-label="Go back"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          position: 'absolute',
          left: '2rem',
          top: '2rem',
          zIndex: 10,
        }}
      >
        <img
          src={ArrowBack}
          alt="Back"
          className="peos-back-btn-img"
          style={{
            width: 40,
            height: 40,
          }}
        />
      </button>

      <h1 className="peos-title">
        WELCOME TO THE FREE<br />
        PRE-EMPLOYMENT ORIENTATION SEMINAR
      </h1>

      <div className="peos-main">

        <div className="peos-form-box">

          <label className="peos-module-type-label">
            <h2>Login</h2></label>

          <input type="text" placeholder="E-Registration number" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="First Name" />
        
          <label className="peos-module-type-label">Choose Module Type</label>

          <div className="peos-radio-group">
            <label><input type="radio" name="type" /> Professional / Skilled</label>
            <label><input type="radio" name="type" /> Household worker</label>
          </div>

          <button className="peos-proceed">proceed</button>
          <span className="peos-forgot">forgot E-Registration number?</span>
        </div>

        <div className="peos-content-box">
          <div className="peos-images">
            {[Img1, Img2, Img3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`PEOS seminar ${i + 1}`}
                className="peos-image"
              />
            ))}
          </div>

          <div className="peos-info">
            <h3>Learn what you need to know before applying for overseas jobs:</h3>
            <ul>
              <li>Comprehensive overview of overseas job application processes</li>
              <li>Detailed information on required documents and associated costs</li>
              <li>Critical tips and guidelines to protect yourself from illegal recruitment</li>
            </ul>
            <button
              className="peos-register"
              onClick={() => navigate('/registration')}
            >
              Click here to Register 
            </button>
          </div>
        </div>
      </div>

      {/* ─── MODULES SECTION ────────────────────────────────────────── */}
      <div className="peos-modules-section">
        <h2 className="peos-modules-title">8 Learning Modules:</h2>
        <div className="peos-modules-grid">
          {modules.map((mod, idx) => (
            <div className="peos-module-card" key={idx}>
              <div className="peos-module-header">
                <img
                  src={mod.icon}
                  alt={mod.title}
                  className="peos-module-icon"
                />
                <span className="peos-module-label">{mod.title}</span>
              </div>
              <div className="peos-module-desc">{mod.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
