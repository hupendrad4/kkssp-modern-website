'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'

interface JumbotronProps {
  backgroundImage: string
  title: string
  subtitle?: string
  children?: ReactNode
  height?: 'sm' | 'md' | 'lg' | 'xl'
  overlay?: 'light' | 'dark' | 'gradient'
  parallax?: boolean
  className?: string
}

export default function Jumbotron({
  backgroundImage,
  title,
  subtitle,
  children,
  height = 'lg',
  overlay = 'dark',
  parallax = true,
  className = ''
}: JumbotronProps) {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-80',
    lg: 'h-96',
    xl: 'h-screen'
  }

  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-black/50',
    gradient: 'bg-gradient-to-r from-black/70 via-black/50 to-black/70'
  }

  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden ${className}`}>
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Blur Effect Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  )
}
