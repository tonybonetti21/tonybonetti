import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Mountain, MapPin } from 'lucide-react'
import { MotionReveal } from '@/components/motion-reveal'
import {
  REGIONS,
  getAdventuresByRegion,
  DIFFICULTY_LABEL,
  DIFFICULTY_COLOR,
  type Region,
} from '@/lib/aventures'

export function generateStaticParams() {
  return (Object.keys(REGIONS) as Region[]).map(region => ({ region }))
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const data = REGIONS[region as Region]
  if (!data) return {}
  return {
    title: `${data.label} — Tony Bonetti`,
    description: data.description,
  }
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const regionData = REGIONS[region as Region]
  if (!regionData) notFound()

  const items = getAdventuresByRegion(region as Region)

  return (
    <main className="min-h-screen">
      {/* Hero région */}
      <section className="relative flex min-h-[55svh] items-end overflow-hidden px-5 pb-14 pt-24">
        <div className="absolute inset-0">
          <Image
            src={regionData.cover}
            alt={regionData.label}
            fill priority
            className="scale-105 object-cover"
            sizes="100vw"
            style={{ filter: 'brightness(0.45)' }}
          />
        </div>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(5,3,0,0.35) 0%, rgba(5,3,0,0.75) 100%)' }} />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Link href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/60 backdrop-blur-xl transition hover:text-white">
            <ArrowLeft size={14} />
            Retour
          </Link>
          <MotionReveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em]"
              style={{ color: 'rgba(226,185,126,0.75)' }}>
              Aventures
            </p>
            <h1 className="text-balance font-semibold text-white"
              style={{ fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 1 }}>
              {regionData.label}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg"
              style={{ color: 'rgba(245,240,232,0.68)' }}>
              {regionData.description}
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Liste des randonnées */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <MotionReveal key={item.slug} delay={index * 0.07}>
              <Link href={`/aventures/${region}/${item.slug}`} className="group block">
                <article className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/4 transition duration-500 hover:-translate-y-1 hover:border-white/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image} alt={item.title} fill
                      className="object-cover transition duration-1000 group-hover:scale-105"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,3,0,0.7) 100%)' }} />
                    {/* Difficulty badge */}
                    <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: 'rgba(5,3,0,0.55)',
                        color: DIFFICULTY_COLOR[item.difficulty],
                        border: `1px solid ${DIFFICULTY_COLOR[item.difficulty]}33`,
                        backdropFilter: 'blur(8px)',
                      }}>
                      {DIFFICULTY_LABEL[item.difficulty]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.32em]"
                      style={{ color: 'rgba(226,185,126,0.7)' }}>
                      <MapPin size={10} className="mr-1 inline" />
                      {item.place}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6" style={{ color: 'rgba(245,240,232,0.60)' }}>
                      {item.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="mt-5 flex flex-wrap gap-4 text-xs" style={{ color: 'rgba(245,240,232,0.45)' }}>
                      <span className="flex items-center gap-1">
                        <Mountain size={12} />
                        {item.elevation_gain_m} m D+
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {item.duration_h}h · {item.distance_km} km
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-center border-t border-white/8 px-5 py-8 text-xs"
        style={{ color: 'rgba(245,240,232,0.35)' }}>
        <Link href="/" className="transition hover:text-white">← Tony Bonetti</Link>
      </footer>
    </main>
  )
}
