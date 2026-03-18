'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is the typical turnaround time for deliverables?',
    a: 'For standard topographic surveys up to 500 acres, you can expect fully processed CAD-ready deliverables within 48 to 72 hours of flight completion. Larger areas or complex canopy classifications may require 5-7 days.'
  },
  {
    q: 'Do you operate in winter or extreme weather?',
    a: 'Yes. Our enterprise fleet is weather-rated (IP55) and capable of operating in light rain, snow, and temperatures down to -20°C. However, severe precipitation or very high winds may necessitate rescheduling to ensure data fidelity.'
  },
  {
    q: 'How accurate is your RTK/PPK data without Ground Control Points (GCPs)?',
    a: 'With onboard RTK/PPK combined with our base station, we consistently achieve 1-3cm relative accuracy. We typically still deploy 1-2 check points for independent verification and coordinate system anchoring to guarantee absolute accuracy.'
  },
  {
    q: 'Can LiDAR penetrate heavy forest canopy?',
    a: 'Yes. Our multi-return LiDAR sensors are specifically designed to penetrate dense foliage, capturing multiple echoes per pulse. This allows us to generate highly accurate bare-earth digital terrain models (DTMs) even under heavy BC coastal canopy.'
  }
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '100px 48px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#1a1a1a', marginBottom: '40px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div 
                  style={{ 
                    border: '1px solid #e8e8e4',
                    borderRadius: '16px',
                    backgroundColor: isOpen ? '#f5f5f2' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'background-color 0.3s'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      color: isOpen ? '#E8612A' : '#1a1a1a',
                      fontWeight: 600,
                      fontSize: '16px',
                      transition: 'color 0.2s'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ 
                      flexShrink: 0, 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      border: '1px solid rgba(0,0,0,0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: isOpen ? '#E8612A' : '#1a1a1a',
                      backgroundColor: isOpen ? '#ffffff' : 'transparent',
                    }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                      >
                        <div style={{ padding: '0 24px 24px', color: '#666666', lineHeight: 1.6, fontSize: '15px' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
