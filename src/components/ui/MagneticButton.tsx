'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function MagneticButton({
  children,
  className,
  style,
  onClick,
  type = 'button',
  disabled,
}: MagneticButtonProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })

  function onMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (isTouchDevice) {
    return (
      <button
        className={className}
        style={style}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  return (
    <motion.button
      className={className}
      style={{ ...style, x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
