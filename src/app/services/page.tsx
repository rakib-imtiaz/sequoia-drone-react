import ServicesHero from '@/components/sections/services/ServicesHero'
import SurveyDetail from '@/components/sections/services/SurveyDetail'
import EnvDetail from '@/components/sections/services/EnvDetail'
import DeliverablesBento from '@/components/sections/services/DeliverablesBento'

export const metadata = {
  title: 'Services | Sequoia Drone',
  description: 'Survey-grade intelligence at every scale. From flight to CAD-ready files.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <SurveyDetail />
      <EnvDetail />
      <DeliverablesBento />
    </main>
  )
}
