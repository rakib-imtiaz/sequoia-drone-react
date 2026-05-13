import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesOverview from '@/components/sections/ServicesOverview'
import HowItWorks from '@/components/sections/HowItWorks'
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser'
import HardwareShowcase from '@/components/sections/HardwareShowcase'
import StatsBanner from '@/components/sections/StatsBanner'
import Pricing from '@/components/sections/Pricing'
import BookingCalendly from '@/components/sections/BookingCalendly'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import LeadForm from '@/components/sections/LeadForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <div id="services">
        <ServicesOverview />
      </div>
      <div id="process">
        <HowItWorks />
      </div>
      <div id="portfolio">
        <CaseStudyTeaser />
      </div>
      <HardwareShowcase />
      <StatsBanner />
      <Pricing />
      <BookingCalendly />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </>
  )
}
