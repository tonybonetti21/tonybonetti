export interface Link {
  id: string
  label: string
  description: string
  url: string
  icon: string
  active: boolean
  priority: number
  trackingId: string
}

export const links: Link[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    description: '@tonybonetti · Outdoor & randos',
    url: 'https://instagram.com/tonybonetti',
    icon: 'Instagram',
    active: true,
    priority: 1,
    trackingId: 'click_instagram',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    description: 'Derniers reels outdoor',
    url: 'https://tiktok.com/@tonybonetti',
    icon: 'Video',
    active: true,
    priority: 2,
    trackingId: 'click_tiktok',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    description: 'Vidéos randonnées & roadtrips',
    url: 'https://youtube.com/@tonybonetti',
    icon: 'Youtube',
    active: true,
    priority: 3,
    trackingId: 'click_youtube',
  },
  {
    id: 'blog',
    label: 'Blog & articles',
    description: 'Spots, guides, carnets de route',
    url: '/blog',
    icon: 'BookOpen',
    active: true,
    priority: 4,
    trackingId: 'click_blog',
  },
  {
    id: 'portfolio',
    label: 'Portfolio photo',
    description: 'Mes meilleurs clichés',
    url: '/portfolio',
    icon: 'Camera',
    active: true,
    priority: 5,
    trackingId: 'click_portfolio',
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    description: 'Rejoindre la communauté outdoor',
    url: 'https://newsletter.tonybonetti.fr',
    icon: 'Mail',
    active: true,
    priority: 6,
    trackingId: 'click_newsletter',
  },
]
