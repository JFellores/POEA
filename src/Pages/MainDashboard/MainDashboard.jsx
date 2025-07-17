// src/Pages/MainDashboard/MainDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop  from '../../GeneralComponents/ScrollToTop';

import Header    from '../../GeneralComponents/Header';
import Footer    from '../../GeneralComponents/Footer';

// Home screen
import MainDashboardBody from '../../MainDashboardComponents/MainDashboardBody';

// Individual pages
import PEOSPage         from '../PEOSPage';
import RegistrationPage from '../Registration/RegistrationPage';
import OFWPage          from '../OFW/OFWPage';
import BMPage           from '../BMPage';
import DHPPage          from '../DHP/DHPPage';
import DHPLoginPage     from '../DHP/DHPLogin';
import ORAAPage         from '../ORAA/ORAAPage';
import ORAALogin        from '../ORAA/ORAALogin';
import HelpdeskPage     from '../HelpDesk/HelpdeskPage';
import Transfer         from '../HelpDesk/Transfer';
<<<<<<< HEAD
import NewAccount       from '../Registration/NewAccount'
=======
import CreateTicketPage from "../HelpDesk/CreateTicketPage.jsx";


>>>>>>> 65da2adaeb15ab2cbbe08a640075bf6ff8af659f

import './MainDashboard.css';

export default function MainDashboard() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
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
          <Route path="/transfer"     element={<Transfer />} />
<<<<<<< HEAD
          <Route path="/registration/new" element={<NewAccount/>}/>
=======
          <Route path="/create-ticket" element={<CreateTicketPage />} />
>>>>>>> 65da2adaeb15ab2cbbe08a640075bf6ff8af659f
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
