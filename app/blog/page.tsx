'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiSearch, FiCalendar, FiClock, FiUser, FiArrowRight } from 'react-icons/fi'
import { getAllBlogPosts, getAllCategories, getAllTags } from '@/lib/blog-data'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('')

  const allPosts = getAllBlogPosts()
  const categories = ['All', ...getAllCategories()]
  const tags = getAllTags()

  // Filter posts based on search, category, and tag
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesSearch && matchesCategory && matchesTag
  })

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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Insights, tutorials, and updates from our team of experts. Stay informed 
              about the latest trends in web development, AI, and digital transformation.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 sticky top-20 bg-white dark:bg-gray-900 z-40">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-violet-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  !selectedTag
                    ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Tags
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-500'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No posts found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-1">
                            <FiCalendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiClock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                          {post.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-2">
                            <FiUser className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-primary-500 font-medium group-hover:translate-x-2 transition-transform">
                            <span className="text-sm">Read More</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-violet-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles, tutorials, and updates delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-500 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

