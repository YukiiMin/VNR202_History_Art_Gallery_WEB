import { motion } from 'framer-motion'
import { Brain, CheckCircle, RotateCcw, Trophy, XCircle } from 'lucide-react'
import { useState } from 'react'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'
import FloatingLotus from './ui/FloatingLotus'

const questions = [
  {
    "question": "Sự kiện nào đã tạo ra 'khoảng trống quyền lực' thuận lợi để Cách mạng Tháng Tám năm 1945 nổ ra và giành thắng lợi nhanh chóng trên cả nước?",
    "options": [
      "Thực dân Pháp bị phát xít Nhật hất cẳng khỏi Đông Dương",
      "Phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện",
      "Quân Đồng minh tiến vào Đông Dương để giải giáp quân Nhật",
      "Vua Bảo Đại tuyên bố thoái vị, trao ấn kiếm cho chính quyền cách mạng"
    ],
    "answer": 1
  },
  {
    "question": "Nguyên nhân trực tiếp nào buộc Đảng và Chủ tịch Hồ Chí Minh phải phát động Toàn quốc kháng chiến vào đêm 19/12/1946 dù trước đó đã ký Hiệp định Sơ bộ và Tạm ước?",
    "options": [
      "Quân Pháp chiếm đóng trái phép toàn bộ miền Nam",
      "Pháp gửi tối hậu thư đòi giải tán lực lượng tự vệ và giao quyền kiểm soát Hà Nội",
      "Quân đội Tưởng Giới Thạch rút về nước, để lại khoảng trống phòng ngự",
      "Hội nghị Fontainebleau tại Pháp thất bại hoàn toàn"
    ],
    "answer": 1
  },
  {
    "question": "Cuộc chiến đấu 60 ngày đêm của quân dân Hà Nội (từ 19/12/1946) mang lại ý nghĩa chiến lược quan trọng nhất là gì?",
    "options": [
      "Tiêu diệt phần lớn sinh lực địch tại chiến trường Bắc Bộ",
      "Giải phóng hoàn toàn thủ đô Hà Nội khỏi ách chiếm đóng",
      "Giam chân quân Pháp, tạo điều kiện để cơ quan đầu não rút lên căn cứ Việt Bắc an toàn",
      "Làm phá sản hoàn toàn chiến lược đánh nhanh thắng nhanh của Pháp"
    ],
    "answer": 2
  },
  {
    "question": "Chiến thắng Việt Bắc Thu - Đông (1947) đã tác động như thế nào đến chiến lược quân sự của thực dân Pháp?",
    "options": [
      "Làm phá sản bước đầu chiến lược 'đánh nhanh thắng nhanh'",
      "Làm phá sản hoàn toàn chiến lược 'đánh nhanh thắng nhanh', buộc chúng phải đánh lâu dài",
      "Buộc thực dân Pháp phải chuyển sang chiến lược 'Dùng người Việt đánh người Việt'",
      "Buộc Pháp phải ngồi vào bàn đàm phán tại Hội nghị Genève"
    ],
    "answer": 1
  },
  {
    "question": "Sự khác biệt cốt lõi nhất về thế trận của Quân đội Nhân dân Việt Nam sau Chiến dịch Biên giới (1950) so với trước đó là gì?",
    "options": [
      "Lần đầu tiên nhận được sự viện trợ vũ khí từ quốc tế",
      "Khai thông được tuyến đường biên giới Việt - Trung",
      "Chuyển từ thế phòng ngự sang thế chủ động tiến công trên chiến trường chính Bắc Bộ",
      "Đánh bại hoàn toàn nỗ lực can thiệp quân sự của Mỹ vào Đông Dương"
    ],
    "answer": 2
  },
  {
    "question": "Điểm yếu cốt tử của Kế hoạch Nava (1953) mà thực dân Pháp triển khai tại Đông Dương là gì?",
    "options": [
      "Không nhận được sự hỗ trợ tài chính từ đế quốc Mỹ",
      "Đặt mục tiêu quá lớn (thắng lợi quyết định trong 18 tháng) nhưng lực lượng lại bị phân tán",
      "Chỉ tập trung quân tại chiến trường miền Nam, bỏ ngỏ miền Bắc",
      "Lực lượng quân đội ngụy Sài Gòn không chịu hợp tác với quân viễn chinh Pháp"
    ],
    "answer": 1
  },
  {
    "question": "Đâu là ý nghĩa mang tầm vóc quốc tế to lớn nhất của Chiến thắng Điện Biên Phủ (1954)?",
    "options": [
      "Giải phóng hoàn toàn miền Bắc Việt Nam, đưa miền Bắc tiến lên Chủ nghĩa Xã hội",
      "Mở đầu cho sự sụp đổ của hệ thống chủ nghĩa thực dân cũ trên toàn thế giới",
      "Buộc Pháp ký Hiệp định Genève, lấy vĩ tuyến 17 làm giới tuyến tạm thời",
      "Đánh bại hoàn toàn âm mưu can thiệp của đế quốc Mỹ vào chiến tranh Đông Dương"
    ],
    "answer": 1
  },
  {
    "question": "Theo Hiệp định Genève (1954), hai miền Nam - Bắc Việt Nam dự kiến sẽ thống nhất thông qua hình thức nào và vào thời gian nào?",
    "options": [
      "Tổng tuyển cử tự do trên cả nước vào tháng 7/1956",
      "Hiệp thương chính trị giữa hai miền vào tháng 7/1955",
      "Quân đội Pháp bàn giao lại chính quyền vào tháng 10/1954",
      "Trưng cầu dân ý dưới sự giám sát của Liên Hợp Quốc vào năm 1958"
    ],
    "answer": 0
  },
  {
    "question": "Nghị quyết Trung ương 15 (1959) có ý nghĩa như một ngọn đuốc soi đường cho cách mạng miền Nam vì đã ra quyết định gì?",
    "options": [
      "Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam",
      "Cho phép sử dụng bạo lực cách mạng để đánh đổ chính quyền Mỹ - Diệm",
      "Phát động cuộc Tổng tiến công và nổi dậy trên toàn miền Nam",
      "Quyết định mở đường Hồ Chí Minh trên bộ và trên biển"
    ],
    "answer": 1
  },
  {
    "question": "Bến Tre được mệnh danh là 'quê hương Đồng Khởi'. Phong trào Đồng Khởi (1959-1960) đã tạo ra bước ngoặt chiến lược nào cho cách mạng miền Nam?",
    "options": [
      "Chuyển cách mạng từ thế phòng ngự sang thế tổng phản công",
      "Chuyển cách mạng từ thế giữ gìn lực lượng sang thế tiến công",
      "Đánh bại hoàn toàn chiến lược 'Chiến tranh đặc biệt' của đế quốc Mỹ",
      "Giải phóng hoàn toàn khu vực Đồng bằng sông Cửu Long"
    ],
    "answer": 1
  },
  {
    "question": "Đặc điểm cốt lõi của chiến lược 'Chiến tranh đặc biệt' (1961-1965) mà Mỹ áp dụng tại miền Nam là gì?",
    "options": [
      "Dùng quân viễn chinh Mỹ làm lực lượng chủ yếu, kết hợp ném bom miền Bắc",
      "Dùng quân đội Sài Gòn làm chủ lực, dưới sự chỉ huy của cố vấn Mỹ và vũ khí Mỹ",
      "Dùng không quân và hải quân Mỹ đánh phá các căn cứ của cách mạng",
      "Rút dần quân Mỹ, tăng viện trợ vũ khí để quân đội Sài Gòn tự tác chiến"
    ],
    "answer": 1
  },
  {
    "question": "Thắng lợi tại Ấp Bắc (1/1963) của quân dân miền Nam đã chứng minh điều gì?",
    "options": [
      "Quân dân ta có khả năng đánh bại quân viễn chinh Mỹ trên bộ",
      "Chiến lược 'Chiến tranh cục bộ' của Mỹ bắt đầu phá sản",
      "Quân dân ta có thể bẻ gãy chiến thuật 'trực thăng vận' và 'thiết xa vận' của Mỹ",
      "Chính quyền Ngô Đình Diệm đứng trước nguy cơ sụp đổ hoàn toàn"
    ],
    "answer": 2
  },
  {
    "question": "Sự kiện Vịnh Bắc Bộ (8/1964) là màn kịch do Mỹ dựng lên nhằm mục đích thực sự là gì?",
    "options": [
      "Trừng phạt Hải quân Việt Nam vì đã tấn công tàu sân bay Mỹ",
      "Lấy cớ để mở rộng chiến tranh phá hoại miền Bắc bằng không quân và hải quân",
      "Che giấu sự thất bại của chiến lược 'Việt Nam hóa chiến tranh'",
      "Ép buộc Việt Nam Dân chủ Cộng hòa phải ngồi vào bàn đàm phán"
    ],
    "answer": 1
  },
  {
    "question": "Điểm khác biệt căn bản nhất giữa chiến lược 'Chiến tranh cục bộ' (1965-1968) và 'Chiến tranh đặc biệt' (1961-1965) là gì?",
    "options": [
      "Sử dụng các loại vũ khí, khí tài quân sự hiện đại hơn",
      "Mở rộng phạm vi chiến tranh ra toàn cõi Đông Dương",
      "Có sự tham chiến trực tiếp của quân viễn chinh Mỹ và quân đồng minh làm nòng cốt",
      "Tăng cường gom dân lập 'ấp chiến lược' quy mô lớn"
    ],
    "answer": 2
  },
  {
    "question": "Trận Vạn Tường (8/1965) mang ý nghĩa lịch sử sâu sắc vì đã mở đầu cho cao trào đấu tranh nào trên khắp miền Nam?",
    "options": [
      "Cao trào 'Thi đua Ấp Bắc, giết giặc lập công'",
      "Cao trào 'Tìm Mỹ mà đánh, lùng ngụy mà diệt'",
      "Cao trào 'Đồng Khởi' nổi dậy giành chính quyền",
      "Cao trào 'Ba sẵn sàng' và 'Năm xung phong'"
    ],
    "answer": 1
  },
  {
    "question": "Dù chịu tổn thất lớn về lực lượng, cuộc Tổng tiến công và nổi dậy Tết Mậu Thân (1968) đã đạt được mục tiêu chiến lược nào, làm xoay chuyển toàn bộ cục diện chiến tranh?",
    "options": [
      "Giải phóng hoàn toàn các đô thị lớn như Sài Gòn, Huế, Đà Nẵng",
      "Buộc Mỹ phải ký ngay Hiệp định Paris để rút quân về nước",
      "Đánh sập hoàn toàn bộ máy chính quyền của Việt Nam Cộng hòa",
      "Làm lung lay ý chí xâm lược, buộc Mỹ phải tuyên bố 'phi Mỹ hóa' và đàm phán Paris"
    ],
    "answer": 3
  },
  {
    "question": "Bản chất thâm độc nhất của chiến lược 'Việt Nam hóa chiến tranh' (1969-1973) do Tổng thống Nixon đề ra là gì?",
    "options": [
      "Đưa thêm hàng vạn quân chư hầu vào tham chiến tại Việt Nam",
      "Dùng thủ đoạn ngoại giao để cô lập cách mạng Việt Nam với thế giới",
      "Dùng người Việt đánh người Việt, rút dần quân Mỹ nhưng tăng viện trợ cho quân Sài Gòn",
      "Dùng không quân hủy diệt miền Bắc để cắt đứt đường chi viện"
    ],
    "answer": 2
  },
  {
    "question": "Cuộc tiến công chiến lược năm 1972 ('Mùa hè đỏ lửa') đã giáng một đòn chí mạng, buộc Mỹ phải thực hiện hành động nào?",
    "options": [
      "Tuyên bố 'Mỹ hóa' trở lại cuộc chiến tranh bằng không quân và hải quân",
      "Từ chức Tổng thống của Richard Nixon do áp lực nội bộ",
      "Cầu viện Liên Hợp Quốc can thiệp lệnh ngừng bắn",
      "Tháo chạy toàn bộ khỏi chiến trường Đông Dương"
    ],
    "answer": 0
  },
  {
    "question": "Mục đích tàn độc của Mỹ khi dùng B-52 ném bom rải thảm Hà Nội, Hải Phòng trong 12 ngày đêm cuối năm 1972 là gì?",
    "options": [
      "Cứu nguy cho quân đội Sài Gòn đang bị vây hãm tại Tây Nguyên",
      "Hủy diệt hoàn toàn sức mạnh quân sự của miền Bắc",
      "Ép ta nhượng bộ trên bàn đàm phán Paris theo điều khoản có lợi cho Mỹ",
      "Trả đũa cuộc Tổng tiến công Tết Mậu Thân của quân Giải phóng"
    ],
    "answer": 2
  },
  {
    "question": "Thành quả lớn nhất mà quân dân Việt Nam giành được từ Hiệp định Paris (27/01/1973) là gì?",
    "options": [
      "Đánh sập hoàn toàn chính quyền Sài Gòn, thống nhất đất nước",
      "Buộc Mỹ rút hết quân viễn chinh, hoàn thành mục tiêu 'Đánh cho Mỹ cút'",
      "Bắt buộc Mỹ phải bồi thường chiến tranh ngay lập tức",
      "Chia sẻ quyền lực chính trị ngang bằng tại miền Nam"
    ],
    "answer": 1
  },
  {
    "question": "Chiến thắng Phước Long (cuối 1974 - đầu 1975) được Bộ Chính trị coi là một 'trận trinh sát chiến lược' vì nó đã chứng minh được điều gì?",
    "options": [
      "Đường Hồ Chí Minh đã thông suốt đến tận cửa ngõ Sài Gòn",
      "Sức mạnh vô địch của các binh chủng hợp thành quân Giải phóng",
      "Quân đội Sài Gòn bất lực và Mỹ không có khả năng can thiệp quân sự trở lại",
      "Sự ủng hộ to lớn của bạn bè quốc tế đối với cách mạng Việt Nam"
    ],
    "answer": 2
  },
  {
    "question": "Nghệ thuật quân sự tài tình trong Chiến dịch Tây Nguyên (3/1975) thể hiện rõ nhất qua hành động nào của quân Giải phóng?",
    "options": [
      "Đánh úp sân bay Tân Sơn Nhất bằng không quân",
      "Giăng bẫy nghi binh ở Kon Tum, Pleiku nhưng đánh thọc sâu vào Buôn Ma Thuột",
      "Mở cuộc tiến công dọc theo bờ biển miền Trung",
      "Tổng khởi nghĩa quần chúng ở các buôn làng trước khi nổ súng"
    ],
    "answer": 1
  },
  {
    "question": "Chiến thắng Tây Nguyên (3/1975) đã tạo ra bước ngoặt chiến lược như thế nào cho cuộc kháng chiến chống Mỹ?",
    "options": [
      "Chuyển từ khởi nghĩa từng phần lên Chiến tranh cách mạng",
      "Chuyển từ thế phòng ngự sang thế chủ động tiến công",
      "Chuyển từ tiến công chiến lược sang Tổng tiến công chiến lược trên toàn miền Nam",
      "Đánh dấu sự sụp đổ hoàn toàn của chính quyền Sài Gòn"
    ],
    "answer": 2
  },
  {
    "question": "Quân khu nào của địch đã bị đập tan và tan rã hoàn toàn chỉ sau Chiến dịch Huế - Đà Nẵng (3/1975)?",
    "options": [
      "Quân khu 1",
      "Quân khu 2",
      "Quân khu 3",
      "Quân khu 4"
    ],
    "answer": 0
  },
  {
    "question": "Chỉ thị 'Thần tốc, thần tốc hơn nữa. Táo bạo, táo bạo hơn nữa' là mệnh lệnh lịch sử được truyền đi trong chiến dịch nào?",
    "options": [
      "Chiến dịch Điện Biên Phủ",
      "Chiến dịch Tây Nguyên",
      "Chiến dịch Huế - Đà Nẵng",
      "Chiến dịch Hồ Chí Minh"
    ],
    "answer": 3
  },
  {
    "question": "Trong Chiến dịch Hồ Chí Minh lịch sử, tuyến phòng thủ vòng ngoài nào được coi là 'cánh cửa thép' của Sài Gòn đã bị quân ta đập tan?",
    "options": [
      "Căn cứ Đồng Dù (Củ Chi)",
      "Căn cứ Nước Trong (Long Thành)",
      "Tuyến phòng thủ Xuân Lộc (Long Khánh)",
      "Căn cứ Lai Khê (Bình Dương)"
    ],
    "answer": 2
  },
  {
    "question": "Sự kiện nào đánh dấu chấm hết cho 21 năm kháng chiến chống Mỹ (1954 - 1975) và 30 năm chiến tranh giải phóng dân tộc?",
    "options": [
      "Xe tăng Giải phóng húc đổ cổng Dinh Độc Lập, Tổng thống Dương Văn Minh đầu hàng (30/4/1975)",
      "Quân Mỹ làm lễ hạ cờ, rút chiến hạm cuối cùng khỏi Đà Nẵng",
      "Chiến dịch Tây Nguyên toàn thắng, giải phóng Buôn Ma Thuột",
      "Ký kết thành công Hiệp định Paris (1973)"
    ],
    "answer": 0
  },
  {
    "question": "Việc Mỹ thực hiện 'Đông Dương hóa chiến tranh' (1970-1971) đã dẫn đến kết quả ngược lại với toan tính ban đầu của họ là gì?",
    "options": [
      "Làm chia rẽ sâu sắc khối liên minh ba nước Đông Dương",
      "Buộc quân Giải phóng phải rút toàn bộ lực lượng về bảo vệ miền Bắc",
      "Đẩy nhanh sự đoàn kết, tạo ra mặt trận chung của nhân dân 3 nước Việt - Lào - Campuchia chống Mỹ",
      "Giúp quân đội Sài Gòn hoàn toàn kiểm soát biên giới Tây Nam"
    ],
    "answer": 2
  },
  {
    "question": "Hai nhiệm vụ chiến lược 'Đánh cho Mỹ cút' và 'Đánh cho ngụy nhào' được hoàn thành tương ứng qua những sự kiện lịch sử nào?",
    "options": [
      "Mậu Thân 1968 và Điện Biên Phủ trên không 1972",
      "Hiệp định Paris 1973 và Chiến dịch Hồ Chí Minh 1975",
      "Hiệp định Genève 1954 và Đại thắng mùa Xuân 1975",
      "Chiến thắng Phước Long 1974 và Chiến dịch Tây Nguyên 1975"
    ],
    "answer": 1
  },
  {
    "question": "Nhìn chung toàn bộ quá trình kháng chiến 1945-1975, sự thành công của Mặt trận Dân tộc thống nhất (từ Việt Minh đến Mặt trận DTGPMNVN) chứng minh bài học gì trong Tư tưởng Hồ Chí Minh?",
    "options": [
      "Vũ khí hiện đại quyết định thắng lợi trên chiến trường",
      "Chiến tranh du kích là phương thức duy nhất để chống lại quân đội nhà nghề",
      "Sức mạnh vô địch của khối đại đoàn kết toàn dân tộc",
      "Phải luôn dựa vào sự chi viện vũ trang của quốc tế"
    ],
    "answer": 2
  },
  {
    "question": "Để bảo vệ nền độc lập mới giành được sau năm 1945, tại sao Đảng ta lại ký Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946) với Pháp?",
    "options": [
      "Để chấp nhận quy chế tự trị trong khối Liên hiệp Pháp",
      "Nhằm mượn tay Pháp đuổi quân Tưởng Giới Thạch, tranh thủ thời gian hòa hoãn để củng cố lực lượng",
      "Vì quân đội ta lúc đó chưa có vũ khí, không thể kháng cự",
      "Để chờ đợi lực lượng Đồng minh quay trở lại can thiệp"
    ],
    "answer": 1
  }
]

const MiniGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleAnswerOptionClick = (index) => {
    setSelectedOption(index)
    const correct = index === questions[currentQuestion].answer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
        setSelectedOption(null)
        setIsCorrect(null)
      } else {
        setShowScore(true)
      }
    }, 1200)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
    setIsCorrect(null)
  }

  return (
    <div className="relative min-h-[85vh]">
      {/* Floating Lotus Background */}
      <FloatingLotus />

      <div className="flex justify-center items-center min-h-[85vh] w-full py-16 px-4 relative z-10">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-heritage-gold rounded-full mb-4">
              <Brain className="w-8 h-8 text-primary-red" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-red mb-3">
              Thử Tài Kiến Thức
            </h2>
            <p className="text-gray-600 text-lg">
              Trả lời {questions.length} câu hỏi để kiểm tra độ hiểu biết của
              bạn
            </p>
          </motion.div>

          {showScore ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-panel rounded-3xl p-12 md:p-16 text-center shadow-heritage-lg"
            >
              {score === questions.length && (
                <Fireworks autorun={{ speed: 3 }} />
              )}

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="inline-block mb-6"
              >
                <Trophy className="w-20 h-20 md:w-24 md:h-24 text-heritage-gold drop-shadow-lg" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-display font-black text-primary-red mb-4">
                Điểm số: {score} / {questions.length}
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 mb-10">
                {score === questions.length
                  ? '🎉 Tuyệt vời! Bạn đã nắm vững kiến thức.'
                  : '💪 Hãy thử lại để đạt điểm tuyệt đối nhé!'}
              </p>

              <motion.button
                onClick={resetQuiz}
                className="btn-primary inline-flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw size={22} />
                Chơi lại
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-panel rounded-3xl p-8 md:p-12 shadow-heritage min-h-[450px] flex flex-col"
            >
              {/* Progress */}
              <div className="flex justify-between items-center mb-8 text-gray-500 font-medium">
                <span className="text-sm md:text-base">
                  Câu hỏi {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm md:text-base bg-heritage-gold/20 px-4 py-1 rounded-full text-primary-red font-bold">
                  Điểm: {score}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 leading-relaxed min-h-[80px] flex items-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-4 flex-1">
                {questions[currentQuestion].options.map((option, index) => {
                  let bgColor = 'bg-white/80'
                  let borderColor = 'border-gray-200'
                  let textColor = 'text-gray-800'
                  let icon = null

                  if (selectedOption !== null) {
                    if (index === questions[currentQuestion].answer) {
                      bgColor = 'bg-green-100'
                      borderColor = 'border-green-400'
                      textColor = 'text-green-900'
                      if (selectedOption === index)
                        icon = (
                          <CheckCircle size={24} className="text-green-600" />
                        )
                    } else if (selectedOption === index) {
                      bgColor = 'bg-red-100'
                      borderColor = 'border-red-400'
                      textColor = 'text-red-900'
                      icon = <XCircle size={24} className="text-red-600" />
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!selectedOption ? { scale: 1.02, x: 5 } : {}}
                      whileTap={!selectedOption ? { scale: 0.98 } : {}}
                      onClick={() =>
                        !selectedOption && handleAnswerOptionClick(index)
                      }
                      className={`
                                            ${bgColor} ${borderColor} ${textColor}
                                            p-5 md:p-6 rounded-2xl border-2 text-left font-medium text-base md:text-lg
                                            flex items-center justify-between transition-all duration-300
                                            ${!selectedOption ? 'hover:border-heritage-gold hover:shadow-md cursor-pointer' : 'cursor-default'}
                                        `}
                    >
                      <span className="flex-1">{option}</span>
                      {icon}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MiniGame
