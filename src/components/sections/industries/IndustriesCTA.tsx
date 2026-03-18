'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'
import Link from 'next/link'

export default function IndustriesCTA() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '0 48px 80px' }}>
      <ScrollReveal>
        <div
          className="cta-banner"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a3426 100%)',
            borderRadius: '24px',
            padding: '80px 64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.1)',
          }}
        >
          {/* LEFT — TEXT */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Not sure which service fits your project?
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.65)',
                marginTop: '16px',
                marginBottom: 0,
              }}
            >
              Talk to our team. We&apos;ll scope it for you.
            </p>
          </div>

          {/* RIGHT — BUTTONS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <MagneticButton
              style={{
                backgroundColor: '#E8612A',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                padding: '16px 28px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              } as React.CSSProperties}
            >
              Start a Conversation
            </MagneticButton>

            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: '15px',
                padding: '16px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 48px 32px !important;
          }
          .cta-banner > div:last-child {
            flex-direction: column;
            width: 100%;
          }
          .cta-banner > div:last-child > * {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
