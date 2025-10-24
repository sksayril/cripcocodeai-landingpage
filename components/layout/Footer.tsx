'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiFileText, FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi'
import AnimatedLogo from '@/components/AnimatedLogo'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'Clients', href: '/clients' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/clients' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
  ],
}

const socialLinks = [
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Cripcocode Logo" 
                width={64}
                height={64}
                className="w-16 h-16 rounded-lg"
              />
              <span className="text-xl font-bold text-white">
                Cripcocode Technologies
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Innovating Beyond Code ⚡ - Leading IT company specializing in cutting-edge web and mobile solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info.cripcocode@gmail.com" className="hover:text-primary-400 transition-colors">
                  info.cripcocode@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <a href="tel:+919265417748" className="hover:text-primary-400 transition-colors">
                  +91 9265417748
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p>C/o Arjina Sultana, Jhapantala</p>
                  <p>Memari Bazar, Bardhaman</p>
                  <p>Memari - I, West Bengal, India - 713146</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiFileText className="w-5 h-5 text-primary-400" />
                <span>CIN: U62013WB2025PTC277922</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58681.872831976754!2d88.05262669035126!3d23.18417281700867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x39f859dccc9d82a5%3A0xc5eed208d7725981!2sCripcocode%20Technologies%20Pvt%20Ltd%2C%20Cripcocode%2C%20Jahapantal%2C%20Memari%2C%20West%20Bengal!3m2!1d23.184178199999998!2d88.0939121!4m0!5e0!3m2!1sen!2sin!4v1761267708542!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cripcocode Technologies. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

