import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * RememberThisBox - Displays key points to remember with dashed border
 */
const RememberThisBox = ({ content }) => {
  if (!content) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="remember-box mt-8 p-5 rounded-xl border-2 border-dashed border-red-300 bg-gradient-to-br from-red-50 to-pink-50 text-center"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-3xl">✨</div>
        <div className="text-sm font-bold text-primary-red uppercase tracking-wide">
          GHI NHỚ
        </div>
        <p className="text-base font-semibold text-primary-red leading-relaxed max-w-2xl">
          {content}
        </p>
      </div>
    </motion.div>
  )
}

RememberThisBox.propTypes = {
  content: PropTypes.string,
}

export default RememberThisBox
