import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiClock, FiUser, FiArrowLeft, FiShare2 } from 'react-icons/fi'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'
import { generateBlogSEO, generateArticleSchema } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generateBlogSEO({
    title: post.title,
    description: post.description,
    image: post.image,
    slug: post.slug,
    date: post.date,
    author: post.author,
    keywords: post.tags,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    image: post.image,
    slug: post.slug,
    date: post.date,
    author: post.author,
  })

  // Get related posts (same category, excluding current post)
  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 mb-6 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <FiUser className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-50 hover:text-primary-500 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-4 pb-8 border-b border-gray-200 dark:border-gray-800">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-50 hover:text-primary-500 transition-colors">
                <FiShare2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="mb-12">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                // Check if it's a list item
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n')
                  return (
                    <ol key={index} className="list-decimal pl-6 space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item.replace(/^\d+\.\s*/, '')}
                        </li>
                      ))}
                    </ol>
                  )
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n- ').filter(item => item.trim())
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">
                          {item.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                // Regular paragraph
                return paragraph.trim() && (
                  <p key={index} className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Technical Writer & Developer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Passionate about web development, AI, and helping others learn new technologies. 
                Writing about the latest trends and best practices in software development.
              </p>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Related <span className="text-gradient">Articles</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {relatedPost.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-500 to-violet-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let's turn your ideas into reality with our expert team
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

