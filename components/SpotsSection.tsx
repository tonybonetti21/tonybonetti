'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { spots } from '@/data/spots'
import { trackClick } from '@/lib/analytics'

export default function SpotsSection() {
  return (
    <section className="py-10">
      <div className="px-5 max-w-lg mx-auto w-full mb-5">
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>
          Spots favoris
        </p>
      </div>

      <div
        className="flex gap-3 px-5 overflow-x-auto hide-scrollbar pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {spots.map((spot, i) => (
          <motion.div
            key={spot.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            onClick={() => trackClick('click_spot')}
            className="flex-shrink-0 flex items-center gap-3 p-3 rounded-[var(--radius-card)] glass-card border border-[var(--card-border)] cursor-pointer hover:border-[var(--accent)] transition-colors duration-200"
            style={{ scrollSnapAlign: 'start', minWidth: 210 }}
          >
            <div className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 64, height: 52 }}>
              <Image
                src={spot.image}
                alt={spot.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{spot.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                  {spot.region}
                </span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full ml-1 flex-shrink-0"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
                >
                  {spot.country}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
