'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { Map, Leaf, Waves } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Map,
    title: 'Precision Surveying',
    desc: 'Advanced survey-grade data collection for complex industrial landscapes and terrain mapping.',
    borderCol: '#4DEBFF', // Cyan
    image: 'https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=600&q=80',
  },
  {
    icon: Leaf,
    title: 'Ecosystem Management',
    desc: 'Comprehensive monitoring and real-time protection for forest canopies and endangered bio-sectors.',
    borderCol: '#4CAF72', // Green
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  },
  {
    icon: Waves,
    title: 'LiDAR Scanning',
    desc: 'Penetrate dense foliage to map bare earth models. Vital for forestry and floodplain engineering.',
    borderCol: '#E8612A', // Orange
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=600&q=80',
  },
]

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <ScrollReveal>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#666666', textTransform: 'uppercase', marginBottom: '16px' }}>
              Core Disciplines
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
              Two Disciplines. One Platform.
            </h2>
            <p style={{ fontSize: '16px', color: '#888888', maxWidth: '600px', marginTop: '20px', lineHeight: 1.6 }}>
              We fuse precision engineering with deep environmental intelligence, providing a unified dataset for your most complex projects.
            </p>
          </div>
        </ScrollReveal>

        <div 
          className="services-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '32px' 
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <ScrollReveal key={svc.title} delay={i * 0.1}>
                {/* 
                  Using a group class logic directly or via framer-motion approach.
                  We'll use standard motion for onHover interactions.
                */}
                <motion.div 
                  className="service-card group"
                  whileHover="hover"
                  initial="initial"
                  style={{
                    backgroundColor: '#111111',
                    borderRadius: '16px',
                    padding: '40px',
                    borderLeft: `4px solid ${svc.borderCol}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'background-color 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
                >
                  <Icon size={40} style={{ color: svc.borderCol }} />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#888888', lineHeight: 1.6 }}>
                      {svc.desc}
                    </p>
                  </div>

                  {/* Image container that becomes colored on hover */}
                  <div 
                    style={{ 
                      marginTop: '16px', 
                      borderRadius: '12px', 
                      overflow: 'hidden', 
                      height: '160px', 
                      position: 'relative',
                      backgroundColor: '#000'
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { filter: 'grayscale(100%)', opacity: 0.4 },
                        hover: { filter: 'grayscale(0%)', opacity: 1, scale: 1.05 }
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      <Image 
                        src={svc.image} 
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
