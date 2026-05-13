'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CalendarClock, Mail } from 'lucide-react'

declare global {
  interface Window {
    Calendly?: unknown
  }
}

export default function BookingCalendly() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || ''

  useEffect(() => {
    if (!calendlyUrl) return
    if (window.Calendly) {
      setLoaded(true)
      return
    }
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    )
    if (existing) {
      existing.addEventListener('load', () => setLoaded(true))
      return
    }
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)
  }, [calendlyUrl])

  return (
    <section
      id="booking"
      style={{
        backgroundColor: '#0a0a0a',
        padding: '120px 48px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <CalendarClock size={16} color="#4DEBFF" />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                BOOK A FLIGHT
              </span>
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
              Reserve Your Drone Flight
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
              Choose a time that works for you. We confirm within 24 hours and handle airspace clearance for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '16px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              overflow: 'hidden',
            }}
          >
            {calendlyUrl ? (
              <>
                <div
                  ref={widgetRef}
                  className="calendly-inline-widget"
                  data-url={calendlyUrl}
                  style={{ minWidth: '320px', height: '720px', borderRadius: '16px', overflow: 'hidden' }}
                />
                {!loaded && (
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      padding: '24px',
                    }}
                  >
                    Loading booking calendar…
                  </p>
                )}
              </>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '64px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <CalendarClock size={48} color="#4DEBFF" strokeWidth={1.5} />
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff' }}>
                  Booking calendar setup pending
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', maxWidth: '420px', lineHeight: 1.6 }}>
                  Set <code style={{ color: '#4DEBFF' }}>NEXT_PUBLIC_CALENDLY_URL</code> in your environment to enable inline scheduling. Configure the Calendly redirect to <code style={{ color: '#4DEBFF' }}>/thank-you</code> for Google Ads conversion tracking.
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#E8612A',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: '12px 22px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    marginTop: '8px',
                  }}
                >
                  <Mail size={14} /> Request a Quote Instead
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
