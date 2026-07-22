import { useEffect, useState } from 'react'
import { contentData } from '../data/content-improved.js'
import DetailCard from './ui/DetailCard'
import FloatingLotus from './ui/FloatingLotus'
import HumanStoryBox from './ui/HumanStoryBox'
import KeyTakeawayBox from './ui/KeyTakeawayBox'
import NavigationButtons from './ui/NavigationButtons'
import NavigationDots from './ui/NavigationDots'
import RememberThisBox from './ui/RememberThisBox'
import SectionHeader from './ui/SectionHeader'

const Library = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSection = contentData[currentIndex]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentIndex])

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1)
  }
  const handleNext = () => {
    if (currentIndex < contentData.length - 1) setCurrentIndex((prev) => prev + 1)
  }
  const handleNavigate = (index) => setCurrentIndex(index)

  return (
    <div className="paper-bg relative min-h-screen pb-32">
      {/* Floating Lotus background - giữ nguyên */}
      <FloatingLotus />

      {/* Navigation Dots */}
      <NavigationDots
        sections={contentData}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Editorial background header - ảnh full-width, opacity thấp, overlay chữ */}
          <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden mb-12 shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentSection.bgImage})`,
                opacity: 0.5,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <div className="text-white">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">
                  {currentSection.period}
                </div>
                <div className="text-xs opacity-70">{currentSection.factLine}</div>
              </div>
            </div>
          </div>

          {/* Section content */}
          <SectionHeader
            icon={currentSection.icon}
            title={currentSection.title}
            summary={currentSection.summary}
            narrative={currentSection.narrative}
            factLine={currentSection.factLine}
            tone={currentSection.tone}
          />

          {/* Human story - giữa narrative và details để đứt nhịp */}
          {currentSection.human && (
            <HumanStoryBox story={currentSection.human} />
          )}

          {/* Key takeaway */}
          {currentSection.keyTakeaway && (
            <KeyTakeawayBox content={currentSection.keyTakeaway} />
          )}

          {/* Detail cards */}
          <div className="mt-8">
            {currentSection.details.map((detail, index) => (
              <DetailCard key={index} detail={detail} index={index} />
            ))}
          </div>

          {/* Remember this - closing */}
          {currentSection.rememberThis && (
            <RememberThisBox content={currentSection.rememberThis} />
          )}
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
