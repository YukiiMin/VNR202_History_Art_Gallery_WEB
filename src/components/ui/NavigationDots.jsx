import { motion as Motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * NavigationDots - Chấm điều hướng bên phải, không chồng lên vùng nút Trang tiếp.
 * Vị trí: bên trái dải nút (right-[7rem]) để tránh overlap.
 */
const NavigationDots = ({ sections, currentIndex, onNavigate }) => {
  return (
    <div
      className="fixed right-28 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3"
      role="navigation"
      aria-label="Chuyển nhanh giữa các phần"
    >
      {sections.map((section, index) => (
        <Motion.button
          key={section.id}
          type="button"
          onClick={() => onNavigate(index)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2 ${
            index === currentIndex
              ? 'bg-heritage-gold scale-125 shadow-lg ring-2 ring-heritage-gold/50'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          whileHover={{ scale: 1.35 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Chuyển đến ${section.title}`}
          aria-current={index === currentIndex ? 'true' : undefined}
        >
          {/* Tooltip bên trái chấm để không bị khuất */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <span className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg block">
              {section.icon} {section.title}
            </span>
          </span>
        </Motion.button>
      ))}
    </div>
  )
}

NavigationDots.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default NavigationDots
