import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, text, className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-5xl px-5 sm:px-8', className)}>
      <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.42em]" style={{ color: 'rgba(226,185,126,0.7)' }}>
        {eyebrow}
      </p>
      <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {text && (
        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg" style={{ color: 'rgba(245,240,232,0.65)' }}>
          {text}
        </p>
      )}
    </div>
  )
}
