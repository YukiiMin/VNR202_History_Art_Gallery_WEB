import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * QuoteBox - Displays quotes from Bác Hồ with special styling
 */
const QuoteBox = ({ quote }) => {
  if (!quote) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="quote-box my-3 p-4 pl-5 bg-amber-50 border-l-4 border-heritage-gold rounded-r-lg"
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl flex-shrink-0">💬</div>
        <p className="text-base italic text-gray-700 leading-relaxed">
          "{quote}"
        </p>
      </div>
    </motion.div>
  )
}

QuoteBox.propTypes = {
  quote: PropTypes.string,
}

export default QuoteBox
