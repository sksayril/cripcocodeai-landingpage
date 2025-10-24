'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import AnimatedLogo from '@/components/AnimatedLogo'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Clients', path: '/clients' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Backdrop Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Cripcocode Logo" 
              className="w-16 h-16 rounded-lg"
            />
            <span className="text-xl font-bold text-gradient">
              Cripcocode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary-500 ${
                  pathname === item.path
                    ? 'text-primary-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex px-6 py-2.5 btn-gradient rounded-full text-sm font-medium shadow-lg hover:shadow-glow transition-all"
            >
              Get Started
            </Link>

             {/* Mobile Menu Toggle - Animated Hamburger */}
             <motion.button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-white hover:from-sky-500 hover:to-gray-100 shadow-lg hover:shadow-xl flex items-center justify-center group"
               style={{ boxShadow: '0 0 20px rgba(0, 191, 255, 0.4)' }}
               whileHover={{ boxShadow: '0 0 30px rgba(0, 191, 255, 0.6)' }}
               whileTap={{ scale: 0.95 }}
               aria-label="Toggle mobile menu"
             >
               <div className="w-6 h-5 flex flex-col justify-center items-center">
                 <motion.span
                   animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                   transition={{ duration: 0.3 }}
                   className="w-6 h-0.5 bg-gray-900 rounded-full mb-1.5"
                 />
                 <motion.span
                   animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                   transition={{ duration: 0.3 }}
                   className="w-6 h-0.5 bg-gray-900 rounded-full mb-1.5"
                 />
                 <motion.span
                   animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                   transition={{ duration: 0.3 }}
                   className="w-6 h-0.5 bg-gray-900 rounded-full"
                 />
               </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                   className={`block py-4 px-4 rounded-xl transition-all mb-2 font-medium ${
                     pathname === item.path
                       ? 'bg-gradient-to-r from-sky-400 to-white text-gray-900 shadow-glow scale-105'
                       : 'hover:bg-gray-800 hover:translate-x-2'
                   }`}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 py-4 px-4 btn-gradient rounded-xl text-center font-semibold shadow-lg hover:shadow-glow transition-all hover:scale-105"
              >
                Get Started →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </header>
    </>
  )
}

