'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCode, FiSmartphone, FiTrendingUp, FiCpu, FiArrowRight, FiCheck } from 'react-icons/fi'

const services = [
  {
    slug: 'web-development',
    icon: <FiCode className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that drive results',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'CMS Development',
      'API Integration',
      'Performance Optimization',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'app-development',
    icon: <FiSmartphone className="w-12 h-12" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that users love',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Development',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'digital-marketing',
    icon: <FiTrendingUp className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence',
    features: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Email Campaigns',
      'Analytics & Reporting',
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Analytics'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    slug: 'ai-solutions',
    icon: <FiCpu className="w-12 h-12" />,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning solutions',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Chatbot Development',
      'Predictive Analytics',
      'Process Automation',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS ML'],
    color: 'from-orange-500 to-red-500',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Comprehensive IT solutions designed to help your business thrive in the digital age. 
              From web development to AI solutions, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`inline-block p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center px-6 py-3 btn-gradient rounded-full font-semibold shadow-lg hover:shadow-glow transition-all group"
                  >
                    Learn More
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square max-w-lg mx-auto"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-20 blur-3xl`} />
                    <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                      <div className={`text-8xl opacity-50 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                        {service.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your business goals and requirements',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Create a detailed roadmap and strategy',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your solution with best practices',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Deploy and provide ongoing maintenance',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                <div className="text-6xl font-bold text-gradient opacity-20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-500 to-violet-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help bring your project to life
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
            >
              Contact Us Today
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

