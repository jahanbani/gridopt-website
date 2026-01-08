'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FileCheck, Cpu, Globe, Award, Zap } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    title: 'PhD-Level Expertise',
    description: 'Our team holds advanced degrees in electrical engineering with specializations in power systems.',
  },
  {
    icon: FileCheck,
    title: 'Licensed Professionals',
    description: 'Professional Engineers (PE) with certifications and ongoing industry training.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Deep expertise in machine learning, Python automation, and custom software development.',
  },
  {
    icon: Globe,
    title: 'Multi-ISO Experience',
    description: 'Extensive experience working with SPP, MISO, PJM, NYISO, ISO-NE, and ERCOT.',
  },
]

const expertise = [
  'Generator Interconnection Studies (GI)',
  'EMT/PSCAD Modeling & Analysis',
  'HVDC & FACTS Systems',
  'MOD/PRC NERC Compliance',
  'Offshore Wind Integration',
  'Battery Energy Storage Systems',
  'Python Automation (PSSE, TARA, PSCAD)',
  'Machine Learning for Power Systems',
  'Production Cost Modeling',
  'Voltage Stability Analysis',
]

const achievements = [
  {
    icon: Award,
    title: 'IEEE Prize Paper Award',
    description: 'Published award-winning research in IEEE Transactions on Power Systems.',
  },
  {
    icon: Zap,
    title: '15+ GW Assessed',
    description: 'Successfully completed interconnection studies for over 15 GW of renewable generation.',
  },
]

export function AboutContent() {
  return (
    <>
      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Accelerating the Clean Energy Transition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              GridOPT was founded to bridge the gap between traditional power systems engineering and modern AI-driven solutions. We help ISOs, utilities, and renewable developers navigate the complexities of grid integration by combining decades of industry experience with cutting-edge automation.
            </motion.p>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
                Technical Expertise
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                30+ Years Combined Experience
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our team has worked with major utilities, ISOs, and renewable developers across North America. We bring hands-on experience from leading organizations in the power industry.
              </p>

              {/* Achievement Cards */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900">{achievement.title}</h3>
                      <p className="text-slate-600 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-dark rounded-3xl p-8 text-white"
            >
              <h3 className="font-heading font-semibold text-xl mb-6">Areas of Expertise</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <span className="w-2 h-2 bg-accent-green rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
