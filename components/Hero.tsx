'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { Camera, Video, Play, BookOpen } from 'lucide-react'
import { trackClick } from '@/lib/analytics'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const socialLinks = [
  { icon: Camera, href: 'https://instagram.com/tonybonetti', trackId: 'click_instagram', label: 'Instagram' },
  { icon: Video, href: 'https://tiktok.com/@tonybonetti', trackId: 'click_tiktok', label: 'TikTok' },
  { icon: Play, href: 'https://youtube.com/@tonybonetti', trackId: 'click_youtube', label: 'YouTube' },
  { icon: BookOpen, href: '/blog', trackId: 'click_blog', label: 'Blog' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-10 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.38)' }}
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback image (shown when no video) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-fallback.jpg"
          alt="Paysage outdoor Jura"
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.38)' }}
          priority
        />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,18,9,0.88) 0%, transparent 60%)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-5 max-w-lg mx-auto w-full">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-4">

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase glass-card border border-[var(--card-border)]"
              style={{ color: 'var(--accent-text)' }}
            >
              Outdoor · Photo · Suisse
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-white leading-tight"
            style={{ fontSize: 'clamp(36px, 8vw, 56px)', fontWeight: 600 }}
          >
            Tony Bonetti
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Randos, roadtrips et paysages qui méritent le détour.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
            <a
              href="#guides"
              className="px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold text-white transition-colors duration-200"
              style={{ background: 'var(--btn-primary)' }}
            >
              Mes guides
            </a>
            <a
              href="https://instagram.com/tonybonetti"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('click_instagram')}
              className="px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold text-white glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold text-white glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
            >
              Me contacter
            </a>
          </motion.div>

          {/* Social icons row */}
          <motion.div variants={fadeInUp} className="flex gap-3 pt-1">
            {socialLinks.map(({ icon: Icon, href, trackId, label }) => (
              <a
                key={trackId}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                onClick={() => trackClick(trackId)}
                className="w-9 h-9 flex items-center justify-center rounded-full glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
