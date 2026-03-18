'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Crosshair } from 'lucide-react'

const inputStyle: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  padding: '16px',
  color: '#ffffff',
  fontSize: '15px',
  width: '100%',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
}

const inputFocusStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: '#E8612A',
  boxShadow: '0 0 0 2px rgba(232,97,42,0.2)',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section style={{ backgroundColor: '#111111', padding: '120px 48px' }}>
      <div 
        className="contact-grid"
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 50%) minmax(0, 50%)', 
          gap: '64px',
          alignItems: 'center'
        }}
      >
        {/* LEFT — FORM */}
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '16px' }}>
                Ready to transform your landscape?
              </h2>
              <p style={{ fontSize: '18px', color: '#888888' }}>
                Schedule a consultation with our precision engineering team today.
              </p>
            </div>

            <div style={{ position: 'relative', minHeight: '380px' }}>
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div className="name-email-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    <select
                      required
                      defaultValue=""
                      style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px top 50%', backgroundSize: '12px auto', appearance: 'none' as const }}
                    >
                      <option value="" disabled>Select Industry</option>
                      <option value="surveying">Land Surveying</option>
                      <option value="engineering">Engineering &amp; Construction</option>
                      <option value="forestry">Forestry &amp; Environment</option>
                      <option value="mining">Mining &amp; Industrial</option>
                    </select>

                    <textarea
                      required
                      placeholder="Project Details"
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, { ...inputStyle, resize: 'vertical', minHeight: '120px' })}
                    />

                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      style={{
                        backgroundColor: '#E8612A',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '16px',
                        padding: '20px',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: status === 'submitting' ? 'wait' : 'pointer',
                        transition: 'all 0.3s',
                        boxShadow: '0 8px 24px rgba(232, 97, 42, 0.2)',
                        opacity: status === 'submitting' ? 0.7 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#f27340'
                      }}
                      onMouseLeave={(e) => {
                        if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#E8612A'
                      }}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    style={{
                      backgroundColor: 'rgba(77,235,255,0.05)',
                      border: '1px solid rgba(77,235,255,0.2)',
                      borderRadius: '16px',
                      padding: '48px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px'
                    }}
                  >
                    <CheckCircle2 size={64} color="#4DEBFF" />
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>Message Received</h3>
                    <p style={{ fontSize: '15px', color: '#888888', maxWidth: '300px' }}>
                      Our engineering team will review your project details and contact you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT — IMAGE GRAPHIC */}
        <ScrollReveal delay={0.2}>
          <div style={{ position: 'relative' }}>
            {/* Image container — overflow:hidden only clips the image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <Image
                src="/images/about-drone-pilot-operator-hd.jpg"
                alt="Professional drone operator at survey site"
                fill
                className="object-cover"
                style={{ opacity: 0.6 }}
              />
              {/* Gradient Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(232,97,42,0.1), transparent)' }} />
            </div>

            {/* Glass Card — outside overflow:hidden so it won't be clipped */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                position: 'absolute',
                bottom: '32px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(17,17,17,0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '32px 40px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.12)',
                textAlign: 'center',
                width: '66%',
                boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                zIndex: 2,
              }}
            >
              <Crosshair size={28} color="#4DEBFF" style={{ marginBottom: '4px' }} />
              <h4 style={{ fontSize: 'clamp(44px, 6vw, 64px)', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
                &lt; 1&quot;
              </h4>
              <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                RMS Absolute Accuracy
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>
                DroneDeploy M3E Study
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
          }
        }
        @media (max-width: 600px) {
          .name-email-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
