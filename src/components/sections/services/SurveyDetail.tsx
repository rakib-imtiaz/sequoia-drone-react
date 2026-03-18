'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import TiltCard from '@/components/ui/TiltCard'
import Image from 'next/image'

const steps = [
  {
    title: 'Flight Planning',
    desc: 'Polygon mission, 80/70 overlap, DJI Pilot 2',
  },
  {
    title: 'PPK Ground Control',
    desc: 'Emlid RS3, NGS monument, no internet',
  },
  {
    title: 'PPK Processing',
    desc: 'Emlid Studio, base station log correction',
  },
  {
    title: 'Photogrammetry',
    desc: 'Pix4Dmatic, DSM, point cloud, orthomosaic',
  },
  {
    title: 'Feature Extraction',
    desc: 'Pix4Dsurvey, classify, clean, vectorize',
  },
  {
    title: 'CAD Export',
    desc: 'DXF, TIN, contours → AutoCAD Civil 3D',
  },
]

export default function SurveyDetail() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '100px 48px' }}>
      <div
        className="survey-detail-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — TEXT */}
        <div>
          <ScrollReveal>
            <p className="eyebrow" style={{ color: '#4DEBFF', marginBottom: '16px' }}>
              SURVEY &amp; ENGINEERING
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '40px',
              }}
            >
              From Flight to CAD-Ready Files.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1.5px solid #4DEBFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#4DEBFF',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '16px', color: '#ffffff' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div
              style={{
                marginTop: '40px',
                display: 'inline-block',
                backgroundColor: 'rgba(77,235,255,0.08)',
                border: '1px solid #4DEBFF',
                padding: '10px 20px',
                borderRadius: '999px',
                color: '#4DEBFF',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              ±2cm RMS | PPK Verified | Civil 3D Compatible
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT — BENTO GRID */}
        <div
          className="bento-right-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(2, 240px)',
            gap: '16px',
            position: 'relative',
          }}
        >
          {/* Cell 1: Tall image (span 2 rows on left) */}
          <TiltCard
            style={{
              gridRow: '1 / span 2',
              gridColumn: '1 / span 1',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <ClipReveal delay={0.1}>
              <div style={{ height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=800&q=80"
                  alt="Orthomosaic terrain map"
                  fill
                  className="object-cover"
                />
              </div>
            </ClipReveal>
          </TiltCard>

          {/* Cell 2: Top-right image */}
          <TiltCard
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <ClipReveal delay={0.2}>
              <div style={{ height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="3D point cloud visualisation"
                  fill
                  className="object-cover"
                />
              </div>
            </ClipReveal>
          </TiltCard>

          {/* Cell 3: Bottom-right stats */}
          <TiltCard
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h4 style={{ fontWeight: 600, fontSize: '18px', color: '#4DEBFF' }}>
              DXF Export
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
              Civil 3D Compatible
            </p>
            <div
              style={{
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 700,
                color: '#ffffff',
                marginTop: '16px',
                lineHeight: 1,
              }}
            >
              ±2cm RMS
            </div>
          </TiltCard>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .survey-detail-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-right-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            height: auto !important;
          }
          .bento-right-grid > div {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
            min-height: 240px;
          }
        }
      `}</style>
    </section>
  )
}
