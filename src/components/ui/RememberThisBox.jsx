import PropTypes from 'prop-types'

/**
 * RememberThisBox - Câu kết của section.
 * Thiết kế: full-width ngăn, dùng serif lớn, ít trang trí — để nội dung là trung tâm.
 */
const RememberThisBox = ({ content }) => {
  if (!content) return null

  return (
    <aside className="my-10 px-6 py-8 border border-red-200 bg-gradient-to-br from-red-50/60 to-amber-50/40 max-w-3xl">
      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-700 mb-3">
        ◇ Ghi nhớ
      </div>
      <p className="text-lg md:text-xl font-serif font-semibold text-gray-900 leading-snug">
        {content}
      </p>
    </aside>
  )
}

RememberThisBox.propTypes = {
  content: PropTypes.string,
}

export default RememberThisBox
