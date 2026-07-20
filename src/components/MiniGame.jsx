import { motion } from 'framer-motion'
import { Brain, CheckCircle, RotateCcw, Trophy, XCircle } from 'lucide-react'
import { useState } from 'react'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'
import FloatingLotus from './ui/FloatingLotus'

const questions = [
  {
    question: 'Tư tưởng Hồ Chí Minh xác định đại đoàn kết là gì?',
    options: [
      'Một thủ thuật chính trị nhất thời',
      'Một chiến lược lâu dài, quyết định thành công của cách mạng',
      'Một giải pháp tình thế',
      'Một khẩu hiệu tuyên truyền',
    ],
    answer: 1,
  },
  {
    question: 'Nòng cốt của khối đại đoàn kết toàn dân tộc là giai cấp nào?',
    options: [
      'Công nhân',
      'Nông dân',
      'Liên minh Công - Nông - Trí thức',
      'Tầng lớp trí thức',
    ],
    answer: 2,
  },
  {
    question:
      'Điền vào chỗ trống: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, ..."',
    options: [
      'quyết thắng lợi',
      'đại thành công',
      'vinh quang',
      'thắng lợi lớn',
    ],
    answer: 1,
  },
  {
    question: 'Nguyên tắc hoạt động của Mặt trận dân tộc thống nhất là gì?',
    options: [
      'Tập trung dân chủ',
      'Mệnh lệnh hành chính',
      'Hiệp thương dân chủ',
      'Thiểu số phục tùng đa số',
    ],
    answer: 2,
  },
  {
    question: 'Để xây dựng khối đại đoàn kết, Bác Hồ căn dặn phải làm gì?',
    options: [
      'Phải tin vào dân, dựa vào dân',
      'Phải có lòng khoan dung, độ lượng',
      'Tìm điểm tương đồng, hạn chế khác biệt',
      'Tất cả các ý trên',
    ],
    answer: 3,
  },
]

const MiniGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleAnswerOptionClick = (index) => {
    setSelectedOption(index)
    const correct = index === questions[currentQuestion].answer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
        setSelectedOption(null)
        setIsCorrect(null)
      } else {
        setShowScore(true)
      }
    }, 1200)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
    setIsCorrect(null)
  }

  return (
    <div className="relative min-h-[85vh]">
      {/* Floating Lotus Background */}
      <FloatingLotus />

      <div className="flex justify-center items-center min-h-[85vh] w-full py-16 px-4 relative z-10">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-heritage-gold rounded-full mb-4">
              <Brain className="w-8 h-8 text-primary-red" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-red mb-3">
              Thử Tài Kiến Thức
            </h2>
            <p className="text-gray-600 text-lg">
              Trả lời {questions.length} câu hỏi để kiểm tra độ hiểu biết của
              bạn
            </p>
          </motion.div>

          {showScore ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-panel rounded-3xl p-12 md:p-16 text-center shadow-heritage-lg"
            >
              {score === questions.length && (
                <Fireworks autorun={{ speed: 3 }} />
              )}

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="inline-block mb-6"
              >
                <Trophy className="w-20 h-20 md:w-24 md:h-24 text-heritage-gold drop-shadow-lg" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-display font-black text-primary-red mb-4">
                Điểm số: {score} / {questions.length}
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 mb-10">
                {score === questions.length
                  ? '🎉 Tuyệt vời! Bạn đã nắm vững kiến thức.'
                  : '💪 Hãy thử lại để đạt điểm tuyệt đối nhé!'}
              </p>

              <motion.button
                onClick={resetQuiz}
                className="btn-primary inline-flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw size={22} />
                Chơi lại
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-panel rounded-3xl p-8 md:p-12 shadow-heritage min-h-[450px] flex flex-col"
            >
              {/* Progress */}
              <div className="flex justify-between items-center mb-8 text-gray-500 font-medium">
                <span className="text-sm md:text-base">
                  Câu hỏi {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm md:text-base bg-heritage-gold/20 px-4 py-1 rounded-full text-primary-red font-bold">
                  Điểm: {score}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 leading-relaxed min-h-[80px] flex items-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-4 flex-1">
                {questions[currentQuestion].options.map((option, index) => {
                  let bgColor = 'bg-white/80'
                  let borderColor = 'border-gray-200'
                  let textColor = 'text-gray-800'
                  let icon = null

                  if (selectedOption !== null) {
                    if (index === questions[currentQuestion].answer) {
                      bgColor = 'bg-green-100'
                      borderColor = 'border-green-400'
                      textColor = 'text-green-900'
                      if (selectedOption === index)
                        icon = (
                          <CheckCircle size={24} className="text-green-600" />
                        )
                    } else if (selectedOption === index) {
                      bgColor = 'bg-red-100'
                      borderColor = 'border-red-400'
                      textColor = 'text-red-900'
                      icon = <XCircle size={24} className="text-red-600" />
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!selectedOption ? { scale: 1.02, x: 5 } : {}}
                      whileTap={!selectedOption ? { scale: 0.98 } : {}}
                      onClick={() =>
                        !selectedOption && handleAnswerOptionClick(index)
                      }
                      className={`
                                            ${bgColor} ${borderColor} ${textColor}
                                            p-5 md:p-6 rounded-2xl border-2 text-left font-medium text-base md:text-lg
                                            flex items-center justify-between transition-all duration-300
                                            ${!selectedOption ? 'hover:border-heritage-gold hover:shadow-md cursor-pointer' : 'cursor-default'}
                                        `}
                    >
                      <span className="flex-1">{option}</span>
                      {icon}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MiniGame
