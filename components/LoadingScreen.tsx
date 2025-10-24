'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLogo from './AnimatedLogo'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const sections = [
    'Initializing...',
    'Loading Components...',
    'Preparing Animations...',
    'Optimizing Performance...',
    'Finalizing Experience...',
    'Ready!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(onComplete, 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setCurrentSection(prev => {
        const currentIndex = sections.findIndex(section => section === prev)
        const nextIndex = (currentIndex + 1) % sections.length
        return sections[nextIndex]
      })
    }, 300)

    return () => clearInterval(sectionInterval)
  }, [sections])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Electric Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto">
              <AnimatedLogo />
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold text-gradient mb-4"
          >
            Cripcocode Tech
          </motion.h1>

          {/* Loading Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-lg text-gray-300 mb-2">
              {currentSection}
            </div>
            
            {/* Progress Bar */}
            <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="text-sm text-gray-400 mt-2">
              {progress}%
            </div>
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center space-x-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-sky-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Completion Message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="mt-8"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                  className="w-8 h-8 mx-auto mb-4"
                >
                  <svg className="w-full h-full text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <div className="text-lg text-sky-400 font-semibold">
                  Welcome to the Future!
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Electric Border Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 border-2 border-transparent"
            animate={{
              background: [
                'linear-gradient(45deg, transparent, rgba(0, 191, 255, 0.3), transparent)',
                'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                'linear-gradient(45deg, transparent, rgba(0, 191, 255, 0.3), transparent)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 0%',
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
