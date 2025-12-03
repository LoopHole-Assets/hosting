import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.span className="hero-badge" variants={fadeInUp}>
            Year one, future ready
          </motion.span>
          <motion.h1 variants={fadeInUp}>
            We Build <strong>Digital Experiences</strong>
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Modern, responsive websites crafted with precision. From frontend to full-stack solutions with 1 year of dedicated support.
          </motion.p>
          <motion.div className="cta-buttons" variants={fadeInUp}>
            <Link to="/services" className="btn btn-primary">
              Explore Services <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn btn-secondary">Get Started</Link>
          </motion.div>
        </motion.div>
      </section>

      <section>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <p>Tailored web solutions using cutting-edge technologies</p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-card-icon"><i className="fa-solid fa-palette"></i></div>
              <h3>Frontend Development</h3>
              <p>Beautiful, responsive interfaces built with modern frameworks and best practices.</p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-card-icon"><i className="fa-solid fa-server"></i></div>
              <h3>Full Stack Solutions</h3>
              <p>End-to-end development with robust backends and seamless integrations.</p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-card-icon"><i className="fa-solid fa-headset"></i></div>
              <h3>Ongoing Support</h3>
              <p>1 year of maintenance and updates included with every project.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
