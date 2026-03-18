'use client'

import { motion, useInView } from 'framer-motion'
import { ClipboardList, Radio, Cpu, FileDown } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Flight Planning',
    desc: 'We define the survey boundary, set 80/70 image overlap, configure shutter speed, and plan the autonomous polygon mission.',
    tools: ['DJI Pilot 2', 'DJI Mavic 3 Enterprise'],
    image: '/images/process-flight-plan-lawnmower.jpg',
    imageAlt: 'Autonomous lawnmower flight plan pattern',
    statBadge: '75/65 overlap · 120–200ft AGL',
  },
  {
    number: '02',
    icon: Radio,
    title: 'PPK Ground Control',
    desc: 'Emlid RS3 base station is set up over a known NGS monument. Raw GNSS data is logged simultaneously with the drone flight.',
    tools: ['Emlid Reach RS3', 'NGS Monument'],
    image: '/images/process-gcp-marker-ground.jpg',
    imageAlt: 'GCP marker placement on survey site',
    statBadge: 'GCP RMS: 1.02cm',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Data Processing',
    desc: 'Emlid Studio applies PPK corrections to image geotags. Pix4Dmatic runs photogrammetry to generate DSM, point cloud, and orthomosaic. Accuracy verified via RMS error report.',
    tools: ['Emlid Studio', 'Pix4Dmatic', 'Pix4Dsurvey'],
    image: '/images/data-table-checkpoint-rmse.jpg',
    imageAlt: 'RMSE checkpoint accuracy table from field study',
    statBadge: 'RMSE X:0.35" Y:0.34" Z:0.28"',
  },
  {
    number: '04',
    icon: FileDown,
    title: 'CAD Deliverables',
    desc: 'Vectorized features and surface models are exported as DXF files for immediate use in AutoCAD Civil 3D.',
    tools: ['Pix4Dsurvey', 'AutoCAD Civil 3D'],
    image: '/images/survey-orthomosaic-top-down.jpg',
    imageAlt: 'Final orthomosaic deliverable top-down',
    statBadge: '< 1 inch RMS · DXF in 48hrs',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#111111', padding: '120px 48px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            THE PROCESS
          </p>
          <h2
            style={{
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            From Site to Deliverable.
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            A proven 4-step pipeline that produces centimeter-accurate CAD files your engineering team can use immediately.
          </p>
        </motion.div>

        {/* Timeline + Cards */}
        <div style={{ position: 'relative' }}>

          {/* Timeline row */}
          <div
            className="timeline-row"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '22px',
                left: 'calc(12.5%)',
                right: 'calc(12.5%)',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(77,235,255,0.5) 20%, rgba(77,235,255,0.5) 80%, transparent 100%)',
                transformOrigin: 'left center',
              }}
            />

            {/* Step circles */}
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.3 }
                }
                transition={{
                  duration: 0.45,
                  delay: 0.45 + i * 0.15,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '28px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#111111',
                    border: '1.5px solid rgba(77,235,255,0.45)',
                    boxShadow:
                      '0 0 18px rgba(77,235,255,0.2), inset 0 0 12px rgba(77,235,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#4DEBFF',
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step cards */}
          <div
            className="steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
                  }
                  transition={{
                    duration: 0.65,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '220px', flexShrink: 0 }}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, transparent 40%, rgba(10,10,10,0.75) 100%)',
                      }}
                    />
                    {/* Top accent line */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background:
                          'linear-gradient(90deg, transparent, rgba(77,235,255,0.6), transparent)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    {/* Icon + title */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '13px',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(77,235,255,0.08)',
                          border: '1px solid rgba(77,235,255,0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} style={{ color: '#4DEBFF' }} />
                      </div>
                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: '18px',
                          color: '#ffffff',
                          lineHeight: 1.2,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.52)',
                        lineHeight: 1.7,
                        marginBottom: '18px',
                      }}
                    >
                      {step.desc}
                    </p>

                    {/* Tool chips */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '18px',
                      }}
                    >
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '11.5px',
                            color: 'rgba(255,255,255,0.42)',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Stat badge */}
                    <div style={{ marginTop: 'auto' }}>
                      <div
                        style={{
                          backgroundColor: 'rgba(77,235,255,0.07)',
                          border: '1px solid rgba(77,235,255,0.22)',
                          borderRadius: '10px',
                          padding: '10px 14px',
                          fontSize: '12.5px',
                          color: '#4DEBFF',
                          fontWeight: 600,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {step.statBadge}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-row {
            display: none !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 769px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .timeline-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
