'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import ClientsCarousel from '@/components/ClientsCarousel'

const caseStudies = [
  {
    client: 'TechCorp',
    industry: 'Technology',
    project: 'Enterprise Web Platform',
    logo: '🏢',
    challenge: 'TechCorp needed a scalable web platform to manage their growing customer base and streamline operations.',
    solution: 'We built a custom web application using Next.js, Node.js, and PostgreSQL with advanced analytics and automation.',
    results: [
      '300% increase in user engagement',
      '50% reduction in operational costs',
      '99.9% uptime achieved',
      '10x faster page load times',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    testimonial: {
      text: 'Cripcocode Tech transformed our business operations completely. The platform they built exceeded all our expectations.',
      author: 'John Smith',
      role: 'CEO at TechCorp',
    },
  },
  {
    client: 'InnovateLabs',
    industry: 'Research & Development',
    project: 'AI-Powered Analytics Dashboard',
    logo: '🚀',
    challenge: 'InnovateLabs needed an intelligent dashboard to analyze complex research data and generate insights.',
    solution: 'We developed an AI-powered analytics platform using Python, TensorFlow, and React with real-time data processing.',
    results: [
      '80% faster data analysis',
      '95% accuracy in predictions',
      '500+ hours saved per month',
      '200% ROI in 6 months',
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'MongoDB'],
    testimonial: {
      text: 'The AI solution they built has revolutionized how we analyze data. It\'s been a game-changer for our research team.',
      author: 'Sarah Johnson',
      role: 'CTO at InnovateLabs',
    },
  },
  {
    client: 'AppMasters',
    industry: 'E-commerce',
    project: 'Mobile Shopping App',
    logo: '📱',
    challenge: 'AppMasters wanted a feature-rich mobile app to compete with major e-commerce players.',
    solution: 'We created a cross-platform mobile app using Flutter with seamless payment integration and personalized recommendations.',
    results: [
      '1M+ downloads in 3 months',
      '4.8★ average rating',
      '$5M in sales first year',
      '60% repeat customer rate',
    ],
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Stripe'],
    testimonial: {
      text: 'The app is beautiful, fast, and our customers love it. Sales have exceeded our wildest projections.',
      author: 'Michael Chen',
      role: 'Founder at AppMasters',
    },
  },
  {
    client: 'DigitalHub',
    industry: 'Marketing',
    project: 'Marketing Automation Platform',
    logo: '💡',
    challenge: 'DigitalHub needed to automate their marketing workflows and improve campaign performance.',
    solution: 'We built a comprehensive marketing automation platform with email campaigns, analytics, and CRM integration.',
    results: [
      '400% increase in leads',
      '70% time savings',
      '150% improvement in conversion',
      '$2M additional revenue',
    ],
    technologies: ['React', 'Node.js', 'Redis', 'AWS'],
    testimonial: {
      text: 'This platform has completely transformed our marketing operations. We can now do in minutes what used to take days.',
      author: 'Emily Davis',
      role: 'Marketing Director at DigitalHub',
    },
  },
]

const industries = [
  { name: 'Technology', icon: '💻', count: 50 },
  { name: 'E-commerce', icon: '🛒', count: 45 },
  { name: 'Healthcare', icon: '🏥', count: 30 },
  { name: 'Finance', icon: '💰', count: 35 },
  { name: 'Education', icon: '📚', count: 28 },
  { name: 'Real Estate', icon: '🏠', count: 22 },
]

export default function ClientsPage() {
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
              Our <span className="text-gradient">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We&apos;re proud to have helped over 200+ companies achieve their digital transformation 
              goals. Here are some of our success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h2>
          </motion.div>

          <ClientsCarousel />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {industry.count}+ projects
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real results from real clients
            </p>
          </motion.div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{study.logo}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {study.client}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">{study.industry}</p>
                      </div>
                    </div>

                    {/* Project */}
                    <h4 className="text-2xl font-bold mb-4 text-primary-500">
                      {study.project}
                    </h4>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                        Challenge
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                        Solution
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results & Testimonial */}
                  <div className="bg-gradient-to-br from-primary-500 to-violet-600 p-8 lg:p-12 text-white">
                    {/* Results */}
                    <h5 className="text-2xl font-bold mb-6">Key Results</h5>
                    <div className="space-y-4 mb-8">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-start space-x-3">
                          <FiStar className="w-6 h-6 flex-shrink-0 mt-1" />
                          <span className="text-lg">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <p className="text-lg italic mb-4">&ldquo;{study.testimonial.text}&rdquo;</p>
                      <div>
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm opacity-90">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-violet-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with us
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
            >
              Start Your Project
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

