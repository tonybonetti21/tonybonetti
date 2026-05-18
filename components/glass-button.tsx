import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GlassButtonProps = ComponentPropsWithoutRef<'a'> & {
  icon?: ReactNode
  variant?: 'light' | 'dark'
}

export function GlassButton({ children, className, icon, variant = 'light', ...props }: GlassButtonProps) {
  return (
    <a
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-wide transition duration-500',
        'border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl',
        'hover:-translate-y-0.5 hover:border-[rgba(196,147,90,0.5)] hover:bg-white/16 hover:shadow-[0_24px_70px_rgba(196,147,90,0.18)]',
        variant === 'dark' && 'border-white/10 bg-black/20',
        className
      )}
      {...props}
    >
      <span className="transition duration-500 group-hover:scale-110">{icon}</span>
      {children}
    </a>
  )
}
