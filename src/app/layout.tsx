import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'
import ScrollProgressBar from '@/components/layout/ScrollProgressBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = 'https://www.sequoiadrone.ca'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Drone Services Kamloops BC | Aerial Photography & Inspection | Sequoia Drone',
    template: '%s | Sequoia Drone Services',
  },
  description:
    'Professional drone services in Kamloops, BC Interior & Greater Vancouver. Aerial photography, real estate tours, inspections, 3D mapping. Transport Canada certified, fully insured, same-week booking.',
  keywords: [
    'drone services Kamloops BC',
    'aerial photography Kamloops',
    'real estate drone photos BC Interior',
    'drone inspection Kamloops',
    'construction drone survey BC',
    'aerial video Vancouver',
    'drone services Thompson Okanagan',
    'RPAS pilot Kamloops',
  ],
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    title: 'Drone Services Kamloops BC | Sequoia Drone',
    description:
      'Professional drone services across Kamloops, BC Interior & Greater Vancouver. Transport Canada certified, fully insured.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Sequoia Drone Services',
    locale: 'en_CA',
    images: [
      {
        url: '/images/hero-mavic3-construction-site.jpg',
        width: 1200,
        height: 630,
        alt: 'Sequoia Drone aerial photography in Kamloops, BC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Services Kamloops BC | Sequoia Drone',
    description:
      'Aerial photography, real estate, inspection & mapping across Kamloops & Vancouver.',
    images: ['/images/hero-mavic3-construction-site.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sequoia Drone Services',
  image: `${SITE_URL}/images/hero-mavic3-construction-site.jpg`,
  url: SITE_URL,
  telephone: '+1-250-555-0100',
  email: 'hello@sequoiadrone.ca',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kamloops',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Kamloops' },
    { '@type': 'AdministrativeArea', name: 'BC Interior' },
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'AdministrativeArea', name: 'Thompson-Okanagan' },
  ],
  serviceType: [
    'Aerial Photography',
    'Real Estate Drone Tours',
    'Construction Progress Monitoring',
    'Drone Inspection',
    '3D Mapping & Surveying',
    'Agricultural & Land Imaging',
  ],
  sameAs: [
    'https://www.instagram.com/sequoiadrone',
    'https://www.facebook.com/sequoiadrone',
    'https://www.linkedin.com/company/sequoiadrone',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
  const gtagPrimary = ga4Id || adsId

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Kamloops, British Columbia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        {gtagPrimary && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagPrimary}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                ${ga4Id ? `gtag('config', '${ga4Id}');` : ''}
                ${adsId && adsId !== ga4Id ? `gtag('config', '${adsId}');` : ''}
              `}
            </Script>
          </>
        )}

        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
