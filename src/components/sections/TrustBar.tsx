'use client'

import { motion } from 'framer-motion'
import { Plane, Star, MapPin, ShieldCheck, BadgeCheck } from 'lucide-react'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

const stats = [
  { icon: Plane,       value: '50+',                 label: 'Flights Completed' },
  { icon: Star,        value: '5-Star',              label: 'Client Rated' },
  { icon: MapPin,      value: 'Kamloops & Vancouver',label: 'Service Coverage' },
  { icon: BadgeCheck,  value: 'RPAS Certified',      label: 'Transport Canada' },
  { icon: ShieldCheck, value: 'Licensed & Insured',  label: '$5M Liability' },
]

export default function TrustBar() {
  return (
    <section
      id="trust"
      aria-label="Trust indicators"
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 48px',
      }}
    >
      <div
        className="trust-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 4px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(77,235,255,0.08)',
                border: '1px solid rgba(77,235,255,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={18} color="#4DEBFF" strokeWidth={2} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 500px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
