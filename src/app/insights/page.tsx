import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { InsightsContent } from './InsightsContent'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Insights & Publications',
  description: 'Research publications, industry insights, and technical articles from GridOPT\'s power systems experts.',
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
