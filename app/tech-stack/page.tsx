'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const techCategories = [
  {
    category: 'Frontend',
    description: 'Modern frameworks for building responsive user interfaces',
    technologies: [
      { name: 'React', icon: '⚛️', description: 'Component-based UI library', link: '/blog/mastering-react' },
      { name: 'Next.js', icon: '▲', description: 'React framework with SSR', link: '/blog/nextjs-guide' },
      { name: 'Angular', icon: '🅰️', description: 'Full-featured framework', link: '/blog/angular-basics' },
      { name: 'Vue.js', icon: '💚', description: 'Progressive framework', link: '/blog/vue-introduction' },
      { name: 'TypeScript', icon: '🔷', description: 'Typed JavaScript', link: '/blog/typescript-benefits' },
      { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS', link: '/blog/tailwind-guide' },
    ],
  },
  {
    category: 'Backend',
    description: 'Robust server-side technologies for scalable applications',
    technologies: [
      { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime', link: '/blog/nodejs-essentials' },
      { name: 'Express.js', icon: '🚂', description: 'Fast web framework', link: '/blog/express-api' },
      { name: 'NestJS', icon: '🦅', description: 'Progressive Node.js', link: '/blog/nestjs-architecture' },
      { name: 'Python', icon: '🐍', description: 'Versatile language', link: '/blog/python-backend' },
      { name: 'Django', icon: '🎸', description: 'Python web framework', link: '/blog/django-framework' },
      { name: 'FastAPI', icon: '⚡', description: 'Modern Python API', link: '/blog/fastapi-guide' },
    ],
  },
  {
    category: 'Mobile',
    description: 'Cross-platform and native mobile development',
    technologies: [
      { name: 'Flutter', icon: '💙', description: 'Google\'s UI toolkit', link: '/blog/flutter-development' },
      { name: 'React Native', icon: '📱', description: 'Cross-platform apps', link: '/blog/react-native-guide' },
      { name: 'Swift', icon: '🍎', description: 'iOS development', link: '/blog/swift-ios' },
      { name: 'Kotlin', icon: '🤖', description: 'Android development', link: '/blog/kotlin-android' },
    ],
  },
  {
    category: 'Database',
    description: 'Reliable data storage and management solutions',
    technologies: [
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL database', link: '/blog/mongodb-basics' },
      { name: 'PostgreSQL', icon: '🐘', description: 'Relational database', link: '/blog/postgresql-guide' },
      { name: 'MySQL', icon: '🐬', description: 'Popular SQL database', link: '/blog/mysql-optimization' },
      { name: 'Redis', icon: '🔴', description: 'In-memory data store', link: '/blog/redis-caching' },
      { name: 'Prisma', icon: '⚡', description: 'Next-gen ORM', link: '/blog/prisma-orm' },
      { name: 'Firebase', icon: '🔥', description: 'Google\'s platform', link: '/blog/firebase-setup' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Infrastructure and deployment technologies',
    technologies: [
      { name: 'AWS', icon: '☁️', description: 'Amazon Web Services', link: '/blog/aws-essentials' },
      { name: 'Azure', icon: '💠', description: 'Microsoft Cloud', link: '/blog/azure-cloud' },
      { name: 'Docker', icon: '🐳', description: 'Containerization', link: '/blog/docker-containers' },
      { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration', link: '/blog/kubernetes-guide' },
      { name: 'CI/CD', icon: '🔄', description: 'Automated pipelines', link: '/blog/cicd-best-practices' },
      { name: 'Nginx', icon: '🌐', description: 'Web server', link: '/blog/nginx-configuration' },
    ],
  },
  {
    category: 'AI & ML',
    description: 'Artificial intelligence and machine learning tools',
    technologies: [
      { name: 'TensorFlow', icon: '🧠', description: 'ML framework', link: '/blog/tensorflow-intro' },
      { name: 'PyTorch', icon: '🔥', description: 'Deep learning', link: '/blog/pytorch-basics' },
      { name: 'OpenAI', icon: '🤖', description: 'AI APIs', link: '/blog/openai-integration' },
      { name: 'Scikit-learn', icon: '📊', description: 'ML library', link: '/blog/scikit-learn' },
      { name: 'Hugging Face', icon: '🤗', description: 'NLP models', link: '/blog/hugging-face' },
    ],
  },
]

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeTech = techCategories.find((cat) => cat.category === activeCategory)

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
              Our <span className="text-gradient">Tech Stack</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We leverage the most powerful and modern technologies to build scalable, 
              performant, and secure solutions for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tech Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.category
                    ? 'btn-gradient shadow-glow'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.div
            key={`${activeCategory}-description`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {activeTech?.description}
            </p>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            key={`${activeCategory}-grid`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeTech?.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={tech.link}>
                  <div className="relative h-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                        {tech.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {tech.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Technologies Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete <span className="text-gradient">Technology Suite</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Browse all technologies we work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techCategories.flatMap((cat) => 
              cat.technologies.map((tech) => ({ ...tech, category: cat.category }))
            ).map((tech, index) => (
              <motion.div
                key={`${tech.category}-${tech.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-center">{tech.name}</span>
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
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our experts can help you select the right technology stack for your project
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Consult With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

