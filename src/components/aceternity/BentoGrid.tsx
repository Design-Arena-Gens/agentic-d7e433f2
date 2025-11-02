import { motion } from 'framer-motion'
import React from 'react'

type Item = {
  title: string
  subtitle: string
}

const items: Item[] = [
  { title: 'Sustainable by Design', subtitle: 'Tools that reduce waste and amplify outcomes.' },
  { title: 'Unlearn the Old', subtitle: 'Curricula that adapt, iterate, and evolve.' },
  { title: 'Educator First', subtitle: 'Plan, assess, and reflect with clarity.' },
  { title: 'Student Agency', subtitle: 'Nudge curiosity, measure mastery, grow confidence.' }
]

export function BentoGrid() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-md"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 animate-slow-spin rounded-full bg-gradient-to-tr from-sky-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl" />
          <h3 className="font-display text-xl italic tracking-tight">{it.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{it.subtitle}</p>
        </motion.div>
      ))}
    </div>
  )
}
