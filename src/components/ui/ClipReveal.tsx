'use client'

import { motion } from 'framer-motion'

interface ClipRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function ClipReveal({ children, delay = 0, className }: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  )
}
