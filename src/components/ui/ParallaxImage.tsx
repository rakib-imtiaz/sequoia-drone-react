'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParallax } from '@/hooks/useParallax'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
}

export default function ParallaxImage({
  src,
  alt,
  speed = 60,
  className,
}: ParallaxImageProps) {
  const { ref, y } = useParallax(speed)

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl relative w-full h-full ${className ?? ''}`}
    >
      <motion.div
        style={{ y }}
        className="scale-110 w-full h-full absolute inset-0"
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  )
}
