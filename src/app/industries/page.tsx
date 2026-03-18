import IndustriesHero from '@/components/sections/industries/IndustriesHero'
import IndustriesGrid from '@/components/sections/industries/IndustriesGrid'
import IndustriesCTA from '@/components/sections/industries/IndustriesCTA'

export const metadata = {
  title: 'Industries | Sequoia Drone',
  description: 'Built for BC\'s most demanding sectors. Six sectors, one trusted partner.',
}

export default function IndustriesPage() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesCTA />
    </main>
  )
}
