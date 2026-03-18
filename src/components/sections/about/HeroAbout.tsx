'use client'

import { motion } from 'framer-motion'
import StaggerText from '@/components/ui/StaggerText'

export default function HeroAbout() {
  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#0a0a0a', 
        padding: '120px 24px',
        overflow: 'hidden'
      }}
    >
      {/* Animated Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '800px',
          maxHeight: '800px',
          background: 'radial-gradient(circle, rgba(77,235,255,0.15) 0%, rgba(232,97,42,0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ color: '#E8612A', marginBottom: '24px' }}
        >
          OUR STORY
        </motion.p>
        
        <StaggerText 
          text="Engineering the wild. Preserving the precise."
          className="headline"
          tag="h1"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.7)', 
            marginTop: '32px', 
            lineHeight: 1.6,
            maxWidth: '600px',
            marginInline: 'auto'
          }}
        >
          Born in British Columbia, Sequoia Drone Systems was founded to bridge the gap between heavy industry operations and biological preservation. We deliver actionable intelligence from inaccessible terrain.
        </motion.p>
      </div>
    </section>
  )
}
