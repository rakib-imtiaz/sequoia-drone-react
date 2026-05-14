'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Star, Quote } from 'lucide-react'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

type Review = {
  quote: string
  name: string
  role: string
  rating: number
}

// NOTE: Replace with real Google Business / verified client reviews before launch.
// Fabricated reviews violate Google Ads policy.
const reviews: Review[] = [
  {
    quote:
      'Sequoia delivered our Kamloops listing photos within 48 hours. The aerial shots booked the property in 9 days, well above our usual market time.',
    name: 'Jordan M.',
    role: 'Real Estate Agent, Kamloops',
    rating: 5,
  },
  {
    quote:
      'Monthly construction progress flyovers have been a game-changer for our investor reports. Professional, reliable, and the imagery quality is excellent.',
    name: 'Priya R.',
    role: 'Project Manager, BC Interior Builders',
    rating: 5,
  },
  {
    quote:
      'They handled all the NAV CANADA permits for our Lower Mainland shoot. Insured, certified, and easy to work with. Exactly what a commercial production needs.',
    name: 'Daniel K.',
    role: 'Producer, Vancouver Film & Media',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#111111',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#4DEBFF' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                CLIENT REVIEWS
              </span>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#4DEBFF' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Trusted Across <span style={{ color: '#4DEBFF', fontStyle: 'italic' }}>BC.</span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Real results from real estate agents, construction managers, and creative producers across the BC Interior and Greater Vancouver.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              style={{
                position: 'relative',
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(77,235,255,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <Quote
                size={28}
                color="#4DEBFF"
                style={{ opacity: 0.35 }}
                aria-hidden
              />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px' }} aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    color={idx < review.rating ? '#E8612A' : 'rgba(255,255,255,0.15)'}
                    fill={idx < review.rating ? '#E8612A' : 'transparent'}
                  />
                ))}
              </div>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.78)',
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                  {review.name}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                  {review.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
