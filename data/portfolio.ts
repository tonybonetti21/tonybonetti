export interface Photo {
  id: string
  src: string
  alt: string
  category: 'suisse' | 'jura' | 'alpes' | 'roadtrip' | 'slowlife'
}

export const photos: Photo[] = [
  { id: '1', src: '/images/portfolio/1.jpg', alt: 'Lac alpin en Suisse', category: 'suisse' },
  { id: '2', src: '/images/portfolio/2.jpg', alt: 'Panorama des Alpes bernoises', category: 'alpes' },
  { id: '3', src: '/images/portfolio/3.jpg', alt: 'Forêt jurassienne', category: 'jura' },
  { id: '4', src: '/images/portfolio/4.jpg', alt: 'Route de montagne', category: 'roadtrip' },
  { id: '5', src: '/images/portfolio/5.jpg', alt: 'Lever de soleil en altitude', category: 'alpes' },
  { id: '6', src: '/images/portfolio/6.jpg', alt: 'Slow life montagne', category: 'slowlife' },
  { id: '7', src: '/images/portfolio/7.jpg', alt: 'Cascade dans le Jura', category: 'jura' },
  { id: '8', src: '/images/portfolio/8.jpg', alt: 'Village suisse typique', category: 'suisse' },
  { id: '9', src: '/images/portfolio/9.jpg', alt: 'Randonnée vue panoramique', category: 'alpes' },
]
