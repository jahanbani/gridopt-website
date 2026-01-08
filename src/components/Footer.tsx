import Link from 'next/link'
import { Zap, Linkedin, Mail } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#interconnection', label: 'Interconnection Studies' },
  { href: '/services#emt', label: 'EMT/PSCAD' },
  { href: '/services#hvdc', label: 'HVDC/FACTS' },
  { href: '/services#compliance', label: 'NERC Compliance' },
  { href: '/services#ai', label: 'AI & Automation' },
]

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-dark" />
              </div>
              <span className="font-heading font-bold text-xl">GridOPT</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Expert power systems consulting combining deep engineering expertise with AI-driven automation for modern grid challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-green text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-green text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@gridopt.io"
                  className="text-white/60 hover:text-accent-green text-sm transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@gridopt.io
                </a>
              </li>
              <li>
                <a
                  href="https://gridopt.io"
                  className="text-white/60 hover:text-accent-green text-sm transition-colors"
                >
                  gridopt.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} GridOPT LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-gradient-accent hover:text-primary-dark transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
