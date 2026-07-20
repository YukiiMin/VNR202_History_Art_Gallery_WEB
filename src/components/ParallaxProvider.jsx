import { motion, useScroll, useTransform } from 'framer-motion'
import drumPattern from '../assets/images/drum-pattern.png'
import silkBg from '../assets/images/silk-bg.png'

const ParallaxProvider = ({ children }) => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, 500])
  const y2 = useTransform(scrollY, [0, 2000], [0, -200])

  return (
    <div className="relative overflow-hidden min-h-screen bg-cream-bg">
      {/* Dynamic Background Layers */}

      {/* Layer 1: Deep Red Silk - Very light opacity for bright theme */}
      <motion.div
        className="fixed -top-[100px] left-0 w-full h-[120vh] z-0 bg-cover bg-center opacity-[0.05]"
        style={{
          backgroundImage: `url(${silkBg})`,
          y: y1,
        }}
      />

      {/* Layer 2: Bronze Drum Pattern - Very subtle */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-0 bg-contain opacity-[0.03]"
        style={{
          backgroundImage: `url(${drumPattern})`,
          y: y2,
        }}
      />

      {/* Layer 3: Floating Particles (Dust/Stars) */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-heritage-gold shadow-[0_0_4px_var(--primary-gold)]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default ParallaxProvider
