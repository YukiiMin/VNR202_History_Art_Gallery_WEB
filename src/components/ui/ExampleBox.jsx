import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * ExampleBox - Displays practical examples with blue accent
 */
const ExampleBox = ({ example }) => {
  if (!example) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="example-box my-3 p-4 pl-5 bg-blue-50 border-l-3 border-blue-400 rounded-r-lg"
    >
      <div className="flex items-start gap-2">
        <span className="text-xl flex-shrink-0">🔍</span>
        <div className="flex-1">
          <span className="text-sm font-semibold text-blue-700 mr-2">
            Ví dụ:
          </span>
          <span className="text-sm text-gray-700 leading-relaxed">
            {example}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

ExampleBox.propTypes = {
  example: PropTypes.string,
}

export default ExampleBox
