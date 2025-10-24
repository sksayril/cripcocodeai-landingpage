'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCode, FiSmartphone, FiTrendingUp, FiCpu } from 'react-icons/fi'
import TechStackSlider from '@/components/TechStackSlider'
import ClientsCarousel from '@/components/ClientsCarousel'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import AnimatedCounter from '@/components/AnimatedCounter'
import ParticlesBackground from '@/components/ParticlesBackground'
import SectionLoader from '@/components/SectionLoader'

const services = [
  {
    icon: <FiCode className="w-8 h-8 text-primary-500" />,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js for scalable and performant solutions.',
    href: '/services/web-development',
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-primary-500" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications using Flutter and React Native that deliver exceptional user experiences.',
    href: '/services/app-development',
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-primary-500" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies including SEO, SEM, social media marketing, and content creation to grow your brand.',
    href: '/services/digital-marketing',
  },
  {
    icon: <FiCpu className="w-8 h-8 text-primary-500" />,
    title: 'AI Solutions',
    description: 'Innovative AI and machine learning solutions to automate processes, gain insights, and transform your business.',
    href: '/services/ai-solutions',
  },
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO',
    company: 'TechCorp',
    content: 'Cripcocode Tech transformed our business with their innovative web solutions. The team is professional, responsive, and delivers exceptional quality.',
    avatar: 'JS',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'InnovateLabs',
    content: 'Working with Cripcocode Tech was a game-changer. Their expertise in AI solutions helped us automate critical processes and save thousands of hours.',
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'AppMasters',
    content: 'The mobile app they developed exceeded our expectations. Beautiful design, smooth performance, and delivered on time. Highly recommended!',
    avatar: 'MC',
    rating: 5,
  },
]

const whyChooseUs = [
  {
    icon: '🚀',
    title: 'Fast Delivery',
    description: 'We deliver projects on time without compromising quality',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Code that is clean, scalable, and maintainable',
  },
  {
    icon: '🎯',
    title: 'Result-Oriented',
    description: 'We focus on measurable outcomes and ROI',
  },
  {
    icon: '🛠️',
    title: 'Modern Tech Stack',
    description: 'Using the latest technologies and best practices',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    description: 'Experienced developers and designers',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Always here to help when you need us',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <ParticlesBackground />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
              <SectionLoader delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Innovating Beyond
                  <span className="text-gradient"> Code ⚡</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  Transform your business with cutting-edge web, mobile, and AI solutions
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 btn-gradient rounded-full text-lg font-semibold shadow-xl hover:shadow-glow transition-all inline-flex items-center justify-center group"
                  >
                    Get a Free Consultation
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center border-2 border-primary-500"
                  >
                    View Services
                  </Link>
                </div>
              </SectionLoader>

          </div>
        </div>

      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={400}>
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Tech Stack</span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400">
                        We work with the latest and most powerful technologies
                      </p>
                    </div>
                  </SectionLoader>

                  <SectionLoader delay={600}>
                    <TechStackSlider />
                  </SectionLoader>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={200}>
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Services</span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to your business needs
                      </p>
                    </div>
                  </SectionLoader>

                  <SectionLoader delay={400}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                      ))}
                    </div>
                  </SectionLoader>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={600}>
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why <span className="text-gradient">Choose Us</span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400">
                        What makes us different from others
                      </p>
                    </div>
                  </SectionLoader>

                  <SectionLoader delay={800}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {whyChooseUs.map((item, index) => (
                        <div
                          key={item.title}
                          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                        >
                          <div className="text-5xl mb-4">{item.icon}</div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </SectionLoader>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={1000}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {stats.map((stat, index) => (
                        <div
                          key={stat.label}
                          className="text-center"
                        >
                          <AnimatedCounter
                            end={stat.value}
                            suffix={stat.suffix}
                            duration={2}
                          />
                          <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </SectionLoader>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={1200}>
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="text-gradient">Leading Brands</span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400">
                        Companies that trust us with their digital transformation
                      </p>
                    </div>
                  </SectionLoader>

                  <SectionLoader delay={1400}>
                    <ClientsCarousel />
                  </SectionLoader>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={1600}>
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What Our <span className="text-gradient">Clients Say</span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400">
                        Don't just take our word for it
                      </p>
                    </div>
                  </SectionLoader>

                  <SectionLoader delay={1800}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                          key={testimonial.name}
                          {...testimonial}
                          index={index}
                        />
                      ))}
                    </div>
                  </SectionLoader>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-white">
        <div className="container mx-auto px-4">
                  <SectionLoader delay={2000}>
                    <div className="max-w-4xl mx-auto text-center text-gray-900">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Project?
                      </h2>
                      <p className="text-xl mb-8 opacity-90">
                        Let's build something amazing together. Get in touch with us today!
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
                      >
                        Get Started Now
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </SectionLoader>
        </div>
      </section>
    </div>
  )
}

