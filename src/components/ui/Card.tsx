'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export default function Card({ children, className = '', hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      className={clsx(
        'rounded-xl p-6 transition-all duration-300',
        glass ? 'glass' : 'bg-white shadow-lg',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
