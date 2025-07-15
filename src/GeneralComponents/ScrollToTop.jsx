// src/GeneralComponents/ScrollToTop.jsx
import { useLayoutEffect } from 'react'
import { useLocation }     from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    console.log('ScrollToTop fired for:', location.pathname)
    window.scrollTo(0, 0)
    const panel = document.querySelector('.app__content')
    if (panel) panel.scrollTop = 0
  }, [location.pathname])

  return null
}
