import { Metadata } from 'next'
import { PageHeader } from '@/components'
import { CareersContent } from './CareersContent'

export const metadata: Metadata = {
  title: 'Careers | GridOPT - Join Our Team',
  description: 'Join GridOPT and work on cutting-edge power systems projects. We\'re hiring a Senior Power Systems Engineer and Power Systems Engineering Intern.',
}

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        subtitle="Help us build the future of power systems engineering"
      />
      <CareersContent />
    </>
  )
}
