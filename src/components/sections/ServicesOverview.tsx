'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { Map, Leaf, Waves } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Map,
    title: 'Survey & Engineering',
    desc: 'PPK-corrected aerial data processed into CAD-ready deliverables for engineers and land surveyors.',
    borderCol: '#4DEBFF',
    outputsColor: '#4DEBFF',
    outputs: [
      'Orthomosaic Map (GeoTIFF)',
      'DXF Feature Extraction',
      'TIN Surface + Contour Lines',
      'AutoCAD Civil 3D Compatible',
    ],
    image: '/images/survey-orthomosaic-top-down.jpg',
    imageAlt: 'Real drone orthomosaic survey map top-down view',
  },
  {
    icon: Leaf,
    title: 'Environmental Intelligence',
    desc: 'Multispectral and thermal imaging for forestry, agriculture, and environmental compliance in BC.',
    borderCol: '#4CAF72',
    outputsColor: '#4CAF72',
    outputs: [
      'NDVI / Multispectral Index Maps',
      'Canopy Health & Biomass Reports',
      'Time-Series Change Detection',
      'Environmental Compliance Docs',
    ],
    image: '/images/process-checkpoint-accuracy-map.jpg',
    imageAlt: 'Aerial survey site with checkpoint markers',
  },
  {
    icon: Waves,
    title: 'LiDAR Indoor Scanning',
    desc: 'Handheld Leica BLK2GO scanning delivers BIM-ready point clouds for buildings and structures.',
    borderCol: '#E8612A',
    outputsColor: '#E8612A',
    outputs: [
      '3D Point Cloud (LAS/LAZ + E57)',
      'BIM-Ready Files (Revit / IFC)',
      'As-Built Floor Plans (DWG)',
      'IFC / RCP Export',
    ],
    image: '/images/hardware-mavic3-enterprise-closeup.jpg',
    imageAlt: 'DJI Mavic 3 Enterprise hardware close-up',
  },
]

export default function ServicesOverview() {
  return (
    <section style={{ backgroundColor: '#0a0a0a', padding: '120px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <ScrollReveal>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#666666', textTransform: 'uppercase', marginBottom: '16px' }}>
              Core Disciplines
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
              What We Deliver.
            </h2>
            <p style={{ fontSize: '16px', color: '#888888', maxWidth: '600px', marginTop: '20px', lineHeight: 1.6 }}>
              Every flight produces survey-grade, CAD-ready outputs formatted for your existing engineering workflow.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <ScrollReveal key={svc.title} delay={i * 0.1}>
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  style={{
                    backgroundColor: '#111111',
                    borderRadius: '16px',
                    padding: '40px',
                    borderLeft: `4px solid ${svc.borderCol}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'background-color 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#111111')}
                >
                  <Icon size={40} style={{ color: svc.borderCol }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#888888', lineHeight: 1.6 }}>
                      {svc.desc}
                    </p>
                  </div>

                  {/* Deliverables list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 500, color: svc.outputsColor, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      OUTPUTS
                    </div>
                    {svc.outputs.map((item) => (
                      <span key={item} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                        → {item}
                      </span>
                    ))}
                  </div>

                  {/* Image */}
                  <div
                    style={{
                      marginTop: '8px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      height: '160px',
                      position: 'relative',
                      backgroundColor: '#000',
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { filter: 'grayscale(100%)', opacity: 0.4 },
                        hover: { filter: 'grayscale(0%)', opacity: 1, scale: 1.05 },
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom strip */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: '32px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '12px',
              padding: '16px 24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>
              All deliverables: DXF · DWG · GeoTIFF · LAS/LAZ · E57 · IFC
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
