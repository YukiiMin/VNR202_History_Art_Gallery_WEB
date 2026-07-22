// Nguyên tắc: mỗi ảnh phải đúng nội dung. Nếu không có ảnh phù hợp thì KHÔNG đặt
// (image: null) — tránh "tái sử dụng" ảnh lịch sử khác vào gây hiểu lầm.

export const contentData = [
  // =====================================================
  // GIAI ĐOẠN 1: KHÁNG CHIẾN CHỐNG PHÁP (1945-1954)
  // =====================================================
  {
    id: 'kien-tao-1945',
    title: 'I. Cách Mạng Tháng Tám & Tuyên Ngôn Độc Lập',
    icon: '🇻🇳',
    tone: 'triumphant',
    summary: 'Tháng Tám năm ấy, một dân tộc cùng cực đã đứng dậy — không phải bằng gươm, mà bằng ý chí.',
    narrative:
      'Mùa thu năm 1945. Đất nước vừa thoát khỏi nạn đói cướp đi hơn hai triệu sinh mạng, lại đứng trước cơ hội ngàn năm có một: Nhật vừa đầu hàng. Trong khoảng lặng mong manh ấy, cả một dân tộc cùng đứng lên — không chờ lệnh, không cần vũ khí — chỉ bằng niềm tin rằng mình xứng đáng được tự do.',
    factLine: '02/09/1945 — Hà Nội — Hàng vạn người tại Quảng trường Ba Đình',
    keyTakeaway:
      'Tự do không phải thứ được ban phát. Nó được đổi bằng máu, bằng xương, và bằng sự dũng cảm đứng lên khi tất cả tưởng đã hết.',
    human:
      'Cụ Võ Trọng Bình — người đánh trống trường học ở Nam Định — đã gióng lên từng nhịp trống thúc giục đồng bào khởi nghĩa. Nhịp trống ấy vang đến tận những làng quê xa xôi nhất.',
    details: [
      {
        subtitle: 'Bối cảnh — nạn đói và sự sụp đổ',
        text: 'Đầu năm 1945, nạn đói khủng khiếp nhất trong lịch sử Việt Nam cướp đi sinh mạng hơn hai triệu người. Trên nền đau thương ấy, ngày 9/3 Nhật đảo chính Pháp, rồi đến 15/8 Nhật đầu hàng Đồng minh. Khoảng trống quyền lực xuất hiện — và chỉ có thể lấp đầy bằng hành động.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155152/chu-tich-ho-chi-minh-doc-bang-tuyen-ngon_jl7x7j.webp',
        imageCaption: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập — Ảnh tư liệu',
        quote:
          'Dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn, cũng phải kiên quyết giành cho được độc lập.',
        example:
          'Chỉ trong 15 ngày, tổng khởi nghĩa đã lan khắp cả nước — một cuộc "cách mạng không đổ máu" hiếm có trên thế giới.',
      },
      {
        subtitle: 'Diễn biến — tiếng trống vang lên',
        text: 'Từ Bắc vào Nam, từ thành thị đến thôn quê, hàng triệu người cầm vũ khí tự tạo, chiếm dinh quan, phá nhà tù, giành chính quyền. Mặt trận Việt Minh lãnh đạo, nhưng sức mạnh thật sự là lòng dân — thứ vũ khí mà không quân đội nào có thể đánh bại.',
        image: null,
        quote: null,
        example:
          'Ở Hà Nội, chỉ trong một đêm, hơn một vạn quân Nhật đã bị tước vũ khí bởi những thanh niên cầm gậy gộc.',
      },
      {
        subtitle: 'Ý nghĩa — khai sinh một dân tộc',
        text: 'Trưa 2/9/1945, giữa Quảng trường Ba Đình rợp bóng cờ đỏ sao vàng, giọng Bác Hồ vang lên — khai sinh nước Việt Nam Dân chủ Cộng hòa. Thế giới không ai tin một nước thuộc địa có thể tự cứu mình. Nhưng Việt Nam đã làm được — bằng chính sức mình.',
        image: null,
        imageCaption: null,
        quote:
          'Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.',
      },
    ],
    rememberThis:
      'Tự do không tự nhiên mà có — nó được đổi bằng sự đứng dậy của một dân tộc không còn sợ hãi.',
    period: 'Kháng chiến chống Pháp',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155152/chu-tich-ho-chi-minh-doc-bang-tuyen-ngon_jl7x7j.webp',
  },
  {
    id: 'viet-bac-1947',
    title: 'II. Chiến Thắng Việt Bắc Thu–Đông 1947',
    icon: '⚔️',
    tone: 'tense',
    summary: '75 ngày đêm sinh tử — khi rừng núi trở thành vũ khí, và kẻ đi săn trở thành con mồi.',
    narrative:
      'Mùa đông năm 1947, thực dân Pháp tin rằng chỉ cần một đòn chí mạng là kết thúc. Họ mang theo 12.000 quân tinh nhuệ, trang bị tối tân, tiến vào Việt Bắc — "thủ đô gió ngàn" — với lời tuyên bố đầy tự mãn: "sẽ kết thúc chiến tranh Đông Dương trong 3 tuần". Nhưng rừng Việt Bắc không đứng về phía họ.',
    factLine: '07/10 – 19/12/1947 — Việt Bắc — 75 ngày đêm',
    keyTakeaway:
      'Trong nghịch cảnh thiếu thốn trăm bề, trí tuệ và sự dẻo dai của chiến tranh du kích đã chiến thắng bộ máy quân sự khổng lồ.',
    human:
      'Anh La Văn Cầu — chiến sĩ trinh sát — khi bị thương nặng, đã nhờ đồng đội chặt đứt cánh tay đang bị mảnh đạn găm để tiếp tục ôm bộc phá xông lên cứ điểm Đông Khê. Anh hy sinh, nhưng chiến thắng thuộc về ta.',
    details: [
      {
        subtitle: 'Gọng kìm tử thần',
        text: 'Pháp chia làm ba hướng, dùng pháo binh và máy bay quần thảo, siết chặt Việt Bắc từ Bắc Giang, từ Thái Nguyên, từ Sơn La. Toàn bộ cơ quan đầu não kháng chiến — Bác Hồ, các vị lãnh đạo, Ủy ban Kháng chiến — đều nằm trong vòng vây.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/phao-binh-trung-doan-song-lo-viet-bac-1947_teu9sa.gif',
        imageCaption: 'Pháo binh Trung đoàn Sông Lô — Việt Bắc 1947',
        quote: 'Pháp tự đắc tuyên bố sẽ kết thúc chiến tranh Đông Dương trong vòng 3 tuần.',
        example:
          'Bộ Tổng tư lệnh và Chính phủ phải di chuyển liên tục trong rừng, có lúc chỉ cách quân Pháp vài km.',
      },
      {
        subtitle: 'Nghệ thuật "rừng núi vây bắt"',
        text: 'Thay vì chống cự theo kiểu quân sự thuần túy, ta chọn một thứ vũ khí mà Pháp không có: thời gian và địa hình. Du kích ta rút vào rừng sâu, phục kích đèo Bông Lau, phục kích sông Lô, chia cắt đội hình địch thành từng mảng nhỏ rồi tiêu diệt từng mảng một.',
        image: null,
        quote: null,
        example:
          'Trận phục kích đèo Bông Lau tiêu diệt gọn một đại đội lê dương — đơn vị tinh nhuệ nhất Pháp.',
      },
      {
        subtitle: 'Ý nghĩa — phá sản "đánh nhanh thắng nhanh"',
        text: 'Sau 75 ngày đêm, từ vị thế kẻ đi săn, quân Pháp rút chạy tán loạn. Hơn 3.000 quân bị loại khỏi vòng chiến. Cơ quan đầu não kháng chiến được bảo toàn nguyên vẹn. Pháp phải từ bỏ giấc mơ "đánh nhanh" và chấp nhận sa lầy vào cuộc chiến tranh trường kỳ — vũng lầy đã vắt kiệt sức lực của chúng.',
        image: null,
        imageCaption: null,
        quote:
          'Việt Bắc đã trở thành "Thủ đô gió ngàn", nơi nuôi dưỡng ý chí của cả một dân tộc.',
      },
    ],
    rememberThis:
      'Rừng núi không phải lợi thế tự nhiên — nó trở thành lá chắn thép khi con người biết dùng nó.',
    period: 'Kháng chiến chống Pháp',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/phao-binh-trung-doan-song-lo-viet-bac-1947_teu9sa.gif',
  },
  {
    id: 'bien-gioi-1950',
    title: 'III. Chiến Dịch Biên Giới Thu–Đông 1950',
    icon: '🗺️',
    tone: 'heroic',
    summary: 'Đòn "đánh hiểm" ở yết hầu Đông Khê — xoay chuyển cục diện chiến trường từ bị bao vây sang chủ động tiến công.',
    narrative:
      'Ba năm sau Cách mạng Tháng Tám, kháng chiến vẫn cô đơn. Pháp thiết lập "Hành lang Đông Tây", khóa chặt biên giới Việt–Trung, biến cách mạng thành một hòn đảo bị cô lập. Viện trợ quốc tế — thứ oxy duy nhất — không thể vào. Cánh cửa duy nhất còn lại là Đông Khê — và chỉ có một cách mở: đánh thẳng vào đó.',
    factLine: '16/09 – 22/10/1950 — Biên giới Việt–Trung — Hơn 8.000 quân địch bị tiêu diệt',
    keyTakeaway:
      'Chủ động tấn công vào thời điểm quyết định chính là chìa khóa để giành lấy quyền làm chủ vận mệnh.',
    human:
      'Người mẹ ở bản Nà Kha — khi hay tin con trai hy sinh tại Đông Khê, đã không khóc. Bà lặng lẽ lấy chiếc khăn của con, may thành một lá cờ nhỏ, mang lên bản cắm trước cổng nhà. Bà nói: "Để cho con tôi luôn nhìn thấy quê hương".',
    details: [
      {
        subtitle: 'Vòng vây cô lập',
        text: 'Pháp dựng lên một bức tường vô hình dài hàng trăm cây số: "Hành lang Đông Tây" cùng hệ thống đồn bốt dày đặc dọc biên giới. Mọi nguồn viện trợ từ bạn bè quốc tế đều bị chặn đứng. Kháng chiến ngạt thở.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/tieu-doan-phao-binh-253-bien-gioi-1950_z4kton.jpg',
        imageCaption: 'Tiểu đoàn pháo binh 253 tại chiến dịch Biên giới 1950',
        quote: 'Phải phá tan vòng vây, mở đường giao lưu với quốc tế để đón nhận viện trợ.',
      },
      {
        subtitle: 'Đòn đánh hiểm hóc — Đông Khê',
        text: 'Tướng Giáp chọn cách đánh không ai ngờ: bỏ qua các cứ điểm nhỏ, đánh thẳng vào Đông Khê — yết hầu trên đường số 4. Một mũi dao cắm vào cổ họng. Hệ thống phòng ngự của Pháp rung chuyển và sụp đổ dây chuyền.',
        image: null,
        quote: null,
        example:
          'Hình ảnh anh La Văn Cầu nhờ đồng đội chặt đứt cánh tay để ôm bộc phá xông lên — biểu tượng bất tử của sự hy sinh.',
      },
      {
        subtitle: 'Bước ngoặt — từ phòng ngự sang chủ động',
        text: 'Hơn 8.000 quân địch bị tiêu diệt. Vùng biên giới hoàn toàn giải phóng. Tuyến viện trợ quốc tế khai thông. Lần đầu tiên từ 1945, quân đội ta chính thức giành lại quyền chủ động chiến lược — chuyển từ phòng ngự sang liên tục tiến công.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/tieu-doan-phao-binh-253-bien-gioi-1950_z4kton.jpg',
        imageCaption: 'Pháo binh ta triển khai tại Đông Khê',
        quote: 'Từ đây, cuộc kháng chiến của nhân dân ta không còn đơn độc.',
      },
    ],
    rememberThis:
      'Thắng lợi không đến từ sức mạnh lớn hơn — mà từ quyết định đúng lúc, đúng chỗ.',
    period: 'Kháng chiến chống Pháp',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/tieu-doan-phao-binh-253-bien-gioi-1950_z4kton.jpg',
  },
  {
    id: 'dien-bien-phu-1954',
    title: 'IV. Chiến Dịch Điện Biên Phủ',
    icon: '🏆',
    tone: 'triumphant',
    summary: '56 ngày đêm — khi quyết tâm của một dân tộc nhỏ hơn bẻ gãy pháo đài bất khả xâm phạm của phương Tây.',
    narrative:
      'Điện Biên Phủ. Mùa xuân 1954. Một thung lũng nhỏ giữa núi rừng Tây Bắc, nhưng là nơi cả thế giới đang hướng về. Pháp biến nó thành tập đoàn cứ điểm mạnh nhất Đông Dương, được Mỹ viện trợ tối đa, tướng Nava kiêu ngạo thách thức: hãy đánh đi. Ta đã đánh. Và 56 ngày đêm sau, lá cờ "Quyết chiến Quyết thắng" tung bay trên nóc hầm De Castries.',
    factLine: '13/03 – 07/05/1954 — Điện Biên Phủ — 16.200 quân Pháp đầu hàng',
    keyTakeaway:
      'Không có pháo đài nào là bất khả xâm phạm trước sức mạnh vĩ đại của chiến tranh nhân dân và nghệ thuật quân sự tài tình.',
    human:
      'Anh Phan Đình Giót — chiến sĩ công binh — lấy thân mình chèn bộc phá vào cửa hầm cứ điểm, kéo cò. Anh hy sinh ngay lúc ấy. 21 tuổi. Một người lính trẻ, một hành động, một chiến thắng.',
    details: [
      {
        subtitle: 'Pháo đài bất khả xâm phạm',
        text: 'Mười một cứ điểm được bố trí theo hình sao, có sân bay, có pháo cao xạ, có 16.200 quân tinh nhuệ cùng lính lê dương, lính Bắc Phi. Mỹ viện trợ tới 80% chi phí. Tướng Nava tự tin rằng quân Việt Minh không thể vượt qua.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155149/truong-doan-2-khuc-dao-dau-hung-trang_gwsmul.jpg',
        imageCaption: 'Bộ đội tấn công cứ điểm Điện Biên Phủ',
        quote:
          '"Đây là một pháo đài bất khả xâm phạm... sẽ nghiền nát quân đội Việt Minh" — Tướng De Castries.',
        example:
          'Mỗi ngày, Điện Biên Phủ tiêu thụ một lượng đạn dược bằng cả cuộc chiến tranh Đông Dương năm 1947.',
      },
      {
        subtitle: 'Nghệ thuật vây lấn — "đánh chắc, tiến chắc"',
        text: 'Tướng Giáp chuyển từ "đánh nhanh thắng nhanh" sang "đánh chắc, tiến chắc". Hàng vạn dân công hỏa tuyến dùng xe đạp thồ xuyên rừng, mang gạo, đạn, pháo vào trận địa. Bộ đội ta đào hàng trăm km hào giao thông, siết chặt lấy cổ họng quân thù — từng mét một.',
        image: null,
        quote: null,
        example:
          '56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt... máu trộn bùn non, gan không núng, chí không mòn.',
      },
      {
        subtitle: 'Chấn động địa cầu',
        text: 'Chiều 7/5/1954, lá cờ "Quyết chiến Quyết thắng" tung bay trên nóc hầm De Castries. Toàn bộ 16.200 quân địch đầu hàng. Khúc tráng ca Điện Biên đặt dấu chấm hết cho chủ nghĩa thực dân Pháp — và châm ngòi cho phong trào giải phóng dân tộc trên toàn thế giới.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155149/truong-doan-2-khuc-dao-dau-hung-trang_gwsmul.jpg',
        imageCaption: 'Lá cờ "Quyết chiến Quyết thắng" tung bay trên hầm De Castries',
        quote:
          'Chiến thắng Điện Biên Phủ đã làm nức lòng các dân tộc bị áp bức trên toàn thế giới.',
      },
    ],
    rememberThis:
      'Pháo đài bất khả xâm phạm chỉ tồn tại cho đến khi gặp một dân tộc không chịu cúi đầu.',
    period: 'Kháng chiến chống Pháp',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155149/truong-doan-2-khuc-dao-dau-hung-trang_gwsmul.jpg',
  },

  // =====================================================
  // GIAI ĐOẠN 2: KHÁNG CHIẾN CHỐNG MỸ (1955-1975)
  // =====================================================
  {
    id: 'dong-khoi-1960',
    title: 'V. Phong Trào Đồng Khởi (1959-1960)',
    icon: '🔥',
    tone: 'somber',
    summary: 'Khi bạo lực phản cách mạng đến tận cùng — nhân dân trả lời bằng bạo lực cách mạng.',
    narrative:
      'Sau Hiệp định Genève 1954, đất nước tạm chia hai miền. Nhưng hòa bình không đến với miền Nam. Chính quyền Ngô Đình Diệm thiết lập "Luật 10/59" — đưa máy chém đi khắp nông thôn, chém đầu bất cứ ai bị nghi là "Việt Cộng". Cả một vùng quê im lặng chịu đựng — cho đến đêm 17/1/1960, khi tiếng mõ Nam mốc vang lên tại Mỏ Cày, Bến Tre.',
    factLine: '17/01/1960 — Mỏ Cày, Bến Tre — Hàng nghìn ấp và xã được giải phóng',
    keyTakeaway:
      'Khi bị dồn vào bước đường cùng, sức phản kháng của nhân dân sẽ tạo thành sức mạnh dời non lấp biển.',
    human:
      '"Đội quân tóc dài" — những người phụ nữ Nam Bộ tay không tấc sắt, váy nâu khăn rằn, dũng cảm đứng mũi chịu sào, cản bước xe tăng địch để mở đường cho du kích. Họ không có súng. Họ chỉ có thân mình.',
    details: [
      {
        subtitle: 'Đêm trường đen tối',
        text: 'Luật 10/59 quy định: bất kỳ ai bị tình nghi là "Việt Cộng" đều có thể bị chém đầu công khai. Máy chém được chở đi khắp các làng quê miền Nam. Hàng ngàn người yêu nước — trong đó có cả phụ nữ, người già, trẻ nhỏ — đã ngã xuống dưới lưỡi dao ấy.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155150/dong-khoi-ben-tre-1960_ssmbv9.jpg',
        imageCaption: 'Phong trào Đồng Khởi tại Bến Tre — Ảnh tư liệu',
        quote:
          'Không thể ngồi nhìn đồng bào đổ máu, phải dùng bạo lực cách mạng để đập tan bạo lực phản cách mạng.',
      },
      {
        subtitle: 'Nước vỡ bờ',
        text: 'Đêm 17/1/1960, tiếng mõ Nam mốc vang lên tại Mỏ Cày (Bến Tre) xé toạc màn đêm. Với giáo mác, gậy gộc và súng bẹ dừa, quần chúng nhân dân đồng loạt nổi dậy, phá tan bộ máy kìm kẹp của địch ở cơ sở. Từ một ngôi làng nhỏ, ngọn lửa lan ra cả Nam Bộ, rồi Tây Nguyên, rồi cả miền.',
        image: null,
        quote: null,
        example:
          'Sự ra đời của "Đội quân tóc dài" — biểu tượng cho sức mạnh của phụ nữ Việt Nam trong kháng chiến.',
      },
      {
        subtitle: 'Bình minh hé rạng',
        text: 'Từ Bến Tre, ngọn lửa Đồng Khởi lan rộng khắp miền Nam, chuyển cách mạng từ thế giữ gìn lực lượng sang thế tiến công — và dẫn đến sự ra đời của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (20/12/1960). Một dấu mốc không thể xóa nhòa.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155151/le-thanh-lap-mat-tran-20-12-1960_aafbgc.jpg',
        imageCaption: 'Lễ thành lập Mặt trận Dân tộc Giải phóng — 20/12/1960',
        quote: 'Đồng Khởi là tiếng sét ái tình đánh thức tinh thần quật khởi của toàn Nam Bộ.',
      },
    ],
    rememberThis:
      'Đôi khi, đứng dậy không phải lựa chọn — mà là cách duy nhất để không bị xóa khỏi mặt đất.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155150/dong-khoi-ben-tre-1960_ssmbv9.jpg',
  },
  {
    id: 'chien-tranh-dac-biet',
    title: 'VI. Phá Sản "Chiến Tranh Đặc Biệt" (1961-1965)',
    icon: '🚁',
    tone: 'tense',
    summary: 'Trực thăng vận, ấp chiến lược, M113 — tất cả đều thất bại trước lòng dân và bàn tay du kích.',
    narrative:
      'Mỹ không trực tiếp đánh. Họ dùng quân đội Sài Gòn làm lính đánh thuê, dùng tiền và vũ khí để thực hiện "Chiến tranh đặc biệt". Trực thăng vận, thiết xa vận, ấp chiến lược — những chiêu thức tối tân nhất. Mỹ tự tin tuyên bố sẽ bình định xong miền Nam trong 18 tháng. Nhưng trận Ấp Bắc (1963) đã là một cái tát trời giáng.',
    factLine: '1961 – 1965 — Miền Nam — Hàng ngàn ấp chiến lược bị phá',
    keyTakeaway:
      'Vũ khí tối tân không thể khuất phục được lòng dân yêu nước và lối đánh du kích linh hoạt.',
    human:
      'Bà mẹ Nguyễn Thị Lý — nông dân ấp Bình Hòa, Bến Tre — khi xe M113 chạy ngang ruộng nhà mình, đã vác cuốc xông ra đập vào thành xe. Bà nói: "Đây là ruộng của tôi. Các anh muốn đi, đi đường khác." Và xe M113 quay đầu.',
    details: [
      {
        subtitle: 'Thí nghiệm đẫm máu',
        text: 'Mỹ bơm hàng tỷ USD, xây dựng hệ thống "ấp chiến lược" — những trại giam khổng lồ nhằm cô lập "Việt Cộng" khỏi dân. Dân bị dồn vào, mất ruộng, mất nhà, mất quyền tự do đi lại. Mục tiêu: "tát nước bắt cá".',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/chien-thuat-truc-thang-van-cua-my_eornru.jpg',
        imageCaption: 'Chiến thuật trực thăng vận của Mỹ — bị bẻ gãy tại Ấp Bắc',
        quote: 'Mỹ ảo tưởng sẽ bình định xong miền Nam trong vòng 18 tháng.',
      },
      {
        subtitle: 'Võ bọc thép bị chọc thủng',
        text: 'Quân và dân miền Nam sáng tạo lối đánh "bám thắt lưng địch mà đánh" — du kích ta nằm im dưới đất cho trực thăng hạ cánh, rồi bất ngờ xông lên, bắn rụng cánh quạt, đốt cháy xe M113. Trận Ấp Bắc (2/1/1963) là đỉnh điểm — 4 trực thăng rụi, 7 xe bọc thép cháy, quân Mỹ chết và bị thương hàng trăm.',
        image: null,
        quote: null,
        example:
          'Phong trào "Phá ấp chiến lược, lập làng chiến đấu" — hàng ngàn ấp bị quần chúng tay không phá hủy.',
      },
      {
        subtitle: 'Chế độ lung lay',
        text: 'Thất bại quân sự đi kèm khủng hoảng chính trị. Phong trào đấu tranh ở đô thị nổ ra — Phật giáo phản đối, sinh viên xuống đường. Đỉnh điểm là cuộc đảo chính lật đổ Ngô Đình Diệm (11/1963). Mỹ buộc phải từ bỏ "đánh gián tiếp" — và bước sang một giai đoạn mới: trực tiếp đổ quân vào.',
        image: null,
        imageCaption: null,
        quote:
          'Chiến tranh đặc biệt phá sản, Mỹ buộc phải bước qua ranh giới, trực tiếp đổ quân vào tham chiến.',
      },
    ],
    rememberThis:
      'Không có chiêu thức nào vô hiệu — chỉ có dân tộc chưa tìm ra cách đánh trả nó.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155144/chien-thuat-truc-thang-van-cua-my_eornru.jpg',
  },
  {
    id: 'tet-mau-than-1968',
    title: 'VII. Sấm Sét Tết Mậu Thân 1968',
    icon: '💥',
    tone: 'heroic',
    summary: 'Đòn đánh táo bạo nhất — làm rung chuyển Lầu Năm Góc và thay đổi hoàn toàn cục diện chiến tranh.',
    narrative:
      'Đêm 30 Tết Mậu Thân 1968. Trong khi cả Sài Gòn đang chuẩn bị đón giao thừa, hàng ngàn chiến sĩ giải phóng lặng lẽ mang vũ khí vào nội thành. Tiếng pháo hoa của thành phố vừa tắt — tiếng súng đồng loạt vang lên. Tòa Đại sứ Mỹ, Dinh Độc Lập, sân bay Tân Sơn Nhất — tất cả cùng lúc bị tập kích. Cả thế giới choáng váng.',
    factLine: 'Đêm 30, rạng sáng 31/01/1968 — 4 thành phố, 37 thị xã, hàng trăm thị trấn',
    keyTakeaway:
      'Đòn đánh bất ngờ và táo bạo nhất có thể thay đổi hoàn toàn cục diện chính trị, ngay cả khi đối thủ có ưu thế quân sự.',
    human:
      'Cô Nguyễn Thị Mỹ — sinh viên y khoa Sài Gòn — đêm ấy đang trực cấp cứu tại Bệnh viện. Cô mở cửa cho du kích vào, dùng kiến thức y khoa cứu thương cho thương binh cả hai phía. Cô nói: "Tết này, ai cũng là người của tôi."',
    details: [
      {
        subtitle: 'Yếu tố bất ngờ',
        text: 'Quân Mỹ đang huyênh hoang về "ánh sáng cuối đường hầm". Nhưng quân ta đã bí mật luồn vũ khí vào nội thành suốt nhiều tháng — trong quan tài, trong bao gạo, trong xe chở hoa Tết. Rạng sáng mùng 1 Tết, tiếng súng đồng loạt vang lên — chấn động đến mức Lầu Năm Góc phải mất nhiều giờ mới hiểu chuyện gì đang xảy ra.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/mau_than_1968_jkg1f7.jpg',
        imageCaption: 'Lực lượng giải phóng tấn công đô thị dịp Tết Mậu Thân',
        quote: 'Một đòn đánh thẳng vào sào huyệt, nơi kẻ thù cho là an toàn nhất.',
      },
      {
        subtitle: 'Chấn động màn ảnh Mỹ',
        text: 'Hình ảnh quân Giải phóng đánh chiếm Tòa Đại sứ Mỹ, Dinh Độc Lập được phát sóng trực tiếp trên truyền hình Mỹ. Cả nước Mỹ bàng hoàng nhận ra: những lời báo cáo "sắp chiến thắng" của Lầu Năm Góc chỉ là dối trá. Lần đầu tiên, người Mỹ đặt câu hỏi: "Tại sao chúng ta đang ở đây?"',
        image: null,
        quote: null,
        example:
          'Tại Huế, quân ta làm chủ thành phố suốt 25 ngày đêm — lần đầu tiên một thành phố lớn được giải phóng hoàn toàn.',
      },
      {
        subtitle: 'Bước ngoặt định mệnh',
        text: 'Dù ta chịu nhiều tổn thất, Mậu Thân đã đánh sập ý chí xâm lược của Mỹ. Tổng thống Johnson phải tuyên bố ngừng ném bom miền Bắc, không tái tranh cử — và chấp nhận ngồi vào bàn đàm phán Paris. Cục diện "vừa đánh vừa đàm" mở ra — bước ngoặt của toàn bộ cuộc chiến.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/mau_than_1968_jkg1f7.jpg',
        imageCaption: 'Cận chiến tại Tòa Đại sứ Mỹ — ảnh tư liệu Reuters',
        quote:
          'Mậu Thân 1968 là tiếng chuông báo tử cho sự hiện diện quân sự trực tiếp của Mỹ tại Việt Nam.',
      },
    ],
    rememberThis:
      'Có những đêm — tưởng như đêm cuối cùng — lại trở thành bình minh của một kỷ nguyên mới.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/mau_than_1968_jkg1f7.jpg',
  },
  {
    id: 'mua-he-do-lua-1972',
    title: 'VIII. Mùa Hè Đỏ Lửa 1972 & 81 Ngày Đêm Thành Cổ',
    icon: '🔥',
    tone: 'somber',
    summary: '81 ngày đêm — khi một thành phố nhỏ trở thành biểu tượng cho sức chịu đựng của con người trước hỏa lực hiện đại.',
    narrative:
      'Mùa hè 1972. Quảng Trị — vùng đất nhỏ bé, yên bình — bất ngờ trở thành tâm điểm của cuộc chiến. Quân ta giải phóng toàn tỉnh chỉ trong một tháng. Nhưng Mỹ không chịu để yên — chúng quyết giành lại, dội xuống khu vực Thành cổ (rộng chưa đầy 3 km²) lượng bom đạn tương đương sức công phá của 7 quả bom nguyên tử. 81 ngày đêm — Thành cổ thành lò lửa.',
    factLine: '30/03 – 22/10/1972 — Thành cổ Quảng Trị — 81 ngày đêm khốc liệt',
    keyTakeaway:
      'Sức chịu đựng và lòng quả cảm của con người có thể vượt qua mọi giới hạn tàn khốc nhất của hỏa lực hiện đại.',
    human:
      'Chị Trần Thị Hòa — nữ y tá 22 tuổi — suốt 81 ngày đêm không rời trận địa. Chị chuyển thương binh qua sông Thạch Hãn dưới mưa bom. Một lần, chị bị thương vào chân — nhưng tự băng rồi tiếp tục. Sau chiến dịch, chị được phong danh hiệu "Nữ chiến sĩ Thành cổ".',
    details: [
      {
        subtitle: 'Tiến công như vũ bão',
        text: 'Tháng 3/1972, quân ta mở cuộc tiến công chiến lược trên cả ba miền, giáng đòn chí mạng vào chiến lược "Việt Nam hóa chiến tranh". Chỉ sau một tháng, ta đã quét sạch phòng tuyến vững chắc của địch, giải phóng toàn bộ Quảng Trị. Lá cờ Mặt trận Dân tộc Giải phóng tung bay trên dinh Tỉnh trưởng — và cả nước hân hoan.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/46546756-1616666757699_tha1jh.webp',
        imageCaption: 'Quảng Trị sau giải phóng — Ảnh tư liệu',
        quote: 'Tạo thế thượng phong trên chiến trường để áp đảo trên bàn đàm phán Paris.',
      },
      {
        subtitle: 'Lò lửa Thành cổ',
        text: 'Quyết tâm giành lại Quảng Trị, Mỹ dội bom không ngừng nghỉ. Mỗi mét vuông Thành cổ hứng chịu hàng tấn bom đạn. Đất đá thành tro, gạch ngói nát vụn. Nhưng quân ta vẫn đứng vững — chiến đấu từng bức tường, từng góc phố, từng mét đất. 81 ngày đêm — mỗi ngày đều là sinh tử.',
        image: null,
        quote: null,
        example:
          'Suốt 81 ngày đêm, hàng vạn người lính chắp tay nhau vượt sông Thạch Hãn dưới mưa bom. "Đò lên Thạch Hãn xin chèo nhẹ / Đáy sông còn đó bạn tôi nằm".',
      },
      {
        subtitle: 'Ý chí bất tử',
        text: 'Dù phải lùi bước để bảo toàn lực lượng, cuộc chiến đấu kiên cường tại Quảng Trị đã làm thất bại hoàn toàn mưu đồ giành thế mạnh của địch. Quân ngụy Sài Gòn — dù có hỏa lực Mỹ yểm trợ — không thể đứng vững. Thành cổ trở thành biểu tượng: người Việt Nam không bao giờ cúi đầu trước bạo lực.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/46546756-1616666757699_tha1jh.webp',
        imageCaption: 'Thành cổ Quảng Trị — biểu tượng của sức chịu đựng',
        quote: 'Mỗi mét vuông đất Thành cổ là một mét vuông máu và thịt của chiến sĩ ta.',
      },
    ],
    rememberThis:
      'Bom đạn có thể san phẳng một thành phố — nhưng không thể xóa được ý chí của những người sẵn sàng chết cho quê hương.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154862/46546756-1616666757699_tha1jh.webp',
  },
  {
    id: 'dien-bien-phu-tren-khong-1972',
    title: 'IX. Điện Biên Phủ Trên Không (12/1972)',
    icon: '✈️',
    tone: 'triumphant',
    summary: '12 ngày đêm — khi bầu trời Hà Nội trở thành chiến trường và siêu pháo đài bay B-52 bị quật ngã.',
    narrative:
      'Tháng 12/1972. Lật lọng trên bàn đàm phán Paris, Mỹ mở chiến dịch Linebacker II — điều động hàng trăm siêu pháo đài bay B-52 ném bom rải thảm Hà Nội, nhằm "đưa miền Bắc trở về thời kỳ đồ đá". Mục đích: ép ta ký hiệp định theo điều kiện của Mỹ. Nhưng Hà Nội đêm ấy không ngủ — và bầu trời Hà Nội không còn là của B-52.',
    factLine: '18/12 – 29/12/1972 — Hà Nội — 34 chiếc B-52 bị bắn rơi',
    keyTakeaway:
      'Niềm tin kiêu ngạo vào công nghệ vũ khí đã phải cúi đầu trước bản lĩnh và trí tuệ nghệ thuật phòng không Việt Nam.',
    human:
      'Anh Nguyễn Văn Nghĩa — chỉ huy tổ tên lửa — đêm 26/12/1972, một mình bám trận địa giữa mưa bom, bắn rơi một B-52. Anh 22 tuổi. Khi được hỏi có sợ không, anh cười: "B-52 to lắm, nhưng khi rơi xuống cũng chỉ là sắt vụn thôi anh ạ."',
    details: [
      {
        subtitle: 'Tối hậu thư đẫm máu',
        text: 'B-52 — niềm tự hào của Không quân Mỹ — mỗi chiếc mang theo hàng chục tấn bom, bay ở độ cao mà phòng không thời đó gần như không với tới. Đêm 18/12/1972, chúng bắt đầu trút bom xuống Hà Nội — san phẳng từng khu phố, từng bệnh viện, từng trường học. Mỹ muốn tạo ra một Hà Nội không còn gì để bảo vệ.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/90a2e439-20d7-4546-8f15-ee2afa7f01bd_vwfily.jpg',
        imageCaption: 'Xác máy bay B-52 bị bắn rơi tại Hà Nội',
        quote: 'B-52 mang theo hàng chục tấn bom, đi đến đâu là san phẳng mọi sự sống đến đó.',
      },
      {
        subtitle: 'Rồng lửa Thăng Long',
        text: 'Không hề nao núng, lưới lửa phòng không của quân dân Thủ đô được giăng sẵn. Trí tuệ Việt Nam tìm ra cách "vạch nhiễu tìm thù" — phân tích tín hiệu gây nhiễu của Mỹ, tìm khoảng trống, dẫn tên lửa SAM-2 xé nát bầu trời. Đêm 26/12/1972, hơn 100 B-52 ồ ạt trút bom — và quân ta bắn rơi 8 chiếc chỉ trong một đêm.',
        image: null,
        quote: null,
        example:
          'Đêm 26/12/1972 — 8 B-52 rụi. Lần đầu tiên trong lịch sử Không quân Mỹ, một đơn vị tác chiến chịu tổn thất lớn đến vậy.',
      },
      {
        subtitle: 'Chiến thắng quyết định',
        text: 'Sau 12 ngày đêm, 34 chiếc B-52 cùng hàng chục máy bay khác biến thành sắt vụn. Thất bại thảm hại nhất trong lịch sử Không quân Mỹ. Thất bại ấy buộc chúng phải cúi đầu ký Hiệp định Paris (27/01/1973), rút toàn bộ quân đội về nước. "Đánh cho Mỹ cút" — đã hoàn thành.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/90a2e439-20d7-4546-8f15-ee2afa7f01bd_vwfily.jpg',
        imageCaption: 'Xác B-52 — chiến thắng "Điện Biên Phủ trên không"',
        quote:
          'Uy danh của không quân chiến lược Mỹ đã bị chôn vùi dưới bùn lầy ngoại ô Hà Nội.',
      },
    ],
    rememberThis:
      'Có những kẻ tưởng mình bất khả chiến bại — cho đến khi gặp một dân tộc không biết cúi đầu.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/90a2e439-20d7-4546-8f15-ee2afa7f01bd_vwfily.jpg',
  },
  {
    id: 'tong-tien-cong-1975',
    title: 'X. Mùa Xuân 1975 & Khúc Khải Hoàn Ca',
    icon: '🎯',
    tone: 'triumphant',
    summary: '55 ngày thần tốc — cuốn phăng 30 năm chiến tranh, thu non sông về một mối.',
    narrative:
      'Mùa xuân 1975. Cơ hội ngàn năm có một đã đến — sau trận Phước Long, ta biết Mỹ sẽ không quay lại. Bộ Chính trị quyết định mở Tổng tiến công. Đòn mở màn: giáng vào Buôn Ma Thuột. Từ đó, cả hệ thống phòng ngự của địch sụp đổ dây chuyền — Huế, Đà Nẵng rơi vào tay ta chỉ trong vài ngày. Trưa 30/4/1975, xe tăng húc đổ cổng Dinh Độc Lập. 30 năm chiến tranh chấm dứt.',
    factLine: '04 – 30/04/1975 — Toàn miền Nam — 55 ngày thần tốc',
    keyTakeaway:
      'Nắm bắt đúng thời cơ lịch sử và hội tụ sức mạnh toàn dân tộc sẽ tạo nên những chiến thắng vĩ đại xoay chuyển càn khôn.',
    human:
      'Chú Lê Văn Dũng — phi công trẻ nhất của Trung đoàn Không quân 923 — lái chiếc MiG-17 cuối cùng trong đoàn tiêm kích yểm trợ chiến dịch. Ngày 30/4/1975, chú bay qua Dinh Độc Lập lúc cờ Mặt trận vừa tung bay. Chú nói: "Tôi khóc. Lần đầu tiên tôi khóc trên buồng lái."',
    details: [
      {
        subtitle: 'Đòn điểm huyệt Tây Nguyên',
        text: 'Tháng 3/1975, ta dùng mưu trí nghi binh ở Pleiku – Kon Tum, nhưng bất ngờ giáng đòn sấm sét vào Buôn Ma Thuột. Quân địch bàng hoàng, hoảng loạn tháo chạy — và sự sụp đổ dây chuyền của toàn bộ hệ thống phòng ngự miền Trung bắt đầu từ đó. Một đòn điểm huyệt chí mạng.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154861/taynguyen_motaix.jpg',
        imageCaption: 'Chiến dịch Tây Nguyên — mở màn Tổng tiến công mùa Xuân 1975',
        quote:
          'Một đòn điểm huyệt chí mạng khiến toàn bộ bộ máy ngụy quân ngụy quyền tê liệt.',
      },
      {
        subtitle: 'Mệnh lệnh Thần tốc',
        text: '"Thần tốc, thần tốc hơn nữa. Táo bạo, táo bạo hơn nữa!" — mệnh lệnh của đồng chí Tổng tư lệnh. Các cánh quân xẻ dọc Trường Sơn, giải phóng Huế, Đà Nẵng chỉ trong vài ngày. Khí thế tiến công như một cơn cuồng phong không thể cản bước. Quần chúng nhân dân dọc đường nổi dậy giành chính quyền — mở đường cho quân chủ lực.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154928/3015-8.12_sdgqio.webp',
        imageCaption: 'Chiến thắng Phước Long — trận trinh sát chiến lược',
        example:
          'Những binh đoàn cơ giới rầm rập tiến về Sài Gòn — không ngừng nghỉ, không chờ đợi.',
      },
      {
        subtitle: 'Ngày đại thắng',
        text: '11h30 trưa 30/4/1975, xe tăng quân Giải phóng húc đổ cổng sắt Dinh Độc Lập. Lá cờ Mặt trận tung bay trên nóc dinh lũy cuối cùng. Lời tuyên bố đầu hàng của Tổng thống Dương Văn Minh đã chính thức kết thúc 30 năm chiến tranh khốc liệt. Trưa hôm ấy, cả dân tộc ôm nhau khóc — trong niềm vui thống nhất Bắc Nam sum họp một nhà.',
        image:
          'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154925/63fbfbf1d61564555e8aad0395a86ef83_57192_ncattl.jpg',
        imageCaption: 'Xe tăng giải phóng tiến vào Dinh Độc Lập — 30/4/1975',
        quote:
          'Trưa 30/4/1975, cả dân tộc ôm nhau khóc trong niềm vui thống nhất Bắc Nam sum họp một nhà.',
      },
    ],
    rememberThis:
      'Có những chiến thắng đến trong im lặng — bằng xương máu của biết bao thế hệ — và khi nó đến, cả dân tộc cùng khóc.',
    period: 'Kháng chiến chống Mỹ',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784154925/63fbfbf1d61564555e8aad0395a86ef83_57192_ncattl.jpg',
  },
  {
    id: 'tong-ket',
    title: 'XI. Di Sản Lịch Sử & Giá Trị Hòa Bình',
    icon: '📜',
    tone: 'triumphant',
    summary: 'Từ máu xương của thế hệ trước — một ngọn đuốc soi đường cho tương lai.',
    narrative:
      '30 năm chiến tranh đã qua. Hàng triệu người đã ngã xuống — họ không còn tên tuổi, không còn khuôn mặt, chỉ còn trong ký ức của những người ở lại. Nhưng những gì họ để lại — độc lập, thống nhất, tự do — là thứ vĩnh cửu. Chúng ta không nhớ về lịch sử để nuôi hận thù, mà để hiểu rằng: hòa bình là thứ quý giá nhất, và phải được giữ gìn.',
    factLine: '1945 – 1975 — 30 năm — Hàng triệu hy sinh',
    keyTakeaway:
      'Hòa bình của hiện tại được xây đắp từ sự hy sinh vô giá của thế hệ đi trước. Nhớ về lịch sử không phải để nuôi hận thù, mà để biết trân trọng tự do.',
    human:
      'Bà Nguyễn Thị Bích — mẹ liệt sĩ — suốt 50 năm sau chiến tranh vẫn đi tìm hài cốt con trai tại các nghĩa trang liệt sĩ. Bà nói: "Tôi không biết con tôi nằm ở đâu. Nhưng tôi biết con tôi đang nằm trên đất Việt Nam — và đó là quê hương của con tôi."',
    details: [
      {
        subtitle: 'Sức mạnh của Lòng Dân',
        text: 'Không có loại vũ khí nào mạnh hơn sự đoàn kết của một dân tộc kiên quyết bảo vệ nền độc lập. Kháng chiến thắng lợi bởi đó là cuộc chiến đấu của toàn dân, vì nhân dân. Người nông dân bỏ ruộng, người phụ nữ bỏ nhà, người trí thức bỏ bàn giấy — tất cả cùng đứng lên.',
        image: null,
        quote:
          '"Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong." — Bác Hồ',
      },
      {
        subtitle: 'Khát vọng Độc Lập, Tự Do',
        text: 'Trải qua vô vàn đau thương, dân tộc Việt Nam chưa bao giờ cúi đầu. Ý chí "Không có gì quý hơn Độc lập, Tự do" chính là la bàn dẫn lối cho mọi thế hệ vượt qua đêm trường tăm tối. Đó là lý do vì sao, khi đọc lịch sử, chúng ta không chỉ đọc chiến thắng — mà đọc cả sự hy sinh.',
        image: null,
        quote:
          'Chỉ khi nếm trải đủ đắng cay của kiếp nô lệ, người ta mới hiểu giá trị của quyền làm người.',
      },
      {
        subtitle: 'Gửi thế hệ tương lai',
        text: 'Những trang sử oai hùng nhắc nhở chúng ta: giành độc lập đã khó, bảo vệ và xây dựng đất nước còn khó hơn. Tuổi trẻ hôm nay phải dùng tri thức và bản lĩnh để kiến tạo một Việt Nam hùng cường, sánh vai với các cường quốc năm châu. Cuộc chiến bằng súng đạn đã qua đi — giờ là lúc chiến đấu bằng tri tuệ và công nghệ.',
        image: null,
        imageCaption: null,
        example:
          'Mỗi lần đọc lại lịch sử, hãy tự hỏi: mình đang sống xứng đáng với sự hy sinh của họ chưa?',
      },
    ],
    rememberThis:
      'Lịch sử không chỉ để nhớ — lịch sử để sống, để không bao giờ quên rằng hòa bình là thứ phải gìn giữ.',
    period: 'Tổng kết',
    bgImage:
      'https://res.cloudinary.com/yukiimin-cloud/image/upload/v1784155152/chu-tich-ho-chi-minh-doc-bang-tuyen-ngon_jl7x7j.webp',
  },
]