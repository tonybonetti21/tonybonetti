export function trackClick(eventName: string) {
  if (typeof window !== 'undefined' && (window as unknown as { plausible?: (e: string) => void }).plausible) {
    (window as unknown as { plausible: (e: string) => void }).plausible(eventName)
  }
}
