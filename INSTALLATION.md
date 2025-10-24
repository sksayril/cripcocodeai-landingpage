# Installation Guide

Complete step-by-step guide to set up the Cripcocode Tech website locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cripcocode-tech.git
cd cripcocode-tech
```

Or if starting fresh, create a new directory:
```bash
mkdir cripcocode-tech
cd cripcocode-tech
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- And more...

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cripcocode-tech/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── blog/                # Blog pages
│   │   └── [slug]/         # Individual blog posts
│   ├── clients/             # Clients page
│   ├── contact/             # Contact form
│   ├── services/            # Services pages
│   │   └── [slug]/         # Individual service pages
│   ├── tech-stack/          # Tech stack page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── layout/             # Layout components
│   ├── AnimatedLogo.tsx
│   ├── ClientsCarousel.tsx
│   ├── ServiceCard.tsx
│   └── ...
├── lib/                     # Utility functions
│   ├── blog-data.ts        # Blog posts
│   ├── seo.ts              # SEO utilities
│   └── utils.ts            # Helper functions
├── public/                  # Static files
│   └── logo.svg
├── .env.example             # Environment template
├── .eslintrc.json          # ESLint config
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js config
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── README.md               # Documentation
```

## Available Scripts

### Development
```bash
npm run dev     # Start development server
```

### Production Build
```bash
npm run build   # Build for production
npm start       # Start production server
```

### Code Quality
```bash
npm run lint    # Run ESLint
```

## Configuration

### Tailwind CSS

Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

### Next.js

Edit `next.config.js` to configure:
- Image domains
- Redirects
- Headers
- Environment variables

### TypeScript

Edit `tsconfig.json` to adjust TypeScript settings.

## Customization

### 1. Update Site Information

Edit `lib/seo.ts`:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  description: 'Your description',
  url: 'https://yourwebsite.com',
  // ... other settings
}
```

### 2. Update Theme Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      // ...
    }
  }
}
```

### 3. Add Blog Posts

Edit `lib/blog-data.ts` to add new blog posts:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  description: 'Post description',
  content: 'Full post content...',
  // ...
}
```

### 4. Update Contact Information

Edit `components/layout/Footer.tsx` and `app/contact/page.tsx` with your:
- Email
- Phone
- Address
- Social links

### 5. Customize Services

Edit `app/services/[slug]/page.tsx` to modify service details.

## Features Setup

### Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### reCAPTCHA

1. Sign up at [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Create a v3 site
3. Add site key to `.env.local`:
   ```env
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   ```

### Newsletter (Mailchimp)

1. Get Mailchimp API key
2. Create an audience and get List ID
3. Add to `.env.local`:
   ```env
   MAILCHIMP_API_KEY=your_key
   MAILCHIMP_LIST_ID=your_list_id
   ```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors

```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Development Tips

### Hot Reload
Changes are automatically reflected in the browser.

### VS Code Extensions
Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- Auto Rename Tag
- Path Intellisense

### Debugging
Add breakpoints in VS Code or use:
```javascript
console.log('Debug:', variable)
```

## Next Steps

1. ✅ Customize content and branding
2. ✅ Add your own blog posts
3. ✅ Configure environment variables
4. ✅ Test all features locally
5. ✅ Deploy to Vercel or your server
6. ✅ Set up analytics
7. ✅ Submit sitemap to Google Search Console

## Getting Help

- **Documentation**: Check README.md and DEPLOYMENT.md
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Support**: contact@cripccocodetech.com

## License

MIT License - See LICENSE file for details.

---

**Happy Coding! 🚀**

