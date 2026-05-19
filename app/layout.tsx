import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import { ScrollTop } from '@/components/scroll-top'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tony Bonetti — Randonnée, photo & roadtrips en Suisse, Jura et Alpes',
  description:
    'Découvrez les randonnées, photos, roadtrips, guides et spots outdoor de Tony Bonetti entre Suisse, Jura et Alpes.',
  keywords: ['randonnée Suisse', 'roadtrip Alpes', 'spots photo Jura', 'Tony Bonetti', 'outdoor francophone'],
  authors: [{ name: 'Tony Bonetti', url: 'https://tonybonetti.fr' }],
  creator: 'Tony Bonetti',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tonybonetti.fr',
    title: 'Tony Bonetti — Randonnée, photo & roadtrips',
    description: 'Spots, guides et carnets de route outdoor entre Suisse, Jura et Alpes.',
    siteName: 'Tony Bonetti',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tony Bonetti — Outdoor & Photo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Bonetti — Randonnée, photo & roadtrips',
    description: 'Spots, guides et carnets de route outdoor entre Suisse, Jura et Alpes.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://tonybonetti.fr'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <link rel="canonical" href="https://tonybonetti.fr" />
      </head>
      <body style={{ fontFamily: 'var(--font-manrope), -apple-system, sans-serif' }}>
        <ScrollTop />
        {children}
        <Script
          defer
          data-domain="tonybonetti.fr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
