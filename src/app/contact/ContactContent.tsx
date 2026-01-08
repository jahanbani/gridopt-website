'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@gridopt.io',
    href: 'mailto:info@gridopt.io',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: 'North America',
    href: null,
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

const services = [
  'Interconnection Studies',
  'EMT/PSCAD Analysis',
  'HVDC/FACTS',
  'NERC Compliance',
  'AI & Automation',
  'Transmission Planning',
  'Other',
]

export function ContactContent() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission - replace with actual form handler
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Whether you need interconnection study support, compliance assistance, or custom automation solutions, we&apos;re here to help. Reach out and let&apos;s explore how GridOPT can optimize your project.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{info.title}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-900 font-semibold hover:text-accent-teal transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {formState === 'success' ? (
              <div className="bg-accent-green/10 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  Message Sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-gradient-accent text-primary-dark px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-green/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formState === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
