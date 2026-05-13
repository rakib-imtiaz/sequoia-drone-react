'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <article
      style={{
        backgroundColor: '#0a0a0a',
        color: 'rgba(255,255,255,0.78)',
        paddingTop: '140px',
        paddingBottom: '120px',
        paddingLeft: '24px',
        paddingRight: '24px',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '48px',
          }}
        >
          Last updated: {lastUpdated}
        </p>

        <div className="legal-prose">{children}</div>

        <style jsx>{`
          .legal-prose :global(h2) {
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            margin-top: 40px;
            margin-bottom: 16px;
            letter-spacing: -0.01em;
          }
          .legal-prose :global(h3) {
            font-size: 17px;
            font-weight: 600;
            color: #ffffff;
            margin-top: 28px;
            margin-bottom: 12px;
          }
          .legal-prose :global(p) {
            font-size: 15px;
            line-height: 1.75;
            color: rgba(255, 255, 255, 0.72);
            margin-bottom: 16px;
          }
          .legal-prose :global(ul) {
            list-style: disc;
            padding-left: 24px;
            margin-bottom: 20px;
          }
          .legal-prose :global(ol) {
            list-style: decimal;
            padding-left: 24px;
            margin-bottom: 20px;
          }
          .legal-prose :global(li) {
            font-size: 15px;
            line-height: 1.75;
            color: rgba(255, 255, 255, 0.72);
            margin-bottom: 8px;
          }
          .legal-prose :global(strong) {
            color: #ffffff;
            font-weight: 600;
          }
          .legal-prose :global(a) {
            color: #4debff;
            text-decoration: underline;
          }
          .legal-prose :global(hr) {
            border: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            margin: 32px 0;
          }
        `}</style>
      </div>
    </article>
  )
}
