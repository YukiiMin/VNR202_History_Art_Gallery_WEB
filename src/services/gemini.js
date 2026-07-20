/**
 * Gọi Google Gemini API (REST).
 * Dùng system instruction + nội dung hội thoại; trả về text hoặc throw.
 * API key: VITE_GEMINI_API_KEY (lấy tại https://aistudio.google.com/apikey)
 */
const GEMINI_API = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

/** Xóa mọi marker trích dẫn / citation từ reply (contentReference, oaicite, index, kể cả có ** bao). */
export function stripCitationMarkers(text) {
  if (!text || typeof text !== 'string') return text
  return text
    .replace(/\*{0,2}\s*:?\s*contentReference\s*\[[^\]]*\]\s*\{[^}]*\}\s*\*{0,2}/gi, '')
    .replace(/\*{0,2}\s*\[oaicite:\s*\d+\]\s*\*{0,2}/gi, '')
    .replace(/\*{0,2}\s*\{\s*index\s*=\s*\d+\s*\}\s*\*{0,2}/gi, '')
    .replace(/contentReference\s*\[[^\]]*\]\s*\{[^}]*\}/gi, '')
    .replace(/\[oaicite:\s*\d+\]/gi, '')
    .replace(/\{\s*index\s*=\s*\d+\s*\}/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .replace(/\s*\.\s*\./g, '.')
    .trim()
}

export async function generateWithGemini(apiKey, systemInstruction, contents) {
  if (!apiKey?.trim()) {
    throw new Error('Missing API key')
  }

  const body = {
    system_instruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: contents.map((c) => ({
      role: c.role === 'user' ? 'user' : 'model',
      parts: [{ text: c.parts[0].text }],
    })),
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 1024,
    },
  }

  const res = await fetch(`${GEMINI_API}?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `Gemini API error: ${res.status}`)
  }

  const data = await res.json()
  let text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? ''
  if (!text) {
    throw new Error('Empty response from Gemini')
  }
  text = stripCitationMarkers(text)
  return text
}
