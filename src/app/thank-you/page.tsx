import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | Sequoia Drone Services',
  description: 'Your request has been received. A Sequoia Drone team member will respond within 24 hours.',
  alternates: { canonical: 'https://www.sequoiadrone.ca/thank-you' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

  // Both GA4 'generate_lead' event AND Google Ads conversion fire here.
  const conversionTarget =
    conversionId && conversionLabel ? `${conversionId}/${conversionLabel}` : null

  return (
    <>
      <Script id="conversion-events" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'generate_lead', { value: 1.0, currency: 'CAD' });
            ${
              conversionTarget
                ? `window.gtag('event', 'conversion', {
                    'send_to': '${conversionTarget}',
                    'value': 1.0,
                    'currency': 'CAD'
                  });`
                : ''
            }
          }
        `}
      </Script>

      <section
        style={{
          backgroundColor: '#0a0a0a',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 24px 80px',
        }}
      >
        <div
          style={{
            maxWidth: '560px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '999px',
              backgroundColor: 'rgba(77,235,255,0.08)',
              border: '1px solid rgba(77,235,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle2 size={44} color="#4DEBFF" strokeWidth={1.5} />
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Request received. <span style={{ color: '#4DEBFF', fontStyle: 'italic' }}>Thanks.</span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65,
            }}
          >
            A member of the Sequoia Drone team will review your project details and reply within
            <strong style={{ color: '#ffffff' }}> 24 hours</strong>. If your project is time-sensitive,
            feel free to call us directly.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#E8612A',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '14px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(232,97,42,0.25)',
              }}
            >
              Return Home
            </Link>
            <Link
              href="/#portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '14px 28px',
                borderRadius: '999px',
                textDecoration: 'none',
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
