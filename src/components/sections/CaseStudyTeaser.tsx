'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'

const badges = ['DXF Export', 'Orthomosaic', 'Point Cloud', 'Civil 3D']

const badgeVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const badgeItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number] } },
}

export default function CaseStudyTeaser() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="case-study-card"
          style={{
            backgroundColor: '#111111',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '50% 50%',
          }}
        >
          {/* LEFT */}
          <ScrollReveal>
            <div style={{ padding: '48px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#E8612A',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                FEATURED PROJECT
              </div>

              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                Topographic Survey — BC Interior
              </h2>

              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                  maxWidth: '360px',
                }}
              >
                Using PPK-corrected drone imagery and Pix4Dmatic photogrammetry, we produced a complete topographic deliverable accurate to ±2cm — ready for AutoCAD Civil 3D within 48 hours of the final flight.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  marginTop: '32px',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
                    0.43&quot;
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.05em' }}>
                    Best RMS Accuracy
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
                    1.02cm
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.05em' }}>
                    GCP Base Station RMS
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
                    48hrs
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.05em' }}>
                    CAD Delivery
                  </div>
                </div>
              </div>

              {/* Deliverable badges */}
              <motion.div
                variants={badgeVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}
              >
                {badges.map((badge) => (
                  <motion.span
                    key={badge}
                    variants={badgeItem}
                    style={{
                      backgroundColor: 'rgba(77,235,255,0.08)',
                      border: '1px solid rgba(77,235,255,0.2)',
                      color: '#4DEBFF',
                      borderRadius: '999px',
                      padding: '4px 12px',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA */}
              <Link
                href="/case-studies"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '28px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#E8612A',
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
              >
                View Full Case Study →
              </Link>
            </div>
          </ScrollReveal>

          {/* RIGHT — IMAGE */}
          <ClipReveal delay={0.2}>
            <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
              <Image
                src="/images/survey-orthomosaic-top-down.jpg"
                alt="Real drone orthomosaic aerial survey map"
                fill
                className="object-cover"
              />
              {/* Left gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(17,17,17,0.4) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Floating accuracy badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  backgroundColor: 'rgba(10,10,10,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(77,235,255,0.3)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}
              >
                <div style={{ fontSize: '10px', fontWeight: 500, color: '#4DEBFF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  FIELD VERIFIED
                </div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  0.43&quot; RMS
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                  DroneDeploy 2023
                </div>
              </motion.div>
            </div>
          </ClipReveal>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .case-study-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
