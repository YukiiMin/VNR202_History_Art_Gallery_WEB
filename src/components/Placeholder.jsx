import { motion } from 'framer-motion'

const Placeholder = ({ title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="container p-10 text-center"
  >
    <h2 className="text-3xl font-bold text-primary-red mb-4">{title}</h2>
    <p className="text-lg text-gray-600">Tính năng đang được phát triển...</p>
  </motion.div>
)

export default Placeholder
