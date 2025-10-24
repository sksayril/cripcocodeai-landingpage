import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight, FiCode, FiSmartphone, FiTrendingUp, FiCpu } from 'react-icons/fi'
import { generateSEO } from '@/lib/seo'

interface ServiceDetail {
  slug: string
  icon: any
  title: string
  description: string
  fullDescription: string
  features: string[]
  benefits: string[]
  technologies: string[]
  process: Array<{ step: string; title: string; description: string }>
  pricing: string
  deliverables: string[]
}

const services: ServiceDetail[] = [
  {
    slug: 'web-development',
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies',
    fullDescription: 'Our web development services combine modern design with powerful functionality to create websites that not only look great but drive results. We specialize in building fast, secure, and scalable web applications using the latest technologies like React, Next.js, and Node.js.',
    features: [
      'Responsive Design',
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'CMS Development',
      'API Development & Integration',
      'Performance Optimization',
      'SEO Optimization',
    ],
    benefits: [
      'Increased online presence',
      'Better user engagement',
      'Higher conversion rates',
      'Scalable architecture',
      'Mobile-friendly design',
      'Fast loading times',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
    process: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a detailed project roadmap',
      },
      {
        step: '02',
        title: 'Design & Prototyping',
        description: 'Create wireframes and interactive prototypes for your approval',
      },
      {
        step: '03',
        title: 'Development',
        description: 'Build your application using agile methodology with regular updates',
      },
      {
        step: '04',
        title: 'Testing & Launch',
        description: 'Thorough testing followed by deployment and ongoing support',
      },
    ],
    pricing: 'Starting from $5,000',
    deliverables: [
      'Fully functional website',
      'Source code',
      'Documentation',
      'Training materials',
      '3 months support',
      'SEO optimization',
    ],
  },
  {
    slug: 'app-development',
    icon: FiSmartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications',
    fullDescription: 'We create stunning mobile applications for iOS and Android using Flutter and React Native. Our apps are designed to provide seamless user experiences while maintaining native performance and functionality.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Native Performance',
      'Beautiful UI/UX Design',
      'Offline Functionality',
      'Push Notifications',
      'In-App Purchases',
      'App Store Optimization',
    ],
    benefits: [
      'Reach mobile users',
      'Single codebase for both platforms',
      'Native-like performance',
      'Cost-effective development',
      'Faster time to market',
      'Easy maintenance',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'GraphQL'],
    process: [
      {
        step: '01',
        title: 'Strategy & Planning',
        description: 'Define app features, target audience, and monetization strategy',
      },
      {
        step: '02',
        title: 'UI/UX Design',
        description: 'Create intuitive and engaging user interfaces',
      },
      {
        step: '03',
        title: 'Development & Testing',
        description: 'Build and test on real devices throughout development',
      },
      {
        step: '04',
        title: 'Launch & Support',
        description: 'App store submission and post-launch monitoring',
      },
    ],
    pricing: 'Starting from $10,000',
    deliverables: [
      'iOS and Android apps',
      'Backend infrastructure',
      'Admin panel',
      'App store assets',
      'User documentation',
      '6 months support',
    ],
  },
  {
    slug: 'digital-marketing',
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence',
    fullDescription: 'Our digital marketing services help businesses increase visibility, attract qualified leads, and boost conversions. We use data-driven strategies across multiple channels to deliver measurable results.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Analytics & Reporting',
      'Brand Strategy',
    ],
    benefits: [
      'Increased website traffic',
      'Higher search rankings',
      'More qualified leads',
      'Better ROI',
      'Brand awareness',
      'Customer engagement',
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp', 'HubSpot'],
    process: [
      {
        step: '01',
        title: 'Audit & Analysis',
        description: 'Analyze current digital presence and competition',
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Create comprehensive marketing strategy and campaigns',
      },
      {
        step: '03',
        title: 'Implementation',
        description: 'Execute campaigns across selected channels',
      },
      {
        step: '04',
        title: 'Optimization',
        description: 'Monitor, analyze, and optimize for better results',
      },
    ],
    pricing: 'Starting from $2,000/month',
    deliverables: [
      'Marketing strategy',
      'Campaign setup',
      'Content creation',
      'Monthly reports',
      'Performance analysis',
      'Ongoing optimization',
    ],
  },
  {
    slug: 'ai-solutions',
    icon: FiCpu,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning',
    fullDescription: 'Transform your business with artificial intelligence and machine learning. We develop custom AI solutions that automate processes, provide insights, and create competitive advantages.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Chatbot Development',
      'Predictive Analytics',
      'Process Automation',
      'Recommendation Systems',
      'Data Analysis',
    ],
    benefits: [
      'Automated processes',
      'Better decision making',
      'Cost reduction',
      'Improved efficiency',
      'Predictive insights',
      'Competitive advantage',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'Hugging Face', 'Scikit-learn'],
    process: [
      {
        step: '01',
        title: 'Problem Definition',
        description: 'Identify opportunities for AI implementation',
      },
      {
        step: '02',
        title: 'Data Preparation',
        description: 'Collect, clean, and prepare training data',
      },
      {
        step: '03',
        title: 'Model Development',
        description: 'Build, train, and validate AI models',
      },
      {
        step: '04',
        title: 'Deployment & Monitoring',
        description: 'Deploy models and monitor performance',
      },
    ],
    pricing: 'Starting from $15,000',
    deliverables: [
      'Custom AI models',
      'Integration code',
      'API documentation',
      'Training data pipeline',
      'Model monitoring dashboard',
      'Ongoing support',
    ],
  },
]

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return generateSEO({
    title: service.title,
    description: service.description,
    url: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-violet-500 rounded-3xl flex items-center justify-center text-white mb-6">
              <Icon className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 btn-gradient rounded-full font-semibold shadow-lg hover:shadow-glow transition-all inline-flex items-center"
              >
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
              <span className="px-8 py-4 bg-white dark:bg-gray-800 rounded-full font-semibold shadow-lg">
                {service.pricing}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                    <FiCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                    <FiCheck className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.process.map((step) => (
              <div key={step.step} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-gradient opacity-30 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            What You&apos;ll Receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <FiCheck className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-500 to-violet-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss your project and create something amazing together
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Contact Us Today
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

