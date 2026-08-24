import { useEffect, useRef, useState } from 'react'
import Icon from './Icons'

const themes = [
  { name: 'Dark', value: 'dark', swatches: ['#0b1028', '#22d3ee', '#a78bfa'] },
  { name: 'Light', value: 'light', swatches: ['#f7faff', '#0284c7', '#7c3aed'] },
  { name: 'Cyber', value: 'cyber', swatches: ['#10071d', '#22d3ee', '#f472b6'] },
  { name: 'Ocean', value: 'ocean', swatches: ['#061b2a', '#2dd4bf', '#38bdf8'] },
  { name: 'Sunset', value: 'sunset', swatches: ['#21101b', '#fb7185', '#fb923c'] },
]

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [open, setOpen] = useState(false)
  const selectorRef = useRef(null)
  useEffect(() => { const dark = theme !== 'light'; document.documentElement.classList.toggle('dark', dark); document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme) }, [theme])
  useEffect(() => { const close = (event) => { if (!selectorRef.current?.contains(event.target)) setOpen(false) }; document.addEventListener('mousedown', close); return () => document.removeEventListener('mousedown', close) }, [])
  return <div ref={selectorRef} className="relative"><button type="button" onClick={() => setOpen(!open)} className="inline-flex h-9 items-center gap-2 rounded-lg border border-cyan-400/25 bg-slate-950/30 px-2.5 text-xs font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10 dark:text-cyan-100" aria-expanded={open} aria-haspopup="menu" aria-label="Choose portfolio theme"><Icon name="palette" size={16} /><span className="hidden sm:inline">Theme</span><Icon name="chevron" size={13} className={`transition ${open ? 'rotate-180' : ''}`} /></button>{open && <div role="menu" className="absolute right-0 top-11 z-60 w-52 rounded-xl border border-cyan-300/20 bg-[#0c1430]/95 p-2 shadow-2xl shadow-cyan-950/40 backdrop-blur dark:bg-[#0c1430]/95"><p className="px-2 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">Colour theme</p>{themes.map((item) => <button key={item.value} type="button" role="menuitemradio" aria-checked={theme === item.value} onClick={() => { setTheme(item.value); setOpen(false) }} className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm transition ${theme === item.value ? 'bg-cyan-400/15 text-cyan-100' : 'text-slate-300 hover:bg-white/8 hover:text-white'}`}><span className="font-medium">{item.name}</span><span className="flex -space-x-1">{item.swatches.map((color) => <i key={color} className="h-3 w-3 rounded-full border border-white/30" style={{ backgroundColor: color }} />)}</span></button>)}</div>}</div>
}
