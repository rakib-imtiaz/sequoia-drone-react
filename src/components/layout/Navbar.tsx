'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { href: '/services', label: 'Solutions' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    function checkMobile() {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMobileOpen(false)
  }, [isMobile])

  return (
    <>
      {/* ─── Main header bar ─────────────────────────────────────────── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '64px',
          transition: 'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            height: '100%',
            padding: '0 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <Flame size={20} style={{ color: '#E8612A', fill: '#E8612A' }} strokeWidth={0} />
            <span style={{ fontWeight: 600, fontSize: '16px', color: '#ffffff', letterSpacing: '-0.01em' }}>
              Sequoia
            </span>
          </Link>

          {/* ── Desktop nav — centered absolute ── */}
          {!isMobile && (
            <nav
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '36px',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontWeight: 400,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#4DEBFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* ── Right side ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Desktop CTA */}
            {!isMobile && (
              <MagneticButton
                onClick={() => { window.location.href = '/contact' }}
                style={{
                  backgroundColor: '#E8612A',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '14px',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                } as React.CSSProperties}
              >
                Get a Quote
              </MagneticButton>
            )}

            {/* Hamburger — mobile only */}
            {isMobile && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ─── Mobile full-screen drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.165, 0.84, 0.44, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: '#111111',
              paddingTop: '64px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.05, ease: [0.165, 0.84, 0.44, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '60px',
                      padding: '0 24px',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      transition: 'color 0.2s, padding-left 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4DEBFF'
                      e.currentTarget.style.paddingLeft = '32px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                      e.currentTarget.style.paddingLeft = '24px'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA full-width at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.22, ease: [0.165, 0.84, 0.44, 1] }}
                style={{ padding: '24px' }}
              >
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#E8612A',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '16px',
                    padding: '16px',
                    borderRadius: '999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    letterSpacing: '-0.01em',
                  }}
                  onClick={() => {
                    setMobileOpen(false)
                    window.location.href = '/contact'
                  }}
                >
                  Get a Quote
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
