import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * KeyTakeawayBox - Displays the main takeaway point with gradient background
 */
const KeyTakeawayBox = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="key-takeaway-box my-6 p-5 rounded-xl border-2 border-heritage-gold bg-gradient-to-br from-yellow-50 to-amber-50 shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl flex-shrink-0 mt-1">💡</div>
        <div className="flex-1">
          <div className="text-sm font-bold text-heritage-gold-dark uppercase tracking-wide mb-2">
            ĐIỂM CHÍNH
          </div>
          <p className="text-base leading-relaxed text-gray-800 font-medium">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

KeyTakeawayBox.propTypes = {
  content: PropTypes.string.isRequired,
}

export default KeyTakeawayBox
