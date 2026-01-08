'use client'

import { motion } from 'framer-motion'
import { Award, FileText, BookOpen, TrendingUp } from 'lucide-react'

const publications = [
  {
    type: 'IEEE Prize Paper',
    title: 'Advanced EMT Modeling for IBR Integration in Weak Grids',
    description: 'Award-winning research on electromagnetic transient modeling techniques for inverter-based resources in low short-circuit ratio systems.',
    journal: 'IEEE Transactions on Power Systems',
    highlight: true,
  },
  {
    type: 'Conference Paper',
    title: 'Machine Learning Applications in Transmission Planning',
    description: 'Novel approaches using neural networks to optimize interconnection study workflows and improve accuracy.',
    journal: 'IEEE PES General Meeting',
    highlight: false,
  },
  {
    type: 'Technical Report',
    title: 'Offshore Wind Integration Challenges in ISO-NE',
    description: 'Comprehensive analysis of technical requirements for large-scale offshore wind interconnection in New England.',
    journal: 'Industry White Paper',
    highlight: false,
  },
]

const researchAreas = [
  {
    icon: TrendingUp,
    title: 'Grid Stability Analysis',
    description: 'Advanced techniques for analyzing stability in high-IBR penetration scenarios.',
  },
  {
    icon: BookOpen,
    title: 'AI/ML in Power Systems',
    description: 'Machine learning applications for predictive analytics and automation.',
  },
  {
    icon: FileText,
    title: 'Renewable Integration',
    description: 'Technical solutions for integrating wind, solar, and storage at scale.',
  },
]

export function InsightsContent() {
  return (
    <>
      {/* Publications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Publications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Award-Winning Research
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team has contributed to the advancement of power systems engineering through peer-reviewed research and industry publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl ${
                  pub.highlight
                    ? 'bg-gradient-dark text-white'
                    : 'bg-slate-50 hover:bg-slate-100 transition-colors'
                }`}
              >
                {pub.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-accent text-primary-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Award size={14} />
                    Prize Paper
                  </div>
                )}
                <span className={`text-sm font-semibold ${pub.highlight ? 'text-accent-green' : 'text-accent-teal'}`}>
                  {pub.type}
                </span>
                <h3 className={`font-heading font-semibold text-lg mt-2 mb-3 ${pub.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {pub.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${pub.highlight ? 'text-white/70' : 'text-slate-600'}`}>
                  {pub.description}
                </p>
                <span className={`text-xs font-medium ${pub.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                  {pub.journal}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Research Focus
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Areas of Ongoing Research
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <area.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-slate-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-8">
              Subscribe to receive our latest insights, research updates, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-accent text-primary-dark px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-green/25 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
