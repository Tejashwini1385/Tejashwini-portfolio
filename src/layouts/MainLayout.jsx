import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NeuralNetworkBackground from '../components/NeuralNetworkBackground'
import BackToTop from '../components/BackToTop'
import PortfolioLoader from '../components/PortfolioLoader'
import { useCallback, useEffect, useState } from 'react'
export default function MainLayout({ children }) {
  const [loading, setLoading] = useState(true)
  const hideLoader = useCallback(() => setLoading(false), [])
  useEffect(() => { const showLoader = () => setLoading(true); window.addEventListener('portfolio:load-home', showLoader); return () => window.removeEventListener('portfolio:load-home', showLoader) }, [])
  return <div className="relative isolate min-h-screen overflow-x-clip bg-[#f7f8fc] dark:bg-[#080b14]"><NeuralNetworkBackground /><div className="relative z-10"><Navbar /><main className="mx-auto min-h-[calc(100vh-150px)] max-w-6xl px-5 py-14 lg:px-8 lg:py-20">{children}</main><Footer /><BackToTop /></div>{loading && <PortfolioLoader onComplete={hideLoader} />}</div>
}
