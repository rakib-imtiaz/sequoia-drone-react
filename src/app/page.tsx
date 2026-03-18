import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import HowItWorks from '@/components/sections/HowItWorks'
import HardwareShowcase from '@/components/sections/HardwareShowcase'
import StatsBanner from '@/components/sections/StatsBanner'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <HardwareShowcase />
      <StatsBanner />
      <ContactForm />
    </>
  )
}
