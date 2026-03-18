'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const hardwareItems = [
  {
    name: 'DJI Mavic 3 Enterprise',
    tag: 'Aerial Survey',
    tagColor: '#4DEBFF',
    desc: 'The gold standard for wide-area topographical mapping globally.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
  },
  {
    name: 'Emlid Reach RS3',
    tag: 'Ground Control',
    tagColor: '#E8612A',
    desc: 'Multi-band RTK/PPK GNSS receiver providing centimeter-level accuracy.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    name: 'Leica BLK2GO',
    tag: 'LiDAR Scanning',
    tagColor: '#4CAF72',
    desc: 'Handheld imaging laser scanner for rapid, agile mobile reality capture.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    name: 'Pix4D Suite',
    tag: 'Processing',
    tagColor: '#4DEBFF',
    desc: 'Advanced photogrammetry software translating raw data into 3D models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export default function HardwareShowcase() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '16px' }}>
                The Fleet
              </h2>
              <p style={{ fontSize: '16px', color: '#888888', maxWidth: '500px' }}>
                High-performance hardware and software chosen specifically for BC&apos;s extreme environments.
              </p>
            </div>
            
            <Link 
              href="/hardware"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#E8612A',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '16px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '8px'
              }}
            >
              View All Fleet <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {hardwareItems.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <motion.div 
                className="group"
                style={{ 
                  position: 'relative', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  aspectRatio: '16/9',
                  backgroundColor: '#111111'
                }}
              >
                {/* Image scaling on hover */}
                <motion.div
                  style={{ position: 'absolute', inset: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
                >
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Dark gradient overlay */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
                    pointerEvents: 'none'
                  }} 
                />

                {/* Content */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <span 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: item.tagColor,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      width: 'fit-content',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${item.tagColor}40`
                    }}
                  >
                    {item.tag}
                  </span>
                  
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#ffffff' }}>
                    {item.name}
                  </h3>
                  
                  <p style={{ fontSize: '15px', color: '#a0a0a0', maxWidth: '380px', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
