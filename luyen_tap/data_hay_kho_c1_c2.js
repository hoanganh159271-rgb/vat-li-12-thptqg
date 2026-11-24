/* Kho Tuyển tập 20 câu Hay & Khó (Vận dụng cao 9+) — Chương 1 & 2 (GDPT 2018) */
(function (global) {
  'use strict';

  var LY_HAY_KHO_C1_C2 = {
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      totalQuestions: 20,
      updatedAt: '2026-11-24',
      note: '20 câu Hay & Khó (Vận dụng cao 9+) Chương 1 & 2 trích từ Đề chính thức Bộ GD&ĐT 2025, SBT Vật lí 12 và tuyển tập Đề Trường Chuyên / Sở GD 2025–2026.'
    },
    questions: [
      /* ================= PHẦN II: 4 CÂU ĐÚNG/SAI PHÂN LOẠI SÂU (16 Ý) ================= */
      {
        id: 'vdc_bo25_pheu_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Bộ GD&ĐT 2025',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT — Phương án đo λ khử sai số môi trường',
        stem: 'Một nhóm học sinh bố trí thí nghiệm làm giảm ảnh hưởng trao đổi nhiệt với môi trường khi đo nhiệt nóng chảy riêng λ của nước đá ở 0 °C gồm: phễu chứa nước đá (1), dây điện trở có công suất không đổi P (2), cốc hứng nước (3), cân điện tử (4). Giai đoạn 1: chưa cấp điện, đo khối lượng nước đá tan chảy vào cốc là m₁ trong khoảng thời gian t₁. Giai đoạn 2: cấp điện với công suất không đổi P, đo khối lượng nước đá tan chảy vào cốc là m₂ trong khoảng thời gian t₂. Coi tốc độ nước đá tan do nhận nhiệt từ môi trường là không đổi trong suốt thí nghiệm.',
        items: [
          {
            label: 'a',
            text: 'Ở giai đoạn 1, nước đá tan hoàn toàn do nhận nhiệt lượng truyền từ môi trường xung quanh.',
            answer: true
          },
          {
            label: 'b',
            text: 'Ở giai đoạn 2, nước đá tan do nhận đồng thời nhiệt lượng từ dây điện trở và từ môi trường.',
            answer: true
          },
          {
            label: 'c',
            text: 'Nếu chọn thời gian đo t₂ = t₁ thì nhiệt nóng chảy riêng của nước đá đã khử sai số môi trường được tính bằng λ = P·t₂ / (m₂ − m₁).',
            answer: true
          },
          {
            label: 'd',
            text: 'Nếu bỏ qua giai đoạn 1 mà tính thẳng λ\' = P·t₂ / m₂ thì giá trị λ\' thu được sẽ lớn hơn giá trị thực tế λ của nước đá.',
            answer: false
          }
        ],
        goi_y: 'Ở đây môi trường TRUYỀN NHIỆT VÀO làm đá tan thêm m₁ (trái ngược bài ấm đun nước bị MẤT NHIỆT ra môi trường). Hãy so sánh mẫu số m₂ với (m₂ − m₁).',
        loi_giai: {
          ban_chat: 'Khi đo nhiệt nóng chảy riêng nước đá ở 0 °C trong phòng ~25 °C, môi trường nóng hơn nên truyền thêm nhiệt lượng Q_mt làm đá tự tan. Dùng thí nghiệm đối chứng (Giai đoạn 1) giúp đo tốc độ tan nền m₁/t₁ để trừ khử phần nhiệt môi trường.',
          bien_doi: 'a) Đúng: chưa bật nguồn nên Q_điện = 0, chỉ có môi trường cấp nhiệt làm tan lượng đá m₁. b) Đúng: khi cấp điện trong t₂, tổng lượng đá tan gồm phần do điện trở P·t₂ và phần do môi trường. c) Đúng: với t₂ = t₁, lượng đá tan do môi trường là m₁, suy ra lượng đá tan riêng bởi dây điện trở là (m₂ − m₁) ⇒ λ·(m₂ − m₁) = P·t₂ ⇒ λ = P·t₂ / (m₂ − m₁). d) Sai: vì m₂ > m₂ − m₁ > 0 nên λ\' = P·t₂ / m₂ < P·t₂ / (m₂ − m₁) = λ (nhỏ hơn giá trị thật, không phải lớn hơn).',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Bẫy ngược chiều sai số: ở thí nghiệm đun nước sôi (tỏa nhiệt ra môi trường), bỏ qua hao phí làm λ_đo hay c_đo LỚN hơn giá trị thật; còn ở phễu nước đá 0 °C (nhận nhiệt từ môi trường), bỏ qua giai đoạn 1 làm mẫu số m₂ bị phình to nên λ\' NHỎ hơn giá trị thật.'
        }
      },
      {
        id: 'vdc_tuikhi_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Đề thi thử & SBT 2025',
        nguon: 'Tuyển tập Đề thi thử 2025 & SBT Vật lí 12 — Túi khí ô tô (NaN₃)',
        stem: 'Hệ thống túi khí trên ô tô chứa 130 g chất rắn sodium azide (NaN₃, khối lượng mol M = 65 g/mol). Khi va chạm mạnh, toàn bộ NaN₃ phân hủy theo phương trình 2NaN₃ → 2Na + 3N₂↑. Khi căng phồng tối đa, túi có thể tích V = 45 lít và khí N₂ bên trong có nhiệt độ 30 °C. Bỏ qua thể tích không khí có sẵn và thể tích Na rắn tạo thành; lấy R = 8,31 J/(mol·K), N_A = 6,02×10²³ mol⁻¹, biết thể tích mol khí ở điều kiện phòng khảo sát là 24,0 lít/mol.',
        items: [
          {
            label: 'a',
            text: 'Số mol NaN₃ phản ứng là 2 mol, tương ứng 1,204×10²⁴ phân tử NaN₃.',
            answer: true
          },
          {
            label: 'b',
            text: 'Số mol khí N₂ giải phóng ra bằng 3 mol.',
            answer: true
          },
          {
            label: 'c',
            text: 'Ở điều kiện thể tích mol 24,0 lít/mol, thể tích khí N₂ giải phóng bằng 72 m³.',
            answer: false
          },
          {
            label: 'd',
            text: 'Khi túi phồng đến thể tích 45 lít ở nhiệt độ 30 °C, áp suất khí N₂ trong túi xấp xỉ 167,9 kPa (làm tròn đến hàng phần mười).',
            answer: true
          }
        ],
        goi_y: 'Kiểm tra bẫy đơn vị ở ý c) (lít hay m³?) và dùng phương trình Clapeyron p·V = n·R·T (V = 0,045 m³, T = 303 K) ở ý d).',
        loi_giai: {
          ban_chat: 'Phản ứng hóa học tạo ra số mol khí N₂ xác định n = (3/2)·n_NaN₃, sau đó dùng phương trình Clapeyron pV = nRT cho trạng thái khí bị nén trong túi thể tích V.',
          bien_doi: 'a) Đúng: n_NaN₃ = 130 / 65 = 2 mol ⇒ N = 2 × 6,02×10²³ = 1,204×10²⁴ phân tử. b) Đúng: theo tỉ lệ phương trình, n_N₂ = (3/2) × 2 = 3 mol. c) Sai: V_N₂ = 3 × 24,0 = 72 lít = 0,072 m³, không phải 72 m³ (chênh 1000 lần). d) Đúng: p = nRT / V = (3 × 8,31 × 303) / 0,045 = 167 862 Pa ≈ 167,9 kPa.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Nhìn thấy đúng con số "72" ở ý c) mà bỏ qua đơn vị sai lệch m³ so với lít (dm³).'
        }
      },
      {
        id: 'vdc_chutrinh_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Trường Chuyên 2025',
        nguon: 'Tuyển tập Đề Trường Chuyên 2025 — Chu trình hình chữ nhật trên đồ thị (p–V)',
        stem: 'Một mol khí lí tưởng đơn nguyên tử (có nội năng U = (3/2)nRT = (3/2)pV) thực hiện chu trình kín 1 → 2 → 3 → 4 → 1 theo chiều kim đồng hồ trên hệ tọa độ (p–V): trạng thái (1) có áp suất p₁ và thể tích V₁; quá trình 1 → 2 đẳng tích lên (2p₁, V₁); quá trình 2 → 3 đẳng áp sang (2p₁, 2V₁); quá trình 3 → 4 đẳng tích xuống (p₁, 2V₁); quá trình 4 → 1 đẳng áp trở về (p₁, V₁).',
        items: [
          {
            label: 'a',
            text: 'Trong cả chu trình kín, công mà khối khí thực hiện có độ lớn bằng diện tích hình chữ nhật p₁V₁ (theo quy ước GDPT 2018: A_chu_trình = −p₁V₁).',
            answer: true
          },
          {
            label: 'b',
            text: 'Sau một chu trình kín, tổng độ biến thiên nội năng ΔU = 0 nên tổng nhiệt lượng đại số khối khí nhận được là Q_chu_trình = +p₁V₁.',
            answer: true
          },
          {
            label: 'c',
            text: 'Khối khí chỉ nhận nhiệt lượng ở hai giai đoạn 1 → 2 và 2 → 3 với tổng nhiệt lượng nhận vào Q_nhận = 6,5·p₁V₁.',
            answer: true
          },
          {
            label: 'd',
            text: 'Hiệu suất của chu trình động cơ nhiệt này là H = |A_chu_trình| / Q_nhận = 25%.',
            answer: false
          }
        ],
        goi_y: 'Ở ý c) và d), không lấy Q_chu_trình làm Q_nhận! Phải tính riêng Q = ΔU − A (theo ΔU = A + Q) cho từng giai đoạn để lọc các giai đoạn có Q > 0.',
        loi_giai: {
          ban_chat: 'Áp dụng Định luật I NĐLH chuẩn GDPT 2018: ΔU = A + Q ⇒ Q = ΔU − A, trong đó với khí đơn nguyên tử ΔU_ij = (3/2)(p_jV_j − p_iV_i) và công A_ij = −p(V_j − V_i) khi đẳng áp.',
          bien_doi: 'a) Đúng: A₁₂ = A₃₄ = 0; A₂₃ = −2p₁(2V₁ − V₁) = −2p₁V₁; A₄₁ = −p₁(V₁ − 2V₁) = +p₁V₁ ⇒ A_chu_trình = −p₁V₁ (khí sinh công có ích p₁V₁). b) Đúng: ΔU_chu_trình = A + Q = 0 ⇒ Q_chu_trình = −A_chu_trình = +p₁V₁. c) Đúng: 1→2 (đẳng tích tăng p): Q₁₂ = ΔU₁₂ = (3/2)(2p₁V₁ − p₁V₁) = +1,5p₁V₁; 2→3 (đẳng áp giãn): ΔU₂₃ = (3/2)(4p₁V₁ − 2p₁V₁) = 3p₁V₁, A₂₃ = −2p₁V₁ ⇒ Q₂₃ = 3p₁V₁ − (−2p₁V₁) = +5p₁V₁. Hai giai đoạn 3→4 (Q₃₄ = −3p₁V₁ < 0) và 4→1 (Q₄₁ = −2,5p₁V₁ < 0) đều tỏa nhiệt. Vậy Q_nhận = 1,5p₁V₁ + 5p₁V₁ = 6,5p₁V₁. d) Sai: H = p₁V₁ / (6,5·p₁V₁) = 2/13 ≈ 15,4%, không phải 25%.',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Sai lầm phổ biến: quên phần nhiệt tăng nội năng (3/2)Δ(pV) khi tính Q₂₃, hoặc nhầm lấy hiệu suất theo công thức động cơ Carnot.'
        }
      },
      {
        id: 'vdc_vanhbao_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'SBT Vật lí 12 KNTT',
        nguon: 'SBT Vật lí 12 Kết nối tri thức — Bài tập cuối Chương II (Van bảo hiểm lò xo)',
        stem: 'Một bình kín dung tích V chứa 1 mol khí lí tưởng. Van bảo hiểm của bình là một xi-lanh nhỏ (thể tích không đáng kể so với V) có pít-tông diện tích S trượt không ma sát và được giữ bằng một lò xo có độ cứng k. Ở nhiệt độ T₁, pít-tông đang cân bằng cách lỗ thoát khí một khoảng l. Khi đun nóng từ từ khối khí đến nhiệt độ T₂ thì pít-tông vừa chạm tới lỗ thoát khí để khí bắt đầu thoát ra ngoài (biết lực đàn hồi lò xo F_đh = k|Δl|, áp suất khí quyển là p₀).',
        items: [
          {
            label: 'a',
            text: 'Khi nhiệt độ khí tăng từ T₁ lên T₂, độ biến dạng của lò xo tăng thêm đúng một đoạn l.',
            answer: true
          },
          {
            label: 'b',
            text: 'Ở trạng thái cân bằng ban đầu tại nhiệt độ T₁, điều kiện cân bằng lực của pít-tông là p₁S = p₀S + F_đh1.',
            answer: true
          },
          {
            label: 'c',
            text: 'Khi pít-tông vừa chạm lỗ thoát khí ở nhiệt độ T₂, áp suất khí trong bình đã tăng thêm một lượng Δp = k·l / S.',
            answer: true
          },
          {
            label: 'd',
            text: 'Nhiệt độ T₂ để khí bắt đầu thoát ra phụ thuộc trực tiếp vào áp suất khí quyển p₀ theo công thức T₂ = T₁ + (p₀S + kl)V / (RS).',
            answer: false
          }
        ],
        goi_y: 'Viết p₁S = p₀S + F_đh1 và p₂S = p₀S + F_đh1 + kl rồi trừ hai phương trình theo vế để xem p₀S và F_đh1 còn hay bị triệt tiêu.',
        loi_giai: {
          ban_chat: 'Vì thể tích xi-lanh van không đáng kể so với thể tích bình V, quá trình nung nóng đến trước lúc khí thoát là đẳng tích (n = 1 mol). Sự chênh lệch áp suất hai thời điểm cân bằng hoàn toàn do độ tăng lực đàn hồi của lò xo k·l tạo ra.',
          bien_doi: 'a) Đúng: pít-tông bị đẩy nén thêm đoạn l hướng ra lỗ thoát nên độ nén lò xo tăng thêm Δl\' = l. b) Đúng: lực đẩy khí bên trong cân bằng tổng áp lực khí quyển và lực nén lò xo ban đầu. c) Đúng: p₂S = p₀S + F_đh1 + kl ⇒ (p₂ − p₁)S = kl ⇒ Δp = kl / S. d) Sai: từ Clapeyron cho 1 mol khí (p₂ − p₁)V = R(T₂ − T₁) ⇒ (kl / S)·V = R(T₂ − T₁) ⇒ T₂ = T₁ + klV / (RS); cả p₀ và F_đh1 đều đã triệt tiêu.',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Ý d) dễ đánh lừa học sinh do p₀S có mặt trong phương trình cân bằng lực ở ý b), nhưng lại triệt tiêu hoàn toàn khi lấy hiệu p₂ − p₁.'
        }
      },

      /* ================= PHẦN III: 16 CÂU TRẢ LỜI NGẮN HAY & KHÓ (ĐÁP ÁN <= 4 KÝ TỰ) ================= */
      {
        id: 'vdc_bo25_tram1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Bộ GD&ĐT 2025',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT (Mã đề 0201/0203 — Phần III, Câu 3)',
        prompt: 'Trên trạm không gian vũ trụ, hệ thống thu hồi khí oxygen (O₂) từ khí carbon dioxide (CO₂) hoạt động sao cho cứ 1,00 mol CO₂ tạo ra 1,00 mol O₂ và 1,00 mol methane (CH₄). Sau một thời gian, lượng CO₂ thu được là 0,480 kg (M_CO₂ = 44,0 g/mol). Toàn bộ lượng CH₄ sinh ra được nạp vào một bình ban đầu chân không có thể tích 129 lít và duy trì ở nhiệt độ −42 °C. Lấy R = 8,31 J/(mol·K), T(K) = t(°C) + 273 và không làm tròn các phép tính trung gian. Áp suất khí CH₄ trong bình là x·10⁵ Pa. Tìm x (làm tròn kết quả đến chữ số hàng phần trăm).',
        answer: '1,62',
        unit: '×10⁵ Pa',
        goi_y: 'Giữ nguyên phân số n_CH₄ = n_CO₂ = 480/44 mol, đổi T = −42 + 273 = 231 K và V = 0,129 m³ vào p = nRT / V rồi chia 10⁵.',
        loi_giai: {
          ban_chat: 'Đây là câu trả lời ngắn vận dụng trực tiếp quy tắc không làm tròn trung gian của Bộ GD&ĐT 2025 kết hợp Clapeyron pV = nRT.',
          bien_doi: 'n_CO₂ = 480 / 44,0 (mol) = n_CH₄; V = 129 lít = 0,129 m³; T = −42 + 273 = 231 K ⇒ p = [(480 / 44) × 8,31 × 231] / 0,129 ≈ 162 334,88 Pa = 1,6233×10⁵ Pa ⇒ x ≈ 1,62.',
          dap_an: '1,62',
          bay: 'Nếu làm tròn sớm n = 10,91 mol hoặc tự ý dùng 273,15 K khi đề quy ước 273 K có thể lệch hàng phần trăm; cần giữ nguyên phân số 480/44 đến bước cuối cùng.'
        }
      },
      {
        id: 'vdc_bo25_tram2',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Bộ GD&ĐT 2025',
        nguon: 'Đề thi chính thức THPT 2025, Bộ GD&ĐT (Mã đề 0201/0203 — Phần III, Câu 4)',
        prompt: 'Tiếp nối tình huống trạm không gian vũ trụ trên (0,480 kg CO₂ với M_CO₂ = 44,0 g/mol tạo ra số mol O₂ bằng số mol CO₂; M_O₂ = 32,0 g/mol): toàn bộ lượng khí O₂ sinh ra được chứa trong một bình kín riêng. Khi một lượng khí O₂ được rút ra để sử dụng thì áp suất trong bình chỉ còn bằng 69% áp suất khi chưa rút (nhiệt độ bình giữ không đổi). Khối lượng O₂ đã được rút ra khỏi bình bằng bao nhiêu kg (làm tròn đến chữ số hàng phần trăm)?',
        answer: '0,11',
        unit: 'kg',
        goi_y: 'Ở V và T không đổi, p tỉ lệ thuận với n (và khối lượng m) ⇒ phần khí còn lại chiếm 69%, suy ra phần khí ĐÃ RÚT RA chiếm 31% khối lượng O₂ ban đầu.',
        loi_giai: {
          ban_chat: 'Trong bình dung tích V cố định ở nhiệt độ T không đổi, p = (m/M)·RT/V tỉ lệ thuận trực tiếp với khối lượng khí còn lại.',
          bien_doi: 'm_O₂_ban_đầu = (480 / 44,0) × 32,0 = 349,09 g = 0,34909 kg. Khi áp suất còn 69% áp suất ban đầu ⇒ lượng rút ra chiếm 100% − 69% = 31% ⇒ Δm = 0,31 × (0,480 × 32 / 44) ≈ 0,1082 kg ≈ 0,11 kg.',
          dap_an: '0,11 (kg).',
          bay: 'Tính nhầm ra khối lượng O₂ CÒN LẠI (0,69 × 0,349 = 0,24 kg) hoặc quên đổi từ gam sang kg (ra 108 g).'
        }
      },
      {
        id: 'vdc_ong2dau_hg',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Trường Chuyên 2025',
        nguon: 'Tuyển tập Đề Trường Chuyên Vật lí 12 — Ống thủy tinh kín hai đầu chứa cột thủy ngân',
        prompt: 'Một ống thủy tinh tiết diện đều, kín hai đầu, dài L = 105 cm đặt nằm ngang. Ở chính giữa ống có một cột thủy ngân dài h = 21 cm ngăn hai cột không khí đối xứng hai bên, mỗi bên đều có áp suất p₀ = 72 cmHg. Dựng ống thẳng đứng sao cho nhiệt độ không đổi, cột thủy ngân dịch chuyển xuống dưới một đoạn bằng bao nhiêu cm?',
        answer: '6',
        unit: 'cm',
        goi_y: 'Ban đầu mỗi cột khí dài l₀ = (105 − 21)/2 = 42 cm. Khi dựng đứng, cột Hg tụt xuống đoạn x ⇒ cột dưới còn (42 − x), cột trên dài (42 + x), và p_dưới − p_trên = h = 21 cmHg.',
        loi_giai: {
          ban_chat: 'Cột thủy ngân chia ống thành hai khối khí riêng biệt biến đổi đẳng nhiệt theo định luật Boyle; cân bằng cơ học mới của cột thủy ngân đòi hỏi áp suất ngăn dưới lớn hơn áp suất ngăn trên đúng bằng áp suất thủy tĩnh cột thủy ngân h.',
          bien_doi: 'l₀ = (105 − 21) / 2 = 42 cm. Khi cột thủy ngân hạ xuống đoạn x (cm): p_dưới = p₀·l₀ / (l₀ − x) và p_trên = p₀·l₀ / (l₀ + x). Điều kiện cân bằng p_dưới − p_trên = h ⇒ 72 × 42 × [1/(42 − x) − 1/(42 + x)] = 21 ⇒ 3024 × (2x) / (42² − x²) = 21 ⇒ 288x = 1764 − x² ⇒ x² + 288x − 1764 = 0 ⇒ x = −144 + √(144² + 1764) = −144 + 150 = 6 cm.',
          dap_an: '6 (cm).',
          bay: 'Nhầm áp suất ngăn trên vẫn giữ nguyên p₀ như ống hở, bỏ qua việc ngăn trên cũng kín nên áp suất giảm khi thể tích tăng.'
        }
      },
      {
        id: 'vdc_ong1dau_lat',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Ống thủy tinh kín một đầu lật ngược',
        prompt: 'Một ống thủy tinh tiết diện đều, một đầu kín một đầu hở, chứa một cột thủy ngân dài h = 14 cm. Khi đặt ống thẳng đứng đầu hở ở trên thì chiều dài cột không khí bị giam là l₁ = 10 cm. Biết áp suất khí quyển p₀ = 76 cmHg, nhiệt độ không đổi và khi lật ngược ống thì thủy ngân không chảy ra ngoài. Khi đặt ống thẳng đứng đầu hở ở dưới, chiều dài cột không khí bằng bao nhiêu cm (làm tròn đến 1 chữ số thập phân)?',
        answer: '14,5',
        unit: 'cm',
        goi_y: 'Đầu hở ở trên: p₁ = p₀ + h. Đầu hở ở dưới: p₂ = p₀ − h. Dùng định luật Boyle p₁·l₁ = p₂·l₂.',
        loi_giai: {
          ban_chat: 'Khi quay ống trong môi trường nhiệt độ không đổi (và cột Hg không tràn ra ngoài), lượng khí bị giam giữ nguyên và áp suất của nó tăng hoặc giảm đúng một lượng bằng cột thủy ngân h tùy vị trí đầu hở trên/dưới.',
          bien_doi: 'p₁ = p₀ + h = 76 + 14 = 90 cmHg; p₂ = p₀ − h = 76 − 14 = 62 cmHg. Từ p₁·l₁ = p₂·l₂ ⇒ l₂ = (90 × 10) / 62 ≈ 14,516 cm ≈ 14,5 cm.',
          dap_an: '14,5 (cm).',
          bay: 'Nhầm dấu cộng trừ khi lật ngược ống (lấy p₂ = 76 + 14) hoặc quên đổi đồng nhất mmHg vs cmHg.'
        }
      },
      {
        id: 'vdc_ongup_chau',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Ống thủy tinh úp ngược trong chậu thủy ngân',
        prompt: 'Một ống thủy tinh một đầu kín được cắm thẳng đứng úp ngược vào một chậu chứa thủy ngân; bên trong ống giam 40 cm³ không khí nằm phía trên cột thủy ngân dâng cao h = 8 cm so với mực thủy ngân trong chậu. Biết áp suất khí quyển p₀ = 75 cmHg và nhiệt độ không đổi. Ấn sâu ống xuống cho tới khi mực thủy ngân trong ống và ngoài chậu ngang bằng nhau thì thể tích không khí còn lại trong ống bằng bao nhiêu cm³ (làm tròn đến 1 chữ số thập phân)?',
        answer: '35,7',
        unit: 'cm³',
        goi_y: 'Ban đầu cột thủy ngân cao hơn mặt thoáng ngoài 8 cm ⇒ p₁ + 8 = p₀ ⇒ p₁ = 67 cmHg. Khi hai mực ngang nhau thì p₂ = p₀ = 75 cmHg.',
        loi_giai: {
          ban_chat: 'Áp suất tại hai điểm nằm trên cùng mặt phẳng ngang trong chất lỏng đứng yên là bằng nhau: mặt thoáng ngoài chậu chịu p₀, còn mặt thoáng trong ống cách dưới một cột thủy ngân cao h nên p₁ + h = p₀.',
          bien_doi: 'p₁ = p₀ − h = 75 − 8 = 67 cmHg, V₁ = 40 cm³. Khi mực Hg trong ống ngang bằng ngoài chậu: h₂ = 0 ⇒ p₂ = p₀ = 75 cmHg. Định luật Boyle: V₂ = p₁V₁ / p₂ = 67 × 40 / 75 = 2680 / 75 ≈ 35,73 cm³ ≈ 35,7 cm³.',
          dap_an: '35,7 (cm³).',
          bay: 'Lấy nhầm p₁ = p₀ + h = 83 cmHg do thấy chữ "cột Hg cao 8 cm" mà không xét cột khí nằm PHÍA TRÊN cột thủy ngân.'
        }
      },
      {
        id: 'vdc_2ngan_xilanh',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Trường Chuyên 2025',
        nguon: 'Tuyển tập Đề Chuyên 2025 — Xi-lanh hai ngăn có pít-tông cách nhiệt',
        prompt: 'Một xi-lanh kín hai đầu đặt nằm ngang có pít-tông mỏng, cách nhiệt, chuyển động không ma sát chia xi-lanh thành hai ngăn bằng nhau, mỗi ngăn dài 25 cm chứa cùng lượng khí lí tưởng ở nhiệt độ 27 °C và áp suất 1 atm. Nung nóng khí ở ngăn trái lên đến 67 °C trong khi giữ nguyên nhiệt độ ngăn phải ở 27 °C. Khi đạt cân bằng mới, pít-tông đã dịch chuyển một đoạn bằng bao nhiêu cm (làm tròn đến 2 chữ số thập phân)?',
        answer: '1,56',
        unit: 'cm',
        goi_y: 'Khi pít-tông cân bằng mới, áp suất hai ngăn bằng nhau p₁\' = p₂\'. Viết phương trình trạng thái cho từng ngăn với chiều dài mới (25 + x) và (25 − x).',
        loi_giai: {
          ban_chat: 'Hai ngăn độc lập trao đổi cơ học qua pít-tông mỏng nhẹ trượt không ma sát (điều kiện cân bằng p₁\' = p₂\'). Nhờ pít-tông cách nhiệt, nhiệt độ mỗi ngăn biến đổi riêng rẽ.',
          bien_doi: 'T₀ = 27 + 273 = 300 K; T₁\' = 67 + 273 = 340 K; T₂\' = 300 K. Gọi x (cm) là độ dịch chuyển sang phải: p₀·25 / 300 = p₁\'·(25 + x) / 340 và p₀·25 / 300 = p₂\'·(25 − x) / 300. Vì p₁\' = p₂\' ⇒ 340 / (25 + x) = 300 / (25 − x) ⇒ 34(25 − x) = 30(25 + x) ⇒ 850 − 34x = 750 + 30x ⇒ 64x = 100 ⇒ x = 1,5625 cm ≈ 1,56 cm.',
          dap_an: '1,56 (cm).',
          bay: 'Quên điều kiện áp suất cuối cùng của hai ngăn bằng nhau p₁\' = p₂\' (nhầm lẫn áp suất vẫn giữ nguyên 1 atm nên tính Charles thuần ra độ dịch khác).'
        }
      },
      {
        id: 'vdc_2binh_nhietkhac',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Đề thi thử & SBT 2025',
        nguon: 'Tuyển tập Đề thi thử 2025 & SBT Vật lí 12 — Hai bình thông nhau ở hai nhiệt độ khác nhau',
        prompt: 'Hai bình có thể tích V₁ và V₂ = 2V₁ được nối thông nhau qua một ống nhỏ cách nhiệt (thể tích ống không đáng kể), ban đầu chứa khí oxygen ở nhiệt độ 27 °C và áp suất 100 kPa. Sau đó giữ nhiệt độ bình 1 ở 0 °C đồng thời nâng nhiệt độ bình 2 lên 100 °C. Áp suất cân bằng mới của khí trong hai bình bằng bao nhiêu kPa (làm tròn đến hàng đơn vị)?',
        answer: '111',
        unit: 'kPa',
        goi_y: 'Vì ống thông mở và hệ kín nên TỔNG số mol khí bảo toàn: n_đầu = n₁\' + n₂\' ⇒ p₀(V₁ + V₂)/T₀ = p·(V₁/T₁\' + V₂/T₂\').',
        loi_giai: {
          ban_chat: 'Khi hai bình có nhiệt độ khác nhau nhưng thông nhau, áp suất ở trạng thái cân bằng cơ học ở hai bình phải bằng nhau (= p), còn số mol khí sẽ tự phân bố lại sao cho tổng số mol n = pV/(RT) không đổi.',
          bien_doi: 'T₀ = 27 + 273 = 300 K; T₁\' = 273 K; T₂\' = 373 K; V₂ = 2V₁. Bảo toàn số mol: p₀·(3V₁) / 300 = p·V₁·(1 / 273 + 2 / 373) ⇒ 100 / 100 = p · [(373 + 546) / (273 × 373)] ⇒ p = (100 × 273 × 373) / 919 ≈ 110,804 kPa ≈ 111 kPa.',
          dap_an: '111 (kPa).',
          bay: 'Áp dụng công thức bình thông đẳng nhiệt p₁V₁ + p₂V₂ = p(V₁ + V₂) dù nhiệt độ hai bình đã thay đổi khác nhau, hoặc tính trung bình cộng nhiệt độ (sai hoàn toàn vì p tỉ lệ nghịch với tổng ∑V_i/T_i).'
        }
      },
      {
        id: 'vdc_thoatkhi_h2',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'SBT Vật lí 12 KNTT',
        nguon: 'SBT Vật lí 12 Kết nối tri thức — Bài tập cuối Chương II (Bình H₂ hở nắp)',
        prompt: 'Một bình dung tích 10 lít đựng khí hydrogen (M = 2 g/mol) ở áp suất 50 atm (lấy 1 atm = 1,013×10⁵ Pa) và nhiệt độ 7 °C. Do nắp bình không được vặn thật kín nên khi nhiệt độ của bình tăng thêm 10 °C thì có một lượng khí thoát ra ngoài, nhưng áp suất khí trong bình vẫn không đổi. Lấy R = 8,31 J/(mol·K). Tính khối lượng khí hydrogen đã thoát ra ngoài theo đơn vị gam (làm tròn đến 1 chữ số thập phân).',
        answer: '1,5',
        unit: 'g',
        goi_y: 'Áp dụng Clapeyron m = p·V·M / (R·T) cho trạng thái trước và sau khi tăng 10 K (chú ý T₁ = 280 K, T₂ = 290 K) rồi lấy Δm = m₁ − m₂.',
        loi_giai: {
          ban_chat: 'Vì bình bị hở nắp, lượng khí bên trong giảm đi khi nóng lên để giữ nguyên áp suất trong cùng thể tích V cố định.',
          bien_doi: 'p = 50 × 1,013×10⁵ = 5,065×10⁶ Pa; V = 10 lít = 0,01 m³; T₁ = 7 + 273 = 280 K; T₂ = 280 + 10 = 290 K; M = 2 g/mol. Khi giữ M tính theo g/mol thì Δm (gam) = (p·V·M / R)·(1/T₁ − 1/T₂) = (5,065×10⁶ × 0,01 × 2 / 8,31) × (10 / (280 × 290)) ≈ 12 190,13 × 1,2315×10⁻⁴ ≈ 1,501 g ≈ 1,5 g.',
          dap_an: '1,5 (g).',
          bay: 'Đổi sai atm sang Pa (dùng 10⁵ thay vì 1,013×10⁵ vẫn gần 1,48 g ≈ 1,5 g, nhưng nhầm đơn vị kg vs g sẽ lệch 1000 lần).'
        }
      },
      {
        id: 'vdc_bomtay_bong',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Bơm tay nén khí vào quả bóng',
        prompt: 'Một bơm tay có diện tích tiết diện pít-tông S = 20 cm², chiều dài hành trình bơm h = 30 cm được dùng để bơm không khí ở áp suất khí quyển p₀ = 1 atm vào một quả bóng có thể tích không đổi V = 3 lít. Ban đầu quả bóng hoàn toàn xẹp (không chứa không khí). Coi nhiệt độ không đổi trong suốt quá trình bơm, cần tối thiểu bao nhiêu lần bơm để áp suất khí trong bóng đạt 3 atm?',
        answer: '15',
        unit: 'lần',
        goi_y: 'Thể tích mỗi nhát bơm v = S·h (đổi cm³ → lít: 1000 cm³ = 1 lít). Lượng khí bơm vào ở p₀ là n·v bị nén đẳng nhiệt vào bóng V ở 3p₀.',
        loi_giai: {
          ban_chat: 'Vì ban đầu quả bóng hoàn toàn xẹp (chưa có khí bên trong) nên toàn bộ lượng khí ở trạng thái cuối có nguồn gốc từ n lần hút khí quyển (áp suất p₀, tổng thể tích n·v).',
          bien_doi: 'Thể tích khí mỗi lần bơm: v = S·h = 20 × 30 = 600 cm³ = 0,6 lít. Định luật Boyle: p₀·(n·v) = p₂·V ⇒ 1 × (0,6·n) = 3 × 3 ⇒ n = 9 / 0,6 = 15 lần.',
          dap_an: '15 (lần).',
          bay: 'Quên câu chữ "ban đầu hoàn toàn xẹp (không chứa không khí)" nên cộng dư thêm V vào vế trái (ra sai n = 10 lần).'
        }
      },
      {
        id: 'vdc_noiapsuat_rho',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Tỉ số khối lượng riêng hơi nước nồi áp suất',
        prompt: 'Một nồi áp suất hoạt động ở áp suất bằng hai lần áp suất khí quyển thì nước sôi ở 120 °C và hơi nước khi đó có khối lượng riêng ρ₁. Ở áp suất khí quyển tiêu chuẩn, nước sôi ở 100 °C và hơi nước có khối lượng riêng ρ₂. Coi hơi nước gần đúng như khí lí tưởng, tính tỉ số ρ₁ / ρ₂ (làm tròn đến 1 chữ số thập phân).',
        answer: '1,9',
        unit: 'lần',
        goi_y: 'Từ phương trình Clapeyron pV = (m/M)RT rút biểu thức khối lượng riêng ρ = m/V = pM / (RT) để lập tỉ số ρ₁/ρ₂.',
        loi_giai: {
          ban_chat: 'Khi coi hơi nước là khí lí tưởng cùng khối lượng mol M = 18 g/mol, khối lượng riêng của khí tỉ lệ thuận với áp suất p và tỉ lệ nghịch với nhiệt độ tuyệt đối T.',
          bien_doi: 'T₁ = 120 + 273 = 393 K (p₁ = 2p₀); T₂ = 100 + 273 = 373 K (p₂ = p₀). Tỉ số khối lượng riêng: ρ₁ / ρ₂ = (p₁ / p₂) · (T₂ / T₁) = 2 × (373 / 393) ≈ 1,8982 ≈ 1,9.',
          dap_an: '1,9',
          bay: 'Thay nhầm độ °C vào công thức tỉ lệ (2 × 100/120 = 1,67) hoặc chia ngược T₁/T₂ (ra 2,1).'
        }
      },
      {
        id: 'vdc_vutru_o2',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'SBT Vật lí 12',
        nguon: 'SBT Vật lí 12 & Tuyển tập 2025 — Tốc độ căn quân phương đạt tốc độ vũ trụ cấp I',
        prompt: 'Ở nhiệt độ tuyệt đối bằng x·10⁴ K thì tốc độ căn quân phương (v_rms) của các phân tử khí oxygen (O₂, khối lượng mol M = 32 g/mol) đạt giá trị bằng tốc độ vũ trụ cấp I (v₁ = 7,9 km/s). Lấy R = 8,31 J/(mol·K). Tìm x (làm tròn đến 1 chữ số thập phân).',
        answer: '8,0',
        unit: '×10⁴ K',
        goi_y: 'Từ v_rms = √(3RT / M) rút ra T = M·v₁² / (3R), nhớ đổi M = 0,032 kg/mol và v₁ = 7900 m/s.',
        loi_giai: {
          ban_chat: 'Từ thuyết động học phân tử khí lí tưởng, động năng tịnh tiến trung bình của 1 mol khí bằng (3/2)RT, tương ứng tốc độ căn quân phương v_rms = √(3RT/M).',
          bien_doi: 'M = 32 g/mol = 0,032 kg/mol; v₁ = 7,9 km/s = 7900 m/s ⇒ T = (0,032 × 7900²) / (3 × 8,31) = 1 997 120 / 24,93 ≈ 80 109 K = 8,0109×10⁴ K ⇒ x ≈ 8,0.',
          dap_an: '8,0',
          bay: 'Quên bình phương vận tốc 7900 m/s hoặc quên đổi km/s sang m/s và g/mol sang kg/mol.'
        }
      },
      {
        id: 'vdc_matdo_std',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'SBT Vật lí 12 KNTT',
        nguon: 'SBT Vật lí 12 Kết nối tri thức — Bài 12.7 trang 37 (Số Loschmidt)',
        prompt: 'Ở điều kiện tiêu chuẩn có áp suất p = 1,013×10⁵ Pa và nhiệt độ 0 °C, lấy R = 8,31 J/(mol·K), N_A = 6,02×10²³ mol⁻¹, mật độ phân tử của mọi chất khí lí tưởng đều bằng x·10²⁵ m⁻³. Tìm x (làm tròn đến 2 chữ số thập phân).',
        answer: '2,69',
        unit: '×10²⁵ m⁻³',
        goi_y: 'Mật độ phân tử μ = N / V = p·N_A / (R·T) (với T = 273 K).',
        loi_giai: {
          ban_chat: 'Áp suất khí lí tưởng p = μ·k·T = (μ / N_A)·R·T chứng tỏ ở cùng điều kiện p và T, mật độ phân tử không phụ thuộc loại phân tử khí (hằng số Loschmidt).',
          bien_doi: 'T = 0 + 273 = 273 K ⇒ μ = (1,013×10⁵ × 6,02×10²³) / (8,31 × 273) ≈ 2,6881×10²⁵ m⁻³ ⇒ x ≈ 2,69.',
          dap_an: '2,69',
          bay: 'Làm tròn nhầm sang 2,68 (một số bản in gõ nhầm 2,683 nhưng tính đúng với 1,013×10⁵, 6,02×10²³, 8,31 và 273 đều ra 2,688 → 2,69).'
        }
      },
      {
        id: 'vdc_danchi_nc',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Tuyển tập Đề thi thử TN THPT 2025 — Đạn chì va chạm nóng chảy hoàn toàn',
        prompt: 'Một viên đạn chì đang ở nhiệt độ 127 °C bay đập vào vật cản cứng và dừng lại đột ngột. Giả sử 80% động năng của viên đạn chuyển hóa thành nội năng của chính nó. Biết chì có nhiệt độ nóng chảy 327 °C, nhiệt dung riêng c = 130 J/(kg·K) và nhiệt nóng chảy riêng λ = 25 kJ/kg. Tốc độ tối thiểu của viên đạn ngay trước va chạm để nó nóng chảy hoàn toàn bằng bao nhiêu m/s (làm tròn đến hàng đơn vị)?',
        answer: '357',
        unit: 'm/s',
        goi_y: 'Đổi λ = 25 000 J/kg. Cho 0,80 × (1/2)·m·v² = m·c·(327 − 127) + m·λ rồi rút gọn khối lượng m.',
        loi_giai: {
          ban_chat: 'Khi va chạm mềm đột ngột, phần cơ năng chuyển hóa thành nội năng ΔU phải đủ thực hiện cả 2 bước: nâng nhiệt độ chì từ 127 °C lên 327 °C và làm nóng chảy hoàn toàn ở 327 °C.',
          bien_doi: '0,8 × (1/2)·v² = 130 × (327 − 127) + 25 000 = 26 000 + 25 000 = 51 000 ⇒ 0,4·v² = 51 000 ⇒ v² = 127 500 ⇒ v ≈ 357,07 m/s ≈ 357 m/s.',
          dap_an: '357 (m/s).',
          bay: 'Quên đổi λ = 25 kJ/kg sang 25 000 J/kg hoặc quên cộng phần ẩn nhiệt nóng chảy λm.'
        }
      },
      {
        id: 'vdc_nhietke_sai',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Nhiệt kế thủy ngân chia vạch sai lệch',
        prompt: 'Một nhiệt kế thủy ngân chia vạch đều bị lệch chuẩn: khi nhúng vào nước đá đang tan ở áp suất tiêu chuẩn (0 °C) thì nhiệt kế chỉ 6 °C, còn khi nhúng vào hơi nước đang sôi (100 °C) thì nhiệt kế chỉ 96 °C. Hỏi ở nhiệt độ thực bằng bao nhiêu °C thì số chỉ trên nhiệt kế này trùng đúng với nhiệt độ thực của vật?',
        answer: '60',
        unit: '°C',
        goi_y: 'Vì cột thủy ngân nở tuyến tính nên tỉ số (t − 0)/(100 − 0) = (t\' − 6)/(96 − 6). Đặt t\' = t để giải.',
        loi_giai: {
          ban_chat: 'Hai thang đo tuyến tính đồng dạng qua 2 mốc cố định sẽ cắt nhau tại một điểm bất động (t = t\').',
          bien_doi: 't / 100 = (t\' − 6) / 90. Khi t\' = t: t / 100 = (t − 6) / 90 ⇒ 9t = 10(t − 6) ⇒ t = 60 °C.',
          dap_an: '60 (°C).',
          bay: 'Cộng nhầm độ lệch 0 °C (6 °C) vào mà không hiệu chỉnh lại độ dài mỗi vạch chia (90 khoảng lệch ứng với 100 °C thật).'
        }
      },
      {
        id: 'vdc_da_5pt_mt',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Các Sở GD 2025',
        nguon: 'Đề thi thử TN THPT 2025 — Cân bằng nhiệt nước đá có 5% tỏa nhiệt môi trường',
        prompt: 'Thả 100 g nước đá ở 0 °C vào một bình chứa 400 g nước ở 50 °C. Cho nhiệt dung riêng của nước c = 4200 J/(kg·K) và nhiệt nóng chảy riêng của nước đá λ = 3,3×10⁵ J/kg. Bỏ qua nhiệt dung của bình, nhưng trong quá trình trao đổi nhiệt, môi trường xung quanh đã nhận một nhiệt lượng bằng 5% tổng nhiệt lượng do 400 g nước nóng tỏa ra. Tính nhiệt độ cân bằng của hỗn hợp theo đơn vị °C (làm tròn đến 1 chữ số thập phân).',
        answer: '23,2',
        unit: '°C',
        goi_y: 'Luôn kiểm tra đá tan hết hay chưa trước khi giải: so sánh 95%·Q_tỏa_max(50→0 °C) với Q_tan_hết = λ·m_đá.',
        loi_giai: {
          ban_chat: 'Môi trường nhận 5% nhiệt lượng tỏa ra từ nước nóng nên chỉ 95% nhiệt lượng nước nóng tỏa ra được truyền cho nước đá.',
          bien_doi: 'Kiểm tra điều kiện tan hết: Q_tỏa_max = 0,4 × 4200 × 50 = 84 000 J ⇒ 0,95·Q_tỏa_max = 79 800 J > Q_tan = 0,1 × 3,3×10⁵ = 33 000 J ⇒ đá tan hết và t > 0 °C. Phương trình cân bằng: 33 000 + 0,1 × 4200 × t = 0,95 × 0,4 × 4200 × (50 − t) ⇒ 33 000 + 420t = 79 800 − 1596t ⇒ 2016t = 46 800 ⇒ t ≈ 23,214 °C ≈ 23,2 °C.',
          dap_an: '23,2 (°C).',
          bay: 'Quên bước nhân 0,95 cho cả phần chứa ẩn t ở vế phải, hoặc trừ nhầm 5% vào vế thu.'
        }
      },
      {
        id: 'vdc_da_am_nlk',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'hay_kho_vdc',
        tinh: 'Trường Chuyên 2025',
        nguon: 'Tuyển tập Đề Chuyên & Thi thử 2025 — Nước đá −10 °C trong nhiệt lượng kế nhôm (chưa tan hết)',
        prompt: 'Thả một cục nước đá có khối lượng 0,5 kg ở nhiệt độ −10 °C vào một bình nhiệt lượng kế bằng nhôm khối lượng 0,2 kg đang chứa 0,5 kg nước cùng ở nhiệt độ 15 °C. Biết nhiệt dung riêng của nước 4200 J/(kg·K), của nước đá 2100 J/(kg·K), của nhôm 880 J/(kg·K) và nhiệt nóng chảy riêng của nước đá λ = 3,3×10⁵ J/kg; bỏ qua sự trao đổi nhiệt với môi trường. Khi đạt cân bằng nhiệt, khối lượng nước đá CÒN LẠI chưa tan trong bình bằng bao nhiêu gam (làm tròn đến hàng đơn vị)?',
        answer: '428',
        unit: 'g',
        goi_y: 'Tính Q_tỏa_max khi nước + nhôm hạ về 0 °C, rồi trừ đi nhiệt lượng làm 0,5 kg đá ấm từ −10 °C lên 0 °C. Phần nhiệt dư còn lại quyết định lượng đá đã tan ⇒ lấy 500 g trừ đi lượng đã tan!',
        loi_giai: {
          ban_chat: 'Đây là bẫy cân bằng nhiệt kinh điển: tổng nhiệt lượng nước và vỏ nhiệt lượng kế tỏa ra khi hạ về 0 °C không đủ làm toàn bộ cục đá nóng chảy hết, nên cân bằng dừng ở 0 °C với hỗn hợp nước + đá.',
          bien_doi: 'Q_tỏa_max = (0,5 × 4200 + 0,2 × 880) × 15 = 2276 × 15 = 34 140 J. Nhiệt làm đá tăng từ −10 °C lên 0 °C: Q_đá1 = 0,5 × 2100 × 10 = 10 500 J. Nhiệt dư dùng để nóng chảy một phần đá ở 0 °C: Q_dư = 34 140 − 10 500 = 23 640 J < 0,5 × 3,3×10⁵ = 165 000 J ⇒ đá không tan hết, t_cb = 0 °C. Lượng đá đã tan: m_tan = 23 640 / (3,3×10⁵) ≈ 0,07164 kg = 71,64 g ⇒ khối lượng đá CÒN LẠI = 500 − 71,64 = 428,36 g ≈ 428 g.',
          dap_an: '428 (g).',
          bay: 'Bẫy 3 tầng: (1) giải thẳng giả sử tan hết sẽ ra nhiệt độ âm vô lí; (2) quên phần nhiệt m_nhôm·c_nhôm·Δt của nhiệt lượng kế; (3) tính ra lượng đã tan 72 g rồi điền nhầm thay vì lượng đá CÒN LẠI 428 g.'
        }
      }
    ]
  };

  global.LY_HAY_KHO_C1_C2 = LY_HAY_KHO_C1_C2;
})(window);
