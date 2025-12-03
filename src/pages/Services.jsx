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

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Web development solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.div 
            className="services-detail-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="service-detail-card" variants={fadeInUp}>
              <div className="service-icon"><i className="fa-solid fa-palette"></i></div>
              <h2>Frontend Development</h2>
              <p className="text-muted">Create stunning, responsive user interfaces using modern web technologies.</p>
              <ul>
                <li>React, Vue, Angular frameworks</li>
                <li>Responsive mobile-first design</li>
                <li>Modern CSS & animations</li>
                <li>Performance optimization</li>
              </ul>
            </motion.div>
            <motion.div className="service-detail-card" variants={fadeInUp}>
              <div className="service-icon"><i className="fa-solid fa-server"></i></div>
              <h2>Full Stack Development</h2>
              <p className="text-muted">End-to-end web solutions combining frontend and backend development.</p>
              <ul>
                <li>Python/Node.js backends</li>
                <li>Database design & integration</li>
                <li>API development</li>
                <li>Cloud deployment</li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="light-bg">
            <h2 className="text-center mb-4">What's Included</h2>
            <motion.div 
              className="features-grid"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-mobile-screen"></i></div>
                <h3>Responsive Design</h3>
                <p>Works perfectly on all devices</p>
              </motion.div>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-bolt"></i></div>
                <h3>Fast Performance</h3>
                <p>Optimized for speed</p>
              </motion.div>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                <h3>Secure Code</h3>
                <p>Built with best practices</p>
              </motion.div>
              <motion.div className="feature-card" variants={fadeInUp}>
                <div className="feature-icon"><i className="fa-solid fa-wrench"></i></div>
                <h3>1 Year Support</h3>
                <p>Maintenance included</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
