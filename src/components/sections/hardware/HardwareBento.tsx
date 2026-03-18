'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import TiltCard from '@/components/ui/TiltCard'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Crosshair, FileOutput, Cpu } from 'lucide-react'
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

const detailedSpecs = [
  {
    hw: 'DJI Mavic 3 Enterprise',
    acc: '±2cm (PPK)',
    use: 'Topographic Mapping',
    out: 'GeoTIFF, LAS',
    desc: 'The gold standard for wide-area topographical mapping globally. Built for rapid deployment and precision.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
  },
  {
    hw: 'Emlid Reach RS3',
    acc: '±7mm (RTK)',
    use: 'GCP Collection',
    out: 'RINEX, CSV',
    desc: 'Multi-band RTK/PPK GNSS receiver providing centimeter-level accuracy for ground control points.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    hw: 'Leica BLK2GO',
    acc: '±15mm',
    use: 'Indoor/Structure Scan',
    out: 'E57, RCP',
    desc: 'Handheld imaging laser scanner for rapid, agile mobile reality capture in complex environments.',
    image: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&q=80',
  },
  {
    hw: 'Pix4D Suite',
    acc: 'Software Engine',
    use: 'Photogrammetry',
    out: 'DXF, Point Cloud',
    desc: 'Advanced photogrammetry software translating raw data into highly accurate 3D models and point clouds.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export default function HardwareBento() {
  const [activeTab, setActiveTab] = useState(0)

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

          {/* SPECS INTERACTIVE TABS (Premium Dark Theme) */}
          <ScrollReveal delay={0.3}>
            <div
              className="specs-interactive-container"
              style={{
                backgroundColor: '#111111',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                marginTop: '48px',
                display: 'flex',
                overflow: 'hidden',
                minHeight: '400px'
              }}
            >
              {/* LEFT — TABS */}
              <div 
                className="specs-tabs-sidebar"
                style={{ 
                  flex: '0 0 300px', 
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: '#0d0d0d',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Hardware Specifications
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '12px' }}>
                  {detailedSpecs.map((spec, i) => {
                    const isActive = activeTab === i
                    return (
                      <button
                        key={spec.hw}
                        onClick={() => setActiveTab(i)}
                        style={{
                          textAlign: 'left',
                          padding: '16px 20px',
                          backgroundColor: isActive ? 'rgba(77,235,255,0.08)' : 'transparent',
                          border: 'none',
                          borderLeft: isActive ? '3px solid #4DEBFF' : '3px solid transparent',
                          borderRadius: '0 8px 8px 0',
                          cursor: 'pointer',
                          color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          transition: 'all 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        {spec.hw}
                        {isActive && (
                          <motion.div layoutId="activeDot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4DEBFF' }} />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* RIGHT — CONTENT */}
              <div 
                className="specs-content-area"
                style={{ 
                  flex: 1, 
                  position: 'relative',
                  backgroundColor: '#111111',
                  overflow: 'hidden'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: '250px' }}>
                        <h4 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                          {detailedSpecs[activeTab].hw}
                        </h4>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontSize: '15px' }}>
                          {detailedSpecs[activeTab].desc}
                        </p>
                      </div>
                      
                      <div style={{ width: '160px', height: '100px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Image 
                          src={detailedSpecs[activeTab].image} 
                          alt={detailedSpecs[activeTab].hw}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: 'auto' }}>
                      <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <Crosshair size={16} color="#4DEBFF" />
                          <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Accuracy Standard</span>
                        </div>
                        <p style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff' }}>{detailedSpecs[activeTab].acc}</p>
                      </div>

                      <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <Cpu size={16} color="#4DEBFF" />
                          <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Application</span>
                        </div>
                        <p style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff' }}>{detailedSpecs[activeTab].use}</p>
                      </div>

                      <div style={{ gridColumn: '1 / -1', backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <FileOutput size={16} color="#4DEBFF" />
                            <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Output File Formats</span>
                          </div>
                          <p style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff' }}>{detailedSpecs[activeTab].out}</p>
                        </div>
                        <CheckCircle2 size={24} color="#4CAF72" opacity={0.5} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
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
          .specs-interactive-container {
            flex-direction: column !important;
          }
          .specs-tabs-sidebar {
            flex: none !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .specs-tabs-sidebar > div:last-child {
            flex-direction: row !important;
            overflow-x: auto;
            padding: 8px !important;
          }
          .specs-tabs-sidebar button {
            border-left: none !important;
            border-bottom: 3px solid transparent;
            border-radius: 8px !important;
            white-space: nowrap;
          }
          .specs-content-area > div {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
