/* Kho Bài tập Chương 1 & 2 trích từ Đề thi thử các Sở GD&ĐT & Trường chuyên hot 2025–2026 */
(function (global) {
  'use strict';

  var LY_DE_TINH_HOT_C1_C2 = {
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      totalQuestions: 28,
      updatedAt: '2026-11-24',
      note: '28 câu hỏi Chương 1 & 2 trích từ các đề thi thử THPTQG 2025–2026 của các Sở GD&ĐT và Trường chuyên hot trên cả nước.'
    },
    questions: [
      /* ================= PHẦN I: 7 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN ================= */
      {
        id: 'tinh_hn25_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội',
        nguon: 'Sở GD&ĐT Hà Nội — Khảo sát chất lượng Vật lí 12 (2025–2026)',
        prompt: 'Theo định luật Boyle, đối với một khối lượng khí lí tưởng xác định ở nhiệt độ không đổi thì:',
        options: [
          'áp suất tỉ lệ thuận với nghịch đảo của thể tích.',
          'thể tích tỉ lệ nghịch với nhiệt độ tuyệt đối.',
          'thể tích tỉ lệ thuận với nhiệt độ tuyệt đối.',
          'áp suất tỉ lệ thuận với thể tích.'
        ],
        answerIndex: 0,
        goi_y: 'Khi T = const và khối lượng khí không đổi, p·V = hằng số ⇒ p tỉ lệ nghịch với V (hay tỉ lệ thuận với 1/V).',
        loi_giai: {
          ban_chat: 'Định luật Boyle phát biểu cho một lượng khí lí tưởng xác định biến đổi đẳng nhiệt: áp suất tỉ lệ nghịch với thể tích (p·V = const).',
          bien_doi: 'Vì p = const · (1/V) nên p tỉ lệ thuận với nghịch đảo của thể tích (1/V).',
          dap_an: 'Chọn A (áp suất tỉ lệ thuận với nghịch đảo của thể tích).',
          bay: 'Đọc lướt cụm "tỉ lệ thuận" mà bỏ qua từ "nghịch đảo của thể tích" hoặc nhầm sang định luật Charles (đẳng áp).'
        }
      },
      {
        id: 'tinh_hn25_02',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội',
        nguon: 'Sở GD&ĐT Hà Nội — Khảo sát chất lượng Vật lí 12 (2025–2026)',
        prompt: 'Động năng tịnh tiến trung bình của phân tử khí lí tưởng ở nhiệt độ tuyệt đối T (với hằng số Boltzmann k) được xác định bởi công thức:',
        options: [
          'E_đ = (3/2)·k·T.',
          'E_đ = 2·k·T.',
          'E_đ = (1/2)·k·T.',
          'E_đ = (2/3)·k·T.'
        ],
        answerIndex: 0,
        goi_y: 'Mỗi bậc tự do tịnh tiến (3 phương Ox, Oy, Oz) đóng góp (1/2)kT cho động năng trung bình của phân tử khí lí tưởng.',
        loi_giai: {
          ban_chat: 'Trong mô hình động học phân tử chất khí (bỏ qua tương tác ngoài va chạm), chuyển động nhiệt hỗn loạn đẳng hướng theo 3 phương không gian làm động năng tịnh tiến trung bình tỉ lệ thuận với nhiệt độ tuyệt đối T.',
          bien_doi: 'E_đ = (1/2)·m·v²_tb = (3/2)·k·T (đơn vị J, với k = 1,38×10⁻²³ J/K, T đo bằng Kelvin).',
          dap_an: 'Chọn A (E_đ = (3/2)·k·T).',
          bay: 'Nhầm hệ số 3/2 với 2/3 (từ p = (2/3)μE_đ) hoặc 1/2.'
        }
      },
      {
        id: 'tinh_dn25_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Đà Nẵng',
        nguon: 'Sở GD&ĐT Đà Nẵng — Thi thử TN THPT 2025',
        prompt: 'Nén đẳng nhiệt một khối lượng khí lí tưởng xác định từ thể tích 9 lít xuống còn 4 lít thì áp suất của khối khí tăng lên bao nhiêu lần?',
        options: [
          '4,40 lần.',
          '1,40 lần.',
          '2,25 lần.',
          '2,50 lần.'
        ],
        answerIndex: 2,
        goi_y: 'Quá trình đẳng nhiệt (T = const) ⇒ p₁V₁ = p₂V₂ ⇒ p₂/p₁ = V₁/V₂.',
        loi_giai: {
          ban_chat: 'Ở nhiệt độ không đổi, lượng khí lí tưởng xác định tuân theo định luật Boyle: thể tích giảm bao nhiêu lần thì áp suất tăng bấy nhiêu lần.',
          bien_doi: 'p₂ / p₁ = V₁ / V₂ = 9 / 4 = 2,25 lần.',
          dap_an: 'Chọn C (2,25 lần).',
          bay: 'Chia ngược 4/9 hoặc nhầm lẫn giữa phần trăm tăng thêm và số lần tăng.'
        }
      },
      {
        id: 'tinh_qn25_01',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Quảng Nam',
        nguon: 'Sở GD&ĐT Quảng Nam — Thi thử TN THPT 2025',
        prompt: 'Một bình kín chứa khí oxygen (O₂) có thể tích 150 ml ở áp suất 450 kPa. Coi nhiệt độ không đổi và khí là khí lí tưởng, khi áp suất khối khí giảm xuống còn 150 kPa thì thể tích của khối khí bằng:',
        options: [
          '50 ml.',
          '450 ml.',
          '100 ml.',
          '300 ml.'
        ],
        answerIndex: 1,
        goi_y: 'Áp suất giảm 450/150 = 3 lần trong quá trình đẳng nhiệt ⇒ thể tích tăng tương ứng 3 lần.',
        loi_giai: {
          ban_chat: 'Lượng khí xác định biến đổi đẳng nhiệt nên tuân theo định luật Boyle p₁V₁ = p₂V₂ (khi chọn cùng đơn vị hai vế thì V₂ cũng có đơn vị ml).',
          bien_doi: 'V₂ = V₁ · (p₁ / p₂) = 150 × (450 / 150) = 150 × 3 = 450 ml.',
          dap_an: 'Chọn B (450 ml).',
          bay: 'Nhầm tỉ lệ thuận nên lấy 150 / 3 = 50 ml (áp suất giảm mà thể tích lại giảm theo là vô lí).'
        }
      },
      {
        id: 'tinh_th25_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Thanh Hóa',
        nguon: 'Sở GD&ĐT Thanh Hóa — Thi thử TN THPT 2025',
        prompt: 'Nội năng của một hệ vật lí bất kì (rắn, lỏng hoặc khí thực) phụ thuộc vào đại lượng nào sau đây?',
        options: [
          'Chỉ phụ thuộc vào nhiệt độ của hệ.',
          'Phụ thuộc vào nhiệt độ và thể tích của hệ.',
          'Chỉ phụ thuộc vào khối lượng riêng của hệ.',
          'Phụ thuộc vào tốc độ chuyển động cơ học của cả hệ.'
        ],
        answerIndex: 1,
        goi_y: 'Nội năng gồm tổng động năng phân tử (gắn với nhiệt độ) và thế năng tương tác phân tử (gắn với khoảng cách/thể tích).',
        loi_giai: {
          ban_chat: 'Trong một hệ vật lí bất kì (rắn, lỏng, khí thực), nội năng là tổng động năng chuyển động nhiệt và thế năng tương tác giữa các phân tử cấu tạo nên vật. Động năng phụ thuộc nhiệt độ, còn thế năng phụ thuộc khoảng cách trung bình giữa các phân tử tức là thể tích.',
          bien_doi: 'U = f(T, V). (Lưu ý: chỉ riêng mô hình khí lí tưởng bỏ qua thế năng tương tác nên nội năng mới chỉ phụ thuộc T).',
          dap_an: 'Chọn B (Phụ thuộc vào nhiệt độ và thể tích của hệ).',
          bay: 'Áp dụng nhầm kết quả của khí lí tưởng ("chỉ phụ thuộc nhiệt độ") cho vật bất kì (rắn, lỏng, khí thực), hoặc nhầm cơ năng toàn vật với nội năng.'
        }
      },
      {
        id: 'tinh_vp25_01',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Vĩnh Phúc',
        nguon: 'Sở GD&ĐT Vĩnh Phúc — Thi thử TN THPT 2025',
        prompt: 'Biết nhiệt nóng chảy riêng của nước đá ở 0 °C là λ = 3,3×10⁵ J/kg. Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 30 g nước đá ở 0 °C bằng:',
        options: [
          '9,9×10³ J.',
          '9,9×10⁶ J.',
          '1,1×10⁴ J.',
          '3,3×10⁴ J.'
        ],
        answerIndex: 0,
        goi_y: 'Đổi 30 g = 0,03 kg rồi áp dụng Q = λ·m.',
        loi_giai: {
          ban_chat: 'Khi ở đúng nhiệt độ nóng chảy 0 °C, toàn bộ nhiệt lượng cung cấp dùng để phá vỡ liên kết mạng tinh thể nước đá mà không làm tăng nhiệt độ.',
          bien_doi: 'm = 30 g = 0,03 kg ⇒ Q = λ·m = 3,3×10⁵ × 0,03 = 9900 J = 9,9×10³ J.',
          dap_an: 'Chọn A (9,9×10³ J).',
          bay: 'Quên đổi 30 g sang kg nên nhân thẳng ra 9,9×10⁶ J (đáp án B).'
        }
      },
      {
        id: 'tinh_hn25_03',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội & Miền Bắc',
        nguon: 'Sở GD&ĐT Hà Nội & Các tỉnh miền Bắc — Ôn tập thi thử TN THPT 2025',
        prompt: 'Vì sao trong phòng thí nghiệm không dùng nhiệt kế rượu để đo nhiệt độ của nước đang sôi ở áp suất tiêu chuẩn (100 °C)?',
        options: [
          'Vì khối lượng riêng của rượu lớn hơn nước.',
          'Vì rượu đông đặc ở nhiệt độ lớn hơn 0 °C.',
          'Vì rượu sôi ở khoảng 78–80 °C, thấp hơn nhiệt độ sôi của nước.',
          'Vì rượu không giãn nở vì nhiệt khi tăng nhiệt độ.'
        ],
        answerIndex: 2,
        goi_y: 'Chất lỏng nhiệt kế phải luôn ở thể lỏng trong toàn dải nhiệt độ cần đo; nếu sôi trước 100 °C thì cột chất lỏng hóa hơi và hỏng nhiệt kế.',
        loi_giai: {
          ban_chat: 'Giới hạn đo trên của nhiệt kế chất lỏng không thể vượt quá nhiệt độ sôi của chất lỏng bên trong ống (ở áp suất làm việc).',
          bien_doi: 'Ở áp suất tiêu chuẩn, rượu (ethanol) sôi ở khoảng 78–80 °C, thấp hơn nhiệt độ nước đang sôi (100 °C) nên rượu sẽ sôi và bay hơi, có thể làm vỡ ống thủy tinh trước khi đo tới 100 °C.',
          dap_an: 'Chọn C (Vì rượu sôi ở khoảng 78–80 °C, thấp hơn nhiệt độ sôi của nước).',
          bay: 'Nhầm điểm đông đặc rất thấp của rượu (−114 °C, dùng đo xứ lạnh) với điểm sôi.'
        }
      },

      /* ================= PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG/SAI (16 Ý) ================= */
      {
        id: 'tinh_bg25_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Bắc Giang',
        nguon: 'Sở GD&ĐT Bắc Giang — Thi thử TN THPT 2025',
        stem: 'Thí nghiệm đo nhiệt nóng chảy riêng λ của nước đá ở 0 °C bằng ấm điện có công suất không đổi P = 930 W và theo dõi nhiệt độ theo thời gian.',
        items: [
          {
            label: 'a',
            text: 'Nếu bỏ qua nhiệt dung của ấm và sự tỏa nhiệt ra môi trường thì nhiệt lượng nước đá thu để tan hoàn toàn bằng điện năng ấm cung cấp.',
            answer: true
          },
          {
            label: 'b',
            text: 'Thời gian nước đá nóng chảy hoàn toàn được xác định từ độ dài đoạn nằm ngang ở mức 0 °C trên đồ thị nhiệt độ – thời gian.',
            answer: true
          },
          {
            label: 'c',
            text: 'Khi bỏ qua hao phí nhiệt, nhiệt nóng chảy riêng được xác định theo công thức λ = P·t / m.',
            answer: true
          },
          {
            label: 'd',
            text: 'Nếu trong thực tế có hao phí nhiệt ra môi trường thì giá trị λ_đo = P·t / m thu được sẽ nhỏ hơn giá trị lí thuyết.',
            answer: false
          }
        ],
        goi_y: 'Khi có tỏa nhiệt ra môi trường, một phần điện năng P·t bị thất thoát nên thời gian t để đá tan hết phải LỚN HƠN lí thuyết ⇒ P·t/m sẽ lớn hơn hay nhỏ hơn?',
        loi_giai: {
          ban_chat: 'Trong giai đoạn nước đá ở 0 °C chuyển sang nước lỏng ở 0 °C, nhiệt độ không đổi (đoạn nằm ngang trên đồ thị T–t). Bảo toàn năng lượng: Q_điện = Q_tan + Q_hao phí.',
          bien_doi: 'a) Bỏ qua hao phí và nhiệt dung ấm ⇒ Q_thu = A_điện = P·t (Đúng). b) Trong khi đang tan ở 0 °C, t không đổi ⇒ đọc thời gian Δt ngay trên đoạn nằm ngang ở 0 °C (Đúng). c) λ·m = P·t ⇒ λ = P·t / m (Đúng). d) Thực tế có hao phí Q_hp > 0 ⇒ P·t = λ_thật·m + Q_hp > λ_thật·m ⇒ λ_đo = P·t / m > λ_thật (lớn hơn lí thuyết, không phải nhỏ hơn) (Sai).',
          dap_an: 'a) Đúng | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Ý d) dễ suy đoán ngược vì nghĩ hao phí làm mất nhiệt thì kết quả đo nhỏ hơn, nhưng thực chất mẫu số m giữ nguyên còn thời gian t đo được bị kéo dài ra nên λ_đo = P·t/m lớn hơn.'
        }
      },
      {
        id: 'tinh_na25_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Nghệ An',
        nguon: 'Cụm Liên trường THPT Nghệ An — Thi thử TN THPT 2025',
        stem: 'Trong thí nghiệm ấn nhanh pít-tông nén một khối khí lí tưởng chứa trong xi-lanh kín có gắn cảm biến nhiệt độ.',
        items: [
          {
            label: 'a',
            text: 'Khi ấn nhanh pít-tông xuống, thể tích khí giảm và áp suất khối khí tăng lên.',
            answer: true
          },
          {
            label: 'b',
            text: 'Do ngoại lực thực hiện công lên khí (A > 0) và nén nhanh nên trao đổi nhiệt với môi trường không đáng kể (Q ≈ 0), nội năng khối khí tăng lên.',
            answer: true
          },
          {
            label: 'c',
            text: 'Cảm biến nhiệt độ gắn trong xi-lanh cho thấy nhiệt độ khối khí giảm xuống trong quá trình nén nhanh.',
            answer: false
          },
          {
            label: 'd',
            text: 'Tổng động năng chuyển động nhiệt của các phân tử khí trong xi-lanh tăng lên.',
            answer: true
          }
        ],
        goi_y: 'Nén nhanh ⇒ khí nhận công (A > 0) và gần như không kịp truyền nhiệt (Q ≈ 0) ⇒ ΔU = A + Q > 0 ⇒ nội năng và nhiệt độ tăng hay giảm?',
        loi_giai: {
          ban_chat: 'Nén nhanh (quá trình đoạn nhiệt gần đúng) làm ngoại lực thực hiện công dương lên khí, toàn bộ công chuyển hóa thành nội năng (với khí lí tưởng là tổng động năng tịnh tiến của các phân tử), khiến nhiệt độ tăng vọt (nguyên lí bật lửa khí nén).',
          bien_doi: 'a) Thể tích bị ép giảm ⇒ mật độ tăng và va chạm mạnh hơn ⇒ áp suất tăng (Đúng). b) Theo quy ước GDPT 2018: khí bị nén nên A > 0, Q ≈ 0 ⇒ ΔU = A + Q ≈ A > 0 (nội năng tăng) (Đúng). c) Nội năng khí lí tưởng U tỉ lệ với T ⇒ T phải TĂNG lên, không thể giảm (Sai). d) Vì thế năng tương tác phân tử khí lí tưởng bằng 0, ΔU > 0 chính là tổng động năng chuyển động nhiệt tăng lên (Đúng).',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Nhầm thí nghiệm nén nhanh với thí nghiệm Boyle nén thật chậm (đẳng nhiệt).'
        }
      },
      {
        id: 'tinh_mt25_ds',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Đà Nẵng – Quảng Nam',
        nguon: 'Cụm Sở GD&ĐT miền Trung (Đà Nẵng / Quảng Nam) — Thi thử TN THPT 2025',
        stem: 'Vào mùa đông lạnh, một học sinh xoa nhanh hai lòng bàn tay vào nhau một lúc thấy tay ấm lên, sau đó áp hai bàn tay ấm vào má.',
        items: [
          {
            label: 'a',
            text: 'Khi xoa hai bàn tay vào nhau, nội năng của da tay tăng chủ yếu do quá trình thực hiện công của lực ma sát.',
            answer: true
          },
          {
            label: 'b',
            text: 'Bàn tay ấm lên trong lúc xoa chủ yếu do nhận nhiệt lượng truyền từ không khí lạnh xung quanh.',
            answer: false
          },
          {
            label: 'c',
            text: 'Khi áp bàn tay ấm vào má lạnh, nhiệt lượng tự truyền từ má sang bàn tay cho đến khi cân bằng nhiệt.',
            answer: false
          },
          {
            label: 'd',
            text: 'Trong cả hai quá trình, tổng năng lượng của hệ (cơ năng và nội năng) luôn được bảo toàn.',
            answer: true
          }
        ],
        goi_y: 'Phân biệt hai cách làm biến đổi nội năng (thực hiện công vs truyền nhiệt) và chiều tự truyền nhiệt giữa vật nóng với vật lạnh.',
        loi_giai: {
          ban_chat: 'Xoa tay làm chuyển hóa cơ năng thành nội năng qua công lực ma sát; áp tay ấm vào má lạnh là sự truyền nhiệt tự phát từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.',
          bien_doi: 'a) Đúng: lực ma sát thực hiện công chuyển cơ năng thành nội năng da tay (A > 0 ⇒ ΔU > 0). b) Sai: không khí lạnh có nhiệt độ thấp hơn da tay nên không thể tự truyền nhiệt làm tay nóng thêm; tay chỉ nhận công ma sát (và có phần tỏa nhiệt ra khí lạnh). c) Sai: chiều tự truyền nhiệt luôn từ vật nóng hơn (bàn tay ấm) sang vật lạnh hơn (má), không phải ngược lại. d) Đúng theo định luật bảo toàn và chuyển hóa năng lượng.',
          dap_an: 'a) Đúng | b) Sai | c) Sai | d) Đúng.',
          bay: 'Đọc vội ý c) thấy chữ "cho đến khi cân bằng nhiệt" rồi bỏ sót chiều truyền "từ má sang bàn tay".'
        }
      },
      {
        id: 'tinh_nd25_ds',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Nam Định – Hải Dương',
        nguon: 'Sở GD&ĐT Nam Định & Hải Dương — Thi thử TN THPT 2025',
        stem: 'Xét một lượng khí lí tưởng xác định biến đổi qua các trạng thái cân bằng.',
        items: [
          {
            label: 'a',
            text: 'Nếu tăng nhiệt độ tuyệt đối của khối khí lên gấp đôi trong quá trình đẳng tích thì áp suất khí tăng lên gấp đôi.',
            answer: true
          },
          {
            label: 'b',
            text: 'Nội năng của một lượng khí lí tưởng xác định phụ thuộc vào cả nhiệt độ và thể tích của khối khí.',
            answer: false
          },
          {
            label: 'c',
            text: 'Nếu khối khí vừa nhận nhiệt lượng vừa giãn nở thực hiện công thì nội năng của khối khí chắc chắn tăng.',
            answer: false
          },
          {
            label: 'd',
            text: 'Trong hệ tọa độ (p – V), đường biểu diễn quá trình đẳng nhiệt của khối khí là một nhánh của đường hypebol.',
            answer: true
          }
        ],
        goi_y: 'Chú ý phân biệt nội năng khí lí tưởng vs khí thực; xét dấu ΔU = A + Q khi Q > 0 và A < 0.',
        loi_giai: {
          ban_chat: 'Lượng khí lí tưởng bỏ qua thế năng tương tác phân tử nên nội năng chỉ phụ thuộc nhiệt độ T; đẳng tích thì p/T = const; đẳng nhiệt trong (p–V) có p = const/V.',
          bien_doi: 'a) Đúng: V = const ⇒ p₂/p₁ = T₂/T₁ = 2. b) Sai: với KHÍ LÍ TƯỞNG, thế năng tương tác bằng 0 nên nội năng CHỈ phụ thuộc vào nhiệt độ (và số mol), không phụ thuộc thể tích. c) Sai: nhận nhiệt (Q > 0) và giãn nở thực hiện công (A < 0) ⇒ ΔU = A + Q có thể dương, âm hoặc bằng 0 tùy độ lớn |A| so với Q. d) Đúng: p·V = const (V > 0, p > 0) là một nhánh của đường hypebol vuông.',
          dap_an: 'a) Đúng | b) Sai | c) Sai | d) Đúng.',
          bay: 'Ý b) bẫy ngược so với câu Thanh Hóa (khí thực phụ thuộc T, V còn khí lí tưởng chỉ phụ thuộc T); ý c) cứ thấy "nhận nhiệt" là kết luận nội năng tăng.'
        }
      },

      /* ================= PHẦN III: 17 CÂU TRẢ LỜI NGẮN (ĐÁP ÁN <= 4 KÝ TỰ) ================= */
      {
        id: 'tinh_bd25_tln1',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Bình Dương',
        nguon: 'Sở GD&ĐT Bình Dương — Thi thử TN THPT 2025',
        prompt: 'Cung cấp nhiệt lượng 20 040 J cho 150 g nước đá ở 0 °C. Biết nhiệt nóng chảy riêng của nước đá là λ = 3,34×10⁵ J/kg và bỏ qua hao phí nhiệt. Tính tỉ số giữa khối lượng nước đá còn lại chưa tan và khối lượng nước đá đã tan.',
        answer: '1,5',
        unit: 'lần',
        goi_y: 'Tính m_tan = Q / λ, rồi lấy m_còn = m_đầu − m_tan và lập tỉ số m_còn / m_tan.',
        loi_giai: {
          ban_chat: 'Vì nước đá đã ở sẵn 0 °C nên toàn bộ nhiệt lượng 20 040 J dùng để làm nóng chảy một phần lượng đá.',
          bien_doi: 'm_tan = Q / λ = 20 040 / (3,34×10⁵) = 0,06 kg = 60 g. Khối lượng đá còn lại chưa tan: m_còn = 150 − 60 = 90 g. Tỉ số m_còn / m_tan = 90 / 60 = 1,5.',
          dap_an: '1,5',
          bay: 'Chia ngược m_tan / m_còn = 60/90 = 0,67 hoặc lấy m_tan / m_đầu = 0,4.'
        }
      },
      {
        id: 'tinh_nb25_tln1',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Ninh Bình',
        nguon: 'Sở GD&ĐT Ninh Bình — Thi thử TN THPT 2025',
        prompt: 'Để pha trà đá, người ta thả m (kg) nước đá ở 0 °C vào 0,250 kg nước trà nóng ở 80 °C để nhiệt độ khi cân bằng nhiệt là 10 °C. Cho nhiệt dung riêng của nước và nước trà đều bằng c = 4200 J/(kg·K), nhiệt nóng chảy riêng của nước đá là λ = 3,33×10⁵ J/kg. Trong quá trình này, nhiệt lượng cốc trà đá nhận thêm từ môi trường xung quanh bằng 10% nhiệt lượng mà phần nước đá tan ra thu vào để tăng nhiệt độ từ 0 °C lên 10 °C. Tính khối lượng m của nước đá (đơn vị kg, làm tròn đến hàng phần trăm).',
        answer: '0,20',
        unit: 'kg',
        goi_y: 'Cẩn thận câu chữ: nhiệt lượng từ môi trường bằng 10% nhiệt lượng phần nước đá tan TĂNG TỪ 0 °C LÊN 10 °C (tức 0,1·m·c·10), góp cùng nhiệt của nước trà nóng để làm tan và làm nóng nước đá.',
        loi_giai: {
          ban_chat: 'Cân bằng nhiệt trên hệ cô lập mở rộng: tổng nhiệt lượng nước trà tỏa ra và nhiệt lượng nhận thêm từ môi trường bằng tổng nhiệt lượng nước đá thu để nóng chảy hoàn toàn ở 0 °C rồi tăng lên 10 °C.',
          bien_doi: 'Q_tỏa_trà = 0,250 × 4200 × (80 − 10) = 73 500 J. Nhiệt nước đá thu: Q_thu = m·(λ + c·10) = m·(333 000 + 42 000) = 375 000·m. Nhiệt nhận từ môi trường: Q_mt = 0,10 × (m·c·10) = 4200·m. Phương trình cân bằng nhiệt: Q_tỏa_trà + Q_mt = Q_thu ⇒ 73 500 + 4200·m = 375 000·m ⇒ 370 800·m = 73 500 ⇒ m ≈ 0,1982 kg ≈ 0,20 kg.',
          dap_an: '0,20 (kg). (Nhập 0,2 hoặc 0,20 đều đúng giá trị số).',
          bay: 'Tính nhầm Q_mt = 10% của toàn bộ (λm + mcΔt), hoặc nhầm chiều cộng sang vế thu nhiệt.'
        }
      },
      {
        id: 'tinh_nb25_tln2',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D5',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Ninh Bình',
        nguon: 'Sở GD&ĐT Ninh Bình — Thi thử TN THPT 2025',
        prompt: 'Một chuông lặn hình trụ tiết diện đều, hở đáy, có chiều cao H = 2 m được thả chìm thẳng đứng xuống đáy một hồ nước sâu D = 8 m (tính từ mặt thoáng tới đáy chuông). Giả sử nhiệt độ không khí trong chuông không đổi, áp suất khí quyển p₀ = 10⁵ Pa, khối lượng riêng của nước ρ = 10³ kg/m³ và g = 10 m/s². Khi chuông chạm đáy hồ, độ cao h của cột nước dâng lên bên trong chuông bằng bao nhiêu mét? (Làm tròn đến 2 chữ số thập phân).',
        answer: '0,83',
        unit: 'm',
        goi_y: 'Áp suất khí bị nhốt trong chuông ở đáy bằng áp suất thủy tĩnh tại mặt phân cách khí–nước bên trong chuông: p₂ = p₀ + ρ·g·(D − h). Dùng định luật Boyle p₀·H·S = p₂·(H − h)·S.',
        loi_giai: {
          ban_chat: 'Khi chuông chìm xuống, nước dâng vào bên trong một đoạn h, nén cột không khí còn chiều cao (H − h) tại độ sâu (D − h) dưới mặt thoáng ở nhiệt độ không đổi.',
          bien_doi: 'Quy đổi 10⁵ Pa tương đương ρ·g·10 (m nước). Phương trình Boyle (khử tiết diện S): p₀·H = [p₀ + ρ·g·(D − h)]·(H − h) ⇒ 10 × 2 = [10 + (8 − h)]·(2 − h) ⇒ 20 = (18 − h)(2 − h) = 36 − 20h + h² ⇒ h² − 20h + 16 = 0 ⇒ h = 10 − √84 ≈ 0,8348 m ≈ 0,83 m (loại nghiệm 10 + √84 > H).',
          dap_an: '0,83 (m).',
          bay: 'Lấy áp suất khí bằng p₀ + ρ·g·D mà quên trừ đoạn h nước đã dâng lên trong chuông (khi đó ra h = 2 − 20/18 = 0,89 m là sai bản chất).'
        }
      },
      {
        id: 'tinh_hp25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hải Phòng',
        nguon: 'Sở GD&ĐT Hải Phòng — Thi thử TN THPT 2025',
        prompt: 'Một máy hút chân không có thể tích xi-lanh mỗi lần hút là V₀ = 1 lít được dùng để hút không khí ra khỏi một túi kín có thể tích không đổi V = 1 lít. Áp suất ban đầu trong túi là p₁ = 512 mmHg. Coi nhiệt độ không khí không đổi trong suốt quá trình hút. Sau 3 lần hút liên tiếp, áp suất không khí còn lại trong túi bằng bao nhiêu mmHg?',
        answer: '64',
        unit: 'mmHg',
        goi_y: 'Mỗi lần pít-tông kéo ra, lượng khí trong bình thể tích V giãn đẳng nhiệt sang tổng thể tích (V + V₀), sau đó van đóng để bơm đẩy khí trong V₀ ra ngoài ⇒ p_k = p_{k-1} · V / (V + V₀).',
        loi_giai: {
          ban_chat: 'Qua mỗi chu trình hút đẳng nhiệt, lượng khí còn lại trong túi giảm theo cấp số nhân với công bội V / (V + V₀).',
          bien_doi: 'Vì V = 1 lít và V₀ = 1 lít nên tỉ số giảm sau 1 lần hút là V / (V + V₀) = 1 / (1 + 1) = 1/2. Sau n = 3 lần hút: p₃ = p₁ · [V / (V + V₀)]³ = 512 × (1/2)³ = 512 / 8 = 64 mmHg.',
          dap_an: '64 (mmHg).',
          bay: 'Chia tuyến tính p₁ − 3·Δp hoặc dùng V / (V + 3V₀) = 512 / 4 = 128 mmHg (sai vì mỗi lần hút pít-tông chỉ giãn thể tích thêm V₀ rồi xả bỏ trước lần hút sau).'
        }
      },
      {
        id: 'tinh_vp25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Vĩnh Phúc',
        nguon: 'Sở GD&ĐT Vĩnh Phúc — Thi thử TN THPT 2025',
        prompt: 'Một phòng học có kích thước 4 m × 6 m × 3,6 m, cửa mở hé nên áp suất không khí trong phòng luôn bằng áp suất khí quyển p = 1,013×10⁵ Pa. Ban đầu máy lạnh đang bật ở 25 °C; sau khi tắt máy lạnh, nhiệt độ không khí trong phòng tăng lên đến 30 °C. Biết khối lượng mol của không khí M = 29 g/mol, R = 8,31 J/(mol·K). Tính khối lượng không khí đã thoát ra khỏi phòng (đơn vị kg, làm tròn đến 2 chữ số thập phân).',
        answer: '1,69',
        unit: 'kg',
        goi_y: 'Phòng cố định thể tích V và mở hé cửa nên p không đổi ⇒ khi T tăng, số mol khí trong phòng giảm từ n₁ xuống n₂ theo pV = (m/M)RT.',
        loi_giai: {
          ban_chat: 'Phòng không kín nên số mol khí thay đổi (khí giãn nở tràn ra ngoài), không dùng định luật Charles cho lượng khí ban đầu nguyên khối mà dùng trực tiếp phương trình Clapeyron cho lượng khí chứa trong phòng ở mỗi trạng thái.',
          bien_doi: 'V = 4 × 6 × 3,6 = 86,4 m³; M = 0,029 kg/mol; T₁ = 25 + 273 = 298 K; T₂ = 30 + 273 = 303 K. Khối lượng khí ban đầu và lúc sau: m₁ = pVM/(RT₁), m₂ = pVM/(RT₂) ⇒ Δm = m₁ − m₂ = (p·V·M / R)·(1/T₁ − 1/T₂) = (1,013×10⁵ × 86,4 × 0,029 / 8,31) × (1/298 − 1/303) = 30544,98 × 5 / (298 × 303) ≈ 1,6913 kg ≈ 1,69 kg.',
          dap_an: '1,69 (kg).',
          bay: 'Quên đổi M = 29 g/mol sang 0,029 kg/mol dẫn tới kết quả lớn gấp 1000 lần (1691 kg).'
        }
      },
      {
        id: 'tinh_pbc25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Nghệ An (Chuyên Phan Bội Châu)',
        nguon: 'Trường THPT Chuyên Phan Bội Châu (Nghệ An) — Thi thử TN THPT 2025',
        prompt: 'Một ô tô chạy trên cao tốc Vinh – Hà Nội. Buổi sáng ở nhiệt độ 27 °C, áp suất không khí trong lốp xe đo được là 240 kPa. Đến trưa, nhiệt độ không khí trong lốp tăng lên 42 °C. Coi thể tích lốp xe không đổi và không khí trong lốp là khí lí tưởng, áp suất không khí trong lốp lúc trưa bằng bao nhiêu kPa?',
        answer: '252',
        unit: 'kPa',
        goi_y: 'Thể tích và lượng khí trong lốp không đổi ⇒ quá trình đẳng tích p₁/T₁ = p₂/T₂ với T(K) = t(°C) + 273.',
        loi_giai: {
          ban_chat: 'Khi coi lốp xe không giãn nở, khối khí trong lốp biến đổi đẳng tích nên áp suất tỉ lệ thuận với nhiệt độ tuyệt đối T.',
          bien_doi: 'T₁ = 27 + 273 = 300 K; T₂ = 42 + 273 = 315 K ⇒ p₂ = p₁·(T₂ / T₁) = 240 × (315 / 300) = 252 kPa.',
          dap_an: '252 (kPa).',
          bay: 'Thay trực tiếp độ °C vào p₁/t₁ = p₂/t₂ ra 240 × 42 / 27 = 373,3 kPa.'
        }
      },
      {
        id: 'tinh_pbc25_tln2',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Nghệ An (Chuyên Phan Bội Châu)',
        nguon: 'Trường THPT Chuyên Phan Bội Châu (Nghệ An) — Thi thử TN THPT 2025',
        prompt: 'Tiếp nối tình huống lốp ô tô ở 42 °C, coi không khí trong lốp là khí lí tưởng có khối lượng mol M = 29 g/mol, R = 8,31 J/(mol·K). Tốc độ căn quân phương (v_rms) của các phân tử khí trong lốp ở 42 °C bằng bao nhiêu m/s? (Làm tròn đến hàng đơn vị).',
        answer: '520',
        unit: 'm/s',
        goi_y: 'Từ (1/2)m₀v²_rms = (3/2)kT và k·N_A = R, rút ra v_rms = √(3RT / M) với M tính bằng kg/mol.',
        loi_giai: {
          ban_chat: 'Tốc độ căn quân phương v_rms = √(v²_tb) phụ thuộc trực tiếp vào căn bậc hai nhiệt độ tuyệt đối T và nghịch đảo căn bậc hai khối lượng mol M.',
          bien_doi: 'T = 42 + 273 = 315 K; M = 29 g/mol = 0,029 kg/mol ⇒ v_rms = √(3 × 8,31 × 315 / 0,029) = √(7852,95 / 0,029) ≈ √(270 791,38) ≈ 520,38 m/s ≈ 520 m/s.',
          dap_an: '520 (m/s).',
          bay: 'Quên đổi M = 29 g/mol → 0,029 kg/mol (dẫn đến lệch √1000 ≈ 31,6 lần còn 16,5 m/s) hoặc quên hệ số 3.'
        }
      },
      {
        id: 'tinh_th25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Thanh Hóa',
        nguon: 'Sở GD&ĐT Thanh Hóa — Thi thử TN THPT 2025',
        prompt: 'Một nồi áp suất chứa khí ở nhiệt độ 20 °C có áp suất 1,5 atm. Van an toàn của nồi được thiết kế sẽ mở khi áp suất bên trong đạt 9 atm. Coi thể tích khí trong nồi không đổi và bỏ qua sự bay hơi làm thay đổi số mol khí. Nhiệt độ khí trong nồi khi van bắt đầu mở bằng bao nhiêu °C?',
        answer: '1485',
        unit: '°C',
        goi_y: 'Quá trình đẳng tích p₁/T₁ = p₂/T₂. Nhớ trừ đi 273 sau khi tìm T₂ để đổi sang °C.',
        loi_giai: {
          ban_chat: 'Trước khi van mở, thể tích nồi kín không đổi nên áp suất khí tỉ lệ thuận với nhiệt độ tuyệt đối T.',
          bien_doi: 'T₁ = 20 + 273 = 293 K ⇒ T₂ = T₁ · (p₂ / p₁) = 293 × (9 / 1,5) = 293 × 6 = 1758 K ⇒ t₂ = 1758 − 273 = 1485 °C.',
          dap_an: '1485 (°C).',
          bay: 'Quên trừ 273 nên điền nhầm nhiệt độ Kelvin 1758, hoặc lấy thẳng 20 × 6 = 120 °C.'
        }
      },
      {
        id: 'tinh_hn25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội',
        nguon: 'Sở GD&ĐT Hà Nội — Khảo sát chất lượng Vật lí 12 (2025)',
        prompt: 'Một bình chứa lớn đựng khí hydrogen (H₂) ở áp suất 1 atm và nhiệt độ 20 °C. Để nạp khí từ bình lớn vào một bình nhỏ thể tích 20 lít (ban đầu là chân không) tới áp suất 25 atm ở cùng nhiệt độ 20 °C thì cần lấy ra từ bình lớn một thể tích khí (đo ở 1 atm, 20 °C) bằng bao nhiêu lít?',
        answer: '500',
        unit: 'lít',
        goi_y: 'Lượng khí được nạp đi từ (p₁ = 1 atm, V₁) sang trạng thái (p₂ = 25 atm, V₂ = 20 lít) ở cùng nhiệt độ 20 °C ⇒ áp dụng định luật Boyle p₁V₁ = p₂V₂.',
        loi_giai: {
          ban_chat: 'Bình nhỏ ban đầu là chân không và quá trình nén/nạp diễn ra đẳng nhiệt tại 20 °C nên bảo toàn tích p·V cho lượng khí được nạp vào bình nhỏ.',
          bien_doi: 'p₁ · V₁ = p₂ · V₂ ⇒ 1 · V₁ = 25 × 20 ⇒ V₁ = 500 lít.',
          dap_an: '500 (lít).',
          bay: 'Nếu bình nhỏ KHÔNG phải chân không (có sẵn khí ở 1 atm) thì phải trừ lượng khí ban đầu; ở đây đề nêu rõ "ban đầu là chân không" nên V₁ = 500 lít.'
        }
      },
      {
        id: 'tinh_hn25_tln2',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D2',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội & Miền Bắc',
        nguon: 'Sở GD&ĐT Hà Nội & Các tỉnh miền Bắc — Thi thử TN THPT 2025',
        prompt: 'Người ta truyền nhiệt lượng 1,5 J cho một khối khí trong xi-lanh đặt nằm ngang. Khí nở ra đẩy pít-tông chuyển động đều đi một đoạn 5 cm, thắng lực ma sát cản trở có độ lớn 20 N. Tính độ biến thiên nội năng ΔU của khối khí theo đơn vị jun (J).',
        answer: '0,5',
        unit: 'J',
        goi_y: 'Khí truyền nhận nhiệt: Q = +1,5 J. Khí đẩy pít-tông giãn nở ⇒ khí THỰC HIỆN công nên A < 0: A = −F·s (nhớ đổi 5 cm = 0,05 m). Áp dụng ΔU = A + Q.',
        loi_giai: {
          ban_chat: 'Theo Định luật I NĐLH chuẩn GDPT 2018: ΔU = A + Q. Pít-tông chuyển động đều nên lực đẩy khí cân bằng lực cản 20 N; do khí giãn nở nên công khí nhận có dấu âm.',
          bien_doi: 'Q = +1,5 J; s = 5 cm = 0,05 m ⇒ |A| = F·s = 20 × 0,05 = 1,0 J ⇒ A = −1,0 J ⇒ ΔU = A + Q = −1,0 + 1,5 = 0,5 J.',
          dap_an: '0,5 (J).',
          bay: 'Quên đổi 5 cm sang mét hoặc cộng nhầm +1,0 J ra 2,5 J.'
        }
      },
      {
        id: 'tinh_cd25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hà Nội / Nghệ An',
        nguon: 'Đề thi thử 2025 các Sở GD&ĐT (Hà Nội / Nghệ An) — Bài toán Khinh khí cầu',
        prompt: 'Một khinh khí cầu có tổng khối lượng vỏ, khoang và hành khách là m₀ = 450 kg, thể tích khoang khí V = 3000 m³ có lỗ hở thông với khí quyển để áp suất bên trong luôn bằng áp suất bên ngoài. Không khí bên ngoài ở nhiệt độ 25 °C có khối lượng riêng ρ₁ = 1,29 kg/m³. Nhiệt độ tối thiểu của không khí bên trong khí cầu để khinh khí cầu bắt đầu rời mặt đất bằng bao nhiêu °C? (Làm tròn đến 1 chữ số thập phân).',
        answer: '64,2',
        unit: '°C',
        goi_y: 'Điều kiện bắt đầu bay lên: lực đẩy Archimedes ρ₁·V·g ≥ (m₀ + ρ₂·V)·g ⇒ tìm ρ₂. Vì áp suất bằng khí quyển (đẳng áp) ⇒ ρ·T = const ⇒ ρ₂/ρ₁ = T₁/T₂.',
        loi_giai: {
          ban_chat: 'Đốt nóng khí làm một phần không khí thoát qua lỗ hở khiến khối lượng riêng khí trong bóng giảm xuống ρ₂ < ρ₁. Khi lực đẩy Archimedes cân bằng tổng trọng lực (vỏ + khách + khí nóng bên trong), khinh khí cầu bắt đầu rời đất.',
          bien_doi: 'ρ₁·V = m₀ + ρ₂·V ⇒ ρ₂ = ρ₁ − m₀/V = 1,29 − 450/3000 = 1,29 − 0,15 = 1,14 kg/m³. Theo phương trình trạng thái ở áp suất không đổi p (ρ = pM/(RT)): T₂ = T₁ · (ρ₁ / ρ₂) = (25 + 273) × (1,29 / 1,14) = 298 × 1,131579 ≈ 337,21 K ⇒ t₂ = 337,21 − 273 ≈ 64,2 °C.',
          dap_an: '64,2 (°C).',
          bay: 'Nhầm lẫn giữa khối lượng khí thoát ra và khối lượng vỏ m₀, hoặc đổi sai Kelvin.'
        }
      },
      {
        id: 'tinh_ht25_tln1',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D1',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Bắc Trung Bộ',
        nguon: 'Cụm Sở GD&ĐT Bắc Trung Bộ — Thi thử TN THPT 2025',
        prompt: 'Mối liên hệ giữa nhiệt độ theo thang Fahrenheit (°F) và thang Celsius (°C) là t(°F) = 1,8·t(°C) + 32. Ở nhiệt độ bằng bao nhiêu °C thì số chỉ trên hai thang nhiệt độ này có giá trị bằng nhau? (Ghi rõ dấu âm nếu có).',
        answer: '-40',
        unit: '°C',
        goi_y: 'Đặt t(°F) = t(°C) = t vào công thức đổi rồi giải phương trình bậc nhất.',
        loi_giai: {
          ban_chat: 'Hai thang đo có gốc 0 °C ↔ 32 °F và độ chia khác nhau nên đồ thị t(°F) theo t(°C) cắt đường phân giác thứ nhất tại đúng một điểm âm.',
          bien_doi: 't = 1,8·t + 32 ⇒ −0,8·t = 32 ⇒ t = −32 / 0,8 = −40 °C.',
          dap_an: '-40 (°C).',
          bay: 'Quên nhập dấu trừ "-" vào phiếu trả lời ngắn (lưu ý "-40" gồm 3 ký tự hợp lệ trên phiếu 4 ô).'
        }
      },
      {
        id: 'tinh_yt25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Hưng Yên – Ninh Bình',
        nguon: 'Cụm Sở GD&ĐT Hưng Yên / Ninh Bình — Thi thử TN THPT 2025 (Bình O₂ y tế)',
        prompt: 'Một bình khí oxygen y tế có dung tích 14 lít chứa khí O₂ ở áp suất 15×10⁶ Pa và nhiệt độ 27 °C. Biết khối lượng mol của O₂ là M = 32 g/mol, R = 8,31 J/(mol·K). Tính khối lượng khí oxygen chứa trong bình theo đơn vị kg (làm tròn đến 1 chữ số thập phân).',
        answer: '2,7',
        unit: 'kg',
        goi_y: 'Dùng phương trình Clapeyron p·V = (m/M)·R·T với V = 14×10⁻³ m³, M = 0,032 kg/mol, T = 300 K.',
        loi_giai: {
          ban_chat: 'Liên hệ khối lượng khí nén trong bình áp suất cao với p, V, T thông qua phương trình Clapeyron chuẩn SI.',
          bien_doi: 'V = 14 lít = 14×10⁻³ m³; T = 27 + 273 = 300 K; M = 32 g/mol = 0,032 kg/mol ⇒ m = (p·V·M) / (R·T) = (15×10⁶ × 14×10⁻³ × 0,032) / (8,31 × 300) = 6720 / 2493 ≈ 2,6955 kg ≈ 2,7 kg.',
          dap_an: '2,7 (kg).',
          bay: 'Quên đổi 14 lít sang m³ hoặc dùng M = 32 mà không đổi ra kg/mol (dẫn đến đáp án 2696 g chưa đổi sang kg).'
        }
      },
      {
        id: 'tinh_bn25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D6',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Bắc Ninh – Hải Phòng',
        nguon: 'Sở GD&ĐT Bắc Ninh & Hải Phòng — Thi thử TN THPT 2025',
        prompt: 'Để động năng tịnh tiến trung bình của mỗi phân tử khí lí tưởng đạt giá trị E_đ = 3,09×10⁻²¹ J thì nhiệt độ tuyệt đối của khối khí phải bằng bao nhiêu K? Lấy hằng số Boltzmann k = 1,38×10⁻²³ J/K (làm tròn đến hàng đơn vị).',
        answer: '149',
        unit: 'K',
        goi_y: 'Rút T từ hệ thức E_đ = (3/2)·k·T ⇒ T = 2·E_đ / (3·k).',
        loi_giai: {
          ban_chat: 'Động năng tịnh tiến trung bình của một phân tử khí lí tưởng chỉ phụ thuộc vào nhiệt độ tuyệt đối T, không phụ thuộc loại khí.',
          bien_doi: 'T = (2 · E_đ) / (3 · k) = (2 × 3,09×10⁻²¹) / (3 × 1,38×10⁻²³) = 6,18×10⁻²¹ / 4,14×10⁻²³ ≈ 149,28 K ≈ 149 K.',
          dap_an: '149 (K).',
          bay: 'Quên hệ số 3/2 (lấy thẳng E_đ / k ra 224 K) hoặc đề hỏi K nhưng lại trừ thêm 273 sang °C.'
        }
      },
      {
        id: 'tinh_hcm25_tln1',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Hiểu',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'TP.HCM – Thanh Hóa',
        nguon: 'Cụm trường THPT TP.HCM & Thanh Hóa — Thi thử TN THPT 2025',
        prompt: 'Tính tổng nhiệt lượng cần cung cấp (đơn vị kJ) để làm nóng chảy hoàn toàn 500 g nước đá ở 0 °C rồi tiếp tục đun nóng toàn bộ lượng nước đó lên đến 50 °C. Biết nhiệt nóng chảy riêng của nước đá λ = 3,34×10⁵ J/kg và nhiệt dung riêng của nước c = 4200 J/(kg·K).',
        answer: '272',
        unit: 'kJ',
        goi_y: 'Chia 2 giai đoạn: Q₁ = λ·m (tan đá ở 0 °C) và Q₂ = m·c·(50 − 0), rồi đổi tổng Q từ J sang kJ (chia 1000).',
        loi_giai: {
          ban_chat: 'Quá trình gồm bước chuyển thể đẳng nhiệt ở 0 °C thu ẩn nhiệt λm và bước tăng nhiệt độ nước lỏng từ 0 °C lên 50 °C thu nhiệt sensible mcΔT.',
          bien_doi: 'm = 500 g = 0,5 kg. Q₁ = 0,5 × 3,34×10⁵ = 167 000 J = 167 kJ; Q₂ = 0,5 × 4200 × (50 − 0) = 105 000 J = 105 kJ ⇒ Q = 167 + 105 = 272 kJ.',
          dap_an: '272 (kJ).',
          bay: 'Quên cộng phần ẩn nhiệt nóng chảy Q₁ (chỉ tính mcΔT = 105 kJ) hoặc quên đổi đơn vị sang kJ.'
        }
      },
      {
        id: 'tinh_nd25_tln1',
        chuong: '2',
        chapter: '2',
        dang_bai: 'D4',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'Nam Định – Ninh Bình',
        nguon: 'Sở GD&ĐT Nam Định & Ninh Bình — Thi thử TN THPT 2025',
        prompt: 'Một quả bóng thám không chứa khí hydrogen được thả từ mặt đất nơi có áp suất 1,00 atm, nhiệt độ 27 °C. Khi bay lên đến tầng khí quyển cao nơi có áp suất 0,30 atm và nhiệt độ −73 °C, tỉ số thể tích V₂/V₁ của quả bóng so với lúc ở mặt đất bằng bao nhiêu? (Làm tròn đến 2 chữ số thập phân).',
        answer: '2,22',
        unit: 'lần',
        goi_y: 'Áp dụng phương trình trạng thái khí lí tưởng p₁V₁/T₁ = p₂V₂/T₂ với T₂ = −73 + 273 = 200 K.',
        loi_giai: {
          ban_chat: 'Khi bóng kín bay lên cao, cả p, V, T đều thay đổi nhưng lượng khí hydrogen bên trong không đổi nên tuân theo phương trình trạng thái.',
          bien_doi: 'T₁ = 27 + 273 = 300 K; T₂ = −73 + 273 = 200 K ⇒ V₂ / V₁ = (p₁ / p₂) · (T₂ / T₁) = (1,00 / 0,30) × (200 / 300) = 20 / 9 ≈ 2,2222 ≈ 2,22.',
          dap_an: '2,22',
          bay: 'Bỏ dấu âm của −73 °C khi đổi sang Kelvin (tính nhầm 73 + 273 = 346 K).'
        }
      },
      {
        id: 'tinh_tphcm25_tln2',
        chuong: '1',
        chapter: '1',
        dang_bai: 'D3',
        phan: 'III',
        muc_do: 'Vận dụng',
        nguon_nhom: 'de_tinh_hot',
        tinh: 'TP.HCM',
        nguon: 'Cụm trường THPT TP.HCM — Thi thử TN THPT 2025 (Máy nước nóng trực tiếp)',
        prompt: 'Một máy nước nóng trực tiếp có công suất điện tiêu thụ 4500 W, hiệu suất chuyển hóa điện năng thành nhiệt năng truyền cho nước là 95%. Nước lạnh ở 20 °C chảy liên tục qua máy với lưu lượng 2,5 lít/phút. Cho khối lượng riêng của nước 1 kg/lít và nhiệt dung riêng c = 4180 J/(kg·K). Tính nhiệt độ nước chảy ra khỏi vòi theo đơn vị °C (làm tròn đến hàng đơn vị).',
        answer: '45',
        unit: '°C',
        goi_y: 'Xét trong 1 phút (t = 60 s): khối lượng nước đi qua máy m = 2,5 kg nhận được nhiệt lượng có ích Q_ích = H·P·t = m·c·(t_ra − 20).',
        loi_giai: {
          ban_chat: 'Công suất nhiệt có ích do máy cung cấp trong mỗi đơn vị thời gian dùng để làm nóng khối lượng nước chảy qua trong cùng khoảng thời gian đó.',
          bien_doi: 'Xét trong t = 60 s: m = 2,5 lít × 1 kg/lít = 2,5 kg; Q_ích = 0,95 × 4500 × 60 = 256 500 J. Từ Q_ích = m·c·(t_ra − t_vào) ⇒ Δt = 256 500 / (2,5 × 4180) = 256 500 / 10 450 ≈ 24,545 °C ⇒ t_ra = 20 + 24,545 ≈ 44,55 °C ≈ 45 °C.',
          dap_an: '45 (°C).',
          bay: 'Quên nhân hiệu suất 0,95 (ra 46 °C), quên nhân 60 s cho lưu lượng lít/phút, hoặc chỉ tính độ tăng nhiệt độ Δt = 25 °C mà quên cộng thêm 20 °C ban đầu.'
        }
      }
    ]
  };

  global.LY_DE_TINH_HOT_C1_C2 = LY_DE_TINH_HOT_C1_C2;
})(window);
