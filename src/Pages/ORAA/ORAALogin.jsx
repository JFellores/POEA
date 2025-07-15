// src/components/ORAALogin/ORAALogin.js
import React, { useState } from 'react';
import { useNavigate }    from 'react-router-dom';
import './ORAALogin.css';

import missionImg    from '../../assets/bannermission.png';
import visionImg     from '../../assets/bannervision.png';
import ArrowBack     from '../../assets/arrow-circle-left.png';
import RQIcon        from '../../assets/rq.png';

// your four pop-up components
import ApplyModal      from '../../ORAAPageComponents/ApplyModal';
import StatusModal     from '../../ORAAPageComponents/StatusModal';
import ComplianceModal from '../../ORAAPageComponents/ComplianceModal';
import ReportModal     from '../../ORAAPageComponents/ReportModal';
import RequirementsModal from '../../ORAAPageComponents/RequirementsModal';

export default function ORAALogin() {
  const navigate  = useNavigate();
  // which modal to show: null | 'ARA' | 'VSA' | 'FC' | 'SR'
  const [modalType, setModalType] = useState(null);

  const closeModal = () => setModalType(null);

  return (
    <div className="oraalogin-page">
      {/* ─── Header / Dual-Banner ───────────────────────── */}
      <header className="oraalogin__header">
        <div className="oraalogin__banners">
          <img src={missionImg} alt="Mission" className="oraalogin__banner" />
          <img src={visionImg}  alt="Vision"  className="oraalogin__banner" />
        </div>

        {/* ─── Back + Title ───────────────────────────────── */}
        <div className="oraalogin__topbar">
          <button
            className="oraalogin__back"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <img src={ArrowBack} alt="Back" />
          </button>
          <h2 className="oraalogin__title">
            Online Recruitment Authority Application
          </h2>
        </div>

        {/* ─── Requirements card (also opens ARA modal) ────── */}
        <div
          className="oraalogin__card"
          onClick={() => setModalType('RQ')}
        >
          <img
            src={RQIcon}
            alt="Requirements icon"
            className="oraalogin__card-icon"
          />
          Requirements and Qualifications
        </div>
      </header>

      {/* ─── Action Buttons ─────────────────────────────── */}
      <h3 className="oraalogin__actions-title">Select transaction:</h3>
      <section className="oraalogin__actions">
        <button onClick={() => setModalType('ARA')}>
          Apply Recruitment Authority
        </button>
        <button onClick={() => setModalType('VSA')}>
          View Status of Application
        </button>
        <button onClick={() => setModalType('FC')}>
          For Compliance
        </button>
        <button onClick={() => setModalType('SR')}>
          Submit Report
        </button>
      </section>

      {/* ─── Logout ────────────────────────────────────── */}
      <button
        className="oraalogin__logout"
        onClick={() => navigate('/')}
      >
        Logout
      </button>

      {/* ─── Modal Switcher ────────────────────────────── */}
     {modalType === 'RQ'  && <RequirementsModal onClose={closeModal} />}
      {modalType === 'ARA' && <ApplyModal        onClose={closeModal} />}
      {modalType === 'VSA' && <StatusModal       onClose={closeModal} />}
      {modalType === 'FC'  && <ComplianceModal   onClose={closeModal} />}
      {modalType === 'SR'  && <ReportModal       onClose={closeModal} />}
    </div>
  );
}
