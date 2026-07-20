import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import FloatingLotus from './ui/FloatingLotus'

const sourceData = [
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155152/chu-tich-ho-chi-minh-doc-bang-tuyen-ngon_jl7x7j.webp",
    "title": "Tuyên ngôn Độc lập",
    "hoverText": "Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình",
    "desc": "Thời gian: Ngày 02 tháng 9 năm 1945.\nBối cảnh: Sau khi Nhật đầu hàng Đồng minh, chính quyền Nhật ở Đông Dương tan rã. Dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh, Cách mạng Tháng Tám thành công.\nDiễn biến chính: Sáng 02/9/1945 tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập trước hàng chục vạn đồng bào.\nKết quả: Nhà nước Việt Nam Dân chủ Cộng hòa ra đời.\nÝ nghĩa: Đánh dấu thắng lợi vĩ đại của Cách mạng Tháng Tám, mở ra kỷ nguyên độc lập dân tộc.",
    "quote": "Tuyên bố chấm dứt mọi quan hệ thuộc địa với Pháp, xóa bỏ mọi đặc quyền của Pháp trên lãnh thổ Việt Nam.",
    "tag": "Kháng chiến chống Pháp",
    "artist": "Tư liệu lịch sử",
    "year": "1945"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/phao-binh-trung-doan-song-lo-viet-bac-1947_teu9sa.gif",
    "title": "Chiến thắng Việt Bắc",
    "hoverText": "Pháo binh trung đoàn sông Lô, Việt Bắc",
    "desc": "Thời gian: 07/10 – 19/12/1947.\nBối cảnh: Pháp mở cuộc tiến công quy mô lớn lên căn cứ Việt Bắc nhằm tiêu diệt cơ quan đầu não kháng chiến.\nDiễn biến chính: Quân Pháp tiến công bằng ba hướng. Dưới sự chỉ huy của Trung ương Đảng và Đại tướng Võ Nguyên Giáp, quân ta tổ chức phục kích.\nKết quả: Tiêu diệt lượng lớn sinh lực địch, bảo vệ an toàn căn cứ địa.\nÝ nghĩa: Làm phá sản hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của Pháp.",
    "quote": "Chiến thắng Việt Bắc làm phá sản hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của Pháp.",
    "tag": "Kháng chiến chống Pháp",
    "artist": "Tư liệu lịch sử",
    "year": "1947"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/tieu-doan-phao-binh-253-bien-gioi-1950_z4kton.jpg",
    "title": "Chiến dịch Biên giới",
    "hoverText": "Tiểu đoàn pháo binh 253 tại chiến dịch",
    "desc": "Thời gian: 16/09 – 22/10/1950.\nBối cảnh: Nhu cầu mở thông biên giới để nhận viện trợ quốc tế trở nên cấp thiết.\nDiễn biến chính: Quân đội ta mở màn chiến dịch bằng trận đánh Đông Khê, bao vây tiêu diệt hàng loạt cứ điểm quan trọng.\nKết quả: Giải phóng hoàn toàn vùng biên giới Việt – Trung, khai thông tuyến viện trợ quốc tế.\nÝ nghĩa: Đánh dấu sự trưởng thành vượt bậc của Quân đội Nhân dân Việt Nam.",
    "quote": "Đánh dấu bước phát triển vượt bậc của Quân đội Nhân dân Việt Nam từ phòng ngự sang chủ động tiến công.",
    "tag": "Kháng chiến chống Pháp",
    "artist": "Tư liệu lịch sử",
    "year": "1950"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155149/truong-doan-2-khuc-dao-dau-hung-trang_gwsmul.jpg",
    "title": "Chiến thắng Điện Biên Phủ",
    "hoverText": "Bộ đội tấn công cứ điểm Điện Biên Phủ",
    "desc": "Thời gian: 13/03 – 07/05/1954.\nBối cảnh: Pháp thực hiện Kế hoạch Nava, xây dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương.\nDiễn biến chính: Ngày 13/03/1954, quân ta nổ súng tấn công cứ điểm Him Lam. Trải qua ba đợt tiến công, chiều ngày 07/05/1954 ta đánh chiếm Sở chỉ huy, bắt sống tướng De Castries.\nKết quả: Tiêu diệt hoàn toàn tập đoàn cứ điểm Điện Biên Phủ.\nÝ nghĩa: Trở thành chiến thắng quân sự tiêu biểu của thế kỷ XX, buộc Pháp ký Hiệp định Genève.",
    "quote": "Mở đầu sự sụp đổ của chủ nghĩa thực dân cũ trên thế giới.",
    "tag": "Kháng chiến chống Pháp",
    "artist": "Tư liệu lịch sử",
    "year": "1954"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155149/toan-canh-phien-khai-mac-hoi-nghi_qjbrzc.avif",
    "title": "Hiệp định Genève",
    "hoverText": "Toàn cảnh phiên khai mạc Hội nghị Genève",
    "desc": "Thời gian: 21/07/1954.\nBối cảnh: Sau thảm bại tại Điện Biên Phủ, Pháp ngồi vào bàn đàm phán tại Hội nghị Genève.\nDiễn biến chính: Các bên thống nhất đình chỉ chiến sự, quân đội hai bên rút về hai miền tập kết, lấy vĩ tuyến 17 làm giới tuyến quân sự.\nKết quả: Chấm dứt chiến tranh Đông Dương, miền Bắc được hoàn toàn giải phóng.\nÝ nghĩa: Đánh dấu thắng lợi trọn vẹn của cuộc kháng chiến chống Pháp.",
    "quote": "Đánh dấu thắng lợi của cuộc kháng chiến chống Pháp.",
    "tag": "Kháng chiến chống Pháp",
    "artist": "Tư liệu lịch sử",
    "year": "1954"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155150/dong-khoi-ben-tre-1960_ssmbv9.jpg",
    "title": "Phong trào Đồng Khởi",
    "hoverText": "Quần chúng nhân dân Đồng Khởi tại Bến Tre",
    "desc": "Thời gian: 1959–1960.\nBối cảnh: Chính quyền Ngô Đình Diệm đàn áp lực lượng cách mạng.\nDiễn biến chính: Phong trào bùng nổ mạnh mẽ nhất tại Bến Tre vào tháng 1/1960, lan rộng khắp Nam Bộ, Tây Nguyên.\nKết quả: Hàng nghìn ấp và xã được giải phóng.\nÝ nghĩa: Đưa cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công.",
    "quote": "Đưa cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1959-1960"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155151/le-thanh-lap-mat-tran-20-12-1960_aafbgc.jpg",
    "title": "Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam",
    "hoverText": "Lễ thành lập Mặt trận tại Tây Ninh",
    "desc": "Thời gian: 20/12/1960.\nBối cảnh: Sự phát triển vũ bão của phong trào Đồng Khởi đòi hỏi tổ chức chính trị thống nhất.\nDiễn biến chính: Ngày 20/12/1960, Mặt trận chính thức được thành lập tại Tây Ninh.\nKết quả: Tập hợp rộng rãi mọi tầng lớp nhân dân yêu nước.\nÝ nghĩa: Tạo cơ sở chính trị và tổ chức vững chắc cho các thắng lợi tiếp theo.",
    "quote": "Tạo cơ sở chính trị và tổ chức cho các thắng lợi tiếp theo.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1960"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/chien-thuat-truc-thang-van-cua-my_eornru.jpg",
    "title": "Đánh bại chiến lược \"Chiến tranh đặc biệt\"",
    "hoverText": "Chiến thuật trực thăng vận của Mỹ bị bẻ gãy",
    "desc": "Thời gian: 1961–1965.\nBối cảnh: Mỹ triển khai 'Chiến tranh đặc biệt', dùng quân đội Sài Gòn kết hợp vũ khí hiện đại.\nDiễn biến chính: Đầu năm 1963, quân ta chiến thắng vang dội tại Ấp Bắc, bẻ gãy chiến thuật 'trực thăng vận'.\nKết quả: Đánh bại hoàn toàn chiến lược 'Chiến tranh đặc biệt'.\nÝ nghĩa: Khẳng định bản lĩnh đánh bại các hình thái chiến tranh hiện đại.",
    "quote": "Khẳng định khả năng đánh bại chiến tranh hiện đại của quân và dân miền Nam.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1961-1965"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155151/07-08-1964-quoc-hoi-my-thong-qua-nghi-quyet-vinh-bac-bo_gmle3o.jpg",
    "title": "Sự kiện Vịnh Bắc Bộ",
    "hoverText": "Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ",
    "desc": "Thời gian: Tháng 8 năm 1964.\nBối cảnh: Mỹ tăng cường hoạt động trinh sát và khiêu khích miền Bắc.\nDiễn biến chính: Ngày 05/08/1964, không quân Mỹ ném bom hàng loạt mục tiêu trên miền Bắc. Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ.\nKết quả: Khởi đầu chiến tranh phá hoại miền Bắc.\nÝ nghĩa: Mở đường cho Mỹ đưa quân viễn chinh trực tiếp vào miền Nam từ năm 1965.",
    "quote": "Mở đường cho việc Mỹ đưa quân viễn chinh trực tiếp vào miền Nam.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1964"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/anh-III-H_nzhxsf.jpg",
    "title": "Đánh bại chiến lược \"Chiến tranh cục bộ\"",
    "hoverText": "Lực lượng giải phóng đẩy lùi quân viễn chinh Mỹ",
    "desc": "Thời gian: 1965–1968.\nBối cảnh: Mỹ đưa quân viễn chinh trực tiếp vào miền Nam.\nDiễn biến chính: Trận Vạn Tường (8/1965) đánh bại cuộc hành quân 'tìm diệt' đầu tiên. Quân dân ta đánh bại hai cuộc phản công chiến lược mùa khô.\nKết quả: Quân Mỹ không đạt được mục tiêu chiến lược.\nÝ nghĩa: Chứng minh khả năng đánh bại quân đội hiện đại của Mỹ.",
    "quote": "Chứng minh khả năng đánh bại quân đội hiện đại của một đế quốc lớn.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1965-1968"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/mau_than_1968_jkg1f7.jpg",
    "title": "Tổng tiến công và nổi dậy Tết Mậu Thân",
    "hoverText": "Lực lượng giải phóng tấn công đô thị dịp Tết Mậu Thân",
    "desc": "Thời gian: Đêm 30, rạng sáng 31/1/1968.\nBối cảnh: Lợi dụng thời điểm địch lơ là dịp Tết.\nDiễn biến chính: Đồng loạt tổng công kích tại hầu hết các thành phố. Tập kích trực diện vào Tòa Đại sứ Mỹ, Dinh Độc Lập.\nKết quả: Làm lung lay ý chí xâm lược của Mỹ.\nÝ nghĩa: Buộc Mỹ ngừng ném bom miền Bắc và chấp nhận đàm phán tại Paris.",
    "quote": "Làm lung lay ý chí xâm lược của Mỹ, mở ra cục diện 'vừa đánh vừa đàm'.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1968"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/46546756-1616666757699_tha1jh.webp",
    "title": "Cuộc tiến công chiến lược năm 1972 (Mùa hè đỏ lửa)",
    "hoverText": "Chiến đấu bảo vệ thành cổ Quảng Trị",
    "desc": "Thời gian: Từ 30/3/1972.\nBối cảnh: Nhằm đập tan chiến lược 'Việt Nam hóa chiến tranh' của Mỹ.\nDiễn biến chính: Mở màn chiến dịch tại Quảng Trị, giải phóng toàn tỉnh vào 1/5/1972. Tiến công đồng loạt trên các chiến trường.\nKết quả: Quân Sài Gòn lộ rõ sự suy yếu.\nÝ nghĩa: Giáng đòn quyết định vào chiến lược 'Việt Nam hóa chiến tranh'.",
    "quote": "Giáng đòn quyết định vào chiến lược 'Việt Nam hóa chiến tranh'.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1972"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/90a2e439-20d7-4546-8f15-ee2afa7f01bd_vwfily.jpg",
    "title": "Chiến thắng \"Điện Biên Phủ trên không\"",
    "hoverText": "Xác máy bay B-52 bị bắn rơi tại Hà Nội",
    "desc": "Thời gian: 18/12/1972 – 29/12/1972.\nBối cảnh: Mỹ dùng siêu pháo đài bay B-52 ném bom hủy diệt Hà Nội.\nDiễn biến chính: Quân dân miền Bắc tổ chức lưới lửa dày đặc đánh trả. Trong 12 ngày đêm, ta bắn rơi hàng loạt máy bay B-52.\nKết quả: Mỹ hứng chịu thiệt hại nặng nề nhất về không quân.\nÝ nghĩa: Buộc Mỹ phải ký Hiệp định Paris.",
    "quote": "Buộc Mỹ phải ký Hiệp định Paris, chấm dứt hoàn toàn việc dùng không quân chiến lược đe dọa Việt Nam.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1972"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154906/hiepdinh_1_b6yugo.jpg",
    "title": "Hiệp định Paris",
    "hoverText": "Lễ ký kết Hiệp định Paris năm 1973",
    "desc": "Thời gian: 27/01/1973.\nBối cảnh: Thất bại toàn diện buộc Mỹ phải chấp nhận đàm phán.\nDiễn biến chính: Mỹ cam kết rút hết quân viễn chinh trong 60 ngày, hủy bỏ mọi căn cứ quân sự.\nKết quả: Chấm dứt sự dính líu quân sự trực tiếp của Mỹ tại miền Nam.\nÝ nghĩa: Hoàn thành nhiệm vụ 'Đánh cho Mỹ cút'.",
    "quote": "Thời cơ chiến lược thuận lợi: 'Đánh cho Mỹ cút' đã hoàn thành.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1973"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154928/3015-8.12_sdgqio.webp",
    "title": "Chiến thắng Phước Long",
    "hoverText": "Giải phóng Phước Long, đòn trinh sát chiến lược",
    "desc": "Thời gian: 12/12/1974 – 6/1/1975.\nBối cảnh: Mỹ đã rút nhưng vẫn viện trợ cho chính quyền Sài Gòn.\nDiễn biến chính: Quân ta tiến công mãnh liệt, giải phóng toàn bộ tỉnh Phước Long. Mỹ đứng ngoài cuộc.\nKết quả: Phước Long là tỉnh đầu tiên được hoàn toàn giải phóng.\nÝ nghĩa: Củng cố quyết tâm giải phóng hoàn toàn miền Nam.",
    "quote": "Là 'trận trinh sát chiến lược' quan trọng, củng cố quyết tâm giải phóng hoàn toàn miền Nam.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1974-1975"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/taynguyen_motaix.jpg",
    "title": "Chiến dịch Tây Nguyên",
    "hoverText": "Chiến dịch Tây Nguyên mở màn cuộc Tổng tiến công",
    "desc": "Thời gian: 4/3/1975 – 24/3/1975.\nBối cảnh: Thời cơ chiến lược đã chín muồi sau trận Phước Long.\nDiễn biến chính: Ngày 10/3/1975, ta bất ngờ tập trung lực lượng đánh thọc sâu vào Buôn Ma Thuột.\nKết quả: Giải phóng một vùng Tây Nguyên rộng lớn.\nÝ nghĩa: Mang ý nghĩa bước ngoặt, mở đầu Tổng tiến công mùa Xuân 1975.",
    "quote": "Chiến thắng Tây Nguyên là trận đánh mở đầu mang ý nghĩa bước ngoặt.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1975"
  },
  {
    "img": "https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154925/63fbfbf1d61564555e8aad0395a86ef83_57192_ncattl.jpg",
    "title": "Chiến dịch Hồ Chí Minh",
    "hoverText": "Xe tăng giải phóng tiến vào Dinh Độc Lập",
    "desc": "Thời gian: 26/4/1975 – 30/4/1975.\nBối cảnh: Thừa thắng xông lên sau khi giải phóng Tây Nguyên, Huế, Đà Nẵng.\nDiễn biến chính: 5 cánh quân giải phóng hình thành thế siết chặt vòng vây quanh Sài Gòn. Sáng 30/4/1975, xe tăng húc đổ cổng Dinh Độc Lập.\nKết quả: Chính quyền Sài Gòn sụp đổ hoàn toàn.\nÝ nghĩa: Kết thúc 21 năm kháng chiến chống Mỹ, mở ra kỷ nguyên độc lập, thống nhất.",
    "quote": "Kết thúc 21 năm kháng chiến chống Mỹ, mở ra thời kỳ đất nước độc lập, thống nhất.",
    "tag": "Kháng chiến chống Mỹ",
    "artist": "Tư liệu lịch sử",
    "year": "1975"
  }
]

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null)

  const selectedPainting = selectedId !== null ? sourceData[selectedId] : null

  // Filter by period
  const chongPhapData = sourceData.filter(item => item.tag === "Kháng chiến chống Pháp")
  const chongMyData = sourceData.filter(item => item.tag === "Kháng chiến chống Mỹ")

  return (
    <div className="relative min-h-screen">
      {/* Floating Lotus Background */}
      <FloatingLotus />

      <div className="container py-24 min-h-screen flex flex-col relative z-10">
        <h2 className="text-center mb-3 text-5xl font-bold text-primary-red">
          Triển Lãm Thực Tế Ảo
        </h2>

        {/* CTA: Tham quan triển lãm 3D */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 text-center text-lg mb-5 max-w-xl">
            Bước vào không gian triển lãm 3D, tham quan các tác phẩm nghệ thuật trong môi trường thực tế ảo.
          </p>
          <motion.a
            href="https://vnr-202-history-art-gallery.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-linear-to-r from-primary-red to-primary-red/90 shadow-lg shadow-primary-red/30 border-2 border-heritage-gold/50 hover:border-heritage-gold transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(215,0,25,0.35)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl">🖼️</span>
            <span>Tham quan triển lãm 3D</span>
            <ExternalLink size={20} className="shrink-0" />
          </motion.a>
        </motion.div>

        {/* Timeline: Chống Pháp */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-red/50 to-transparent" />
            <div className="flex items-center gap-3 px-6 py-3 bg-primary-red/10 rounded-full border border-primary-red/30">
              <span className="text-2xl">🇻🇳</span>
              <h3 className="text-2xl font-bold text-primary-red">Kháng Chiến Chống Pháp</h3>
              <span className="text-lg font-medium text-primary-red/70">1945 - 1954</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-red/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
            {chongPhapData.map((item, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                className="cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  layoutId={`card-phap-${index}`}
                  onClick={() => setSelectedId(sourceData.indexOf(item))}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel rounded-2xl overflow-hidden relative group hover:shadow-heritage-lg transition-shadow duration-300"
                >
                  <div className="h-56 overflow-hidden relative">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-white/90 backdrop-blur-sm">
                    <h3 className="text-primary-red mb-1 text-base font-bold line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>{item.year}</span>
                      <ZoomIn size={16} className="text-heritage-gold" />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Timeline: Chống Mỹ */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
            <div className="flex items-center gap-3 px-6 py-3 bg-blue-600/10 rounded-full border border-blue-600/30">
              <span className="text-2xl">🕊️</span>
              <h3 className="text-2xl font-bold text-blue-600">Kháng Chiến Chống Mỹ</h3>
              <span className="text-lg font-medium text-blue-600/70">1955 - 1975</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {chongMyData.map((item, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                className="cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  layoutId={`card-my-${index}`}
                  onClick={() => setSelectedId(sourceData.indexOf(item))}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel rounded-2xl overflow-hidden relative group hover:shadow-heritage-lg transition-shadow duration-300"
                >
                  <div className="h-56 overflow-hidden relative">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-white/90 backdrop-blur-sm">
                    <h3 className="text-blue-600 mb-1 text-base font-bold line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>{item.year}</span>
                      <ZoomIn size={16} className="text-heritage-gold" />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[2000] pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-[90%] max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden relative z-[2001] pointer-events-auto flex flex-col shadow-2xl"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedId(null)
                }}
                className="absolute top-5 right-5 bg-black/60 hover:bg-black/80 text-white border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-10 transition-all duration-300 hover:scale-110"
              >
                <X size={28} />
              </button>

              <div className="flex-1 overflow-hidden relative min-h-[50vh] bg-black">
                <motion.img
                  src={selectedPainting.img}
                  alt={selectedPainting.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-10 bg-gradient-to-br from-cream-bg to-white border-t-4 border-heritage-gold">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-primary-red text-4xl font-bold mb-4"
                >
                  {selectedPainting.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-sm font-medium text-heritage-gold">{selectedPainting.tag} • {selectedPainting.year}</p>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPainting.desc}
                  </p>
                  {selectedPainting.quote && (
                    <blockquote className="border-l-4 border-primary-red pl-4 italic text-gray-600 mt-4">
                      "{selectedPainting.quote}"
                    </blockquote>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
