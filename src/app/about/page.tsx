import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { AboutContent } from './AboutContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About Us - Power Systems Experts',
  description: 'GridOPT brings PhD-level power systems expertise with 40+ combined years in grid modeling, PSSE/PSCAD analysis, and renewable integration. Trusted by ISOs and utilities nationwide.',
  keywords: ['power systems experts', 'grid consulting team', 'PhD engineers', 'PSSE expertise', 'utility consulting', 'ISO consulting'],
  openGraph: {
    title: 'About GridOPT - Power Systems Experts',
    description: 'PhD-level expertise combined with cutting-edge AI for modern grid challenges.',
    images: ['/images/substation.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="PhD-level expertise combined with cutting-edge AI for modern grid challenges."
        backgroundImage="/images/substation.jpg"
      />
      <AboutContent />
      <CTA />
    </>
  )
}
