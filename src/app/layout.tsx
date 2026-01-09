import type { Metadata } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gridopt.io'),
  title: {
    default: 'GridOPT | Power Systems Consulting & AI Solutions',
    template: '%s | GridOPT',
  },
  description: 'Expert power systems consulting for interconnection studies, EMT/PSCAD analysis, and AI-driven grid solutions. Serving ISOs, utilities, and renewable developers.',
  keywords: ['power systems consulting', 'interconnection studies', 'EMT analysis', 'PSCAD modeling', 'HVDC', 'FACTS', 'NERC compliance', 'renewable energy integration', 'grid modernization', 'power flow analysis', 'stability studies', 'transmission planning'],
  authors: [{ name: 'GridOPT LLC' }],
  creator: 'GridOPT LLC',
  publisher: 'GridOPT LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gridopt.io',
    siteName: 'GridOPT',
    title: 'GridOPT | Power Systems Consulting & AI Solutions',
    description: 'Expert interconnection studies, EMT/PSCAD analysis, and AI-driven automation for modern power systems.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GridOPT - Power Systems Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GridOPT | Power Systems Consulting',
    description: 'Expert interconnection studies and AI-driven grid solutions.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    // Add these after setting up Google Search Console & Bing Webmaster Tools
    // google: 'your-google-verification-code',
    // other: { 'msvalidate.01': 'your-bing-verification-code' },
  },
}

// JSON-LD Structured Data for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GridOPT LLC',
  description: 'Expert power systems consulting for interconnection studies, EMT/PSCAD analysis, and AI-driven grid solutions.',
  url: 'https://gridopt.io',
  logo: 'https://gridopt.io/images/logo.png',
  email: 'info@gridopt.io',
  areaServed: 'North America',
  serviceType: [
    'Power Systems Consulting',
    'Interconnection Studies',
    'EMT/PSCAD Analysis',
    'HVDC & FACTS Studies',
    'NERC Compliance',
    'Grid Modernization',
  ],
  knowsAbout: [
    'Power Systems Engineering',
    'Renewable Energy Integration',
    'Transmission Planning',
    'Grid Stability Analysis',
    'NERC Standards',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
