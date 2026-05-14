'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Check, ArrowRight } from 'lucide-react'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

type Tier = {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaLabel: string
  envKey: 'NEXT_PUBLIC_STRIPE_LINK_STARTER' | 'NEXT_PUBLIC_STRIPE_LINK_STANDARD' | 'NEXT_PUBLIC_STRIPE_LINK_PROFESSIONAL' | null
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: 'From $199',
    cadence: 'per project',
    description: 'Quick aerial coverage for small listings and single-asset captures.',
    features: ['Up to 30 min flight', 'Basic edit', '10 photos OR 1 short clip', 'Kamloops area'],
    ctaLabel: 'Book Starter',
    envKey: 'NEXT_PUBLIC_STRIPE_LINK_STARTER',
  },
  {
    name: 'Standard',
    price: 'From $399',
    cadence: 'per project',
    description: 'Our most popular package for full-property real estate and small construction.',
    features: ['1 hour flight', 'Full edit', '25 photos + 60–90 sec video', 'Kamloops area'],
    highlighted: true,
    ctaLabel: 'Book Standard',
    envKey: 'NEXT_PUBLIC_STRIPE_LINK_STANDARD',
  },
  {
    name: 'Professional',
    price: 'From $799',
    cadence: 'per project',
    description: 'Multi-flight days, 4K motion-graphics video, and BC Interior travel.',
    features: ['Multi-flight, full day', '4K video + photo package', 'BC Interior coverage', 'Same-week priority'],
    ctaLabel: 'Book Professional',
    envKey: 'NEXT_PUBLIC_STRIPE_LINK_PROFESSIONAL',
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    cadence: 'custom quote',
    description: 'Large-scale mapping, inspections, Vancouver projects, and recurring contracts.',
    features: ['Multi-day deployments', 'Recurring retainer pricing', 'Vancouver / Lower Mainland', 'Dedicated project manager'],
    ctaLabel: 'Request Custom Quote',
    envKey: null,
  },
]

export default function Pricing() {
  const handleCta = (tier: Tier) => {
    if (tier.envKey) {
      const url = process.env[tier.envKey]
      if (url) {
        window.location.href = url
        return
      }
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: '#0a0a0a',
        padding: '120px 48px',
        position: 'relative',
      }}
    >
      {/* subtle glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(232,97,42,0.04) 0%, rgba(10,10,10,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#4DEBFF' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                TRANSPARENT PRICING
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
              Starting Prices. <span style={{ color: '#4DEBFF', fontStyle: 'italic' }}>Honest Quotes.</span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Every project is unique. These are floor prices. Book directly with Stripe, or request a custom quote.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Grid */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              style={{
                position: 'relative',
                backgroundColor: tier.highlighted ? 'rgba(77,235,255,0.04)' : '#111111',
                border: tier.highlighted
                  ? '1px solid rgba(77,235,255,0.35)'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                boxShadow: tier.highlighted ? '0 16px 48px rgba(77,235,255,0.08)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                if (!tier.highlighted) e.currentTarget.style.borderColor = 'rgba(77,235,255,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                if (!tier.highlighted) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {tier.highlighted && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '24px',
                    backgroundColor: '#E8612A',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    padding: '5px 12px',
                    borderRadius: '999px',
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              {/* Tier name */}
              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.55,
                    minHeight: '40px',
                  }}
                >
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: tier.highlighted ? '#4DEBFF' : '#ffffff',
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                  {tier.cadence}
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {tier.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                    <Check size={14} color="#4DEBFF" style={{ flexShrink: 0, marginTop: '3px' }} strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => handleCta(tier)}
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  backgroundColor: tier.highlighted ? '#E8612A' : 'transparent',
                  color: '#ffffff',
                  border: tier.highlighted ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '999px',
                  padding: '14px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background-color 0.2s, border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.backgroundColor = '#f27340'
                  } else {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(77,235,255,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.highlighted) {
                    e.currentTarget.style.backgroundColor = '#E8612A'
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }
                }}
              >
                {tier.ctaLabel}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Compliance footnote */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.35)',
            marginTop: '40px',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Prices in CAD. Applicable GST/PST added at checkout. Cancellation & refund policy applies. See footer.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
