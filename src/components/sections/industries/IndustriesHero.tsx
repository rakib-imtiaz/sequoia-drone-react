'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

export default function IndustriesHero() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        minHeight: '60vh',
        paddingTop: '120px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="industries-hero-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '40px',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: '#E8612A', flexShrink: 0 }} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E8612A',
              }}
            >
              WHO WE SERVE
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 5vw, 60px)',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Built for <span style={{ color: '#4DEBFF', textShadow: '0 0 1px rgba(0,0,0,0.1)' }}>BC&apos;s</span> Most
            Demanding Sectors.
          </h1>

          <p
            style={{
              fontSize: '15px',
              color: '#666666',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '32px',
            }}
          >
            We deploy advanced aerial sensoring and geospatial expertise to meet the exact
            regulatory and accuracy requirements of Western Canada&apos;s leading industries.
          </p>

          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '14px',
              padding: '12px 28px',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333333')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
          >
            View All Services &rarr;
          </Link>
        </motion.div>

        {/* RIGHT — 2x2 IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}
        >
          {/* Top Left */}
          <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden', transform: 'translateY(16px)' }}>
            <Image
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80"
              alt="BC Forest Canopy"
              fill
              className="object-cover"
            />
          </div>
          {/* Top Right */}
          <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80"
              alt="Construction Site"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom Left */}
          <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden', transform: 'translateY(16px)' }}>
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80"
              alt="Farmland"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom Right */}
          <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=400&q=80"
              alt="Mining Site"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM TICKER */}
      <div
        style={{
          marginTop: '64px',
          backgroundColor: '#f5f5f2',
          height: '48px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          borderTop: '1px solid #e8e8e4',
          borderBottom: '1px solid #e8e8e4',
        }}
      >
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            gap: '32px',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1a1a1a',
                letterSpacing: '0.06em',
                display: 'inline-flex',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              <span>Land Surveying</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
              <span>Engineering</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
              <span>Forestry</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
              <span>Mining</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
              <span>Agriculture</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
              <span>Municipal</span>
              <span style={{ color: '#E8612A' }}>&bull;</span>
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .industries-hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
