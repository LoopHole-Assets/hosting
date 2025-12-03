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

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss your project and bring your ideas to life
          </motion.p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
              </div>

              <div className="form-group">
                <label htmlFor="priceRange">Estimated Project Budget</label>
                <select id="priceRange" name="priceRange" defaultValue="" required>
                  <option value="" disabled>Select a price range</option>
                  <option value="5k-10k">Rs.5,000 - Rs.10,000</option>
                  <option value="10k-25k">Rs.10,000 - Rs.25,000</option>
                  <option value="25k-50k">Rs.25,000 - Rs.50,000</option>
                  <option value="50k+">Rs.50,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Inquiry <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="contact-info-item" variants={fadeInUp}>
              <h3><i className="fa-solid fa-envelope"></i> Email</h3>
              <p><a href="mailto:loophole.infotech@gmail.com">loophole.infotech@gmail.com</a></p>
            </motion.div>
            <motion.div className="contact-info-item" variants={fadeInUp}>
              <h3><i className="fa-solid fa-phone"></i> Phone</h3>
              <p><a href="tel:+9779804907539">+977-9804907539</a></p>
            </motion.div>
            <motion.div className="contact-info-item" variants={fadeInUp}>
              <h3><i className="fa-solid fa-location-dot"></i> Location</h3>
              <p>New Baneshwor, Kathmandu, Nepal</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
