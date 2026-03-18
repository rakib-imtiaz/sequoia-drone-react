'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import TiltCard from '@/components/ui/TiltCard'
import ParallaxImage from '@/components/ui/ParallaxImage'
import Image from 'next/image'

const cards = [
  {
    name: 'Emlid Reach RS3',
    tag: 'Ground Control',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    overlayText: 'Multi-Band GNSS',
    specs: 'RTK | PPK | ±7mm+1ppm',
  },
  {
    name: 'Leica BLK2GO',
    tag: 'Indoor Scanning',
    image: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=600&q=80',
    overlayText: 'Handheld LiDAR',
    specs: '420K pts/sec | SLAM | BIM Ready',
  },
  {
    name: 'Pix4D Suite',
    tag: 'Processing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    overlayText: 'Photogrammetry',
    specs: 'Pix4Dmatic + Pix4Dsurvey',
  },
]

const tableSpecs = [
  { hw: 'DJI Mavic 3E', acc: '±2cm (PPK)', use: 'Topographic Mapping', out: 'GeoTIFF, LAS' },
  { hw: 'Emlid Reach RS3', acc: '±7mm (RTK)', use: 'GCP Collection', out: 'RINEX, CSV' },
  { hw: 'Leica BLK2GO', acc: '±15mm', use: 'Indoor/Structure Scan', out: 'E57, RCP' },
  { hw: 'Pix4D Suite', acc: 'Software', use: 'Photogrammetry', out: 'DXF, Point Cloud' },
]

export default function HardwareBento() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'clamp(28px,4vw,40px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '32px',
            }}
          >
            The Complete Stack.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* BANNER CARD */}
          <TiltCard
            style={{
              width: '100%',
              height: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#111111',
            }}
          >
            <div style={{ position: 'absolute', inset: 0 }}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1200&q=80"
                alt="DJI Mavic 3 Enterprise"
                speed={60}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(77,235,255,0.12)',
                  color: '#4DEBFF',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  width: 'fit-content',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(77,235,255,0.2)',
                }}
              >
                Primary Survey Drone
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#ffffff', marginTop: '16px' }}>
                DJI Mavic 3 Enterprise
              </h3>
              <div
                className="specs-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '12px',
                  flexWrap: 'wrap',
                }}
              >
                {['4/3 CMOS', 'Mechanical Shutter', '45min', 'PPK Ready'].map((spec, i) => (
                  <div key={spec} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {i > 0 && (
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#4DEBFF' }} />
                    )}
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* 3-COL GRID */}
          <div
            className="hardware-3col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            {cards.map((card, i) => (
              <ScrollReveal key={card.name} delay={i * 0.1}>
                <TiltCard
                  style={{
                    height: '300px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#111111',
                  }}
                >
                  <ClipReveal delay={0.1}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        className="object-cover"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%)',
                        }}
                      />
                    </div>
                  </ClipReveal>
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {card.tag}
                  </div>
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '20px', color: '#ffffff' }}>{card.name}</h3>
                    <p style={{ fontSize: '15px', color: '#4DEBFF', fontWeight: 500, marginTop: '2px' }}>
                      {card.overlayText}
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '8px' }}>
                      {card.specs}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* SPECS TABLE CARD (White Contrast) */}
          <ScrollReveal delay={0.3}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '1000px',
                marginTop: '48px',
              }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
                Hardware Specifications
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #e0e0e0' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase' }}>Hardware</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase' }}>Accuracy</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase' }}>Primary Use</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase' }}>Output Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableSpecs.map((row, i) => (
                      <tr
                        key={row.hw}
                        style={{
                          backgroundColor: i % 2 === 0 ? '#f9f9f7' : '#ffffff',
                          borderBottom: i === tableSpecs.length - 1 ? 'none' : '1px solid #f0f0f0',
                          position: 'relative',
                        }}
                      >
                        <td
                          style={{
                            padding: '16px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#1a1a1a',
                            borderLeft: i === 0 ? '4px solid #4DEBFF' : '4px solid transparent',
                          }}
                        >
                          {row.hw}
                        </td>
                        <td style={{ padding: '16px', fontSize: '14px', color: '#4a4a4a' }}>{row.acc}</td>
                        <td style={{ padding: '16px', fontSize: '14px', color: '#4a4a4a' }}>{row.use}</td>
                        <td style={{ padding: '16px', fontSize: '14px', color: '#4a4a4a' }}>{row.out}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hardware-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
