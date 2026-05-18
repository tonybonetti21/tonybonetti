'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function GlassCard({ children, className = '', onClick, href }: GlassCardProps) {
  const base = 'glass-card rounded-[var(--radius-card)] border border-[var(--card-border)] ' + className

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.15 }}>
        <Link href={href} className={base}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className={base}
      style={{ cursor: onClick ? 'pointer' : undefined }}
    >
      {children}
    </motion.div>
  )
}
