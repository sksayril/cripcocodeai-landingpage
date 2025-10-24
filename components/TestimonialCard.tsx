'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  index: number
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-white text-xl font-bold">
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

