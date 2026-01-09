import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ServicesContent } from './ServicesContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Power Systems Consulting Services',
  description: 'Expert interconnection studies, EMT/PSCAD modeling, HVDC/FACTS analysis, NERC compliance support, and AI-driven grid automation. Serving utilities, ISOs, and renewable developers.',
  keywords: ['interconnection studies', 'EMT analysis', 'PSCAD modeling', 'HVDC studies', 'FACTS devices', 'NERC compliance', 'power systems consulting', 'grid integration'],
  openGraph: {
    title: 'Power Systems Consulting Services | GridOPT',
    description: 'Expert interconnection studies, EMT/PSCAD modeling, and AI-driven grid solutions.',
    images: ['/images/wind-offshore.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive power systems consulting from interconnection studies to AI-driven automation."
        backgroundImage="/images/wind-offshore.jpg"
      />
      <ServicesContent />
      <CTA />
    </>
  )
}
