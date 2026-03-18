'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: 2, prefix: '±', suffix: 'cm', label: 'Positional Accuracy', decimal: 0 },
  { value: 100, prefix: '', suffix: '%', label: 'CAD-Ready Deliverables', decimal: 0 },
  { value: null, display: 'BC', label: 'Primary Service Region' },
  { value: null, display: 'PPK+RTK', label: 'GNSS Methods Supported' },
]

export default function StatsBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#111111', padding: '64px 48px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div
                style={{
                  padding: '24px 32px',
                  borderRight:
                    i < stats.length - 1
                      ? '1px solid rgba(255,255,255,0.08)'
                      : 'none',
                  textAlign: 'center',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontSize: 'clamp(40px,6vw,64px)',
                    fontWeight: 700,
                    color: '#4DEBFF',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                  }}
                >
                  {stat.display ? (
                    stat.display
                  ) : (
                    <>
                      {stat.prefix}
                      {inView ? (
                        <CountUp
                          end={stat.value as number}
                          duration={2.5}
                          decimals={stat.decimal}
                          separator=","
                        />
                      ) : (
                        '0'
                      )}
                      {stat.suffix}
                    </>
                  )}
                </div>

                {/* Label */}
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '12px',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
