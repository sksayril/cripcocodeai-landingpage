'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Flutter', icon: '💙' },
  { name: 'AWS', icon: '☁️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Prisma', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
]

// Duplicate for seamless loop
const duplicatedTechStack = [...techStack, ...techStack]

export default function TechStackSlider() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-gray-900 dark:via-transparent dark:to-gray-900 z-10 pointer-events-none" />
      
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -50 * techStack.length * 8], // Adjust based on item width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {duplicatedTechStack.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {tech.icon}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

