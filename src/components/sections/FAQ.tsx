'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do you fly in Kamloops and Vancouver?',
    a: 'Yes, we serve Kamloops, the BC Interior, and the Greater Vancouver area. Travel surcharges may apply for projects outside the Thompson-Okanagan or Lower Mainland.',
  },
  {
    q: 'Are you Transport Canada certified?',
    a: 'Yes. All of our pilots hold valid RPAS Advanced or Basic Operator certificates issued by Transport Canada.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'We recommend booking 3 to 5 business days in advance. Same-week bookings are sometimes available, so call us to check availability.',
  },
  {
    q: 'What happens if the weather is bad?',
    a: 'We reschedule at no charge with 24-hour notice. Safety and image quality come first; we will never push a flight that produces poor results.',
  },
  {
    q: 'Do I need permits?',
    a: 'No. We handle all necessary airspace authorizations, including NAV CANADA approvals and any required park or municipal permits.',
  },
  {
    q: 'How do I receive my files?',
    a: 'Final photos, videos, and survey deliverables are delivered via a private cloud download link within 48–72 hours of the flight.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellation 48+ hours before flight: full deposit refund. 24–48 hours: 50% refund. Inside 24 hours or same-day: no refund. See our Cancellation & Refund Policy for full details.',
  },
  {
    q: 'Do you offer packages for recurring work?',
    a: 'Yes. For construction progress monitoring, recurring real estate clients, and inspection contracts, we offer monthly retainer pricing. Contact us for details.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: '17px',
          fontWeight: 600,
          textAlign: 'left',
          cursor: 'pointer',
          fontFamily: 'inherit',
          letterSpacing: '-0.01em',
          gap: '24px',
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: '32px',
            height: '32px',
            borderRadius: '999px',
            backgroundColor: isOpen ? '#4DEBFF' : 'rgba(255,255,255,0.06)',
            color: isOpen ? '#0a0a0a' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s, color 0.2s',
          }}
        >
          {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      >
        <p
          style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.7,
            paddingBottom: '24px',
            paddingRight: '56px',
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#0a0a0a',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: '#4DEBFF' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                FREQUENT QUESTIONS
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
              }}
            >
              Questions, <span style={{ color: '#4DEBFF', fontStyle: 'italic' }}>answered.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
