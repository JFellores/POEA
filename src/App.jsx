import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <h1>Hello</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App;
