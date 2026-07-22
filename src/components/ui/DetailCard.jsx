import PropTypes from 'prop-types'
import ExampleBox from './ExampleBox'
import QuoteBox from './QuoteBox'

/**
 * DetailCard - Một khối nội dung trong section.
 *
 * Layout: editorial — text flow, ảnh minh họa inline (nếu có), quote/example lồng.
 * KHÔNG dùng motion whileHover hay initial/whileInView — chỉ 1 fade-in nhẹ 1 lần.
 */
const DetailCard = ({ detail, index }) => {
  const { subtitle, text, image, imageCaption, quote, example } = detail

  return (
    <article className="my-8 max-w-3xl animate-fade-in">
      {/* Số thứ tự + subtitle */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
        <h4 className="text-lg md:text-xl font-display font-semibold text-gray-900">
          {subtitle}
        </h4>
      </div>

      {/* Ảnh minh họa (optional) */}
      {image && (
        <figure className="my-5">
          <img
            src={image}
            alt={imageCaption || subtitle}
            loading="lazy"
            className="w-full h-auto rounded-sm grayscale-[20%] hover:grayscale-0 transition-[filter] duration-500"
          />
          {imageCaption && (
            <figcaption className="mt-2 text-xs text-gray-500 italic text-center">
              — {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Body text — serif lớn, leading-relaxed */}
      <p className="font-serif text-base md:text-lg text-gray-700 leading-relaxed mb-2">
        {text}
      </p>

      {/* Lồng quote/example trong flow văn bản */}
      {quote && <QuoteBox quote={quote} />}
      {example && <ExampleBox example={example} />}
    </article>
  )
}

DetailCard.propTypes = {
  detail: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageCaption: PropTypes.string,
    quote: PropTypes.string,
    example: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default DetailCard
