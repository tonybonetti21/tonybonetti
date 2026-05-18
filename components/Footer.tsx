import { Camera, Video, Play, BookOpen } from 'lucide-react'

const socials = [
  { icon: Camera,   href: 'https://instagram.com/tonybonetti', label: 'Instagram' },
  { icon: Video,    href: 'https://tiktok.com/@tonybonetti',   label: 'TikTok' },
  { icon: Play,     href: 'https://youtube.com/@tonybonetti',  label: 'YouTube' },
  { icon: BookOpen, href: '/blog',                             label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t md:px-14 lg:px-20 xl:px-28"
      style={{ background: 'var(--bg-primary)', borderColor: 'var(--card-border)' }}>
      <div className="max-w-screen-xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full glass-card border border-[var(--card-border)] transition-colors duration-200 hover:border-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}>
                <Icon size={14} />
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2025 Tony Bonetti · tonybonetti.fr
          </p>
        </div>

        <div className="flex gap-5">
          {[
            { label: 'Mentions légales', href: '/mentions-legales' },
            { label: 'Confidentialité', href: '/confidentialite' },
            { label: 'Contact', href: 'mailto:contact@tonybonetti.fr' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className="text-xs transition-colors duration-200 hover:text-white"
              style={{ color: 'var(--text-muted)' }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
