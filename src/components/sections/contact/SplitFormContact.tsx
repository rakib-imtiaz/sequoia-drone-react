'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { useState } from 'react'
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'

export default function SplitFormContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section style={{ backgroundColor: '#f5f5f2', padding: '0 48px 120px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div 
            className="contact-split"
            style={{ 
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e8e8e4',
              display: 'flex',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0,0,0,0.03)'
            }}
          >
            {/* LEFT — INFO */}
            <div 
              style={{ 
                flex: '0 0 40%', 
                backgroundColor: '#0a0a0a', 
                color: '#ffffff',
                padding: '64px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>
                  Get in Touch
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '48px' }}>
                  We operate across the entire province of British Columbia. Contact our operations team to discuss your project scope.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Mail size={24} color="#E8612A" />
                    <div>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Email</p>
                      <a href="mailto:hello@sequoiadrone.ca" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
                        hello@sequoiadrone.ca
                      </a>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <MapPin size={24} color="#E8612A" />
                    <div>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Headquarters</p>
                      <p style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>
                        British Columbia, Canada
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Phone size={24} color="#E8612A" />
                    <div>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Emergency / Rush</p>
                      <p style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>
                        Available for urgent assessments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div style={{ flex: '1', padding: '64px 48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a', marginBottom: '32px' }}>
                Project Inquiry
              </h3>

              {status === 'success' ? (
                <div style={{ padding: '48px 0', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f6eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <ArrowUpRight size={32} color="#4CAF72" />
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Message Sent</h4>
                  <p style={{ color: '#666666' }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>First Name</label>
                      <input required type="text" className="contact-input" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>Last Name</label>
                      <input required type="text" className="contact-input" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>Email</label>
                    <input required type="email" className="contact-input" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>Project Type</label>
                    <select required className="contact-input">
                      <option value="">Select an option</option>
                      <option value="survey">Topographic Survey</option>
                      <option value="environment">Environmental / Forestry</option>
                      <option value="inspection">Industrial Inspection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>Message</label>
                    <textarea required rows={4} className="contact-input" style={{ resize: 'vertical' }} />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '15px',
                      padding: '16px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: status === 'loading' ? 'wait' : 'pointer',
                      marginTop: '16px',
                      opacity: status === 'loading' ? 0.7 : 1,
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if(status !== 'loading') e.currentTarget.style.backgroundColor = '#E8612A'
                    }}
                    onMouseLeave={(e) => {
                      if(status !== 'loading') e.currentTarget.style.backgroundColor = '#1a1a1a'
                    }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .contact-input {
          background-color: #f5f5f2;
          border: 1px solid #e8e8e4;
          border-radius: 8px;
          padding: 14px 16px;
          font-size: 15px;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.2s, background-color 0.2s;
          font-family: inherit;
        }
        .contact-input:focus {
          border-color: #E8612A;
          background-color: #ffffff;
        }
        select.contact-input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 16px top 50%;
          background-size: 10px auto;
        }

        @media (max-width: 900px) {
          .contact-split {
            flex-direction: column;
          }
          .contact-split > div {
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
