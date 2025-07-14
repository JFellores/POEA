// src/Pages/MainDashboard.jsx
import React             from 'react'
import { Routes, Route } from 'react-router-dom'
import Header            from '../../GeneralComponents/Header'
import Footer            from '../../GeneralComponents/Footer'

// Home screen
import MainDashboardBody from '../../MainDashboardComponents/MainDashboardBody'

// Individual pages
import PEOSPage         from '../PEOSPage'
import RegistrationPage from '../RegistrationPage'
import OFWPage          from '../OFWPage'
import BMPage           from '../BMPage'
import DHPPage          from '../DHPPage'
import ORAAPage         from '../ORAA/ORAAPage'
import HelpdeskPage     from '../HelpDesk/HelpdeskPage'
import ORAALogin from "../ORAA/ORAALogin";

import './MainDashboard.css'

export default function MainDashboard() {
  return (
    <div className="app">
      <Header />
      <main className="app__content" style={{ backgroundColor: '#fff' }}>
        <Routes>
          <Route path="/"             element={<MainDashboardBody />} />
          <Route path="/peos"         element={<PEOSPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/ofw"          element={<OFWPage />} />
          <Route path="/bm"           element={<BMPage />} />
          <Route path="/dhp"          element={<DHPPage />} />
          <Route path="/oraa"         element={<ORAAPage />} />
          <Route path="/helpdesk"     element={<HelpdeskPage />} />
          <Route path="/oraalogin" element={<ORAALogin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
