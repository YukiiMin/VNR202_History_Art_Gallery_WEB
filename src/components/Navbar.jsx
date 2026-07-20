import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpen,
  Gamepad2,
  Home,
  Image,
  Menu,
  MessageSquare,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // Show navbar when at top of page
          if (currentScrollY < 10) {
            setIsVisible(true)
          }
          // Hide when scrolling down, show when scrolling up
          else if (
            currentScrollY > lastScrollY.current &&
            currentScrollY > 100
          ) {
            setIsVisible(false)
          } else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true)
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'library', label: 'Nội dung', icon: BookOpen },
    { id: 'gallery', label: 'Hình ảnh', icon: Image },
    { id: 'chat', label: 'Hỏi đáp AI', icon: MessageSquare },
    { id: 'game', label: 'Trò chơi', icon: Gamepad2 },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-r from-[#8B1538] via-[#A01C3A] to-[#8B1538] backdrop-blur-lg shadow-2xl border-b-2 border-heritage-gold"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container flex justify-between items-center h-20">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveTab('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/vietnam-flag.png"
              alt="Cờ Việt Nam"
              className="h-14 w-14 rounded-full border-3 border-heritage-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.9)] transition-all duration-300"
            />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-heritage-gold font-display tracking-wide drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)] group-hover:text-yellow-300 transition-colors">
              VIỆT NAM
            </span>
            <span className="text-xs font-medium text-heritage-gold/80 tracking-wider mt-0.5">
              30 Năm Kháng Chiến Chống Xâm Lược
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm
                                transition-all duration-300 border-2
                                ${
                                  activeTab === item.id
                                    ? 'bg-heritage-gold text-primary-red border-heritage-gold shadow-gold font-bold'
                                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-heritage-gold/50'
                                }
                            `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={18} />
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg bg-white/10 text-heritage-gold hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-gradient-to-b from-red-900 to-red-950 border-t border-heritage-gold/30"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActiveTab(item.id)
                    setIsOpen(false)
                  }}
                  className={`
                                        w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left font-medium
                                        transition-all duration-300
                                        ${
                                          activeTab === item.id
                                            ? 'bg-heritage-gold text-primary-red shadow-gold'
                                            : 'bg-white/5 text-white hover:bg-white/10'
                                        }
                                    `}
                >
                  <item.icon size={22} />
                  <span className="text-lg">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
