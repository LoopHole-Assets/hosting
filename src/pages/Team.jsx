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

const team = [
  { name: 'Pranish Pudasaini', role: 'Team Lead', img: '/assets/img/pranish.jpg' },
  { name: 'Laxman Mangrati', role: 'Management Lead', img: '/assets/img/laxman.png' },
  { name: 'Safal Gautam', role: 'Full Stack Developer', img: '/assets/img/safal.jpg' },
  { name: 'Kushal Khadka', role: 'Accounts & Finance Lead', img: '/assets/img/kushal.jpg' },
  { name: 'Laxmi Prasad Rimal', role: 'Full Stack Developer', img: '/assets/img/sabin.png' },
  { name: 'Aalok Nepal', role: 'Managing Lead', img: null }
]

export default function Team() {
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
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Talented individuals working together to build great websites
          </motion.p>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.div 
            className="team-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((member, i) => (
              <motion.div className="team-card" key={i} variants={fadeInUp}>
                <div className="team-avatar">
                  {member.img ? (
                    <img src={member.img} alt={member.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      <i className="fa-solid fa-user"></i>
                    </div>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
