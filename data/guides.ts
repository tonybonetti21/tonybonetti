export interface Guide {
  id: string
  title: string
  description: string
  region: string
  image: string
  status: 'coming_soon' | 'available'
  trackingId: string
}

export const guides: Guide[] = [
  {
    id: 'roadtrip-suisse-5j',
    title: 'Roadtrip Suisse — 5 jours',
    description: 'Oeschinensee · Lauterbrunnen · Blausee · Grindelwald',
    region: 'Alpes bernoises',
    image: '/images/guides/suisse-5j.jpg',
    status: 'coming_soon',
    trackingId: 'click_guide_suisse5j',
  },
  {
    id: 'roadtrip-suisse-3j',
    title: 'Roadtrip Suisse — 3 jours',
    description: "L'essentiel en un week-end long",
    region: 'Suisse',
    image: '/images/guides/suisse-3j.jpg',
    status: 'coming_soon',
    trackingId: 'click_guide_suisse3j',
  },
  {
    id: 'spots-photo-jura',
    title: 'Guide Spots Photo Jura',
    description: 'Cascades · Belvédères · Points de vue secrets',
    region: 'Jura',
    image: '/images/guides/jura.jpg',
    status: 'coming_soon',
    trackingId: 'click_guide_jura',
  },
  {
    id: 'oeschinensee',
    title: 'Guide Oeschinensee',
    description: 'Le lac turquoise des Alpes bernoises',
    region: 'Kandersteg, Suisse',
    image: '/images/guides/oeschinensee.jpg',
    status: 'coming_soon',
    trackingId: 'click_guide_oeschinensee',
  },
]
