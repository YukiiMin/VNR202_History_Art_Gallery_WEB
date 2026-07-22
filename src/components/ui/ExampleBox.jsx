import PropTypes from 'prop-types'

/**
 * ExampleBox - Ví dụ / câu chuyện minh họa cụ thể.
 * Thiết kế: kín đáo, sans-serif, tone khác quote (dùng blue thay vì gold).
 */
const ExampleBox = ({ example }) => {
  if (!example) return null

  return (
    <div className="my-6 pl-5 border-l-2 border-blue-400/70">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-1">
        Ví dụ
      </div>
      <p className="text-base text-gray-700 leading-relaxed">{example}</p>
    </div>
  )
}

ExampleBox.propTypes = {
  example: PropTypes.string,
}

export default ExampleBox
