'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ClipboardList, Radio, Cpu, FileDown } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Flight Planning',
    desc: 'Polygon mission, 80/70 overlap. DJI Pilot 2 app.',
  },
  {
    number: '02',
    icon: Radio,
    title: 'Ground Control',
    desc: 'Emlid RS3 base station. PPK raw data logging in field.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Processing',
    desc: 'Emlid Studio PPK correction + Pix4Dmatic photogrammetry.',
  },
  {
    number: '04',
    icon: FileDown,
    title: 'Deliverables',
    desc: 'DXF, orthomosaic, point cloud — formatted for your workflow.',
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
      style={{ backgroundColor: '#0a0a0a', padding: '80px 48px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <p
            className="eyebrow"
            style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}
          >
            THE PROCESS
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            Simple Steps. Precise Results.
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div
          style={{
            marginTop: '60px',
            position: 'relative',
          }}
        >
          {/* Animated connecting line */}
          <div
            className="connecting-line"
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              height: '1.5px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '1px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #4DEBFF, #4CAF72)',
                scaleX,
                transformOrigin: '0%',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Step cards */}
          <div
            className="steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={i * 0.1} y={30}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Icon above badge */}
                    <Icon
                      size={20}
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    />
                    {/* Number badge */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '1.5px solid #4DEBFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#4DEBFF',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: '#ffffff',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.55,
                      }}
                    >
                      {step.desc}
                    </p>
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
