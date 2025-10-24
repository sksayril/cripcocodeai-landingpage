'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'TechCorp', logo: '🏢' },
  { name: 'InnovateLabs', logo: '🚀' },
  { name: 'DataFlow', logo: '📊' },
  { name: 'CloudSync', logo: '☁️' },
  { name: 'AppMasters', logo: '📱' },
  { name: 'WebWizards', logo: '🧙' },
  { name: 'CodeNinja', logo: '🥷' },
  { name: 'DigitalHub', logo: '💡' },
]

const duplicatedClients = [...clients, ...clients]

export default function ClientsCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-gray-900 dark:via-transparent dark:to-gray-900 z-10 pointer-events-none" />
      
      <motion.div
        className="flex space-x-12"
        animate={{
          x: [0, -50 * clients.length * 8],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-28 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all group grayscale hover:grayscale-0"
          >
            <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">
              {client.logo}
            </span>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

