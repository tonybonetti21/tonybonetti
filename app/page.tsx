import Hero from '@/components/Hero'
import LinkCards from '@/components/LinkCards'
import GuidesSection from '@/components/GuidesSection'
import PortfolioGrid from '@/components/PortfolioGrid'
import SpotsSection from '@/components/SpotsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <LinkCards />
      <GuidesSection />
      <PortfolioGrid />
      <SpotsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
