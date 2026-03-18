import HeroContact from '@/components/sections/contact/HeroContact'
import SplitFormContact from '@/components/sections/contact/SplitFormContact'
import FAQAccordion from '@/components/sections/contact/FAQAccordion'

export const metadata = {
  title: 'Contact | Sequoia Drone',
  description: 'Get in touch with Sequoia Drone Systems. We operate across the entire province of British Columbia.',
}

export default function ContactPage() {
  return (
    <main>
      <HeroContact />
      <SplitFormContact />
      <FAQAccordion />
    </main>
  )
}
