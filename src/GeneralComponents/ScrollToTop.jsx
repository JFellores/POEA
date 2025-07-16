// src/GeneralComponents/ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('ScrollToTop triggered for:', pathname)
    
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      // Check current scroll positions
      console.log('Window scrollY:', window.scrollY)
      console.log('Document scrollTop:', document.documentElement.scrollTop)
      
      const main = document.querySelector('.app__content')
      if (main) {
        console.log('Main scrollTop before reset:', main.scrollTop)
        main.scrollTop = 0
        console.log('Main scrollTop after reset:', main.scrollTop)
      }

      // Reset window scroll
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      console.log('Window scrollY after reset:', window.scrollY)
    }, 0)

  }, [pathname])

  return null
}