import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Services } from '@/components/Services'
import { Clients } from '@/components/Clients'
import { WhyUs } from '@/components/WhyUs'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Clients />
      <WhyUs />
      <CTA />
    </>
  )
}
