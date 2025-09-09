import './globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import TopTicker from '@/components/layout/TopTicker'
import Footer from '@/components/layout/Footer'
import CursorTrail from '@/components/ui/CursorTrail'
import ScrollTop from '@/components/ui/ScrollTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amnyar.com'),
  title: {
    default: 'امن‌یار | هاستینگ، طراحی سایت و خدمات شبکه',
    template: '%s | امن‌یار',
  },
  description: 'هاست لینوکس، طراحی وب‌سایت، سرور اختصاصی و خدمات شبکه با پشتیبانی حرفه‌ای در امن‌یار.',
  alternates: { canonical: 'https://www.amnyar.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.amnyar.com/',
    siteName: 'امن‌یار',
    title: 'امن‌یار | هاستینگ، طراحی سایت و خدمات شبکه',
    description: 'هاست لینوکس، طراحی وب‌سایت، سرور اختصاصی و خدمات شبکه با پشتیبانی حرفه‌ای.',
    images: [{ url: '/assets/images/og/og.jpg', width: 1200, height: 630, alt: 'Amnyar' }],
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@amnyar',
    creator: '@amnyar',
    title: 'امن‌یار | هاستینگ، طراحی سایت و خدمات شبکه',
    description: 'هاست لینوکس، طراحی وب‌سایت، سرور اختصاصی و خدمات شبکه با پشتیبانی حرفه‌ای.',
    images: ['/assets/images/og/og.jpg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = { themeColor: '#0b1220' }

const amnyarFont = localFont({
  src: [{ path: './fonts/iransans.ttf', weight: '400', style: 'normal' }],
  variable: '--font-amnyar',
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={amnyarFont.variable}>
      <body className="font-sans">
        <Header />
        <TopTicker />
        {children}
        <Footer />
        <CursorTrail />
        <ScrollTop />
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'امن‌یار',
          url: 'https://www.amnyar.com',
          logo: 'https://www.amnyar.com/assets/images/logo/logo.png',
          sameAs: ['https://www.instagram.com','https://www.linkedin.com','https://twitter.com'],
          contactPoint: [{ '@type': 'ContactPoint', telephone: '+983134617093', contactType: 'customer service', areaServed: 'IR', availableLanguage: ['fa','en'] }]
        })}</Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'امن‌یار',
          url: 'https://www.amnyar.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.amnyar.com/search?q={query}',
            'query-input': 'required name=query'
          }
        })}</Script>
      </body>
    </html>
  )
}
