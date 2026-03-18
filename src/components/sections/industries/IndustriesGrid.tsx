'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { MapPin, HardHat, TreePine, Layers, Sun, Landmark } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const industries = [
  {
    title: 'Land Surveying',
    icon: MapPin,
    color: '#4DEBFF',
    desc: 'Legal surveys, topographic mapping, and as-built documentation processed to Civil 3D standard.',
    services: ['Topographic Surveys', 'Feature Extraction', 'PPK Ground Control'],
  },
  {
    title: 'Engineering/Construction',
    icon: HardHat,
    color: '#E8612A',
    desc: 'Cut/fill analysis, grade verification, and progress monitoring for civil engineering projects.',
    services: ['Site Mapping', 'Volume Analysis', 'Progress Documentation'],
  },
  {
    title: 'Forestry & Environment',
    icon: TreePine,
    color: '#4CAF72',
    desc: 'Canopy health assessment, volume estimation, and environmental compliance mapping across BC.',
    services: ['Canopy Analysis', 'Biomass Mapping', 'Environmental Monitoring'],
  },
  {
    title: 'Mining & Industrial',
    icon: Layers,
    color: '#E8612A',
    desc: 'Large-scale topographic surveys and volume calculations for mining operations.',
    services: ['Volume Surveys', 'Site Monitoring', 'Industrial Layout'],
  },
  {
    title: 'Agriculture',
    icon: Sun,
    color: '#4CAF72',
    desc: 'Soil health, crop stress detection, and precision irrigation planning from multispectral data.',
    services: ['NDVI Mapping', 'Soil Analysis', 'Irrigation Planning'],
  },
  {
    title: 'Municipal & Government',
    icon: Landmark,
    color: '#4DEBFF',
    desc: 'Crown land surveys, infrastructure inspection, and urban planning data for government.',
    services: ['Crown Land', 'Infrastructure', 'Urban Planning'],
  },
]

export default function IndustriesGrid() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.15,
              }}
            >
              Six Sectors. One Trusted Partner.
            </h2>
            <p style={{ fontSize: '15px', color: '#666666', marginTop: '16px' }}>
              We adapt our hardware and deliverables to integrate seamlessly into your software.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="industries-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <ScrollReveal key={industry.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, backgroundColor: '#ffffff', borderColor: industry.color, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#f5f5f2',
                    borderRadius: '16px',
                    padding: '32px',
                    border: '1px solid #e8e8e4',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Icon size={32} style={{ color: industry.color, marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                    {industry.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6, marginTop: '12px', flexGrow: 1 }}>
                    {industry.desc}
                  </p>

                  <div style={{ marginTop: '24px', marginBottom: '32px' }}>
                    {industry.services.map((service) => (
                      <div key={service} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: industry.color }} />
                        <span style={{ fontSize: '13px', color: '#888888' }}>{service}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services`}
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#E8612A',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: 'auto',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    Explore Services &rarr;
                  </Link>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
