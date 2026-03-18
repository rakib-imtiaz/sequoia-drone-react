'use client'

import { motion } from 'framer-motion'


const wordVariant = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number],
      duration: 0.7,
    },
  },
}

interface StaggerTextProps {
  text: string
  className?: string
  /** Renders as h1 (default), h2, or h3 */
  tag?: 'h1' | 'h2' | 'h3'
  stagger?: number
  delay?: number
}

export default function StaggerText({ text, className, tag = 'h1', stagger = 0.08, delay = 0 }: StaggerTextProps) {
  const MotionTag = tag === 'h1'
    ? motion.h1
    : tag === 'h2'
    ? motion.h2
    : motion.h3

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  )
}
