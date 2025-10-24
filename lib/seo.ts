import { Metadata } from 'next'

export const siteConfig = {
  name: 'Cripcocode Technologies',
  description: 'Leading IT company specializing in Web Development, App Development, Digital Marketing, and AI Solutions. Innovating Beyond Code.',
  url: 'https://cripcocode.com',
  ogImage: 'https://cripcocode.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/cripcocode',
    linkedin: 'https://linkedin.com/company/cripcocode',
    github: 'https://github.com/cripcocode',
  },
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
}: {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  keywords?: string[]
}): Metadata {
  const siteTitle = `${title} | ${siteConfig.name}`
  const siteDescription = description || siteConfig.description
  const siteImage = image || siteConfig.ogImage
  const siteUrl = url || siteConfig.url

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords || [
      'web development',
      'app development',
      'digital marketing',
      'IT company',
      'Cripcocode',
      'React',
      'Next.js',
      'AI Solutions',
      'software development',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: type,
      locale: 'en_US',
      url: siteUrl,
      title: siteTitle,
      description: siteDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: '@cripccocodetech',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateBlogSEO({
  title,
  description,
  image,
  slug,
  date,
  author,
  keywords,
}: {
  title: string
  description: string
  image: string
  slug: string
  date: string
  author: string
  keywords: string[]
}): Metadata {
  const url = `${siteConfig.url}/blog/${slug}`

  return {
    ...generateSEO({
      title,
      description,
      image,
      url,
      type: 'article',
      keywords,
    }),
    alternates: {
      canonical: url,
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'contact@cripccocodetech.com',
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }
}

export function generateArticleSchema({
  title,
  description,
  image,
  slug,
  date,
  author,
}: {
  title: string
  description: string
  image: string
  slug: string
  date: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}`,
    },
  }
}

