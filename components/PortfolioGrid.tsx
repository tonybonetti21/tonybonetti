'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { photos } from '@/data/portfolio'

const tileVariant: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
}

export default function PortfolioGrid() {
  return (
    <section className="py-10">
      <div className="px-5 max-w-lg mx-auto w-full mb-5">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>
          Portfolio
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-3"
        style={{ gap: '3px' }}
      >
        {photos.map(photo => (
          <motion.div
            key={photo.id}
            variants={tileVariant}
            className="relative overflow-hidden group"
            style={{ aspectRatio: '1 / 1' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-200 group-hover:brightness-100 group-hover:scale-[1.03]"
              style={{ filter: 'brightness(0.82)' }}
              sizes="(max-width: 640px) 33vw, 180px"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
