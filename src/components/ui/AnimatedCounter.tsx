'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, isInView, to])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`
      }
    })
  }, [springValue, prefix, suffix])

  return <span ref={ref} className={className}>{prefix}{from.toLocaleString()}{suffix}</span>
}
