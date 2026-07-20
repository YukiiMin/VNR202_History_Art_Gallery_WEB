import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * SectionHeader - Displays section header with icon, title, and summary
 */
const SectionHeader = ({ icon, title, summary }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      {/* Icon */}
      <div className="text-5xl mb-4 animate-bounce-slow">{icon}</div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-red mb-3">
        {title}
      </h2>

      {/* Summary */}
      <p className="text-lg md:text-xl text-gray-600 italic font-medium max-w-3xl mx-auto">
        {summary}
      </p>
    </motion.div>
  )
}

SectionHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default SectionHeader
