'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHeader({ title, subtitle, backgroundImage = '/images/powerlines-sunset.jpg' }: PageHeaderProps) {
  return (
    <section className="relative py-32 pt-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Page header background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-dark/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-lg md:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
