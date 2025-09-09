'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxSectionProps {
  backgroundImage: string
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ 
  backgroundImage, 
  children, 
  className = '',
  speed = 0.5 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
