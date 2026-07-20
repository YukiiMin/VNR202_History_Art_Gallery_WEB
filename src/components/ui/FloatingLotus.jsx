import { motion } from 'framer-motion'
import { useState } from 'react'

// Generate lotus data outside component
const generateLotuses = () => {
  const count = 10
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    // Spread across left and right edges
    left: i % 2 === 0 ? Math.random() * 20 : 80 + Math.random() * 20,
    top: Math.random() * 85 + 5,
    size: 60 + Math.random() * 80,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 8,
    rotation: Math.random() * 360,
    opacity: 0.85 + Math.random() * 0.15,
    // Randomly choose between full flower and bud
    isBud: Math.random() > 0.6,
  }))
}

/**
 * FloatingLotus - Beautiful watercolor lotus flowers with lily pads
 */
const FloatingLotus = () => {
  const [lotuses] = useState(generateLotuses)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {lotuses.map((lotus) => (
        <motion.div
          key={lotus.id}
          className="absolute"
          style={{
            left: `${lotus.left}%`,
            top: `${lotus.top}%`,
            width: lotus.size,
            height: lotus.size,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [lotus.rotation, lotus.rotation + 8, lotus.rotation],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: lotus.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: lotus.delay,
          }}
        >
          {/* Lily pad layer */}
          <img
            src="/lotus_lily_pad_1769810119318.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: lotus.opacity,
              transform: 'scale(1.2)',
            }}
          />

          {/* Lotus flower layer */}
          <img
            src={
              lotus.isBud
                ? '/lotus_pink_small_1769810134882.png'
                : '/lotus_flower_pink_1769810101803.png'
            }
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: lotus.opacity,
              transform: 'translateY(-10%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingLotus
