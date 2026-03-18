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
    desc: 'Mechanical global shutter. 4/3 CMOS. 0.7s capture. 45min flight.',
    image: '/images/hardware-mavic3-enterprise-closeup.jpg',
    alt: 'DJI Mavic 3 Enterprise RTK close-up',
  },
  {
    name: 'Emlid Reach RS3',
    tag: 'Ground Control',
    tagColor: '#E8612A',
    desc: 'Multi-band GNSS. PPK + RTK. 1.02cm base RMS. No internet needed.',
    image: '/images/hardware-mavic3-rc-pro-controller.jpg',
    alt: 'DJI M3E with RC Pro controller on survey ground',
  },
  {
    name: 'Leica BLK2GO',
    tag: 'LiDAR Scanning',
    tagColor: '#4CAF72',
    desc: '420K pts/sec. SLAM. Walk-and-scan. BIM-ready in minutes.',
    image: '/images/hardware-mavic3-hand-launch.jpg',
    alt: 'Drone hardware at survey site',
  },
  {
    name: 'Pix4D Suite',
    tag: 'Processing',
    tagColor: '#4DEBFF',
    desc: 'Pix4Dmatic + Pix4Dsurvey. DSM, orthomosaic, DXF pipeline.',
    image: '/images/data-chart-accuracy-comparison.jpg',
    alt: 'M3E vs Air 2S accuracy comparison chart',
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
                    alt={item.alt}
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
