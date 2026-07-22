import PropTypes from 'prop-types'

/**
 * HumanStoryBox - Câu chuyện một con người cụ thể trong section.
 * Đây là phần "thổi hồn" — biến nội dung từ liệt kê thành cảm xúc.
 */
const HumanStoryBox = ({ story, name }) => {
  if (!story) return null

  return (
    <aside className="my-10 flex gap-4 max-w-3xl">
      {/* Dọc ngăn cách bằng accent line */}
      <div className="w-1 shrink-0 bg-gradient-to-b from-heritage-gold to-transparent" />
      <div className="flex-1">
        {name && (
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-heritage-gold-dark mb-2">
            ◆ Một con người
          </div>
        )}
        <p className="font-serif text-base md:text-lg text-gray-700 leading-relaxed italic">
          {story}
        </p>
        {name && (
          <p className="mt-2 text-xs text-gray-500 not-italic">— {name}</p>
        )}
      </div>
    </aside>
  )
}

HumanStoryBox.propTypes = {
  story: PropTypes.string,
  name: PropTypes.string,
}

export default HumanStoryBox
