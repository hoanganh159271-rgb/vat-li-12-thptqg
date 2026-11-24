/* Đề Thi Thử Chuẩn 50 Phút — 100% Chương 1 & Chương 2 (28 câu, chuẩn GDPT 2018, 100% Offline) */
(function (global) {
  'use strict';

  var LY_EXAM_C1_C2 = {
    id: 'de_thi_thu_c1_c2_50p',
    title: 'Đề Thi Thử Chương 1 & Chương 2 (50 phút — 28 câu chuẩn THPTQG)',
    durationMin: 50,
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      scoringNote: 'Phần I: 18 câu × 0,25đ = 4,5đ | Phần II: 4 câu (16 ý) = 4,0đ | Phần III: 6 câu × 0,25đ = 1,5đ'
    },
    phan1: [
      /* --- Dạng 1 (3 câu) --- */
      {
        id: 'de_c12_p1_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Quá trình một chất chuyển trực tiếp từ thể rắn sang thể khí (không qua giai đoạn thể lỏng trung gian) được gọi là sự:',
        options: [
          'Ngưng kết',
          'Nóng chảy',
          'Thăng hoa',
          'Hóa hơi'
        ],
        answerIndex: 2,
        goi_y: 'Nhớ cặp quá trình ngược chiều giữa rắn và khí: rắn → khí và khí → rắn.',
        loi_giai: {
          ban_chat: 'Khi các phân tử bề mặt chất rắn nhận đủ năng lượng để thoát trực tiếp ra thành pha hơi mà chưa qua phá vỡ toàn khối thành lỏng, ta có sự thăng hoa.',
          bien_doi: 'Quá trình ngược lại (khí chuyển thẳng thành rắn như băng giá bám kính) gọi là sự ngưng kết.',
          dap_an: 'Chọn C (Thăng hoa).',
          bay: 'Nhầm thăng hoa (rắn → khí) với ngưng kết (khí → rắn) hoặc bay hơi (lỏng → khí).'
        }
      },
      {
        id: 'de_c12_p1_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Thân nhiệt bình thường của một người khỏe mạnh là 37 °C. Theo quy ước chuẩn thi THPTQG (T = t + 273), nhiệt độ này trên thang Kelvin bằng bao nhiêu?',
        options: [
          '236 K',
          '310 K',
          '37 K',
          '300 K'
        ],
        answerIndex: 1,
        goi_y: 'Áp dụng công thức chuyển đổi trực tiếp giữa thang Celsius và thang Kelvin.',
        loi_giai: {
          ban_chat: 'Gốc 0 °C trong thang Celsius ứng với 273 K trong thang nhiệt độ tuyệt đối Kelvin.',
          bien_doi: 'T = t + 273 = 37 + 273 = 310 K.',
          dap_an: 'Chọn B (310 K).',
          bay: 'Trừ nhầm 273 − 37 = 236 K.'
        }
      },
      {
        id: 'de_c12_p1_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một thang đo nhiệt độ tuyến tính kí hiệu là °Y lấy nhiệt độ nước đá đang tan (0 °C) là 20 °Y và nhiệt độ nước đang sôi ở áp suất chuẩn (100 °C) là 180 °Y. Nhiệt độ 50 °C tương ứng với giá trị nào trên thang đo °Y?',
        options: [
          '100 °Y',
          '90 °Y',
          '80 °Y',
          '110 °Y'
        ],
        answerIndex: 0,
        goi_y: '50 °C nằm đúng chính giữa khoảng 0 °C và 100 °C, nên giá trị °Y cũng nằm chính giữa 20 °Y và 180 °Y.',
        loi_giai: {
          ban_chat: 'Sự tương ứng giữa hai thang đo tuyến tính bảo toàn tỉ lệ chia đoạn.',
          bien_doi: 't_Y = 20 + [(180 − 20)/100] × 50 = 20 + 80 = 100 °Y.',
          dap_an: 'Chọn A (100 °Y).',
          bay: 'Lấy thẳng 180 / 2 = 90 °Y mà quên mốc 0 °C bắt đầu từ 20 °Y.'
        }
      },
      /* --- Dạng 2 (3 câu) --- */
      {
        id: 'de_c12_p1_04',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Nội năng của một vật có thể thay đổi bằng hai cách cơ bản nào sau đây?',
        options: [
          'Dẫn nhiệt và đối lưu.',
          'Thay đổi thể tích và thay đổi khối lượng.',
          'Bức xạ nhiệt và khuếch tán.',
          'Thực hiện công và truyền nhiệt.'
        ],
        answerIndex: 3,
        goi_y: 'Nhớ hai số hạng xuất hiện trong biểu thức Định luật I nhiệt động lực học ΔU = A + Q.',
        loi_giai: {
          ban_chat: 'Quá trình thực hiện công làm thay đổi nội năng qua cơ năng tác dụng, còn truyền nhiệt làm thay đổi nội năng nhờ chênh lệch nhiệt độ.',
          bien_doi: 'Dẫn nhiệt, đối lưu và bức xạ nhiệt chỉ là ba hình thức cụ thể của truyền nhiệt.',
          dap_an: 'Chọn D.',
          bay: 'Chọn nhầm các hình thức truyền nhiệt (dẫn nhiệt, đối lưu) thay cho hai phương thức tổng quát.'
        }
      },
      {
        id: 'de_c12_p1_05',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Một khối khí truyền ra môi trường xung quanh nhiệt lượng 250 J đồng thời tự giãn nở thực hiện công 150 J. Độ biến thiên nội năng ΔU của khối khí bằng:',
        options: [
          '−400 J',
          '−100 J',
          '+100 J',
          '+400 J'
        ],
        answerIndex: 0,
        goi_y: 'Kiểm tra cẩn thận dấu của từng số hạng A và Q trong ΔU = A + Q.',
        loi_giai: {
          ban_chat: 'Khí truyền nhiệt ra ngoài nên Q < 0; khí giãn nở thực hiện công nên A < 0.',
          bien_doi: 'Q = −250 J; A = −150 J ⇒ ΔU = (−150) + (−250) = −400 J.',
          dap_an: 'Chọn A (−400 J).',
          bay: 'Thay một trong hai số hạng mang dấu dương dẫn tới đáp số sai −100 J hoặc +100 J.'
        }
      },
      {
        id: 'de_c12_p1_06',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một đầu búa máy khối lượng M = 400 kg rơi từ độ cao h = 5,0 m xuống đập vào đầu một chiếc cọc sắt (lấy g = 10 m/s²). Giả sử 40% cơ năng của đầu búa trước khi rơi chuyển hóa thành độ tăng nội năng của cọc. Nội năng của cọc tăng thêm bao nhiêu?',
        options: [
          '20 kJ',
          '12 kJ',
          '8 kJ',
          '4 kJ'
        ],
        answerIndex: 2,
        goi_y: 'Tính thế năng trọng trường W_t = M·g·h của đầu búa rồi nhân với hiệu suất chuyển hóa 40%.',
        loi_giai: {
          ban_chat: 'Đây là sự thay đổi nội năng bằng cách thực hiện công cơ học do va chạm.',
          bien_doi: 'Cơ năng của đầu búa: W = M·g·h = 400 × 10 × 5,0 = 20 000 J. Độ tăng nội năng cọc: ΔU = 0,40 × 20 000 = 8000 J = 8 kJ.',
          dap_an: 'Chọn C (8 kJ).',
          bay: 'Nhân với 60% (phần thất thoát) ra 12 kJ hoặc quên nhân 40%.'
        }
      },
      /* --- Dạng 3 (3 câu) --- */
      {
        id: 'de_c12_p1_07',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Trong hệ đơn vị đo lường quốc tế SI, nhiệt dung riêng c của một chất có đơn vị là:',
        options: [
          'J/kg',
          'J/(kg·K)',
          'J/K',
          'W/(kg·K)'
        ],
        answerIndex: 1,
        goi_y: 'Rút c = Q / (m·ΔT) rồi thay đơn vị SI tương ứng của Q, m và ΔT.',
        loi_giai: {
          ban_chat: 'Nhiệt dung riêng cho biết nhiệt lượng cần truyền để 1 kg chất tăng thêm 1 K (hoặc 1 °C).',
          bien_doi: 'c = Q / (m·ΔT) ⇒ đơn vị là J/(kg·K).',
          dap_an: 'Chọn B.',
          bay: 'Nhầm với đơn vị nhiệt ẩn λ hoặc L là J/kg, hoặc đơn vị nhiệt dung C là J/K.'
        }
      },
      {
        id: 'de_c12_p1_08',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Nhiệt lượng cần thiết để làm nóng một khối nhôm nặng 2,0 kg (có nhiệt dung riêng c = 880 J/(kg·K)) từ nhiệt độ 25 °C lên đến 75 °C bằng:',
        options: [
          '44 kJ',
          '132 kJ',
          '176 kJ',
          '88 kJ'
        ],
        answerIndex: 3,
        goi_y: 'Dùng Q = m·c·(t₂ − t₁). Kiểm tra hiệu nhiệt độ xem có cần cộng 273 hay không.',
        loi_giai: {
          ban_chat: 'Vật tăng nhiệt độ trong cùng một thể rắn nên dùng trực tiếp công thức thu nhiệt.',
          bien_doi: 'ΔT = 75 − 25 = 50 K ⇒ Q = 2,0 × 880 × 50 = 88 000 J = 88 kJ.',
          dap_an: 'Chọn D (88 kJ).',
          bay: 'Tính nhầm một nửa (44 kJ) hoặc gấp đôi (176 kJ).'
        }
      },
      {
        id: 'de_c12_p1_09',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Trộn lẫn 0,5 kg nước ở nhiệt độ 80 °C với 1,5 kg nước ở nhiệt độ 20 °C trong một bình cách nhiệt (bỏ qua sự trao đổi nhiệt với bình và môi trường). Nhiệt độ của nước khi xảy ra cân bằng nhiệt là:',
        options: [
          '50 °C',
          '35 °C',
          '40 °C',
          '65 °C'
        ],
        answerIndex: 1,
        goi_y: 'Viết phương trình cân bằng nhiệt Q_tỏa = Q_thu và rút gọn thừa số c của nước ở hai vế.',
        loi_giai: {
          ban_chat: 'Khi hai lượng cùng chất ở cùng thể lỏng trộn vào nhau, tổng nhiệt tỏa ra bằng tổng nhiệt thu vào.',
          bien_doi: '0,5·c·(80 − t) = 1,5·c·(t − 20) ⇒ 80 − t = 3(t − 20) ⇒ 4t = 140 ⇒ t = 35 °C.',
          dap_an: 'Chọn B (35 °C).',
          bay: 'Lấy trung bình cộng (80 + 20)/2 = 50 °C bất chấp khối lượng hai phần không bằng nhau.'
        }
      },
      /* --- Dạng 4 (3 câu) --- */
      {
        id: 'de_c12_p1_10',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Theo định luật Charles, trong quá trình đẳng áp của một lượng khí lí tưởng xác định, thể tích V của khối khí:',
        options: [
          'Tỉ lệ nghịch với nhiệt độ tuyệt đối T.',
          'Tỉ lệ thuận với nhiệt độ t theo thang Celsius.',
          'Tỉ lệ thuận với nhiệt độ tuyệt đối T (Kelvin).',
          'Không phụ thuộc vào nhiệt độ của khối khí.'
        ],
        answerIndex: 2,
        goi_y: 'Phân biệt định luật Boyle (đẳng nhiệt) và định luật Charles (đẳng áp) với thang đo nhiệt độ bắt buộc.',
        loi_giai: {
          ban_chat: 'Hệ thức Charles: V / T = const với T là nhiệt độ tuyệt đối tính theo Kelvin.',
          bien_doi: 'Thể tích chỉ tỉ lệ thuận với T (Kelvin), không tỉ lệ thuận trực tiếp với t (°C) vì đường đẳng áp trên (V–t) không đi qua gốc (0 °C; 0 lít).',
          dap_an: 'Chọn C.',
          bay: 'Nhầm sang "tỉ lệ thuận với nhiệt độ Celsius".'
        }
      },
      {
        id: 'de_c12_p1_11',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Một lượng khí lí tưởng xác định ở trạng thái 1 có p₁ = 2,0 atm; V₁ = 6,0 lít; T₁ = 300 K. Biến đổi sang trạng thái 2 có V₂ = 4,0 lít và T₂ = 400 K thì áp suất p₂ bằng:',
        options: [
          '4,0 atm',
          '2,25 atm',
          '1,0 atm',
          '3,0 atm'
        ],
        answerIndex: 0,
        goi_y: 'Viết phương trình trạng thái p₁V₁/T₁ = p₂V₂/T₂; cả 3 thông số đều giữ nguyên đơn vị tương xứng ở hai vế.',
        loi_giai: {
          ban_chat: 'Khi khối lượng khí không đổi, tỉ số (pV)/T là bất biến qua mọi trạng thái cân bằng.',
          bien_doi: 'p₂ = p₁ × (V₁ / V₂) × (T₂ / T₁) = 2,0 × (6,0 / 4,0) × (400 / 300) = 2,0 × 1,5 × (4/3) = 4,0 atm.',
          dap_an: 'Chọn A (4,0 atm).',
          bay: 'Thay ngược tỉ số T₁/T₂ ra 2,25 atm.'
        }
      },
      {
        id: 'de_c12_p1_12',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Tính khối lượng riêng ρ của khí Oxi (M = 32 g/mol, coi là khí lí tưởng) ở áp suất p = 1,662×10⁵ Pa và nhiệt độ 127 °C. Lấy R = 8,31 J/(mol·K).',
        options: [
          '0,8 kg/m³',
          '1,2 kg/m³',
          '1,6 kg/m³',
          '3,2 kg/m³'
        ],
        answerIndex: 2,
        goi_y: 'Từ Clapeyron pV = (m/M)RT suy ra hệ thức ρ = m/V = (p·M)/(R·T). Chú ý đơn vị của M là kg/mol.',
        loi_giai: {
          ban_chat: 'Phương trình Clapeyron cho phép liên hệ trực tiếp khối lượng riêng khí lí tưởng với áp suất và nhiệt độ.',
          bien_doi: 'M = 32×10⁻³ kg/mol; T = 127 + 273 = 400 K ⇒ ρ = (1,662×10⁵ × 32×10⁻³) / (8,31 × 400) = 5318,4 / 3324 = 1,6 kg/m³.',
          dap_an: 'Chọn C (1,6 kg/m³).',
          bay: 'Quên đổi M = 32 g/mol sang 0,032 kg/mol.'
        }
      },
      /* --- Dạng 5 (3 câu) --- */
      {
        id: 'de_c12_p1_13',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Trên hệ trục tọa độ (p–V), đường đẳng nhiệt của một lượng khí lí tưởng xác định có dạng là:',
        options: [
          'Đường thẳng kéo dài đi qua gốc tọa độ.',
          'Đường thẳng song song với trục hoành OV.',
          'Đường thẳng song song với trục tung Op.',
          'Một nhánh của đường hypebol.'
        ],
        answerIndex: 3,
        goi_y: 'Viết hàm p theo V khi tích p·V = const.',
        loi_giai: {
          ban_chat: 'Theo định luật Boyle, p = const / V là hàm bậc nhất nghịch đảo.',
          bien_doi: 'Vì p > 0 và V > 0 nên đồ thị chỉ lấy một nhánh hypebol ở góc phần tư thứ nhất.',
          dap_an: 'Chọn D.',
          bay: 'Nhầm dạng đường thẳng trên (p–T) hoặc (V–T) sang (p–V).'
        }
      },
      {
        id: 'de_c12_p1_14',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Trên hệ trục tọa độ (p–V) của cùng một lượng khí lí tưởng, xét hai đường đẳng nhiệt ứng với các nhiệt độ T₁ và T₂ sao cho đường T₂ nằm phía trên (xa gốc tọa độ hơn) đường T₁. So sánh đúng giữa hai nhiệt độ là:',
        options: [
          'T₂ > T₁',
          'T₂ < T₁',
          'T₂ = T₁',
          'Chỉ so sánh được nếu biết loại khí'
        ],
        answerIndex: 0,
        goi_y: 'Kẻ một đường thẳng đứng V = V₀ cắt hai đường đẳng nhiệt rồi so sánh p₂ và p₁ bằng pV = nRT.',
        loi_giai: {
          ban_chat: 'Ở cùng một thể tích V₀, đường nằm phía trên có áp suất lớn hơn nên nhiệt độ cao hơn.',
          bien_doi: 'Tại V = V₀: p₂ > p₁ ⇒ nRT₂/V₀ > nRT₁/V₀ ⇒ T₂ > T₁.',
          dap_an: 'Chọn A (T₂ > T₁).',
          bay: 'Nhầm quy luật đọc (p–V) với quy luật đọc ngược của đường đẳng tích trên (p–T).'
        }
      },
      {
        id: 'de_c12_p1_15',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một xi-lanh kín đặt thẳng đứng có miệng hướng XUỐNG DƯỚI, giữ một lượng khí ở bên trên bởi pít-tông khối lượng m = 4,0 kg, tiết diện S = 40 cm² không ma sát. Áp suất khí quyển bên ngoài p₀ = 1,0×10⁵ Pa, lấy g = 10 m/s². Áp suất khối khí bên trong xi-lanh bằng:',
        options: [
          '1,1×10⁵ Pa',
          '0,9×10⁵ Pa',
          '1,0×10⁵ Pa',
          '0,8×10⁵ Pa'
        ],
        answerIndex: 1,
        goi_y: 'Chú ý miệng hướng XUỐNG DƯỚI: trọng lực mg kéo pít-tông xuống cùng chiều với áp lực của khí bên trong, cân bằng với lực đẩy lên của khí quyển p₀·S.',
        loi_giai: {
          ban_chat: 'Khi cân bằng pít-tông ở tư thế lộn ngược: p·S + m·g = p₀·S.',
          bien_doi: 'p = p₀ − mg / S = 1,0×10⁵ − (4,0 × 10) / (40×10⁻⁴) = 1,0×10⁵ − 1,0×10⁴ = 0,9×10⁵ Pa.',
          dap_an: 'Chọn B (0,9×10⁵ Pa).',
          bay: 'Quên đổi chiều dấu lực khi xi-lanh úp ngược nên cộng thành 1,1×10⁵ Pa.'
        }
      },
      /* --- Dạng 6 (3 câu) --- */
      {
        id: 'de_c12_p1_16',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        prompt: 'Phát biểu nào sau đây đúng với giả thiết của mô hình khí lí tưởng?',
        options: [
          'Lực hút giữa các phân tử luôn rất lớn làm chúng gắn thành mạng.',
          'Thể tích riêng của bản thân các phân tử chiếm phần lớn thể tích bình.',
          'Các phân tử được coi là chất điểm và chỉ tương tác với nhau khi va chạm.',
          'Giữa hai lần va chạm, phân tử chuyển động chậm dần đều.'
        ],
        answerIndex: 2,
        goi_y: 'Rà lại 3 giả định cốt lõi của mô hình chất khí lí tưởng: kích thước, tương tác giữa hai va chạm, bản chất va chạm.',
        loi_giai: {
          ban_chat: 'Mô hình khí lí tưởng bỏ qua kích thước phân tử (chất điểm) và thế năng tương tác phân tử ngoài lúc va chạm.',
          bien_doi: 'Giữa hai va chạm phân tử chuyển động thẳng đều; va chạm với nhau và với thành bình là va chạm hoàn toàn đàn hồi.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm sang khí thực (có xét lực tương tác tầm xa và kích thước riêng của phân tử ở áp suất cực cao).'
        }
      },
      {
        id: 'de_c12_p1_17',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Hiểu',
        prompt: 'Khi nhiệt độ tuyệt đối T của một khối khí lí tưởng tăng lên gấp 3 lần thì động năng tịnh tiến trung bình của mỗi phân tử khí sẽ:',
        options: [
          'Tăng lên gấp 3 lần.',
          'Tăng lên gấp 9 lần.',
          'Tăng lên √3 lần.',
          'Không đổi vì không phụ thuộc nhiệt độ.'
        ],
        answerIndex: 0,
        goi_y: 'Phân biệt giữa E_đ = (3/2)kT và v_rms = √(3kT/m).',
        loi_giai: {
          ban_chat: 'Động năng tịnh tiến trung bình tỉ lệ bậc nhất với nhiệt độ tuyệt đối T.',
          bien_doi: 'E_đ = (3/2)kT ⇒ T tăng 3 lần thì E_đ tăng 3 lần (còn v_rms mới tăng √3 lần).',
          dap_an: 'Chọn A.',
          bay: 'Nhầm tỉ lệ bậc nhất của động năng E_đ sang căn bậc hai √3 (của tốc độ) hoặc bình phương 9 lần.'
        }
      },
      {
        id: 'de_c12_p1_18',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Vận dụng',
        prompt: 'Một lượng khí lí tưởng có khối lượng riêng ρ = 1,2 kg/m³ gây ra áp suất p = 1,0×10⁵ Pa lên thành bình chứa. Tốc độ căn quân phương v_rms của các phân tử khí này bằng:',
        options: [
          '250 m/s',
          '500 m/s',
          '289 m/s',
          '408 m/s'
        ],
        answerIndex: 1,
        goi_y: 'Biến đổi p = (1/3)·μ·m·v²_tb bằng cách thay tích (μ·m) chính là khối lượng riêng ρ = (N·m)/V.',
        loi_giai: {
          ban_chat: 'Từ công thức động học p = (1/3)ρ·v_rms² có thể suy thẳng tốc độ căn quân phương mà không cần biết nhiệt độ hay khối lượng mol.',
          bien_doi: 'v_rms = √(3p / ρ) = √(3 × 1,0×10⁵ / 1,2) = √250 000 = 500 m/s.',
          dap_an: 'Chọn B (500 m/s).',
          bay: 'Quên hệ số 3 (ra √(p/ρ) ≈ 289 m/s) hoặc quên lấy căn bậc hai.'
        }
      }
    ],

    phan2: [
      /* --- Câu 1 Phần II (Ch1 - Dạng 2) --- */
      {
        id: 'de_c12_p2_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một lượng khí lí tưởng đựng trong xi-lanh có pít-tông chuyển động không ma sát nhận nhiệt lượng Q = 1500 J và giãn nở đẳng áp ở áp suất không đổi p = 2,0×10⁵ Pa từ thể tích V₁ = 5,0 lít lên đến V₂ = 8,0 lít.',
        items: [
          { label: 'a', text: 'Vì khí giãn nở đẩy pít-tông thực hiện công nên trong biểu thức ΔU = A + Q, giá trị của công là A = −600 J.', answer: true },
          { label: 'b', text: 'Độ biến thiên nội năng của khối khí sau quá trình giãn nở này bằng ΔU = +2100 J.', answer: false },
          { label: 'c', text: 'Nhiệt độ tuyệt đối của khối khí ở trạng thái cuối gấp 1,6 lần ở trạng thái đầu.', answer: true },
          { label: 'd', text: 'Nếu sau đó khóa chặt pít-tông cố định rồi làm khí tỏa ra đúng 900 J nhiệt lượng thì nội năng khí quay về đúng giá trị ban đầu.', answer: true }
        ],
        goi_y: 'Tính công từ A = −p(V₂ − V₁) bằng đơn vị chuẩn SI rồi tính ΔU = A + Q. Kiểm tra đẳng áp V₂/V₁ = T₂/T₁.',
        loi_giai: {
          ban_chat: 'Giãn nở đẳng áp vừa làm thay đổi thể tích sinh công âm vừa làm nhiệt độ và nội năng tăng lên.',
          bien_doi: 'a) ΔV = (8 − 5)×10⁻³ = 3×10⁻³ m³ ⇒ A = −2,0×10⁵ × 3×10⁻³ = −600 J (Đúng). b) ΔU = −600 + 1500 = +900 J ≠ +2100 J (Sai). c) Đẳng áp ⇒ T₂/T₁ = 8/5 = 1,6 (Đúng). d) Giữ cố định pít-tông thì A\' = 0, Q\' = −900 J ⇒ ΔU\' = −900 J vừa triệt tiêu phần tăng +900 J (Đúng).',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Đúng.',
          bay: 'Thay nhầm A = +600 J ở ý b) dẫn đến kết quả +2100 J.'
        }
      },
      /* --- Câu 2 Phần II (Ch1 - Dạng 3) --- */
      {
        id: 'de_c12_p2_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Trong một nhiệt lượng kế bằng nhôm khối lượng m_nh = 0,2 kg (nhiệt dung riêng c_nh = 880 J/(kg·K)) đang chứa m_n = 0,5 kg nước ở nhiệt độ 40 °C. Người ta thả nhẹ vào bình một cục nước đá khối lượng m_đá = 0,15 kg ở 0 °C. Cho c_nước = 4200 J/(kg·K) và λ = 3,34×10⁵ J/kg. Bỏ qua mất mát nhiệt ra môi trường.',
        items: [
          { label: 'a', text: 'Nhiệt lượng cần thiết để làm 0,15 kg nước đá nóng chảy hoàn toàn ở 0 °C bằng 50,1 kJ.', answer: true },
          { label: 'b', text: 'Nhiệt lượng tối đa mà bình nhôm và nước có thể tỏa ra khi hạ xuống 0 °C là 84,0 kJ.', answer: false },
          { label: 'c', text: 'Khi hệ đạt trạng thái cân bằng nhiệt, toàn bộ lượng nước đá đã tan hết hoàn toàn.', answer: true },
          { label: 'd', text: 'Nhiệt độ cân bằng nhiệt cuối cùng của hệ xấp xỉ bằng 14,1 °C.', answer: true }
        ],
        goi_y: 'Đừng quên nhiệt lượng tỏa ra bởi CẢ bình nhôm 0,2 kg khi hạ từ 40 °C xuống nhiệt độ cân bằng!',
        loi_giai: {
          ban_chat: 'Nhiệt lượng kế tham gia trao đổi nhiệt cùng với nước đựng trong đó.',
          bien_doi: 'a) Q_nc = 0,15 × 3,34×10⁵ = 50 100 J = 50,1 kJ (Đúng). b) Q_tỏa_max = (0,2×880 + 0,5×4200)×40 = (176 + 2100)×40 = 91 040 J = 91,04 kJ ≠ 84,0 kJ (Sai). c) Vì 91,04 kJ > 50,1 kJ ⇒ đá tan hết (Đúng). d) 50 100 + 0,15×4200×t = 2276×(40 − t) ⇒ 2906t = 40 940 ⇒ t ≈ 14,09 °C ≈ 14,1 °C (Đúng).',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Đúng.',
          bay: 'Bỏ sót nhiệt lượng do vỏ nhiệt lượng kế bằng nhôm tỏa ra.'
        }
      },
      /* --- Câu 3 Phần II (Ch2 - Dạng 5) --- */
      {
        id: 'de_c12_p2_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một xi-lanh đặt thẳng đứng có miệng hướng lên trên, tiết diện lòng xi-lanh S = 100 cm². Bên trong xi-lanh giam giữ một lượng khí lí tưởng ở 27 °C dưới một pít-tông khối lượng m = 10 kg chuyển động không ma sát, nằm cách đáy xi-lanh h₁ = 30 cm. Áp suất khí quyển p₀ = 1,0×10⁵ Pa, lấy g = 10 m/s².',
        items: [
          { label: 'a', text: 'Áp suất ban đầu của khối khí trong xi-lanh là p₁ = 1,1×10⁵ Pa.', answer: true },
          { label: 'b', text: 'Khi đun nóng chậm khối khí lên đến 127 °C, pít-tông dịch chuyển lên trên thêm một đoạn 10 cm.', answer: true },
          { label: 'c', text: 'Độ lớn công mà khối khí đã thực hiện để nâng pít-tông trong quá trình đun nóng trên bằng 100 J.', answer: false },
          { label: 'd', text: 'Nếu giữ khối khí ở 27 °C rồi đặt nhẹ thêm một quả cân nặng 55 kg lên mặt pít-tông thì ở trạng thái cân bằng mới pít-tông cách đáy 20 cm.', answer: true }
        ],
        goi_y: 'Khi pít-tông tự do, quá trình đun nóng diễn ra ĐẲNG ÁP ở áp suất p₁ (không phải p₀). Công |A| = p₁·S·Δh.',
        loi_giai: {
          ban_chat: 'Áp suất khí bên trong luôn phải gánh cả áp suất khí quyển p₀ và áp suất do trọng lượng pít-tông (cùng quả cân nếu có) gây ra.',
          bien_doi: 'a) p₁ = 10⁵ + (10×10)/(100×10⁻⁴) = 1,1×10⁵ Pa (Đúng). b) Đẳng áp: T₁ = 300 K, T₂ = 400 K ⇒ h₂ = 30×(400/300) = 40 cm ⇒ nâng thêm 10 cm (Đúng). c) |A| = p₁·S·Δh = 1,1×10⁵ × 10⁻² × 0,10 = 110 J ≠ 100 J (Sai). d) Đặt thêm 55 kg ⇒ tổng 65 kg ⇒ p₃ = 10⁵ + 650/10⁻² = 1,65×10⁵ Pa; đẳng nhiệt ⇒ h₃ = 30×(1,1/1,65) = 20 cm (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Tính công nâng pít-tông lại nhân nhầm với p₀ = 1,0×10⁵ Pa (ra 100 J) thay vì p₁ = 1,1×10⁵ Pa.'
        }
      },
      /* --- Câu 4 Phần II (Ch2 - Dạng 6) --- */
      {
        id: 'de_c12_p2_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'II',
        muc_do: 'Vận dụng',
        stem: 'Một bình kín thể tích V = 8,31 lít chứa n = 0,5 mol khí Heli (coi là khí lí tưởng đơn nguyên tử, M = 4 g/mol) ở nhiệt độ 127 °C. Biết R = 8,31 J/(mol·K), k = 1,38×10⁻²³ J/K, N_A = 6,02×10²³ mol⁻¹.',
        items: [
          { label: 'a', text: 'Áp suất của khí Heli bên trong bình bằng 2,0×10⁵ Pa.', answer: true },
          { label: 'b', text: 'Động năng tịnh tiến trung bình của mỗi phân tử Heli trong bình bằng 8,28×10⁻²¹ J.', answer: true },
          { label: 'c', text: 'Tổng động năng chuyển động tịnh tiến của tất cả các phân tử khí trong bình là 2493 J.', answer: true },
          { label: 'd', text: 'Nếu thay 0,5 mol khí Heli bằng 0,5 mol khí Oxi (M = 32 g/mol) vào đúng bình trên ở cùng 127 °C thì áp suất khí tăng lên 8 lần.', answer: false }
        ],
        goi_y: 'Lưu ý tổng động năng tịnh tiến = N·E_đ = (3/2)·n·R·T; và áp suất p = nRT/V không phụ thuộc vào khối lượng mol M.',
        loi_giai: {
          ban_chat: 'Ở cùng thể tích V, nhiệt độ T và số mol n, mọi khí lí tưởng đều gây ra cùng một áp suất như nhau.',
          bien_doi: 'a) T = 400 K, V = 8,31×10⁻³ m³ ⇒ p = (0,5×8,31×400)/(8,31×10⁻³) = 2,0×10⁵ Pa (Đúng). b) E_đ = 1,5 × 1,38×10⁻²³ × 400 = 8,28×10⁻²¹ J (Đúng). c) E_tổng = 1,5·n·R·T = 1,5 × 0,5 × 8,31 × 400 = 2493 J (Đúng). d) Cùng n, V, T nên áp suất vẫn bằng 2,0×10⁵ Pa (Sai).',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Tưởng phân tử O₂ nặng hơn He 8 lần nên áp suất tăng 8 lần (thực ra tốc độ O₂ nhỏ hơn √8 lần nên tổng xung lượng va chạm mỗi giây vẫn bằng He!).'
        }
      }
    ],

    phan3: [
      /* --- Phần III: 6 câu (3 Ch1 + 3 Ch2), mỗi đáp án tối đa 4 ký tự --- */
      {
        id: 'de_c12_p3_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một nhiệt kế thủy ngân chia vạch tuyến tính có điểm đóng băng 0 °C ứng với cột thủy ngân dài 5,0 cm và điểm sôi chuẩn 100 °C ứng với chiều dài 25,0 cm. Khi chiều dài cột thủy ngân là 12,0 cm thì nhiệt độ đo được bằng bao nhiêu °C?',
        answer: '35',
        unit: '°C',
        goi_y: 'Áp dụng công thức chia tuyến tính t = 100 · (l − l₀) / (l₁₀₀ − l₀).',
        loi_giai: {
          ban_chat: 'Độ tăng chiều dài cột thủy ngân tỉ lệ thuận với độ tăng nhiệt độ.',
          bien_doi: 't = 100 × (12,0 − 5,0) / (25,0 − 5,0) = 100 × 7 / 20 = 35 °C.',
          dap_an: '35 (°C).',
          bay: 'Quên trừ điểm gốc 5,0 cm (ra 12/25 = 48 °C).'
        }
      },
      {
        id: 'de_c12_p3_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một khối khí lí tưởng thực hiện công 420 J đồng thời truyền ra môi trường xung quanh nhiệt lượng 180 J. Độ biến thiên nội năng ΔU của khối khí bằng bao nhiêu J? (Ghi rõ dấu âm nếu có).',
        answer: '-600',
        unit: 'J',
        goi_y: 'Cả "thực hiện công" lẫn "truyền nhiệt ra ngoài" đều làm nội năng của khí giảm.',
        loi_giai: {
          ban_chat: 'Theo quy ước GDPT 2018: A = −420 J và Q = −180 J.',
          bien_doi: 'ΔU = A + Q = (−420) + (−180) = −600 J.',
          dap_an: '-600 (J).',
          bay: 'Quên ghi dấu âm "-" trên phiếu tô trắc nghiệm trả lời ngắn.'
        }
      },
      {
        id: 'de_c12_p3_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một ấm điện đun nước có công suất tiêu thụ 1500 W và hiệu suất truyền nhiệt đạt 80%. Biết nhiệt dung riêng của nước là 4200 J/(kg·K). Cần đun trong thời gian bao nhiêu giây (s) để làm nóng 1,0 kg nước từ 20 °C lên tới 100 °C?',
        answer: '280',
        unit: 's',
        goi_y: 'Nhiệt lượng có ích Q_ích = H·P·t = m·c·ΔT.',
        loi_giai: {
          ban_chat: 'Chỉ có 80% điện năng tiêu thụ được chuyển thành nhiệt năng làm nóng nước.',
          bien_doi: 'Q_ích = 1,0 × 4200 × (100 − 20) = 336 000 J. Công suất có ích P_ích = 0,80 × 1500 = 1200 W ⇒ t = 336 000 / 1200 = 280 s.',
          dap_an: '280 (s).',
          bay: 'Quên nhân hiệu suất 0,8 (ra 224 s) hoặc chia nhầm cho 0,8 ở vế sai (ra 179,2 s).'
        }
      },
      {
        id: 'de_c12_p3_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        prompt: 'Một lượng khí lí tưởng xác định có trạng thái ban đầu (p₁ = 1,5 atm; V₁ = 12 lít; t₁ = 27 °C) được nén và nung nóng đến trạng thái mới có thể tích V₂ = 6,0 lít và nhiệt độ t₂ = 127 °C. Áp suất của lượng khí lúc sau bằng bao nhiêu atm?',
        answer: '4',
        unit: 'atm',
        goi_y: 'Đổi cả 27 °C và 127 °C sang Kelvin rồi mới thay vào phương trình trạng thái p₁V₁/T₁ = p₂V₂/T₂.',
        loi_giai: {
          ban_chat: 'Lượng khí xác định biến đổi cả ba thông số p, V, T.',
          bien_doi: 'T₁ = 300 K; T₂ = 400 K ⇒ p₂ = 1,5 × (12 / 6,0) × (400 / 300) = 3,0 × (4/3) = 4 atm.',
          dap_an: '4 (atm).',
          bay: 'Lấy thẳng 127/27 thay vì 400/300.'
        }
      },
      {
        id: 'de_c12_p3_05',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một khối khí lí tưởng thực hiện chu trình khép kín có dạng hình chữ nhật trên đồ thị (p–V) (trục hoành V, trục tung p) theo chiều thuận chiều kim đồng hồ, giới hạn bởi hai đường đẳng áp p₁ = 1,0×10⁵ Pa, p₂ = 3,5×10⁵ Pa và hai đường đẳng tích V₁ = 2,0 lít, V₂ = 6,0 lít. Tổng công A (theo quy ước dấu GDPT 2018, đơn vị kJ) mà khối khí nhận được trong một chu trình bằng bao nhiêu?',
        answer: '-1',
        unit: 'kJ',
        goi_y: 'Độ lớn công cả chu trình bằng diện tích hình chữ nhật trên (p–V). Chu trình thuận chiều kim đồng hồ có nhánh giãn ở áp suất cao nên tổng công là âm.',
        loi_giai: {
          ban_chat: 'Khi chu trình chạy thuận chiều kim đồng hồ trên mặt phẳng (OpV), công giãn ở p₂ lớn hơn về độ lớn so với công nén ở p₁ ⇒ khí thực hiện công dương ra ngoài tức A < 0.',
          bien_doi: '|A| = (3,5×10⁵ − 1,0×10⁵) × (6,0 − 2,0)×10⁻³ = 2,5×10⁵ × 4,0×10⁻³ = 1000 J = 1 kJ ⇒ A = −1 kJ.',
          dap_an: '-1 (kJ).',
          bay: 'Tính đúng 1 kJ nhưng quên xét chiều chu trình nên thiếu dấu âm "-".'
        }
      },
      {
        id: 'de_c12_p3_06',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Vận dụng',
        prompt: 'Một bình kín chứa khí lí tưởng ở áp suất p = 2,0×10⁵ Pa, khi đó tốc độ căn quân phương của các phân tử khí đạt v_rms = 500 m/s. Khối lượng riêng ρ của khối khí trong bình bằng bao nhiêu kg/m³? (Dùng dấu phẩy "," nếu là số thập phân).',
        answer: '2,4',
        unit: 'kg/m³',
        goi_y: 'Rút ρ từ công thức động học p = (1/3)·ρ·v_rms².',
        loi_giai: {
          ban_chat: 'Áp suất khí tỉ lệ thuận với khối lượng riêng và bình phương tốc độ căn quân phương.',
          bien_doi: 'ρ = 3p / v_rms² = (3 × 2,0×10⁵) / 500² = 600 000 / 250 000 = 2,4 kg/m³.',
          dap_an: '2,4 (kg/m³).',
          bay: 'Quên hệ số 3 ở tử số (ra 0,8 kg/m³).'
        }
      }
    ]
  };

  global.LY_EXAM_C1_C2 = LY_EXAM_C1_C2;
})(window);
