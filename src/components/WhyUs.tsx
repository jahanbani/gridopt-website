'use client'

import { motion } from 'framer-motion'
import { Brain, Award, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Leverage machine learning and automation to accelerate study timelines and improve accuracy.',
  },
  {
    icon: Award,
    title: 'IEEE Prize Paper Winners',
    description: 'Our team has published award-winning research in power systems and renewable integration.',
  },
  {
    icon: Clock,
    title: 'Rapid Turnaround',
    description: 'Automated workflows enable faster delivery without compromising on quality or accuracy.',
  },
  {
    icon: Users,
    title: 'PhD-Level Expertise',
    description: 'Engineers with advanced degrees and decades of experience in transmission planning.',
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Why GridOPT
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Engineering Excellence Meets Modern Technology
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We combine traditional power systems expertise with cutting-edge AI and automation. Our team brings decades of industry experience with major utilities and ISOs, now enhanced by custom software solutions.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
            
            {/* Additional decorative card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 bg-gradient-dark p-6 rounded-2xl text-white"
            >
              <h3 className="font-heading font-semibold mb-2">Ready to Accelerate Your Project?</h3>
              <p className="text-white/70 text-sm mb-4">
                Let us handle the technical complexity while you focus on your core business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-accent-green font-semibold text-sm hover:gap-3 transition-all"
              >
                Get Started →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
