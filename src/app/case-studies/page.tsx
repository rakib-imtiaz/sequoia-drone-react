import CaseStudiesHero from '@/components/sections/casestudies/CaseStudiesHero'
import CaseStudiesBento from '@/components/sections/casestudies/CaseStudiesBento'

export const metadata = {
  title: 'Case Studies | Sequoia Drone',
  description: 'Proof in the data. CAD-ready deliverables for engineering firms across British Columbia.',
}

export default function CaseStudiesPage() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <CaseStudiesHero />
      <CaseStudiesBento />
    </main>
  )
}
