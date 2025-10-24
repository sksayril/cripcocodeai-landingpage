# Deployment Guide

This guide covers deploying the Cripcocode Tech website to various platforms.

## Table of Contents
- [Vercel Deployment](#vercel-deployment)
- [Ubuntu/Nginx Deployment](#ubuntunginx-deployment)
- [Docker Deployment](#docker-deployment)
- [Environment Variables](#environment-variables)

---

## Vercel Deployment

Vercel is the recommended platform for deploying Next.js applications.

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables (see below)
   - Click "Deploy"

3. **Configure Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

4. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

---

## Ubuntu/Nginx Deployment

For deploying on a Ubuntu server with Nginx.

### Prerequisites:
- Ubuntu 20.04 or later
- Root or sudo access
- Domain name pointed to server

### Step 1: Update System
```bash
sudo apt update
sudo apt upgrade -y
```

### Step 2: Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```

### Step 3: Install PM2
```bash
sudo npm install -g pm2
```

### Step 4: Clone and Build Project
```bash
cd /var/www
sudo git clone your-repo-url cripcocode
cd cripcocode
sudo npm install
sudo npm run build
```

### Step 5: Set Environment Variables
```bash
sudo nano .env.local
```
Add your environment variables and save (Ctrl+X, Y, Enter)

### Step 6: Start with PM2
```bash
pm2 start npm --name "cripcocode" -- start
pm2 startup
pm2 save
```

### Step 7: Install Nginx
```bash
sudo apt install nginx -y
```

### Step 8: Configure Nginx
Create a new configuration file:
```bash
sudo nano /etc/nginx/sites-available/cripcocode
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/cripcocode /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 9: Install SSL Certificate
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts to complete SSL setup.

### Step 10: Set Up Auto-renewal
```bash
sudo certbot renew --dry-run
```

### Step 11: Configure Firewall
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### Useful PM2 Commands:
```bash
pm2 list                    # List all processes
pm2 restart cripcocode      # Restart app
pm2 stop cripcocode         # Stop app
pm2 logs cripcocode         # View logs
pm2 monit                   # Monitor processes
```

---

## Docker Deployment

### Create Dockerfile:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Create docker-compose.yml:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env.local
    restart: unless-stopped
```

### Deploy:
```bash
docker-compose up -d
```

---

## Environment Variables

Create a `.env.local` file with these variables:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional but Recommended
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key_here

# For Newsletter (if using Mailchimp)
MAILCHIMP_API_KEY=your_key
MAILCHIMP_LIST_ID=your_list_id
```

---

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify SSL certificate
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test website speed (GTmetrix, PageSpeed Insights)
- [ ] Set up monitoring (Uptime Robot, etc.)
- [ ] Configure backups
- [ ] Test dark mode
- [ ] Verify SEO meta tags

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### PM2 Issues
```bash
# Restart PM2
pm2 restart all
pm2 logs # Check for errors
```

### Nginx Issues
```bash
# Check Nginx status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
```

### Port Already in Use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 PID
```

---

## Performance Optimization

### Enable Gzip in Nginx
Already included in the configuration above.

### Enable HTTP/2
Add to your Nginx server block:
```nginx
listen 443 ssl http2;
```

### Add Caching Headers
```nginx
location /_next/static {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

---

## Monitoring

### Set Up Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Application Monitoring
```bash
# PM2 Monitoring
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
```

---

## Backup Strategy

### Database Backups (if applicable)
```bash
# Create backup script
sudo nano /usr/local/bin/backup.sh
```

### File Backups
```bash
# Backup to remote server
rsync -avz /var/www/cripcocode/ user@backup-server:/backups/cripcocode/
```

---

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Visit [Vercel Documentation](https://vercel.com/docs)
- Contact: contact@cripccocodetech.com

---

**Happy Deploying! 🚀**

