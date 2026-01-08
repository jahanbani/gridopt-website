import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ServicesContent } from './ServicesContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive power systems consulting services including interconnection studies, EMT/PSCAD analysis, HVDC/FACTS, NERC compliance, and AI automation.',
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
