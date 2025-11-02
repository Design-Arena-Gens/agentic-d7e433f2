import React from 'react'
import { AuroraBackground } from './components/aceternity/AuroraBackground'
import { Spotlight } from './components/aceternity/Spotlight'
import { BentoGrid } from './components/aceternity/BentoGrid'
import { MovingBorderButton } from './components/aceternity/MovingBorderButton'

export default function App() {
  return (
    <div className="relative min-h-screen bg-grid">
      <AuroraBackground />
      <Spotlight />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="select-none font-display text-3xl italic">
          <span className="font-black">Unlearn</span><span className="text-sky-400">.</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-zinc-400 transition-colors hover:text-foreground" href="#work">Work</a>
          <a className="text-zinc-400 transition-colors hover:text-foreground" href="#approach">Approach</a>
          <a className="text-zinc-400 transition-colors hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <div className="hidden md:block">
          <MovingBorderButton>Talk to the team</MovingBorderButton>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6">
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Unlearn, so we can learn again.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              We build sustainable tools for educators and students?calm, rigorous, and future?ready. Less noise, more learning.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <MovingBorderButton>Explore capabilities</MovingBorderButton>
              <a href="#approach" className="text-zinc-400 transition-colors hover:text-foreground">Our approach ?</a>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sky-500/10 via-purple-500/10 to-emerald-500/10 blur-3xl" />
          </div>
        </section>

        <section id="approach" className="py-8">
          <BentoGrid />
        </section>

        <section id="work" className="relative py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-2 overflow-hidden rounded-3xl border border-zinc-800">
              <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop" alt="Chalkboard" className="h-full w-full object-cover grayscale transition hover:grayscale-0" />
            </div>
            <div className="flex flex-col justify-between gap-6">
              <h3 className="font-display text-2xl italic">Precision. Clarity. Care.</h3>
              <p className="text-zinc-400">Every interaction is designed to reduce cognitive load and increase meaningful practice.</p>
              <div>
                <MovingBorderButton>See how</MovingBorderButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div className="select-none font-display text-2xl italic">
            <span className="font-black">Unlearn</span><span className="text-sky-400">.</span>
          </div>
          <div className="text-sm text-zinc-500">? {new Date().getFullYear()} Unlearn. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
