import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import ExampleBox from './ExampleBox'
import QuoteBox from './QuoteBox'

/**
 * DetailCard - Individual card for each detail item with hover effects
 */
const DetailCard = ({ detail, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="detail-card bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 mb-4"
    >
      {/* Subtitle */}
      <h4 className="text-lg font-semibold text-amber-600 mb-3 flex items-center gap-2">
        <span className="text-xl">📌</span>
        {detail.subtitle}
      </h4>

      {/* Main Text */}
      <p className="text-base text-gray-800 leading-relaxed mb-3">
        {detail.text}
      </p>

      {/* Quote if exists */}
      {detail.quote && <QuoteBox quote={detail.quote} />}

      {/* Example if exists */}
      {detail.example && <ExampleBox example={detail.example} />}
    </motion.div>
  )
}

DetailCard.propTypes = {
  detail: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    quote: PropTypes.string,
    example: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default DetailCard
