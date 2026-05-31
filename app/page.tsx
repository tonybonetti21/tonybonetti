import Image from 'next/image'
import Link from 'next/link'
import { Camera, Mail, Map, Mountain, Play, Lock, Video } from 'lucide-react'
import { GlassButton } from '@/components/glass-button'
import { HeroSection } from '@/components/hero-section'
import { MotionReveal } from '@/components/motion-reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

/* ─── Adventures ──────────────────────────────────────────── */
const adventures = [
  {
    title: 'Suisse',
    place: 'Cols alpins & lacs glaciaires',
    text: 'Kandersteg, Valais, Berner Oberland — des traces entre routes suspendues et eaux impossiblement bleues.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=84',
    className: 'lg:col-span-7 lg:row-span-2',
    href: '/aventures/suisse',
  },
  {
    title: 'Jura',
    place: 'Crêtes, combes & forêts',
    text: 'Des itinéraires proches, brumeux, presque secrets, à hauteur de marche.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=84',
    className: 'lg:col-span-5',
    href: '/aventures/jura',
  },
  {
    title: 'Alpes',
    place: 'Sommets, refuges & glaciers',
    text: 'Là où l\'horizon devient vertical. Chamonix, Vanoise, Mont-Blanc.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=84',
    className: 'lg:col-span-5',
    href: '/aventures/alpes',
  },
]

const journal = [
  {
    label: '05:42',
    title: 'Lever froid sur les arêtes',
    text: 'Partir avant la lumière, quand le sac semble plus lourd que la veille et que le paysage n\'a pas encore choisi ses couleurs.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1300&q=84',
  },
  {
    label: '24 km',
    title: 'La ligne qui mène au lac',
    text: 'Des virages, une carte pliée trop souvent, puis cette ouverture soudaine où tout devient plus calme.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1300&q=84',
  },
  {
    label: 'ISO 400',
    title: 'Photographier le silence',
    text: 'Chercher moins la performance que l\'instant juste : une texture, un souffle, une présence.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=84',
  },
]

const guides = [
  { title: 'Roadtrip Suisse 5 jours', region: 'Alpes bernoises' },
  { title: 'Guide Spots Photo Jura', region: 'Jura' },
  { title: 'Guide Oeschinensee', region: 'Kandersteg' },
]

