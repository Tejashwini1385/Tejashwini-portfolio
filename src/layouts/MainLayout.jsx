import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NeuralNetworkBackground from '../components/NeuralNetworkBackground'
import BackToTop from '../components/BackToTop'
export default function MainLayout({ children }) { return <div className="relative isolate min-h-screen overflow-x-clip bg-[#f7f8fc] dark:bg-[#080b14]"><NeuralNetworkBackground /><div className="relative z-10"><Navbar /><main className="mx-auto min-h-[calc(100vh-150px)] max-w-6xl px-5 py-14 lg:px-8 lg:py-20">{children}</main><Footer /><BackToTop /></div></div> }
