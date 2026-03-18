'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

export default function StoryAbout() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '24px' }}>
                Built for the backcountry. <br/>Engineered for the boardroom.
              </h2>
              <div style={{ fontSize: '16px', color: '#666666', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>
                  Traditional surveying in British Columbia means putting boots on hazardous ground. Early environmental assessments meant sacrificing data resolution for safety.
                </p>
                <p>
                  We saw an opportunity to change the paradigm. By combining military-grade enterprise drones with advanced RTK/PPK GNSS receivers and photogrammetry software, we built a workflow that removes the human risk while increasing the data fidelity by orders of magnitude.
                </p>
                <p>
                  Today, Sequoia provides CAD-ready deliverables to engineering firms, and high-resolution canopy health mapping to environmental consultancies—all from the same flight.
                </p>
              </div>
            </div>
            
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}>
              <Image 
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80" 
                alt="Surveyor operating drone" 
                fill 
                className="object-cover"
                style={{ filter: 'grayscale(20%)' }}
              />
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px' }} />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
