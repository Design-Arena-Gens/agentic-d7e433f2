import React, { useEffect, useRef, useState } from 'react'

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setPointer({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  const style = {
    background: `radial-gradient(600px circle at ${pointer.x}px ${pointer.y}px, rgba(255,255,255,0.1), transparent 55%)`,
  } as React.CSSProperties

  return <div ref={ref} className="pointer-events-none absolute inset-0 -z-10" style={style} />
}
