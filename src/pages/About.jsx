import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-header">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About LoopHole InfoTech
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building digital solutions for the future
          </motion.p>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.div 
            className="services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-card-icon"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To be a trusted partner for web development, helping businesses succeed with modern, effective websites.</p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <div className="service-card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To build high-quality websites and apps that are easy to use and help our clients reach more customers.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="light-bg">
            <h2 className="text-center">What Drives Us</h2>
            <p className="text-muted text-center mb-4">Our work ethic defined by core principles</p>
            <motion.div 
              className="features-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-lightbulb"></i></div>
                <h3>Innovation</h3>
                <p>Stay updated with new technologies to build better websites.</p>
              </motion.div>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-handshake"></i></div>
                <h3>Collaboration</h3>
                <p>Work closely with clients to understand their needs.</p>
              </motion.div>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-star"></i></div>
                <h3>Excellence</h3>
                <p>Deliver high-quality work that exceeds expectations.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
