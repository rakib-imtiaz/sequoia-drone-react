'use client'

import Link from 'next/link'
import { Flame, Linkedin, Instagram, Twitter } from 'lucide-react'

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Topographic Surveys', href: '/services' },
      { label: 'Feature Extraction', href: '/services' },
      { label: 'PPK Ground Control', href: '/services' },
      { label: 'LiDAR Scanning', href: '/services' },
      { label: 'Canopy Analysis', href: '/services' },
      { label: 'Environmental Mapping', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Hardware', href: '/hardware' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com', label: 'X' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#060d04',
        padding: '64px 48px 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Grid */}
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame
                size={20}
                style={{ color: '#E8612A', fill: '#E8612A' }}
                strokeWidth={0}
              />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#ffffff',
                }}
              >
                Sequoia
              </span>
            </Link>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                maxWidth: '200px',
                lineHeight: 1.6,
              }}
            >
              Survey-grade drone intelligence for land & living ecosystems across British Columbia.
            </p>
          </div>

          {/* Col 2 & 3 — Services + Company */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="eyebrow"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  marginBottom: '16px',
                }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-all duration-200 inline-block"
                      style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#4DEBFF'
                        e.currentTarget.style.transform = 'translateX(3px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4 — Contact */}
          <div>
            <h4
              className="eyebrow"
              style={{
                color: 'rgba(255,255,255,0.25)',
                marginBottom: '16px',
              }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@sequoiadrone.ca"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
                  className="transition-colors duration-200 hover:text-white"
                >
                  hello@sequoiadrone.ca
                </a>
              </li>
              <li
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
              >
                British Columbia, Canada
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E8612A'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = '#E8612A'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            margin: '48px 0 24px',
          }}
        />

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            © 2024 Sequoia Drone Systems. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <Link
                key={label}
                href="#"
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}
                className="transition-colors duration-200 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
