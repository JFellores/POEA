import { useState } from 'react'
import viteLogo from '/vite.svg'
import './MainDashboard.css'
import Header from '../GeneralComponents/Header'
import Footer from '../GeneralComponents/Footer'
import Body from '../MainDashboardComponents/MainDashboardBody'




function MainDashboard() {
  return (
    <div className="app">
      <Header />
      <main className="app__content" style={{backgroundColor: '#ffffff'}}>
        <Body />
      </main>
      <Footer />
    </div>
  )
}

export default MainDashboard;
