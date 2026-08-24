import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const check = () => setVisible(window.scrollY > 420); check(); window.addEventListener('scroll', check, { passive: true }); return () => window.removeEventListener('scroll', check) }, [])
  if (!visible) return null
  return <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-cyan-300/60 bg-[#0d1633]/90 text-xl text-cyan-200 shadow-lg shadow-cyan-400/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-cyan-300/30">↑</button>
}
