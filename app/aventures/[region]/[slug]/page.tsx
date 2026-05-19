import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Mountain, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { MotionReveal } from '@/components/motion-reveal'
import {
  REGIONS,
  getAdventure,
  DIFFICULTY_LABEL,
  DIFFICULTY_COLOR,
  formatDate,
  type Region,
  adventures,
} from '@/lib/aventures'

export function generateStaticParams() {
  return adventures.map(a => ({ region: a.region, slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ region: string; slug: string }> }) {
  const { region, slug } = await params
  const item = getAdventure(region as Region, slug)
  if (!item) return {}
  return {
    title: `${item.title} — Tony Bonetti`,
    description: item.excerpt,
    openGraph: { images: [item.image] },
  }
}

export default async function AdventurePage({ params }: { params: Promise<{ region: string; slug: string }> }) {
  const { region, slug } = await params
  const item = getAdventure(region as Region, slug)
  if (!item) notFound()

  const regionData = REGIONS[region as Region]

  return (
    <main className="min-h-screen">
      {/* Hero article */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden px-5 pb-16 pt-24">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill priority
            className="scale-105 object-cover"
            sizes="100vw"
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(5,3,0,0.2) 0%, rgba(5,3,0,0.85) 100%)' }} />

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm" style={{ color: 'rgba(245,240,232,0.5)' }}>
            <Link href="/" className="transition hover:text-white">Tony Bonetti</Link>
            <span>/</span>
            <Link href={`/aventures/${region}`} className="transition hover:text-white">{regionData.label}</Link>
            <span>/</span>
            <span style={{ color: 'rgba(245,240,232,0.8)' }}>{item.title}</span>
          </div>

          <MotionReveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em]"
              style={{ color: 'rgba(226,185,126,0.75)' }}>
              <MapPin size={10} className="mr-1 inline" />
              {item.place}
            </p>
            <h1 className="text-balance font-semibold text-white"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.05 }}>
              {item.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7" style={{ color: 'rgba(245,240,232,0.70)' }}>
              {item.excerpt}
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Metadata strip */}
      <div className="border-b border-white/8">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-6 px-5 py-6 sm:px-8 text-sm"
          style={{ color: 'rgba(245,240,232,0.55)' }}>
          <span className="flex items-center gap-2">
            <Calendar size={14} style={{ color: 'rgba(226,185,126,0.7)' }} />
            {formatDate(item.date)}
          </span>
          <span className="flex items-center gap-2">
            <Mountain size={14} style={{ color: 'rgba(226,185,126,0.7)' }} />
            {item.elevation_gain_m} m D+
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp size={14} style={{ color: 'rgba(226,185,126,0.7)' }} />
            {item.distance_km} km
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} style={{ color: 'rgba(226,185,126,0.7)' }} />
            {item.duration_h}h environ
          </span>
          <span className="flex items-center gap-2 rounded-full px-3 py-0.5 text-xs"
            style={{
              color: DIFFICULTY_COLOR[item.difficulty],
              border: `1px solid ${DIFFICULTY_COLOR[item.difficulty]}44`,
              background: `${DIFFICULTY_COLOR[item.difficulty]}11`,
            }}>
            {DIFFICULTY_LABEL[item.difficulty]}
          </span>
        </div>
      </div>

      {/* Contenu article */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        {/* Highlights */}
        <MotionReveal>
          <div className="glass mb-12 rounded-[1.4rem] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em]"
              style={{ color: 'rgba(226,185,126,0.7)' }}>
              Points forts
            </p>
            <ul className="space-y-2">
              {item.highlights.map(h => (
                <li key={h} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(245,240,232,0.75)' }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: 'rgba(196,147,90,0.8)' }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>

        {/* Texte */}
        <div className="space-y-6">
          {item.content.map((para, i) => (
            <MotionReveal key={i} delay={i * 0.04}>
              <p className="text-base leading-8 sm:text-lg"
                style={{ color: 'rgba(245,240,232,0.72)' }}>
                {para}
              </p>
            </MotionReveal>
          ))}
        </div>

        {/* Galerie */}
        {item.gallery.length > 1 && (
          <MotionReveal>
            <div className="mt-16 grid gap-4 sm:grid-cols-2">
              {item.gallery.map((src, i) => (
                <div key={src}
                  className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 ${i === 0 && item.gallery.length % 2 !== 0 ? 'sm:col-span-2 h-80' : 'h-56'}`}>
                  <Image
                    src={src}
                    alt={`${item.title} — photo ${i + 1}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </MotionReveal>
        )}

        {/* Back link */}
        <MotionReveal>
          <div className="mt-16 border-t border-white/8 pt-10">
            <Link
              href={`/aventures/${region}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm text-white/60 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white">
              <ArrowLeft size={15} />
              Toutes les aventures {regionData.label}
            </Link>
          </div>
        </MotionReveal>
      </article>

      <footer className="flex items-center justify-center border-t border-white/8 px-5 py-8 text-xs"
        style={{ color: 'rgba(245,240,232,0.35)' }}>
        <Link href="/" className="transition hover:text-white">← Tony Bonetti</Link>
      </footer>
    </main>
  )
}
