'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wind-offshore.jpg"
          alt="Offshore wind farm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your interconnection study, compliance requirements, or automation needs. Our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-accent text-primary-dark px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-accent-green/25 hover:-translate-y-1 transition-all"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
