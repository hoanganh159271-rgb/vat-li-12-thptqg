/* Kho Bài tập 100% Nguồn Thật (SGK Kết nối tri thức, Chân trời sáng tạo, Đề Bộ GD&ĐT 2025, Đề Sở GD 2025) — Chương 1 & 2 */
(function (global) {
  'use strict';

  var LY_NGUON_THUC_TE_C1_C2 = {
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      totalQuestions: 28,
      updatedAt: '2026-11-24',
      note: 'Toàn bộ 28 câu hỏi trích từ SGK/SBT Vật lí 12 (KNTT, CTST) và Đề tham khảo / Chính thức / Sở GD 2025.'
    },
    sources: [
      { id: 'bo_gd', name: 'Đề Bộ GD&ĐT 2025 (Tham khảo & Chính thức)' },
      { id: 'sgk_kntt', name: 'SGK Vật lí 12 Kết nối tri thức với cuộc sống' },
      { id: 'sgk_ctst_so', name: 'SGK Chân trời sáng tạo & Đề Sở GD 2025' }
    ],
    questions: [
      /* ================= PHẦN I: 13 CÂU TRẮC NGHIỆM NGUỒN THẬT ================= */
      {
        id: 'src_bo25_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề tham khảo THPT 2025, Bộ GD&ĐT — Phần I, Câu 1',
        prompt: 'Quá trình một chất chuyển từ thể lỏng sang thể khí được gọi là quá trình:',
        options: [
          'nóng chảy.',
          'hóa hơi.',
          'hóa lỏng.',
          'đông đặc.'
        ],
        answerIndex: 1,
        goi_y: 'Phân biệt tên gọi các quá trình chuyển thể xuôi và ngược giữa 3 thể: rắn, lỏng, khí.',
        loi_giai: {
          ban_chat: 'Khi các phân tử ở thể lỏng thắng được lực liên kết để tách ra chuyển sang pha khí/hơi, quá trình này gọi là sự hóa hơi (gồm bay hơi trên mặt thoáng và sôi trong toàn khối).',
          bien_doi: 'Lỏng → Khí: hóa hơi. Rắn → Lỏng: nóng chảy. Khí → Lỏng: ngưng tụ (hóa lỏng). Lỏng → Rắn: đông đặc.',
          dap_an: 'Chọn B (hóa hơi).',
          bay: 'Nhầm hóa hơi (lỏng → khí) với hóa lỏng/ngưng tụ (khí → lỏng).'
        }
      },
      {
        id: 'src_bo25_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề tham khảo THPT 2025, Bộ GD&ĐT — Phần I, Câu 5',
        prompt: 'Một vật đang được làm lạnh sao cho thể tích của vật không thay đổi. Nội năng của vật:',
        options: [
          'tăng lên.',
          'giảm đi.',
          'không thay đổi.',
          'tăng lên rồi giảm đi.'
        ],
        answerIndex: 1,
        goi_y: 'Thể tích không đổi ⇒ A = 0. Vật được làm lạnh ⇒ nhiệt độ giảm (tỏa nhiệt Q < 0).',
        loi_giai: {
          ban_chat: 'Vì thể tích không đổi nên hệ không trao đổi công (A = 0) và thế năng tương tác hầu như giữ nguyên; khi làm lạnh nhiệt độ giảm làm động năng chuyển động nhiệt trung bình của các phân tử giảm.',
          bien_doi: 'Theo Định luật I NĐLH: A = 0, vật truyền nhiệt ra ngoài nên Q < 0 ⇒ ΔU = Q < 0 ⇒ nội năng giảm đi.',
          dap_an: 'Chọn B (giảm đi).',
          bay: 'Bỏ sót điều kiện "thể tích không đổi" nên lưỡng lự về thế năng phân tử.'
        }
      },
      {
        id: 'src_bo25_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề tham khảo THPT 2025, Bộ GD&ĐT — Phần I, Câu 6',
        prompt: 'Một khối khí lí tưởng xác định có áp suất bằng áp suất khí quyển. Nếu giữ nhiệt độ của khối khí đó không đổi và làm cho áp suất của nó bằng một nửa áp suất khí quyển thì thể tích của khối khí:',
        options: [
          'bằng một nửa giá trị ban đầu.',
          'bằng hai lần giá trị ban đầu.',
          'bằng giá trị ban đầu.',
          'bằng bốn lần giá trị ban đầu.'
        ],
        answerIndex: 1,
        goi_y: 'Nhiệt độ không đổi, lượng khí xác định ⇒ áp dụng định luật Boyle p₁V₁ = p₂V₂.',
        loi_giai: {
          ban_chat: 'Trong quá trình đẳng nhiệt của một lượng khí lí tưởng xác định, áp suất tỉ lệ nghịch với thể tích.',
          bien_doi: 'p₂ = p₁/2 ⇒ V₂ = (p₁ / p₂)·V₁ = 2·V₁.',
          dap_an: 'Chọn B (bằng hai lần giá trị ban đầu).',
          bay: 'Nhầm tỉ lệ nghịch thành tỉ lệ thuận rồi chọn "một nửa".'
        }
      },
      {
        id: 'src_ct25_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT — Mã đề 0201',
        prompt: 'Trong hệ đơn vị SI, đơn vị của nhiệt dung riêng là:',
        options: [
          'J/K',
          'J/(kg·K)',
          'J/°C',
          'J/kg'
        ],
        answerIndex: 1,
        goi_y: 'Từ Q = m·c·ΔT rút c = Q / (m·ΔT) và thay đơn vị chuẩn SI của từng đại lượng.',
        loi_giai: {
          ban_chat: 'Nhiệt dung riêng cho biết nhiệt lượng cần thiết truyền cho 1 kg chất để nhiệt độ tăng thêm 1 K.',
          bien_doi: 'Q đo bằng J, m đo bằng kg, T đo bằng K (đơn vị nhiệt độ cơ bản trong hệ SI) ⇒ c có đơn vị J/(kg·K).',
          dap_an: 'Chọn B (J/(kg·K)).',
          bay: 'Nhầm với J/kg (nhiệt ẩn λ, L) hoặc J/K (nhiệt dung C).'
        }
      },
      {
        id: 'src_ct25_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT — Mã đề 0201',
        prompt: 'Gọi Q là nhiệt lượng cần thiết để làm một lượng chất có khối lượng m chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy. Công thức xác định nhiệt nóng chảy riêng của chất này là:',
        options: [
          'Q / m',
          '2Q / m',
          'Q / (2m)',
          'm / Q'
        ],
        answerIndex: 0,
        goi_y: 'Nhớ hệ thức Q = λ·m tại đúng nhiệt độ nóng chảy.',
        loi_giai: {
          ban_chat: 'Nhiệt nóng chảy riêng λ có trị số bằng nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 1 kg chất rắn kết tinh ở nhiệt độ nóng chảy.',
          bien_doi: 'Từ Q = λ·m suy ra λ = Q / m.',
          dap_an: 'Chọn A (Q / m).',
          bay: 'Lấy ngược thành m / Q.'
        }
      },
      {
        id: 'src_ct25_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT — Mã đề 0201',
        prompt: 'Trong quá trình đẳng nhiệt của một khối khí lí tưởng xác định:',
        options: [
          'áp suất của khối khí không đổi.',
          'áp suất của khối khí tăng khi thể tích của khối khí giảm.',
          'áp suất của khối khí tăng khi thể tích của khối khí tăng.',
          'thể tích của khối khí không đổi.'
        ],
        answerIndex: 1,
        goi_y: 'Đẳng nhiệt: T = const ⇒ tích p·V không đổi.',
        loi_giai: {
          ban_chat: 'Ở nhiệt độ không đổi, khi nén khí cho thể tích V giảm thì mật độ phân tử μ = N/V tăng lên, số va chạm lên một đơn vị diện tích thành bình trong 1 s tăng ⇒ áp suất p tăng.',
          bien_doi: 'p = const / V ⇒ V giảm thì p tăng.',
          dap_an: 'Chọn B.',
          bay: 'Nhầm đẳng nhiệt (T = const) với đẳng áp (p = const) hoặc đẳng tích (V = const).'
        }
      },
      {
        id: 'src_ct25_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT — Mã đề 0201',
        prompt: 'Trong quá trình đẳng áp của một khối khí lí tưởng xác định:',
        options: [
          'nhiệt độ của khối khí không đổi.',
          'thể tích của khối khí giảm khi nhiệt độ của khối khí giảm.',
          'thể tích của khối khí không đổi.',
          'thể tích của khối khí tăng khi nhiệt độ của khối khí giảm.'
        ],
        answerIndex: 1,
        goi_y: 'Theo định luật Charles: V / T = const ⇒ V và T biến thiên cùng chiều.',
        loi_giai: {
          ban_chat: 'Khi giữ áp suất không đổi và hạ nhiệt độ, tốc độ phân tử giảm nên để duy trì áp suất không đổi thì thể tích khối khí phải co lại (giảm mật độ/giữ cân bằng áp lực ngoài).',
          bien_doi: 'V / T = const ⇒ khi nhiệt độ T giảm thì thể tích V giảm theo.',
          dap_an: 'Chọn B.',
          bay: 'Chọn nhầm đáp án ngược chiều biến thiên.'
        }
      },
      {
        id: 'src_kntt_b7_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 7, Bài tập 1 trang 32',
        prompt: 'Quy ước dấu nào sau đây phù hợp với định luật I của nhiệt động lực học (ΔU = A + Q)?',
        options: [
          'Vật nhận công: A < 0; vật nhận nhiệt lượng: Q < 0.',
          'Vật nhận công: A > 0; vật nhận nhiệt lượng: Q > 0.',
          'Vật thực hiện công: A > 0; vật truyền nhiệt lượng: Q > 0.',
          'Vật thực hiện công: A > 0; vật truyền nhiệt lượng: Q < 0.'
        ],
        answerIndex: 1,
        goi_y: 'Quy ước lấy vật/hệ làm trung tâm: cái gì truyền vào làm tăng năng lượng hệ thì dương (+).',
        loi_giai: {
          ban_chat: 'Trong chương trình GDPT 2018, công thức ΔU = A + Q quy ước mọi phần năng lượng hệ NHẬN VÀO đều mang dấu dương.',
          bien_doi: 'Nhận công ⇒ A > 0; Thực hiện công ⇒ A < 0. Nhận nhiệt ⇒ Q > 0; Truyền nhiệt ⇒ Q < 0.',
          dap_an: 'Chọn B.',
          bay: 'Lẫn sang quy ước A > 0 khi hệ sinh công của một số sách giáo trình cũ hoặc nước ngoài.'
        }
      },
      {
        id: 'src_kntt_b7_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 7, Bài tập 2 trang 32',
        prompt: 'Một lượng nước và một lượng rượu có thể tích bằng nhau được cung cấp các nhiệt lượng tương ứng là Q₁ và Q₂. Biết khối lượng riêng của nước là ρ₁ = 1000 kg/m³ và của rượu là ρ₂ = 800 kg/m³, nhiệt dung riêng của nước là c₁ = 4200 J/(kg·K) và của rượu là c₂ = 2500 J/(kg·K). Để độ tăng nhiệt độ của nước và rượu bằng nhau (ΔT₁ = ΔT₂) thì:',
        options: [
          'Q₁ = Q₂',
          'Q₁ = 1,25 Q₂',
          'Q₁ = 1,68 Q₂',
          'Q₁ = 2,10 Q₂'
        ],
        answerIndex: 3,
        goi_y: 'Hai chất có cùng THỂ TÍCH V (chứ không phải cùng khối lượng m!). Dùng m = ρ·V thế vào Q = m·c·ΔT.',
        loi_giai: {
          ban_chat: 'Do khối lượng riêng của nước và rượu khác nhau nên cùng một thể tích V sẽ cho khối lượng khác nhau.',
          bien_doi: 'Q₁/Q₂ = (ρ₁·V·c₁·ΔT) / (ρ₂·V·c₂·ΔT) = (1000 × 4200) / (800 × 2500) = 4 200 000 / 2 000 000 = 2,10 ⇒ Q₁ = 2,10 Q₂.',
          dap_an: 'Chọn D (Q₁ = 2,10 Q₂).',
          bay: 'Quên nhân tỉ số khối lượng riêng 1000/800 mà chỉ chia c₁/c₂ = 4200/2500 = 1,68 (đáp án nhiễu C).'
        }
      },
      {
        id: 'src_kntt_b9_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 9, Bài tập 1 trang 40',
        prompt: 'Một lượng khí có thể tích 100 cm³ ở áp suất 10⁵ Pa. Nếu nén khí để thể tích của nó giảm còn 20 cm³ và nhiệt độ được giữ không đổi thì áp suất của khối khí lúc này bằng bao nhiêu?',
        options: [
          '2×10⁴ Pa',
          '5×10⁵ Pa',
          '2×10⁵ Pa',
          '5×10⁴ Pa'
        ],
        answerIndex: 1,
        goi_y: 'Quá trình đẳng nhiệt p₁V₁ = p₂V₂; hai vế cùng đơn vị cm³ nên không cần đổi cũng triệt tiêu được.',
        loi_giai: {
          ban_chat: 'Khi nén đẳng nhiệt, thể tích giảm bao nhiêu lần thì áp suất tăng bấy nhiêu lần.',
          bien_doi: 'p₂ = p₁·(V₁ / V₂) = 10⁵ × (100 / 20) = 5×10⁵ Pa.',
          dap_an: 'Chọn B (5×10⁵ Pa).',
          bay: 'Nhân ngược V₂/V₁ ra 2×10⁴ Pa.'
        }
      },
      {
        id: 'src_kntt_b9_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'I',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 9, Bài tập 2 trang 40',
        prompt: 'Một bọt khí ở đáy hồ nước sâu 5 m có thể tích là 1,2 cm³. Khi bọt khí nổi lên tới mặt nước thì thể tích của nó xấp xỉ bằng bao nhiêu? Coi nhiệt độ của bọt khí không đổi, áp suất khí quyển p₀ = 1,01×10⁵ Pa, khối lượng riêng của nước ρ = 10³ kg/m³, lấy g = 9,8 m/s².',
        options: [
          '0,81 cm³',
          '1,20 cm³',
          '1,78 cm³',
          '2,40 cm³'
        ],
        answerIndex: 2,
        goi_y: 'Áp suất tại đáy hồ sâu h gồm cả áp suất khí quyển lẫn áp suất thủy tĩnh cột nước: p₁ = p₀ + ρ·g·h.',
        loi_giai: {
          ban_chat: 'Khi nổi lên mặt thoáng, áp suất bên ngoài giảm nên bọt khí giãn nở đẳng nhiệt theo định luật Boyle p₁V₁ = p₂V₂.',
          bien_doi: 'p₁ = 1,01×10⁵ + 10³ × 9,8 × 5 = 1,50×10⁵ Pa; p₂ = p₀ = 1,01×10⁵ Pa ⇒ V₂ = 1,2 × (1,50 / 1,01) ≈ 1,78 cm³.',
          dap_an: 'Chọn C (1,78 cm³).',
          bay: 'Quên cộng p₀ ở đáy hồ; hoặc đổi sai đơn vị áp suất thủy tĩnh ρgh.'
        }
      },
      {
        id: 'src_kntt_b10_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 10, Bài tập 1 trang 43',
        prompt: 'Một lượng khí hiđrô ở nhiệt độ 27 °C có thể tích 4 m³. Tính thể tích của lượng khí đó ở nhiệt độ 127 °C nếu áp suất được giữ không đổi.',
        options: [
          '18,8 m³',
          '3,00 m³',
          '5,33 m³',
          '6,25 m³'
        ],
        answerIndex: 2,
        goi_y: 'Đổi 27 °C và 127 °C sang thang Kelvin trước khi áp dụng V₁/T₁ = V₂/T₂.',
        loi_giai: {
          ban_chat: 'Quá trình đẳng áp nên thể tích tỉ lệ thuận với nhiệt độ tuyệt đối T(K).',
          bien_doi: 'T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K ⇒ V₂ = 4 × (400 / 300) = 16/3 ≈ 5,33 m³.',
          dap_an: 'Chọn C (5,33 m³).',
          bay: 'Lấy thẳng 4 × (127/27) = 18,8 m³ do quên đổi sang Kelvin.'
        }
      },
      {
        id: 'src_kntt_b12_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 12, trang 49',
        prompt: 'Cho hằng số Boltzmann k = 1,38×10⁻²³ J/K. Động năng tịnh tiến trung bình của phân tử khí lí tưởng ở nhiệt độ phòng 27 °C bằng:',
        options: [
          '6,21×10⁻²¹ J',
          '5,59×10⁻²² J',
          '4,14×10⁻²¹ J',
          '8,28×10⁻²¹ J'
        ],
        answerIndex: 0,
        goi_y: 'Áp dụng trực tiếp E_đ = (3/2)·k·T với T = 27 + 273 K.',
        loi_giai: {
          ban_chat: 'Động năng tịnh tiến trung bình của mỗi phân tử khí lí tưởng chỉ phụ thuộc vào nhiệt độ tuyệt đối T.',
          bien_doi: 'T = 300 K ⇒ E_đ = (3/2) × 1,38×10⁻²³ × 300 = 6,21×10⁻²¹ J.',
          dap_an: 'Chọn A (6,21×10⁻²¹ J).',
          bay: 'Thay nhầm t = 27 °C (ra 5,59×10⁻²² J) hoặc quên nhân hệ số 3/2 (ra 4,14×10⁻²¹ J).'
        }
      },

      /* ================= PHẦN II: 4 CÂU ĐÚNG/SAI NGUỒN THẬT ================= */
      {
        id: 'src_kntt_b4_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 4, Thực hành đo nhiệt dung riêng của nước',
        stem: 'Trong thí nghiệm thực hành đo nhiệt dung riêng của nước (SGK KNTT), học sinh đun m = 0,15 kg nước đựng trong bình nhiệt lượng kế bằng nhựa có vỏ xốp. Ghi nhận số liệu từ thời điểm τ₁ = 60 s (nhiệt độ t₁ = 25,2 °C) đến thời điểm τ₂ = 420 s (nhiệt độ t₂ = 33,8 °C), giá trị công suất trung bình trên oát kế qua 7 lần đọc là P̄ = 15,54 W.',
        items: [
          { label: 'a', text: 'Công thức xác định nhiệt dung riêng từ bộ số liệu đo là c = P̄·(τ₂ − τ₁) / [m·(t₂ − t₁)].', answer: true },
          { label: 'b', text: 'Từ khoảng thời gian đo τ₁ = 60 s đến τ₂ = 420 s nói trên, giá trị nhiệt dung riêng đo được xấp xỉ 4337 J/(kg·K).', answer: true },
          { label: 'c', text: 'Giá trị đo được lớn hơn giá trị chuẩn (~4180 J/(kg·K)) là do nước trong bình đã tự tỏa thêm nhiệt năng cho dây điện trở.', answer: false },
          { label: 'd', text: 'Trong khi đun cần khuấy nhẹ nước đều đặn để nhiệt độ phân bố đồng đều tại đầu cảm biến nhiệt kế.', answer: true }
        ],
        goi_y: 'Thay Δτ = 420 − 60 = 360 s và Δt = 33,8 − 25,2 = 8,6 °C vào công thức c = Q / (m·Δt). Khi có hao phí Q_điện > Q_nước nên c_đo > c_thực.',
        loi_giai: {
          ban_chat: 'Thực tế một phần nhiệt lượng từ dây nung truyền ra vỏ bình, que khuấy, nhiệt kế và không khí nên nhiệt năng điện cung cấp P̄Δτ lớn hơn phần nhiệt lượng thực sự làm nóng 0,15 kg nước.',
          bien_doi: 'a) Đúng theo định nghĩa công thức thực hành. b) c = (15,54 × 360) / (0,15 × 8,6) = 5594,4 / 1,29 = 4336,74 ≈ 4337 J/(kg·K) (Đúng). c) Vì có hao phí truyền nhiệt ra ngoài nên cùng 1 độ tăng Δt cần nhiều điện năng P̄Δτ hơn, dẫn đến tử số tăng làm c_đo > c_chuẩn chứ không phải nước tỏa nhiệt cho điện trở (Sai). d) Thao tác khuấy nhẹ tránh sai số phân tầng nhiệt (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Hiểu ngược nguyên nhân sai số thực nghiệm khiến kết quả c_đo cao hơn giá trị lí thuyết.'
        }
      },
      {
        id: 'src_kntt_b7_04_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 7, Bài tập 4 trang 32',
        stem: 'Một ấm điện có công suất tỏa nhiệt P = 1000 W dùng để đun 300 g nước có nhiệt độ ban đầu là 20 °C đến khi sôi ở 100 °C dưới áp suất tiêu chuẩn, sau đó để nước trong ấm sôi thêm 2 phút. Cho c = 4200 J/(kg·K) và nhiệt hóa hơi riêng của nước L = 2,26×10⁶ J/kg.',
        items: [
          { label: 'a', text: 'Nhiệt lượng cần thiết để làm nóng 300 g nước từ 20 °C lên 100 °C là 100,8 kJ.', answer: true },
          { label: 'b', text: 'Nếu coi toàn bộ nhiệt lượng ấm tỏa ra đều truyền cho nước thì thời gian cần thiết để đun nước đến khi sôi là 100,8 s.', answer: true },
          { label: 'c', text: 'Thời gian 100,8 s tính được ở trên là giá trị chính xác tuyệt đối khi đo bằng thực nghiệm với mọi ấm đun.', answer: false },
          { label: 'd', text: 'Bỏ qua hao phí, nếu để nước sôi thêm 2 phút thì khối lượng nước còn lại trong ấm xấp xỉ 247 g.', answer: true }
        ],
        goi_y: 'Đổi 300 g = 0,3 kg; 2 phút = 120 s. Trong thực tế vỏ ấm và môi trường luôn thu một phần nhiệt nên kết quả tính lí thuyết chỉ là gần đúng.',
        loi_giai: {
          ban_chat: 'Giai đoạn 1 tăng nhiệt độ nước (Q = mcΔT); giai đoạn 2 hóa hơi ở 100 °C (Q\' = Lm_bay_hơi).',
          bien_doi: 'a) Q₁ = 0,3 × 4200 × (100 − 20) = 100 800 J = 100,8 kJ (Đúng). b) t₁ = Q₁ / P = 100 800 / 1000 = 100,8 s (Đúng). c) Thực tế có hao phí nhiệt ra vỏ ấm và không khí nên kết quả chỉ gần đúng (Sai). d) Q₂ = 1000 × 120 = 120 000 J ⇒ m_bay = 120 000 / 2,26×10⁶ ≈ 0,0531 kg = 53,1 g ⇒ m_còn = 300 − 53,1 = 246,9 ≈ 247 g (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Ý d) hỏi lượng nước CÒN LẠI (247 g), học sinh hay chọn nhầm lượng đã bay hơi (53,1 g).'
        }
      },
      {
        id: 'src_kntt_b9_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 9, Thực hành kiểm chứng Định luật Boyle',
        stem: 'Trong thí nghiệm khảo sát định luật Boyle (SGK KNTT) với một lượng không khí giữ trong xi-lanh kín ở nhiệt độ phòng không đổi, học sinh thu được 5 cặp giá trị thể tích V (cm³) và áp suất p (10⁵ Pa) lần lượt là: (22,0; 1,04), (20,0; 1,14), (18,0; 1,29), (16,0; 1,43), (14,0; 1,64).',
        items: [
          { label: 'a', text: 'Khi dịch chuyển pít-tông để thay đổi thể tích khí cần thao tác thật từ từ để nhiệt độ khí kịp cân bằng với môi trường ngoài.', answer: true },
          { label: 'b', text: 'Tích số p·V qua cả 5 lần đo đều xấp xỉ hằng số quanh giá trị 22,9×10⁵ Pa·cm³ (tức khoảng 2,29 J).', answer: true },
          { label: 'c', text: 'Nếu biểu diễn các điểm đo lên hệ trục tọa độ p theo (1/V), các điểm nằm gần một đường thẳng kéo dài đi qua gốc tọa độ.', answer: true },
          { label: 'd', text: 'Nếu ấn pít-tông nén khí xuống thật nhanh, nhiệt độ khối khí giữ nguyên không đổi và tích p·V không thay đổi.', answer: false }
        ],
        goi_y: 'Nhân từng cặp p·V và kiểm tra mối quan hệ p = const·(1/V) là hàm bậc nhất qua gốc tọa độ.',
        loi_giai: {
          ban_chat: 'Nén nhanh làm công cơ học chuyển hóa thành nội năng tăng nhiệt độ khí (quá trình gần đoạn nhiệt), vi phạm điều kiện đẳng nhiệt T = const của định luật Boyle.',
          bien_doi: 'a) Đúng quy trình thí nghiệm SGK. b) Các tích p·V lần lượt là 22,88; 22,80; 23,22; 22,88; 22,96 (×10⁵ Pa·cm³ = ×0,1 J) ⇒ trung bình ~22,95×10⁵ Pa·cm³ ≈ 2,29–2,30 J (Đúng). c) Vì p·V = const nên p tỉ lệ thuận với (1/V), đồ thị qua gốc (0; 0) (Đúng). d) Nén nhanh làm tăng nhiệt độ T ⇒ vi phạm đẳng nhiệt (Sai).',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Quên điều kiện "nén/giãn từ từ" là điều kiện tiên quyết để quá trình giữ được đẳng nhiệt.'
        }
      },
      {
        id: 'src_bo25_phoi_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề tham khảo THPT 2025, Bộ GD&ĐT — Bài toán thực tế Phổi người',
        stem: 'Phổi của một người trưởng thành có thể tích khoảng 5,7 lít. Không khí trong phổi có áp suất bằng áp suất khí quyển là 101 kPa và nhiệt độ là 37 °C. Giả sử số phân tử khí oxygen (O₂) chiếm 21% số phân tử không khí có trong phổi. Lấy R = 8,31 J/(mol·K), N_A = 6,02×10²³ mol⁻¹, T(K) = t(°C) + 273.',
        items: [
          { label: 'a', text: 'Nhiệt độ tuyệt đối của không khí trong phổi bằng 310 K.', answer: true },
          { label: 'b', text: 'Tổng số phân tử không khí có trong phổi ở trạng thái trên xấp xỉ 1,35×10²³ phân tử.', answer: true },
          { label: 'c', text: 'Số phân tử khí oxygen có trong phổi là x·10²² với x ≈ 2,8 (làm tròn đến hàng phần mười).', answer: true },
          { label: 'd', text: 'Khi người đó hít sâu (coi áp suất và nhiệt độ không đổi), trong phổi có 1,4×10²³ phân tử không khí thì dung tích phổi khi đó xấp xỉ 5,9 lít.', answer: true }
        ],
        goi_y: 'Đổi 101 kPa = 101 000 Pa và 5,7 lít = 5,7×10⁻³ m³ vào Clapeyron pV = (N/N_A)RT để tìm N.',
        loi_giai: {
          ban_chat: 'Khi áp suất p và nhiệt độ T không đổi, phương trình Clapeyron pV = N·k·T cho thấy thể tích V tỉ lệ thuận trực tiếp với tổng số phân tử N.',
          bien_doi: 'a) T = 37 + 273 = 310 K (Đúng). b) N = (pV / RT)·N_A = (101 000 × 5,7×10⁻³ / (8,31 × 310)) × 6,02×10²³ ≈ 1,3455×10²³ ≈ 1,35×10²³ phân tử (Đúng). c) N_O2 = 0,21 × 1,3455×10²³ ≈ 2,83×10²² ⇒ x ≈ 2,8 (Đúng). d) V\' = V · (N\'/N) = 5,7 × (1,4 / 1,3455) ≈ 5,93 ≈ 5,9 lít (Đúng).',
          dap_an: 'Cả 4 ý a, b, c, d đều Đúng.',
          bay: 'Làm tròn quá sớm ở ý b thành 1,35 rồi lấy 1,4/1,35 vẫn ra 5,91 lít, cần giữ số chính xác khi tính tiếp.'
        }
      },

      /* ================= PHẦN III: 11 CÂU TRẢ LỜI NGẮN NGUỒN THẬT (<= 4 KÝ TỰ) ================= */
      {
        id: 'src_kntt_b2_02',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 2, Câu 2 trang 14',
        prompt: 'Một vật khối lượng 1 kg trượt không vận tốc ban đầu từ đỉnh xuống chân một mặt phẳng dài 21 m, nghiêng 30° so với mặt nằm ngang. Tốc độ của vật ở chân mặt phẳng là 4,1 m/s. Lấy g = 9,8 m/s² và bỏ qua sự trao đổi nhiệt với mặt phẳng nghiêng. Độ biến thiên nội năng của vật bằng bao nhiêu J? (Làm tròn đến một chữ số thập phân).',
        answer: '94,5',
        unit: 'J',
        goi_y: 'Phần cơ năng bị tiêu hao do ma sát |A_ms| = mgh − ½mv² chuyển hóa thành độ tăng nội năng.',
        loi_giai: {
          ban_chat: 'Không có sự truyền nhiệt với mặt phẳng nghiêng (Q = 0), toàn bộ độ lớn công cản của ma sát chuyển trực tiếp thành nội năng của vật.',
          bien_doi: 'h = 21·sin(30°) = 10,5 m. Cơ năng đầu W₁ = mgh = 1 × 9,8 × 10,5 = 102,9 J; cơ năng cuối W₂ = ½·1·4,1² = 8,405 J ⇒ ΔU = |A_ms| = 102,9 − 8,405 = 94,495 ≈ 94,5 J.',
          dap_an: '94,5 (J).',
          bay: 'Dùng nhầm g = 10 m/s² dù đề SGK cho rõ g = 9,8 m/s².'
        }
      },
      {
        id: 'src_kntt_b7_05',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 7, Bài tập 5 trang 32',
        prompt: 'Dùng bếp điện để đun một ấm nhôm khối lượng 600 g đựng 1,5 lít nước ở nhiệt độ 20 °C. Sau 35 phút đã có 20% lượng nước trong ấm hóa hơi ở nhiệt độ sôi 100 °C. Biết chỉ có 75% nhiệt lượng mà bếp tỏa ra được dùng vào việc đun ấm nước; c_nhôm = 880 J/(kg·K), c_nước = 4200 J/(kg·K), L = 2,26×10⁶ J/kg, khối lượng riêng nước 1 kg/lít. Nhiệt lượng trung bình mà bếp tỏa ra trong mỗi giây bằng bao nhiêu J/s (tức Watt, làm tròn đến hàng đơn vị)?',
        answer: '777',
        unit: 'W',
        goi_y: 'Tổng Q_thu gồm 3 phần: Q_ấm_nhôm + Q_nước_tăng_nhiệt + Q_20%_nước_hóa_hơi. Sau đó chia cho hiệu suất 0,75 và thời gian 2100 s.',
        loi_giai: {
          ban_chat: 'Cả vỏ ấm nhôm và nước cùng tăng nhiệt độ lên 100 °C, sau đó 20% lượng nước thu thêm nhiệt hóa hơi ở 100 °C.',
          bien_doi: 'Q_ích = 0,6×880×80 + 1,5×4200×80 + (0,2×1,5)×2,26×10⁶ = 42 240 + 504 000 + 678 000 = 1 224 240 J. Q_tỏa = 1 224 240 / 0,75 = 1 632 320 J. t = 35×60 = 2100 s ⇒ P_bếp = 1 632 320 / 2100 = 777,295 ≈ 777 W.',
          dap_an: '777 (W).',
          bay: 'Quên tính nhiệt lượng làm nóng ấm nhôm 600 g hoặc quên chia hiệu suất 75%.'
        }
      },
      {
        id: 'src_bo25_suoi',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'bo_gd',
        nguon: 'Đề tham khảo THPT 2025, Bộ GD&ĐT — Bài toán Máy sưởi nước nóng',
        prompt: 'Một máy sưởi dùng nước nóng có lưu lượng nước chảy qua là 575 kg/h. Biết nhiệt độ của nước giảm đi Δt = 4,0 °C khi đi qua máy, nhiệt dung riêng của nước là c = 4180 J/(kg·K). Nhiệt lượng tỏa ra từ nước trong mỗi giờ bằng bao nhiêu megajun (MJ)? (Làm tròn đến một chữ số thập phân).',
        answer: '9,6',
        unit: 'MJ',
        goi_y: '1 MJ = 10⁶ J. Trong 1 giờ khối lượng nước đi qua máy là 575 kg.',
        loi_giai: {
          ban_chat: 'Nước hạ nhiệt độ nhường phần nhiệt lượng Q = m·c·ΔT cho không khí qua bộ trao đổi nhiệt.',
          bien_doi: 'Q = 575 × 4180 × 4,0 = 9 614 000 J = 9,614 MJ ≈ 9,6 MJ.',
          dap_an: '9,6 (MJ).',
          bay: 'Quên đổi J sang MJ (10⁶ J) hoặc bấm nhầm c = 4200.'
        }
      },
      {
        id: 'src_ctst_nlk',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_ctst_so',
        nguon: 'SGK/SBT Vật lí 12 Chân trời sáng tạo — Bài toán Nhiệt lượng kế đồng',
        prompt: 'Thả một quả cầu bằng đồng có khối lượng 200 g được nung nóng đến 100 °C vào một nhiệt lượng kế bằng đồng có khối lượng 50 g chứa 400 g nước ở nhiệt độ 20 °C. Biết nhiệt dung riêng của đồng là 380 J/(kg·K), của nước là 4200 J/(kg·K). Bỏ qua trao đổi nhiệt với môi trường ngoài. Nhiệt độ cân bằng nhiệt của hệ bằng bao nhiêu °C? (Làm tròn đến một chữ số thập phân).',
        answer: '23,4',
        unit: '°C',
        goi_y: 'Lập phương trình Q_tỏa(quả cầu) = Q_thu(nhiệt lượng kế đồng + nước). Nhớ tính cả vỏ nhiệt lượng kế đồng 50 g.',
        loi_giai: {
          ban_chat: 'Khi bỏ qua thất thoát ra ngoài, nhiệt lượng quả cầu đồng tỏa ra cân bằng với tổng nhiệt lượng thu vào của cốc đồng và nước.',
          bien_doi: '0,2×380×(100 − t) = (0,05×380 + 0,4×4200)×(t − 20) ⇒ 76(100 − t) = 1699(t − 20) ⇒ 1775t = 41 580 ⇒ t = 23,425 ≈ 23,4 °C.',
          dap_an: '23,4 (°C).',
          bay: 'Bỏ quên 50 g nhiệt lượng kế bằng đồng đang cùng chứa nước ở 20 °C.'
        }
      },
      {
        id: 'src_kntt_b10_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 10, Bài tập 2 trang 43',
        prompt: 'Khi đun nóng đẳng áp một khối khí lí tưởng từ nhiệt độ 20 °C lên đến 80 °C, thể tích khí tăng thêm 0,6 lít. Thể tích ban đầu của khối khí bằng bao nhiêu lít? (Làm tròn đến hai chữ số thập phân).',
        answer: '2,93',
        unit: 'lít',
        goi_y: 'Thay V₂ = V₁ + 0,6 vào định luật Charles V₁/T₁ = V₂/T₂ với T₁ = 293 K, T₂ = 353 K.',
        loi_giai: {
          ban_chat: 'Độ tăng thể tích ΔV trong quá trình đẳng áp tỉ lệ thuận với độ tăng nhiệt độ ΔT: ΔV/V₁ = ΔT/T₁.',
          bien_doi: 'T₁ = 20 + 273 = 293 K; ΔT = 80 − 20 = 60 K ⇒ V₁ = ΔV·(T₁ / ΔT) = 0,6 × (293 / 60) = 2,93 lít.',
          dap_an: '2,93 (lít).',
          bay: 'Thay T₁ = 20 °C thay vì 293 K (ra 0,2 lít — vô lí!).'
        }
      },
      {
        id: 'src_so25_dp',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'sgk_ctst_so',
        nguon: 'Đề thi thử THPT 2025 Sở GD&ĐT — Chuyên đề Khí lí tưởng',
        prompt: 'Khi tăng nhiệt độ của một lượng khí lí tưởng xác định từ 32 °C lên 117 °C và giữ áp suất không đổi thì thể tích khí tăng thêm 1,7 lít. Thể tích ban đầu của lượng khí này bằng bao nhiêu lít?',
        answer: '6,1',
        unit: 'lít',
        goi_y: 'Đổi 32 °C → 305 K và 117 °C → 390 K rồi dùng ΔV / V₁ = (T₂ − T₁) / T₁.',
        loi_giai: {
          ban_chat: 'Áp dụng định luật Charles V₁/T₁ = (V₁ + 1,7)/T₂.',
          bien_doi: 'T₁ = 32 + 273 = 305 K; T₂ = 117 + 273 = 390 K ⇒ V₁ = 1,7 × 305 / (390 − 305) = 518,5 / 85 = 6,1 lít.',
          dap_an: '6,1 (lít).',
          bay: 'Quên đổi độ Celsius sang Kelvin.'
        }
      },
      {
        id: 'src_kntt_b13_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 13, Bài tập 2 trang 54',
        prompt: 'Một quả bóng thám không có vỏ đàn hồi tốt, ban đầu được bơm khí hydrogen ở áp suất 1 atm và nhiệt độ 27 °C, thể tích vỏ bóng khi đó là 10 m³. Khi bóng bay lên tầng cao của khí quyển, áp suất khí quyển giảm còn 0,03 atm và nhiệt độ giảm xuống còn −73 °C. Coi áp suất trong bóng bằng áp suất ngoài và lượng khí không đổi. Thể tích của bóng ở tầng cao đó bằng bao nhiêu m³? (Làm tròn đến hàng đơn vị).',
        answer: '222',
        unit: 'm³',
        goi_y: 'Đổi −73 °C sang Kelvin (200 K) và 27 °C sang 300 K rồi áp dụng phương trình trạng thái p₁V₁/T₁ = p₂V₂/T₂.',
        loi_giai: {
          ban_chat: 'Bóng giãn nở đến khi áp suất bên trong cân bằng áp suất khí quyển loãng trên tầng cao.',
          bien_doi: 'T₁ = 300 K; T₂ = −73 + 273 = 200 K ⇒ V₂ = V₁·(p₁/p₂)·(T₂/T₁) = 10 × (1 / 0,03) × (200 / 300) = 2000 / 9 = 222,22 ≈ 222 m³.',
          dap_an: '222 (m³).',
          bay: 'Bỏ sót dấu âm của −73 °C khi đổi sang Kelvin (tính nhầm 73 + 273 = 346 K).'
        }
      },
      {
        id: 'src_kntt_b13_03',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 13, Bài tập 3 trang 54',
        prompt: 'Một bình thép dung tích 40 dm³ chứa 3,96 kg khí oxygen. Hỏi ở nhiệt độ bằng bao nhiêu °C thì bình bắt đầu có nguy cơ bị vỡ, biết bình chỉ chịu được áp suất tối đa 60 atm? Lấy khối lượng riêng của khí oxygen ở điều kiện tiêu chuẩn (p₀ = 1 atm, 0 °C) là 1,43 kg/m³. (Làm tròn đến hàng đơn vị, ghi rõ dấu âm nếu có).',
        answer: '-36',
        unit: '°C',
        goi_y: 'Tính thể tích V₀ = m/ρ₀ của 3,96 kg O₂ ở 1 atm, 273 K; sau đó dùng p₀V₀/T₀ = p_max·V/T_max và đổi lại °C.',
        loi_giai: {
          ban_chat: 'Từ khối lượng riêng ở đktc suy ra trạng thái chuẩn của cùng khối lượng khí m = 3,96 kg để viết phương trình trạng thái.',
          bien_doi: 'V₀ = 3,96 / 1,43 = 2,7692 m³ tại p₀ = 1 atm, T₀ = 273 K. Ở V = 40 dm³ = 0,04 m³, p = 60 atm ⇒ T = 273 × (60 × 0,04) / (1 × 3,96 / 1,43) = 236,6 K ⇒ t = 236,6 − 273 = −36,4 ≈ −36 °C.',
          dap_an: '-36 (°C).',
          bay: 'Quên đổi 40 dm³ = 0,04 m³ hoặc quên dấu âm "-" khi đọc nhiệt độ dưới 0 °C.'
        }
      },
      {
        id: 'src_kntt_b13_04',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_kntt',
        nguon: 'SGK Vật lí 12 Kết nối tri thức — Bài 13, Bài tập 4 trang 54',
        prompt: 'Một bình chứa một chất khí được nén ở nhiệt độ 27 °C và áp suất 40 atm. Nếu nhiệt độ của khí giảm xuống còn 12 °C và một nửa lượng khí trong bình thoát ra ngoài thì áp suất của khí còn lại trong bình bằng bao nhiêu atm?',
        answer: '19',
        unit: 'atm',
        goi_y: 'Lượng khí KHÔNG đổi mới giữ được n; khi một nửa thoát ra (n₂ = n₁/2) thì dùng Clapeyron p = nRT/V để lấy tỉ số.',
        loi_giai: {
          ban_chat: 'Do một nửa lượng khí thoát ra nên áp dụng phương trình Clapeyron pV = nRT cho trạng thái trước và sau (cùng V).',
          bien_doi: 'T₁ = 300 K; T₂ = 12 + 273 = 285 K; n₂ = 0,5·n₁ ⇒ p₂ = p₁ · (n₂/n₁) · (T₂/T₁) = 40 × 0,5 × (285 / 300) = 19 atm.',
          dap_an: '19 (atm).',
          bay: 'Áp dụng máy móc p₁/T₁ = p₂/T₂ mà quên nhân 0,5 do một nửa lượng khí đã thoát ra (ra 38 atm).'
        }
      },
      {
        id: 'src_ctst_apke',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'sgk_ctst_so',
        nguon: 'SGK/SBT Vật lí 12 Chân trời sáng tạo — Mô hình áp kế khí thủy ngân',
        prompt: 'Một mô hình áp kế khí gồm bình cầu thủy tinh gắn với một ống nhỏ AB nằm ngang tiết diện S = 0,1 cm², bên trong ống có một giọt thủy ngân ngăn cách khí trong bình với khí quyển ngoài. Ở nhiệt độ 0 °C, giọt thủy ngân cách đầu A một đoạn 30 cm và tổng thể tích khí bị giam trong bình lẫn đoạn ống là 273 cm³. Hơ nóng bình khí đến 10 °C (coi áp suất không đổi và bình không nở vì nhiệt), giọt thủy ngân dịch chuyển một đoạn bằng bao nhiêu cm?',
        answer: '100',
        unit: 'cm',
        goi_y: 'Áp suất khí trong bình luôn bằng áp suất khí quyển (đẳng áp). Tính độ tăng thể tích ΔV = V₁·ΔT/T₁ rồi chia tiết diện S.',
        loi_giai: {
          ban_chat: 'Do ống đặt nằm ngang thông ra ngoài qua giọt Hg linh động nên quá trình biến đổi là đẳng áp: V₁/T₁ = V₂/T₂.',
          bien_doi: 'T₁ = 273 K; T₂ = 283 K; V₁ = 273 cm³ ⇒ ΔV = V₁·(T₂ − T₁)/T₁ = 273 × 10 / 273 = 10 cm³ ⇒ Quãng đường giọt Hg dịch chuyển x = ΔV / S = 10 / 0,1 = 100 cm.',
          dap_an: '100 (cm).',
          bay: 'Quên chia cho tiết diện S = 0,1 cm² (chọn nhầm 10 cm) hoặc quên cộng 273 K.'
        }
      },
      {
        id: 'src_th25_dn',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'bo_gd',
        nguon: 'Ôn tập chuẩn Đề tham khảo 2025 — Động năng phân tử',
        prompt: 'Khi nhiệt độ của một lượng khí lí tưởng tăng từ 20,0 °C lên đến 40,0 °C thì động năng tịnh tiến trung bình của các phân tử khí tăng thêm bao nhiêu phần trăm (%) so với lúc đầu? (Làm tròn đến một chữ số thập phân).',
        answer: '6,8',
        unit: '%',
        goi_y: 'Động năng trung bình E_đ = (3/2)kT tỉ lệ thuận với T(K). Độ tăng phần trăm = [(T₂ − T₁) / T₁] × 100%.',
        loi_giai: {
          ban_chat: 'Không được lấy 40 / 20 rồi kết luận tăng 100%, vì gốc không của động năng là 0 K (−273 °C).',
          bien_doi: 'T₁ = 293 K; T₂ = 313 K ⇒ (ΔE_đ / E_đ1) × 100% = (20 / 293) × 100% = 6,8259% ≈ 6,8%.',
          dap_an: '6,8 (%).',
          bay: 'Nhầm lấy (40 − 20)/20 = 100% theo thang Celsius!'
        }
      }
    ]
  };

  global.LY_NGUON_THUC_TE_C1_C2 = LY_NGUON_THUC_TE_C1_C2;
})(window);
