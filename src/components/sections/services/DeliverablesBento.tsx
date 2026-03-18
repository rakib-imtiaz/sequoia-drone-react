'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import TiltCard from '@/components/ui/TiltCard'
import Image from 'next/image'
import { FileCode, CheckCircle } from 'lucide-react'

export default function DeliverablesBento() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                margin: '0 auto',
              }}
            >
              What You Actually Receive.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                marginTop: '16px',
              }}
            >
              Every project ends with files your team can use immediately.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO LAYOUT */}
        <div
          className="bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            gridAutoRows: '220px',
          }}
        >
          {/* CELL A: Image (2/3 width, spans 2 rows) */}
          <TiltCard
            style={{
              gridColumn: '1 / span 2',
              gridRow: '1 / span 2',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#111111',
            }}
          >
            <ClipReveal delay={0.1}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=1000&q=80"
                  alt="Orthomosaic map"
                  fill
                  className="object-cover"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '22px', color: '#ffffff' }}>
                    Orthomosaic Map
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                    Geo-corrected aerial basemap
                  </p>
                </div>
              </div>
            </ClipReveal>
          </TiltCard>

          {/* CELL B: High-impact Stats (tall, 1/3 width, spans 2 rows) */}
          <TiltCard
            style={{
              gridColumn: '3',
              gridRow: '1 / span 2',
              borderRadius: '16px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ position: 'relative', height: '55%', width: '100%' }}>
              <ClipReveal delay={0.2}>
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                  alt="Colorized point cloud"
                  fill
                  className="object-cover"
                />
              </ClipReveal>
            </div>
            <div
              style={{
                height: '45%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <h4 style={{ fontSize: '36px', fontWeight: 700, color: '#4DEBFF', lineHeight: 1.1 }}>
                420K
              </h4>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '4px' }}>
                points/sec
              </p>
              <div
                style={{
                  marginTop: '12px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.55)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Classified &amp; Cleaned
              </div>
            </div>
          </TiltCard>

          {/* CELL C: Feature — DXF */}
          <TiltCard
            style={{
              gridColumn: '1 / span 1',
              gridRow: '3 / span 1',
              borderRadius: '16px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <FileCode size={24} style={{ color: '#4DEBFF', marginBottom: '16px' }} />
            <h3 style={{ fontWeight: 600, fontSize: '18px', color: '#ffffff' }}>
              DXF Export
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              Civil 3D Compatible
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
              TIN + Contours + Vector
            </p>
          </TiltCard>

          {/* CELL D: Feature — Accuracy */}
          <TiltCard
            style={{
              gridColumn: '2 / span 1',
              gridRow: '3 / span 1',
              borderRadius: '16px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CheckCircle size={24} style={{ color: '#4CAF72', marginBottom: '16px' }} />
            <h3 style={{ fontWeight: 600, fontSize: '18px', color: '#ffffff' }}>
              Accuracy Report
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
              RMS Error: ±2cm
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
              PPK Verified
            </p>
          </TiltCard>

          {/* CELL E: Banner cell */}
          <div style={{ gridColumn: '1 / -1' }}>
            <ScrollReveal delay={0.3}>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(77,235,255,0.06), rgba(76,175,114,0.06))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '15px',
                  fontWeight: 500,
                  marginTop: '0px', 
                }}
              >
                All formats: DXF | DWG | GeoTIFF | LAS/LAZ | E57 | IFC
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: minmax(180px, auto) !important;
          }
          .bento-grid > div {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
          }
          /* Adjust cell A height on mobile */
          .bento-grid > div:nth-child(1) { height: 300px; }
          .bento-grid > div:nth-child(2) { height: 360px; }
        }
      `}</style>
    </section>
  )
}
