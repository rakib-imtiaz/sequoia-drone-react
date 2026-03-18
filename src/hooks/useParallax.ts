import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function useParallax(distance = 80) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 })
  return { ref, y: smoothY }
}
