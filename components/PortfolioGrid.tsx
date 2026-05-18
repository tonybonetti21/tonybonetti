'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { photos } from '@/data/portfolio'

const tileVariant: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.04 } },
}

export default function PortfolioGrid() {
  return (
    <section className="py-12">
      <div className="px-6 md:px-14 lg:px-20 xl:px-28 max-w-screen-xl mx-auto w-full mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>
          Portfolio
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
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
              className="object-cover transition-all duration-300 group-hover:brightness-100 group-hover:scale-[1.04]"
              style={{ filter: 'brightness(0.78)' }}
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 17vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
