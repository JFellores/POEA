import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./MainDashboardBody.css"
import DashboardImg    from "../assets/DashboardImg.png"

import PEOSCard          from "./PEOSCardComponent"
import RegistrationCard  from "./RegistrationCard"
import OFWCardComponent  from "./OFWCardComponent"
import BMCard            from "./BMCard"
import DHPCard           from "./DHPCard"
import ORAACard          from "./ORAACard"
import HelpdeskCard      from "./HelpdeskCard"

export default function MainDashboardBody() {
  const navigate = useNavigate()

  return (
    <div className="main-dashboard-body">
      <div className="main-dashboard-body__image-container">
        <img
          src={DashboardImg}
          alt="Dashboard"
          className="main-dashboard-body__image"
        />
        <div className="WhiteOverlay" />
        <div className="overlay-text">
          <h1>Online Services</h1>
          <p>For Migrant Workers</p>
        </div>

        <div className="main-dashboard-body__CardContainer">
        <PEOSCard
        onClick={() => { 
            console.log('⏩ PEOS card clicked, navigating to /peos'); 
            navigate('/peos'); 
        }} 
        />
          <RegistrationCard onClick={() => navigate('/registration')} />
          <OFWCardComponent onClick={() => navigate('/ofw')} />
        </div>
      </div>

      <div className="main-dashboard-body__CardContainer2">
        <BMCard   onClick={() => navigate('/registration')} />
        <DHPCard  onClick={() => navigate('/dhp')} />
        <ORAACard onClick={() => navigate('/oraa')} />
      </div>

      <div className="main-dashboard-body__CardContainer3">
        <HelpdeskCard onClick={() => navigate('/helpdesk')} />
      </div>
    </div>
  )
}
