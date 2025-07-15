// src/Pages/MainDashboard/MainDashboard.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header    from '../../GeneralComponents/Header'
import Footer    from '../../GeneralComponents/Footer'

// Home screen
import MainDashboardBody from '../../MainDashboardComponents/MainDashboardBody'

// Individual pages
<<<<<<< HEAD
import PEOSPage         from '../PEOSPage'
=======
import PEOSPage from "../PEOSPage";
>>>>>>> c47bd419e82c063b4decb4b5af662cde6da41b56
import RegistrationPage from '../RegistrationPage'
import OFWPage          from '../OFW/OFWPage'
import BMPage           from '../BMPage'
import DHPPage          from '../DHP/DHPPage'
<<<<<<< HEAD
import DHPLoginPage     from '../DHP/DHPLogin'
=======
>>>>>>> c47bd419e82c063b4decb4b5af662cde6da41b56
import ORAAPage         from '../ORAA/ORAAPage'
import ORAALogin        from '../ORAA/ORAALogin'
import HelpdeskPage     from '../HelpDesk/HelpdeskPage'
<<<<<<< HEAD
=======
import ORAALogin from "../ORAA/ORAALogin";
import DHPLoginPage       from '../DHP/DHPLogin'
import Transfer from "../HelpDesk/Transfer";
>>>>>>> c47bd419e82c063b4decb4b5af662cde6da41b56

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
          <Route path="/dhp/login"    element={<DHPLoginPage />} />
          <Route path="/oraa"         element={<ORAAPage />} />
          <Route path="/oraalogin"    element={<ORAALogin />} />
          <Route path="/helpdesk"     element={<HelpdeskPage />} />
<<<<<<< HEAD
=======
          <Route path="/oraalogin" element={<ORAALogin />} />
          <Route path="/transfer" element={<Transfer />} />
>>>>>>> c47bd419e82c063b4decb4b5af662cde6da41b56
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
