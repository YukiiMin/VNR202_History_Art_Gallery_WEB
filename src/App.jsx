import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ChatBot from './components/ChatBot'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Library from './components/Library'
import MiniGame from './components/MiniGame'
import Navbar from './components/Navbar'
import ParallaxProvider from './components/ParallaxProvider'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero onExplore={() => setActiveTab('library')} />
      case 'library':
        return <Library />
      case 'gallery':
        return <Gallery />
      case 'chat':
        return <ChatBot embedded={true} />
      case 'game':
        return <MiniGame />
      default:
        return <Hero />
    }
  }

  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="pb-10"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="text-center py-6 bg-black/50 backdrop-blur-md text-white text-sm border-t border-white/10">
          <p>
            © 2026 Bảo tàng Số: Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân
            tộc
          </p>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

export default App
