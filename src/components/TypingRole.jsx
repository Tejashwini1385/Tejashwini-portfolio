import { useEffect, useState } from 'react'
const roles = ['Software Developer', 'Backend Developer', 'AI/ML Enthusiast', 'Problem Solver']
export default function TypingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => { const timer = setInterval(() => setIndex((value) => (value + 1) % roles.length), 3200); return () => clearInterval(timer) }, [])
  return <span className="typing-role">{roles[index]}<i aria-hidden="true" /></span>
}
