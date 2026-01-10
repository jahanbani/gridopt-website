'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Briefcase, Clock, Send, CheckCircle, AlertCircle, Upload } from 'lucide-react'

const applicationInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'careers@gridopt.io',
    href: 'mailto:careers@gridopt.io',
  },
  {
    icon: Briefcase,
    title: 'Open Positions',
    value: 'Senior Engineer & Intern',
    href: null,
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '5-7 business days',
    href: null,
  },
]

export function ApplyContent() {
  const searchParams = useSearchParams()
  const positionParam = searchParams?.get('position')

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [selectedPosition, setSelectedPosition] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)

  useEffect(() => {
    if (positionParam) {
      if (positionParam.toLowerCase().includes('senior')) {
        setSelectedPosition('Senior Power Systems Engineer')
      } else if (positionParam.toLowerCase().includes('intern')) {
        setSelectedPosition('Power Systems Engineering Intern')
      }
    }
  }, [positionParam])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0]
    if (file) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum size is 5MB.`)
        e.target.value = ''
        return
      }
      if (type === 'resume') {
        setResumeFile(file)
      } else {
        setCoverLetterFile(file)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add Web3Forms access key and settings for CAREERS
    formData.append('access_key', 'd7dd63a0-35ea-4045-aba3-c1cce9217882')
    formData.append('subject', `Job Application: ${formData.get('position')}`)
    formData.append('from_name', 'GridOPT Careers Portal')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setFormState('success')
        form.reset()
        setResumeFile(null)
        setCoverLetterFile(null)
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Application Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Apply to GridOPT
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We&apos;re excited that you&apos;re interested in joining our team! Please complete the application form and attach your resume. We review all applications carefully and will reach out to qualified candidates within one week.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-10">
              {applicationInfo.map((info, index) => (
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

            <div className="bg-slate-50 border-l-4 border-accent-green rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-3">
                What to Expect
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                After submitting your application, qualified candidates will be contacted for an initial phone screening, followed by technical interviews and a case study exercise. The entire process typically takes 2-3 weeks.
              </p>
            </div>
          </motion.div>

          {/* Application Form */}
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
                  Application Submitted!
                </h3>
                <p className="text-slate-600">
                  Thank you for applying. We&apos;ll review your application and get back to you within 5-7 business days.
                </p>
              </div>
            ) : formState === 'error' ? (
              <div className="bg-red-50 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  Oops! Something went wrong
                </h3>
                <p className="text-slate-600 mb-4">
                  Please try again or email us directly at careers@gridopt.io
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-accent-teal font-semibold hover:underline"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-8"
              >
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-6">
                  Application Form
                </h3>

                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Position Selection */}
                <div className="mb-6">
                  <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a position...</option>
                    <option value="Senior Power Systems Engineer">Senior Power Systems Engineer</option>
                    <option value="Power Systems Engineering Intern">Power Systems Engineering Intern</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                    Current Location (City, State/Country) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="e.g., Boston, MA"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="linkedin" className="block text-sm font-medium text-slate-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                  />
                </div>

                {/* Education & Experience */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-slate-700 mb-2">
                      Highest Degree *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select degree...</option>
                      <option value="Bachelor's">Bachelor&apos;s Degree</option>
                      <option value="Master's">Master&apos;s Degree</option>
                      <option value="PhD">PhD</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="major" className="block text-sm font-medium text-slate-700 mb-2">
                    Major / Field of Study *
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    required
                    placeholder="e.g., Electrical Engineering - Power Systems"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all"
                  />
                </div>

                {/* File Uploads */}
                <div className="mb-6">
                  <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-2">
                    Resume / CV * <span className="text-slate-500 text-xs">(PDF, DOC, DOCX - Max 5MB)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'resume')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-accent file:text-primary-dark file:font-semibold hover:file:shadow-md cursor-pointer"
                    />
                    {resumeFile && (
                      <p className="mt-2 text-sm text-slate-600 flex items-center gap-2">
                        <Upload size={16} className="text-accent-green" />
                        {resumeFile.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-2">
                    Cover Letter <span className="text-slate-500 text-xs">(PDF, DOC, DOCX - Max 5MB - Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="coverLetter"
                      name="coverLetter"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'coverLetter')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-accent file:text-primary-dark file:font-semibold hover:file:shadow-md cursor-pointer"
                    />
                    {coverLetterFile && (
                      <p className="mt-2 text-sm text-slate-600 flex items-center gap-2">
                        <Upload size={16} className="text-accent-green" />
                        {coverLetterFile.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Questions */}
                <div className="mb-6">
                  <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-2">
                    When are you available to start? *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="Immediately">Immediately</option>
                    <option value="2 weeks">2 weeks notice</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Why are you interested in this position? * <span className="text-slate-500 text-xs">(Cover Letter)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your background, relevant experience, and what excites you about this opportunity at GridOPT..."
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs text-slate-500 text-center">
                  By submitting this application, you consent to GridOPT storing and processing your personal information for recruitment purposes.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
