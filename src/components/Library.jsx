import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { contentData } from '../data/content-improved.js'
import DetailCard from './ui/DetailCard'
import FloatingLotus from './ui/FloatingLotus'
import KeyTakeawayBox from './ui/KeyTakeawayBox'
import NavigationButtons from './ui/NavigationButtons'
import NavigationDots from './ui/NavigationDots'
import RememberThisBox from './ui/RememberThisBox'
import SectionHeader from './ui/SectionHeader'

const Library = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const currentSection = contentData[currentIndex]

  // Scroll to top when section changes (keyboard nav xử lý trong NavigationButtons)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentIndex])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < contentData.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handleNavigate = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative min-h-screen pb-32">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-heritage-gold z-[999] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Lotus Background */}
      <FloatingLotus />

      {/* Navigation Dots */}
      <NavigationDots
        sections={contentData}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gradient mb-4">
              Hành Trình Di Sản
            </h1>
            <p className="text-lg text-gray-600">
              Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc
            </p>
          </motion.div>

          {/* Current Section */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <SectionHeader
              icon={currentSection.icon}
              title={currentSection.title}
              summary={currentSection.summary}
            />

            {/* Key Takeaway */}
            {currentSection.keyTakeaway && (
              <KeyTakeawayBox content={currentSection.keyTakeaway} />
            )}

            {/* Details Cards */}
            <div className="space-y-4">
              {currentSection.details.map((detail, index) => (
                <DetailCard key={index} detail={detail} index={index} />
              ))}
            </div>

            {/* Remember This */}
            {currentSection.rememberThis && (
              <RememberThisBox content={currentSection.rememberThis} />
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavigationButtons
        currentIndex={currentIndex}
        totalSections={contentData.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIcon={currentSection.icon}
      />
    </div>
  )
}

export default Library
