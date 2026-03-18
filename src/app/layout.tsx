import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Sequoia Drone — Survey-Grade Data. For Land & Living Ecosystems.',
  description:
    'From centimeter-accurate topographic surveys to canopy health mapping — Sequoia delivers CAD-ready deliverables and environmental intelligence across BC\'s most challenging terrain.',
  keywords: [
    'drone survey BC',
    'aerial LiDAR scanning',
    'PPK ground control',
    'drone mapping British Columbia',
    'CAD deliverables drone',
    'environmental intelligence drone',
  ],
  openGraph: {
    title: 'Sequoia Drone Systems',
    description: 'Survey-Grade Data. For Land & Living Ecosystems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>
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
