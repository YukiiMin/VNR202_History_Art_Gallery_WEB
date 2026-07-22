import PropTypes from 'prop-types'

/**
 * QuoteBox - Trích dẫn.
 * Thiết kế: đường kẻ trái nhỏ, italic serif — không icon to, không slide-in.
 */
const QuoteBox = ({ quote }) => {
  if (!quote) return null

  return (
    <blockquote className="my-6 pl-5 border-l-2 border-heritage-gold">
      <p className="font-serif italic text-gray-700 text-base md:text-lg leading-relaxed">
        {quote}
      </p>
    </blockquote>
  )
}

QuoteBox.propTypes = {
  quote: PropTypes.string,
}

export default QuoteBox
