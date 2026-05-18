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
  visible: { transition: { staggerChildren: 0.07 } },
}

export default function GuidesSection() {
  return (
    <section id="guides" className="px-5 py-10 max-w-lg mx-auto w-full">
      <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--accent-text)' }}>
        Guides & roadtrips
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col gap-4"
      >
        {guides.map(guide => {
          const isAvailable = guide.status === 'available'

          const card = (
            <motion.div
              key={guide.id}
              variants={fadeInUp}
              className="relative rounded-[var(--radius-card)] overflow-hidden border border-[var(--card-border)]"
              style={{ minHeight: 140 }}
            >
              <div className="absolute inset-0">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.45)' }}
                  sizes="(max-width: 640px) 100vw, 500px"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,18,9,0.82) 0%, transparent 55%)' }}
              />

              {/* Status badge */}
              <div className="absolute top-3 right-3">
                {isAvailable ? (
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
                  >
                    Disponible
                  </span>
                ) : (
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}
                  >
                    Bientôt
                  </span>
                )}
              </div>

              <div className="relative z-10 p-5 pt-14">
                <p className="text-xs mb-1" style={{ color: 'var(--accent-text)' }}>{guide.region}</p>
                <p className="text-base font-semibold text-white leading-snug">{guide.title}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{guide.description}</p>
              </div>
            </motion.div>
          )

          return isAvailable ? (
            <a key={guide.id} href={`/guides/${guide.id}`} onClick={() => trackClick(guide.trackingId)}>
              {card}
            </a>
          ) : (
            <div key={guide.id}>{card}</div>
          )
        })}
      </motion.div>

      <div className="mt-6 text-center">
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
          Tu veux être prévenu·e à la sortie ?
        </p>
        <a
          href="https://newsletter.tonybonetti.fr"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('click_newsletter')}
          className="inline-block px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold text-white glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
        >
          Rejoindre la newsletter
        </a>
      </div>
    </section>
  )
}
