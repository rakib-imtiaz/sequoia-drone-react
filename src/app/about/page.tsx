import HeroAbout from '@/components/sections/about/HeroAbout'
import StoryAbout from '@/components/sections/about/StoryAbout'
import CredentialsAbout from '@/components/sections/about/CredentialsAbout'
import IndustriesCTA from '@/components/sections/industries/IndustriesCTA'

export const metadata = {
  title: 'About | Sequoia Drone',
  description: 'Our story and credentials. Bridging the gap between heavy industry and biological preservation.',
}

export default function AboutPage() {
  return (
    <main>
      <HeroAbout />
      <StoryAbout />
      <CredentialsAbout />
      {/* Reusing CTA from industries page with white background */}
      <div style={{ backgroundColor: '#ffffff', padding: '120px 0 0' }}>
        <IndustriesCTA />
      </div>
    </main>
  )
}
