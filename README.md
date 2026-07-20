# HCM202 – Đại đoàn kết dân tộc

Dự án Bảo tàng Số: Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc.

## ChatBot AI (Gemini)

Trang **Hỏi đáp AI** dùng Google Gemini kèm dữ liệu Q&A trong repo (RAG). Nếu có API key thì trả lời bằng Gemini; không có hoặc lỗi thì fallback sang tìm trong dataset local.

1. Tạo API key tại [Google AI Studio](https://aistudio.google.com/apikey).
2. Tạo file `.env` trong thư mục gốc (copy từ `.env.example`).
3. Gán key: `VITE_GEMINI_API_KEY=your_key_here`.
4. Chạy lại `npm run dev`.
