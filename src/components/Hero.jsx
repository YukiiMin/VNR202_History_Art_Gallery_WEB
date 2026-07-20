import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import museumHall from '../assets/images/museum-hall.png'

const Hero = ({ onExplore }) => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(215,0,25,0.3) 0%, rgba(15,5,5,0.95) 90%), url(${museumHall})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.3) brightness(0.7)',
        }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-heritage-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content with 3D Tilt */}
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        scale={1.03}
        transitionSpeed={1500}
        className="z-10 w-full max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="relative text-center p-12 md:p-16 bg-gradient-to-br from-black/70 via-red-950/60 to-black/70 backdrop-blur-xl border-2 border-heritage-gold/40 rounded-2xl shadow-2xl"
        >
          {/* Top Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent mb-8"
          />

          {/* Sparkle Icon */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-heritage-gold" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-display font-black mb-4 leading-tight tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient drop-shadow-[0_4px_12px_rgba(255,215,0,0.6)]">
              LỊCH SỬ VIỆT NAM
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-3xl text-heritage-gold/90 font-light mb-6 tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kháng Chiến Chống Giặc Ngoại Xâm
          </motion.h2>

          {/* Period Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-6 py-2 bg-heritage-gold/20 border border-heritage-gold/40 rounded-full mb-6"
          >
            <span className="text-heritage-gold font-semibold text-lg">
              1945 - 1975
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-xl text-gray-300 italic mb-10 font-display max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            "Hành trình 30 năm kháng chiến anh hùng của dân tộc Việt Nam
            chống thực dân Pháp và đế quốc Mỹ xâm lược"
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={onExplore}
            className="relative px-10 py-4 text-lg font-bold uppercase tracking-widest bg-transparent text-heritage-gold border-2 border-heritage-gold overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="relative z-10 group-hover:text-primary-red transition-colors duration-300">
              Khám Phá Lịch Sử
            </span>
            <motion.div
              className="absolute inset-0 bg-heritage-gold"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: 'easeOut' }}
            className="h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent mt-8"
          />
        </motion.div>
      </Tilt>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-heritage-gold opacity-80"
      >
        <ArrowDown size={36} strokeWidth={2.5} />
      </motion.div>
    </div>
  )
}

export default Hero
