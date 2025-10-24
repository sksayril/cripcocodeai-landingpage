import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { generateSEO, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateSEO({
  title: 'Home',
  description: 'Leading IT company specializing in Web Development, App Development, Digital Marketing, and AI Solutions. Innovating Beyond Code.',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/logo.ico" />
        <link rel="shortcut icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
              <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
                  <Header />
                  <main className="min-h-screen">{children}</main>
                  <Footer />
                  <WhatsAppButton />
                </ThemeProvider>
              </body>
    </html>
  )
}

