# Cripcocode - IT Company Portfolio Website

A modern, SEO-optimized portfolio website for Cripcocode, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **SEO Optimized**: Metadata API, sitemap.xml, robots.txt, structured data
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode Only**: Sleek dark theme with deep sky blue and white gradients
- **Animated UI**: Smooth animations with Framer Motion
- **Blog System**: SEO-optimized blog with categories, tags, and search
- **Contact Form**: Dynamic form with validation
- **Performance**: Optimized for Lighthouse score > 90

## 📁 Project Structure

```
├── app/
│   ├── about/              # About Us page
│   ├── blog/               # Blog listing and individual posts
│   ├── clients/            # Clients and case studies
│   ├── contact/            # Contact form page
│   ├── services/           # Services overview and detail pages
│   ├── tech-stack/         # Technology stack showcase
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Landing page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── layout/             # Header, Footer
│   ├── AnimatedLogo.tsx
│   ├── ClientsCarousel.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   └── ...                 # Other components
├── lib/
│   ├── blog-data.ts        # Blog posts data
│   ├── seo.ts              # SEO utilities and schemas
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

### Features
- Server-side rendering (SSR)
- Static site generation (SSG)
- Incremental static regeneration (ISR)
- Image optimization
- Font optimization

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Nginx on Ubuntu Server

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install Nginx:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

3. **Install Node.js & PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install nodejs
   sudo npm install -g pm2
   ```

4. **Start application with PM2:**
   ```bash
   pm2 start npm --name "cripcocode" -- start
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx:**
   Create `/etc/nginx/sites-available/cripcocode`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable site and restart Nginx:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/cripcocode /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Install SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

## 🎨 Customization

### Update Site Configuration

Edit `lib/seo.ts`:
```typescript
export const siteConfig = {
  name: 'Cripcocode',
  description: 'Leading IT company specializing in Web Development, App Development, Digital Marketing, and AI Solutions.',
  url: 'https://cripcocode.com',
  // ...
}
```

### Update Colors

Edit `tailwind.config.ts` to change the color scheme.

### Add Blog Posts

Add new posts to `lib/blog-data.ts`.

## 📊 SEO Features

- ✅ Metadata API for dynamic meta tags
- ✅ Automatic sitemap generation
- ✅ robots.txt configuration
- ✅ JSON-LD structured data (Organization, Website, Article)
- ✅ OpenGraph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Image optimization with next/image
- ✅ Semantic HTML

## 🔧 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For support, email contact@cripcocode.com or visit our contact page.

## 🌟 Features Coming Soon

- [ ] Newsletter integration with Mailchimp
- [ ] Blog CMS integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Case studies filtering
- [ ] Client portal

---

Built with ❤️ by Cripcocode

