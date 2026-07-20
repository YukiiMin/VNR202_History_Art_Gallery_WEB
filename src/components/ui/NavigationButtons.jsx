import { ChevronLeft, ChevronRight } from 'lucide-react'
import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'

/**
 * NavigationButtons - Nút điều hướng (tham khảo bản nâng cao).
 * - Nút cố định giữa viewport, full-height vùng bấm
 * - Ripple khi click, trạng thái chuyển trang (isTransitioning)
 * - Hỗ trợ bàn phím (← →), thanh tiến trình dưới, overlay chuyển trang
 */
const NavigationButtons = ({
  currentIndex,
  totalSections,
  onPrevious,
  onNext,
  currentIcon,
}) => {
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < totalSections - 1

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [rippleLeft, setRippleLeft] = useState({ x: 0, y: 0, show: false })
  const [rippleRight, setRippleRight] = useState({ x: 0, y: 0, show: false })

  const handlePrevious = useCallback(() => {
    if (!hasPrevious || isTransitioning) return
    setIsTransitioning(true)
    onPrevious()
    setTimeout(() => setIsTransitioning(false), 300)
  }, [hasPrevious, isTransitioning, onPrevious])

  const handleNext = useCallback(() => {
    if (!hasNext || isTransitioning) return
    setIsTransitioning(true)
    onNext()
    setTimeout(() => setIsTransitioning(false), 300)
  }, [hasNext, isTransitioning, onNext])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevious()
      else if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrevious, handleNext])

  const createRipple = (e, side) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (side === 'left') {
      setRippleLeft({ x, y, show: true })
      setTimeout(() => setRippleLeft((prev) => ({ ...prev, show: false })), 600)
    } else {
      setRippleRight({ x, y, show: true })
      setTimeout(() => setRippleRight((prev) => ({ ...prev, show: false })), 600)
    }
  }

  const onPreviousClick = (e) => {
    e.stopPropagation()
    createRipple(e, 'left')
    handlePrevious()
  }

  const onNextClick = (e) => {
    e.stopPropagation()
    createRipple(e, 'right')
    handleNext()
  }

  const progressPercentage = totalSections > 0 ? ((currentIndex + 1) / totalSections) * 100 : 0

  const rippleSpan = (side) => {
    const r = side === 'left' ? rippleLeft : rippleRight
    if (!r.show) return null
    return (
      <span
        className="absolute rounded-full bg-primary-red/30 pointer-events-none w-2.5 h-2.5 animate-nav-ripple"
        style={{ left: r.x, top: r.y }}
        aria-hidden
      />
    )
  }

  const zoneClass =
    'fixed top-0 bottom-0 w-20 md:w-28 z-20 cursor-pointer group ' +
    'transition-colors duration-300 hover:bg-black/5'
  const btnClass =
    'absolute top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-3 rounded-full overflow-hidden ' +
    'bg-white shadow-lg border-2 border-primary-red/20 hover:border-primary-red ' +
    'transition-all duration-300 ease-out active:scale-95 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed ' +
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-red/30 ' +
    'hover:shadow-xl hover:scale-110'

  return (
    <>
      {/* Trang trước */}
      {hasPrevious && (
        <div
          className={`left-0 ${zoneClass}`}
          onClick={handlePrevious}
          onKeyDown={(e) => e.key === 'Enter' && handlePrevious()}
          role="button"
          tabIndex={0}
          aria-label="Vùng điều hướng trang trước"
        >
          <button
            type="button"
            className={`left-4 ${btnClass} hover:-translate-x-1`}
            onClick={onPreviousClick}
            disabled={isTransitioning}
            aria-label="Trang trước"
          >
            {rippleSpan('left')}
            <ChevronLeft className="w-5 h-5 text-primary-red shrink-0 transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
            <span className="font-semibold text-primary-red text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-32 transition-all duration-300 overflow-hidden whitespace-nowrap">
              Trang trước
            </span>
          </button>
          <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
            <ChevronLeft className="w-8 h-8 text-primary-red animate-nav-bounce-left" />
          </div>
        </div>
      )}

      {/* Trang tiếp */}
      {hasNext && (
        <div
          className={`right-0 ${zoneClass}`}
          onClick={handleNext}
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
          role="button"
          tabIndex={0}
          aria-label="Vùng điều hướng trang tiếp"
        >
          <button
            type="button"
            className={`right-4 ${btnClass} hover:translate-x-1`}
            onClick={onNextClick}
            disabled={isTransitioning}
            aria-label="Trang tiếp"
          >
            {rippleSpan('right')}
            <span className="font-semibold text-primary-red text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-32 transition-all duration-300 overflow-hidden whitespace-nowrap order-first">
              Trang tiếp
            </span>
            <ChevronRight className="w-5 h-5 text-primary-red shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </button>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
            <ChevronRight className="w-8 h-8 text-primary-red animate-nav-bounce-right" />
          </div>
        </div>
      )}

      {/* Thanh tiến trình dưới (tham khảo bản nâng cao) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-2 border-primary-red/10 shadow-lg z-20">
        <div className="h-1 bg-primary-red/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary-red to-heritage-gold transition-all duration-500 ease-out shadow-lg shadow-primary-red/30"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-nav-shimmer" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 pointer-events-none">
            {Array.from({ length: totalSections }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentIndex
                    ? 'bg-primary-red scale-125 shadow-md shadow-primary-red/40'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl animate-bounce-slow">{currentIcon}</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Đang xem</span>
              <span className="text-sm font-bold text-primary-red">
                Phần {currentIndex + 1} / {totalSections}
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-gray-500">Tiến độ</span>
            <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-heritage-gold to-green-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm font-bold text-primary-red">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">←</kbd>
            <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded">→</kbd>
            <span>điều hướng</span>
          </div>
        </div>
      </div>

      {/* Overlay chuyển trang */}
      {isTransitioning && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-sm z-45 animate-fade-in pointer-events-none flex items-center justify-center"
          aria-hidden
        >
          <div className="w-12 h-12 border-4 border-primary-red border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  )
}

NavigationButtons.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  totalSections: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentIcon: PropTypes.string.isRequired,
}

export default NavigationButtons
