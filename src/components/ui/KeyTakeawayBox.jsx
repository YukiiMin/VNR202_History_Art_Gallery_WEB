import PropTypes from 'prop-types'

/**
 * KeyTakeawayBox - "Bài học cốt lõi" của section.
 * Thiết kế: editorial-pull-quote, không icon to, không animate-in.
 */
const KeyTakeawayBox = ({ content }) => {
  return (
    <aside className="my-10 border-y border-heritage-gold/40 py-6 max-w-3xl">
      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-heritage-gold-dark mb-3">
        ◆ Điểm chính
      </div>
      <p className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed italic">
        "{content}"
      </p>
    </aside>
  )
}

KeyTakeawayBox.propTypes = {
  content: PropTypes.string.isRequired,
}

export default KeyTakeawayBox
