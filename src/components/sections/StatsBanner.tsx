'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: 0.43, prefix: '', suffix: '"', label: 'BEST RMS ACCURACY', decimal: 2 },
  { value: 3, prefix: '', suffix: 'x', label: 'LESS ERROR VS STANDARD GPS', decimal: 0 },
  { value: 30, prefix: '', suffix: '%+', label: 'FASTER MISSION SPEED', decimal: 0 },
  { value: 48, prefix: '', suffix: 'hrs', label: 'FIELD TO CAD TURNAROUND', decimal: 0 },
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
                <div
                  style={{
                    fontSize: 'clamp(40px,6vw,64px)',
                    fontWeight: 700,
                    color: '#4DEBFF',
                    lineHeight: 1,
                    fontFamily: 'inherit',
                  }}
                >
                  {stat.prefix}
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimal}
                      separator=","
                    />
                  ) : (
                    '0'
                  )}
                  {stat.suffix}
                </div>

                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.12em',
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

        <p style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '24px' }}>
          Source: DroneDeploy M3E RTK Accuracy Study, 2023 · 60 maps · 30 flights · 20-acre site
        </p>
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
