'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ClipboardList, Radio, Cpu, FileDown } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#111111', padding: '100px 48px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              THE PROCESS
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              From Site to Deliverable.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              A proven 4-step pipeline that produces centimeter-accurate CAD files your engineering team can use immediately.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Animated connecting line */}
          <div
            className="connecting-line"
            style={{
              position: 'absolute',
              top: '26px',
              left: '13%',
              right: '13%',
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #4DEBFF, #4CAF72)',
                scaleX,
                transformOrigin: '0%',
              }}
            />
          </div>

          {/* Step cards */}
          <div
            className="steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLast = i === steps.length - 1
              return (
                <ScrollReveal key={step.number} delay={i * 0.1} y={30}>
                  <div
                    style={{
                      padding: '32px 24px',
                      position: 'relative',
                      borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Watermark number */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '24px',
                        fontSize: '64px',
                        fontWeight: 700,
                        color: 'rgba(77,235,255,0.08)',
                        lineHeight: 1,
                        userSelect: 'none',
                        zIndex: 0,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* Icon circle */}
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(77,235,255,0.08)',
                          border: '1.5px solid rgba(77,235,255,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} style={{ color: '#4DEBFF' }} />
                      </div>

                      <h3
                        style={{
                          fontWeight: 600,
                          fontSize: '20px',
                          color: '#ffffff',
                          marginTop: '20px',
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.55)',
                          lineHeight: 1.65,
                          marginTop: '12px',
                        }}
                      >
                        {step.desc}
                      </p>

                      {/* Tools */}
                      <div style={{ marginTop: '16px' }}>
                        <div
                          style={{
                            fontSize: '10px',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '6px',
                          }}
                        >
                          TOOLS:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {step.tools.map((tool) => (
                            <span
                              key={tool}
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '6px',
                                padding: '3px 10px',
                                fontSize: '11px',
                                color: 'rgba(255,255,255,0.45)',
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Thumbnail */}
                      <div style={{ position: 'relative', width: '100%', height: '80px', borderRadius: '8px', overflow: 'hidden', marginTop: '12px' }}>
                        <Image src={step.image} alt={step.imageAlt} fill className="object-cover" />
                      </div>

                      {/* Stat badge */}
                      <div
                        style={{
                          marginTop: '8px',
                          backgroundColor: 'rgba(77,235,255,0.05)',
                          border: '1px solid rgba(77,235,255,0.15)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '11px',
                          color: '#4DEBFF',
                          fontWeight: 500,
                        }}
                      >
                        {step.statBadge}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
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
          .connecting-line {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
