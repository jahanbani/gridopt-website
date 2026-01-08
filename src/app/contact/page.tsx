import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with GridOPT for power systems consulting, interconnection studies, and AI-driven solutions.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss your project requirements and how we can help."
        backgroundImage="/images/electrical-grid.jpg"
      />
      <ContactContent />
    </>
  )
}
