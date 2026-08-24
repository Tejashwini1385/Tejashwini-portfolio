import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Munify from './pages/Munify'
import Certifications from './pages/Certifications'
import './index.css'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 300000, retry: 1 } } })
createRoot(document.getElementById('root')).render(<StrictMode><QueryClientProvider client={queryClient}><BrowserRouter><Routes><Route element={<App />}><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/skills" element={<Skills />} /><Route path="/experience" element={<Experience />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/munify" element={<Munify />} /><Route path="/certifications" element={<Certifications />} /><Route path="/contact" element={<Contact />} /></Route></Routes></BrowserRouter></QueryClientProvider></StrictMode>)
