import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { InsightsContent } from './InsightsContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Insights & Research Publications',
  description: 'Technical publications on IBR integration, grid stability, HVDC systems, and power systems optimization. Peer-reviewed research from our engineering team.',
  keywords: ['power systems research', 'grid stability publications', 'IBR integration', 'HVDC research', 'renewable energy studies', 'technical papers'],
  openGraph: {
    title: 'Insights & Publications | GridOPT',
    description: 'Research publications and industry insights from our power systems experts.',
    images: ['/images/analytics-dashboard.jpg'],
  },
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        title="Insights & Publications"
        subtitle="Research, technical articles, and industry perspectives from our team."
        backgroundImage="/images/analytics-dashboard.jpg"
      />
      <InsightsContent />
      <CTA />
    </>
  )
}
