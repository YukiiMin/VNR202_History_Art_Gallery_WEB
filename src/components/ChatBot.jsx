import { motion as Motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const VA_AVATAR = '/ChatBot_Assitant.png'
const WEBHOOK_URL =
  'https://yukiimin.app.n8n.cloud/webhook/91bbf0c2-9f69-49dc-9be7-a85c43797b24'

/**
 * Làm sạch output AI: bỏ các dấu markdown (*, **, _, #) và chuyển bullet
 * markdown (- item, * item) thành ký tự "•" để hiển thị đẹp hơn.
 */
const sanitizeMarkdown = (raw) => {
  if (!raw) return ''
  return raw
    .replace(/\r\n/g, '\n')
    // Bold/italic: **text**, *text*, __text__, _text_
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
    .replace(/(^|[^_])_([^_\n]+)_/g, '$1$2')
    // Heading: ### text -> text
    .replace(/^#{1,6}\s*/gm, '')
    // Danh sách markdown ở đầu dòng: "- item", "* item", "+ item"
    .replace(/^\s*[-*+]\s+/gm, '• ')
    // Blockquote
    .replace(/^\s*>\s?/gm, '')
    // Loại bỏ dấu ` code
    .replace(/`([^`]+)`/g, '$1')
    // Gom nhiều dòng trống liên tiếp
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const suggestionPrompts = [
  {
    id: 1,
    text: 'Tóm tắt 2 cuộc kháng chiến chống Pháp và chống Mỹ',
    icon: '📜',
  },
  {
    id: 2,
    text: 'Chiến thắng Điện Biên Phủ có ý nghĩa gì?',
    icon: '🏆',
  },
  {
    id: 3,
    text: 'Sự kiện Tết Mậu Thân 1968',
    icon: '💥',
  },
  {
    id: 4,
    text: 'Ai là người khai sinh nước Việt Nam Dân chủ Cộng hòa?',
    icon: '🇻🇳',
  },
  {
    id: 5,
    text: 'Chiến dịch Hồ Chí Minh 1975',
    icon: '🎯',
  },
  {
    id: 6,
    text: 'Điện Biên Phủ trên không là gì?',
    icon: '✈️',
  },
]

const ChatBot = ({ embedded = false }) => {
  const [isOpen, setIsOpen] = useState(embedded)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Xin chào các Cóc FPT! Mình là Hướng dẫn viên ảo của phòng triển lãm Lịch sử Việt Nam 1945-1975. Các bạn sinh viên FPT muốn khám phá gì hôm nay nè? Cứ hỏi thoải mái nhé, mình sẽ kể chuyện lịch sử một cách sinh động nhất!',
      sender: 'bot',
      isComplete: true,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [typingMessageId, setTypingMessageId] = useState(null)
  const messagesEndRef = useRef(null)
  const typewriterIntervalRef = useRef(null)

  useEffect(() => {
    if (embedded) setIsOpen(true)
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen, embedded])

  const typewriterEffect = (fullText, messageId) => {
    let currentIndex = 0
    setIsTyping(true)

    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current)
    }

    typewriterIntervalRef.current = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  text: fullText.substring(0, currentIndex),
                  isComplete: currentIndex === fullText.length,
                }
              : msg
          )
        )
        currentIndex++
      } else {
        clearInterval(typewriterIntervalRef.current)
        setIsTyping(false)
        setTypingMessageId(null)
      }
    }, 15)
  }

  const handleSuggestionClick = async (suggestionText) => {
    const userMsg = {
      id: Date.now(),
      text: suggestionText,
      sender: 'user',
      isComplete: true,
    }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)
    const botMessageId = Date.now() + 1
    setMessages((prev) => [
      ...prev,
      {
        id: botMessageId,
        text: '',
        sender: 'bot',
        isComplete: false,
      },
    ])
    setTypingMessageId(botMessageId)

    const responseText = await getReplyFromWebhook(suggestionText)
    typewriterEffect(responseText, botMessageId)
  }

const getReplyFromWebhook = async (userText) => {
    try {
      // 1. Tạo hoặc lấy sessionId từ trình duyệt để duy trì bộ nhớ (Memory)
      let currentSessionId = localStorage.getItem('chatbot_session');
      if (!currentSessionId) {
        currentSessionId = 'fpt_student_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('chatbot_session', currentSessionId);
      }

      // 2. Định dạng payload chuẩn khớp với n8n (sessionId và question)
      const payload = {
        sessionId: currentSessionId,
        question: userText
      };

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error('Webhook HTTP Error:', res.status);
        return sanitizeMarkdown('Server đang bận, các Cóc FPT thử lại sau nhé!');
      }

      const data = await res.json();
      console.log('Webhook Response:', data);

      // AI Agent trong n8n thường trả kết quả text trong trường "output"
      const reply = data.output || data.text || data.response || data.message;

      if (reply) {
        const raw = typeof reply === 'string' ? reply : JSON.stringify(reply);
        return sanitizeMarkdown(raw);
      }

      if (typeof data === 'string') return sanitizeMarkdown(data);
      if (data.output?.text) return sanitizeMarkdown(data.output.text);

      return 'Đã nhận phản hồi nhưng không đọc được. Các Cóc FPT thử hỏi cách khác nhé!';
    } catch (error) {
      console.error('Webhook Error:', error);
      return 'Ối! Server đang bận, các Cóc FPT thử hỏi lại sau nhé!';
    }
  }

  const handleSendMessage = async (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || isTyping) return
    setInput('')
    const userMsg = {
      id: Date.now(),
      text,
      sender: 'user',
      isComplete: true,
    }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)
    const botMessageId = Date.now() + 1
    setMessages((prev) => [
      ...prev,
      {
        id: botMessageId,
        text: '',
        sender: 'bot',
        isComplete: false,
      },
    ])
    setTypingMessageId(botMessageId)

    const responseText = await getReplyFromWebhook(text)
    typewriterEffect(responseText, botMessageId)
  }

  if (!isOpen && !embedded) return null

  const chatPanel = (
    <Motion.div
      className="flex flex-col h-full bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-amber-400/50 overflow-hidden"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Header - Museum Guide Theme */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 text-white shrink-0 border-b border-amber-300/30 shadow-lg">
        <div className="relative">
          <img
            src={VA_AVATAR}
            alt="Hướng dẫn viên"
            className="w-12 h-12 rounded-full object-cover ring-3 ring-white/50 shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </div>
        <div className="min-w-0">
          <h2 className="font-bold text-white text-lg">Hướng dẫn viên ảo</h2>
          <p className="text-xs text-amber-100 flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Sẵn sàng kể chuyện lịch sử
          </p>
        </div>
        {!embedded && (
          <Motion.button
            type="button"
            onClick={() => setIsOpen(false)}
            className="ml-auto p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Đóng"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </Motion.button>
        )}
      </div>

      {/* Info Banner */}
      <div className="px-4 py-2 bg-amber-100/80 dark:bg-amber-900/30 border-b border-amber-300/30 shrink-0">
        <p className="text-xs text-amber-800 dark:text-amber-200 text-center">
          Phòng triển lãm: <span className="font-semibold">Lịch Sử Việt Nam 1945-1975</span>
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[50vh]">
        {messages.map((msg, idx) => (
          <Motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.25,
              delay: idx === messages.length - 1 ? 0.05 : 0,
            }}
            className={`flex gap-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
              <img
                src={VA_AVATAR}
                alt="Hướng dẫn viên"
                className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5 ring-2 ring-amber-300 shadow-sm"
              />
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-br-md shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-md border border-amber-200/50 dark:border-gray-600 shadow-md'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap leading-relaxed">
                {msg.text ||
                  (msg.sender === 'bot' &&
                  isTyping &&
                  typingMessageId === msg.id
                    ? 'Đang suy nghĩ... ✨'
                    : '')}
              </p>
            </div>
          </Motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions - Tour Guide Style */}
      <div className="px-4 pb-2 shrink-0">
        <p className="text-xs text-amber-700 dark:text-amber-300 mb-2 font-medium">
          ✨ Gợi ý tham quan:
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestionPrompts.map((s) => (
            <Motion.button
              key={s.id}
              type="button"
              onClick={() => handleSuggestionClick(s.text)}
              disabled={isTyping}
              className="text-xs px-3 py-2 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 text-amber-800 dark:text-amber-200 border border-amber-300/50 dark:border-gray-600 hover:from-amber-200 hover:to-orange-200 hover:border-amber-400 hover:shadow-md disabled:opacity-50 transition-all duration-200 shadow-sm"
              whileHover={!isTyping ? { scale: 1.03, y: -1 } : {}}
              whileTap={!isTyping ? { scale: 0.98 } : {}}
            >
              {s.icon} {s.text}
            </Motion.button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-amber-300/30 dark:border-gray-600 shrink-0 bg-gradient-to-t from-amber-50/80 to-transparent dark:from-gray-800/50"
      >
        <div className="flex gap-2">
          <Motion.input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi về lịch sử Việt Nam..."
            className="flex-1 px-4 py-3 rounded-xl border-2 border-amber-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-amber-500/60 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-sm"
            disabled={isTyping}
            whileFocus={{ boxShadow: '0 0 0 3px rgba(251, 191, 36, 0.3)' }}
          />
          <Motion.button
            type="submit"
            disabled={isTyping || !input.trim()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={
              !(isTyping || !input.trim())
                ? { scale: 1.02, boxShadow: '0 6px 20px rgba(180, 83, 9, 0.4)' }
                : {}
            }
            whileTap={!(isTyping || !input.trim()) ? { scale: 0.98 } : {}}
          >
            ➤
          </Motion.button>
        </div>
      </form>
    </Motion.div>
  )

  if (embedded) {
    return (
      <div
        className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-4 pt-24"
        style={{
          background:
            'linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fcd34d 50%, #f59e0b 75%, #d97706 100%)',
        }}
      >
        <div className="w-full max-w-[900px] h-[650px]">{chatPanel}</div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Guide Button */}
      <Motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Cần hướng dẫn?
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
        <div className="w-[64px] h-[64px] bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
          {isOpen ? (
            <span className="text-2xl text-white">✕</span>
          ) : (
            <img
              src={VA_AVATAR}
              alt="Hướng dẫn viên"
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
        </div>
      </Motion.button>

      <div className="w-[400px] h-[580px] mt-4">{chatPanel}</div>
    </div>
  )
}

export default ChatBot
