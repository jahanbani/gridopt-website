'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, GraduationCap, Zap } from 'lucide-react'

const whyJoinFeatures = [
  {
    icon: Zap,
    title: 'Innovative Work',
    description: 'Tackle complex interconnection studies, EMT modeling, and develop AI-driven automation tools that push the boundaries of power systems engineering.',
  },
  {
    icon: GraduationCap,
    title: 'Learn & Grow',
    description: 'Work with industry experts who hold doctoral degrees and professional engineering licenses. Gain exposure to multiple ISOs, offshore wind, and HVDC projects.',
  },
  {
    icon: Briefcase,
    title: 'Flexible Environment',
    description: 'We value work-life balance and offer flexible work arrangements while maintaining a collaborative team culture focused on delivering excellence.',
  },
]

const jobs = [
  {
    id: 'senior',
    title: 'Senior Power Systems Engineer',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    compensation: '$70-110/hour',
    description: 'We\'re seeking an experienced Senior Power Systems Engineer to join our growing team. You\'ll lead complex interconnection studies, EMT/PSCAD modeling projects, and help develop automation tools that accelerate our study workflows.',
    responsibilities: [
      'Lead and perform power system studies including steady-state analysis, dynamic stability, short-circuit analysis, and EMT simulations',
      'Conduct interconnection studies for renewable energy projects (wind, solar, BESS) across SPP, MISO, PJM, NYISO, and ISO-NE',
      'Develop and validate PSS®E, PSCAD, and TARA models for transmission systems and inverter-based resources',
      'Perform HVDC and FACTS analysis including harmonic studies, TRV/TOV analysis, and reactive power compensation strategies',
      'Develop Python-based automation tools to streamline study workflows',
    ],
    qualifications: [
      'Master\'s degree or PhD in Electrical Engineering (Power Systems)',
      '5+ years of experience in power systems analysis',
      'Expert proficiency with PSS®E, PSCAD, or equivalent tools',
      'Strong understanding of transmission planning and interconnection studies',
      'Experience with renewable energy integration and IBR',
    ],
  },
  {
    id: 'intern',
    title: 'Power Systems Engineering Intern',
    type: 'Internship',
    location: '3-6 Months',
    compensation: '$20-40/hour',
    description: 'GridOPT is offering an exciting internship opportunity for motivated students pursuing degrees in Electrical Engineering. Gain hands-on experience with real-world power systems projects and work alongside experienced engineers.',
    responsibilities: [
      'Assist in performing power system studies including load flow, short-circuit, and stability analysis',
      'Support EMT/PSCAD simulation development for wind and solar projects',
      'Conduct data analysis related to transmission systems and distributed generation',
      'Help develop Python scripts for data processing and automation',
      'Contribute to engineering reports documenting study results',
    ],
    qualifications: [
      'Currently enrolled in Bachelor\'s or Master\'s degree program in Electrical Engineering with focus on power systems',
      'Completed coursework in power systems analysis or related subjects',
      'Strong analytical and problem-solving skills',
      'Good communication and technical writing abilities',
      'Available for 3-6 month internship duration',
    ],
  },
]

export function CareersContent() {
  return (
    <>
      {/* Why Join GridOPT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Why GridOPT
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Work on Projects That Matter
            </h2>
            <p className="text-slate-600 text-lg">
              At GridOPT, you&apos;ll work alongside PhD-level engineers on cutting-edge grid challenges, combining traditional power systems expertise with AI and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyJoinFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-dark" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Open Positions
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Current Opportunities
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent-green"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-accent-green/10 text-accent-teal px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                      <span className="inline-block bg-accent-green/10 text-accent-teal px-3 py-1 rounded-full text-sm font-semibold">
                        {job.location}
                      </span>
                      <span className="inline-block bg-accent-green/10 text-accent-teal px-3 py-1 rounded-full text-sm font-semibold">
                        {job.compensation}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.slice(0, 5).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-accent-green mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Qualifications</h4>
                    <ul className="space-y-2">
                      {job.qualifications.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-accent-green mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-slate-200">
                  <Link
                    href={`/apply?position=${job.id}`}
                    className="inline-block bg-gradient-accent text-primary-dark px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-green/25 transition-all"
                  >
                    Apply Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-accent-green/20 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Application Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              How to Apply
            </h2>
            <p className="text-slate-300 text-lg">
              Ready to join our team? Here&apos;s how to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Send your resume and cover letter using the Apply Now button on the position listing.',
              },
              {
                step: '2',
                title: 'Initial Interview',
                description: 'Qualified candidates will be contacted for an initial phone or video interview.',
              },
              {
                step: '3',
                title: 'Technical Assessment',
                description: 'Complete a technical exercise or case study to demonstrate your skills.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-primary-dark">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
