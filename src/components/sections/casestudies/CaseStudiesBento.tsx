'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import ClipReveal from '@/components/ui/ClipReveal'
import ParallaxImage from '@/components/ui/ParallaxImage'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const cards = [
  {
    tag: 'Survey & Engineering',
    tagColor: '#4DEBFF',
    tagBg: 'rgba(77,235,255,0.1)',
    title: 'Highway 1 Expansion As-Builts',
    excerpt: 'Detailed topographic mapping matching Civil 3D standards.',
    img: 'https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=600&q=80',
    slug: 'highway-1',
  },
  {
    tag: 'Environmental',
    tagColor: '#4CAF72',
    tagBg: 'rgba(76,175,114,0.1)',
    title: 'Fraser Valley Flood Mapping',
    excerpt: 'Rapid disaster response with accurate elevation models.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    slug: 'fraser-valley',
  },
  {
    tag: 'Survey & Engineering',
    tagColor: '#4DEBFF',
    tagBg: 'rgba(77,235,255,0.1)',
    title: 'Kamloops Mine Volume Calc',
    excerpt: 'Monthly stockpile volumes using PPK drone capture.',
    img: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=600&q=80',
    slug: 'kamloops-mine',
  },
  {
    tag: 'Environmental',
    tagColor: '#4CAF72',
    tagBg: 'rgba(76,175,114,0.1)',
    title: 'Kelowna Vineyard Health',
    excerpt: 'Multispectral analysis for precision irrigation.',
    img: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=600&q=80',
    slug: 'kelowna-vineyard',
  },
]

export default function CaseStudiesBento() {
  return (
    <section style={{ backgroundColor: '#f5f5f2', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div
          className="cs-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            gridAutoRows: 'minmax(200px, auto)',
          }}
        >
          {/* FEATURED CARD */}
          <ScrollReveal>
            <div
              className="featured-card"
              style={{
                gridColumn: '1 / span 2',
                gridRow: '1',
                backgroundColor: '#0a0a0a',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '55% 45%',
                height: '460px',
              }}
            >
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(77,235,255,0.1)',
                    color: '#4DEBFF',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    width: 'fit-content',
                    marginBottom: '24px',
                  }}
                >
                  Survey & Engineering
                </div>
                <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>
                  Topographic Survey —<br />BC Interior Construction Site
                </h3>
                
                <div style={{ display: 'flex', gap: '24px', marginTop: '32px', marginBottom: '40px' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#4DEBFF' }}>±2cm</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>Accuracy</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#4DEBFF' }}>4.2</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>Hectares</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#4DEBFF' }}>48h</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>DXF Delivery</div>
                  </div>
                </div>

                <Link
                  href="/case-studies/bc-interior"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#4DEBFF',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  Read Case Study &rarr;
                </Link>
              </div>

              <div style={{ position: 'relative', height: '100%' }}>
                <ClipReveal delay={0.2}>
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <ParallaxImage
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                      alt="Construction site"
                      speed={30}
                    />
                  </div>
                </ClipReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* STANDARD CARDS */}
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.2 + (i * 0.1)}>
              <motion.div
                whileHover={{ y: -6, borderColor: '#4DEBFF', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e8e4',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div style={{ height: '200px', position: 'relative' }}>
                  <ClipReveal delay={0.1}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </ClipReveal>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div
                    style={{
                      backgroundColor: card.tagBg,
                      color: card.tagColor,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      width: 'fit-content',
                      marginBottom: '16px',
                    }}
                  >
                    {card.tag}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                    {card.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.5, marginBottom: '24px' }}>
                    {card.excerpt}
                  </p>

                  <Link
                    href={`/case-studies/${card.slug}`}
                    style={{
                      marginTop: 'auto',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#E8612A',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    View Project &rarr;
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .cs-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-card {
            grid-column: 1 / -1 !important;
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .featured-card > div:last-child {
            height: 260px !important;
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
