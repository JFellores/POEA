import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainDashboard from './Pages/MainDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainDashboard />
  </StrictMode>,
)
