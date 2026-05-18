'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { guides } from '@/data/guides'
import { trackClick } from '@/lib/analytics'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function GuidesSection() {
  return (
    <section id="guides" className="px-6 py-12 md:px-14 lg:px-20 xl:px-28 max-w-screen-xl mx-auto w-full">
      <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--accent-text)' }}>
        Guides & roadtrips
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {guides.map(guide => {
          const isAvailable = guide.status === 'available'

          const card = (
            <motion.div
              key={guide.id}
              variants={fadeInUp}
              className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--card-border)] group"
              style={{ minHeight: 220 }}
            >
              <div className="absolute inset-0">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.42)' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(13,10,5,0.88) 0%, transparent 55%)'
              }} />

              <div className="absolute top-3 right-3">
                {isAvailable ? (
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
                    Disponible
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,245,220,0.08)', color: 'rgba(255,245,220,0.4)' }}>
                    Bientôt
                  </span>
                )}
              </div>

              <div className="relative z-10 p-5 pt-16">
                <p className="text-xs mb-1" style={{ color: 'var(--accent-text)' }}>{guide.region}</p>
                <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{guide.title}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{guide.description}</p>
              </div>
            </motion.div>
          )

          return isAvailable ? (
            <a key={guide.id} href={`/guides/${guide.id}`} onClick={() => trackClick(guide.trackingId)}>{card}</a>
          ) : (
            <div key={guide.id}>{card}</div>
          )
        })}
      </motion.div>

      <div className="mt-8 text-center">
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
          Tu veux être prévenu·e à la sortie ?
        </p>
        <a
          href="https://newsletter.tonybonetti.fr"
          target="_blank" rel="noopener noreferrer"
          onClick={() => trackClick('click_newsletter')}
          className="inline-block px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
          style={{ color: 'var(--text-primary)' }}
        >
          Rejoindre la newsletter
        </a>
      </div>
    </section>
  )
}
