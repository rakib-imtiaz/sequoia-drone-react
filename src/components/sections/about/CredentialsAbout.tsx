'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { BadgeCheck, ShieldCheck, Award, Zap } from 'lucide-react'

const credentials = [
  {
    icon: BadgeCheck,
    title: 'Transport Canada Certified',
    desc: 'Advanced RPAS Operations Certificate. Cleared for controlled airspace, near people, and BVLOS (with SFOC).',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    desc: '$5M Commercial General Liability specifically covering RPAS (drone) operations and data collection.',
  },
  {
    icon: Award,
    title: 'ASPRS Standards',
    desc: 'All topographic deliverables adhere to ASPRS Positional Accuracy Standards for Digital Geospatial Data.',
  },
  {
    icon: Zap,
    title: 'Zero Incident Record',
    desc: 'Immaculate safety record across thousands of flight hours in extreme mountainous and coastal environments.',
  },
]

export default function CredentialsAbout() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
             <p className="eyebrow" style={{ color: '#E8612A', marginBottom: '16px' }}>CREDENTIALS</p>
             <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.15 }}>
               Trust. Verified.
             </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {credentials.map((cred, i) => {
            const Icon = cred.icon
            return (
              <ScrollReveal key={cred.title} delay={i * 0.1}>
                <div 
                  style={{ 
                    backgroundColor: '#111111', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px', 
                    padding: '40px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{ backgroundColor: 'rgba(77,235,255,0.1)', padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
                    <Icon size={24} color="#4DEBFF" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                    {cred.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    {cred.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
