'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'interconnection',
    title: 'Interconnection Studies',
    subtitle: 'Comprehensive Generator Interconnection (GI) Studies',
    description: 'We perform complete system impact studies for renewable and conventional generation projects seeking interconnection to the bulk power system.',
    image: '/images/substation.jpg',
    features: [
      'Steady-state power flow analysis',
      'Short-circuit / fault current studies',
      'Dynamic stability (transient & small-signal)',
      'Affected system studies coordination',
      'Study report preparation & review',
    ],
    isos: ['SPP', 'MISO', 'PJM', 'NYISO', 'ISO-NE', 'ERCOT'],
  },
  {
    id: 'emt',
    title: 'EMT & PSCAD Studies',
    subtitle: 'Electromagnetic Transient Analysis for IBR Integration',
    description: 'Specialized EMT studies for inverter-based resources (IBR) including offshore wind, solar, and battery storage in weak grid conditions.',
    image: '/images/wind-offshore.jpg',
    features: [
      'IBR-focused EMT stability studies',
      'Weak grid / low SCR analysis',
      'Control interaction studies',
      'Vendor model validation & QA',
      'Harmonic analysis & filtering',
    ],
    tools: ['PSCAD', 'EMTP-RV', 'PowerFactory EMT'],
  },
  {
    id: 'hvdc',
    title: 'HVDC/FACTS Analysis',
    subtitle: 'High Voltage DC and Flexible AC Transmission Systems',
    description: 'Technical review and quality assurance for HVDC projects including LCC and VSC technologies, as well as FACTS devices for grid stability.',
    image: '/images/powerlines-sunset.jpg',
    features: [
      'LCC & VSC HVDC system studies',
      'Harmonic filtering design review',
      'Insulation coordination studies',
      'Control system analysis',
      'Converter transformer specifications',
    ],
    experience: 'Multiple 500+ MW HVDC projects',
  },
  {
    id: 'compliance',
    title: 'NERC Compliance',
    subtitle: 'MOD & PRC Standards Compliance Support',
    description: 'Complete support for NERC reliability standards compliance including model validation, testing, and audit preparation.',
    image: '/images/engineering-work.jpg',
    features: [
      'MOD-025, MOD-026, MOD-027 compliance',
      'PRC-019, PRC-024, PRC-025 support',
      'Generator model validation',
      'On-site testing coordination',
      'Audit-ready documentation',
    ],
    standards: ['MOD', 'PRC', 'FAC', 'TPL'],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Machine Learning and Custom Software Solutions',
    description: 'Leverage AI and automation to accelerate study timelines, improve accuracy, and unlock insights from your power systems data.',
    image: '/images/data-center.jpg',
    features: [
      'Custom Python automation for PSSE/TARA/PSCAD',
      'Machine learning for predictive analytics',
      'Automated report generation',
      'Data pipeline development',
      'Custom dashboard & visualization tools',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'PSS®E API', 'PSCAD Automation'],
  },
  {
    id: 'planning',
    title: 'Transmission Planning',
    subtitle: 'System Planning and Production Cost Modeling',
    description: 'Comprehensive transmission planning studies including load flow analysis, voltage stability, and production cost modeling.',
    image: '/images/solar-farm.jpg',
    features: [
      'Load flow & contingency analysis',
      'Voltage stability studies',
      'Production cost modeling',
      'Transmission expansion planning',
      'Renewable integration studies',
    ],
    tools: ['PSS®E', 'TARA', 'PROMOD', 'PLEXOS'],
  },
]

export function ServicesContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 items-center py-16 ${
              index !== services.length - 1 ? 'border-b border-slate-200' : ''
            }`}
          >
            {/* Image - Alternate sides */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
                {service.subtitle}
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
                {service.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.isos?.map((iso) => (
                  <span
                    key={iso}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {iso}
                  </span>
                ))}
                {service.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="bg-primary-dark/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
                {service.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {service.standards?.map((std) => (
                  <span
                    key={std}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
