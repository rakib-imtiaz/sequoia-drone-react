'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { AlertCircle, Send } from 'lucide-react'

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const inputStyle: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '14px 16px',
  color: '#ffffff',
  fontSize: '15px',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '8px',
}

const serviceOptions = [
  'Aerial Photography & Video',
  'Real Estate Drone Tours',
  'Construction Progress Monitoring',
  'Agricultural & Land Imaging',
  'Inspection Services',
  '3D Mapping & Surveying',
  'Event Coverage',
  'Vancouver Film & Media',
  'Other / Custom Project',
]

export default function LeadForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  useEffect(() => {
    if (!recaptchaKey) return
    if (document.querySelector('script[data-recaptcha-v3]')) return
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`
    script.async = true
    script.defer = true
    script.dataset.recaptchaV3 = 'true'
    document.body.appendChild(script)
  }, [recaptchaKey])

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#E8612A'
    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(232,97,42,0.2)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
    e.currentTarget.style.boxShadow = 'none'
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage(null)
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('_gotcha')) {
      setStatus('idle')
      return
    }

    let recaptchaToken: string | null = null
    if (recaptchaKey && typeof window !== 'undefined' && window.grecaptcha) {
      try {
        await new Promise<void>((resolve) => window.grecaptcha!.ready(resolve))
        recaptchaToken = await window.grecaptcha.execute(recaptchaKey, { action: 'lead_form' })
      } catch {
        // continue without token; Formspree may still accept
      }
    }

    const payload: Record<string, string> = {}
    data.forEach((value, key) => {
      if (typeof value === 'string') payload[key] = value
    })
    if (recaptchaToken) payload['g-recaptcha-response'] = recaptchaToken

    if (!formspreeEndpoint) {
      setStatus('error')
      setErrorMessage(
        'Form endpoint not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment.',
      )
      return
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }
      router.push('/thank-you')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#111111',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#4DEBFF' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                GET A FREE QUOTE
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
              Tell us about your project.
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              We respond to every inquiry within 24 hours. No obligation, no spam — just a clear quote for your aerial work.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
            noValidate
          >
            {/* Honeypot for bots */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
              aria-hidden
            />

            <div className="lead-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Full Name *</label>
                <input id="name" name="name" type="text" required minLength={2} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input id="email" name="email" type="email" required style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            <div className="lead-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone *</label>
                <input id="phone" name="phone" type="tel" required style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <div>
                <label htmlFor="location" style={labelStyle}>Location / City *</label>
                <input id="location" name="location" type="text" required placeholder="Kamloops, Vancouver, etc." style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            <div>
              <label htmlFor="service" style={labelStyle}>Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '10px auto',
                }}
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <option value="" disabled>Select a service…</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Project Description *</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                rows={4}
                placeholder="Tell us about your site, timeline, and what kind of imagery or data you need (min 20 characters)."
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', fontFamily: 'inherit' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <div className="lead-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label htmlFor="referrer" style={labelStyle}>How did you hear about us?</label>
                <select
                  id="referrer"
                  name="referrer"
                  defaultValue=""
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    backgroundSize: '10px auto',
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <option value="">Optional</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <span style={labelStyle}>Preferred Contact</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '4px' }}>
                  {['Email', 'Phone', 'Either'].map((opt, idx) => (
                    <label
                      key={opt}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '999px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.75)',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={opt}
                        defaultChecked={idx === 2}
                        style={{ accentColor: '#E8612A', cursor: 'pointer' }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* CASL Consent (REQUIRED by Canadian anti-spam law) */}
            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.55,
                cursor: 'pointer',
                marginTop: '4px',
              }}
            >
              <input
                type="checkbox"
                name="consent"
                required
                style={{
                  marginTop: '3px',
                  width: '16px',
                  height: '16px',
                  accentColor: '#E8612A',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              />
              <span>
                I agree to the{' '}
                <a href="/privacy" style={{ color: '#4DEBFF', textDecoration: 'underline' }}>Privacy Policy</a>
                {' '}and{' '}
                <a href="/terms" style={{ color: '#4DEBFF', textDecoration: 'underline' }}>Terms &amp; Conditions</a>
                , and consent to being contacted about my inquiry. *
              </span>
            </label>

            {status === 'error' && errorMessage && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(232,97,42,0.08)',
                  border: '1px solid rgba(232,97,42,0.25)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  fontSize: '13px',
                  color: '#ffb38c',
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: '#E8612A',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                padding: '18px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: status === 'submitting' ? 'wait' : 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                boxShadow: '0 8px 24px rgba(232,97,42,0.25)',
                opacity: status === 'submitting' ? 0.7 : 1,
                transition: 'background-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#f27340'
              }}
              onMouseLeave={(e) => {
                if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#E8612A'
              }}
            >
              <Send size={16} />
              {status === 'submitting' ? 'Sending…' : 'Send My Free Quote Request'}
            </button>

            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>
              Protected by reCAPTCHA. Your information is private and never shared.
            </p>
          </form>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .lead-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
