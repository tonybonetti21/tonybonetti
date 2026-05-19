'use client'
import Image from 'next/image'
import { ArrowDown, Camera, Video, Play } from 'lucide-react'
import { GlassButton } from './glass-button'
import { MotionReveal } from './motion-reveal'

const heroImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=88'

function smoothScroll(targetY: number, duration = 750) {
  const startY = window.scrollY
  const diff = targetY - startY
  let startTime: number | null = null

  function step(now: number) {
    if (!startTime) startTime = now
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // easeOutCubic — démarre immédiatement, décélère doucement
    const ease = 1 - (1 - progress) ** 3
    window.scrollTo(0, startY + diff * ease)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export function HeroSection() {
  function handleExplore(e: React.MouseEvent) {
    e.preventDefault()
    const target = document.getElementById('suite')
    if (target) smoothScroll(target.getBoundingClientRect().top + window.scrollY)
  }

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      {/* Vidéo hero */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105 pointer-events-none"
        style={{ filter: 'brightness(0.55)' }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src={heroImage}
          alt="Paysage de montagne"
          fill priority
          className="scale-105 object-cover pointer-events-none"
          sizes="100vw"
          style={{ filter: 'brightness(0.55)' }}
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(120deg,rgba(8,5,2,0.88),rgba(12,8,3,0.32) 42%,rgba(8,5,2,0.80))' }} />

      {/* Contenu centré */}
      <MotionReveal className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1
          className="text-balance font-semibold tracking-tight text-white drop-shadow-2xl"
          style={{ fontSize: 'clamp(52px, 10vw, 140px)', lineHeight: 0.95 }}
        >
          Tony Bonetti
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-8 sm:text-2xl"
          style={{ color: 'rgba(245,240,232,0.72)' }}>
          Découvre avec moi le Jura, les Alpes et la Suisse.
        </p>

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto">
          <GlassButton href="https://www.instagram.com/tonybonetti15" icon={<Camera size={18} />}>
            Instagram
          </GlassButton>
          <GlassButton href="https://www.tiktok.com/@tonybonetti" icon={<Video size={18} />}>
            TikTok
          </GlassButton>
          <GlassButton href="https://youtube.com/@tonybonetti" icon={<Play size={18} />}>
            YouTube
          </GlassButton>
        </div>
      </MotionReveal>

      {/* Bouton Explorer en bas */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <button
          onClick={handleExplore}
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-wide transition duration-500 border border-white/10 bg-black/20 text-white backdrop-blur-2xl hover:-translate-y-0.5 hover:border-[rgba(196,147,90,0.5)] hover:bg-white/10 cursor-pointer"
        >
          <ArrowDown size={18} className="transition duration-500 group-hover:scale-110" />
          Explorer le journal
        </button>
      </div>
    </section>
  )
}
