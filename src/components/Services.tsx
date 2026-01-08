'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Interconnection Studies',
    description: 'Steady-state, dynamic stability, and short-circuit analyses across SPP, MISO, PJM, NYISO, and ISO-NE.',
    image: '/images/substation.jpg',
    href: '/services#interconnection',
  },
  {
    title: 'EMT & PSCAD Studies',
    description: 'IBR-focused stability studies, weak-grid analysis, and vendor model validation for offshore wind.',
    image: '/images/wind-offshore.jpg',
    href: '/services#emt',
  },
  {
    title: 'HVDC/FACTS Analysis',
    description: 'Technical review and QA for LCC & VSC HVDC projects, harmonic filtering, and insulation coordination.',
    image: '/images/powerlines-sunset.jpg',
    href: '/services#hvdc',
  },
  {
    title: 'NERC Compliance',
    description: 'MOD/PRC compliance support including model validation, testing, and audit-ready documentation.',
    image: '/images/engineering-work.jpg',
    href: '/services#compliance',
  },
  {
    title: 'AI & Automation',
    description: 'Custom Python workflows for PSSE, TARA, and PSCAD with machine learning for predictive analytics.',
    image: '/images/data-center.jpg',
    href: '/services#ai',
  },
  {
    title: 'Transmission Planning',
    description: 'Load flow, voltage stability, production cost modeling using PSS®E, TARA, and PROMOD.',
    image: '/images/solar-farm.jpg',
    href: '/services#planning',
  },
]

export function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Areas of Focus
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide specialized engineering and consulting services for transmission owners, ISOs, RTOs, and renewable energy developers.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2 group-hover:text-accent-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent-teal font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
