import React from 'react'
import { motion } from 'framer-motion'

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div 
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        className="splash-logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img 
          src="/assets/img/logo.png" 
          alt="LoopHole"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.span 
          className="splash-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          LoopHole
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
