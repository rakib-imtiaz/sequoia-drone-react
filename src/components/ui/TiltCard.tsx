'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxDeg?: number
}

export default function TiltCard({ children, className, maxDeg = 8 }: TiltCardProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [maxDeg, -maxDeg]),
    { stiffness: 200, damping: 20 }
  )
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-maxDeg, maxDeg]),
    { stiffness: 200, damping: 20 }
  )

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (isTouchDevice) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}
