'use client'
import { ArrowDown } from 'lucide-react'
import { GlassButton } from './glass-button'

export function ScrollButton() {
  return (
    <GlassButton
      href="#"
      onClick={(e) => {
        e.preventDefault()
        const target = document.getElementById('suite')
        if (target) {
          window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
        }
      }}
      icon={<ArrowDown size={18} />}
      variant="dark"
    >
      Explorer le journal
    </GlassButton>
  )
}
