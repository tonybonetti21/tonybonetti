'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { trackClick } from '@/lib/analytics'

const badges = ['Photo / Vidéo', 'UGC', 'Destinations', 'Guides']

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 md:px-14 lg:px-20 xl:px-28 max-w-screen-xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl glass-card border border-[var(--card-border)] rounded-[var(--radius-card)] p-10"
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent-text)' }}>
          Collaborations
        </p>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Travaillons ensemble
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', maxWidth: '38ch' }}>
          Marques outdoor, offices de tourisme, hébergements — contenus photo & vidéo premium authentiques.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map(b => (
            <span key={b} className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
              {b}
            </span>
          ))}
        </div>

        <a
          href="mailto:contact@tonybonetti.fr"
          onClick={() => trackClick('click_contact')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[var(--radius-btn)] text-sm font-semibold transition-colors duration-200"
          style={{ background: 'var(--btn-primary)', color: 'var(--text-primary)' }}
        >
          <Mail size={16} />
          Envoyer un message
        </a>
      </motion.div>
    </section>
  )
}
