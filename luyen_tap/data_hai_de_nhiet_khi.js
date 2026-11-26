/* Câu luyện diễn đạt lại từ hai PDF người dùng cung cấp. */
(function (global) {
  'use strict';

  function question(set, part, number, topic, lesson, stem, format, solution) {
    var isGas = Number(topic.slice(1)) >= 4;
    return Object.assign({
      id: 'nk_' + set + '_' + part + '_' + number,
      chuong: isGas ? '2' : '1',
      chapter: isGas ? '2' : '1',
      dang_bai: topic,
      phan: part,
      sourceNumber: number,
      studyAnchor: lesson,
      nguon: (set === 'a' ? 'Thi thử lần 4' : 'Nguyễn Khuyến – Lê Thánh Tông') + ' · Phần ' + part + ', câu ' + number,
      loi_giai: solution
    }, part === 'II' ? { stem: stem } : { prompt: stem }, format);
  }
  function explanation(model, formula, units, limits, graph, trap, answer) {
    return {
      ban_chat: model, bien_doi: formula, don_vi: units, dieu_kien: limits, do_thi: graph,
      bay: trap, dap_an: answer
    };
  }
  function exam(set, title, note) {
    return { id: 'hai_de_' + set, title: title, description: note, durationMin: 50, phan1: [], phan2: [], phan3: [] };
  }
  var a = exam('a', 'Thi thử lần 4 · 0123/0214',
    'Bản luyện diễn đạt lại từ PDF. 28 câu trong 50 phút. Các hình cần thiết được vẽ lại hoặc mô tả ngay trong câu hỏi.');
  var b = exam('b', 'Nguyễn Khuyến – Lê Thánh Tông · 2026–2027',
    'Bản luyện có 24 câu chấm được trên thang 9. PDF thiếu dữ kiện chung của phần III câu 3–6, nên bốn câu đó không tính điểm ở đây.');
  function multiple(target, n, topic, lesson, prompt, options, index, ...why) {
    target.phan1.push(question(target.id.slice(-1), 'I', n, topic, lesson, prompt,
      { options: options, answerIndex: index }, explanation(...why, 'Chọn ' + 'ABCD'[index] + '.')));
  }
  function trueFalse(target, n, topic, lesson, stem, statements, ...why) {
    var items = statements.map(function (row, index) {
      return { label: 'abcd'[index], text: row[0], answer: row[1], reason: row[2] };
    });
    var verdict = items.map(function (item) {
      return item.label + ') ' + (item.answer ? 'Đúng.' : 'Sai.');
    }).join(' ');
    target.phan2.push(question(target.id.slice(-1), 'II', n, topic, lesson, stem,
      { items: items }, explanation(...why, verdict)));
  }
  function short(target, n, topic, lesson, prompt, answer, unit, ...why) {
    target.phan3.push(question(target.id.slice(-1), 'III', n, topic, lesson, prompt,
      { answer: answer, unit: unit }, explanation(...why, answer + (unit ? ' ' + unit : '') + '.')));
  }

  multiple(a, 1, 'D1', 'vi-mo',
    'Mô hình tương tác giữa các phân tử ở thể rắn có những thành phần nào?',
    ['Chỉ có lực đẩy.', 'Lực hút luôn lớn hơn lực đẩy.', 'Lực đẩy luôn lớn hơn lực hút.', 'Có cả lực hút và lực đẩy.'], 3,
    'Các hạt dao động quanh vị trí cân bằng trong chất rắn kết tinh.',
    'Ở khoảng cách cân bằng, lực tổng hợp bằng 0. Nén sát thêm làm thành phần đẩy trội lên.',
    'Lực tính bằng N.', 'Xét mô hình tương tác phân tử gần vị trí cân bằng.',
    'Trên đồ thị thế năng theo khoảng cách, vị trí cân bằng bền là điểm cực tiểu.',
    'Mối liên kết bền không có nghĩa lực hút luôn trội.');
  multiple(a, 2, 'D1', 'chuyen-the',
    'Một mẫu nước đá nóng chảy trong hệ kín ở cùng nhiệt độ. Đại lượng nào giữ nguyên?',
    ['Khoảng cách trung bình giữa các phân tử.', 'Khối lượng mẫu.', 'Lực tương tác ở mọi cặp phân tử.', 'Trật tự mạng tinh thể.'], 1,
    'Nóng chảy là sắp xếp lại các phân tử trong hệ.', 'Không có chất ra vào nên m trước = m sau.',
    'Khối lượng tính bằng kg.', 'Bỏ qua hao hụt vật chất.',
    'Trên đoạn ngang của đồ thị T theo thời gian, pha thay đổi dù nhiệt độ giữ nguyên.',
    'Bảo toàn khối lượng không kéo theo bảo toàn khối lượng riêng.');
  multiple(a, 3, 'D1', 'nhiet-do',
    'Hai vật tiếp xúc nhiệt. Chỉ biết U_A > U_B. Có kết luận được chiều truyền nhiệt ròng không?',
    ['Luôn từ A sang B.', 'Luôn từ B sang A.', 'Luôn không có truyền nhiệt.', 'Cần so sánh nhiệt độ hai vật.'], 3,
    'Chiều truyền nhiệt tự phát do độ chênh nhiệt độ quyết định.', 'T_A > T_B thì A truyền nhiệt cho B; nếu bằng nhau, độ truyền nhiệt ròng bằng 0.',
    'U tính bằng J, T tính bằng K.', 'Tiếp xúc nhiệt thụ động.',
    'Hai đường nhiệt độ theo thời gian hội tụ nếu hệ cô lập.', 'Nội năng còn phụ thuộc lượng chất.');
  multiple(a, 4, 'D4', 'boyle',
    'Trong thí nghiệm với lượng khí kín, T không đổi, kết quả tạo thành đường thẳng qua gốc. Cặp trục đứng – trục ngang nào phù hợp?',
    ['m – T.', 'm – 1/T.', 'p – V.', 'p – 1/V.'], 3,
    'Giữ lượng khí và T để tuyến tính hóa định luật Boyle.', 'p = nRT × (1/V).',
    'p tính bằng Pa, 1/V bằng m⁻³.', 'Đo áp suất tuyệt đối sau khi khí cân bằng nhiệt.',
    'p–V là hypebol, p–1/V có độ dốc nRT.', 'Đọc đại lượng trên cả hai trục.');
  multiple(a, 5, 'D3', 'chuyen-the',
    'Ba mẫu X, Y, Z có cùng khối lượng và bắt đầu tại nhiệt độ nóng chảy của từng chất. Để làm tan hết, Q_X > Q_Y > Q_Z. Thứ tự λ là gì?',
    ['λ_X < λ_Y < λ_Z.', 'λ_X > λ_Y > λ_Z.', 'Cả ba bằng nhau.', 'λ_X > λ_Z > λ_Y.'], 1,
    'Nhiệt lượng cần cho chuyển thể còn tùy vào vật liệu.', 'λ = Q/m nên thứ tự trùng với thứ tự Q khi cùng m.',
    'Q tính bằng J, λ bằng J/kg.', 'Không tính giai đoạn tăng nhiệt độ và thất thoát.',
    'Nếu cùng công suất, đoạn nằm ngang dài hơn ứng với λ lớn hơn.',
    'Không so sánh λ chỉ dựa trên nhiệt độ nóng chảy.');
  multiple(a, 6, 'D1', 'chuyen-the',
    'Một chất lỏng dưới nhiệt độ sôi mất dần phân tử ở mặt thoáng. Nếu không được bù nhiệt, hiện tượng và xu hướng nhiệt độ là gì?',
    ['Sôi và nóng lên.', 'Bay hơi và nguội đi.', 'Ngưng tụ ở nhiệt độ cố định.', 'Bay hơi và nóng lên.'], 1,
    'Những phân tử đủ năng lượng thoát khỏi mặt thoáng.',
    'Năng lượng trung bình của phần còn lại giảm nếu môi trường không bù nhiệt.',
    'Nhiệt độ có thể so sánh theo °C hay K.', 'Xét bay hơi ở mặt thoáng, không có nguồn bù nhiệt.',
    'Nhiệt độ phần lỏng có thể giảm dần theo thời gian.',
    'Bay hơi có thể xảy ra mà chất lỏng chưa sôi.');
  multiple(a, 7, 'D3', 'nhiet-dung',
    'Công thức đo c = Q/(mΔT) cho phép kết luận điều gì?',
    ['Tăng Q luôn làm c của cùng chất tăng.', 'Tăng m làm c giảm.', 'Tăng ΔT làm c giảm.', 'Ở điều kiện xác định, c đặc trưng cho chất.'], 3,
    'c là năng lượng cần trên mỗi kg cho một độ tăng nhiệt.', 'Q = mcΔT nên Q, m và ΔT có thể cùng thay đổi.',
    'c có đơn vị J/(kg·K).', 'Cùng pha, điều kiện xác định, có thể xem c gần như hằng số trong khoảng nhỏ.',
    'Với m cố định, độ dốc Q theo ΔT bằng mc.',
    'Một biểu thức tính c không thiết lập sự phụ thuộc vào từng đại lượng khi các biến còn lại không độc lập.');
  multiple(a, 8, 'D1', 'nhiet-do',
    'Nhiệt độ phòng tăng 1 °C. Số chỉ Kelvin tăng bao nhiêu?',
    ['274 K.', '1 K.', '1,8 K.', '0 K.'], 1,
    'Hai thang Celsius và Kelvin có cùng độ lớn độ chia.', 'T₂ − T₁ = t₂ − t₁.',
    'Chênh lệch 1 K có cùng độ lớn với 1 °C.', 'Áp dụng cho độ thay đổi, không phải số chỉ.',
    'Đường T theo t có độ dốc 1.', 'Chỉ cộng 273 hoặc 273,15 khi đổi nhiệt độ tuyệt đối.');
  multiple(a, 9, 'D1', 'nhiet-do',
    'Một miếng sắt và miếng gỗ để lâu cùng phòng. Sắt sờ lạnh hơn. Khi cả hai đã cân bằng nhiệt với phòng, so sánh T.',
    ['Sắt lạnh hơn.', 'Hai miếng có cùng nhiệt độ.', 'Sắt nóng hơn.', 'Không thể so sánh vì khác vật liệu.'], 1,
    'Cảm giác sờ còn phụ thuộc tốc độ truyền nhiệt từ tay vào vật.', 'Cả hai cùng bằng nhiệt độ phòng ở cân bằng.',
    'Nhiệt độ đo bằng °C hoặc K.', 'Hai vật đạt cân bằng với cùng môi trường.',
    'Đồ thị nhiệt độ của hai vật tiến về cùng một mức.', 'Cảm giác lạnh không phải số đo nhiệt độ.');
  multiple(a, 10, 'D4', 'boyle',
    'Trong bộ đại lượng dùng để mô tả trạng thái của một lượng khí đã cho, đại lượng nào biểu thị lượng vật chất thay vì một trong ba thông số p, V, T?',
    ['Thể tích.', 'Khối lượng.', 'Nhiệt độ tuyệt đối.', 'Áp suất.'], 1,
    'p, V, T mô tả trạng thái của lượng khí cố định; khối lượng đã được cho.',
    'pV = nRT và n = m/M.', 'm dùng kg; V dùng m³; p dùng Pa; T dùng K.',
    'Giữ cùng lượng khí khi so sánh các trạng thái.', 'Một điểm p–V xác định T nếu n đã biết.',
    'Khi khí rò hoặc được bơm vào, n không còn là hằng số.');
  multiple(a, 11, 'D4', 'boyle',
    'Quy trình đo Boyle nào phù hợp nhất?',
    ['Vẽ đồ thị trước, sau đó chỉnh máy.', 'Đọc p, V ở nhiều vị trí trong khi van luôn mở.',
      'Dịch pít-tông thật nhanh và đọc ngay.', 'Lấy khí, đóng van, đọc điểm đầu, dịch chậm và ghi các điểm sau, rồi xử lý đồ thị và pV.'], 3,
    'Cần giữ lượng khí và để nó cân bằng nhiệt với môi trường.', 'Kiểm tra pV của từng điểm hoặc vẽ p theo 1/V.',
    'Ghi nhất quán áp suất tuyệt đối và thể tích.', 'Van kín trong toàn bộ dãy đo và T gần như không đổi.',
    'p–1/V gần đường thẳng qua gốc trong mô hình.', 'Đóng van sau khi đã lấy lượng khí cần đo.');
  multiple(a, 12, 'D3', 'chuyen-the',
    'Nhận định nào sai khi nói về nhiệt nóng chảy riêng?',
    ['Có thể khác nhau giữa hai chất.', 'Đơn vị SI là J/kg.', 'Là nhiệt cần để làm tan 1 kg tại nhiệt độ nóng chảy.', 'Tăng khi lấy mẫu lớn hơn.'], 3,
    'λ là năng lượng trên mỗi đơn vị khối lượng.', 'Q = mλ; tăng m làm tăng Q.',
    'λ dùng J/kg.', 'So sánh cùng chất tại cùng điều kiện nóng chảy.',
    'Q theo m là đường qua gốc có độ dốc λ.', 'Nhiệt nóng chảy Q khác nhiệt nóng chảy riêng λ.');
  multiple(a, 13, 'D3', 'chuyen-the',
    'Để vật liệu hàn nóng chảy trước khi hai miếng đồng biến dạng do nóng chảy, cần ưu tiên tính chất nào?',
    ['Nhiệt độ nóng chảy cao hơn đồng.', 'λ lớn hơn đồng.', 'Nhiệt độ nóng chảy thấp hơn đồng.', 'Cả hai tính chất giống hệt đồng.'], 2,
    'Có thể chọn miền nhiệt độ làm vật liệu hàn chảy trong khi đồng còn rắn.',
    'T_nóng chảy hàn thấp hơn T_nóng chảy đồng.',
    'So sánh nhiệt độ trên cùng thang.', 'Lập luận theo mô hình nóng chảy và giới hạn biến dạng của vật liệu.',
    'Hai ngưỡng nóng chảy nằm ở hai mức khác nhau trên trục T.',
    'Nhiệt độ nóng chảy quyết định khi nào chảy; λ quyết định năng lượng cho mỗi kg khi chảy.');
  multiple(a, 14, 'D3', 'chuyen-the',
    'Xét nước đá đang tan ở áp suất thường. Phát biểu nào không đúng?',
    ['Nội năng của mẫu tăng.', 'Mẫu hấp thụ nhiệt nóng chảy.', 'Nước lỏng có thể tích nhỏ hơn đá với cùng khối lượng.', 'Thế năng tương tác giảm trong mô hình đang xét.'], 3,
    'Năng lượng cấp vào chủ yếu thay đổi cấu trúc và thế năng tương tác.',
    'T không đổi khi đang tan nhưng Q = m_tanλ vẫn dương.',
    'Q dùng J; λ dùng J/kg.', 'Đề này nói về nước đá; không suy rộng biến đổi khối lượng riêng cho mọi chất.',
    'T theo thời gian có đoạn ngang dù U tăng.', 'Khoảng cách trung bình giảm không phải căn cứ để kết luận thế năng giảm.');
  multiple(a, 15, 'D1', 'nhiet-do',
    'Một học sinh cho rằng hạt trong nước đá đang tan ở 0 °C đứng yên. Đánh giá nào đúng?',
    ['Đúng vì 0 °C là độ không tuyệt đối.', 'Đúng vì vật rắn không có chuyển động nhiệt.',
      'Sai vì chỉ hạt khí chuyển động.', 'Sai vì 0 °C tương ứng khoảng 273 K, các hạt vẫn chuyển động nhiệt.'], 3,
    'Cả rắn, lỏng và khí đều có chuyển động nhiệt ở nhiệt độ thường.',
    'T = t + 273,15 khi cần quy đổi chính xác.', 'Độ không tuyệt đối là 0 K.',
    'Xét mức độ chuyển động nhiệt theo mô hình phổ thông.', 'Gốc Kelvin lệch khỏi gốc Celsius 273,15 độ chia.',
    'Số 0 trên một thang quy ước không chứng tỏ năng lượng nhiệt bằng 0.');
  multiple(a, 16, 'D3', 'can-bang',
    'Trộn nước lỏng và nước đá cùng ở 0 °C trong hệ cách nhiệt ở áp suất thường. Theo mô hình cân bằng pha, điều gì xảy ra?',
    ['Đá tan hết.', 'Nước đông hết.', 'Không có thay đổi ròng về khối lượng mỗi pha.', 'Hệ giảm nhiệt độ xuống dưới 0 °C.'], 2,
    'Hai pha đang ở nhiệt độ cân bằng và không có nguồn năng lượng ngoài.',
    'Muốn làm tan thêm Δm cần Q = λΔm.', 'Q tính bằng J.',
    'Bỏ qua tác động cơ học, tạp chất và thất thoát.', 'Hệ ở đoạn cân bằng pha tại 0 °C.',
    'Nước ở 0 °C không có phần nhiệt do giảm đến 0 °C để cấp cho đá.');
  multiple(a, 17, 'D3', 'chuyen-the',
    'Vì sao khu vực quanh tuyết đang tan có thể lạnh đi?',
    ['Băng nhả ra khí lạnh.', 'Không khí luôn lạnh đi ngay khi độ ẩm tăng.', 'Tuyết hết che tia tử ngoại.', 'Tuyết thu năng lượng từ môi trường để nóng chảy.'], 3,
    'Chuyển từ rắn sang lỏng cần nhiệt lượng.', 'Q_tuyết = λm_tan > 0.',
    'λ dùng J/kg.', 'Khi môi trường là nguồn cấp năng lượng cho tuyết.',
    'Đoạn nóng chảy có T tuyết gần không đổi.', 'Bản thân nhiệt độ tuyết không cần tăng khi nhận nhiệt.');
  multiple(a, 18, 'D3', 'sai-so',
    'Đo λ bằng PΔτ/m_tan. Mẫu đang ở nhiệt độ nóng chảy cao hơn môi trường. Nếu bỏ qua sự mất nhiệt ra ngoài, kết quả lệch thế nào?',
    ['Thấp do mẫu nhận nhiệt từ phòng.', 'Cao do chỉ một phần điện năng làm tan mẫu.', 'Cao vì mẫu nhẹ đi.', 'Thấp vì mẫu nặng lên.'], 1,
    'Nhiệt truyền từ mẫu nóng ra môi trường lạnh.', 'λ thật = (PΔτ − Q_mất)/m_tan.',
    'Q_mất tính bằng J.', 'P ổn định; mẫu đang tan, bỏ qua đổi nhiệt dung của dụng cụ.',
    'Đồ thị m_tan theo thời gian có độ dốc nhỏ hơn trường hợp không mất nhiệt.',
    'Nguồn thất thoát lấy bớt năng lượng, không làm tăng m_tan.');

  trueFalse(a, 1, 'D1', 'nhiet-do',
    'Cùng một nhiệt kế điện tử có đầu dò tiếp xúc được dùng lần lượt với A và B. Sau khi cân bằng với mỗi vật, màn hình đều chỉ 22,5 °C. B có kích thước lớn hơn A.', [
      ['Hai vật có nhiệt độ bằng nhau theo số đo.', true, 'Cả hai cùng cân bằng với nhiệt kế ở 22,5 °C.'],
      ['Nếu cho A và B tiếp xúc thì không có truyền nhiệt ròng.', true, 'Chênh lệch nhiệt độ bằng 0.'],
      ['B lạnh hơn A vì có kích thước lớn hơn.', false, 'Kích thước không đổi được kết luận từ số đo.'],
      ['Đầu dò tiếp xúc là dấu hiệu của phương pháp đo hồng ngoại từ xa.', false, 'Đầu dò đo ở cân bằng nhiệt; đo hồng ngoại dựa vào bức xạ.']
    ], 'Dùng tính bắc cầu của cân bằng nhiệt.', 'T_A = T_C = T_B; ở cân bằng, Q ròng = 0.',
    'T có thể ghi theo °C.', 'Đợi nhiệt kế cân bằng với từng vật.', 'Đồ thị hai số đo ổn định ở cùng mức.', 'Phân biệt truyền nhiệt ròng với trao đổi vi mô.');
  trueFalse(a, 2, 'D3', 'chuyen-the',
    'Kim loại được cấp nhiệt với công suất hữu ích không đổi. Đường nhiệt độ đi qua (0 phút; 100 °C), (2 phút; 300 °C), (12 phút; 300 °C), (15 phút; 500 °C). Các điểm liên tiếp nối bằng đoạn thẳng.', [
      ['Nội năng không đổi từ 5 đến 10 phút.', false, 'Mẫu tiếp tục nhận nhiệt để chuyển thể.'],
      ['Nhiệt dung riêng ở pha rắn nhỏ hơn pha lỏng.', true, 'Đoạn rắn dốc hơn vì cùng m và P.'],
      ['Nhiệt độ nóng chảy bằng 100 °C.', false, 'Đoạn nằm ngang ở 300 °C.'],
      ['Trong khoảng 5 đến 10 phút có đồng thời rắn và lỏng.', true, 'Khoảng thời gian nằm giữa hai đầu đoạn nóng chảy.']
    ], 'Tách ba giai đoạn: làm nóng rắn, nóng chảy, làm nóng lỏng.', 'Q = mcΔT ở đoạn nghiêng, Q = mλ ở đoạn ngang.',
    'Độ dốc ở đây so sánh theo °C/phút.', 'Công suất hữu ích và khối lượng được coi là không đổi.',
    'Trục nhiệt độ bản gốc ghi đơn vị 100 °C, nên vạch 3 ứng với 300 °C.', 'Nhiệt độ không đổi vẫn có thể đi kèm nội năng tăng.');
  trueFalse(a, 3, 'D3', 'sai-so',
    'Đo khối lượng nóng chảy m₁, m₂ trong hai lần đun cùng thời gian τ với P₁ và P₂ khác nhau. Mẫu luôn ở nhiệt độ nóng chảy dưới nhiệt độ phòng. Coi nhiệt từ môi trường như nhau và nhiệt độ của nồi giữ nguyên.', [
      ['Mẫu truyền nhiệt cho môi trường.', false, 'Môi trường ở nhiệt độ cao hơn mẫu.'],
      ['Toàn bộ nhiệt mẫu nhận ở lần 2 chỉ bằng P₂τ.', false, 'Mẫu còn nhận phần nhiệt từ môi trường.'],
      ['Vỏ và thân nồi không tăng nội năng do tăng nhiệt độ trong mô hình này.', true, 'Nhiệt độ nồi không đổi trong hai khoảng đo.'],
      ['Có thể tính λ = (P₂ − P₁)τ/(m₂ − m₁).', true, 'Lấy hiệu hai phương trình năng lượng để khử phần nhiệt môi trường.']
    ], 'Đây là phép đo vi sai. Đại lượng gây sai lệch chung biến mất khi lấy hiệu.',
    'λmᵢ = Pᵢτ + Q_môi trường. Lấy phương trình 2 trừ phương trình 1.',
    'P tính bằng W, τ bằng s và m bằng kg.', 'Q_môi trường giống nhau; m₂ ≠ m₁.',
    'Ở τ cố định, m theo P có độ dốc τ/λ và có thể có tung độ gốc khác 0.',
    'Biểu thức ở ý d bản PDF bị mất ký hiệu mẫu số; bản luyện ghi đầy đủ m₂ − m₁. Nồi giữ nguyên nhiệt độ vẫn có thể truyền nhiệt qua vỏ.');
  trueFalse(a, 4, 'D1', 'vi-mo',
    'Xét hàn nhiệt một mối nối của nhựa, khi lớp nhựa mềm có thể kết dính rồi cứng lại khi nguội.', [
      ['Mọi nhựa đều có đúng một nhiệt độ nóng chảy và giữ nhiệt độ đó trong suốt quá trình.', false, 'Vật liệu vô định hình có thể mềm dần qua một khoảng nhiệt độ.'],
      ['Khối lượng riêng luôn giữ nguyên khi nóng lên, chảy và nguội.', false, 'Thể tích có thể đổi ngay cả khi m giữ nguyên.'],
      ['Mối nối bền chứng minh lực hút luôn vượt hoàn toàn lực đẩy.', false, 'Cấu trúc ổn định liên quan đến vị trí cân bằng của tương tác.'],
      ['Tăng công suất tới mức tối đa luôn giảm nguy cơ nhựa phân hủy.', false, 'Làm quá nhiệt có thể gây phân hủy; tăng công suất không bảo đảm an toàn.']
    ], 'Tách tính chất của vật liệu khỏi quy tắc dành cho chất tinh khiết kết tinh.',
    'ρ = m/V và khi ở khoảng cách cân bằng cơ học, lực tổng hợp bằng 0.',
    'ρ dùng kg/m³, nhiệt độ dùng °C hoặc K.', 'Tính chất cụ thể phụ thuộc loại nhựa.',
    'Chất mềm qua một khoảng không có đoạn nằm ngang sắc nét như mẫu kết tinh tinh khiết lý tưởng.',
    'Dòng chú thích lẻ trong PDF không được dùng làm đáp án; xét từng ý theo vật lí.');

  short(a, 1, 'D2', 'noi-nang',
    'Bao cát 1 kg trượt đều trên ván dài 10 m, nghiêng 32° so với phương ngang. Toàn bộ công tiêu hao do ma sát làm tăng nội năng hệ bao và ván. Lấy g = 10 m/s². Độ tăng nội năng theo J, làm tròn đến hàng đơn vị?', '53', 'J',
    'Động năng không đổi vì bao trượt đều.', 'Độ giảm thế năng bằng mgs sin 32° ≈ 52,99 J, chuyển thành nội năng.',
    'm bằng kg, s bằng m và g bằng m/s².', 'Không mất năng lượng ra ngoài hệ theo giả thiết.',
    'Độ cao giảm là hình chiếu theo phương thẳng đứng của 10 m.', 'Dùng sin đối với góc đo với phương ngang.');
  short(a, 2, 'D1', 'nhiet-do',
    'Một vật nóng lên thêm 15 °C. Số chỉ Fahrenheit tăng bao nhiêu °F?', '27', '°F',
    'Khi lấy hiệu, độ lệch gốc 32 bị triệt tiêu.', 'Δt_F = 1,8 × 15 = 27 °F.',
    'Độ tăng ghi theo °F.', 'Đây là độ tăng, không phải số chỉ cuối.',
    'Độ dốc đường Fahrenheit theo Celsius bằng 1,8.', 'Không cộng 32 cho độ biến thiên.');
  short(a, 3, 'D4', 'boyle',
    'Nén đẳng nhiệt một lượng khí từ 24 L xuống 16 L. Áp suất tăng thêm 30 kPa. Tính áp suất ban đầu theo kPa.', '60', 'kPa',
    'Thể tích giảm nên áp suất tăng.', '24p₁ = 16(p₁ + 30), suy ra p₁ = 60 kPa.',
    'Hai V cùng dùng L và hai p cùng dùng kPa trong phương trình tỉ số.', 'Lượng khí kín, T không đổi, p tuyệt đối.',
    'Hai trạng thái nằm trên cùng hypebol p–V.', '30 kPa là độ chênh áp suất, không phải áp suất cuối.');

  var iceMix = 'Trộn 0,50 kg đá ở −10 °C với 4,20 kg nước ở 80 °C. Bỏ qua thất thoát và nhiệt dung dụng cụ. Cho c_đá = 2100, c_nước = 4200 J/(kg·K) và λ = 333000 J/kg. ';
  var balanceFormula = 'Nước có thể tỏa 1 411 200 J khi nguội về 0 °C, lớn hơn 177 000 J cần để làm ấm và làm tan đá. Cân bằng: 4,2 × 4200(80 − t) = 177000 + 0,5 × 4200t. t ≈ 62,5228 °C.';
  short(a, 4, 'D3', 'can-bang', iceMix + 'Tính nhiệt độ cân bằng theo °C, làm tròn một chữ số thập phân.', '62,5', '°C',
    'Kiểm tra đủ nhiệt để làm tan hết đá rồi tính phần nước tan nóng lên.', balanceFormula,
    'Khối lượng dùng kg, nhiệt lượng dùng J và ΔT dùng K hoặc °C.', 'Cân bằng nhiệt trong hệ cách nhiệt, áp suất thường.',
    'Đường đun mẫu đá gồm dốc đến 0 °C, đoạn ngang, rồi dốc trở lại.', 'Cần tính nhiệt dung của cả đá đã tan khi nhiệt độ cuối trên 0 °C.');
  short(a, 5, 'D3', 'can-bang', iceMix + 'Viết nhiệt lượng do 4,20 kg nước tỏa ra là x × 10⁵ J. Tính x, làm tròn hai chữ số thập phân.', '3,08', '',
    'Dùng nhiệt độ cân bằng chưa làm tròn của câu trước.', balanceFormula + ' Q_tỏa ≈ 308 297,9 J, nên x ≈ 3,08.',
    'x là hệ số của 10⁵ J.', 'Giữ đầy đủ chữ số trong phép tính trung gian.',
    'Nhiệt độ nước giảm từ 80 °C tới mức cân bằng, không giảm đến 0 °C.',
    'Nhiệt lượng tỏa ra được báo bằng độ lớn dương.');
  short(a, 6, 'D3', 'nang-luong',
    'Bộ thu diện tích 3,20 m² nhận bức xạ trung bình 710 W/m², hiệu suất 36%. Bình chứa 160 L nước (ρ = 1000 kg/m³, c = 4200 J/(kg·K)). Mặt Trời mọc 06:10, lặn 17:50; bóng che cắt 1 giờ 20 phút đầu và 50 phút cuối. Mất thêm 6% phần nhiệt sau chuyển đổi. Nước tăng bao nhiêu °C, làm tròn đến hàng đơn vị?', '39', '°C',
    'Tìm thời gian thực nhận nắng rồi nhân hai hệ số hữu ích.',
    'Thời gian từ 07:30 đến 17:00 là 34 200 s. Q = 710 × 3,20 × 34200 × 0,36 × 0,94. ΔT = Q/(160 × 4200) ≈ 39,13 °C.',
    'Bức xạ W/m² nhân m² cho W; 160 L tương ứng 160 kg.', 'Coi bức xạ trung bình không đổi trong giờ có nắng.',
    'Năng lượng tới bằng diện tích dưới đồ thị công suất theo thời gian.', 'Dùng 0,36 × 0,94 thay vì 36% − 6%.');

  multiple(b, 1, 'D6', 'boyle',
    'Một lượng khí lí tưởng kín giãn nở đẳng nhiệt. Mật độ số phân tử thay đổi thế nào?',
    ['Tăng khi áp suất giảm.', 'Giảm và tỉ lệ thuận với áp suất.', 'Không đổi.', 'Tăng và không liên hệ với áp suất.'], 1,
    'Cùng số hạt trong thể tích lớn hơn làm mật độ giảm.', 'p = μkT và μ = N/V.',
    'μ dùng m⁻³.', 'N và T không đổi.',
    'Đồ thị p theo μ là đường qua gốc, độ dốc kT.', 'Mật độ số khác tổng số hạt.');
  multiple(b, 2, 'D4', 'boyle',
    'Đơn vị nào không đo áp suất?', ['bar.', 'mmHg.', 'N·m².', 'Pa.'], 2,
    'Áp suất là lực trên mỗi đơn vị diện tích.', 'p = F/S; 1 Pa = 1 N/m².',
    'bar, mmHg và Pa đều là đơn vị áp suất.', 'Dùng đơn vị thống nhất khi cộng các áp suất.',
    'Trên đồ thị F theo S ở p cố định, p là độ dốc.', 'N/m² và N·m² có thứ nguyên khác nhau.');
  multiple(b, 3, 'D3', 'nhiet-dung',
    'Để hấp thụ nhiều nhiệt mà độ tăng nhiệt độ nhỏ, chất lỏng làm mát cần có tính chất nào?',
    ['Nhiệt nóng chảy riêng lớn.', 'Khối lượng riêng lớn là đủ.', 'Nhiệt độ nóng chảy lớn.', 'Nhiệt dung riêng lớn.'], 3,
    'Chất có thể mang đi nhiều năng lượng trên mỗi kg cho một mức nóng lên nhất định.',
    'ΔT = Q/(mc).', 'c tính bằng J/(kg·K).', 'So sánh cùng m, cùng Q, không chuyển thể.',
    'Đường T theo Q có độ dốc 1/(mc).', 'Độ tăng nhiệt nhỏ hơn mới là lợi thế trong phép so sánh này.');
  multiple(b, 4, 'D1', 'chuyen-the',
    'Viên long não rắn nhỏ dần và phát mùi mà không qua pha lỏng. Tên chuyển thể?',
    ['Thăng hoa.', 'Ngưng kết.', 'Bay hơi từ chất lỏng.', 'Nóng chảy.'], 0,
    'Phân tử thoát trực tiếp từ rắn sang khí.', 'Rắn → khí là thăng hoa.',
    'Nhiệt chuyển thể tính bằng J.', 'Xét đường chuyển trực tiếp, không qua lỏng.',
    'Sơ đồ pha nối trực tiếp rắn và khí trong điều kiện phù hợp.', 'Bay hơi gọi cho chuyển từ pha lỏng sang pha hơi.');
  multiple(b, 5, 'D2', 'noi-nang',
    'Nén nhanh một lượng khí lí tưởng trong xi-lanh cách nhiệt. Chọn nhận xét đúng.',
    ['Khí nhận công và nguội.', 'Khí nhận công, nội năng và nhiệt độ tăng.',
      'Khí thực hiện công ra ngoài và nóng lên.', 'Nội năng không đổi do đã hoàn thành chu trình.'], 1,
    'Môi trường truyền công vào khí.', 'Q ≈ 0, A > 0, ΔU ≈ A > 0.',
    'Q, A và ΔU dùng J.', 'Lượng khí kín, coi trao đổi nhiệt không đáng kể.',
    'Trên p–V, đường nén nhanh có thể nằm trên đường đẳng nhiệt từ cùng điểm đầu.',
    'Không đồng nhất cách nhiệt với đẳng nhiệt.');
  multiple(b, 6, 'D3', 'nhiet-dung',
    'Trong mô hình gió biển – gió đất do đất nóng lên và nguội nhanh hơn nước, ban đêm gió ròng gần mặt đất thường theo hướng nào?',
    ['Từ đất liền ra biển.', 'Từ biển vào đất liền giống ban ngày.', 'Không đổi vì đất và nước nguội như nhau.', 'Chỉ thổi thẳng đứng.'], 0,
    'Ban đêm đất nguội nhanh hơn, không khí trên biển có thể ấm hơn và đi lên.',
    'Với cùng năng lượng trao đổi trên mỗi kg, độ biến thiên nhiệt độ tỉ lệ nghịch với c.',
    'c dùng J/(kg·K).', 'Mô hình hoàn lưu cục bộ đơn giản, chưa xét gió nền và địa hình.',
    'Đường T của đất dao động mạnh hơn đường của nước trong chu kì ngày đêm.',
    'Phân biệt chiều gió sát mặt đất với nhánh hồi lưu ở trên cao.');
  multiple(b, 7, 'D2', 'noi-nang',
    'Đại lượng vi mô nào góp phần vào nội năng của vật?',
    ['Động năng của cả vật do vật chuyển động trên đường.', 'Động năng chuyển động nhiệt của các hạt tạo nên vật.',
      'Thế năng trọng trường của cả vật.', 'Chỉ công khí quyển tác dụng lên vật.'], 1,
    'Nội năng là năng lượng vi mô của các hạt trong hệ.', 'U gồm động năng nhiệt và thế năng tương tác.',
    'U tính bằng J.', 'Tách chuyển động tịnh tiến chung của vật khỏi chuyển động nhiệt.',
    'Khi không chuyển thể, làm nóng thường làm U tăng theo T.',
    'Cả vật chạy nhanh hơn không tự động có U lớn hơn.');
  multiple(b, 8, 'D3', 'nhiet-dung',
    'Hai khối sắt và chì cùng khối lượng nóng thêm cùng số độ mà không chuyển thể. Biết c_sắt > c_chì. So sánh nhiệt lượng cần cấp.',
    ['Sắt cần nhiều hơn.', 'Chì cần nhiều hơn.', 'Bằng nhau.', 'Không đủ dữ kiện để so sánh.'], 0,
    'c lớn hơn đòi hỏi nhiều nhiệt hơn cho cùng mức tăng nhiệt độ.',
    'Q_sắt/Q_chì = c_sắt/c_chì > 1.', 'Q dùng J; ΔT dùng K.',
    'Coi c là giá trị trung bình trong khoảng đang xét.', 'Đường Q theo ΔT của sắt có độ dốc lớn hơn.',
    'Xem đề đã cố định đại lượng nào trước khi lập tỉ lệ.');
  multiple(b, 9, 'D3', 'nhiet-dung',
    'Hai cốc giống nhau chứa cùng lượng nước nóng, đặt trong cùng phòng. Coi hệ số làm nguội như nhau và bỏ qua bay hơi. Sau cùng một thời gian, cốc 1 giảm 15 °C, cốc 2 giảm 10 °C. Cốc nào có nhiệt độ ban đầu cao hơn?',
    ['Bằng nhau.', 'Cốc 2.', 'Cốc 1.', 'Phải do c khác nhau.'], 2,
    'Với cùng điều kiện tản nhiệt, mẫu ban đầu nóng hơn phòng nhiều hơn sẽ mất nhiều nhiệt hơn.',
    'Theo mô hình làm nguội Newton, ΔT_giảm = (T_đầu − T_phòng)(1 − e^(−kτ)).',
    'k dùng s⁻¹ khi τ dùng s.', 'Giả sử điều kiện trao đổi nhiệt, dụng cụ và khối lượng như nhau.',
    'Sau cùng thời gian, các chênh lệch so với phòng giảm theo cùng tỉ lệ.',
    'Kết luận cần giả thiết làm nguội tương đương, không dựa riêng vào Q = mcΔT.');
  multiple(b, 10, 'D6', 'vi-mo',
    'Trong mô hình khí lí tưởng, tương tác phân tử được mô tả thế nào?',
    ['Lực hút luôn mạnh.', 'Tương tác tầm xa quyết định mọi quỹ đạo.',
      'Bỏ qua giữa các lần va chạm, có trao đổi động lượng lúc va chạm.', 'Bằng không kể cả lúc va chạm.'], 2,
    'Hạt coi như chất điểm chuyển động tự do giữa các va chạm đàn hồi.',
    'Va chạm có xung lượng Δp_đl, làm đổi động lượng từng hạt.',
    'Động lượng dùng kg·m/s.', 'Gần đúng tốt hơn ở khí loãng, xa ngưng tụ.',
    'Quỹ đạo giữa hai lần va chạm là đoạn thẳng khi không có lực ngoài.',
    'Bỏ qua lực giữa các lần va chạm không có nghĩa bỏ qua va chạm.');
  multiple(b, 11, 'D4', 'boyle',
    'Một lốp kín nóng lên, coi thể tích không đổi. Áp suất tuyệt đối của khí bên trong thay đổi ra sao?',
    ['Giảm.', 'Không đổi.', 'Tăng.', 'Chỉ phụ thuộc tốc độ xe.'], 2,
    'Phân tử va chạm với thành với động lượng lớn hơn ở nhiệt độ cao hơn.',
    'p/T = nR/V không đổi.', 'Dùng T tuyệt đối theo K.',
    'Cùng lượng khí kín, thể tích coi như cố định.', 'Đồ thị p theo T là đường thẳng qua gốc.',
    'Mô hình dự đoán áp suất tăng; kiểm tra áp suất lốp theo khuyến cáo ở trạng thái lốp nguội.');
  multiple(b, 12, 'D4', 'boyle',
    'Khi đo Boyle, học sinh nén nhanh rồi đọc áp suất ngay. Vì sao số đo có thể cao hơn giá trị đẳng nhiệt?',
    ['Van luôn bị rò theo chiều vào.', 'Khí nhận công, chưa kịp tỏa nhiệt, nên nhiệt độ tăng.',
      'Thể tích thực tăng.', 'Áp suất không liên quan đến nhiệt độ.'], 1,
    'Trong thời gian ngắn, năng lượng truyền vào chủ yếu bằng công nén.',
    'T tăng làm p = nRT/V tăng so với trạng thái đã nguội ở cùng V.',
    'T dùng K và p dùng Pa.', 'Nén đủ nhanh so với thời gian trao đổi nhiệt.',
    'Sau khi dừng ở V cuối, p giảm dần trong khi khí nguội.',
    'Đo chậm hoặc đợi ổn định trước khi ghi số.');
  multiple(b, 13, 'D3', 'chuyen-the',
    'Nước đang sôi ổn định trong bình hở. Phần nhiệt hữu ích chủ yếu dùng để làm gì?',
    ['Tăng nhiệt độ nước.', 'Tách các phân tử xa nhau khi tạo hơi.', 'Tăng thế năng trọng trường của nước trong bình.', 'Phân hủy H₂O thành nguyên tố.'], 1,
    'Hóa hơi là chuyển thể, không phải phản ứng hóa học.',
    'Năng lượng dùng cho chuyển thể theo Q = mL; có thể có phần mất ra phòng.',
    'L dùng J/kg.', 'Chất lỏng sôi ở áp suất gần như không đổi.',
    'T theo thời gian gần như nằm ngang khi sôi đều.',
    'T không tăng đáng kể dù hệ vẫn nhận nhiệt.');
  multiple(b, 14, 'D3', 'sai-so',
    'Vì sao cần khuấy nhẹ khi đo nhiệt dung riêng của nước trong nhiệt lượng kế?',
    ['Để dùng công ma sát làm nguồn nhiệt chính.', 'Để nước có nhiệt độ đồng đều hơn tại thời điểm đọc.',
      'Để đẩy nhanh phần bay hơi.', 'Để thay thế cách điện của thiết bị.'], 1,
    'Đầu đo đọc tại một vị trí nên sẽ lệch nếu có lớp nước nóng cục bộ.',
    'Dùng ΔT đại diện cho cả khối nước trong Q = mcΔT.',
    'Độ biến thiên dùng K hoặc °C.', 'Khuấy nhẹ và dùng mô hình nhiệt đồng đều.',
    'Đồ thị T theo thời gian ổn định hơn khi đầu dò đại diện toàn mẫu.',
    'Khuấy không nhằm tạo nhiệt đáng kể.');
  multiple(b, 15, 'D1', 'nhiet-do',
    'Kim loại A và chất lỏng B tiếp xúc nhiệt. U_A < U_B nhưng T_A > T_B. Chiều truyền nhiệt ròng ban đầu?',
    ['Từ B sang A.', 'Từ A sang B.', 'Không truyền.', 'Hai chiều có độ lớn ròng bằng nhau.'], 1,
    'Nhiệt tự truyền từ nhiệt độ cao đến nhiệt độ thấp.', 'Ban đầu Q_A < 0 và Q_B > 0.',
    'Nhiệt lượng dùng J.', 'Không có tác dụng từ thiết bị đưa nhiệt ngược chiều.',
    'Hai nhiệt độ tiến gần nhau theo thời gian.', 'Không dùng thứ tự nội năng để suy chiều.');
  multiple(b, 16, 'D6', 'vi-mo',
    'Hạt bụi nhỏ đổi hướng liên tục dưới kính hiển vi. Nguồn gốc chuyển động Brown là gì?',
    ['Lực điện đẩy thường trực.', 'Các va chạm tức thời không cân bằng từ phân tử khí đang chuyển động nhiệt.',
      'Ánh sáng là nguồn duy trì chuyển động.', 'Trọng lực kéo hạt theo quỹ đạo tròn.'], 1,
    'Ta nhìn thấy hạt bụi, còn từng phân tử khí làm môi trường va chạm thì không quan sát được theo cách đó.',
    'Hợp xung lượng ngẫu nhiên làm v của hạt đổi cả hướng lẫn độ lớn.',
    'Vận tốc dùng m/s; xung lượng dùng N·s.', 'Cần phân biệt Brown với dòng khí có hướng.',
    'Quỹ đạo ghi nhận là đường gấp khúc bất quy tắc.', 'Bụi không phải phân tử khí.');
  multiple(b, 17, 'D5', 'p-t',
    'Trên đồ thị p–T có bốn điểm ở các góc hình chữ nhật: a thấp trái, b cao trái, c cao phải, d thấp phải. T tăng sang phải, p tăng lên trên. Với cùng lượng khí, điểm nào có V lớn nhất?',
    ['a.', 'b.', 'c.', 'd.'], 3,
    'V lớn khi tỉ số T/p lớn.', 'V = nRT/p.',
    'T là K và p là áp suất tuyệt đối.', 'Cùng n tại mọi điểm.',
    'Tia từ gốc đến d thoải nhất vì T lớn nhất và p nhỏ nhất.',
    'So độ dốc tia từ gốc, không so độ dốc các cạnh hình chữ nhật.');
  multiple(b, 18, 'D3', 'sai-so',
    'Trong phép đo L khi nước sôi đều, dùng bình hở có mục đích vật lí chính nào?',
    ['Giữ áp suất gần áp suất khí quyển và để hơi thoát, phục vụ đo mất khối lượng.',
      'Làm nước sôi ở bất kì nhiệt độ nào.', 'Ngăn mọi thất thoát nhiệt.', 'Giữ toàn bộ hơi lại để cân không đổi.'], 0,
    'Bình hở để hơi thoát và giữ điều kiện áp suất xác định.',
    'Nếu bỏ qua thất thoát, PΔτ ≈ LΔm.', 'Δm dùng kg, L dùng J/kg.',
    'Đo khi sôi ổn định, loại trừ lượng nước bắn ra hoặc ngưng tụ trở lại.',
    'Khối lượng suy giảm gần tuyến tính khi công suất hữu ích ổn định.',
    'Từ khối lượng giảm chỉ suy đúng lượng hơi thoát theo giả thiết đã nêu.');

  trueFalse(b, 1, 'D3', 'nhiet-dung',
    'Một nhóm thảo luận về sự khác nhau giữa nhiệt dung C và nhiệt dung riêng c.', [
      ['Từ c = Q/(mΔT), suy ra riêng tăng Q làm c luôn tăng.', false, 'Q thay đổi có thể kéo ΔT thay đổi.'],
      ['Hai vật cùng vật liệu và cùng nhiệt độ luôn có cùng nhiệt dung C.', false, 'C còn phụ thuộc khối lượng.'],
      ['Giá trị c của kim loại bất biến ở mọi nhiệt độ.', false, 'Có thể coi gần hằng trong khoảng hẹp, còn khoảng rộng cần xét c(T).'],
      ['Nước làm mát tốt vì cùng Q và m thì nước nóng lên nhiều hơn.', false, 'c lớn làm nước nóng lên ít hơn.']
    ], 'Nhiệt dung của cả vật khác đại lượng riêng theo khối lượng.', 'C = mc; ΔT = Q/C khi không chuyển thể.',
    'C có đơn vị J/K và c có đơn vị J/(kg·K).', 'Dùng c trung bình thích hợp với khoảng nhiệt độ.',
    'Độ dốc Q theo ΔT là C nếu c gần như không đổi.', 'Cùng vật liệu vẫn có thể có hai nhiệt dung C khác nhau.');
  trueFalse(b, 2, 'D3', 'can-bang',
    'Đo λ bằng cách thả đá ở 0 °C vào nhiệt lượng kế chứa nước ấm. Xét trường hợp đá tan hết và hỗn hợp đạt cân bằng.', [
      ['Cần thấm nước bám ngoài trước khi cân đá.', true, 'Nước bám làm khối lượng đem cân lớn hơn lượng đá thực.'],
      ['Ở đoạn nóng chảy, thế năng tương tác giảm vì nhiệt độ giữ ở 0 °C.', false, 'Nhiệt cấp vào làm tăng nội năng; trong mô hình phổ thông, phần tương tác tăng.'],
      ['Nếu nhiệt độ hệ luôn thấp hơn phòng, bỏ qua nhiệt nhận từ phòng làm λ tính được lớn hơn.', false, 'Khi bỏ qua nguồn nhiệt bổ sung, tử số dùng để tính λ bị thiếu nên λ bị thấp.'],
      ['Nếu bình và que khuấy nguội đi mà bỏ qua nhiệt chúng tỏa ra, λ tính được nhỏ hơn.', true, 'Nguồn nhiệt từ dụng cụ bị bỏ sót trong phương trình.']
    ], 'Kế toán phần năng lượng đi vào đá, kể cả phần bình và môi trường.', 'm_đáλ = Q_nước + Q_bình + Q_phòng − Q_làm ấm nước tan.',
    'Q tính bằng J và λ bằng J/kg.', 'Xét riêng từng nguồn sai số, đá bắt đầu ở 0 °C.',
    'Phần nóng chảy nằm ngang, sau đó nước vừa tan có thể ấm lên.',
    'Cùng nhận nhiệt từ phòng nhưng chiều sai số có thể khác phép đo điện vì công thức suy ngược khác nhau.');
  trueFalse(b, 3, 'D5', 'p-t',
    'Khí kín dưới pít-tông thẳng đứng khối lượng m, diện tích S, trượt không ma sát. Gia nhiệt chậm để pít-tông đi lên. Áp suất khí quyển p₀ không đổi.', [
      ['Áp suất khí giữ không đổi và đúng bằng p₀ dù m khác 0.', false, 'Giá trị đúng gần cân bằng là p₀ + mg/S.'],
      ['Phần nhiệt không làm tăng nội năng chỉ dùng để tăng thế năng của pít-tông.', false, 'Khí còn thực hiện công đẩy khí quyển.'],
      ['Mật độ phân tử và khối lượng riêng của khí đều giảm.', true, 'Cả khối lượng và số hạt đều giữ nguyên, còn V tăng.'],
      ['Toàn bộ nhiệt nhận vào biến thành công.', false, 'Ở p không đổi, khí nóng lên và U của khí lí tưởng tăng.']
    ], 'Cân bằng lực xác định áp suất; cân bằng năng lượng xác định công và nhiệt.',
    'pS = p₀S + mg. Q = ΔU + p₀ΔV + mgΔz với ΔV = SΔz.',
    'p dùng Pa, S dùng m², công dùng J.', 'Quá trình gần cân bằng, khí kín, bỏ qua ma sát.',
    'Trên p–V, đoạn đẳng áp nằm ngang. Diện tích hình chữ nhật là pΔV.',
    'mgΔz chỉ chiếm một phần công khi bên ngoài có áp suất khí quyển.');
  trueFalse(b, 4, 'D5', 'chim',
    'Túi khí kín có vách mềm, không đáng kể sức căng, chìm chậm trong nước. Nhiệt độ nước và khối lượng riêng coi như không đổi. Túi đủ nhỏ để lấy p ở độ sâu đại diện.', [
      ['Xuống sâu, các hạt trong túi cách nhau xa hơn.', false, 'Áp suất tăng làm thể tích giảm ở cùng T.'],
      ['Khí nhận công nén và truyền nhiệt ra nước.', true, 'Khí lí tưởng đẳng nhiệt có ΔU = 0 và A > 0, nên Q = −A.'],
      ['Lực nổi của túi không đổi vì khối lượng khí không đổi.', false, 'Lực nổi phụ thuộc thể tích chiếm chỗ.'],
      ['Tích pF_nổi không đổi trong mô hình đã cho.', true, 'pF_nổi = ρg pV = ρg nRT.']
    ], 'Độ sâu điều khiển áp suất ngoài, áp suất điều khiển thể tích của túi.',
    'p ≈ p₀ + ρgh, V = nRT/p, F_nổi = ρgV.',
    'h dùng m, p dùng Pa, F_nổi dùng N.', 'Vách mềm, thí nghiệm đủ chậm, mật độ nước cố định.',
    'p theo h tăng tuyến tính, V theo p giảm dạng hypebol.',
    'Túi kín giữ khối lượng nhưng thể tích thay đổi.');
  short(b, 1, 'D1', 'nhiet-do',
    'Buồng sấy trước khi chạy ở 25 °C. Tính số chỉ Fahrenheit theo t_F = 32 + 1,8t_C.', '77', '°F',
    'Đổi một số chỉ tuyệt đối bằng cả hệ số góc lẫn độ lệch gốc.',
    't_F = 32 + 1,8 × 25 = 77 °F.', 'Tính theo °F.',
    'Áp dụng cho một số chỉ Celsius, không phải độ tăng.',
    'Đường đổi thang có tung độ gốc 32 °F.', 'Đừng quên mốc 32.');
  short(b, 2, 'D1', 'nhiet-do',
    'Nhiệt độ buồng sấy tăng thêm 150 °C. Trên thang Fahrenheit, số chỉ tăng bao nhiêu °F?', '270', '°F',
    'Lấy số chỉ cuối trừ số chỉ đầu.', 'Δt_F = 1,8 × Δt_C = 270 °F.',
    'Độ biến thiên được tính theo °F.', 'Cùng hệ số đổi ở hai trạng thái.',
    'Độ dốc đường đổi thang là 1,8.', 'Không cộng 32 khi chỉ đổi độ chênh.');

  global.LY_HAI_DE_NHIET_KHI = { de_pdf_a: a, de_pdf_b: b };
})(window);
