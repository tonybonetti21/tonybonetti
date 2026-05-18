'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { trackClick } from '@/lib/analytics'

const badges = ['Photo / Vidéo', 'UGC', 'Destinations', 'Guides']

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-14 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[480px] glass-card border border-[var(--card-border)] rounded-[var(--radius-card)] p-8 text-center"
      >
        <h2 className="text-xl font-semibold text-white mb-3">Collaborations</h2>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          Marques outdoor, offices de tourisme, hébergements — contenus photo & vidéo premium.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {badges.map(b => (
            <span
              key={b}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
            >
              {b}
            </span>
          ))}
        </div>

        <a
          href="mailto:contact@tonybonetti.fr"
          onClick={() => trackClick('click_contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-btn)] text-sm font-semibold text-white transition-colors duration-200"
          style={{ background: 'var(--btn-primary)' }}
        >
          <Mail size={16} />
          Envoyer un message
        </a>
      </motion.div>
    </section>
  )
}
