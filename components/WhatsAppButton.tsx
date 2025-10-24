'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const whatsappNumber = '+919265417748' // Indian WhatsApp number
  const message = 'Hello! I would like to inquire about your services.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
      <motion.span
        className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        Chat with us!
      </motion.span>
    </motion.button>
  )
}

