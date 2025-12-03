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
          <span>LoopHole</span>
        </Link>

        <nav className={mobileOpen ? 'open' : ''}>
          <NavLink to="/" end onClick={closeMobile}>Home</NavLink>
          <NavLink to="/services" onClick={closeMobile}>Services</NavLink>
          <NavLink to="/about" onClick={closeMobile}>About</NavLink>
          <NavLink to="/team" onClick={closeMobile}>Team</NavLink>
          <NavLink to="/contact" onClick={closeMobile}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className="fa-solid fa-moon"></i>
          </button>

          <button 
            className="mobile-toggle" 
            aria-label="Toggle navigation" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
