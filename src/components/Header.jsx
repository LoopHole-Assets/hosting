import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode')
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="container">
        <Link to="/" className="logo" onClick={closeMobile}>
          <img src="/assets/img/logo.png" alt="LoopHole Infotech" />
          LoopHole
        </Link>

        <nav className="desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.591-1.592a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 011.06 0l1.591 1.592a.75.75 0 01-1.06 1.06l-1.591-1.592a.75.75 0 010-1.06zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM5.106 17.834a.75.75 0 010-1.06l1.591-1.592a.75.75 0 111.061 1.06l-1.591 1.592a.75.75 0 01-1.06 0zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM6.106 5.106a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.06 1.061L5.106 6.166a.75.75 0 010-1.06z"/></svg>
            <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.463-.949a.75.75 0 01.82.162 10.503 10.503 0 01-4.128 5.135A10.477 10.477 0 0112 22.5a10.5 10.5 0 01-10.5-10.5c0-4.307 2.54-7.962 6.028-9.532a.75.75 0 01.82.162z" clipRule="evenodd"/></svg>
          </button>

          <button 
            className="mobile-nav-toggle" 
            aria-label="Toggle navigation" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMobile}>Home</Link>
        <Link to="/services" onClick={closeMobile}>Services</Link>
        <Link to="/about" onClick={closeMobile}>About</Link>
        <Link to="/team" onClick={closeMobile}>Team</Link>
        <Link to="/contact" onClick={closeMobile}>Contact</Link>
      </nav>
    </motion.header>
  )
}
