'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StaggerText from '@/components/ui/StaggerText'
import ParallaxImage from '@/components/ui/ParallaxImage'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '160px', 
        paddingBottom: '80px',
        backgroundColor: '#0a0a0a', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow effect */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(77,235,255,0.03) 0%, rgba(10,10,10,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div 
        className="hero-grid"
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 48px', 
          width: '100%',
          display: 'grid', 
          gridTemplateColumns: '52% 48%', 
          gap: '64px', 
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* LEFT — TEXT */}
        <div>
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            style={{ display: 'flex', items: 'center', gap: '12px', marginBottom: '32px' }}
          >
            <div style={{ width: '32px', height: '2px', backgroundColor: '#4DEBFF', marginTop: '7px' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
              ORGANIC INDUSTRIALISM
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom: '32px' }}>
            <h1 
              style={{ 
                fontSize: 'clamp(40px, 6vw, 76px)', 
                fontWeight: 700, 
                color: '#ffffff', 
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              <AnimatePresence>
                {mounted && (
                  <>
                    <StaggerText text="Precision" stagger={0.06} />{' '}
                    <StaggerText text="Engineering" stagger={0.06} delay={0.2} />{' '}
                    <StaggerText text="for the" stagger={0.06} delay={0.4} />{' '}
                    <span style={{ color: '#4DEBFF', fontStyle: 'italic', textShadow: '0 0 20px rgba(77,235,255,0.3)' }}>
                      <StaggerText text="Living" stagger={0.06} delay={0.6} />
                    </span>{' '}
                    <StaggerText text="Earth." stagger={0.06} delay={0.8} />
                  </>
                )}
              </AnimatePresence>
            </h1>
          </div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            style={{ 
              fontSize: '18px', 
              color: '#a0a0a0', 
              maxWidth: '520px', 
              lineHeight: 1.6,
              marginBottom: '48px',
              fontWeight: 400
            }}
          >
            Survey-Grade Data. For Land & Living Ecosystems. We bridge the gap between heavy industry and biological preservation across BC.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link 
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#E8612A',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                padding: '16px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: '0 8px 32px rgba(232, 97, 42, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f27340'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8612A'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Explore Solutions <ArrowRight size={18} />
            </Link>
            
            <Link 
              href="/hardware"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                padding: '16px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
            >
              View Hardware
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — IMAGE & STAT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          style={{ position: 'relative' }}
        >
          {/* Main Image Container */}
          <div 
            style={{ 
              position: 'relative', 
              height: '600px', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%)' }} />
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1541888087425-d81bb192a2a7?w=1200&q=80" 
              alt="Industrial drone mapping"
              speed={20}
            />
          </div>

          {/* Floating Stat Card (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            style={{ 
              position: 'absolute', 
              bottom: '-32px', 
              right: '-32px', 
              background: 'rgba(17, 17, 17, 0.75)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '24px 32px', 
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
              zIndex: 10,
              minWidth: '240px'
            }}
          >
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#888888', marginBottom: '8px', textTransform: 'uppercase' }}>
              Verified Accuracy
            </div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#4DEBFF', letterSpacing: '-0.02em', lineHeight: 1 }}>
              ±2cm <span style={{ fontSize: '20px', color: '#ffffff' }}>RMS</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff' }}>PPK Post-Processed</span>
              <span style={{ fontSize: '12px', color: '#4DEBFF' }}>100%</span>
            </div>
            
            {/* Progress Bar */}
            <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', marginTop: '8px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1.8, ease }}
                style={{ height: '100%', backgroundColor: '#4DEBFF', borderRadius: '999px', boxShadow: '0 0 10px rgba(77,235,255,0.5)' }} 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 40px !important;
          }
          .hero-grid > div:last-child {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  )
}
