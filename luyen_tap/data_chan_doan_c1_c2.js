/* Bài chẩn đoán tự biên soạn: một câu lí thuyết và một bài tập cho mỗi dạng. */
(function (global) {
  'use strict';

  function question(dang, phan, prompt, response, hint, model, formula, units, limits, graph, trap) {
    var chapter = Number(dang.slice(1)) <= 3 ? '1' : '2';
    return Object.assign({
      id: 'cd_c12_diag_' + dang.toLowerCase() + '_' + phan,
      dang_bai: dang,
      chuong: chapter,
      chapter: chapter,
      phan: phan,
      prompt: prompt,
      goi_y: hint,
      loi_giai: {
        ban_chat: model, bien_doi: formula, don_vi: units, dieu_kien: limits, do_thi: graph,
        dap_an: phan === 'I'
          ? 'Chọn ' + 'ABCD'[response.answerIndex] + '.'
          : response.answer + ' ' + response.unit + '.',
        bay: trap
      }
    }, response);
  }

  function theory(dang, prompt, options, index, ...explanation) {
    return question(dang, 'I', prompt, { options: options, answerIndex: index }, ...explanation);
  }

  function exercise(dang, prompt, answer, unit, ...explanation) {
    return question(dang, 'III', prompt, { answer: answer, unit: unit }, ...explanation);
  }

  global.LY_DIAGNOSTIC_C1_C2 = {
    title: 'Chẩn đoán Chương 1–2',
    durationMin: 20,
    phan1: [
      theory('D1',
        'Hai nhiệt kế dùng thang Celsius và Kelvin cùng theo dõi một mẫu. Nhiệt độ mẫu giảm từ 42 °C xuống 12 °C. Nhận xét nào đúng?',
        ['Số chỉ theo Kelvin giảm 303 K.', 'Số chỉ theo Kelvin giảm 30 K.',
          'Nhiệt độ tuyệt đối giảm còn 2/7 giá trị ban đầu.', 'Nhiệt độ tuyệt đối cuối bằng 12 K.'], 1,
        'Tính hiệu hai số chỉ sau khi đổi từng giá trị.',
        'Hai thang có cùng kích thước một độ chia và khác gốc.',
        'ΔT = (12 + 273,15) − (42 + 273,15) = −30 K.',
        'Nhiệt độ tuyệt đối dùng K. Độ biến thiên có thể diễn đạt bằng K hoặc °C.',
        'Dùng cùng một quy ước quy đổi cho hai lần đo.',
        'T theo t là đường thẳng có hệ số góc bằng 1 và tung độ gốc 273,15 K.',
        'Chỉ cộng 273,15 khi đổi số chỉ tuyệt đối.'),
      theory('D2',
        'Một lượng khí giãn nở trong xi-lanh. Khí mất 40 J nội năng và thực hiện 70 J công lên pít-tông. Khí trao đổi nhiệt như thế nào?',
        ['Tỏa 30 J.', 'Tỏa 110 J.', 'Nhận 110 J.', 'Nhận 30 J.'], 3,
        'Viết ΔU, A với dấu rồi cô lập Q.',
        'Khí vẫn có thể nhận nhiệt trong khi nội năng giảm nếu công truyền ra ngoài lớn hơn nhiệt nhận.',
        'Q = ΔU − A = −40 − (−70) = +30 J.',
        'A, Q và ΔU tính bằng J.',
        'Hệ là lượng khí trong xi-lanh, áp dụng quy ước công nhận vào mang dấu dương.',
        'Trên đồ thị p–V của giãn nở gần cân bằng, diện tích dưới đường quá trình là độ lớn công khí thực hiện.',
        'Nội năng giảm không đủ để kết luận khí tỏa nhiệt.'),
      theory('D3',
        'Hai mẫu nước A và B ban đầu dưới nhiệt độ sôi, nhận cùng công suất hữu ích. Mẫu A có khối lượng gấp đôi B. Đồ thị nhiệt độ theo thời gian của A có đặc điểm gì?',
        ['Độ dốc bằng một nửa B.', 'Độ dốc gấp đôi B.', 'Luôn có nhiệt độ thấp bằng một nửa B.',
          'Độ dốc bằng B vì hai mẫu đều là nước.'], 0,
        'So sánh tốc độ tăng nhiệt độ với tổng nhiệt dung mc.',
        'Cùng năng lượng mỗi giây, mẫu có nhiệt dung lớn hơn tăng nhiệt độ chậm hơn.',
        's = P/(mc); s_A/s_B = m_B/m_A = 1/2.',
        'P tính bằng W, c tính bằng J/(kg·K), độ dốc tính bằng K/s.',
        'So sánh trong giai đoạn chưa chuyển thể, c gần như không đổi và công suất hữu ích như nhau.',
        'Độ dốc ΔT/Δτ mô tả mức tăng trên mỗi giây, không phụ thuộc tung độ gốc.',
        'Cùng c không đồng nghĩa cùng mc.'),
      theory('D4',
        'Một lượng khí lí tưởng không đổi được giữ ở thể tích cố định. Học sinh vẽ p theo t (°C). Phát biểu nào đúng?',
        ['Đường cong hypebol.', 'Đường thẳng đi qua gốc vì p tỉ lệ thuận với t.',
          'Đường thẳng có p dương ở 0 °C.', 'Đường nằm ngang vì thể tích không đổi.'], 2,
        'Đổi trục t sang T trước khi xét tỉ lệ.',
        'Trong bình cứng kín, áp suất tăng theo nhiệt độ tuyệt đối.',
        'p = (nR/V)(t + 273,15), nên tại t = 0 °C thì p > 0.',
        'Dùng Pa, m³, mol và K trong phương trình trạng thái.',
        'Khí lí tưởng, số mol và thể tích cố định.',
        'Đồ thị p theo t có tung độ gốc dương và ngoại suy cắt trục t gần −273,15 °C.',
        'Tuyến tính không luôn đồng nghĩa tỉ lệ thuận.'),
      theory('D5',
        'Khí nằm dưới một pít-tông thẳng đứng, chuyển động tự do. Đặt thêm vật lên pít-tông rồi chờ cân bằng. Nhiệt độ cuối trở về đúng nhiệt độ ban đầu. Nhận xét nào đúng?',
        ['Áp suất cuối tăng, thể tích cuối giảm.', 'Áp suất cuối giữ nguyên vì khí quyển không đổi.',
          'Thể tích cuối tăng vì tải trọng tăng.', 'Áp suất cuối giảm vì khối khí co lại.'], 0,
        'So sánh lực trên pít-tông trước và sau, rồi xét tích pV.',
        'Khí phải cân bằng với khí quyển và tải trọng trên pít-tông.',
        'p = p₀ + mg/S. Khi m tăng, p tăng. Cùng n và T ở hai đầu nên p₁V₁ = p₂V₂.',
        'm tính bằng kg, S tính bằng m², mg/S tính bằng Pa.',
        'Bỏ qua ma sát, không rò khí, xét hai trạng thái cân bằng.',
        'Trên đồ thị p–V, trạng thái cuối nằm phía trái và trên trạng thái đầu của cùng đường đẳng nhiệt.',
        'Áp suất ngoài không chỉ gồm áp suất khí quyển.'),
      theory('D6',
        'Hai bình bằng nhau có cùng nhiệt độ. Bình X chứa gấp đôi số phân tử so với bình Y và cả hai chứa cùng loại khí lí tưởng. So sánh áp suất p và tốc độ căn quân phương v_rms.',
        ['p_X = p_Y và v_rms,X gấp đôi.', 'Cả p_X và v_rms,X đều gấp đôi.',
          'p_X gấp đôi và v_rms,X = v_rms,Y.', 'p_X = p_Y và v_rms,X = v_rms,Y.'], 2,
        'Xét riêng mật độ phân tử và nhiệt độ.',
        'Mật độ hạt cao hơn làm nhiều va chạm trên một đơn vị diện tích trong một giây.',
        'p = (N/V)kT; v_rms = √(3kT/m). T và m như nhau.',
        'N/V có đơn vị m⁻³, p dùng Pa, v_rms dùng m/s.',
        'Cùng loại khí và T, cả hai bình ở cân bằng.',
        'Ở T cố định, đồ thị p theo N/V là đường thẳng qua gốc.',
        'Nhiều hạt hơn không đồng nghĩa từng hạt chuyển động nhanh hơn.')
    ],
    phan2: [],
    phan3: [
      exercise('D1', 'Một nhiệt kế tuyến tính có cột chất lỏng dài 16 mm ở 0 °C và 66 mm ở 100 °C. Cột dài 34 mm. Nhiệt độ bằng bao nhiêu °C?',
        '36', '°C', 'So sánh độ dài tăng kể từ mốc 0 °C.',
        'Độ dài cột chất lỏng là đại lượng chỉ thị nhiệt độ.',
        't = 100(34 − 16)/(66 − 16) = 36 °C.',
        'Tử và mẫu cùng đơn vị mm, nên t có đơn vị °C theo thang đã hiệu chuẩn.',
        'Giả thiết quan hệ tuyến tính trong khoảng hiệu chuẩn và nhiệt kế đã cân bằng nhiệt.',
        'Đồ thị chiều dài theo t có độ dốc 0,5 mm/°C và tung độ gốc 16 mm.',
        'Dùng 34 mm thay cho mức tăng 18 mm cho kết quả sai.'),
      exercise('D2', 'Khí trong xi-lanh giãn nở gần cân bằng ở áp suất không đổi 120 kPa từ 2 L đến 5 L, đồng thời nhận 500 J nhiệt lượng. Tính độ biến thiên nội năng theo J.',
        '140', 'J', 'Tính công khí thực hiện rồi đổi dấu để tìm A.',
        'Nhiệt lượng nhận vào được chia cho phần tăng nội năng và công khí thực hiện.',
        'A = −pΔV = −120 × (5 − 2) = −360 J. ΔU = −360 + 500 = 140 J.',
        '1 kPa·L = 1 Pa·m³ = 1 J.',
        'Quá trình đủ chậm, p không đổi và chỉ xét công thay đổi thể tích.',
        'Diện tích hình chữ nhật dưới đoạn đẳng áp bằng 360 J.',
        'Giãn nở nghĩa là A < 0.'),
      exercise('D3', 'Có 50 g nước đá tinh khiết đang ở 0 °C. Cấp 25 kJ cho mẫu. Cho λ = 3,4 × 10⁵ J/kg và c_nước = 4200 J/(kg·K). Bỏ qua thất thoát. Nhiệt độ cuối bằng bao nhiêu °C, làm tròn đến hàng đơn vị?',
        '38', '°C', 'Tính nhiệt cần để tan hết đá, rồi xem còn bao nhiêu để làm nóng nước.',
        'Mẫu lần lượt nóng chảy rồi tăng nhiệt ở thể lỏng.',
        'Q_tan = 0,05 × 340000 = 17000 J. t = (25000 − 17000)/(0,05 × 4200) ≈ 38,1 °C.',
        '50 g = 0,05 kg; 25 kJ = 25000 J.',
        'Đá tinh khiết ở áp suất thường, toàn bộ nhiệt vào mẫu và nước chưa sôi.',
        'Đồ thị T theo Q nằm ngang đến 17 kJ, sau đó dốc lên.',
        'Kiểm tra đã tan hết đá trước khi dùng mcΔT.'),
      exercise('D4', 'Một lượng khí lí tưởng ở 200 kPa, 3 L và 300 K. Sau biến đổi, thể tích là 4 L và nhiệt độ là 400 K. Tính áp suất cuối theo kPa.',
        '200', 'kPa', 'So sánh T/V của hai trạng thái.',
        'Tăng nhiệt độ và tăng thể tích có thể bù trừ khi xác định áp suất.',
        'p₂ = 200 × (3/4) × (400/300) = 200 kPa.',
        'Các thể tích dùng cùng đơn vị L; T dùng K.',
        'Cùng lượng khí ở hai trạng thái cân bằng.',
        'Hai đầu cùng nằm trên đường p = 200 kPa của mặt phẳng p–V. Muốn kết luận cả đường đi đẳng áp cần thêm dữ kiện.',
        'Không áp dụng Boyle vì T thay đổi.'),
      exercise('D5', 'Pít-tông thẳng đứng nhẹ, không ma sát, có tiết diện 20 cm². Áp suất khí quyển 100 kPa. Đặt vật 4 kg lên pít-tông. Khi cân bằng, áp suất khí phía dưới theo kPa là bao nhiêu? Lấy g = 10 m/s².',
        '120', 'kPa', 'Vẽ lực hướng lên và hai lực hướng xuống.',
        'Áp lực từ khí cân bằng áp lực khí quyển cộng trọng lượng vật.',
        'p = p₀ + mg/S = 100000 + 40/0,002 = 120000 Pa.',
        '20 cm² = 0,002 m²; 120000 Pa = 120 kPa.',
        'Bỏ qua khối lượng pít-tông và ma sát, tải nằm yên.',
        'Với S cố định, đồ thị p theo m có tung độ gốc p₀ và độ dốc g/S.',
        'Khi đổi cm² sang m² phải bình phương hệ số đổi chiều dài.'),
      exercise('D6', 'Ở cùng nhiệt độ, hãy tính tỉ số tốc độ căn quân phương của khí He so với khí O₂. Lấy khối lượng mol lần lượt là 4 và 32 g/mol. Làm tròn đến hai chữ số sau dấu phẩy.',
        '2,83', '', 'Lấy căn bậc hai sau khi lập tỉ số khối lượng mol.',
        'Cùng nhiệt độ nghĩa là cùng động năng tịnh tiến trung bình trên mỗi hạt.',
        'v_rms,He/v_rms,O₂ = √(M_O₂/M_He) = √8 ≈ 2,83.',
        'Tỉ số không có đơn vị. Hai M dùng cùng đơn vị g/mol.',
        'Cả hai khí ở cân bằng tại cùng nhiệt độ tuyệt đối.',
        'Đồ thị v_rms theo 1/√M tại T cố định là đường thẳng qua gốc.',
        'Tốc độ tỉ lệ nghịch với căn của khối lượng mol, không phải khối lượng mol.')
    ]
  };
})(window);
