'use client'

import { motion } from 'framer-motion'
import { TreePine, Layers, Activity, Eye } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

const cards = [
  {
    icon: TreePine,
    title: 'Canopy Analysis',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
  },
  {
    icon: Layers,
    title: 'Soil Health Mapping',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80',
  },
  {
    icon: Activity,
    title: 'Forestry Assessment',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80',
  },
  {
    icon: Eye,
    title: 'Environmental Monitoring',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
]

export default function EnvDetail() {
  return (
    <section style={{ backgroundColor: '#111111', padding: '100px 48px' }}>
      <div
        className="env-detail-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — 2x2 GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    backgroundColor: '#161616',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '20px 20px 0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    cursor: 'default',
                    minHeight: '260px',
                  }}
                >
                  {/* Accent border left */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      backgroundColor: '#4CAF72',
                      borderRadius: '16px 0 0 16px',
                    }}
                  />

                  <Icon size={24} style={{ color: '#4CAF72' }} />
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: '15px',
                      color: '#ffffff',
                      marginTop: '12px',
                    }}
                  >
                    {card.title}
                  </h3>

                  <div
                    style={{
                      marginTop: 'auto',
                      height: '140px',
                      position: 'relative',
                      marginLeft: '-20px',
                      marginRight: '-20px',
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover grayscale opacity-60"
                      style={{ transition: 'all 0.4s' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0)'
                        e.currentTarget.style.opacity = '1'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%)'
                        e.currentTarget.style.opacity = '0.6'
                      }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* RIGHT — TEXT OVERVIEW */}
        <div>
          <ScrollReveal>
            <p className="eyebrow" style={{ color: '#4CAF72', marginBottom: '16px' }}>
              ENVIRONMENTAL INTELLIGENCE
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '24px',
              }}
            >
              Aerial Data for Living Landscapes.
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.6,
                maxWidth: '440px',
                marginBottom: '40px',
              }}
            >
              Multispectral and thermal imaging helps land managers, forestry teams,
              and agricultural operations make decisions grounded in real field data.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['Multispectral', 'Thermal', 'NDVI', 'LiDAR + RGB'].map((tool, i) => (
                <div
                  key={tool}
                  style={{
                    backgroundColor: 'rgba(76,175,114,0.08)',
                    border: '1px solid #4CAF72',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    color: '#4CAF72',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .env-detail-grid {
            grid-template-columns: 1fr !important;
          }
          /* Reverse order on mobile: Text on top, grid below */
          .env-detail-grid > div:last-child {
            grid-row: 1;
            margin-bottom: 24px;
          }
          .env-detail-grid > div:first-child {
            grid-row: 2;
          }
        }
        @media (max-width: 600px) {
          .env-detail-grid > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
