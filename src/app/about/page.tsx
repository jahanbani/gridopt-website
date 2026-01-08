import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { AboutContent } from './AboutContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GridOPT - expert power systems consulting with PhD-level expertise and AI-driven solutions.',
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
