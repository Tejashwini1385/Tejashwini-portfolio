import { useEffect, useState } from 'react'

export default function PortfolioLoader({ onComplete }) {
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finish = window.setTimeout(() => setLeaving(true), reducedMotion ? 100 : 2100)
    const complete = window.setTimeout(onComplete, reducedMotion ? 180 : 2550)
    return () => { window.clearTimeout(finish); window.clearTimeout(complete) }
  }, [onComplete])

  return <div className={`portfolio-loader fixed inset-0 z-[9999] h-screen w-screen ${leaving ? 'portfolio-loader--leaving' : ''}`} role="status" aria-label="Loading Tejashwini Godyal portfolio">
    <div className="loader-rays" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} style={{ '--ray': `${index * 20}deg`, '--delay': `${(index % 6) * -.45}s` }} />)}</div>
    <div className="loader-particles" aria-hidden="true">{Array.from({ length: 16 }, (_, index) => <i key={index} style={{ '--x': `${(index * 43) % 100}%`, '--y': `${(index * 67) % 100}%`, '--delay': `${index * -.3}s` }} />)}</div>
    <div className="loader-panel">
      <p className="loader-kicker">INITIALIZING EXPERIENCE</p>
      <h1>TEJASHWINI GODYAL</h1>
      <p className="loader-subtitle">PORTFOLIO</p>
      <div className="loader-progress"><i /></div>
      <div className="loader-dots" aria-hidden="true"><i /><i /><i /></div>
    </div>
  </div>
}
