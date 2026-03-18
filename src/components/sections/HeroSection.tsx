'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StaggerText from '@/components/ui/StaggerText'
import ParallaxImage from '@/components/ui/ParallaxImage'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ease = [0.165, 0.84, 0.44, 1] as [number, number, number, number]

const valuePills = ['✓ DXF + CAD Ready', '✓ PPK Verified ±2cm', '✓ AutoCAD Civil 3D']
const trustBadges = ['DJI Enterprise', 'Pix4D Certified', 'Emlid PPK', 'AutoCAD Civil 3D']

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ZONE 1 — Announcement Strip */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{
          backgroundColor: '#111111',
          padding: '12px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>
          🎯 Serving Land Surveyors & Engineering Firms in BC
        </span>
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>
          ±2cm PPK Accuracy — Civil 3D Compatible
        </span>
      </motion.div>

      {/* ZONE 2 — Main Hero */}
      <section
        style={{
          paddingTop: '100px',
          paddingBottom: '80px',
          backgroundColor: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(77,235,255,0.03) 0%, rgba(10,10,10,0) 70%)',
            pointerEvents: 'none',
            zIndex: 0,
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
            gridTemplateColumns: '55% 45%',
            gap: '64px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* LEFT — TEXT */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
            >
              <div style={{ width: '32px', height: '2px', backgroundColor: '#4DEBFF', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#E8612A' }}>
                DRONE INTELLIGENCE · BC INTERIOR
              </span>
            </motion.div>

            {/* Headline */}
            <div style={{ marginBottom: '28px' }}>
              <h1
                style={{
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                <AnimatePresence>
                  {mounted && (
                    <>
                      <StaggerText text="Survey-Grade Data." stagger={0.06} />{' '}
                      <StaggerText text="For Land &" stagger={0.06} delay={0.25} />{' '}
                      <span>
                        <span style={{ color: '#4DEBFF', fontStyle: 'italic', textShadow: '0 0 20px rgba(77,235,255,0.3)' }}>
                          <StaggerText text="Living" stagger={0.06} delay={0.5} />
                        </span>{' '}
                        <StaggerText text="Ecosystems." stagger={0.06} delay={0.65} />
                      </span>
                    </>
                  )}
                </AnimatePresence>
              </h1>
            </div>

            {/* What we do paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '460px',
                lineHeight: 1.65,
                marginBottom: '24px',
                fontWeight: 400,
              }}
            >
              We fly drones, collect PPK-corrected GNSS data, and process it into orthomosaics, 3D point clouds, and DXF files — ready for AutoCAD Civil 3D on day one.
            </motion.p>

            {/* Value Props Pills */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}
            >
              {valuePills.map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.1, ease }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease }}
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
                  boxShadow: '0 8px 32px rgba(232, 97, 42, 0.2)',
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
                  transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
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

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            style={{ position: 'relative' }}
          >
            {/* Workflow card — top left of image */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease }}
              style={{
                position: 'absolute',
                top: '16px',
                left: '-20px',
                backgroundColor: 'rgba(10,10,10,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '10px 14px',
                zIndex: 10,
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                WORKFLOW
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>
                Emlid RS3 → Pix4D → Civil 3D
              </div>
            </motion.div>

            {/* Main Image */}
            <div
              style={{
                position: 'relative',
                height: '560px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%)' }} />
              <ParallaxImage
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?w=1200&q=80"
                alt="Aerial survey drone mapping BC interior"
                speed={20}
              />
            </div>

            {/* Floating Stat Card */}
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
                minWidth: '240px',
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
              margin-top: 60px;
            }
          }
        `}</style>
      </section>

      {/* ZONE 3 — Trust Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
        style={{
          backgroundColor: '#111111',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
          Trusted for:
        </span>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {trustBadges.map((badge) => (
            <span
              key={badge}
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
