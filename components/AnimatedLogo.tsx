'use client'

import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-sky-400 to-white"
        style={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
      />
      <div className="absolute inset-2 rounded-lg bg-white dark:bg-gray-900" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-lg font-bold text-gradient"
          style={{
            background: 'linear-gradient(45deg, #00bfff, #87ceeb, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 6px rgba(0, 191, 255, 0.4))',
          }}
        >
          C
        </span>
      </div>
    </motion.div>
  )
}

