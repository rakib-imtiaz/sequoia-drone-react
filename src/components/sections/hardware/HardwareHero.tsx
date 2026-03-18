'use client'

import { motion } from 'framer-motion'
import StaggerText from '@/components/ui/StaggerText'

export default function HardwareHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        padding: '120px 24px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Abstract dark point cloud or grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ color: '#E8612A', marginBottom: '24px' }}
        >
          THE FLEET
        </motion.p>

        <StaggerText
          text="Precision Hardware. Built for BC Terrain."
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
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Every tool chosen for accuracy, reliability, and integration into
          survey-grade workflows.
        </motion.p>
      </div>
    </section>
  )
}
