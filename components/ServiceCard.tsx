'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  index: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  index,
}: ServiceCardProps) {
  return (
    <div className="group">
      <Link href={href}>
        <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-primary-100 to-violet-100 dark:from-primary-900/30 dark:to-violet-900/30 rounded-xl group-hover:scale-110 transition-transform">
              <div className="text-3xl">{icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {description}
            </p>

            {/* Arrow */}
            <div className="flex items-center text-primary-500 font-medium group-hover:translate-x-2 transition-transform">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

