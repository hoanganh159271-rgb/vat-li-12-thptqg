/* Minh họa theo mã câu hỏi. Các đường biểu diễn không có vạch số là đồ thị định tính. */
(function (global) {
  'use strict';

  var visuals = {
    lttn_b1_01: matter('Chuyển động của hạt ở ba thể',
      'Rắn kết tinh · dao động tại nút mạng', 'Lỏng · các hạt kề nhau, đổi chỗ', 'Khí · các hạt ở xa nhau'),
    lttn_b1_02: plot('Nóng chảy ở áp suất không đổi', 'Thời gian', 'Nhiệt độ',
      [['Đoạn ngang: chất vẫn nhận nhiệt', [[0, 1], [2, 4], [5, 4], [7, 6]]]]),
    lttn_b1_03_ds: items('Ba hiện tượng khi cấp nhiệt',
      'Mặt thoáng → phân tử thoát ra', 'Mặt thoáng + trong lòng chất lỏng → bọt hơi',
      'Nóng chảy: T không đổi, U tăng', 'Rắn vô định hình → mềm dần qua một khoảng nhiệt độ'),
    lttn_b1_bo_sung_I: flow('Vì sao gió làm nước mất nhanh hơn?',
      'Hơi sát mặt nước', 'Gió cuốn hơi đi', 'Ít hơi quay lại pha lỏng'),
    lttn_b1_bo_sung_II: withPlot(items('So sánh đoạn nằm ngang của hai mẫu',
      'A tăng thêm 10 K trước khi tan · B bắt đầu tan ngay', 'A và B: cùng độ dài đoạn ngang mλ/P',
      'Đoạn ngang: Q = PΔτ > 0', 'P tăng → đoạn ngang ngắn hơn, độ cao giữ nguyên'), 'Thời gian', 'Nhiệt độ',
      [['A · lúc đầu lạnh hơn B', [[0, 1], [2, 4], [5, 4], [7, 6]]],
        ['B · bắt đầu tại nhiệt độ nóng chảy', [[0, 4], [3, 4], [5, 6]]]]),

    lttn_b2_01: flow('Hai thành phần của nội năng',
      'Động năng chuyển động nhiệt', '+ thế năng tương tác giữa các hạt', '= Nội năng U'),
    lttn_b2_02: flow('Năng lượng đi vào và đi ra khỏi hệ',
      'Đèn → nước và khí: Q > 0', 'Hơi giãn nở trong ống', 'Khí → nút bần: A < 0'),
    lttn_b2_03_ds: items('Dấu của công và nhiệt lượng',
      'Pít-tông → khí: A > 0', 'Nén nhanh, Q ≈ 0 → ΔU ≈ A',
      'Cọ xát → cơ năng chuyển thành nội năng', 'Q = +120 J, A = −45 J → ΔU = +75 J'),
    lttn_b2_bo_sung_I: flow('Cùng nội năng dù khác độ cao',
      'Giá cao · U như cũ', 'Dịch cả mẫu xuống · thế năng trọng trường giảm', 'Sàn · U như cũ'),
    lttn_b2_bo_sung_II: items('Chia quá trình tại lúc pít-tông dừng',
      'Trong lúc nén: V giảm, A > 0', 'Sau khi giữ pít-tông: V cố định, A = 0',
      'Khí → môi trường: Q < 0', 'Nén nhanh hơn thời gian trao đổi nhiệt: Q ≈ 0 trong lúc nén'),

    lttn_b3_01: flow('Chiều truyền nhiệt khi hai bình tiếp xúc',
      'A · 65 °C', 'Nhiệt truyền từ A sang B', 'B · 20 °C ban đầu; truyền ròng dừng khi T bằng nhau'),
    lttn_b3_02: flow('Các mốc quy đổi giữa Celsius và Kelvin',
      '−273,15 °C ↔ 0 K', '0 °C ↔ 273,15 K', 'Điểm ba của nước · 0,01 °C ↔ 273,16 K'),
    lttn_b3_03_ds: items('Đọc nhiệt kế và đổi thang',
      'Nhiệt độ tăng → cột chất lỏng dâng', '0 °C ↔ 273,15 K · điểm ba ↔ 273,16 K',
      'Chênh lệch 20 °C ↔ chênh lệch 20 K', 'Bầu nằm trong nước, cách đáy và thành cốc'),
    lttn_b3_bo_sung_I: plot('Hai vật tiến đến nhiệt độ cân bằng', 'Thời gian', 'Nhiệt độ',
      [['A · 20 °C → 30 °C', [[0, 20], [1, 24], [2, 27], [3, 29], [5, 30]]],
        ['B · 60 °C → 30 °C', [[0, 60], [1, 48], [2, 39], [3, 33], [5, 30]]]]),
    lttn_b3_bo_sung_II: withPlot(items('Nội suy trên đường chuẩn của đầu dò',
      '100 Ω ↔ 0 °C; 112 Ω ↔ 30 °C; 140 Ω ↔ 100 °C', 'ΔT/ΔR = 100 K/40 Ω = 2,5 K/Ω',
      'R theo °C → R theo K: dời gốc trục, giữ độ dốc', 'Đầu dò ↔ mẫu: chờ đến cùng nhiệt độ'), 'Nhiệt độ (°C)', 'Điện trở (Ω)',
      [['Đường chuẩn qua (0; 100), (30; 112) và (100; 140)', [[0, 100], [30, 112], [100, 140]]]]),

    lttn_b4_01: flow('Ý nghĩa của 380 J/(kg·K)',
      '1 kg đồng', 'Nhận 380 J, không chuyển thể', 'Nhiệt độ tăng 1 K'),
    lttn_b4_02: plot('Hệ số góc của đồ thị tăng nhiệt', 'Thời gian', 'Nhiệt độ',
      [['s = ΔT/Δτ; c = P/(ms) nếu bỏ qua thất thoát', [[0, 1], [6, 5]]]]),
    lttn_b4_03_ds: items('Nhiệt lượng kế nhận và phân bố năng lượng thế nào?',
      'Khuấy nhẹ → nhiệt độ nước đồng đều hơn', 'Điện năng → nước + vỏ bình + môi trường',
      'm tăng gấp đôi → mc tăng gấp đôi; c giữ nguyên', 'Dây đốt nhô lên → nhiều nhiệt thoát vào không khí'),
    lttn_b4_bo_sung_I: plot('Cùng khối lượng và công suất hữu ích', 'Thời gian', 'Mức tăng nhiệt độ',
      [['Mẫu A · dốc gấp đôi', [[0, 0], [4, 6]]], ['Mẫu B · c gấp đôi A', [[0, 0], [4, 3]]]]),
    lttn_b4_bo_sung_II: items('Tách nhiệt dung của nước và của bình',
      'Điện năng → nước (mcΔT) + bình (C₀ΔT)', 'P/(ms) = c + C₀/m → lớn hơn c',
      'P/s = mc + C₀ → tung độ gốc C₀', 'Hệ số góc Δ(P/s)/Δm → c'),

    lttn_b5_01: flow('Chuyển thể rắn → lỏng',
      'm kg chất rắn tại nhiệt độ nóng chảy', 'Cấp Q = mλ', 'm kg chất lỏng; λ có đơn vị J/kg'),
    lttn_b5_02: plot('Khoảng thời gian dùng để tính nhiệt nóng chảy', 'Thời gian', 'Nhiệt độ',
      [['Đoạn ngang τₘ → τₙ tại 0 °C', [[0, -4], [2, 0], [6, 0], [8, 4]]]]),
    lttn_b5_03_ds: items('Đo nóng chảy bằng hai cách',
      'Đoạn ngang 0 °C: đá + nước lỏng', 'Đá 0 °C, thấm nước bám ngoài → khối lượng ban đầu là của đá',
      'm tổng quá lớn → Pτ/m tổng nhỏ hơn λ', 'm tăng thêm = m có điện − m đối chứng'),
    lttn_b5_bo_sung_I: plot('Năng lượng cấp từ lúc đá ở −5 °C', 'Nhiệt lượng cấp', 'Nhiệt độ',
      [['Đá tăng từ −5 °C đến 0 °C, rồi mới nóng chảy', [[0, -5], [2, 0], [7, 0]]]]),
    lttn_b5_bo_sung_II: items('Hai phễu và phép trừ nền',
      '18 g có điện − 4 g tự tan = 14 g', '40 W × 120 s ÷ 0,014 kg ≈ 3,43 × 10⁵ J/kg',
      '18 g thay cho 14 g → mẫu số tăng → λ đo giảm', 'Phép trừ chính xác khi nhiệt môi trường cấp như nhau'),

    lttn_b6_01: flow('Nhiệt hóa hơi riêng ứng với một trạng thái',
      'Chọn chất lỏng', 'Xác định nhiệt độ hoặc áp suất chuyển thể', 'L = Q/m, đơn vị J/kg'),
    lttn_b6_02: plot('Chọn mốc đo khi nước đã sôi đều', 'Thời gian', 'Nhiệt độ',
      [['Đặt τ = 0 ở đầu đoạn sôi ổn định; vẫn xét thất thoát nhiệt', [[0, 1], [3, 5], [7, 5]]]]),
    lttn_b6_03_ds: items('Đọc số chỉ cân khi nước sôi',
      'm theo τ: đường gần thẳng dốc xuống', 'm₁ − m₂ → lượng hơi rời bình nếu không bị bắn nước',
      'Điện năng gồm phần thất thoát → L đo từ toàn bộ điện năng lớn hơn L', 'T gần như không đổi; nước → hơi vẫn cần năng lượng'),
    lttn_b6_bo_sung_I: plot('Áp suất thấp hơn làm giảm nhiệt độ sôi', 'Nhiệt độ', 'Áp suất',
      [['Áp suất hơi bão hòa', [[0, 1], [2, 2], [4, 4], [6, 7], [8, 11]]],
        ['Áp suất ngoài thấp · giao điểm sớm hơn', [[0, 4], [8, 4]]],
        ['Áp suất ngoài cao · giao điểm muộn hơn', [[0, 7], [8, 7]]]]),
    lttn_b6_bo_sung_II: items('Đọc hai đồ thị khối lượng và công suất',
      'P = Lr + Pₘ: hơi hóa + mất nhiệt', 'P/r = L + Pₘ/r > L',
      'Đồ thị P theo r: độ dốc ΔP/Δr = L nếu Pₘ giữ nguyên', 'Đồ thị m theo τ: độ dốc âm bằng −r'),

    lttn_b8_01: plot('Quỹ đạo minh họa của một hạt phấn hoa', 'Vị trí x', 'Vị trí y',
      [['Mỗi đoạn nối hai vị trí liên tiếp của hạt quan sát được',
        [[0, 1], [1, 3], [3, 2], [2, 4], [3, 6], [4, 4], [6, 5], [5, 2], [7, 3], [8, 1]]]]),
    lttn_b8_02: flow('Hai giai đoạn trong mô hình khí lí tưởng',
      'Giữa các va chạm · hạt coi như chất điểm', 'Va chạm · trao đổi động lượng', 'Va chạm đàn hồi · động năng toàn hệ va chạm được bảo toàn'),
    lttn_b8_03_ds: items('Quan sát Brown và giới hạn của mô hình khí',
      'Kính hiển vi → thấy hạt Brown', 'Cùng môi trường: T tăng → chuyển động Brown thường rõ hơn',
      'Hạt khí cách xa nhau → dễ nén', 'Áp suất cao, gần hóa lỏng → sai lệch mô hình lí tưởng'),
    lttn_b8_bo_sung_I: flow('Tách hai thành phần của quỹ đạo',
      'Cả đám cùng trôi → dòng khí', '+ từng hạt lệch ngẫu nhiên → Brown', '= quỹ đạo quan sát được'),
    lttn_b8_bo_sung_II: items('Thiết kế phép so sánh Brown',
      'Cả đám cùng dâng → có thể do đối lưu', 'Chờ nhiệt độ đồng đều → giảm dòng đối lưu',
      'Giữ cùng kích thước hạt và thời gian quan sát', 'Nhiều quỹ đạo → so sánh độ phân tán quanh tâm đám hạt'),

    lttn_b9_01: flow('Trình tự ghi một điểm đo Boyle',
      'Dịch pít-tông chậm', 'Chờ khí trở lại cân bằng nhiệt', 'Đọc p tuyệt đối và V'),
    lttn_b9_02: plot('Tuyến tính hóa định luật Boyle', '1/V', 'p',
      [['p = nRT × (1/V); hệ số góc là nRT', [[0, 0], [7, 5]]]]),
    lttn_b9_03_ds: withPlot(items('Các điểm đo giữ nguyên lượng khí',
      'Van kín → n cố định', 'Đồ thị pV theo p: đường ngang nếu T cố định',
      'Nén nhanh: T tăng → pV tăng tức thời', 'Cùng V: T₂ > T₁ → p₂ > p₁'), 'V', 'p',
      [['T₁ · nhiệt độ thấp hơn', [[1, 12], [2, 6], [3, 4], [4, 3], [6, 2], [8, 1.5]]],
        ['T₂ · áp suất cao hơn ở cùng V', [[1, 18], [2, 9], [3, 6], [4, 4.5], [6, 3], [8, 2.25]]]]),
    lttn_b9_bo_sung_I: flow('Đổi số chỉ áp kế trước khi áp dụng Boyle',
      'Áp kế dư: p dư', '+ áp suất khí quyển p₀', 'p tuyệt đối = p dư + p₀ → nhân với V'),
    lttn_b9_bo_sung_II: withPlot(items('Đưa thể tích ống nối vào phép đo',
      'Xi-lanh V đọc + ống nối V₀ = thể tích khí', 'p(V đọc + V₀) = nRT',
      'V đọc theo 1/p: tung độ gốc −V₀', 'Dừng sau khi nén → chờ khí về nhiệt độ phòng'), '1/p', 'Thể tích',
      [['V thực · ngoại suy qua gốc', [[0, 0], [1, 2], [5, 10]]],
        ['V đọc · tung độ gốc −V₀', [[0, -2], [1, 0], [5, 8]]]]),

    lttn_b10_01: flow('Vì sao áp suất có thể giữ cố định?',
      'Khí đẩy pít-tông lên', 'Cân bằng với khí quyển + tải không đổi', 'Pít-tông dịch chuyển, thể tích đổi ở p cố định'),
    lttn_b10_02: flow('Cùng một đường đẳng áp, hai gốc nhiệt độ',
      'Trục Kelvin · ngoại suy V = 0 ở T = 0 K', 'Đổi gốc đi 273,15 độ, giữ độ dốc', 'Trục Celsius · cắt trục nhiệt độ ở −273,15 °C'),
    lttn_b10_03_ds: items('Đọc đồ thị Charles và kiểm tra thiết bị',
      'V theo °C: đường thẳng lệch gốc', 'p lớn hơn → độ dốc nR/p nhỏ hơn',
      'Ống ngang, giọt chuyển động tự do → p ≈ p khí quyển', '27 → 54 °C tương ứng 300 → 327 K; V tăng khoảng 9%'),
    lttn_b10_bo_sung_I: plot('So sánh hai đường đẳng áp với cùng số mol', 'Nhiệt độ tuyệt đối T', 'Thể tích V',
      [['A · áp suất gấp đôi', [[0, 0], [7, 3]]], ['B · độ dốc gấp đôi', [[0, 0], [7, 6]]]]),
    lttn_b10_bo_sung_II: items('Tách giả thiết và giới hạn của đồ thị',
      'Pít-tông nhẹ, tự do → p khí ≈ p ngoài', 'Pít-tông kẹt → V có thể đứng yên, p tăng',
      'Tại 0 °C, T ≈ 273 K → V > 0', 'Giao điểm −273 °C là ngoại suy · khí thật có thể ngưng tụ'),

    lttn_b11_01: flow('Kiểm tra đơn vị hai vế',
      'pV: Pa × m³ = J', 'pV = nRT', 'nRT: mol × J/(mol·K) × K = J'),
    lttn_b11_02: flow('Một đường đi hai bước nối hai trạng thái',
      '(p₁, V₁, T₁)', '(p′, V₂, T₁) · sau bước đẳng nhiệt', '(p₂, V₂, T₂) · sau bước đẳng tích'),
    lttn_b11_03_ds: items('Khi nào dùng được phương trình trạng thái?',
      'Bình kín, cứng: n và V cố định → p ∝ T', 'Bình rò: n giảm → pV/T giảm',
      'p, V, T như nhau → cùng N = pV/(kT)', '1 kPa × 1 L = 1000 Pa × 0,001 m³ = 1 J'),
    lttn_b11_bo_sung_I: flow('So sánh bình trước và sau khi khí thoát',
      'Bình cứng · V cố định', 'Đóng van, đợi T về mức ban đầu · n giảm', 'p = nRT/V → p giảm'),
    lttn_b11_bo_sung_II: withPlot(items('Hai đường đi, một trạng thái cuối',
      'Đẳng nhiệt: 300 → 150 cm³; 100 → 200 kPa', 'Đẳng tích: 300 → 450 K; 200 → 300 kPa',
      'Đổi thứ tự: 100 → 150 → 300 kPa; cùng điểm cuối', 'Trên đồ thị p–V, nén ở 450 K có p cao hơn → cần nhiều công hơn'), 'Thể tích (cm³)', 'Áp suất (kPa)',
      [['Nén trước · (300; 100) → (150; 200) → (150; 300)',
        [[300, 100], [270, 111], [240, 125], [210, 143], [180, 167], [150, 200], [150, 300]]],
      ['Đun trước · (300; 100) → (300; 150) → (150; 300)',
        [[300, 100], [300, 150], [270, 167], [240, 188], [210, 214], [180, 250], [150, 300]]]],
      { x: [150, 225, 300], y: [100, 200, 300] }),

    lttn_b12_01: flow('Mỗi trục đóng góp một phần bằng nhau',
      'Đẳng hướng: ⟨vₓ²⟩ = ⟨vᵧ²⟩ = ⟨v_z²⟩', 'Cộng ba thành phần → ⟨v²⟩', 'Thành vuông góc với x: ⟨vₓ²⟩ = ⟨v²⟩/3'),
    lttn_b12_02: flow('Phản xạ trên thành vuông góc với x',
      'Tới thành: động lượng theo x là +m|vₓ|', 'Thành bình · va chạm đàn hồi', 'Bật lại: −m|vₓ| → |Δpₓ| = 2m|vₓ|'),
    lttn_b12_03_ds: items('Tách mật độ, nhiệt độ và tốc độ',
      'p = (2/3)μĒđ: tăng μ hoặc Ēđ làm p tăng', 'Nén đẳng nhiệt: μ gấp đôi, v_rms giữ nguyên',
      'v_rms(H₂)/v_rms(O₂) = √(32/2) = 4', 'T đo động năng tịnh tiến trung bình: Ēđ = (3/2)kT'),
    lttn_b12_bo_sung_I: flow('Hai bình He và Ar ở cùng nhiệt độ',
      'Cùng N/V và T', 'Cùng áp suất p = (N/V)kT', 'He nhẹ hơn → v_rms lớn hơn'),
    lttn_b12_bo_sung_II: items('Tách các thành phần vận tốc khi phản xạ',
      'Cùng vₓ tới → cùng |Δpₓ| = 2m|vₓ|', 'Sau phản xạ: (vₓ, vᵧ) → (−vₓ, vᵧ)',
      'Phân tử và thành nhận xung lực bằng nhau về độ lớn, ngược chiều', 'Chùm dọc x: ⟨vₓ²⟩ = ⟨v²⟩, không có hệ số 1/3')
  };

  function flow(title, ...steps) {
    return { title, steps };
  }

  function items(title, ...labels) {
    return { title, labels };
  }

  function plot(title, x, y, series) {
    return { title, x, y, series };
  }

  function withPlot(diagram, x, y, series, ticks) {
    return Object.assign(diagram, { x, y, series, ticks });
  }

  var particlePositions = [
    [[18, 24], [35, 24], [52, 24], [18, 42], [35, 42], [52, 42], [18, 60], [35, 60], [52, 60]],
    [[14, 36], [32, 37], [51, 39], [24, 51], [42, 54], [59, 53], [15, 64], [31, 65], [49, 68]],
    [[11, 19], [43, 13], [21, 54], [60, 47]]
  ];

  function matter(title, ...steps) {
    return { title, steps, particles: true };
  }

  function renderParticles(index) {
    var picture = element('div', 'solution-particles');
    picture.setAttribute('aria-hidden', 'true');
    particlePositions[index].forEach(function (position) {
      var dot = element('span', 'solution-particle');
      dot.style.left = position[0] / 72 * 100 + '%';
      dot.style.top = position[1] / 78 * 100 + '%';
      picture.appendChild(dot);
    });
    return picture;
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderPlot(diagram, figure) {
    var colors = ['#005a93', '#a34913', '#53633c'];
    var chart = element('canvas', 'solution-plot');
    chart.width = 600;
    chart.height = 255;
    chart.setAttribute('aria-hidden', 'true');

    var all = diagram.series.flatMap(function (line) { return line[1]; });
    var xs = all.map(function (point) { return point[0]; });
    var ys = all.map(function (point) { return point[1]; });
    var ticks = diagram.ticks;
    var xMin = ticks ? ticks.x[0] : Math.min(0, ...xs);
    var yMin = ticks ? ticks.y[0] : Math.min(0, ...ys);
    var xRange = Math.max(...xs) - xMin;
    var yRange = Math.max(...ys) - yMin;
    var left = ticks ? 75 : 32;
    var bottom = 211;
    var width = 564 - left;
    var height = 186;
    var ctx = chart.getContext('2d');

    function scaleX(value) { return left + (value - xMin) * width / xRange; }
    function scaleY(value) { return bottom - (value - yMin) * height / yRange; }

    ctx.strokeStyle = '#516071';
    ctx.lineWidth = 2;
    ctx.beginPath();
    var zeroY = scaleY(Math.max(0, yMin));
    ctx.moveTo(left, 12);
    ctx.lineTo(left, bottom);
    ctx.moveTo(left, zeroY);
    ctx.lineTo(586, zeroY);
    ctx.stroke();

    if (ticks) {
      ctx.fillStyle = '#293d56';
      ctx.font = '24px sans-serif';
      ctx.textAlign = 'center';
      ticks.x.forEach(function (value) { ctx.fillText(value, scaleX(value), 244); });
      ctx.textAlign = 'right';
      ticks.y.forEach(function (value) { ctx.fillText(value, left - 10, scaleY(value) + 7); });
    }

    diagram.series.forEach(function (line, i) {
      ctx.strokeStyle = colors[i];
      ctx.lineWidth = 4;
      ctx.setLineDash(i === 0 ? [] : i === 1 ? [14, 8] : [4, 7]);
      ctx.beginPath();
      line[1].forEach(function (point, j) {
        var x = scaleX(point[0]);
        var y = scaleY(point[1]);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });

    var axes = element('p', 'solution-plot-axes', 'Trục ngang · ' + diagram.x + ' | Trục đứng · ' + diagram.y);
    if (!ticks) axes.textContent += ' · Đồ thị định tính';
    var legend = element('ul', 'solution-plot-legend');
    diagram.series.forEach(function (line, index) {
      var entry = element('li', null);
      var key = element('span', 'solution-plot-key');
      key.style.setProperty('--plot-color', colors[index]);
      key.style.setProperty('--plot-line', ['solid', 'dashed', 'dotted'][index]);
      key.setAttribute('aria-hidden', 'true');
      entry.append(key, element('span', null, line[0]));
      legend.appendChild(entry);
    });
    figure.append(axes, chart, legend);
  }

  function render(q) {
    var diagram = visuals[q.id];
    if (!diagram) return null;

    var figure = element('figure', 'solution-visual');
    figure.appendChild(element('figcaption', 'solution-visual-title', diagram.title));

    if (diagram.series) renderPlot(diagram, figure);
    if (diagram.labels) {
      var panels = element('ol', 'solution-visual-items');
      q.items.forEach(function (item, i) {
        var panel = element('li', 'solution-visual-panel');
        panel.append(
          element('strong', item.answer ? 'tag tag-ok' : 'tag tag-warm',
            item.label + ') ' + (item.answer ? 'Đúng' : 'Sai')),
          element('div', 'solution-visual-value', diagram.labels[i])
        );
        if (item.reason) panel.appendChild(element('p', 'muted', item.reason));
        panels.appendChild(panel);
      });
      figure.appendChild(panels);
    } else if (diagram.steps) {
      var sequence = element('ul', 'solution-visual-steps');
      diagram.steps.forEach(function (step, index) {
        var block = element('li');
        if (diagram.particles) block.appendChild(renderParticles(index));
        block.appendChild(element('span', null, step));
        sequence.appendChild(block);
      });
      figure.appendChild(sequence);
    }
    return figure;
  }

  global.LY_SOLUTION_VISUAL = { render: render };
})(window);
