'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiUsers, FiTarget, FiEye, FiAward } from 'react-icons/fi'

const timeline = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through innovative technology solutions.',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a successful web application project.',
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our team to 20+ talented developers and designers to serve more clients.',
  },
  {
    year: '2021',
    title: 'AI Solutions Launch',
    description: 'Launched our AI and machine learning division to help businesses automate and optimize.',
  },
  {
    year: '2022',
    title: '200+ Projects',
    description: 'Successfully delivered over 200 projects across various industries worldwide.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received multiple awards for excellence in web development and client satisfaction.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded operations globally with clients in over 25 countries.',
  },
]

const team = [
  {
    name: 'SK Sayril Amed',
    role: 'Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Visionary leader and founder with extensive experience in technology and business development',
  },
  {
    name: 'Arjina Sultana',
    role: 'Co-Founder',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    description: 'Strategic co-founder with expertise in business operations and client relations',
  },
  {
    name: 'Nargis Sultana',
    role: 'HR/Digital Marketing Expert',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Human resources specialist and digital marketing expert with proven track record',
  },
  {
    name: 'Samrin Sultana',
    role: 'Senior Digital Marketing Expert',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    description: 'Senior digital marketing strategist with expertise in SEO, SEM, and social media',
  },
  {
    name: 'Kabita Das',
    role: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    description: 'Experienced full-stack developer with expertise in modern web technologies',
  },
  {
    name: 'Subrata',
    role: 'Mobile App Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'Mobile app development specialist with expertise in iOS and Android platforms',
  },
  {
    name: 'Sagar',
    role: 'React Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    description: 'React.js expert with strong skills in frontend development and user interface design',
  },
]

const values = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: 'Collaboration',
    description: 'We work closely with clients, treating their success as our own.',
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
  },
  {
    icon: <FiEye className="w-8 h-8" />,
    title: 'Transparency',
    description: 'We believe in open communication and honest relationships with our clients.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Cripcocode</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We are a team of passionate developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology solutions. Since 2018, 
              we've been helping companies of all sizes achieve their digital transformation goals.
            </p>
            
            {/* Company Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-primary-500">CIN:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">U62013WB2025PTC277922</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary-500">Registration Year:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">2025</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary-500">State:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">West Bengal</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Registered Office
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>C/o Arjina Sultana, Jhapantala</p>
                    <p>Memari Bazar, Bardhaman</p>
                    <p>Memari - I, West Bengal, India</p>
                    <p className="font-semibold text-primary-500">713146</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive 
                growth, efficiency, and competitive advantage. We strive to be more than just 
                a service provider – we aim to be a trusted partner in our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the world's most trusted technology partner, recognized for our innovation, 
                quality, and commitment to client success. We envision a future where businesses 
                of all sizes can leverage cutting-edge technology to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From humble beginnings to industry leaders
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-violet-500 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-gradient mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-violet-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-violet-100 dark:from-primary-900/30 dark:to-violet-900/30 rounded-2xl flex items-center justify-center text-primary-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The brilliant minds behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="mb-4 relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-glow transition-shadow">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
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
              Want to Join Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals to join our growing team
            </p>
            <a
              href="mailto:info.cripcocode@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

