import { motion } from 'framer-motion'
import React from 'react'

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="noise"></div>
      <div className="vignette"></div>
      <motion.div
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(30,144,255,0.25), transparent)' }}
        animate={{ x: [0, 80, -60, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.25), transparent)' }}
        animate={{ x: [0, -80, 60, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
