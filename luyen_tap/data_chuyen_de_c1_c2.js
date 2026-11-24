/* Ngân hàng Luyện theo 6 Dạng Trọng Tâm Chương 1 & Chương 2 (100% Offline, chuẩn GDPT 2018) */
(function (global) {
  'use strict';

  var LY_CHUYEN_DE_C1_C2 = {
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      totalQuestions: 36,
      dangList: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
      updatedAt: '2026-11-22'
    },
    questions: [
      /* ================= DẠNG 1 (Ch1): THANG NHIỆT ĐỘ, NHIỆT KẾ & CẤU TRÚC CHẤT ================= */
      {
        id: 'cd_d1_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Theo mô hình động học phân tử về cấu tạo chất, phát biểu nào sau đây đúng khi nói về chuyển động của các phân tử trong chất rắn kết tinh?',
        options: [
          'Các phân tử chuyển động hỗn loạn hoàn toàn tự do trong toàn bộ thể tích bình chứa.',
          'Các phân tử sắp xếp theo trật tự mạng tinh thể và chỉ dao động quanh vị trí cân bằng xác định.',
          'Các phân tử đứng yên tuyệt đối tại các nút mạng khi nhiệt độ nhỏ hơn 0 °C.',
          'Khoảng cách giữa các phân tử rất lớn so với kích thước phân tử nên lực tương tác không đáng kể.'
        ],
        answerIndex: 1,
        goi_y: 'Liên hệ khoảng cách, lực tương tác và dạng chuyển động nhiệt của phân tử ở 3 thể (rắn kết tinh, lỏng, khí).',
        loi_giai: {
          ban_chat: 'Trong chất rắn kết tinh, lực tương tác giữa các phân tử rất mạnh nên chúng liên kết chặt chẽ tại các nút mạng xác định.',
          bien_doi: 'Các phân tử không đứng yên mà luôn dao động nhiệt quanh vị trí cân bằng cố định (chỉ ngừng hẳn theo mô hình cổ điển khi đạt 0 K, thực tế không đạt được).',
          dap_an: 'Chọn B.',
          bay: 'Nhầm ở 0 °C phân tử ngừng dao động; hoặc nhầm mô tả chất rắn với chất lỏng (dao động quanh vị trí cân bằng di chuyển được).'
        }
      },
      {
        id: 'cd_d1_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Trong một thí nghiệm, nhiệt độ của một khối nước tăng thêm 45 °C. Độ tăng nhiệt độ của khối nước này theo thang Kelvin bằng bao nhiêu?',
        options: [
          '45 K',
          '318 K',
          '228 K',
          '318,15 K'
        ],
        answerIndex: 0,
        goi_y: 'Phân biệt giữa "giá trị nhiệt độ T" và "độ biến thiên nhiệt độ ΔT = T₂ − T₁".',
        loi_giai: {
          ban_chat: 'Một độ chia trên thang Celsius (1 °C) có độ lớn đúng bằng một độ chia trên thang Kelvin (1 K).',
          bien_doi: 'ΔT = T₂ − T₁ = (t₂ + 273) − (t₁ + 273) = t₂ − t₁ = 45 K.',
          dap_an: 'Chọn A (45 K).',
          bay: 'Cộng thêm 273 vào độ biến thiên nhiệt độ Δt (ra 318 K) — đây là lỗi kinh điển nhất khi đổi °C sang K.'
        }
      },
      {
        id: 'cd_d1_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một nhiệt kế thủy ngân có vạch chia tuyến tính chưa ghi số: khi đặt trong nước đá đang tan ở áp suất chuẩn (0 °C) cột thủy ngân dài 4,0 cm; khi đặt trong hơi nước đang sôi chuẩn (100 °C) cột dài 24,0 cm. Đặt nhiệt kế vào một chậu nước ấm thấy cột thủy ngân dài 13,0 cm. Nhiệt độ tuyệt đối của chậu nước theo thang Kelvin là:',
        options: [
          '45 K',
          '273 K',
          '318 K',
          '328 K'
        ],
        answerIndex: 2,
        goi_y: 'Dùng tính chất tuyến tính t = 100 · (l − l₀) / (l₁₀₀ − l₀), sau đó nhớ đổi sang Kelvin bằng T = t + 273.',
        loi_giai: {
          ban_chat: 'Sự dãn nở dài của cột chất lỏng phụ thuộc bậc nhất (tuyến tính) theo nhiệt độ.',
          bien_doi: 't = 100 × (13,0 − 4,0) / (24,0 − 4,0) = 100 × 9 / 20 = 45 °C. Đổi sang Kelvin: T = 45 + 273 = 318 K.',
          dap_an: 'Chọn C (318 K).',
          bay: 'Quên trừ l₀ = 4,0 cm ở tử số; hoặc tính xong t = 45 °C rồi chọn nhầm 45 K mà quên cộng 273.'
        }
      },
      {
        id: 'cd_d1_04',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một nhiệt kế có thang đo tuyến tính kí hiệu là °X được chuẩn hóa tại áp suất tiêu chuẩn: ở nhiệt độ nước đá đang tan (0 °C) nhiệt kế chỉ −10 °X, còn ở nhiệt độ nước đang sôi (100 °C) nhiệt kế chỉ 190 °X.',
        items: [
          { label: 'a', text: 'Một khoảng chia 1 °X có độ lớn tương ứng với 0,5 K.', answer: true },
          { label: 'b', text: 'Khi nhiệt độ môi trường là 25 °C thì số chỉ trên nhiệt kế là 40 °X.', answer: true },
          { label: 'c', text: 'Ở nhiệt độ không tuyệt đối (0 K), số chỉ trên nhiệt kế thang X là −546 °X.', answer: false },
          { label: 'd', text: 'Tại nhiệt độ 10 °C, số chỉ trên thang Celsius và thang X có giá trị bằng nhau.', answer: true }
        ],
        goi_y: 'Thiết lập hàm liên hệ tuyến tính X(t) = a·t + b từ hai điểm mốc 0 °C và 100 °C rồi kiểm tra từng ý.',
        loi_giai: {
          ban_chat: 'Hàm chuyển đổi tuyến tính có dạng t_X = X₀ + [(X₁₀₀ − X₀)/100]·t.',
          bien_doi: 'Ta có t_X = −10 + [(190 − (−10))/100]·t = −10 + 2t. a) 100 K ứng 200 °X ⇒ 1 °X = 0,5 K (Đúng). b) t = 25 °C ⇒ t_X = −10 + 50 = 40 °X (Đúng). c) 0 K = −273 °C ⇒ t_X = −10 + 2×(−273) = −556 °X ≠ −546 °X (Sai). d) Giải t = −10 + 2t ⇒ t = 10 °C (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Ở ý c) hay quên cộng số hạng tự do −10 khi tính từ −273 °C.'
        }
      },
      {
        id: 'cd_d1_05',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một thanh thép có nhiệt độ ban đầu là 20 °C được nung nóng lên tới 350 K. Độ tăng nhiệt độ của thanh thép tính theo thang Kelvin bằng bao nhiêu K?',
        answer: '57',
        unit: 'K',
        goi_y: 'Đổi nhiệt độ ban đầu 20 °C sang Kelvin trước, rồi lấy T₂ − T₁.',
        loi_giai: {
          ban_chat: 'Phải đưa hai mốc nhiệt độ về cùng một thang đo trước khi tính độ chênh lệch.',
          bien_doi: 'T₁ = 20 + 273 = 293 K; T₂ = 350 K ⇒ ΔT = 350 − 293 = 57 K.',
          dap_an: '57 (K).',
          bay: 'Lấy thẳng 350 − 20 = 330 K vì quên đổi 20 °C sang thang Kelvin.'
        }
      },
      {
        id: 'cd_d1_06',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một nhiệt kế bị sai lệch vạch chia đều: trong nước đá đang tan chuẩn (0 °C) nó chỉ −4 °C, còn trong hơi nước đang sôi chuẩn (100 °C) nó chỉ 101 °C. Khi dùng nhiệt kế này đo một bình nước, số chỉ đọc được là 38 °C. Nhiệt độ thực của bình nước bằng bao nhiêu °C?',
        answer: '40',
        unit: '°C',
        goi_y: 'Khoảng 100 độ thực ứng với 101 − (−4) = 105 độ chỉ trên nhiệt kế sai.',
        loi_giai: {
          ban_chat: 'Nhiệt kế vẫn chia đều tuyến tính nên tỉ số đoạn chiều dài tương ứng không đổi: (t_thực − 0)/(100 − 0) = (t_sai − (−4))/(101 − (−4)).',
          bien_doi: 't_thực / 100 = (38 − (−4)) / (101 − (−4)) = 42 / 105 = 0,4 ⇒ t_thực = 40 °C.',
          dap_an: '40 (°C).',
          bay: 'Lấy 38 + 4 = 42 °C mà quên rằng tổng số vạch chia giữa hai điểm mốc là 105 vạch chứ không phải 100.'
        }
      },

      /* ================= DẠNG 2 (Ch1): ĐỊNH LUẬT I NĐLH (ΔU = A + Q) & ĐỒ THỊ QUÁ TRÌNH ================= */
      {
        id: 'cd_d2_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Theo quy ước dấu chuẩn chương trình GDPT 2018 trong biểu thức Định luật I nhiệt động lực học ΔU = A + Q, khi một khối khí nhận nhiệt lượng và giãn nở thực hiện công đẩy pít-tông thì dấu của A và Q lần lượt là:',
        options: [
          'A > 0 và Q > 0',
          'A > 0 và Q < 0',
          'A < 0 và Q > 0',
          'A < 0 và Q < 0'
        ],
        answerIndex: 2,
        goi_y: 'Quy ước lấy vật (khối khí) làm hệ: nhận vào mang dấu (+), truyền/thực hiện ra ngoài mang dấu (−).',
        loi_giai: {
          ban_chat: 'Định luật I NĐLH biểu thị bảo toàn năng lượng đối với nội năng U của hệ.',
          bien_doi: 'Khí nhận nhiệt lượng ⇒ Q > 0. Khí giãn nở thực hiện công lên môi trường bên ngoài ⇒ A < 0.',
          dap_an: 'Chọn C (A < 0 và Q > 0).',
          bay: 'Nhầm sang quy ước cũ ở một số tài liệu nước ngoài (ΔU = Q − A với A là công khí sinh ra mang dấu dương).'
        }
      },
      {
        id: 'cd_d2_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Người ta dùng lực nén nhanh một khối khí lí tưởng chứa trong một xi-lanh bọc vỏ cách nhiệt hoàn toàn, làm khí nhận công 450 J. Độ biến thiên nội năng ΔU của khối khí là:',
        options: [
          '+450 J',
          '−450 J',
          '0 J',
          '+225 J'
        ],
        answerIndex: 0,
        goi_y: 'Chú ý cụm từ "cách nhiệt hoàn toàn" cho biết giá trị của nhiệt lượng Q trao đổi với bên ngoài.',
        loi_giai: {
          ban_chat: 'Quá trình đoạn nhiệt không có sự truyền nhiệt giữa hệ và môi trường ngoài (Q = 0).',
          bien_doi: 'Khí bị nén nên nhận công A = +450 J; vỏ cách nhiệt nên Q = 0 ⇒ ΔU = A + Q = +450 J.',
          dap_an: 'Chọn A (+450 J).',
          bay: 'Bỏ sót dữ kiện "cách nhiệt" hoặc gán nhầm A = −450 J.'
        }
      },
      {
        id: 'cd_d2_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một khối khí đựng trong xi-lanh có pít-tông tiết diện 200 cm² nhận nhiệt lượng 600 J và giãn nở đẩy pít-tông dịch chuyển được 10 cm dưới áp suất không đổi p = 2,0×10⁵ Pa. Độ biến thiên nội năng ΔU của khối khí bằng:',
        options: [
          '+1000 J',
          '+200 J',
          '−200 J',
          '+580 J'
        ],
        answerIndex: 1,
        goi_y: 'Đổi S từ cm² sang m², d từ cm sang m, tính độ lớn công |A| = p·S·d rồi lấy dấu âm vì khí giãn nở.',
        loi_giai: {
          ban_chat: 'Khi giãn nở đẳng áp, công khí thực hiện làm pít-tông dịch chuyển có độ lớn |A| = p·ΔV = p·S·d.',
          bien_doi: 'S = 200×10⁻⁴ = 0,02 m²; d = 0,10 m ⇒ ΔV = 2×10⁻³ m³. Vì khí giãn nở nên A = −2,0×10⁵ × 2×10⁻³ = −400 J. Có Q = +600 J ⇒ ΔU = −400 + 600 = +200 J.',
          dap_an: 'Chọn B (+200 J).',
          bay: 'Thay A = +400 J ra +1000 J; hoặc quên đổi 200 cm² sang 0,02 m².'
        }
      },
      {
        id: 'cd_d2_04',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Nén đẳng áp một lượng khí lí tưởng ở áp suất không đổi p = 1,5×10⁵ Pa để thể tích khí giảm từ 8,0 lít xuống còn 4,0 lít. Trong quá trình này, khối khí truyền ra môi trường xung quanh nhiệt lượng 900 J.',
        items: [
          { label: 'a', text: 'Khí bị nén nên nhận công với giá trị A = +600 J.', answer: true },
          { label: 'b', text: 'Trong công thức ΔU = A + Q, giá trị nhiệt lượng là Q = +900 J.', answer: false },
          { label: 'c', text: 'Độ biến thiên nội năng của khối khí là ΔU = −300 J.', answer: true },
          { label: 'd', text: 'Nhiệt độ tuyệt đối của khối khí tăng lên gấp đôi sau quá trình nén này.', answer: false }
        ],
        goi_y: 'Đổi lít sang m³ (1 lít = 10⁻³ m³), xác định dấu A = −p(V₂ − V₁) và dấu Q khi truyền nhiệt ra ngoài.',
        loi_giai: {
          ban_chat: 'Nén khí (ΔV < 0) nghĩa là ngoại lực thực hiện công dương lên khí (A > 0). Truyền nhiệt ra ngoài nghĩa là Q < 0.',
          bien_doi: 'a) ΔV = (4,0 − 8,0)×10⁻³ = −4×10⁻³ m³ ⇒ A = −1,5×10⁵ × (−4×10⁻³) = +600 J (Đúng). b) Khí tỏa nhiệt ⇒ Q = −900 J (Sai). c) ΔU = +600 + (−900) = −300 J (Đúng). d) Đẳng áp có V/T = const, V giảm một nửa nên T giảm một nửa (Sai).',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Sai.',
          bay: 'Nhầm nén đẳng áp làm tăng nhiệt độ; hoặc quên dấu âm khi khí tỏa nhiệt.'
        }
      },
      {
        id: 'cd_d2_05',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một lượng khí có nội năng ban đầu U₁ = 1200 J. Sau khi khối khí thực hiện công 320 J đồng thời tỏa ra môi trường nhiệt lượng 180 J thì nội năng lúc sau U₂ của khối khí bằng bao nhiêu J?',
        answer: '700',
        unit: 'J',
        goi_y: 'Xác định cả A và Q đều mang dấu âm hay dương, sau đó dùng U₂ = U₁ + ΔU.',
        loi_giai: {
          ban_chat: 'Khí vừa mất năng lượng dưới dạng công vừa tỏa nhiệt ra ngoài nên nội năng phải giảm.',
          bien_doi: 'A = −320 J; Q = −180 J ⇒ ΔU = (−320) + (−180) = −500 J ⇒ U₂ = 1200 − 500 = 700 J.',
          dap_an: '700 (J).',
          bay: 'Đọc lướt rồi lấy 1200 − 320 + 180 = 1060 J hoặc bỏ qua giá trị U₁.'
        }
      },
      {
        id: 'cd_d2_06',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một động cơ nhiệt lí tưởng hoạt động theo chu trình khép kín. Trong mỗi chu trình, tác nhân nhận nhiệt lượng 800 J từ nguồn nóng và truyền nhiệt lượng 520 J cho nguồn lạnh. Hiệu suất của động cơ nhiệt này bằng bao nhiêu phần trăm (%)?',
        answer: '35',
        unit: '%',
        goi_y: 'Sau một chu trình kín, ΔU = 0 ⇒ Công có ích |A| = Q_nhận − |Q_tỏa|.',
        loi_giai: {
          ban_chat: 'Chu trình khép kín đưa hệ về đúng trạng thái ban đầu nên ΔU = 0; phần nhiệt nhận mà không truyền cho nguồn lạnh chuyển hóa thành công cơ học.',
          bien_doi: 'Công có ích mỗi chu trình A_ích = 800 − 520 = 280 J. Hiệu suất H = (A_ích / Q_nhận) × 100% = (280 / 800) × 100% = 35%.',
          dap_an: '35 (%).',
          bay: 'Lấy nhầm 520 / 800 = 65% (đây là tỉ lệ nhiệt bị thất thoát, không phải hiệu suất).'
        }
      },

      /* ================= DẠNG 3 (Ch1): NHIỆT DUNG RIÊNG, NHIỆT ẨN & CÂN BẰNG NHIỆT CÓ CHUYỂN THỂ ================= */
      {
        id: 'cd_d3_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Điều kiện áp dụng trực tiếp công thức tính nhiệt lượng Q = λ·m (với λ là nhiệt nóng chảy riêng của chất rắn) là:',
        options: [
          'Chất rắn đang được nung tăng nhiệt độ nhưng chưa tới điểm nóng chảy.',
          'Chất lỏng tinh khiết đang sôi và hóa hơi ở nhiệt độ không đổi.',
          'Chất rắn kết tinh đang trong giai đoạn nóng chảy hoàn toàn ở nhiệt độ nóng chảy xác định.',
          'Bất kì vật rắn nào dù kết tinh hay vô định hình ở mọi nhiệt độ.'
        ],
        answerIndex: 2,
        goi_y: 'Phân biệt chất rắn kết tinh (có nhiệt độ nóng chảy xác định) với chất rắn vô định hình, và giai đoạn tăng nhiệt với giai đoạn chuyển thể.',
        loi_giai: {
          ban_chat: 'Nhiệt nóng chảy riêng λ gắn với quá trình phá vỡ cấu trúc mạng tinh thể của chất rắn kết tinh ở nhiệt độ nóng chảy không đổi.',
          bien_doi: 'Chất rắn vô định hình không có nhiệt độ nóng chảy xác định nên không dùng mô hình Q = λm đơn giản theo 1 mốc T_nc cố định.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm lẫn giữa công thức nóng chảy Q = λm với công thức tăng nhiệt Q = mcΔT hoặc hóa hơi Q = Lm.'
        }
      },
      {
        id: 'cd_d3_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Dùng một bếp điện có công suất tỏa nhiệt 1130 W (hiệu suất truyền nhiệt đạt 100%) để làm hóa hơi hoàn toàn 0,2 kg nước đang sôi ở 100 °C dưới áp suất chuẩn. Biết nhiệt hóa hơi riêng của nước L = 2,26×10⁶ J/kg. Thời gian cần thiết để lượng nước này bay hơi hết là:',
        options: [
          '200 s',
          '400 s',
          '226 s',
          '800 s'
        ],
        answerIndex: 1,
        goi_y: 'Nước đã ở sẵn 100 °C nên toàn bộ nhiệt lượng chỉ dùng cho quá trình hóa hơi Q = L·m = P·t.',
        loi_giai: {
          ban_chat: 'Trong giai đoạn đang sôi, nhiệt lượng cấp vào làm đứt liên kết giữa các phân tử lỏng để chuyển thành hơi ở cùng 100 °C.',
          bien_doi: 'Q = L·m = 2,26×10⁶ × 0,2 = 452 000 J. Thời gian đun t = Q / P = 452 000 / 1130 = 400 s.',
          dap_an: 'Chọn B (400 s).',
          bay: 'Tính nhẩm 2,26×10⁶ thành 2,26×10⁵ hoặc nhân thêm mcΔT dù nước đã ở 100 °C.'
        }
      },
      {
        id: 'cd_d3_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Thả một cục nước đá khối lượng 0,4 kg ở 0 °C vào một bình cách nhiệt chứa 1,0 kg nước lỏng ở 20 °C. Cho nhiệt dung riêng của nước c = 4200 J/(kg·K) và nhiệt nóng chảy riêng của nước đá λ = 3,34×10⁵ J/kg. Khi hệ đạt trạng thái cân bằng nhiệt thì:',
        options: [
          'Nước đá tan hết hoàn toàn, nhiệt độ cân bằng của nước là 14,3 °C.',
          'Nước đá tan hết hoàn toàn, nhiệt độ cân bằng của nước là 0 °C.',
          'Toàn bộ lượng nước đông đặc thành đá ở 0 °C.',
          'Nước đá chỉ tan một phần (còn dư khoảng 0,15 kg đá) và nhiệt độ cân bằng là 0 °C.'
        ],
        answerIndex: 3,
        goi_y: 'LUÔN so sánh nhiệt lượng nước tỏa ra tối đa khi hạ về 0 °C với nhiệt lượng cần để làm tan hết cục đá trước khi lập phương trình!',
        loi_giai: {
          ban_chat: 'Không được giả sử mặc định nước đá tan hết; phải kiểm tra điều kiện cân bằng năng lượng ở mốc 0 °C.',
          bien_doi: 'Q_cần_tan_hết = 0,4 × 3,34×10⁵ = 133 600 J. Q_tỏa_tối_đa = 1,0 × 4200 × (20 − 0) = 84 000 J. Vì 84 000 J < 133 600 J nên đá chưa tan hết ⇒ t_cb = 0 °C. Khối lượng đá đã tan m_tan = 84 000 / 334 000 ≈ 0,251 kg ⇒ còn lại ~0,15 kg đá.',
          dap_an: 'Chọn D.',
          bay: 'Viết ngay phương trình λm_đá + m_đá·c(t − 0) = m_nước·c(20 − t) sẽ giải ra nghiệm âm t < 0 °C (vô lí!).'
        }
      },
      {
        id: 'cd_d3_04',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Thả 0,2 kg nước đá ở 0 °C vào một bình cách nhiệt chứa 0,8 kg nước ở 50 °C. Biết nhiệt dung riêng của nước là c = 4200 J/(kg·K) và nhiệt nóng chảy riêng của nước đá là λ = 3,34×10⁵ J/kg.',
        items: [
          { label: 'a', text: 'Nhiệt lượng cần thiết để làm 0,2 kg nước đá ở 0 °C nóng chảy hoàn toàn thành nước 0 °C là 66,8 kJ.', answer: true },
          { label: 'b', text: 'Nhiệt lượng tối đa 0,8 kg nước ở 50 °C có thể tỏa ra khi hạ xuống 0 °C là 168 kJ nên lượng đá sẽ tan hết hoàn toàn.', answer: true },
          { label: 'c', text: 'Nhiệt độ khi xảy ra cân bằng nhiệt trong bình là 40 °C.', answer: false },
          { label: 'd', text: 'Khi hệ cân bằng nhiệt, trong bình chỉ có 1,0 kg nước lỏng ở nhiệt độ xấp xỉ 24,1 °C.', answer: true }
        ],
        goi_y: 'Kiểm tra Q_tỏa_max vs Q_nóng_chảy, sau đó nhớ tổng khối lượng nước thu nhiệt tăng từ 0 °C lên t_cb chính là lượng nước do đá tan ra.',
        loi_giai: {
          ban_chat: 'Khi đá tan hết, phần nhiệt tỏa ra còn dư từ nước nóng dùng để nâng nhiệt độ của 0,2 kg nước vừa tan từ 0 °C lên t_cb.',
          bien_doi: 'a) Q_nc = 0,2 × 3,34×10⁵ = 66 800 J = 66,8 kJ (Đúng). b) Q_tỏa_max = 0,8 × 4200 × 50 = 168 000 J > 66,8 kJ ⇒ tan hết (Đúng). c) Nếu quên cộng Q_nc mới giải 0,2t = 0,8(50 − t) ra 40 °C (Sai). d) 66 800 + 0,2×4200×t = 0,8×4200×(50 − t) ⇒ 4200t = 101 200 ⇒ t ≈ 24,1 °C, tổng nước lỏng 0,2 + 0,8 = 1,0 kg (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Quên số hạng nhiệt ẩn Q_nc = λm trong phương trình cân bằng nhiệt.'
        }
      },
      {
        id: 'cd_d3_05',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Tính nhiệt lượng tối thiểu cần cung cấp (theo đơn vị kJ) để làm 0,4 kg nước đá ở −10 °C nóng chảy hoàn toàn thành nước lỏng ở 0 °C. Biết nhiệt dung riêng của nước đá c_đá = 2100 J/(kg·K) và nhiệt nóng chảy riêng λ = 3,34×10⁵ J/kg.',
        answer: '142',
        unit: 'kJ',
        goi_y: 'Quá trình gồm 2 giai đoạn liên tiếp: tăng nhiệt độ nước đá từ −10 °C lên 0 °C, rồi nóng chảy hoàn toàn ở 0 °C.',
        loi_giai: {
          ban_chat: 'Tổng nhiệt lượng cần cung cấp bằng tổng nhiệt lượng qua từng giai đoạn đơn lẻ.',
          bien_doi: 'Q₁ = 0,4 × 2100 × [0 − (−10)] = 8400 J = 8,4 kJ; Q₂ = 0,4 × 3,34×10⁵ = 133 600 J = 133,6 kJ ⇒ Q = 8,4 + 133,6 = 142 kJ.',
          dap_an: '142 (kJ).',
          bay: 'Dùng nhầm nhiệt dung riêng của nước lỏng (4200) thay vì nước đá (2100) cho giai đoạn −10 °C → 0 °C.'
        }
      },
      {
        id: 'cd_d3_06',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Thả 0,3 kg nước đá ở 0 °C vào một bình cách nhiệt chứa 0,5 kg nước ở 30 °C. Cho c_nước = 4200 J/(kg·K) và λ = 3,34×10⁵ J/kg. Khi đạt cân bằng nhiệt, khối lượng nước đá CÒN LẠI (chưa tan) trong bình bằng bao nhiêu gam? (Làm tròn đến hàng đơn vị).',
        answer: '111',
        unit: 'g',
        goi_y: 'Kiểm tra Q_tỏa_max khi nước về 0 °C, tính phần đá tan m_tan = Q_tỏa_max / λ, rồi lấy m_đầu − m_tan và đổi sang gam.',
        loi_giai: {
          ban_chat: 'Khi đá tan không hết, nhiệt độ cuối cùng của toàn hệ dừng tại 0 °C và toàn bộ nhiệt tỏa ra từ nước nóng làm tan một phần đá.',
          bien_doi: 'Q_tỏa_max = 0,5 × 4200 × 30 = 63 000 J. Vì Q_nc_hết = 0,3 × 3,34×10⁵ = 100 200 J > 63 000 J nên đá dư. m_tan = 63 000 / 334 000 ≈ 0,18862 kg = 188,62 g ⇒ m_còn = 300 − 188,62 = 111,38 g ≈ 111 g.',
          dap_an: '111 (g).',
          bay: 'Trả lời nhầm khối lượng đá ĐÃ TAN (189 g) thay vì khối lượng đá CÒN LẠI chưa tan.'
        }
      },

      /* ================= DẠNG 4 (Ch2): ĐẲNG QUÁ TRÌNH & PHƯƠNG TRÌNH CLAPEYRON ================= */
      {
        id: 'cd_d4_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Điều kiện áp dụng đúng của định luật Boyle (p₁V₁ = p₂V₂) là:',
        options: [
          'Áp dụng cho một lượng khí lí tưởng xác định (khối lượng và bản chất khí không đổi) biến đổi ở nhiệt độ không đổi.',
          'Áp dụng cho mọi quá trình bất kì miễn là áp suất khí không vượt quá 1 atm.',
          'Áp dụng ngay cả khi có rò rỉ hoặc bơm thêm khí vào bình trong lúc nhiệt độ giữ nguyên.',
          'Áp dụng khi giữ thể tích bình không đổi và thay đổi nhiệt độ.'
        ],
        answerIndex: 0,
        goi_y: 'Trong pV = nRT, để tích pV là hằng số thì đồng thời cả n (số mol) và T (nhiệt độ) phải không đổi.',
        loi_giai: {
          ban_chat: 'Định luật Boyle chỉ nghiệm đúng khi lượng khí xác định (n = const) và đẳng nhiệt (T = const) ở giới hạn khí lí tưởng.',
          bien_doi: 'Nếu có rò rỉ hoặc bơm thêm khí làm n thay đổi thì phải chuyển về Clapeyron pV = nRT hoặc bảo toàn tổng số mol.',
          dap_an: 'Chọn A.',
          bay: 'Quên điều kiện "lượng khí xác định" nên dùng p₁V₁ = p₂V₂ bừa bãi cho cả bài toán thoát khí.'
        }
      },
      {
        id: 'cd_d4_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Nén đẳng nhiệt một lượng khí lí tưởng xác định từ thể tích 12 lít xuống còn 4 lít thì thấy áp suất khí tăng thêm 2 atm so với ban đầu. Áp suất ban đầu của lượng khí đó là:',
        options: [
          '0,67 atm',
          '1,0 atm',
          '1,5 atm',
          '3,0 atm'
        ],
        answerIndex: 1,
        goi_y: 'Đọc kĩ cụm "tăng thêm 2 atm": tức là p₂ = p₁ + 2 atm, không phải p₂ = 2 atm.',
        loi_giai: {
          ban_chat: 'Quá trình đẳng nhiệt nên p₁V₁ = p₂V₂.',
          bien_doi: 'p₁ × 12 = (p₁ + 2) × 4 ⇒ 12p₁ = 4p₁ + 8 ⇒ 8p₁ = 8 ⇒ p₁ = 1,0 atm.',
          dap_an: 'Chọn B (1,0 atm).',
          bay: 'Đọc sót chữ "tăng thêm" rồi thay p₂ = 2 atm để tính ra p₁ = 0,67 atm.'
        }
      },
      {
        id: 'cd_d4_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một bình kín dung tích 16,62 lít chứa 2,0 mol khí lí tưởng ở nhiệt độ 27 °C. Biết R = 8,31 J/(mol·K). Áp suất khí trong bình bằng:',
        options: [
          '2,7×10⁴ Pa',
          '3,0×10² Pa',
          '3,0×10⁵ Pa',
          '1,5×10⁵ Pa'
        ],
        answerIndex: 2,
        goi_y: 'Trong pV = nRT (khi dùng R = 8,31 J/mol·K), BẮT BUỘC đổi V từ lít sang m³ (1 lít = 10⁻³ m³) và t sang K.',
        loi_giai: {
          ban_chat: 'Phương trình Clapeyron liên hệ trực tiếp các thông số trạng thái của n mol khí lí tưởng ở hệ đơn vị chuẩn SI.',
          bien_doi: 'V = 16,62 lít = 16,62×10⁻³ m³; T = 27 + 273 = 300 K ⇒ p = nRT / V = (2,0 × 8,31 × 300) / (16,62×10⁻³) = 4986 / 0,01662 = 3,0×10⁵ Pa.',
          dap_an: 'Chọn C (3,0×10⁵ Pa).',
          bay: 'Để nguyên V = 16,62 (ra 300 Pa) hoặc giữ t = 27 °C (ra 2,7×10⁴ Pa).'
        }
      },
      {
        id: 'cd_d4_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một lốp ô tô có thể tích bên trong không đổi V = 24,93 lít chứa đầy không khí (coi là khí lí tưởng có khối lượng mol trung bình M = 29 g/mol) ở nhiệt độ 27 °C và áp suất p₁ = 2,0×10⁵ Pa. Lấy R = 8,31 J/(mol·K).',
        items: [
          { label: 'a', text: 'Số mol không khí chứa trong lốp xe ban đầu bằng 2,0 mol.', answer: true },
          { label: 'b', text: 'Khối lượng không khí chứa trong lốp xe ban đầu bằng 58 g.', answer: true },
          { label: 'c', text: 'Khi xe chạy dưới trời nắng làm nhiệt độ khí trong lốp tăng lên 57 °C (coi thể tích lốp không đổi), áp suất khí trong lốp đạt 4,22×10⁵ Pa.', answer: false },
          { label: 'd', text: 'Nếu ở nhiệt độ 57 °C người ta xả bớt 0,5 mol khí ra ngoài thì áp suất khí còn lại trong lốp là 1,65×10⁵ Pa.', answer: true }
        ],
        goi_y: 'Dùng pV = nRT (nhớ đổi V sang m³, T = t + 273) và chú ý áp suất tỉ lệ thuận với số mol n khi V, T không đổi.',
        loi_giai: {
          ban_chat: 'Bài toán kết hợp Clapeyron với trường hợp biến đổi số mol khi van xả khí.',
          bien_doi: 'a) T₁ = 300 K; V = 24,93×10⁻³ m³ ⇒ n₁ = (2,0×10⁵ × 24,93×10⁻³) / (8,31 × 300) = 2,0 mol (Đúng). b) m = n₁·M = 2,0 × 29 = 58 g (Đúng). c) T₂ = 57 + 273 = 330 K ⇒ p₂ = 2,0×10⁵ × (330/300) = 2,2×10⁵ Pa ≠ 4,22×10⁵ Pa (Sai). d) n\' = 2,0 − 0,5 = 1,5 mol ⇒ p\' = (1,5/2,0) × 2,2×10⁵ = 1,65×10⁵ Pa (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Ý c) cài sẵn phép tính sai 2,0 × (57/27) ≈ 4,22 nhằm thử lỗi quên đổi sang thang Kelvin.'
        }
      },
      {
        id: 'cd_d4_05',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một lượng khí lí tưởng giãn nở đẳng áp từ thể tích 6,0 lít ở 27 °C đến thể tích 9,0 lít. Nhiệt độ của khối khí lúc sau bằng bao nhiêu °C?',
        answer: '177',
        unit: '°C',
        goi_y: 'Tính T₂ theo Kelvin bằng V₁/T₁ = V₂/T₂ rồi mới trừ đi 273 để đổi lại °C.',
        loi_giai: {
          ban_chat: 'Đẳng áp: thể tích tỉ lệ thuận với nhiệt độ tuyệt đối Kelvin.',
          bien_doi: 'T₁ = 27 + 273 = 300 K ⇒ T₂ = T₁ × (V₂ / V₁) = 300 × (9,0 / 6,0) = 450 K ⇒ t₂ = 450 − 273 = 177 °C.',
          dap_an: '177 (°C).',
          bay: 'Quên trừ 273 ở bước cuối (ghi 450) hoặc lấy thẳng 27 × (9/6) = 40,5 °C.'
        }
      },
      {
        id: 'cd_d4_06',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Dùng một ống bơm tay để bơm không khí từ bên ngoài (có áp suất 1 atm) vào một bình cứng dung tích 10 lít ban đầu đang chứa sẵn không khí ở áp suất 1 atm. Mỗi lần bơm đưa được 0,5 lít không khí bên ngoài (ở 1 atm) vào bình. Coi nhiệt độ không đổi. Sau 40 lần bơm, áp suất không khí trong bình bằng bao nhiêu atm?',
        answer: '3',
        unit: 'atm',
        goi_y: 'Bài toán thay đổi số mol: áp dụng bảo toàn số mol đẳng nhiệt (hoặc Boyle cho toàn bộ lượng khí: lượng sẵn có trong bình + 40 lần bơm).',
        loi_giai: {
          ban_chat: 'Khi T không đổi, tổng tích (p·V) trước khi nén vào bình bằng tích (p·V) cuối cùng trong bình: p₀V_bình + N·p₀V_bơm = p·V_bình.',
          bien_doi: '1 × 10 + 40 × (1 × 0,5) = p × 10 ⇒ 10 + 20 = 10p ⇒ p = 3 atm.',
          dap_an: '3 (atm).',
          bay: 'Quên cộng lượng khí ban đầu có sẵn ở 1 atm trong bình (tính 40×0,5/10 = 2 atm — đó là trường hợp bình ban đầu hút chân không!).'
        }
      },

      /* ================= DẠNG 5 (Ch2): XI-LANH PÍT-TÔNG, ỐNG THỦY NGÂN & ĐỒ THỊ (p-V, p-T, V-T) ================= */
      {
        id: 'cd_d5_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Trên đồ thị áp suất theo thể tích (p–V) của một quá trình biến đổi trạng thái từ thể tích V₁ đến V₂, diện tích hình phẳng giới hạn bởi đường quá trình và trục hoành OV cho biết:',
        options: [
          'Nhiệt lượng trao đổi Q của khối khí.',
          'Độ lớn công cơ học |A| mà khối khí đã trao đổi trong quá trình đó.',
          'Độ biến thiên nội năng ΔU của khối khí.',
          'Tỉ số giữa nhiệt độ đầu và nhiệt độ cuối T₂/T₁.'
        ],
        answerIndex: 1,
        goi_y: 'Liên hệ công cơ học vi phân |dA| = p·dV tương ứng với diện tích dải chữ nhật chiều cao p, đáy dV.',
        loi_giai: {
          ban_chat: 'Về mặt hình học, tích phân ∫ p·dV chính là diện tích miền phẳng nằm dưới đường cong p(V) từ V₁ đến V₂.',
          bien_doi: 'Cần phối hợp chiều biến thiên của V để xác định dấu: V tăng (giãn) ⇒ A < 0; V giảm (nén) ⇒ A > 0.',
          dap_an: 'Chọn B.',
          bay: 'Nhầm diện tích hình phẳng dưới đường p(V) là nhiệt lượng Q hoặc công không phân biệt dấu.'
        }
      },
      {
        id: 'cd_d5_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Một ống thủy tinh tiết diện đều, một đầu kín đặt nằm ngang chứa một cột không khí dài l₁ = 15 cm được giam bởi một cột thủy ngân dài h = 16 cm. Biết áp suất khí quyển p₀ = 76 cmHg và nhiệt độ không đổi. Dựng ống thẳng đứng sao cho miệng ống hướng xuống dưới (cột thủy ngân không trào ra). Chiều dài cột không khí lúc này là:',
        options: [
          '12,4 cm',
          '15,0 cm',
          '19,0 cm',
          '21,5 cm'
        ],
        answerIndex: 2,
        goi_y: 'Xác định cân bằng cột thủy ngân: ống ngang p₁ = p₀; miệng xuống p₂ + h = p₀ ⇒ p₂ = p₀ − h.',
        loi_giai: {
          ban_chat: 'Do tiết diện ống S đều nên V tỉ lệ thuận chiều dài cột khí l; quá trình đẳng nhiệt cho p₁l₁ = p₂l₂.',
          bien_doi: 'Trạng thái 1 (nằm ngang): p₁ = 76 cmHg, l₁ = 15 cm. Trạng thái 2 (miệng xuống): p₂ = 76 − 16 = 60 cmHg ⇒ l₂ = (76 × 15) / 60 = 19,0 cm.',
          dap_an: 'Chọn C (19,0 cm).',
          bay: 'Cộng nhầm p₂ = p₀ + h = 92 cmHg (chỉ dùng cho miệng hướng lên).'
        }
      },
      {
        id: 'cd_d5_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một xi-lanh đặt thẳng đứng miệng hướng lên trên, giam một khối khí bằng một pít-tông có khối lượng m = 5,0 kg và tiết diện S = 50 cm² chuyển động không ma sát. Áp suất khí quyển bên ngoài p₀ = 1,0×10⁵ Pa, lấy g = 10 m/s². Áp suất của khối khí trong xi-lanh bằng:',
        options: [
          '1,1×10⁵ Pa',
          '0,9×10⁵ Pa',
          '1,01×10⁵ Pa',
          '1,5×10⁵ Pa'
        ],
        answerIndex: 0,
        goi_y: 'Viết phương trình cân bằng lực lên pít-tông theo phương thẳng đứng: lực đẩy khí lên = lực khí quyển đẩy xuống + trọng lực mg.',
        loi_giai: {
          ban_chat: 'Khi pít-tông cân bằng, tổng lực hướng lên cân bằng tổng lực hướng xuống: p·S = p₀·S + m·g.',
          bien_doi: 'p = p₀ + mg / S = 1,0×10⁵ + (5,0 × 10) / (50×10⁻⁴) = 1,0×10⁵ + 1,0×10⁴ = 1,1×10⁵ Pa.',
          dap_an: 'Chọn A (1,1×10⁵ Pa).',
          bay: 'Đổi sai 50 cm² thành 50×10⁻² m² (ra 1,001×10⁵ Pa) hoặc trừ mg/S.'
        }
      },
      {
        id: 'cd_d5_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một lượng khí lí tưởng biến đổi từ trạng thái 1 (p₁ = 1,0×10⁵ Pa; V₁ = 2,0 lít) sang trạng thái 2 (p₂ = 3,0×10⁵ Pa; V₂ = 6,0 lít) theo một đoạn thẳng nối hai điểm trên đồ thị (p–V).',
        items: [
          { label: 'a', text: 'Độ lớn công của khối khí trong quá trình 1 → 2 bằng 800 J.', answer: true },
          { label: 'b', text: 'Vì áp suất và thể tích đều tăng nên công trong biểu thức ΔU = A + Q có giá trị A = +800 J.', answer: false },
          { label: 'c', text: 'Nhiệt độ tuyệt đối ở trạng thái 2 gấp 9 lần nhiệt độ tuyệt đối ở trạng thái 1.', answer: true },
          { label: 'd', text: 'Nếu biểu diễn trên hệ trục (V–T), đường đẳng áp đi qua trạng thái 2 nằm phía trên đường đẳng áp đi qua trạng thái 1.', answer: false }
        ],
        goi_y: 'Độ lớn công là diện tích hình thang trên (p–V); dấu công chỉ phụ thuộc chiều biến đổi thể tích; độ dốc đường đẳng áp trên (V–T) là nR/p.',
        loi_giai: {
          ban_chat: 'Trên (p–V), đường thẳng cho phép tính chính xác công bằng diện tích hình thang. Trên (V–T), V = (nR/p)T có độ dốc tỉ lệ nghịch p.',
          bien_doi: 'a) |A| = ½(1,0×10⁵ + 3,0×10⁵)×(6,0 − 2,0)×10⁻³ = 800 J (Đúng). b) V₂ > V₁ nên khí giãn nở thực hiện công: A = −800 J (Sai). c) T₂/T₁ = (p₂V₂)/(p₁V₁) = (3×6)/(1×2) = 9 (Đúng). d) Vì p₂ > p₁ nên độ dốc (nR/p₂) < (nR/p₁) ⇒ đường qua 2 nằm DƯỚI đường qua 1 (Sai).',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Sai.',
          bay: 'Thấy p tăng nên tưởng A > 0; hoặc đọc ngược đường đẳng áp trên đồ thị (V–T).'
        }
      },
      {
        id: 'cd_d5_05',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một lượng khí lí tưởng giãn nở từ trạng thái (p₁ = 2,0×10⁵ Pa; V₁ = 3,0 lít) sang trạng thái (p₂ = 4,0×10⁵ Pa; V₂ = 7,0 lít) theo một đoạn thẳng trên hệ trục (p–V). Công A (theo quy ước dấu GDPT 2018, đơn vị kJ) trong quá trình này bằng bao nhiêu? (Ghi rõ dấu âm nếu có).',
        answer: '-1,2',
        unit: 'kJ',
        goi_y: 'Tính diện tích hình thang theo đơn vị J trước rồi đổi ra kJ, cuối cùng gắn dấu dựa trên việc V tăng hay giảm.',
        loi_giai: {
          ban_chat: 'Khí giãn nở từ 3 lít lên 7 lít nên thực hiện công ra ngoài ⇒ A < 0.',
          bien_doi: '|A| = ½(2,0×10⁵ + 4,0×10⁵) × (7,0 − 3,0)×10⁻³ = 3,0×10⁵ × 4,0×10⁻³ = 1200 J = 1,2 kJ ⇒ A = −1,2 kJ.',
          dap_an: '-1,2 (kJ).',
          bay: 'Quên dấu âm hoặc quên chia 2 diện tích hình thang.'
        }
      },
      {
        id: 'cd_d5_06',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một ống thủy tinh tiết diện đều đặt thẳng đứng, miệng ống hướng LÊN TRÊN, cột không khí bên dưới dài l₁ = 18 cm bị giam bởi cột thủy ngân dài h = 19 cm. Biết p₀ = 76 cmHg và nhiệt độ không đổi. Quay ngược ống cho miệng hướng XUỐNG DƯỚI (ống đủ dài để thủy ngân không rơi ra). Chiều dài cột không khí khi ống cân bằng mới là bao nhiêu cm?',
        answer: '30',
        unit: 'cm',
        goi_y: 'Lập p₁ = p₀ + h khi miệng lên và p₂ = p₀ − h khi miệng xuống, sau đó dùng định luật Boyle p₁l₁ = p₂l₂.',
        loi_giai: {
          ban_chat: 'Chiều dài cột khí thay đổi tỉ lệ nghịch với áp suất khí bị giam trong hai tư thế ngược nhau của ống.',
          bien_doi: 'Miệng lên: p₁ = 76 + 19 = 95 cmHg. Miệng xuống: p₂ = 76 − 19 = 57 cmHg. Vậy l₂ = (95 × 18) / 57 = 30 cm.',
          dap_an: '30 (cm).',
          bay: 'Lấy nhầm p₁ = 76 cmHg (tư thế nằm ngang) thay vì p₁ = 76 + 19 cmHg.'
        }
      },

      /* ================= DẠNG 6 (Ch2): MÔ HÌNH ĐỘNG HỌC PHÂN TỬ, E_đ & v_rms ================= */
      {
        id: 'cd_d6_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Biểu thức đúng của áp suất chất khí theo mô hình động học phân tử (với μ là mật độ phân tử khí, m là khối lượng một phân tử, E_đ là động năng tịnh tiến trung bình của phân tử) là:',
        options: [
          'p = (3/2)·μ·E_đ',
          'p = (2/3)·μ·E_đ',
          'p = (1/3)·μ·E_đ',
          'p = μ·E_đ'
        ],
        answerIndex: 1,
        goi_y: 'Từ p = (1/3)·μ·m·v²_tb và E_đ = (1/2)·m·v²_tb hãy thế (m·v²_tb) = 2·E_đ.',
        loi_giai: {
          ban_chat: 'Áp suất khí tỉ lệ với mật độ phân tử và động năng tịnh tiến trung bình do va chạm đàn hồi vào thành bình.',
          bien_doi: 'p = (1/3)·μ·m·v²_tb = (2/3)·μ·[(1/2)m·v²_tb] = (2/3)·μ·E_đ.',
          dap_an: 'Chọn B.',
          bay: 'Nhầm hệ số 2/3 với 3/2 (của E_đ = 3/2·kT) hoặc 1/3 (của 1/3·μmv²_tb).'
        }
      },
      {
        id: 'cd_d6_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Cho hằng số Boltzmann k = 1,38×10⁻²³ J/K. Động năng tịnh tiến trung bình của một phân tử khí lí tưởng ở nhiệt độ 27 °C bằng:',
        options: [
          '6,21×10⁻²¹ J',
          '5,59×10⁻²² J',
          '4,14×10⁻²¹ J',
          '9,32×10⁻²¹ J'
        ],
        answerIndex: 0,
        goi_y: 'Dùng E_đ = (3/2)·k·T và nhớ đổi 27 °C sang Kelvin.',
        loi_giai: {
          ban_chat: 'Động năng tịnh tiến trung bình của mỗi phân tử khí lí tưởng tỉ lệ thuận với nhiệt độ tuyệt đối T.',
          bien_doi: 'T = 27 + 273 = 300 K ⇒ E_đ = 1,5 × 1,38×10⁻²³ × 300 = 6,21×10⁻²¹ J.',
          dap_an: 'Chọn A (6,21×10⁻²¹ J).',
          bay: 'Quên đổi 27 °C sang 300 K (ra 5,59×10⁻²² J) hoặc quên hệ số 3/2 (ra 4,14×10⁻²¹ J).'
        }
      },
      {
        id: 'cd_d6_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Cho hằng số khí R = 8,31 J/(mol·K). Tốc độ căn quân phương (v_rms = √(3RT/M)) của các phân tử khí Heli (M = 4 g/mol) ở nhiệt độ 127 °C xấp xỉ bằng:',
        options: [
          '50 m/s',
          '889 m/s',
          '1367 m/s',
          '1579 m/s'
        ],
        answerIndex: 3,
        goi_y: 'Đổi M từ g/mol sang kg/mol (4×10⁻³ kg/mol) để phù hợp đơn vị SI của R = 8,31 J/(mol·K).',
        loi_giai: {
          ban_chat: 'Ở cùng nhiệt độ, khí có khối lượng mol càng nhỏ thì tốc độ chuyển động nhiệt càng lớn.',
          bien_doi: 'T = 127 + 273 = 400 K; M = 4×10⁻³ kg/mol ⇒ v_rms = √[(3 × 8,31 × 400) / (4×10⁻³)] = √2 493 000 ≈ 1578,9 m/s ≈ 1579 m/s.',
          dap_an: 'Chọn D (1579 m/s).',
          bay: 'Quên đổi M = 4 g/mol thành 4×10⁻³ kg/mol nên bị lệch kết quả 31,6 lần (ra 50 m/s!).'
        }
      },
      {
        id: 'cd_d6_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một bình kín thể tích không đổi chứa khí Nitơ (N₂, M = 28 g/mol, coi là khí lí tưởng) ở nhiệt độ 27 °C và áp suất p = 2,07×10⁵ Pa. Cho hằng số Boltzmann k = 1,38×10⁻²³ J/K.',
        items: [
          { label: 'a', text: 'Mật độ phân tử khí Nitơ trong bình bằng 5,0×10²⁵ phân tử/m³.', answer: true },
          { label: 'b', text: 'Động năng tịnh tiến trung bình của mỗi phân tử khí N₂ bằng 6,21×10⁻²¹ J.', answer: true },
          { label: 'c', text: 'Muốn tốc độ căn quân phương v_rms của phân tử tăng gấp đôi thì chỉ cần đun nóng khối khí đến 54 °C.', answer: false },
          { label: 'd', text: 'Nếu đun nóng đẳng tích bình khí lên 327 °C thì mật độ phân tử μ trong bình tăng gấp đôi.', answer: false }
        ],
        goi_y: 'Dùng p = μkT tìm mật độ phân tử; chú ý mối quan hệ v_rms ∝ √T và định nghĩa μ = N/V.',
        loi_giai: {
          ban_chat: 'Khi bình kín đẳng tích được nung nóng, áp suất tăng do mỗi phân tử va chạm mạnh và nhanh hơn chứ không phải do số phân tử trên 1 m³ tăng.',
          bien_doi: 'a) T = 300 K ⇒ μ = p/(kT) = (2,07×10⁵) / (1,38×10⁻²³ × 300) = 5,0×10²⁵ m⁻³ (Đúng). b) E_đ = 1,5 × 1,38×10⁻²³ × 300 = 6,21×10⁻²¹ J (Đúng). c) v_rms tăng 2 lần ⇒ T₂ = 4T₁ = 1200 K = 927 °C ≠ 54 °C (Sai). d) Bình kín đẳng tích nên N và V đều không đổi ⇒ μ = N/V không đổi (Sai).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Sai.',
          bay: 'Tưởng áp suất tăng gấp đôi khi đun đẳng tích thì mật độ μ cũng phải tăng gấp đôi.'
        }
      },
      {
        id: 'cd_d6_05',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một bình chứa khí lí tưởng ở áp suất p = 1,38×10⁵ Pa có mật độ phân tử khí là μ = 2,5×10²⁵ phân tử/m³. Biết k = 1,38×10⁻²³ J/K. Nhiệt độ tuyệt đối của khối khí trong bình bằng bao nhiêu K?',
        answer: '400',
        unit: 'K',
        goi_y: 'Kết hợp p = (2/3)μE_đ và E_đ = (3/2)kT để rút ra trực tiếp công thức gọn p = μkT.',
        loi_giai: {
          ban_chat: 'Áp suất vĩ mô của khí lí tưởng được quyết định bởi mật độ hạt và nhiệt độ tuyệt đối qua hằng số Boltzmann.',
          bien_doi: 'T = p / (μ·k) = (1,38×10⁵) / (2,5×10²⁵ × 1,38×10⁻²³) = 10⁵ / 250 = 400 K.',
          dap_an: '400 (K).',
          bay: 'Quên triệt tiêu hệ số 2/3 với 3/2 hoặc nhầm số mũ khi chia 10⁵ cho 10².'
        }
      },
      {
        id: 'cd_d6_06',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một lượng khí Oxi ở nhiệt độ 27 °C có tốc độ căn quân phương của các phân tử là v₁. Cần nung nóng đẳng tích lượng khí này lên đến nhiệt độ bao nhiêu °C để tốc độ căn quân phương của phân tử đạt giá trị 1,5·v₁?',
        answer: '402',
        unit: '°C',
        goi_y: 'Vì v_rms tỉ lệ với căn bậc hai của T (v_rms ∝ √T), muốn v_rms tăng 1,5 lần thì T tăng (1,5)² = 2,25 lần. Nhớ đổi lại °C.',
        loi_giai: {
          ban_chat: 'Động năng trung bình và bình phương tốc độ căn quân phương tỉ lệ thuận với nhiệt độ tuyệt đối T.',
          bien_doi: 'T₁ = 27 + 273 = 300 K. Ta có v₂/v₁ = √(T₂/T₁) = 1,5 ⇒ T₂ = 2,25 × 300 = 675 K ⇒ t₂ = 675 − 273 = 402 °C.',
          dap_an: '402 (°C).',
          bay: 'Quên bình phương tỉ số 1,5; hoặc ra 675 K quên trừ 273 để đổi sang °C.'
        }
      }
    ]
  };

  global.LY_CHUYEN_DE_C1_C2 = LY_CHUYEN_DE_C1_C2;
})(window);
