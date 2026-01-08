'use client'

import { motion } from 'framer-motion'

const clients = [
  'SPP',
  'MISO',
  'PJM',
  'NYISO',
  'ISO-NE',
  'ERCOT',
]

export function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm uppercase tracking-wider mb-8"
        >
          Trusted by ISOs & Grid Operators
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <span className="text-2xl md:text-3xl font-heading font-bold text-slate-300 group-hover:text-accent-teal transition-colors duration-300">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
