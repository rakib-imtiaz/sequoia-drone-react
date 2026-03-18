'use client'

import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  )
}
