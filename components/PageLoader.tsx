'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageLoaderProps {
  children: React.ReactNode
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{
    id: number
    width: number
    height: number
    left: number
    top: number
    opacity: number
    xAnimation: number[]
    yAnimation: number[]
    scaleAnimation: number[]
    opacityAnimation: number[]
    duration: number
    delay: number
  }>>([])
  const [lines, setLines] = useState<Array<{
    id: number
    left: number
    top: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Initialize particles and lines on client side only (reduced for performance)
    const newParticles = [...Array(6)].map((_, i) => ({
      id: i,
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.1,
      xAnimation: [0, Math.random() * 100 - 50],
      yAnimation: [0, Math.random() * 100 - 50],
      scaleAnimation: [0.9, 1.1, 0.9],
      opacityAnimation: [0.2, 0.6, 0.2],
      duration: 6 + Math.random() * 2,
      delay: Math.random() * 1,
    }))

    const newLines = [...Array(8)].map((_, i) => ({
      id: i,
      left: i * 12.5,
      top: Math.random() * 100,
      duration: 3,
      delay: i * 0.2,
    }))

    setParticles(newParticles)
    setLines(newLines)

    // Simulate loading progress (faster loading)
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 20 + 10
      })
    }, 80)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Orbs */}
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    width: particle.width,
                    height: particle.height,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    background: `radial-gradient(circle, rgba(0, 191, 255, ${particle.opacity}) 0%, transparent 70%)`,
                  }}
                  animate={{
                    x: particle.xAnimation,
                    y: particle.yAnimation,
                    scale: particle.scaleAnimation,
                    opacity: particle.opacityAnimation,
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}

              {/* Electric Grid */}
              <div className="absolute inset-0 opacity-20">
                {lines.map((line) => (
                  <motion.div
                    key={line.id}
                    className="absolute h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                    style={{
                      left: `${line.left}%`,
                      top: `${line.top}%`,
                      width: '100%',
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: line.duration,
                      repeat: Infinity,
                      delay: line.delay,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Loading Content */}
            <div className="relative z-10 text-center">
              {/* Spinning Logo (simplified) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 mx-auto mb-8"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-white flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">C</span>
                </div>
              </motion.div>

              {/* Loading Text */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Loading Cripcocode
              </motion.h2>

              {/* Progress Bar */}
              <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 to-white rounded-full"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.div
                key={loadingProgress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-lg text-sky-400 font-semibold"
              >
                {Math.round(loadingProgress)}%
              </motion.div>

              {/* Loading Dots (simplified) */}
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-sky-400 rounded-full"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Simple Border */}
            <div className="absolute inset-4 border border-sky-400/30 rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Staggered Loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={isLoading ? 'pointer-events-none' : ''}
      >
        {children}
      </motion.div>
    </>
  )
}
