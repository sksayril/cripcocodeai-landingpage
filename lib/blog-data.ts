export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image: string
  date: string
  author: string
  category: string
  tags: string[]
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-react',
    title: 'Mastering React: A Complete Guide for Modern Web Development',
    description: 'Learn everything you need to know about React, from basics to advanced patterns, hooks, and best practices.',
    content: `
      React has revolutionized the way we build web applications. In this comprehensive guide, we'll explore everything from the fundamentals to advanced concepts.

      ## Getting Started with React

      React is a JavaScript library for building user interfaces. It allows developers to create reusable components and manage application state efficiently.

      ### Key Concepts

      - Components: The building blocks of React applications
      - Props: Data passed between components
      - State: Component-level data management
      - Hooks: Modern way to handle state and side effects

      ## Advanced React Patterns

      As you grow more comfortable with React, you'll encounter various patterns that make your code more maintainable and scalable.

      ### Component Composition

      Component composition is the practice of combining smaller components to build more complex UIs.

      ### Custom Hooks

      Custom hooks allow you to extract component logic into reusable functions.

      ## Best Practices

      1. Keep components small and focused
      2. Use meaningful component and variable names
      3. Implement proper error boundaries
      4. Optimize performance with React.memo and useMemo
      5. Follow consistent file structure

      ## Conclusion

      React continues to be one of the most popular libraries for web development. By following best practices and understanding core concepts, you can build amazing applications.
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630',
    date: '2024-01-15',
    author: 'John Doe',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    readTime: '8 min read',
  },
  {
    slug: 'nextjs-guide',
    title: 'Next.js 15: The Ultimate Framework for Production-Ready Apps',
    description: 'Discover how Next.js 15 brings powerful features like App Router, Server Components, and enhanced performance.',
    content: `
      Next.js 15 is here with groundbreaking features that make building production-ready applications easier than ever.

      ## What's New in Next.js 15

      Next.js 15 introduces several game-changing features that enhance developer experience and application performance.

      ### App Router

      The new App Router brings a more intuitive way to structure your applications with nested layouts and improved routing.

      ### Server Components

      Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance.

      ## SEO Optimization

      Next.js makes SEO optimization straightforward with built-in features:

      - Metadata API for dynamic meta tags
      - Automatic sitemap generation
      - Image optimization
      - Structured data support

      ## Performance Benefits

      Next.js 15 offers significant performance improvements:

      1. Faster builds
      2. Improved caching
      3. Better code splitting
      4. Enhanced image optimization

      ## Getting Started

      Starting a new Next.js project is simple with the create-next-app command.

      ## Conclusion

      Next.js 15 is the go-to framework for building modern web applications with excellent performance and developer experience.
    `,
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=1200&h=630',
    date: '2024-01-20',
    author: 'Jane Smith',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'SSR', 'Web Development'],
    readTime: '10 min read',
  },
  {
    slug: 'typescript-benefits',
    title: 'Why TypeScript is Essential for Large-Scale Applications',
    description: 'Explore the benefits of TypeScript and why it has become the standard for enterprise applications.',
    content: `
      TypeScript has become the de facto standard for building large-scale JavaScript applications. Let's explore why.

      ## What is TypeScript?

      TypeScript is a superset of JavaScript that adds static typing and other powerful features to the language.

      ### Type Safety

      The primary benefit of TypeScript is type safety, which helps catch errors at compile time rather than runtime.

      ### Better Developer Experience

      TypeScript provides excellent IDE support with features like:

      - Intelligent code completion
      - Inline documentation
      - Refactoring tools
      - Type checking

      ## Key Features

      1. Static typing
      2. Interface definitions
      3. Generics
      4. Decorators
      5. Advanced type inference

      ## When to Use TypeScript

      TypeScript is particularly beneficial for:

      - Large codebases
      - Team projects
      - Long-term maintenance
      - Complex applications

      ## Best Practices

      Follow these practices to get the most out of TypeScript:

      1. Enable strict mode
      2. Use interfaces for object shapes
      3. Avoid using 'any' type
      4. Leverage union types
      5. Create reusable generic types

      ## Conclusion

      TypeScript significantly improves code quality, maintainability, and developer productivity, making it essential for modern web development.
    `,
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=630',
    date: '2024-01-25',
    author: 'Mike Johnson',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices'],
    readTime: '7 min read',
  },
  {
    slug: 'flutter-development',
    title: 'Flutter Development: Build Beautiful Cross-Platform Apps',
    description: 'Learn how Flutter enables you to build stunning mobile applications for iOS and Android from a single codebase.',
    content: `
      Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.

      ## Why Choose Flutter?

      Flutter offers numerous advantages for mobile app development:

      ### Single Codebase

      Write once, deploy everywhere. Flutter allows you to maintain a single codebase for iOS and Android.

      ### Hot Reload

      See changes instantly with Flutter's hot reload feature, dramatically speeding up development.

      ### Beautiful UI

      Flutter comes with a rich set of customizable widgets for creating stunning user interfaces.

      ## Key Features

      1. Fast development
      2. Expressive UI
      3. Native performance
      4. Strong community support

      ## Getting Started

      Setting up Flutter is straightforward. Install the Flutter SDK and you're ready to go.

      ## Best Practices

      - Use StatelessWidget when possible
      - Implement proper state management
      - Optimize widget builds
      - Follow Material Design guidelines
      - Write testable code

      ## Popular Apps Built with Flutter

      Many successful companies use Flutter:

      - Google Ads
      - Alibaba
      - BMW
      - eBay

      ## Conclusion

      Flutter is an excellent choice for cross-platform mobile development, offering great performance and developer experience.
    `,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630',
    date: '2024-02-01',
    author: 'Sarah Williams',
    category: 'Mobile Development',
    tags: ['Flutter', 'Mobile Development', 'Cross-Platform', 'Dart'],
    readTime: '9 min read',
  },
  {
    slug: 'ai-business-transformation',
    title: 'How AI is Transforming Modern Business Operations',
    description: 'Discover how artificial intelligence is revolutionizing business processes and driving innovation across industries.',
    content: `
      Artificial Intelligence is no longer a futuristic concept—it's transforming businesses today.

      ## AI in Business

      Companies across all industries are leveraging AI to improve efficiency, reduce costs, and drive innovation.

      ### Automation

      AI-powered automation is handling repetitive tasks, freeing employees to focus on strategic work.

      ### Data Analysis

      AI algorithms can analyze vast amounts of data quickly, uncovering insights that humans might miss.

      ### Customer Experience

      Chatbots and virtual assistants provide 24/7 customer support and personalized experiences.

      ## Key Applications

      1. Predictive analytics
      2. Natural language processing
      3. Computer vision
      4. Recommendation systems
      5. Fraud detection

      ## Implementation Strategies

      Successfully implementing AI requires:

      - Clear objectives
      - Quality data
      - Skilled personnel
      - Appropriate infrastructure
      - Continuous monitoring

      ## Challenges

      Organizations face several challenges when adopting AI:

      - Data quality and availability
      - Integration with existing systems
      - Skills gap
      - Ethical considerations

      ## Future Outlook

      AI will continue to evolve and become more accessible to businesses of all sizes.

      ## Conclusion

      Embracing AI is no longer optional for businesses that want to remain competitive in the digital age.
    `,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630',
    date: '2024-02-05',
    author: 'John Doe',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Business', 'Machine Learning', 'Innovation'],
    readTime: '11 min read',
  },
  {
    slug: 'digital-marketing-strategies-2024',
    title: 'Digital Marketing Strategies That Actually Work in 2024',
    description: 'Proven digital marketing tactics to grow your online presence and drive conversions in 2024.',
    content: `
      Digital marketing continues to evolve rapidly. Here are the strategies that are delivering results in 2024.

      ## Content Marketing

      Quality content remains king in digital marketing.

      ### SEO Optimization

      Search engine optimization is crucial for organic visibility:

      - Keyword research
      - On-page optimization
      - Link building
      - Technical SEO

      ### Social Media Marketing

      Social media platforms offer powerful targeting capabilities for reaching your audience.

      ## Paid Advertising

      PPC campaigns can deliver quick results when done correctly:

      1. Google Ads
      2. Facebook Ads
      3. LinkedIn Ads
      4. Instagram Ads

      ## Email Marketing

      Email remains one of the highest ROI marketing channels.

      ### Personalization

      Personalized emails significantly outperform generic messages.

      ### Automation

      Marketing automation tools help scale your campaigns efficiently.

      ## Analytics and Measurement

      Track these key metrics:

      - Conversion rate
      - Cost per acquisition
      - Customer lifetime value
      - ROI

      ## Emerging Trends

      Stay ahead with these trends:

      - AI-powered marketing
      - Voice search optimization
      - Video marketing
      - Interactive content

      ## Conclusion

      Success in digital marketing requires a multi-channel approach, constant testing, and data-driven decision making.
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630',
    date: '2024-02-10',
    author: 'Jane Smith',
    category: 'Digital Marketing',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Strategy'],
    readTime: '12 min read',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
}

