/* Ngân hàng Lý thuyết & Mô hình Thí nghiệm từng Bài học (Chương 1 & Chương 2 — GDPT 2018) */
(function (global) {
  'use strict';

  var LY_LY_THUYET_TN_C1_C2 = {
    meta: {
      standard: 'GDPT 2018',
      chapters: ['1', '2'],
      totalLessons: 11,
      totalQuestions: 33,
      updatedAt: '2026-11-25',
      note: '33 câu hỏi Lý thuyết cốt lõi và Lý thuyết Mô hình Thí nghiệm cho từng bài học (Bài 1–6 Chương 1; Bài 8–12 Chương 2) theo chương trình Vật lí 12 GDPT 2018.'
    },
    lessons: [
      { id: 'B1', chuong: '1', label: 'Bài 1: Cấu trúc của chất. Sự chuyển thể', sim: '../mo_phong/01_chuyen_the_va_nhiet_dong.html' },
      { id: 'B2', chuong: '1', label: 'Bài 2: Nội năng. Định luật I NĐLH', sim: '../mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html?tab=b2' },
      { id: 'B3', chuong: '1', label: 'Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế', sim: '../mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html?tab=b3' },
      { id: 'B4', chuong: '1', label: 'Bài 4: Nhiệt dung riêng', sim: '../mo_phong/05_thuc_hanh_nhiet_sgk.html?tab=exp-c' },
      { id: 'B5', chuong: '1', label: 'Bài 5: Nhiệt nóng chảy riêng', sim: '../mo_phong/05_thuc_hanh_nhiet_sgk.html?tab=exp-lam' },
      { id: 'B6', chuong: '1', label: 'Bài 6: Nhiệt hóa hơi riêng', sim: '../mo_phong/05_thuc_hanh_nhiet_sgk.html?tab=exp-L' },
      { id: 'B8', chuong: '2', label: 'Bài 8: Mô hình động học phân tử chất khí', sim: '../mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html?tab=b8' },
      { id: 'B9', chuong: '2', label: 'Bài 9: Định luật Boyle (Đẳng nhiệt)', sim: '../mo_phong/06_thuc_hanh_khi_va_dong_hoc.html?tab=boyle' },
      { id: 'B10', chuong: '2', label: 'Bài 10: Định luật Charles (Đẳng áp)', sim: '../mo_phong/06_thuc_hanh_khi_va_dong_hoc.html?tab=charles' },
      { id: 'B11', chuong: '2', label: 'Bài 11: Phương trình trạng thái khí lí tưởng', sim: '../mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html?tab=b12' },
      { id: 'B12', chuong: '2', label: 'Bài 12: Áp suất khí theo mô hình ĐHPT', sim: '../mo_phong/07_mo_hinh_thi_nghiem_bai_hoc.html?tab=b12' }
    ],
    questions: [
      /* ================= BÀI 1: CẤU TRÚC CỦA CHẤT. SỰ CHUYỂN THỂ ================= */
      {
        id: 'lttn_b1_01',
        chuong: '1',
        chapter: '1',
        bai: 'B1',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 1: Cấu trúc của chất',
        prompt: 'Phát biểu nào sau đây mô tả đúng cấu trúc và chuyển động phân tử của các thể chất theo mô hình động học phân tử?',
        options: [
          'Ở thể khí, lực tương tác phân tử rất mạnh nên giữ các phân tử tại vị trí cân bằng cố định.',
          'Ở thể rắn, các phân tử sắp xếp có trật tự và dao động nhiệt quanh các vị trí cân bằng xác định.',
          'Ở thể lỏng, các phân tử chuyển động hoàn toàn tự do, chiếm hết thể tích bình chứa.',
          'Ở thể rắn, khoảng cách giữa các phân tử lớn gấp hàng chục lần kích thước phân tử.'
        ],
        answerIndex: 1,
        goi_y: 'So sánh độ chặt chẽ liên kết và bậc tự do chuyển động: Rắn (dao động quanh VTCB) → Lỏng (dao động và trượt đổi chỗ) → Khí (chuyển động hỗn loạn tự do).',
        loi_giai: {
          ban_chat: 'Thể của một chất phụ thuộc vào tương quan giữa động năng chuyển động nhiệt và thế năng tương tác (lực liên kết) giữa các phân tử.',
          bien_doi: 'Thể rắn có lực tương tác lớn nhất, các phân tử dao động quanh vị trí cân bằng xác định ⇒ có hình dạng và thể tích riêng. Thể lỏng có lực tương tác yếu hơn nên chỉ giữ được thể tích xác định. Thể khí có khoảng cách lớn và lực tương tác rất yếu nên chiếm toàn bộ bình chứa.',
          dap_an: 'Chọn B.',
          bay: 'Nhầm đặc điểm khoảng cách lớn của thể khí gán cho thể rắn hoặc nhầm đặc điểm chiếm toàn bộ bình chứa của thể khí gán cho thể lỏng.'
        }
      },
      {
        id: 'lttn_b1_02',
        chuong: '1',
        chapter: '1',
        bai: 'B1',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Khảo sát đồ thị nóng chảy của chất rắn kết tinh',
        prompt: 'Trong thí nghiệm đun nóng liên tục một chất rắn kết tinh (như băng phiến hoặc nước đá), trên đồ thị nhiệt độ theo thời gian xuất hiện một đoạn nằm ngang ở nhiệt độ nóng chảy. Nguyên nhân vật lí của đoạn nằm ngang này là:',
        options: [
          'nguồn đun tự động ngừng truyền nhiệt cho mẫu chất tại nhiệt độ đó.',
          'chất rắn tỏa ngược nhiệt lượng ra môi trường đúng bằng công suất nguồn đun.',
          'nhiệt lượng cung cấp được dùng để tăng thế năng tương tác, phá vỡ mạng tinh thể chứ không làm tăng động năng trung bình của phân tử.',
          'tốc độ chuyển động nhiệt của các phân tử giảm về 0 trong suốt quá trình nóng chảy.'
        ],
        answerIndex: 2,
        goi_y: 'Nhiệt độ gắn với động năng trung bình của phân tử; phá vỡ liên kết tinh thể gắn với thế năng tương tác.',
        loi_giai: {
          ban_chat: 'Khi chất rắn kết tinh nóng chảy đẳng áp, nhiệt độ không đổi nghĩa là động năng chuyển động nhiệt trung bình của phân tử không đổi.',
          bien_doi: 'Nhiệt lượng Q mà nguồn đun tiếp tục truyền vào hệ không làm tăng động năng phân tử mà chuyển hóa thành thế năng tương tác phân tử để phá vỡ trật tự mạng tinh thể, đưa chất từ thể rắn sang thể lỏng ⇒ nội năng vẫn tiếp tục tăng dù nhiệt độ không đổi.',
          dap_an: 'Chọn C.',
          bay: 'Hiểu nhầm "nhiệt độ không đổi ⇒ nội năng không đổi" hoặc nghĩ nguồn ngừng cung cấp nhiệt.'
        }
      },
      {
        id: 'lttn_b1_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B1',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D1',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Mô hình chuyển thể Rắn – Lỏng – Khí',
        stem: 'Khi quan sát sự chuyển thể của chất trong các thí nghiệm đun nóng chất rắn kết tinh, làm bay hơi chất lỏng ở nhiệt độ phòng và đun sôi nước trong cốc thủy tinh chịu nhiệt, các nhận định sau đây đúng hay sai?',
        items: [
          {
            label: 'a',
            text: 'Sự bay hơi xảy ra ở mọi nhiệt độ và chỉ diễn ra trên bề mặt thoáng của chất lỏng.',
            answer: true
          },
          {
            label: 'b',
            text: 'Sự sôi diễn ra ở một nhiệt độ xác định (tùy thuộc áp suất trên mặt thoáng) và xảy ra cả trong lòng chất lỏng lẫn trên bề mặt thoáng.',
            answer: true
          },
          {
            label: 'c',
            text: 'Trong quá trình chất rắn kết tinh đang nóng chảy ở áp suất chuẩn, nội năng của khối chất giữ nguyên không đổi vì nhiệt độ không đổi.',
            answer: false
          },
          {
            label: 'd',
            text: 'Các chất rắn vô định hình như thủy tinh, nhựa đường cũng có một nhiệt độ nóng chảy xác định như băng phiến.',
            answer: false
          }
        ],
        goi_y: 'Phân biệt bay hơi vs sôi (nơi xảy ra và điều kiện nhiệt độ), động năng vs thế năng khi chuyển thể, và rắn kết tinh vs rắn vô định hình.',
        loi_giai: {
          ban_chat: 'Chuyển thể là quá trình thay đổi cấu trúc sắp xếp phân tử gắn với trao đổi nhiệt lượng ẩn.',
          bien_doi: 'a) Đúng: bay hơi chỉ gồm các phân tử đủ động năng thắng lực liên kết để thoát khỏi mặt thoáng ở mọi nhiệt độ. b) Đúng: khi sôi, các bọt hơi hình thành cả trong lòng chất lỏng nổi lên vỡ trên mặt thoáng ở nhiệt độ sôi xác định theo áp suất. c) Sai: nội năng U = E_đ + E_t; dù T không đổi (E_đ không đổi) nhưng khối chất nhận nhiệt lượng để bứt liên kết nên E_t tăng ⇒ U tăng. d) Sai: chất rắn vô định hình mềm dần rồi chảy lỏng trong một khoảng nhiệt độ, không có nhiệt độ nóng chảy xác định.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Sai.',
          bay: 'Đồng nhất nhiệt độ không đổi với nội năng không đổi ở ý c) và gán nhiệt độ nóng chảy xác định cho chất vô định hình ở ý d).'
        }
      },

      /* ================= BÀI 2: NỘI NĂNG. ĐỊNH LUẬT I NĐLH ================= */
      {
        id: 'lttn_b2_01',
        chuong: '1',
        chapter: '1',
        bai: 'B2',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 2: Nội năng',
        prompt: 'Trong Nhiệt động lực học, nội năng của một vật là:',
        options: [
          'động năng chuyển động vĩ mô của toàn bộ vật so với mặt đất.',
          'nhiệt lượng mà vật đang chứa bên trong tại thời điểm xét.',
          'tổng động năng chuyển động nhiệt và thế năng tương tác giữa các phân tử cấu tạo nên vật.',
          'công cơ học lớn nhất mà vật có thể thực hiện được lên môi trường.'
        ],
        answerIndex: 2,
        goi_y: 'Nhớ khái niệm chuẩn GDPT 2018: nội năng thuộc cấp độ vi mô (phân tử), phụ thuộc vào nhiệt độ T và thể tích V.',
        loi_giai: {
          ban_chat: 'Nội năng (kí hiệu U, đơn vị J) đặc trưng cho năng lượng bên trong của hệ ở quy mô phân tử.',
          bien_doi: 'U = tổng động năng chuyển động hỗn loạn của các phân tử (gắn với T) + tổng thế năng tương tác giữa các phân tử (gắn với khoảng cách/thể tích V). Khái niệm "nhiệt lượng chứa trong vật" là sai bản chất vì nhiệt lượng là phần nội năng truyền đi trong quá trình truyền nhiệt.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm nội năng (hàm trạng thái) với nhiệt lượng (quá trình truyền năng lượng).'
        }
      },
      {
        id: 'lttn_b2_02',
        chuong: '1',
        chapter: '1',
        bai: 'B2',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D2',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Đun ống nghiệm nước có nút bần bật ra',
        prompt: 'Xét thí nghiệm đun nóng một ống nghiệm chứa ít nước được đậy kín bằng nút bần cho tới khi hơi nước đẩy nút bần bật ra ngoài. Xét hệ gồm nước và không khí bên trong ống nghiệm, trong giai đoạn đẩy nút bần bật ra, quy ước dấu nào của A và Q theo Định luật I nhiệt động lực học (ΔU = A + Q) là đúng?',
        options: [
          'Hệ nhận nhiệt nên Q > 0; hệ thực hiện công đẩy nút nên A < 0.',
          'Hệ nhận nhiệt nên Q > 0; hệ nhận công từ nút bần nên A > 0.',
          'Hệ tỏa nhiệt nên Q < 0; hệ thực hiện công đẩy nút nên A > 0.',
          'Hệ tỏa nhiệt nên Q < 0; hệ thực hiện công đẩy nút nên A < 0.'
        ],
        answerIndex: 0,
        goi_y: 'Quy ước GDPT 2018: Hệ NHẬN → dương (+); Hệ TỎA nhiệt hoặc SINH công → âm (−).',
        loi_giai: {
          ban_chat: 'Theo Định luật I NĐLH viết dưới dạng ΔU = A + Q, mọi đại lượng mang dấu (+) khi hệ nhận từ bên ngoài và dấu (−) khi hệ truyền/sinh ra bên ngoài.',
          bien_doi: 'Ngọn đèn cồn truyền nhiệt cho hệ ⇒ hệ nhận nhiệt lượng nên Q > 0. Khi nút bần bật ra, khối hơi giãn nở đẩy nút bần di chuyển ⇒ hệ thực hiện công (sinh công) lên nút bần nên A < 0.',
          dap_an: 'Chọn A.',
          bay: 'Nhầm sang quy ước cũ ΔU = Q − A (trong đó A là công hệ sinh ra mang dấu dương).'
        }
      },
      {
        id: 'lttn_b2_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B2',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D2',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Thực hiện công làm tăng nội năng (xi-lanh nén khí nhanh)',
        stem: 'Trong mô hình thí nghiệm nén nhanh pít-tông của một xi-lanh kín thành dày cách nhiệt chứa không khí (bên trong có gắn đầu đo nhiệt độ phản hồi nhanh và một nhúm bông tẩm ete dễ cháy): ấn mạnh và nhanh pít-tông xuống làm bông bốc cháy. Xét các phát biểu sau:',
        items: [
          {
            label: 'a',
            text: 'Khi ta đẩy mạnh pít-tông nén khối khí xuống, khối khí nhận công nên theo quy ước GDPT 2018 ta có A > 0.',
            answer: true
          },
          {
            label: 'b',
            text: 'Vì quá trình nén diễn ra rất nhanh trong xi-lanh cách nhiệt nên trao đổi nhiệt với môi trường không đáng kể (Q ≈ 0), suy ra ΔU ≈ A > 0 khiến nhiệt độ khí tăng vọt làm cháy bông.',
            answer: true
          },
          {
            label: 'c',
            text: 'Trong thí nghiệm cọ xát một đồng xu kim loại lên mặt bàn nhám rồi thấy đồng xu nóng lên, nội năng đồng xu tăng chủ yếu do quá trình truyền nhiệt.',
            answer: false
          },
          {
            label: 'd',
            text: 'Nếu trong một thí nghiệm khác, khối khí vừa nhận nhiệt lượng 120 J vừa đẩy pít-tông sinh công 45 J thì độ biến thiên nội năng của khối khí là ΔU = 165 J.',
            answer: false
          }
        ],
        goi_y: 'Phân biệt hai cách làm thay đổi nội năng (thực hiện công vs truyền nhiệt) và kiểm tra kỹ dấu của A khi sinh công ở ý d).',
        loi_giai: {
          ban_chat: 'Có hai cách làm biến đổi nội năng là thực hiện công và truyền nhiệt; tổng hợp theo biểu thức ΔU = A + Q.',
          bien_doi: 'a) Đúng: khí bị nén (nhận công từ pít-tông) ⇒ A > 0. b) Đúng: quá trình gần như đoạn nhiệt (Q ≈ 0), độ tăng nội năng bằng công nén khí ⇒ nhiệt độ tăng mạnh vượt điểm bốc cháy của hơi ete. c) Sai: lực ma sát thực hiện công làm đồng xu nóng lên ⇒ chủ yếu do thực hiện công. d) Sai: nhận nhiệt Q = +120 J, sinh công A = −45 J ⇒ ΔU = 120 + (−45) = +75 J.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Sai.',
          bay: 'Quên đổi dấu A = −45 J ở ý d) khiến cộng thành 165 J.'
        }
      },

      /* ================= BÀI 3: NHIỆT ĐỘ. THANG NHIỆT ĐỘ – NHIỆT KẾ ================= */
      {
        id: 'lttn_b3_01',
        chuong: '1',
        chapter: '1',
        bai: 'B3',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Hai bình nước tiếp xúc nhiệt (Hình 3.1 KNTT)',
        prompt: 'Trong thí nghiệm cho hai bình chứa lượng nước khác nhau ở nhiệt độ ban đầu t_A = 65 °C (lượng ít) và t_B = 20 °C (lượng nhiều) tiếp xúc nhiệt với nhau qua thành dẫn nhiệt (coi hệ hai bình cách nhiệt với bên ngoài). Chiều truyền năng lượng nhiệt tự phát diễn ra như thế nào?',
        options: [
          'Nhiệt lượng truyền từ bình B sang bình A vì bình B có khối lượng và tổng nội năng lớn hơn.',
          'Nhiệt lượng truyền từ bình A sang bình B vì bình A có nhiệt độ cao hơn, dừng lại khi nhiệt độ hai bình bằng nhau.',
          'Không có sự truyền nhiệt lượng nào nếu nội năng hai bình ban đầu xấp xỉ nhau.',
          'Nhiệt lượng truyền qua lại sao cho nội năng hai bình lúc cân bằng luôn bằng nhau.'
        ],
        answerIndex: 1,
        goi_y: 'Nhiệt độ quy định chiều truyền năng lượng nhiệt tự phát — KHÔNG phụ thuộc khối lượng hay tổng nội năng mỗi vật.',
        loi_giai: {
          ban_chat: 'Nhiệt độ là đại lượng cho biết trạng thái cân bằng nhiệt và chiều truyền nhiệt tự phát giữa hai vật tiếp xúc nhau.',
          bien_doi: 'Khi cho hai vật tiếp xúc, năng lượng nhiệt luôn tự truyền từ vật có nhiệt độ cao hơn (bình A, 65 °C) sang vật có nhiệt độ thấp hơn (bình B, 20 °C) cho tới khi đạt cân bằng nhiệt (t_A = t_B). Khi cân bằng, hai vật có cùng nhiệt độ chứ không nhất thiết cùng nội năng.',
          dap_an: 'Chọn B.',
          bay: 'Nghĩ vật có khối lượng lớn hơn thì truyền nhiệt sang vật nhỏ hơn hoặc lúc cân bằng hai vật có nội năng bằng nhau.'
        }
      },
      {
        id: 'lttn_b3_02',
        chuong: '1',
        chapter: '1',
        bai: 'B3',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D1',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Thang nhiệt độ Kelvin & Điểm ba của nước',
        prompt: 'Theo quy ước thang nhiệt độ Kelvin trong chương trình Vật lí 12 GDPT 2018, hai mốc chuẩn dùng để thiết lập 1 đơn vị chia (1 K) và mối liên hệ thường dùng với độ Celsius là:',
        options: [
          'Mốc 0 K (độ không tuyệt đối) và điểm sôi của nước tinh khiết (373 K); T(K) = t(°C) − 273.',
          'Mốc 0 K (độ không tuyệt đối) và điểm đóng băng của nước biển mặn (270 K); T(K) = t(°C) + 270.',
          'Mốc 0 K (độ không tuyệt đối) và điểm ba của nước (273,16 K ở 0,01 °C); lấy gần đúng T(K) = t(°C) + 273.',
          'Mốc 0 °C (273,16 K) và mốc 100 °C (373,16 K); độ chia 1 K bằng 1/180 khoảng nhiệt độ này.'
        ],
        answerIndex: 2,
        goi_y: 'Điểm ba của nước có nhiệt độ chính xác là 0,01 °C = 273,16 K (nơi nước đá, nước lỏng và hơi nước cùng cân bằng).',
        loi_giai: {
          ban_chat: 'Thang nhiệt độ nhiệt động lực học Kelvin có gốc 0 K là độ không tuyệt đối (tại đó động năng chuyển động nhiệt phân tử triệt tiêu) và mốc cố định là điểm ba của nước (273,16 K).',
          bien_doi: '1 K bằng 1/273,16 hiệu nhiệt độ giữa điểm ba của nước và độ không tuyệt đối. Liên hệ chính xác T(K) = t(°C) + 273,15, trong các bài toán phổ thông thường làm tròn T(K) = t(°C) + 273.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm điểm đóng băng 0 °C (273,15 K) thành điểm ba của nước (0,01 °C = 273,16 K).'
        }
      },
      {
        id: 'lttn_b3_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B3',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D1',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Nguyên lí nhiệt kế & Thang đo',
        stem: 'Trong phòng thí nghiệm có nhiệt kế thủy ngân, nhiệt kế hồng ngoại điện tử và bảng đối chiếu thang Celsius – Kelvin. Hãy xét tính đúng/sai của các phát biểu sau:',
        items: [
          {
            label: 'a',
            text: 'Nhiệt kế chất lỏng (thủy ngân, rượu) hoạt động dựa trên tính chất dãn nở vì nhiệt của chất lỏng chứa trong bầu và ống mao dẫn.',
            answer: true
          },
          {
            label: 'b',
            text: 'Nhiệt độ 0 °C trong thang Celsius tương ứng chính xác với điểm ba của nước có giá trị 273,16 K.',
            answer: false
          },
          {
            label: 'c',
            text: 'Khi nhiệt độ của một ấm nước tăng thêm Δt = 20 °C thì theo thang Kelvin nhiệt độ của nước cũng tăng đúng bằng ΔT = 20 K.',
            answer: true
          },
          {
            label: 'd',
            text: 'Khi dùng nhiệt kế thủy ngân đo nhiệt độ của nước đang đun trong cốc trên bếp điện, nên để bầu thủy ngân chạm sát vào đáy cốc để thu nhiệt nhanh.',
            answer: false
          }
        ],
        goi_y: 'Kiểm tra khoảng chia ΔT = Δt, sai số vị trí đặt bầu nhiệt kế và chênh lệch 0,01 °C giữa 0 °C (273,15 K) với điểm ba của nước (273,16 K).',
        loi_giai: {
          ban_chat: 'Mỗi nhiệt kế khai thác một tính chất vật lí phụ thuộc đơn điệu theo nhiệt độ (thể tích chất lỏng, điện trở, bức xạ hồng ngoại...).',
          bien_doi: 'a) Đúng: nhiệt độ tăng làm chất lỏng nở nhiều hơn vỏ thủy tinh nên cột chất lỏng dâng lên. b) Sai: 0 °C ứng với 273,15 K (nước đá tan ở 1 atm), còn điểm ba của nước là 0,01 °C = 273,16 K (ở 0,006 atm). c) Đúng: hai thang có cùng độ lớn một độ chia (1 °C ≡ 1 K) nên ΔT = Δt = 20 K. d) Sai: đáy cốc sát bếp có nhiệt độ cao hơn nhiều so với nước trong cốc nên làm kết quả đo sai lệch lớn.',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Sai.',
          bay: 'Bị gài con số quen thuộc 273,16 K ở ý b) mà quên 0 °C chỉ là 273,15 K.'
        }
      },

      /* ================= BÀI 4: NHIỆT DUNG RIÊNG ================= */
      {
        id: 'lttn_b4_01',
        chuong: '1',
        chapter: '1',
        bai: 'B4',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 4: Nhiệt dung riêng',
        prompt: 'Nói nhiệt dung riêng của đồng là 380 J/(kg·K) có nghĩa là:',
        options: [
          '1 kg đồng ở 0 °C chứa sẵn một nhiệt lượng 380 J.',
          'cần truyền nhiệt lượng 380 J để 1 kg đồng nóng chảy hoàn toàn ở nhiệt độ nóng chảy.',
          'cần truyền nhiệt lượng 380 J cho 1 kg đồng để nhiệt độ của nó tăng thêm 1 K.',
          '1 m³ đồng khi tỏa ra 380 J thì nhiệt độ giảm đi 1 °C.'
        ],
        answerIndex: 2,
        goi_y: 'Từ công thức Q = m·c·ΔT rút ra c = Q / (m·ΔT), đặt m = 1 kg và ΔT = 1 K.',
        loi_giai: {
          ban_chat: 'Nhiệt dung riêng c của một chất là nhiệt lượng cần truyền cho 1 kg chất đó để làm nhiệt độ tăng thêm 1 K (hoặc 1 °C).',
          bien_doi: 'Thay m = 1 kg và ΔT = 1 K vào Q = m·c·ΔT ⇒ Q = 380 J.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm sang định nghĩa nhiệt nóng chảy riêng λ (đáp án B) hoặc thể tích 1 m³.'
        }
      },
      {
        id: 'lttn_b4_02',
        chuong: '1',
        chapter: '1',
        bai: 'B4',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm thực hành SGK — Đo nhiệt dung riêng của nước bằng nhiệt lượng kế',
        prompt: 'Trong thí nghiệm đo nhiệt dung riêng của nước bằng nhiệt lượng kế có dây điện trở công suất không đổi P, học sinh ghi bảng số liệu (t, τ) và vẽ đồ thị nhiệt độ t theo thời gian τ. Từ hệ số góc k_góc = Δt / Δτ của đoạn đồ thị tuyến tính tốt nhất, nhiệt dung riêng đo được tính bởi biểu thức nào sau đây?',
        options: [
          'c = P · k_góc / m.',
          'c = P / (m · k_góc).',
          'c = m · k_góc / P.',
          'c = P · m · k_góc.'
        ],
        answerIndex: 1,
        goi_y: 'Cân bằng năng lượng P·Δτ = m·c·Δt ⇒ chia hai vế cho Δτ rồi thế Δt/Δτ = k_góc.',
        loi_giai: {
          ban_chat: 'Trong thời gian Δτ, điện năng cung cấp Q = P·Δτ làm khối nước m tăng nhiệt độ Δt theo hệ thức Q = m·c·Δt.',
          bien_doi: 'Từ P·Δτ = m·c·Δt ⇒ Δt / Δτ = P / (m·c). Vì hệ số góc đồ thị t(τ) là k_góc = Δt / Δτ nên rút ra c = P / (m·k_góc).',
          dap_an: 'Chọn B.',
          bay: 'Nhân nhầm k_góc lên tử số (đáp án A) khi không viết phương trình cân bằng nhiệt trước.'
        }
      },
      {
        id: 'lttn_b4_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B4',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'Thí nghiệm thực hành SGK Vật lí 12 — Phân tích sai số đo nhiệt dung riêng nước',
        stem: 'Khi lắp đặt bộ thí nghiệm thực hành đo nhiệt dung riêng của nước gồm: biến áp nguồn, oát kế (đo công suất P), nhiệt lượng kế có dây đốt, que khuấy, nhiệt kế điện tử và đồng hồ bấm giây; học sinh áp dụng công thức c_đo = P·Δτ / (m·Δt). Hãy xét các nhận định sau:',
        items: [
          {
            label: 'a',
            text: 'Việc khuấy đều nhẹ nhàng bằng que khuấy giúp nước trong nhiệt lượng kế có nhiệt độ đồng đều ở mọi lớp nước.',
            answer: true
          },
          {
            label: 'b',
            text: 'Do một phần nhiệt lượng từ dây đốt bị thất thoát ra môi trường và làm nóng vỏ bình nhiệt lượng kế nên giá trị c_đo tính theo công thức trên thường lớn hơn giá trị thực tế của nước.',
            answer: true
          },
          {
            label: 'c',
            text: 'Nếu dùng lượng nước có khối lượng gấp đôi trong cùng bình cách nhiệt lí tưởng thì giá trị nhiệt dung riêng c của nước cũng tăng gấp đôi.',
            answer: false
          },
          {
            label: 'd',
            text: 'Nếu dây đốt chỉ nhúng một nửa chiều dài vào nước mà để phần trên nhô ra không khí trong lúc bật nguồn thì nhiệt lượng tỏa ra không khí gây sai số lớn và có nguy cơ cháy hỏng dây đốt.',
            answer: true
          }
        ],
        goi_y: 'Phân tích hướng sai số: có hao phí nhiệt ra ngoài thì Δt tăng chậm hơn lí tưởng → mẫu số nhỏ hơn → c_đo lớn hơn hay nhỏ hơn?',
        loi_giai: {
          ban_chat: 'Khi có mất mát nhiệt ra bình và không khí, chỉ có phần nhiệt lượng H·P·Δτ (với hiệu suất H < 1) thực sự làm nóng nước.',
          bien_doi: 'a) Đúng: nước dẫn nhiệt kém, khuấy nhẹ giúp đối lưu đồng đều. b) Đúng: từ H·P·Δτ = m·c_thật·Δt ⇒ P·Δτ / (m·Δt) = c_thật / H > c_thật. c) Sai: nhiệt dung riêng c là đại lượng đặc trưng cho bản chất chất, không phụ thuộc khối lượng m. d) Đúng: phần dây điện trở nằm trong không khí giải nhiệt rất kém nên nóng đỏ gây sai số hao phí và dễ đứt dây.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Nghĩ có hao phí nhiệt làm kết quả đo được NHỎ hơn giá trị thật (ngược với dấu thương P·Δτ / (m·Δt)).'
        }
      },

      /* ================= BÀI 5: NHIỆT NÓNG CHẢY RIÊNG ================= */
      {
        id: 'lttn_b5_01',
        chuong: '1',
        chapter: '1',
        bai: 'B5',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 5: Nhiệt nóng chảy riêng',
        prompt: 'Trong hệ đơn vị SI, nhiệt nóng chảy riêng λ của một chất rắn kết tinh được đo bằng đơn vị nào và dùng để tính nhiệt lượng chuyển thể theo công thức nào?',
        options: [
          'Đơn vị J/(kg·K); công thức Q = λ·m·ΔT.',
          'Đơn vị J/kg; công thức Q = λ·m.',
          'Đơn vị W/kg; công thức Q = λ·m.',
          'Đơn vị J/mol; công thức Q = λ·m.'
        ],
        answerIndex: 1,
        goi_y: 'Quá trình nóng chảy diễn ra tại nhiệt độ không đổi (không có ΔT trong công thức nhiệt chuyển thể Q = λ·m).',
        loi_giai: {
          ban_chat: 'Nhiệt nóng chảy riêng λ là nhiệt lượng cần truyền cho 1 kg chất rắn kết tinh tại nhiệt độ nóng chảy để chuyển hoàn toàn sang thể lỏng.',
          bien_doi: 'Q = λ·m ⇒ λ = Q / m có đơn vị là J/kg (với nước đá ở 0 °C, λ ≈ 3,34×10⁵ J/kg).',
          dap_an: 'Chọn B.',
          bay: 'Nhầm thêm nhân tử ΔT vào công thức chuyển thể đẳng nhiệt hoặc nhầm đơn vị J/(kg·K) của nhiệt dung riêng.'
        }
      },
      {
        id: 'lttn_b5_02',
        chuong: '1',
        chapter: '1',
        bai: 'B5',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm thực hành SGK Vật lí 12 — Đồ thị t(τ) đo nhiệt nóng chảy riêng nước đá',
        prompt: 'Trong thí nghiệm đo nhiệt nóng chảy riêng λ của nước đá bằng nhiệt lượng kế (công suất dây đốt không đổi P), học sinh thu được đồ thị nhiệt độ t(τ) gồm đoạn nằm ngang ở 0 °C kéo dài từ thời điểm τ_M đến τ_N trước khi tăng dốc lên. Ý nghĩa của hiệu thời gian (τ_N − τ_M) là:',
        options: [
          'thời gian cần để làm nóng nước lỏng từ 0 °C lên 100 °C.',
          'thời gian cần để đun khối nước đá lạnh từ −10 °C lên tới 0 °C.',
          'khoảng thời gian điện trở cấp nhiệt để làm nóng chảy hoàn toàn khối lượng nước đá ở 0 °C.',
          'khoảng thời gian sai số trễ nhiệt của nhiệt kế sau khi đã tắt nguồn điện.'
        ],
        answerIndex: 2,
        goi_y: 'Trên đoạn đồ thị nằm ngang ở 0 °C, đá bắt đầu tan tại τ_M và giọt đá cuối cùng vừa tan hết tại τ_N.',
        loi_giai: {
          ban_chat: 'Tại τ_M nước đá ở 0 °C bắt đầu tan hoàn toàn dưới tác dụng của dây đốt; suốt từ τ_M đến τ_N nhiệt độ giữ nguyên ở 0 °C trong khi đá tan dần; ngay sau τ_N toàn bộ đã thành nước lỏng nên nhiệt độ bắt đầu tăng.',
          bien_doi: 'Nhiệt lượng dây đốt cung cấp trong giai đoạn tan đá là Q = P·(τ_N − τ_M) ≈ λ·m ⇒ λ ≈ P·(τ_N − τ_M) / m.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm điểm τ_M là lúc bắt đầu bật nguồn trong trường hợp nước đá ban đầu còn lạnh dưới 0 °C.'
        }
      },
      {
        id: 'lttn_b5_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B5',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'SGK Vật lí 12 & Đề Bộ GD&ĐT 2025 — Mô hình phễu nước đá & Nhiệt lượng kế đo λ',
        stem: 'So sánh hai phương án thí nghiệm đo nhiệt nóng chảy riêng λ của nước đá ở 0 °C trong phòng học (nhiệt độ phòng ~25 °C): Phương án 1 dùng nhiệt lượng kế cách nhiệt tốt; Phương án 2 dùng phễu hở đặt trên cốc hứng đặt lên cân điện tử, có đo đối chứng lượng đá tự tan trong thời gian chưa cấp điện. Hãy đánh giá các phát biểu sau:',
        items: [
          {
            label: 'a',
            text: 'Ở Phương án 1, trong suốt đoạn đồ thị nằm ngang từ τ_M đến τ_N tại 0 °C, bên trong bình chứa đồng thời cả nước đá và nước lỏng.',
            answer: true
          },
          {
            label: 'b',
            text: 'Ở Phương án 1, để áp dụng trực tiếp Q = λ·m mà không cần tính nhiệt lượng làm ấm đá, nên chọn vụn nước đá đang bắt đầu chảy nước ở 0 °C và thấm khô bề mặt trước khi cho vào bình.',
            answer: true
          },
          {
            label: 'c',
            text: 'Ở Phương án 2, nếu bỏ qua bước đo đối chứng (chưa bật điện) mà dùng thẳng tổng khối lượng nước tan m_tổng sau khi cấp điện thời gian t để tính λ\' = P·t / m_tổng thì giá trị λ\' lớn hơn giá trị thực tế λ.',
            answer: false
          },
          {
            label: 'd',
            text: 'Việc đo tốc độ nước đá tan tự nhiên trong giai đoạn chưa bật điện ở Phương án 2 giúp trừ khử sai số do nhiệt lượng môi trường truyền vào phễu.',
            answer: true
          }
        ],
        goi_y: 'Ở Phương án 2, môi trường NÓNG HƠN phễu đá (25 °C > 0 °C) nên truyền nhiệt VÀO làm m_tổng lớn hơn phần tan riêng do điện!',
        loi_giai: {
          ban_chat: 'Khi đo tại 0 °C trong phòng 25 °C, môi trường luôn truyền thêm nhiệt cho đá. Nếu không cách nhiệt tốt như nhiệt lượng kế thì phải đo đối chứng tốc độ tan nền.',
          bien_doi: 'a) Đúng: điểm cân bằng pha ở 0 °C có cả pha rắn và pha lỏng cùng tồn tại. b) Đúng: đảm bảo t_đầu = 0 °C đúng bằng nhiệt độ nóng chảy và không bị thừa nước dính sẵn làm sai khối lượng m_đá. c) Sai: vì m_tổng = m_điện + m_mt > m_điện nên mẫu số phình to ⇒ λ\' = P·t / m_tổng < P·t / m_điện = λ (NHỎ hơn giá trị thực tế). d) Đúng: với cùng khoảng thời gian t, lấy m_điện = m_tổng − m_đối_chứng sẽ khử được lượng nhiệt nhận từ môi trường.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Quên phân biệt chiều truyền nhiệt: môi trường 25 °C truyền nhiệt VÀO đá 0 °C làm m tăng lên và λ\' giảm xuống.'
        }
      },

      /* ================= BÀI 6: NHIỆT HÓA HƠI RIÊNG ================= */
      {
        id: 'lttn_b6_01',
        chuong: '1',
        chapter: '1',
        bai: 'B6',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 6: Nhiệt hóa hơi riêng',
        prompt: 'Nhiệt hóa hơi riêng L của một chất lỏng phụ thuộc vào yếu tố nào sau đây?',
        options: [
          'Khối lượng ban đầu của chất lỏng có trong bình chứa.',
          'Công suất của nguồn nhiệt cung cấp cho bình đun.',
          'Bản chất của chất lỏng và nhiệt độ (hay áp suất) mà tại đó chất lỏng hóa hơi.',
          'Diện tích mặt thoáng tiếp xúc với không khí của bình.'
        ],
        answerIndex: 2,
        goi_y: 'Đại lượng "riêng" đặc trưng cho chất (không phụ thuộc khối lượng m hay công suất P); ngoài bản chất chất thì L giảm nhẹ khi nhiệt độ hóa hơi tăng.',
        loi_giai: {
          ban_chat: 'Nhiệt hóa hơi riêng L = Q / m là nhiệt lượng cần cung cấp cho 1 kg chất lỏng chuyển hoàn toàn sang thể khí ở nhiệt độ xác định.',
          bien_doi: 'L chỉ phụ thuộc vào bản chất chất lỏng (liên kết phân tử mạnh/yếu) và nhiệt độ hóa hơi (nhiệt độ càng gần nhiệt độ tới hạn thì lực liên kết còn lại càng nhỏ nên L giảm); không phụ thuộc m, P hay diện tích bình.',
          dap_an: 'Chọn C.',
          bay: 'Chọn nhầm diện tích mặt thoáng (chỉ ảnh hưởng tốc độ bay hơi) hoặc công suất đun.'
        }
      },
      {
        id: 'lttn_b6_02',
        chuong: '1',
        chapter: '1',
        bai: 'B6',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm thực hành SGK Vật lí 12 — Đo nhiệt hóa hơi riêng bằng cân điện tử',
        prompt: 'Trong thí nghiệm đo nhiệt hóa hơi riêng L của nước bằng bình đun công suất không đổi đặt trên cân điện tử (bỏ nắp bình), vì sao học sinh phải đợi đến khi nước sôi đều ổn định ở 100 °C mới nhấn bắt đầu tính thời gian τ = 0 và ghi khối lượng m₀?',
        options: [
          'Vì dưới 100 °C cân điện tử không thể hiển thị khối lượng nước.',
          'Để loại trừ hoàn toàn giai đoạn cấp nhiệt làm nóng nước và vỏ bình lên 100 °C, đảm bảo từ τ = 0 điện năng tiêu thụ chỉ phục vụ sự hóa hơi.',
          'Vì ở 100 °C nước mới bắt đầu có sự chuyển từ thể lỏng sang thể hơi.',
          'Để áp suất hơi nước trong bình kín tăng cao gấp đôi áp suất khí quyển.'
        ],
        answerIndex: 1,
        goi_y: 'Nếu bấm giờ khi nước mới 30 °C thì Q = P·τ sẽ bao gồm cả m·c·Δt lẫn L·Δm, không tách riêng được L.',
        loi_giai: {
          ban_chat: 'Công thức L = P·Δτ / (m₁ − m₂) chỉ hợp lệ khi toàn bộ nhiệt lượng cung cấp dùng cho quá trình chuyển thể ở nhiệt độ sôi không đổi.',
          bien_doi: 'Trước khi sôi đều ở 100 °C, nhiệt lượng P·τ chủ yếu dùng để tăng nhiệt độ khối nước (Q = m·c·Δt). Khi nước đã sôi đều ở 100 °C (bỏ nắp để hơi thoát tự do ở 1 atm), nhiệt độ bình và nước giữ nguyên tại 100 °C, từ đó trở đi mọi nhiệt lượng có ích chỉ dùng hóa hơi lượng nước Δm = m₁ − m₂.',
          dap_an: 'Chọn B.',
          bay: 'Nghĩ dưới 100 °C nước không hóa hơi (sai vì bay hơi xảy ra ở mọi nhiệt độ).'
        }
      },
      {
        id: 'lttn_b6_03_ds',
        chuong: '1',
        chapter: '1',
        bai: 'B6',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D3',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm thực hành SGK Vật lí 12 — Đồ thị khối lượng m(τ) đo L của nước',
        stem: 'Trong thí nghiệm đo nhiệt hóa hơi riêng của nước ở 100 °C với oát kế đo công suất không đổi P = 500 W và bình không đậy nắp đặt trên cân điện tử, học sinh ghi lại số chỉ cân m tại các thời điểm τ kể từ lúc nước sôi đều. Hãy đánh giá các phát biểu sau:',
        items: [
          {
            label: 'a',
            text: 'Khi nước sôi đều với công suất ổn định, khối lượng m hiển thị trên cân điện tử giảm dần theo quy luật gần như bậc nhất theo thời gian τ.',
            answer: true
          },
          {
            label: 'b',
            text: 'Độ giảm số chỉ của cân (m₁ − m₂) trong khoảng thời gian Δτ chính là khối lượng nước đã hóa hơi bay ra khỏi bình.',
            answer: true
          },
          {
            label: 'c',
            text: 'Vì thực tế luôn có một phần nhiệt lượng tỏa ra không khí xung quanh bình, nên giá trị L_đo = P·Δτ / (m₁ − m₂) thu được thường nhỏ hơn giá trị chuẩn 2,26×10⁶ J/kg.',
            answer: false
          },
          {
            label: 'd',
            text: 'Trong quá trình nước đang sôi, nhiệt độ của khối nước lỏng trong bình giữ không đổi ở 100 °C nhưng nội năng của cả hệ (nước + hơi thoát ra) tăng lên.',
            answer: true
          }
        ],
        goi_y: 'Kiểm tra ảnh hưởng của hao phí nhiệt lên lượng nước bay hơi Δm ở mẫu số của biểu thức L_đo = P·Δτ / Δm.',
        loi_giai: {
          ban_chat: 'Tốc độ bay hơi khi sôi ổn định bằng Δm / Δτ = H·P / L (với H < 1 là hiệu suất đun).',
          bien_doi: 'a) Đúng: tốc độ giảm khối lượng không đổi nên đồ thị m(τ) là đường thẳng dốc xuống. b) Đúng: hơi nước thoát ra không khí làm khối lượng nước còn lại trong bình giảm đi đúng bằng lượng đã hóa hơi. c) Sai: do có hao phí (H < 1), lượng nước thực tế bay hơi ít hơn lí thuyết ⇒ mẫu số (m₁ − m₂) nhỏ hơn ⇒ L_đo = P·Δτ / Δm = L_chuẩn / H > L_chuẩn (LỚN hơn giá trị chuẩn). d) Đúng: toàn bộ nhiệt lượng nhận vào làm tăng thế năng tương tác phân tử khi phá liên kết chuyển sang thể hơi.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Lẫn lộn hướng sai số ở ý c): cho rằng mất nhiệt ra ngoài làm L_đo nhỏ đi thay vì lớn lên.'
        }
      },

      /* ================= BÀI 8: MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ ================= */
      {
        id: 'lttn_b8_01',
        chuong: '2',
        chapter: '2',
        bai: 'B8',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Chuyển động Brown quan sát dưới kính hiển vi',
        prompt: 'Khi quan sát các hạt phấn hoa rất nhỏ lơ lửng trong nước (hoặc hạt khói trong không khí) dưới kính hiển vi, người ta thấy chúng chuyển động theo quỹ đạo gấp khúc hỗn loạn không ngừng. Chuyển động Brown này là bằng chứng thực nghiệm chứng tỏ:',
        options: [
          'các hạt phấn hoa có kích thước bằng phân tử nước và tự sinh ra động năng.',
          'các phân tử nước chuyển động nhiệt hỗn loạn không ngừng và va chạm không cân bằng vào hạt phấn hoa.',
          'lực hút tĩnh điện giữa các hạt phấn hoa làm chúng đẩy nhau liên tục.',
          'dòng đối lưu nhiệt từ đèn chiếu kính hiển vi kéo hạt phấn hoa chuyển động theo vòng tròn.'
        ],
        answerIndex: 1,
        goi_y: 'Hạt Brown lớn hơn phân tử nước hàng nghìn lần; chính các phân tử vô hình xung quanh húc vào nó không đều gây chuyển động giật cục.',
        loi_giai: {
          ban_chat: 'Chuyển động Brown là chuyển động hỗn loạn không ngừng của các hạt nhỏ (cỡ micromet) lơ lửng trong chất lỏng hoặc chất khí.',
          bien_doi: 'Tại mỗi thời điểm, số va chạm của các phân tử chất lỏng/chất khí lên các phía khác nhau của hạt Brown không hoàn toàn bù trừ nhau, tạo thành hợp lực đổi hướng liên tục ⇒ chứng minh gián tiếp chuyển động nhiệt hỗn loạn không ngừng của các phân tử.',
          dap_an: 'Chọn B.',
          bay: 'Hiểu nhầm hạt phấn hoa chính là phân tử nước (sai, hạt phấn hoa lớn hơn phân tử nước rất nhiều).'
        }
      },
      {
        id: 'lttn_b8_02',
        chuong: '2',
        chapter: '2',
        bai: 'B8',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 8: Mô hình khí lí tưởng',
        prompt: 'Trong mô hình khí lí tưởng của thuyết động học phân tử chất khí, giả thiết nào sau đây là đúng?',
        options: [
          'Thể tích riêng của các phân tử khí lớn đáng kể so với thể tích bình chứa.',
          'Các phân tử khí luôn tương tác hút đẩy mạnh với nhau ngay cả khi ở khoảng cách xa.',
          'Các phân tử khí được coi là chất điểm (bỏ qua kích thước riêng) và chỉ tương tác với nhau khi va chạm đàn hồi.',
          'Mọi phân tử khí trong bình luôn có cùng một tốc độ tức thời không đổi theo thời gian.'
        ],
        answerIndex: 2,
        goi_y: 'Hai điều kiện cốt lõi định nghĩa khí lí tưởng: (1) Coi phân tử là chất điểm; (2) Chỉ tương tác khi va chạm.',
        loi_giai: {
          ban_chat: 'Mô hình khí lí tưởng đơn giản hóa khí thực ở mật độ loãng (áp suất thấp, nhiệt độ không quá thấp).',
          bien_doi: 'Do khoảng cách trung bình giữa các phân tử rất lớn so với kích thước phân tử nên ta bỏ qua thể tích riêng của phân tử (coi như chất điểm) và bỏ qua lực tương tác phân tử ngoài lúc va chạm đàn hồi.',
          dap_an: 'Chọn C.',
          bay: 'Nhầm tốc độ tức thời bằng nhau cho mọi phân tử (thực tế phân tử có phân bố tốc độ khác nhau, chỉ có các giá trị trung bình ổn định).'
        }
      },
      {
        id: 'lttn_b8_03_ds',
        chuong: '2',
        chapter: '2',
        bai: 'B8',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D6',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Phân tích thí nghiệm Brown & Khí lí tưởng vs Khí thực',
        stem: 'Xét các kết luận rút ra từ mô hình thí nghiệm chuyển động Brown và thuyết động học phân tử chất khí trong chương trình GDPT 2018:',
        items: [
          {
            label: 'a',
            text: 'Dưới kính hiển vi quang học thông thường trong thí nghiệm Brown, mắt người nhìn thấy trực tiếp chuyển động của từng phân tử nước.',
            answer: false
          },
          {
            label: 'b',
            text: 'Khi tăng nhiệt độ của nước chứa hạt phấn hoa, hạt phấn hoa chuyển động Brown nhanh hơn và quỹ đạo gấp khúc dồn dập hơn.',
            answer: true
          },
          {
            label: 'c',
            text: 'Chất khí không có hình dạng và thể tích riêng, rất dễ nén vì khoảng cách trung bình giữa các phân tử lớn hơn rất nhiều so với kích thước phân tử.',
            answer: true
          },
          {
            label: 'd',
            text: 'Một khối khí thực bị nén ở áp suất cực cao và làm lạnh gần nhiệt độ hóa lỏng có thể áp dụng chính xác mô hình khí lí tưởng vì mật độ phân tử lớn.',
            answer: false
          }
        ],
        goi_y: 'Kiểm tra giới hạn độ phân giải kính hiển vi ở ý a) và điều kiện áp suất cao – nhiệt độ thấp làm lực hút & thể tích riêng không bỏ qua được ở ý d).',
        loi_giai: {
          ban_chat: 'Thí nghiệm Brown là bằng chứng gián tiếp; mô hình khí lí tưởng chỉ gần đúng với khí thực khi mật độ loãng (áp suất thấp, nhiệt độ cao hơn nhiều nhiệt độ hóa lỏng).',
          bien_doi: 'a) Sai: phân tử nước có kích thước cỡ vài phần mười nanomet nên kính hiển vi quang học không thấy được; ta chỉ thấy hạt phấn hoa cỡ micromet chịu tác động của các phân tử nước. b) Đúng: T tăng ⇒ phân tử nước chuyển động nhanh hơn ⇒ va chạm mạnh và dồn dập hơn. c) Đúng: cấu trúc loãng giải thích tính dễ nén và chiếm toàn bộ bình chứa. d) Sai: ở áp suất rất cao và nhiệt độ rất thấp, thể tích riêng và lực liên kết phân tử trở nên đáng kể, khí thực sai lệch mạnh khỏi khí lí tưởng.',
          dap_an: 'a) Sai | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Tưởng kính hiển vi quang học nhìn thấy trực tiếp từng phân tử nước.'
        }
      },

      /* ================= BÀI 9: ĐỊNH LUẬT BOYLE ================= */
      {
        id: 'lttn_b9_01',
        chuong: '2',
        chapter: '2',
        bai: 'B9',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Khảo sát quá trình đẳng nhiệt (Định luật Boyle)',
        prompt: 'Trong thí nghiệm kiểm chứng định luật Boyle với xi-lanh chia vạch, pít-tông và áp kế, thao tác kĩ thuật bắt buộc khi dịch chuyển pít-tông nén hoặc giãn khí để lấy từng cặp số liệu (p, V) là:',
        options: [
          'đẩy pít-tông thật nhanh và đọc ngay chỉ số áp kế trước khi khí nguội.',
          'dịch chuyển pít-tông từ từ rồi chờ vài giây cho trạng thái ổn định trước khi đọc số đo.',
          'mở hé van thoát khí mỗi lần dịch chuyển pít-tông để áp suất không tăng quá lớn.',
          'hơ nóng liên tục thân xi-lanh bằng đèn cồn trong lúc nén khí.'
        ],
        answerIndex: 1,
        goi_y: 'Thí nghiệm khảo sát đẳng nhiệt đòi hỏi hai điều kiện: khối lượng khí không đổi (van kín) và nhiệt độ T không đổi.',
        loi_giai: {
          ban_chat: 'Khi nén khí nhanh, công cơ học truyền vào làm tăng nội năng khiến nhiệt độ khí tăng lên (vi phạm điều kiện T = const của định luật Boyle).',
          bien_doi: 'Dịch chuyển pít-tông rất chậm và chờ ổn định giúp khối khí kịp trao đổi nhiệt qua thành xi-lanh để giữ nguyên nhiệt độ phòng ban đầu, đồng thời đóng kín van để bảo toàn số mol khí n.',
          dap_an: 'Chọn B.',
          bay: 'Chọn nhầm đẩy nhanh (dễ gây sai lệch đoạn nhiệt) hoặc mở van thoát khí (vi phạm m = const).'
        }
      },
      {
        id: 'lttn_b9_02',
        chuong: '2',
        chapter: '2',
        bai: 'B9',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 9: Đồ thị đường đẳng nhiệt',
        prompt: 'Đối với một khối lượng khí lí tưởng xác định, xét đồ thị biểu diễn mối liên hệ giữa áp suất p và đại lượng nghịch đảo thể tích (1/V) trong quá trình đẳng nhiệt. Đường đẳng nhiệt trong hệ tọa độ (p, 1/V) có dạng là:',
        options: [
          'một đường cong hypebol nằm trong góc phần tư thứ nhất.',
          'một đường thẳng đi qua gốc tọa độ (hoặc phần kéo dài đi qua gốc tọa độ).',
          'một đường thẳng song song với trục 1/V.',
          'một đường parabol có đỉnh tại gốc tọa độ.'
        ],
        answerIndex: 1,
        goi_y: 'Viết p = (nRT) · (1/V): đặt x = 1/V và y = p ⇒ dạng y = a·x.',
        loi_giai: {
          ban_chat: 'Trên hệ trục (p, V) thì p·V = const là nhánh hypebol; nhưng khi đổi trục hoành thành x = 1/V thì quan hệ tuyến tính hóa thành đường thẳng đi qua gốc tọa độ.',
          bien_doi: 'Vì p = const · (1/V) với hệ số góc k = n·R·T > 0 nên đồ thị p theo (1/V) là đường thẳng có phần kéo dài đi qua gốc tọa độ O (thực tế không lấy điểm 1/V = 0 vì khí không thể có thể tích vô hạn).',
          dap_an: 'Chọn B.',
          bay: 'Nhìn chữ "đẳng nhiệt" liền chọn ngay hypebol mà không đọc kỹ hệ trục là (p, 1/V) chứ không phải (p, V).'
        }
      },
      {
        id: 'lttn_b9_03_ds',
        chuong: '2',
        chapter: '2',
        bai: 'B9',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Xử lí số liệu & đồ thị Định luật Boyle',
        stem: 'Một nhóm học sinh sử dụng xi-lanh kín chứa khí lí tưởng ở nhiệt độ phòng T₁ = 298 K để đo các cặp giá trị (p, V) bằng cảm biến áp suất. Khi phân tích kết quả thực nghiệm, các nhận định sau đúng hay sai?',
        items: [
          {
            label: 'a',
            text: 'Chốt khóa van khí phải được giữ kín trong suốt các lần đo để đảm bảo lượng khí (số mol n) không đổi.',
            answer: true
          },
          {
            label: 'b',
            text: 'Nếu vẽ đồ thị biểu diễn giá trị tích p·V theo áp suất p, đường biểu diễn thu được là một đường thẳng nằm ngang (song song với trục p).',
            answer: true
          },
          {
            label: 'c',
            text: 'Nếu ở lần đo cuối học sinh nén pít-tông đột ngột rồi đọc ngay chỉ số áp suất khi khí vừa nóng lên chưa kịp nguội, tích p·V đo được lúc này vẫn giữ nguyên bằng tích p₀·V₀ ban đầu.',
            answer: false
          },
          {
            label: 'd',
            text: 'Trong hệ tọa độ (p, V), đường đẳng nhiệt của cùng lượng khí đó khi làm thí nghiệm trong phòng nóng hơn (T₂ > T₁) sẽ nằm phía trên (xa gốc tọa độ hơn) so với đường T₁.',
            answer: true
          }
        ],
        goi_y: 'Khi nén quá nhanh làm T tăng, tích p·V = nRT thay đổi thế nào? Còn đường T₂ > T₁ ứng với hằng số tích lớn hơn.',
        loi_giai: {
          ban_chat: 'Trong mọi bài toán đồ thị đẳng nhiệt của lượng khí xác định, giá trị hằng số C = p·V = n·R·T tỉ lệ thuận trực tiếp với nhiệt độ tuyệt đối T.',
          bien_doi: 'a) Đúng: định luật Boyle chỉ áp dụng cho khối lượng khí xác định. b) Đúng: vì p·V = hằng số không phụ thuộc p nên đồ thị (p·V, p) nằm ngang. c) Sai: nén nhanh làm nhiệt độ khí tăng lên (T > T₁) ⇒ tích p·V = nRT lúc đọc ngay lớn hơn p₀·V₀. d) Đúng: tại cùng một thể tích V, áp suất p₂ = nRT₂/V > p₁ = nRT₁/V nên đường T₂ nằm cao hơn, không cắt đường T₁.',
          dap_an: 'a) Đúng | b) Đúng | c) Sai | d) Đúng.',
          bay: 'Bỏ qua tác động của sự tăng nhiệt độ tức thời khi nén nhanh ở ý c).'
        }
      },

      /* ================= BÀI 10: ĐỊNH LUẬT CHARLES ================= */
      {
        id: 'lttn_b10_01',
        chuong: '2',
        chapter: '2',
        bai: 'B10',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Thí nghiệm SGK Vật lí 12 — Khảo sát quá trình đẳng áp (Định luật Charles)',
        prompt: 'Trong thí nghiệm kiểm chứng định luật Charles bằng ống thủy tinh chia độ dựng thẳng đứng (hoặc xi-lanh pít-tông chuyển động tự do) có chứa giọt thủy ngân/pít-tông nhẹ ở phía trên và nhúng phần khí bị giam vào bình nước đun nóng từ từ, yếu tố nào đảm bảo quá trình biến đổi của khối khí là đẳng áp?',
        options: [
          'Thành ống thủy tinh giữ cho thể tích cột khí không đổi khi nhiệt độ nước tăng.',
          'Giọt thủy ngân hoặc pít-tông di chuyển tự do không ma sát, giữ áp suất khí trong ống cân bằng với áp suất khí quyển bên ngoài (cộng phần áp suất thủy tĩnh không đổi của chính giọt thủy ngân/pít-tông).',
          'Bếp điện truyền một nhiệt lượng không đổi vào bình nước trong mỗi giây.',
          'Van xả tự động mở ra để xả bớt khí mỗi khi nhiệt độ tăng 5 °C.'
        ],
        answerIndex: 1,
        goi_y: 'Muốn áp suất khí bên trong không đổi khi nóng lên thì vật ngăn (giọt thủy ngân / pít-tông) phải được di chuyển tự do để khí nở ra.',
        loi_giai: {
          ban_chat: 'Khi khối khí nóng lên trong xi-lanh kín có pít-tông cố định thì áp suất sẽ tăng (đẳng tích); muốn giữ đẳng áp thì pít-tông hoặc giọt thủy ngân phải di chuyển tự do để luôn cân bằng lực với áp suất khí quyển ngoài.',
          bien_doi: 'Do p_khí = p₀ + m·g / S (với ống dựng đứng đầu hở trên) hoặc p_khí = p₀ (nếu ống nằm ngang, bỏ qua ma sát) đều là các đại lượng không đổi khi nhiệt độ thay đổi, nên cột khí giãn nở đẳng áp.',
          dap_an: 'Chọn B.',
          bay: 'Nhầm thí nghiệm đẳng tích (xi-lanh khóa cứng pít-tông) với thí nghiệm đẳng áp (pít-tông di chuyển tự do).'
        }
      },
      {
        id: 'lttn_b10_02',
        chuong: '2',
        chapter: '2',
        bai: 'B10',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 10: Đường đẳng áp trên (V, T) và (V, t °C)',
        prompt: 'Đối với một khối lượng khí lí tưởng xác định biến đổi đẳng áp, sự khác biệt giữa đồ thị biểu diễn thể tích V theo nhiệt độ tuyệt đối T (K) và đồ thị V theo nhiệt độ Celsius t (°C) là:',
        options: [
          'Cả hai đều là đường thẳng đi qua gốc tọa độ.',
          'Trên hệ (V, T) đường đẳng áp kéo dài đi qua gốc O(0 K, 0); còn trên hệ (V, t °C) đường thẳng cắt trục hoành tại −273 °C (hoặc −273,15 °C) và cắt trục tung tại V₀ > 0.',
          'Trên hệ (V, T) là đường hypebol, còn trên hệ (V, t °C) là đường thẳng.',
          'Trên hệ (V, t °C) kéo dài đi qua gốc O(0 °C, 0), còn trên hệ (V, T) cắt trục tung tại V₀ > 0.'
        ],
        answerIndex: 1,
        goi_y: 'Tại t = 0 °C, khí vẫn có thể tích V₀ > 0 (bởi T = 273 K ≠ 0 K); đường thẳng chỉ cắt trục hoành tại V = 0 khi T = 0 K (t = −273 °C).',
        loi_giai: {
          ban_chat: 'Theo định luật Charles, V = (nR/p)·T tỉ lệ thuận với T(K), còn với t(°C) thì V = V₀·(1 + t/273) là hàm bậc nhất.',
          bien_doi: 'Vì V = k·T nên đường thẳng trên (V, T) có phần kéo dài qua gốc (0 K, 0). Khi tịnh tiến sang hệ (V, t °C) với t = T − 273, giao điểm với trục V = 0 dịch sang t = −273 °C, còn tại t = 0 °C thể tích bằng V₀ > 0.',
          dap_an: 'Chọn B.',
          bay: 'Ngộ nhận rằng V tỉ lệ thuận với t(°C) nên vẽ nhầm đường thẳng qua gốc O(0 °C, 0).'
        }
      },
      {
        id: 'lttn_b10_03_ds',
        chuong: '2',
        chapter: '2',
        bai: 'B10',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Thí nghiệm & Đồ thị Định luật Charles',
        stem: 'Trong bài thực hành và phân tích đồ thị quá trình đẳng áp của một khối lượng khí lí tưởng xác định, hãy xét tính đúng/sai của bốn nhận định dưới đây:',
        items: [
          {
            label: 'a',
            text: 'Ở áp suất không đổi, thể tích của một khối lượng khí lí tưởng xác định tỉ lệ thuận với nhiệt độ Celsius t (°C).',
            answer: false
          },
          {
            label: 'b',
            text: 'Trên đồ thị (V, T) của cùng một lượng khí lí tưởng, đường đẳng áp ứng với áp suất lớn hơn (p₂ > p₁) nằm phía dưới đường p₁ (có độ dốc nhỏ hơn).',
            answer: true
          },
          {
            label: 'c',
            text: 'Khi đặt ống thủy tinh chia độ nằm ngang nhúng ngập trong bình nước và dùng giọt thủy ngân nhỏ làm kín (bỏ qua ma sát), áp suất khí bị giam bằng áp suất khí quyển bên ngoài.',
            answer: true
          },
          {
            label: 'd',
            text: 'Đun nóng đẳng áp lượng khí đó từ 27 °C lên 54 °C thì thể tích của khối khí tăng lên đúng gấp đôi.',
            answer: false
          }
        ],
        goi_y: 'Đổi cả 27 °C và 54 °C sang Kelvin; còn hệ số góc đường đẳng áp trên (V, T) là V/T = nR/p.',
        loi_giai: {
          ban_chat: 'Mọi tỉ lệ trong định luật Charles đều phải tính theo nhiệt độ tuyệt đối T(K) = t(°C) + 273.',
          bien_doi: 'a) Sai: V tỉ lệ thuận với nhiệt độ tuyệt đối T(K), không tỉ lệ thuận với t(°C). b) Đúng: hệ số góc trên hệ (V, T) là V/T = nR/p ⇒ p₂ > p₁ suy ra hệ số góc đường p₂ nhỏ hơn ⇒ nằm dưới đường p₁. c) Đúng: ở phương ngang, trọng lực của giọt thủy ngân vuông góc với phương chuyển động nên cân bằng áp suất dọc trục ống cho p_khí = p_khí_quyển. d) Sai: T₁ = 300 K, T₂ = 327 K ⇒ V₂ / V₁ = 327 / 300 = 1,09 lần (không phải 2 lần).',
          dap_an: 'a) Sai | b) Đúng | c) Đúng | d) Sai.',
          bay: 'Bẫy cổ điển 54 °C / 27 °C = 2 ở ý d) và nhầm vị trí hai đường đẳng áp p₂ > p₁ ở ý b).'
        }
      },

      /* ================= BÀI 11: PHƯƠNG TRÌNH TRẠNG THÁI KHÍ LÍ TƯỞNG ================= */
      {
        id: 'lttn_b11_01',
        chuong: '2',
        chapter: '2',
        bai: 'B11',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 11: Phương trình Clapeyron',
        prompt: 'Trong phương trình Clapeyron p·V = n·R·T cho n mol khí lí tưởng ở trạng thái cân bằng nhiệt động, bộ đơn vị chuẩn SI của từng đại lượng là:',
        options: [
          'p (atm), V (lít), T (°C), R = 8,31 J/(mol·K).',
          'p (Pa), V (m³), T (K), R ≈ 8,31 J/(mol·K).',
          'p (mmHg), V (cm³), T (K), R ≈ 8,31 J/(mol·K).',
          'p (kPa), V (m³), T (K), R ≈ 0,082 J/(mol·K).'
        ],
        answerIndex: 1,
        goi_y: 'Vì R = 8,31 có đơn vị J/(mol·K) mà 1 J = 1 Pa·1 m³, nên p bắt buộc đổi ra Pa và V đổi ra m³ (hoặc dùng 1 kPa·1 lít = 1 J).',
        loi_giai: {
          ban_chat: 'Phương trình trạng thái viết cho n mol khí lí tưởng là p·V = n·R·T, liên kết 3 thông số trạng thái (p, V, T) với lượng chất n.',
          bien_doi: 'Với hằng số khí lí tưởng chuẩn SI R = 8,31 J/(mol·K), ta phải dùng: p theo Pascal (Pa = N/m²), V theo mét khối (m³), T theo Kelvin (K) và n theo mol.',
          dap_an: 'Chọn B.',
          bay: 'Dùng lẫn p theo atm hoặc V theo lít với giá trị R = 8,31 khiến kết quả sai lệch hệ số 10³ hoặc 1,013×10⁵ lần.'
        }
      },
      {
        id: 'lttn_b11_02',
        chuong: '2',
        chapter: '2',
        bai: 'B11',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D4',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'SGK Vật lí 12 — Mô hình thiết lập Phương trình trạng thái qua 2 quá trình nối tiếp',
        prompt: 'Để suy ra phương trình trạng thái p₁·V₁ / T₁ = p₂·V₂ / T₂ từ định luật Boyle và định luật Charles bằng mô hình biến đổi hai bước (Trạng thái 1 → Trạng thái trung gian 1\' → Trạng thái 2), cặp quá trình trung gian nào sau đây là hợp lệ?',
        options: [
          'Bước 1 giữ nhiệt độ không đổi T₁ đưa V₁ → V₂ (áp suất p\'), Bước 2 giữ thể tích V₂ không đổi (đẳng tích) biến đổi (p\', T₁) → (p₂, T₂) hoặc ngược lại qua đẳng áp.',
          'Bước 1 giữ cả ba thông số p, V, T cùng tăng gấp đôi, Bước 2 xả bớt nửa lượng khí ra ngoài.',
          'Bước 1 thực hiện quá trình đoạn nhiệt, Bước 2 mở nắp bình cho thông với khí quyển.',
          'Bước 1 nén nhanh cho nhiệt độ tăng vọt, Bước 2 giữ nguyên áp suất và thể tích để giảm T.'
        ],
        answerIndex: 0,
        goi_y: 'Muốn nối (p₁, V₁, T₁) với (p₂, V₂, T₂), bước 1 giữ 1 thông số không đổi (ví dụ T₁ = const: p₁V₁ = p\'V₂) rồi bước 2 giữ thông số còn lại V₂ = const (đẳng tích: p\'/T₁ = p₂/T₂).',
        loi_giai: {
          ban_chat: 'Vì trạng thái cân bằng chỉ phụ thuộc (p, V, T) chứ không phụ thuộc đường đi (hàm trạng thái), ta chọn đường đi gồm 2 đẳng quá trình nối tiếp nhau.',
          bien_doi: 'Cách chuẩn trong SGK: Bước 1 đẳng nhiệt (T₁) từ (p₁, V₁, T₁) → (p\', V₂, T₁) cho p₁·V₁ = p\'·V₂ ⇒ p\' = p₁·V₁ / V₂. Bước 2 đẳng tích (V₂) từ (p\', V₂, T₁) → (p₂, V₂, T₂) cho p\'/T₁ = p₂/T₂ (hoặc dùng đẳng nhiệt + đẳng áp). Thay p\' vào thu được p₁·V₁ / T₁ = p₂·V₂ / T₂.',
          dap_an: 'Chọn A.',
          bay: 'Chọn quá trình có đổi lượng khí (mở nắp) hoặc biến đổi đồng thời cả 3 thông số nên không dùng được các định luật đẳng quá trình.'
        }
      },
      {
        id: 'lttn_b11_03_ds',
        chuong: '2',
        chapter: '2',
        bai: 'B11',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D4',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Hệ quả Phương trình trạng thái & Clapeyron',
        stem: 'Xét các ứng dụng và điều kiện giới hạn của phương trình trạng thái khí lí tưởng p₁·V₁ / T₁ = p₂·V₂ / T₂ và phương trình Clapeyron p·V = n·R·T:',
        items: [
          {
            label: 'a',
            text: 'Trong một bình thép kín có thể tích không đổi chứa khí lí tưởng, khi nung nóng khí thì áp suất p tỉ lệ thuận với nhiệt độ tuyệt đối T (quá trình đẳng tích).',
            answer: true
          },
          {
            label: 'b',
            text: 'Nếu bình bị rò rỉ van làm một nửa lượng khí thoát ra ngoài trong quá trình đun nóng, hệ thức p₁·V₁ / T₁ = p₂·V₂ / T₂ vẫn cho kết quả đúng.',
            answer: false
          },
          {
            label: 'c',
            text: 'Hai bình kín cùng dung tích V, ở cùng nhiệt độ T và cùng áp suất p nhưng bình 1 chứa khí He (M = 4 g/mol) còn bình 2 chứa khí N₂ (M = 28 g/mol) thì số phân tử khí trong hai bình bằng nhau.',
            answer: true
          },
          {
            label: 'd',
            text: 'Trong phương trình p·V = n·R·T với R = 8,31 J/(mol·K), nếu lấy p theo đơn vị kPa và V theo đơn vị lít thì tích p·V vẫn có đơn vị đúng là Joule (J).',
            answer: true
          }
        ],
        goi_y: 'Kiểm tra bảo toàn số mol n ở ý b), công thức N = pV / (kT) ở ý c) và tích 1 kPa × 1 lít ở ý d).',
        loi_giai: {
          ban_chat: 'Thương số pV / T = nR phụ thuộc vào số mol khí n; khi n thay đổi phải quay về dùng pV = nRT (hoặc p₁V₁/(n₁T₁) = p₂V₂/(n₂T₂)).',
          bien_doi: 'a) Đúng: từ pV/T = const khi V = const ⇒ p/T = const (đẳng tích). b) Sai: rò rỉ khí làm n₂ ≠ n₁ nên phải dùng p₁V₁/(n₁T₁) = p₂V₂/(n₂T₂). c) Đúng: số mol n = pV/(RT) và số phân tử N = n·N_A = pV/(kT) chỉ phụ thuộc (p, V, T), không phụ thuộc bản chất khí (đây là nội dung định luật Avogadro). d) Đúng: 1 kPa · 1 lít = (10³ Pa) · (10⁻³ m³) = 1 Pa·m³ = 1 J.',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Đúng.',
          bay: 'Quên điều kiện lượng khí xác định khi dùng p₁V₁/T₁ = p₂V₂/T₂ hoặc nghĩ tích kPa·lít phải nhân thêm 1000.'
        }
      },

      /* ================= BÀI 12: ÁP SUẤT KHÍ THEO MÔ HÌNH ĐHPT ================= */
      {
        id: 'lttn_b12_01',
        chuong: '2',
        chapter: '2',
        bai: 'B12',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Biết',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Bài 12: Áp suất khí theo mô hình động học phân tử',
        prompt: 'Trong biểu thức cơ bản của áp suất chất khí theo mô hình động học phân tử: p = (1/3)·μ·m·v²_tb (với μ = N/V là mật độ phân tử, m là khối lượng một phân tử, v²_tb là trung bình của bình phương tốc độ phân tử), thừa số 1/3 xuất hiện vì:',
        options: [
          'một phân tử chỉ va chạm vào đúng 1/3 số mặt của bình hình lập phương.',
          'chỉ có 1/3 tổng số phân tử trong bình chuyển động, 2/3 còn lại đứng yên.',
          'chuyển động nhiệt hỗn loạn là đẳng hướng trong không gian 3 chiều nên v²_x_tb = v²_y_tb = v²_z_tb = (1/3)·v²_tb.',
          'va chạm của phân tử lên thành bình làm mất đi 2/3 động năng ban đầu.'
        ],
        answerIndex: 2,
        goi_y: 'Vì các phân tử chuyển động hoàn toàn hỗn loạn, không có phương nào được ưu tiên hơn theo 3 trục tọa độ Ox, Oy, Oz.',
        loi_giai: {
          ban_chat: 'Tốc độ chuyển động toàn phần thỏa mãn v² = v_x² + v_y² + v_z²; lấy trung bình cho cả N phân tử thu được v²_tb = v²_x_tb + v²_y_tb + v²_z_tb.',
          bien_doi: 'Do chuyển động nhiệt hỗn loạn đẳng hướng theo mọi phương nên không có phương ưu tiên: v²_x_tb = v²_y_tb = v²_z_tb = (1/3)·v²_tb. Thay vào áp suất theo phương Ox (p = μ·m·v²_x_tb) thu được p = (1/3)·μ·m·v²_tb.',
          dap_an: 'Chọn C.',
          bay: 'Hiểu máy móc là chỉ có 1/3 số phân tử chuyển động hoặc va chạm không đàn hồi.'
        }
      },
      {
        id: 'lttn_b12_02',
        chuong: '2',
        chapter: '2',
        bai: 'B12',
        loai_lt: 'mo_hinh_tn',
        dang_bai: 'D6',
        phan: 'I',
        muc_do: 'Hiểu',
        nguon: 'Mô hình thiết lập công thức áp suất khí SGK Vật lí 12 (Hình lập phương cạnh l)',
        prompt: 'Trong mô hình phân tử khí lí tưởng khối lượng m chuyển động với thành phần vận tốc v_x vuông góc tới va chạm hoàn toàn đàn hồi vào thành bình diện tích S rồi bật ngược lại với thành phần vận tốc −v_x. Độ lớn độ biến thiên động lượng của phân tử (và độ lớn xung lực tác dụng lên thành bình) trong mỗi lần va chạm đó bằng:',
        options: [
          'm·|v_x|.',
          '2·m·|v_x|.',
          '(1/2)·m·v_x².',
          '0 (vì va chạm đàn hồi bảo toàn tốc độ).'
        ],
        answerIndex: 1,
        goi_y: 'Động lượng là đại lượng VECTƠ: p_trước = +m·v_x, p_sau = −m·v_x ⇒ Δp = p_sau − p_trước.',
        loi_giai: {
          ban_chat: 'Động lượng có tính vectơ nên khi bật ngược chiều hoàn toàn đàn hồi, dấu vận tốc đảo ngược từ +v_x sang −v_x.',
          bien_doi: 'Độ biến thiên động lượng của phân tử theo phương Ox: |Δp_x| = |−m·v_x − (+m·v_x)| = 2·m·|v_x|. Theo định luật III Newton và định lí xung lượng, xung lực phân tử tác dụng lên thành bình trong mỗi va chạm cũng có độ lớn 2·m·|v_x|. (Sau đó nhân với số va chạm trong Δt là (1/2)·μ·S·|v_x|·Δt thì thừa số 2 và 1/2 triệt tiêu nhau tạo p = μ·m·v²_x_tb).',
          dap_an: 'Chọn B.',
          bay: 'Lấy hiệu độ lớn thay vì hiệu vectơ nên ra 0 (đáp án D) hoặc quên hệ số 2 (đáp án A).'
        }
      },
      {
        id: 'lttn_b12_03_ds',
        chuong: '2',
        chapter: '2',
        bai: 'B12',
        loai_lt: 'ly_thuyet',
        dang_bai: 'D6',
        phan: 'II',
        muc_do: 'Vận dụng',
        nguon: 'SGK Vật lí 12 GDPT 2018 — Hệ thức vi mô – vĩ mô p, μ, E_đ, v_rms và T',
        stem: 'Từ phương trình cơ bản của thuyết động học phân tử p = (1/3)·μ·m·v²_tb = (2/3)·μ·E_đ kết hợp với E_đ = (3/2)·k·T và p = μ·k·T, hãy xét bốn phát biểu sau:',
        items: [
          {
            label: 'a',
            text: 'Áp suất chất khí tác dụng lên thành bình tỉ lệ thuận với mật độ phân tử μ và tỉ lệ thuận với động năng tịnh tiến trung bình E_đ của mỗi phân tử.',
            answer: true
          },
          {
            label: 'b',
            text: 'Khi nén đẳng nhiệt một khối khí xuống thể tích còn một nửa (mật độ μ tăng gấp đôi), áp suất tăng gấp đôi vì tốc độ căn quân phương v_rms của phân tử tăng gấp đôi.',
            answer: false
          },
          {
            label: 'c',
            text: 'Trong một bình chứa hỗn hợp khí H₂ (M = 2 g/mol) và O₂ (M = 32 g/mol) ở cùng trạng thái cân bằng nhiệt độ T, tốc độ căn quân phương v_rms của phân tử H₂ lớn gấp 4 lần của phân tử O₂.',
            answer: true
          },
          {
            label: 'd',
            text: 'Nhiệt độ tuyệt đối T của một khối khí lí tưởng là thước đo trực tiếp thế năng tương tác trung bình giữa các phân tử khí.',
            answer: false
          }
        ],
        goi_y: 'Nén ĐẲNG NHIỆT thì T giữ nguyên ⇒ v_rms thay đổi không? Còn v_rms = √(3RT/M) phụ thuộc vào M như thế nào?',
        loi_giai: {
          ban_chat: 'Nhiệt độ tuyệt đối T quyết định hoàn toàn động năng tịnh tiến trung bình E_đ = (3/2)kT, trong khi mật độ phân tử μ quyết định tần số va chạm lên thành bình.',
          bien_doi: 'a) Đúng: trực tiếp từ công thức p = (2/3)·μ·E_đ. b) Sai: vì quá trình là ĐẲNG NHIỆT (T = const) nên E_đ và tốc độ căn quân phương v_rms hoàn toàn KHÔNG ĐỔI; áp suất tăng gấp đôi chỉ vì mật độ μ tăng gấp đôi làm số lần va chạm lên 1 m² thành bình trong 1 giây tăng gấp đôi. c) Đúng: hai khí cùng nhiệt độ T nên v_rms(H₂) / v_rms(O₂) = √(M_O₂ / M_H₂) = √(32 / 2) = 4. d) Sai: T là thước đo ĐỘNG NĂNG tịnh tiến trung bình, không phải thế năng tương tác.',
          dap_an: 'a) Đúng | b) Sai | c) Đúng | d) Sai.',
          bay: 'Bẫy bản chất đẳng nhiệt ở ý b): hễ thấy p tăng là tưởng phân tử chạy nhanh hơn dù T không đổi!'
        }
      }
    ]
  };

  global.LY_LY_THUYET_TN_C1_C2 = LY_LY_THUYET_TN_C1_C2;
})(window);
