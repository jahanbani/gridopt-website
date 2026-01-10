import { Metadata } from 'next'
import { PageHeader } from '@/components'
import { ApplyContent } from './ApplyContent'

export const metadata: Metadata = {
  title: 'Apply Now | GridOPT Careers',
  description: 'Submit your application to join GridOPT. We review all applications carefully and will reach out to qualified candidates within one week.',
}

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        title="Submit Your Application"
        subtitle="Join our team of expert power systems engineers"
      />
      <ApplyContent />
    </>
  )
}
