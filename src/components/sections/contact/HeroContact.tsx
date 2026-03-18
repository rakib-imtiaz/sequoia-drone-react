'use client'

import { motion } from 'framer-motion'
import StaggerText from '@/components/ui/StaggerText'

export default function HeroContact() {
  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f5f5f2', // surface-light
        padding: '120px 24px 60px',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center', color: '#1a1a1a' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ color: '#E8612A', marginBottom: '24px' }}
        >
          CONTACT US
        </motion.p>
        
        <StaggerText
          text="Start a conversation."
          className="headline"
          tag="h1"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ 
            fontSize: '18px', 
            color: '#666666', 
            marginTop: '24px', 
            lineHeight: 1.6,
            maxWidth: '500px',
            marginInline: 'auto'
          }}
        >
          Whether you need a topographic survey, volume calculation, or environmental intelligence—our team is ready.
        </motion.p>
      </div>
    </section>
  )
}