const portfolio = [
  { src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1400&q=84', className: 'col-span-7 h-[34rem]' },
  { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=84', className: 'col-span-5 mt-16 h-[26rem]' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1100&q=84', className: 'col-span-4 h-[24rem]' },
  { src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1400&q=84', className: 'col-span-8 h-[28rem]' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=84', className: 'col-span-5 mt-12 h-[28rem]' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=84', className: 'col-span-7 h-[32rem]' },
  { src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=84', className: 'col-span-8 h-[26rem]' },
  { src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=84', className: 'col-span-4 mt-10 h-[22rem]' },
]

/* ─── Sections ────────────────────────────────────────────── */
function LatestAdventures() {
  return (
    <section id="suite" className="relative pt-14 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em]" style={{ color: 'rgba(226,185,126,0.75)' }}>
          Mes aventures
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-12 lg:auto-rows-[20rem]">
        {adventures.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.08} className={item.className}>
            <Link href={item.href} className="block h-full">
              <article className="group image-vignette relative h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 transition duration-500 hover:border-white/20 lg:h-full">
                <Image
                  src={item.image} alt={item.title} fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.32em]"
                    style={{ color: 'rgba(226,185,126,0.75)' }}>
                    {item.place}
                  </p>
                  <h3 className="text-3xl font-semibold text-white sm:text-5xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 sm:text-base"
                    style={{ color: 'rgba(245,240,232,0.68)' }}>
                    {item.text}
                  </p>
                </div>
              </article>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section id="journal" className="relative overflow-hidden py-24 sm:py-36">
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[rgba(196,147,90,0.22)] to-transparent" />
      <MotionReveal>
        <SectionHeading
          eyebrow="Journal visuel"
          title="Une lecture lente de la montagne, pensée comme un carnet de terrain premium."
        />
      </MotionReveal>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-5 sm:px-8">
        {journal.map((entry, index) => (
          <MotionReveal key={entry.title} delay={0.06 * index}>
            <article className={cn(
              'grid items-center gap-7 md:grid-cols-12',
              index % 2 === 1 && 'md:[&>div:first-child]:order-2'
            )}>
              <div className="image-vignette relative h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 md:col-span-7">
                <Image src={entry.image} alt={entry.title} fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
              <div className="glass relative z-10 -mt-20 rounded-[1.6rem] p-6 md:col-span-5 md:mt-0 md:-ml-16 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em]"
                  style={{ color: 'rgba(226,185,126,0.7)' }}>
                  {entry.label}
                </p>
                <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{entry.title}</h3>
                <p className="mt-5 text-base leading-7" style={{ color: 'rgba(245,240,232,0.68)' }}>
                  {entry.text}
                </p>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}

function UpcomingGuides() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em]" style={{ color: 'rgba(226,185,126,0.75)' }}>
          Guides à venir
        </p>
        <p className="mt-3 max-w-xl text-sm leading-6 sm:text-base" style={{ color: 'rgba(245,240,232,0.68)' }}>
          Itinéraires détaillés, spots photo, cartes et retours terrain — pour partir au bon endroit au bon moment.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3">
        {guides.map((guide, index) => (
          <MotionReveal key={guide.title} delay={index * 0.08}>
            <article className="glass group relative min-h-[18rem] overflow-hidden rounded-[1.7rem] p-6 transition duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-[1.7rem] opacity-80"
                style={{ background: 'radial-gradient(circle at 40% 0%, rgba(196,147,90,0.18), transparent 55%)' }} />
              <div className="relative flex h-full flex-col justify-between">
                <Lock style={{ color: 'rgba(226,185,126,0.35)' }} size={16} />
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.32em]"
                    style={{ color: 'rgba(226,185,126,0.75)' }}>
                    {guide.region}
                  </p>
                  <h3 className="text-3xl font-semibold text-white">{guide.title}</h3>
                  <p className="mt-4 text-sm leading-6 sm:text-base" style={{ color: 'rgba(245,240,232,0.68)' }}>
                    Une sélection précise et visuelle pour marcher, cadrer et partir au bon moment.
                  </p>
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>

      {/* Email signup — à brancher sur Brevo/Mailchimp */}
      <MotionReveal>
        <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
          <div className="glass rounded-[1.4rem] p-6 sm:p-8">
            <p className="mb-1 text-sm font-medium text-white">Être notifié à la sortie</p>
            <p className="mb-5 text-xs leading-5" style={{ color: 'rgba(245,240,232,0.45)' }}>
              Laisse ton email — je t'envoie un mot quand un guide est disponible, pas de spam.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="ton@email.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[rgba(196,147,90,0.5)] transition"
              />
              <button
                type="submit"
                className="rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[rgba(196,147,90,0.5)] hover:bg-white/12 cursor-pointer"
              >
                Me notifier
              </button>
            </form>
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em]" style={{ color: 'rgba(226,185,126,0.75)' }}>
          Portfolio
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-12">
        {portfolio.map((item, index) => (
          <MotionReveal key={item.src} delay={index * 0.06} className={item.className}>
            <div className="group image-vignette relative h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/4">
              <Image
                src={item.src} alt="Photographie alpine de Tony Bonetti" fill
                className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="relative px-5 py-28 sm:px-8 sm:py-36">
      <MotionReveal>
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl sm:p-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.36em]"
            style={{ color: 'rgba(226,185,126,0.7)' }}>
            Contact
          </p>
          <h2 className="text-balance text-4xl font-semibold text-white sm:text-6xl">
            Collaborations & contact
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Projets outdoor, contenus photo, campagnes tourisme, récits de destination et collaborations de marque.
          </p>
          <div className="mt-9">
            <GlassButton href="mailto:contact@tonybonetti.fr" icon={<Mail size={18} />}>
              contact@tonybonetti.fr
            </GlassButton>
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="relative">
        {/* Fixed top gradient */}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-20 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Floating nav */}
        <nav className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/22 p-1 text-sm backdrop-blur-2xl md:flex"
          style={{ color: 'rgba(245,240,232,0.65)' }}>
          {[
            { label: 'Journal', href: '#journal' },
            { label: 'Instagram', href: 'https://instagram.com/tonybonetti' },
            { label: 'Contact', href: 'mailto:contact@tonybonetti.fr' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <LatestAdventures />
        {/* <Journal /> — stand-by */}
        <UpcomingGuides />
        <Portfolio />
        <Contact />
      </div>

      <footer className="flex items-center justify-between border-t border-white/8 px-5 py-8 text-xs sm:px-8"
        style={{ color: 'rgba(245,240,232,0.4)' }}>
        <span>Tony Bonetti</span>
        <span className="flex items-center gap-2">
          <Mountain size={13} />
          Alpes · Jura · Suisse
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          <Camera size={13} />
          Journal visuel
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          <Map size={13} />
          Roadtrips
        </span>
      </footer>
    </main>
  )
}
