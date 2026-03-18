'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudyDetail() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'center center'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <article>
      {/* ========================================================= */}
      {/* HERO (white)                                              */}
      {/* ========================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '160px 48px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <div style={{ fontSize: '13px', color: '#999999', marginBottom: '24px' }}>
              <Link href="/case-studies" style={{ color: 'inherit', textDecoration: 'none' }}>
                Case Studies
              </Link>{' '}
              &gt; Topographic Survey — BC Interior
            </div>

            {/* Tag Pill */}
            <div
              style={{
                backgroundColor: 'rgba(77,235,255,0.1)',
                color: '#00b8cc', // Darker cyan for light background contrast
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 600,
                width: 'fit-content',
                marginBottom: '20px',
              }}
            >
              Survey & Engineering
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.1,
                maxWidth: '900px',
                marginBottom: '32px',
              }}
            >
              Topographic Survey — BC Interior Construction Site
            </h1>

            {/* Stats Bar */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
              {[
                { label: 'Accuracy', val: '±2cm RMS' },
                { label: 'Area', val: '4.2 Hectares' },
                { label: 'Timeline', val: '48 Hours' },
                { label: 'Format', val: 'Civil 3D DXF' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: '#1a1a1a',
                    padding: '12px 20px',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>{stat.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <div style={{ position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden' }}>
            <ClipReveal delay={0.2}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=1600&q=80"
                  alt="Site aerial map"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 1 — The Challenge (white)                           */}
      {/* ========================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 48px 120px' }}>
        <div
          className="challenge-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <ScrollReveal>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
              The Challenge
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.7, marginBottom: '20px' }}>
              The client needed an accurate topographic map of a complex 4.2-hectare site slated for new infrastructure. Traditional ground surveying was ruled out due to deep ravines, active heavy machinery crossing the site, and a tight 3-day deadline before breaking ground.
            </p>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.7 }}>
              Accuracy requirements dictated ±3cm RMS max error for the subgrade volumetric calculations, and the final deliverable had to drop cleanly into their existing AutoCAD Civil 3D workflow without requiring coordinate transformations.
            </p>
          </ScrollReveal>

          <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
              alt="Heavy machinery on site"
              speed={40}
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 — Our Approach (dark)                             */}
      {/* ========================================================= */}
      <section ref={sectionRef} style={{ backgroundColor: '#0a0a0a', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', marginBottom: '64px', textAlign: 'center' }}>
              Our Approach
            </h2>
          </ScrollReveal>

          <div style={{ position: 'relative', margin: '0 auto' }}>
            <div
              className="hidden md:block"
              style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '2px', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}
            >
              <motion.div style={{ height: '100%', background: '#4DEBFF', scaleX, transformOrigin: '0%' }} />
            </div>

            <div
              className="approach-nodes"
              style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}
            >
              {[
                { title: 'Control', desc: 'Emlid RS3 base station over known NGS monument.' },
                { title: 'Flight', desc: 'Mavic 3E. Terrain aware, 50m AGL, cross-hatch.' },
                { title: 'Fix', desc: 'PPK workflow in Emlid Studio to fix image coordinates.' },
                { title: 'Process', desc: 'Pix4Dmatic for DSM and orthomosaic generation.' },
              ].map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#1a1a1a', border: '1.5px solid #4DEBFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4DEBFF', fontWeight: 700, fontSize: '16px', marginBottom: '24px' }}>
                      {i + 1}
                    </div>
                    <h4 style={{ fontWeight: 600, fontSize: '18px', color: '#ffffff', marginBottom: '8px' }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4 — Results (white)                                 */}
      {/* ========================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', marginBottom: '64px' }}>
              The Results
            </h2>
          </ScrollReveal>

          <div
            ref={statsRef}
            className="results-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
            }}
          >
            {/* Stat 1 */}
            <div>
              <div style={{ fontSize: 'clamp(40px,6vw,64px)', fontWeight: 700, color: '#E8612A', lineHeight: 1 }}>
                ±{inView ? <CountUp end={1.8} decimals={1} duration={2} /> : '0'}cm
              </div>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginTop: '16px' }}>
                Verified Accuracy
              </p>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Exceeded the 3cm requirement. Verified via independent check shots.
              </p>
            </div>
            {/* Stat 2 */}
            <div>
              <div style={{ fontSize: 'clamp(40px,6vw,64px)', fontWeight: 700, color: '#E8612A', lineHeight: 1 }}>
                {inView ? <CountUp end={2.5} decimals={1} duration={2} /> : '0'}h
              </div>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginTop: '16px' }}>
                Time on Site
              </p>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Zero disruption to active heavy machinery traffic.
              </p>
            </div>
            {/* Stat 3 */}
            <div>
              <div style={{ fontSize: 'clamp(40px,6vw,64px)', fontWeight: 700, color: '#E8612A', lineHeight: 1 }}>
                {inView ? <CountUp end={48} duration={2} /> : '0'}h
              </div>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginTop: '16px' }}>
                Turnaround Time
              </p>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Full Civil 3D DXF contours delivered to engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA (dark)                                           */}
      {/* ========================================================= */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '100px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#ffffff', marginBottom: '32px' }}>
          Ready to achieve similar results?
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              backgroundColor: '#E8612A',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Start a Similar Project
          </button>
          <Link
            href="/case-studies"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 500,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '999px',
              textDecoration: 'none',
            }}
          >
            View All Case Studies
          </Link>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .challenge-grid {
            grid-template-columns: 1fr !important;
          }
          .approach-nodes {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 48px !important;
            padding-left: 20px;
            border-left: 2px solid rgba(255,255,255,0.06);
          }
          .approach-nodes > div {
            flex-direction: row !important;
            width: auto !important;
            text-align: left !important;
            transform: translateX(-44px);
            align-items: flex-start !important;
            gap: 20px;
          }
          .approach-nodes h4 {
            margin-top: 12px;
          }
          .results-stats {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </article>
  )
}
