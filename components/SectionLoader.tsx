'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface SectionLoaderProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function SectionLoader({ 
  children, 
  delay = 0, 
  className = '' 
}: SectionLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
