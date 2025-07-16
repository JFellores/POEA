import React          from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainDashboard  from './Pages/MainDashboard/MainDashboard.jsx'
import ScrollToTop   from './GeneralComponents/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <MainDashboard />
    </BrowserRouter>
  </React.StrictMode>
)
