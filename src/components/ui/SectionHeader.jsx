import PropTypes from 'prop-types'

/**
 * SectionHeader - Editorial-style section mở đầu.
 * Triết lý: cô đọng, có "khoảng thở", drop-cap để tạo điểm nhấn.
 * Bỏ mọi animation/zoom/bounce — chỉ giữ fade-in nhẹ 1 lần.
 */
const SectionHeader = ({ icon, title, summary, narrative, factLine, tone = 'triumphant' }) => {
  const accent =
    {
      somber: 'text-gray-800',
      heroic: 'text-red-700',
      tense: 'text-amber-700',
      triumphant: 'text-red-700',
    }[tone] || 'text-red-700'

  return (
    <header className="mb-12 animate-fade-in">
      {/* Icon + Title - Editorial hero */}
      <div className="flex items-center gap-3 mb-2">
        <span aria-hidden="true" className="text-3xl md:text-4xl select-none">
          {icon}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
          {factLine || '—'}
        </span>
      </div>

      <h2
        className={`text-3xl md:text-5xl font-display font-bold ${accent} mb-4 leading-tight tracking-tight`}
      >
        {title}
      </h2>

      {/* Pull-quote summary - lớn, có chỉnh dòng, làm "anchor" cảm xúc */}
      <p className="text-xl md:text-2xl font-serif text-gray-700 leading-snug max-w-3xl mb-4 italic">
        {summary}
      </p>

      {/* Narrative - văn xuôi cô đọng, drop-cap ở chữ cái đầu */}
      {narrative && (
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
          <span
            className={`float-left text-5xl md:text-6xl font-display font-bold leading-none mr-2 mt-1 ${accent}`}
          >
            {narrative.charAt(0)}
          </span>
          {narrative.slice(1)}
        </p>
      )}
    </header>
  )
}

SectionHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  narrative: PropTypes.string,
  factLine: PropTypes.string,
  tone: PropTypes.oneOf(['somber', 'heroic', 'tense', 'triumphant']),
}

export default SectionHeader
