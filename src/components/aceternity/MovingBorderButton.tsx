import { motion } from 'framer-motion'
import React from 'react'

export function MovingBorderButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 px-6 py-3 font-medium text-foreground"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{ background: 'conic-gradient(from 0deg, transparent, rgba(14,165,233,0.2), transparent)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      />
      <span className="absolute inset-0 -z-10 rounded-full bg-zinc-900/70 backdrop-blur-md" />
    </motion.button>
  )
}
