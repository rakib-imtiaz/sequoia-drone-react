'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CaseStudiesHero() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Survey & Engineering', 'Environmental']

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '160px 48px 60px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
          style={{ color: '#1a1a1a', marginBottom: '24px' }}
        >
          OUR WORK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Proof in the <em style={{ color: '#E8612A', fontStyle: 'italic' }}>Data.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '16px',
            color: '#666666',
            maxWidth: '520px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          Real projects. Verified accuracy. CAD-ready deliverables for engineering
          firms across British Columbia.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: isActive ? '#1a1a1a' : '#f5f5f2',
                  color: isActive ? '#ffffff' : '#666666',
                  border: isActive ? '1px solid #1a1a1a' : '1px solid #e8e8e4',
                  padding: '10px 24px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = '#efefec'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = '#f5f5f2'
                }}
              >
                {filter}
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
