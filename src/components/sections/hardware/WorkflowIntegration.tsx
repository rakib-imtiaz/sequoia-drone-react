'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Plane, Radio, Layers, Map, FileStack, DraftingCompass } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const workflowSteps = [
  { label: 'DJI Drone', icon: Plane },
  { label: 'Emlid RS3', icon: Radio },
  { label: 'Emlid Studio', icon: Layers },
  { label: 'Pix4Dmatic', icon: Map },
  { label: 'Pix4Dsurvey', icon: FileStack },
  { label: 'Civil 3D', icon: DraftingCompass },
]

export default function WorkflowIntegration() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'center center'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#111111', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px,4vw,40px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              How It All Connects.
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>
              The complete pipeline from flight to deliverable.
            </p>
          </div>
        </ScrollReveal>

        {/* WORKFLOW DIAGRAM */}
        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '1000px', paddingBottom: '32px' }}>
          {/* Animated Connecting Line */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: '28px',
              left: '40px',
              right: '40px',
              height: '2px',
              background: 'rgba(255,255,255,0.06)',
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: '#4DEBFF',
                scaleX,
                transformOrigin: '0%',
                boxShadow: '0 0 12px rgba(77,235,255,0.4)',
                position: 'relative',
              }}
            >
              {/* Arrow Head */}
              <div
                style={{
                  position: 'absolute',
                  right: '-4px',
                  top: '-4px',
                  width: '0',
                  height: '0',
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '8px solid #4DEBFF',
                }}
              />
            </motion.div>
          </div>

          <div
            className="workflow-nodes"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {workflowSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.label} delay={i * 0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: '#161616',
                        border: '1.5px solid rgba(255,255,255,0.15)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: i < 2 ? '#E8612A' : (i < 5 ? '#4CAF72' : '#4DEBFF'),
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                        e.currentTarget.style.boxShadow = '0 0 16px rgba(255,255,255,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.65)', textAlign: 'center' }}>
                      {step.label}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* 3 STATS HIGHLIGHTS */}
        <div
          ref={statsRef}
          className="stats-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '80px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '64px',
          }}
        >
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
              ±{inView ? <CountUp end={2} duration={2} /> : '0'}cm
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Accuracy Achieved
            </p>
          </div>
          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
              {inView ? <CountUp end={420} duration={2} /> : '0'}K
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pts/Sec Capture
            </p>
          </div>
          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 700, color: '#4DEBFF', lineHeight: 1 }}>
              &lt;{inView ? <CountUp end={24} duration={2} /> : '0'}h
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              DXF Ready
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .workflow-nodes {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
            padding-left: 20px !important;
            border-left: 2px solid rgba(255,255,255,0.06) !important;
          }
          .workflow-nodes > div {
            width: auto !important;
            flex-direction: row !important;
            align-items: center !important;
            transform: translateX(-50px) !important; /* pull left to overlap border */
          }
          .stats-row {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
