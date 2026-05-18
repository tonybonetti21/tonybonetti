'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { Camera, Video, Play, BookOpen } from 'lucide-react'
import { trackClick } from '@/lib/analytics'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const socialLinks = [
  { icon: Camera, href: 'https://instagram.com/tonybonetti', trackId: 'click_instagram', label: 'Instagram' },
  { icon: Video,  href: 'https://tiktok.com/@tonybonetti',   trackId: 'click_tiktok',    label: 'TikTok' },
  { icon: Play,   href: 'https://youtube.com/@tonybonetti',  trackId: 'click_youtube',   label: 'YouTube' },
  { icon: BookOpen, href: '/blog',                           trackId: 'click_blog',      label: 'Blog' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Video background */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.35)' }}
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-fallback.jpg"
          alt="Paysage outdoor"
          fill className="object-cover"
          style={{ filter: 'brightness(0.35)' }}
          priority
        />
      </div>

      {/* Gradient — plus fort en bas, léger vignettage */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(13,10,5,0.92) 0%, rgba(13,10,5,0.3) 50%, transparent 100%)'
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,10,5,0.45) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-12 md:px-14 lg:px-20 xl:px-28 max-w-screen-xl mx-auto">
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          className="flex flex-col gap-5 max-w-xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase glass-card border border-[var(--card-border)]"
              style={{ color: 'var(--accent-text)' }}
            >
              Outdoor · Photo · Suisse
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            style={{ fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 700, lineHeight: 1.05, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Tony Bonetti
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed max-w-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            Randos, roadtrips et paysages qui méritent le détour.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
            <a
              href="#guides"
              className="px-6 py-3 rounded-[var(--radius-btn)] text-sm font-semibold transition-colors duration-200"
              style={{ background: 'var(--btn-primary)', color: 'var(--text-primary)' }}
            >
              Mes guides
            </a>
            <a
              href="https://instagram.com/tonybonetti"
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackClick('click_instagram')}
              className="px-6 py-3 rounded-[var(--radius-btn)] text-sm font-semibold glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
              style={{ color: 'var(--text-primary)' }}
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-[var(--radius-btn)] text-sm font-semibold glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
              style={{ color: 'var(--text-primary)' }}
            >
              Me contacter
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeInUp} className="flex gap-3 pt-1">
            {socialLinks.map(({ icon: Icon, href, trackId, label }) => (
              <a
                key={trackId}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                onClick={() => trackClick(trackId)}
                className="w-10 h-10 flex items-center justify-center rounded-full glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-10 bg-current opacity-40" />
      </motion.div>
    </section>
  )
}
