'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Camera, Video, Play, BookOpen, Mail } from 'lucide-react'
import { links } from '@/data/links'
import { trackClick } from '@/lib/analytics'

const iconMap: Record<string, React.ElementType> = {
  Instagram: Camera,
  Youtube: Play,
  Video,
  BookOpen,
  Camera,
  Mail,
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function LinkCards() {
  const activeLinks = links.filter(l => l.active).sort((a, b) => a.priority - b.priority)

  return (
    <section className="px-6 py-12 md:px-14 lg:px-20 xl:px-28 max-w-screen-xl mx-auto w-full">
      <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--accent-text)' }}>
        Retrouve-moi sur
      </p>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {activeLinks.map(link => {
          const Icon = iconMap[link.icon] ?? Mail
          const isExternal = link.url.startsWith('http')
          return (
            <motion.li key={link.id} variants={fadeInUp}>
              <motion.a
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => trackClick(link.trackingId)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--card-border)] glass-card"
              >
                <span
                  className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-icon)] flex-shrink-0"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <Icon size={18} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{link.label}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{link.description}</p>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </motion.a>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
