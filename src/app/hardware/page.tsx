import HardwareHero from '@/components/sections/hardware/HardwareHero'
import HardwareBento from '@/components/sections/hardware/HardwareBento'
import WorkflowIntegration from '@/components/sections/hardware/WorkflowIntegration'

export const metadata = {
  title: 'Hardware & Fleet | Sequoia Drone',
  description: 'Precision hardware fleet. Built for BC terrain.',
}

export default function HardwarePage() {
  return (
    <main>
      <HardwareHero />
      <HardwareBento />
      <WorkflowIntegration />
    </main>
  )
}
