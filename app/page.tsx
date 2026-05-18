import Image from 'next/image'
import { ArrowDown, Camera, Mail, Map, Mountain, Play, Sparkles, Lock, Video } from 'lucide-react'
import { GlassButton } from '@/components/glass-button'
import { MotionReveal } from '@/components/motion-reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

/* ─── Images ─────────────────────────────────────────────── */
const heroImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=88'

const adventures = [
  {
    title: 'Roadtrip Suisse',
    place: 'Valais, cols et lacs froids',
    text: 'Une trace lente entre routes suspendues, vallées minérales et fins de journée couleur acier.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=84',
    className: 'lg:col-span-7 lg:row-span-2',
  },
  {
    title: 'Oeschinensee',
    place: 'Berner Oberland',
    text: 'Le bleu glaciaire comme point fixe, les falaises en silence autour.',
    image: 'https://images.unsplash.com/photo-1530841344095-c65c20fbd011?auto=format&fit=crop&w=1200&q=84',
    className: 'lg:col-span-5',
  },
  {
    title: 'Jura',
    place: 'Crêtes, combes et forêts',
    text: 'Des itinéraires proches, brumeux, presque secrets, à hauteur de marche.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=84',
    className: 'lg:col-span-5',
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
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1100&q=84', className: 'col-span-4 h-[22rem]' },
  { src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1400&q=84', className: 'col-span-8 h-[28rem]' },
]

/* ─── Sections ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      <div className="absolute inset-0 image-vignette">
        <Image
          src={heroImage}
          alt="Paysage de montagne au lever du jour"
          fill priority
          className="scale-105 object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,5,2,0.88),rgba(12,8,3,0.32)_42%,rgba(8,5,2,0.80))]" />

      {/* Top left label */}
      <div className="absolute left-6 top-6 z-10 hidden rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl sm:block">
        Journal alpin
      </div>

      <MotionReveal className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs backdrop-blur-2xl"
          style={{ color: 'rgba(226,185,126,0.8)' }}>
          <Sparkles size={13} />
          Jura · Alpes · Suisse
        </div>

        <h1 className="text-balance font-semibold tracking-tight text-white drop-shadow-2xl"
          style={{ fontSize: 'clamp(52px, 10vw, 140px)', lineHeight: 0.95 }}>
          Tony Bonetti
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-8 sm:text-2xl"
          style={{ color: 'rgba(245,240,232,0.72)' }}>
          Randonnée, photo & roadtrips entre Jura, Alpes et Suisse.
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <GlassButton href="https://instagram.com/tonybonetti" icon={<Camera size={18} />}>
            Instagram
          </GlassButton>
          <GlassButton href="https://tiktok.com/@tonybonetti" icon={<Video size={18} />}>
            TikTok
          </GlassButton>
          <GlassButton href="#journal" icon={<ArrowDown size={18} />} variant="dark">
            Explorer le journal
          </GlassButton>
        </div>
      </MotionReveal>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 h-14 w-px -translate-x-1/2 overflow-hidden bg-white/18">
        <div className="h-1/2 w-full animate-pulse" style={{ background: 'rgba(196,147,90,0.8)' }} />
      </div>
    </section>
  )
}

function LatestAdventures() {
  return (
    <section className="relative py-24 sm:py-32">
      <MotionReveal>
        <SectionHeading
          eyebrow="Dernières traces"
          title="Des aventures comme des plans de cinéma, entre routes hautes et lacs impossibles."
          text="Chaque sortie devient une séquence : un itinéraire, une lumière, un fragment de montagne à garder."
        />
      </MotionReveal>

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-12 lg:auto-rows-[20rem]">
        {adventures.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.08} className={item.className}>
            <article className="group image-vignette relative h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 lg:h-full">
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
      <MotionReveal>
        <SectionHeading
          eyebrow="Guides à venir"
          title="Des repères utiles, préparés comme des objets éditoriaux."
          text="Itinéraires, spots photo, cartes mentales et retours terrain pour prolonger l'expérience hors du feed."
        />
      </MotionReveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3">
        {guides.map((guide, index) => (
          <MotionReveal key={guide.title} delay={index * 0.08}>
            <article className="glass group relative min-h-[18rem] overflow-hidden rounded-[1.7rem] p-6 transition duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-[1.7rem] opacity-80"
                style={{ background: 'radial-gradient(circle at 40% 0%, rgba(196,147,90,0.18), transparent 55%)' }} />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Lock style={{ color: 'rgba(226,185,126,0.8)' }} size={20} />
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs"
                    style={{ color: 'rgba(245,240,232,0.55)' }}>
                    Bientôt disponible
                  </span>
                </div>
                <div>
                  <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest"
                    style={{ color: 'rgba(226,185,126,0.6)' }}>
                    {guide.region}
                  </p>
                  <h3 className="text-3xl font-semibold text-white">{guide.title}</h3>
                  <p className="mt-4 text-sm leading-6" style={{ color: 'rgba(245,240,232,0.58)' }}>
                    Une sélection précise, sensible et visuelle pour marcher, cadrer et partir au bon moment.
                  </p>
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <MotionReveal>
        <SectionHeading
          eyebrow="Portfolio immersif"
          title="Des images qui respirent, posées comme des fragments de film."
        />
      </MotionReveal>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-12">
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
      <Hero />

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
        <Journal />
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
