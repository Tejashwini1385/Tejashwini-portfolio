import { useEffect, useRef } from 'react'

const palettes = {
  dark: { primary: [34, 211, 238], secondary: [167, 139, 250], ambient: 'rgba(34,211,238,.13), rgba(139,92,246,.11)' },
  light: { primary: [2, 132, 199], secondary: [6, 182, 212], ambient: 'rgba(14,165,233,.09), rgba(6,182,212,.06)' },
  cyber: { primary: [34, 211, 238], secondary: [244, 114, 182], ambient: 'rgba(34,211,238,.14), rgba(236,72,153,.11)' },
  ocean: { primary: [45, 212, 191], secondary: [56, 189, 248], ambient: 'rgba(45,212,191,.12), rgba(56,189,248,.10)' },
  sunset: { primary: [251, 113, 133], secondary: [251, 146, 60], ambient: 'rgba(251,113,133,.12), rgba(251,146,60,.1)' },
}

const rgba = (color, alpha) => `rgba(${color[0]},${color[1]},${color[2]},${alpha})`

export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const mouse = { x: -1000, y: -1000 }
    const ripples = []
    let nodes = []
    let frameId
    let width = 0
    let height = 0
    let dpr = 1
    let visible = !document.hidden
    let lastTime = performance.now()

    const getConfig = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) return { count: 18, distance: 115, speed: 0.12, mouseRadius: 105 }
      if (screenWidth < 1024) return { count: 29, distance: 140, speed: 0.16, mouseRadius: 130 }
      return { count: 40, distance: 160, speed: 0.18, mouseRadius: 150 }
    }
    const createNodes = () => {
      const config = getConfig()
      nodes = Array.from({ length: config.count }, (_, index) => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed, vy: (Math.random() - 0.5) * config.speed,
        radius: index % 7 === 0 ? 2.5 : 1.7 + Math.random(), phase: Math.random() * Math.PI * 2,
      }))
    }
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight; dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0); createNodes()
    }
    const move = (event) => { mouse.x = event.clientX; mouse.y = event.clientY }
    const click = (event) => { ripples.push({ x: event.clientX, y: event.clientY, radius: 3, alpha: 0.42 }) }
    const visibility = () => { visible = !document.hidden; if (visible) { lastTime = performance.now(); frameId = requestAnimationFrame(draw) } }

    const draw = (now) => {
      if (!visible) return
      const delta = Math.min((now - lastTime) / 16.67, 2); lastTime = now
      const config = getConfig(); const palette = palettes[document.documentElement.dataset.theme || 'dark']; const mobile = width < 640
      context.clearRect(0, 0, width, height)
      const ambient = context.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, config.mouseRadius * 1.5)
      ambient.addColorStop(0, rgba(palette.primary, mobile ? 0.055 : 0.08)); ambient.addColorStop(1, rgba(palette.primary, 0)); context.fillStyle = ambient; context.fillRect(0, 0, width, height)
      nodes.forEach((node) => {
        const dx = mouse.x - node.x; const dy = mouse.y - node.y; const mouseDistance = Math.hypot(dx, dy)
        if (mouseDistance < config.mouseRadius && mouseDistance > 1) { const force = (1 - mouseDistance / config.mouseRadius) * 0.012; node.vx -= dx / mouseDistance * force; node.vy -= dy / mouseDistance * force }
        node.x += node.vx * delta; node.y += node.vy * delta; node.vx *= 0.998; node.vy *= 0.998
        if (node.x < -15 || node.x > width + 15) node.vx *= -1; if (node.y < -15 || node.y > height + 15) node.vy *= -1
        node.x = Math.max(-15, Math.min(width + 15, node.x)); node.y = Math.max(-15, Math.min(height + 15, node.y))
      })
      for (let i = 0; i < nodes.length; i += 1) for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]; const b = nodes[j]; const dx = b.x - a.x; const dy = b.y - a.y; const distance = Math.hypot(dx, dy)
        if (distance > config.distance) continue
        const mouseNear = Math.min(Math.hypot(mouse.x - a.x, mouse.y - a.y), Math.hypot(mouse.x - b.x, mouse.y - b.y)) < config.mouseRadius
        const alpha = (1 - distance / config.distance) * (mouseNear ? 0.34 : 0.16)
        context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.strokeStyle = rgba(i % 3 ? palette.primary : palette.secondary, alpha); context.lineWidth = mouseNear ? .8 : .55; context.stroke()
        if (!mobile && (i * 17 + j * 13) % 19 === 0) { const pulse = (Math.sin(now / 900 + i + j) + 1) / 2; const px = a.x + dx * pulse; const py = a.y + dy * pulse; context.beginPath(); context.arc(px, py, 1.2, 0, Math.PI * 2); context.fillStyle = rgba(palette.primary, .38); context.fill() }
      }
      for (let index = ripples.length - 1; index >= 0; index -= 1) { const ripple = ripples[index]; ripple.radius += 1.2 * delta; ripple.alpha -= .012 * delta; if (ripple.alpha <= 0) { ripples.splice(index, 1); continue } context.beginPath(); context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2); context.strokeStyle = rgba(palette.primary, ripple.alpha); context.lineWidth = 1; context.stroke() }
      nodes.forEach((node, index) => { const pulse = .74 + Math.sin(now / 1100 + node.phase) * .2; const near = Math.hypot(mouse.x - node.x, mouse.y - node.y) < config.mouseRadius; const color = index % 4 === 0 ? palette.secondary : palette.primary; context.beginPath(); context.arc(node.x, node.y, node.radius * (near ? 1.45 : pulse), 0, Math.PI * 2); context.shadowBlur = near ? 15 : 8; context.shadowColor = rgba(color, .8); context.fillStyle = rgba(color, near ? .9 : .65); context.fill(); context.shadowBlur = 0 })
      frameId = requestAnimationFrame(draw)
    }
    resize(); window.addEventListener('resize', resize); window.addEventListener('pointermove', move, { passive: true }); window.addEventListener('click', click, { passive: true }); document.addEventListener('visibilitychange', visibility); frameId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frameId); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move); window.removeEventListener('click', click); document.removeEventListener('visibilitychange', visibility) }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" aria-hidden="true" />
}
