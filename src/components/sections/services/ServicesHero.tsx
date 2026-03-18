'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParallaxImage from '@/components/ui/ParallaxImage'
import StaggerText from '@/components/ui/StaggerText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        padding: '120px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1518002052184-f7a6bc8279bb?w=1600&q=80"
          alt="Aerial view abstract landscape mapping"
          speed={100}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)' }} />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ color: '#E8612A', marginBottom: '24px' }}
        >
          WHAT WE DO
        </motion.p>

        <StaggerText
          text="Survey-Grade Intelligence. At Every Scale."
          className="headline"
          tag="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            lineHeight: 1.6,
            marginTop: '24px',
          }}
        >
          Two interconnected disciplines — precision land surveying and environmental
          intelligence — delivered as a complete service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <MagneticButton
            style={{
              backgroundColor: '#E8612A',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '15px',
              padding: '14px 32px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            } as React.CSSProperties}
          >
            Get a Quote
          </MagneticButton>

          <Link
            href="/case-studies"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 500,
              fontSize: '15px',
              padding: '14px 32px',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
            }}
          >
            View Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
