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
  title: {
    default: 'GridOPT | Power Systems Consulting & AI Solutions',
    template: '%s | GridOPT',
  },
  description: 'Expert power systems consulting for interconnection studies, EMT/PSCAD analysis, and AI-driven grid solutions. Serving ISOs, utilities, and renewable developers.',
  keywords: ['power systems', 'interconnection studies', 'EMT', 'PSCAD', 'HVDC', 'NERC compliance', 'renewable energy', 'grid consulting'],
  authors: [{ name: 'GridOPT LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gridopt.io',
    siteName: 'GridOPT',
    title: 'GridOPT | Power Systems Consulting & AI Solutions',
    description: 'Expert interconnection studies, EMT/PSCAD analysis, and AI-driven automation for modern power systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GridOPT | Power Systems Consulting',
    description: 'Expert interconnection studies and AI-driven grid solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
