/* Ngân hàng câu hỏi & đề luyện tập Vật lí 12 GDPT 2018 (100% Offline, đọc trực tiếp qua file://) */
(function (global) {
  'use strict';

  var LY_EXAM_BANK = {
    meta: {
      standard: 'GDPT 2018',
      updatedAt: '2026-11-22',
      scoringNote: 'Phần I: 0,25 đ/câu | Phần II: 1 ý đúng 0,10; 2 ý 0,25; 3 ý 0,50; 4 ý 1,00 | Phần III: 0,25 đ/câu (tối đa 4 ký tự)'
    },
    exams: [
      {
        id: 'de_mau_01',
        title: 'Đề mẫu tổng hợp 4 chương Vật lí 12 (GDPT 2018)',
        durationMin: 30,
        phan1: [
          {
            id: 'de01_p1_c1',
            chapter: '1',
            prompt: 'Một khối khí lí tưởng nhận nhiệt lượng 120 J và thực hiện công 80 J đẩy pít-tông giãn nở. Theo quy ước dấu chuẩn GDPT 2018, độ biến thiên nội năng ΔU của khối khí là:',
            options: ['+200 J', '+40 J', '−40 J', '−200 J'],
            answerIndex: 1,
            banChat: 'Khí nhận nhiệt lượng nên Q = +120 J; khí thực hiện công (giãn nở) nên A = −80 J.',
            congThuc: 'ΔU = A + Q = (−80) + 120 = +40 J.',
            bayCanTranh: 'Bẫy dấu định luật I NĐLH: tuyệt đối không thay A = +80 J khi đề nói "khí thực hiện công", và không dùng nhầm quy ước ΔU = Q − A.'
          },
          {
            id: 'de01_p1_c2',
            chapter: '1',
            prompt: 'Trong quá trình nước đá tinh khiết đang nóng chảy hoàn toàn ở 0 °C dưới áp suất chuẩn, nhận định nào sau đây đúng về trạng thái vi mô của khối chất?',
            options: [
              'Động năng trung bình của phân tử tăng dần còn thế năng phân tử không đổi.',
              'Vì nhiệt độ không đổi nên nội năng của khối nước đá cũng không đổi.',
              'Động năng trung bình của phân tử không đổi, thế năng tương tác phân tử tăng làm nội năng tăng.',
              'Nước đá tỏa nhiệt lượng ra môi trường để làm đứt liên kết mạng tinh thể.'
            ],
            answerIndex: 2,
            banChat: 'Nhiệt độ gắn liền với động năng chuyển động nhiệt trung bình; khi đang nóng chảy nhiệt độ không đổi nên động năng trung bình không đổi, nhiệt lượng nhận vào dùng để phá vỡ liên kết mạng tinh thể làm tăng thế năng tương tác.',
            congThuc: 'Q = λm > 0, A ≈ 0 ⇒ ΔU = ΔE_đ(tb) + ΔE_t = 0 + ΔE_t > 0.',
            bayCanTranh: 'Bẫy "nhiệt độ không đổi ⇒ nội năng không đổi": chỉ đúng với khí lí tưởng (bỏ qua thế năng), SAI khi chất đang chuyển thể.'
          },
          {
            id: 'de01_p1_c3',
            chapter: '2',
            prompt: 'Trên hệ trục tọa độ (p – T), hai đường đẳng tích của cùng một lượng khí lí tưởng cắt đường thẳng đứng T = T₀ tại hai điểm sao cho đường (1) nằm phía trên đường (2). Quan hệ giữa hai thể tích V₁ và V₂ là:',
            options: [
              'V₁ > V₂',
              'V₁ < V₂',
              'V₁ = V₂',
              'Không so sánh được nếu chưa biết khối lượng mol khí'
            ],
            answerIndex: 1,
            banChat: 'Cùng một lượng khí (n không đổi) ở cùng nhiệt độ T₀, đường (1) có áp suất p₁ lớn hơn p₂ nên theo định luật Boyle p₁V₁ = p₂V₂, thể tích V₁ phải nhỏ hơn V₂.',
            congThuc: 'p = (nR / V)·T ⇒ độ dốc trên (p–T) là nR/V. Độ dốc lớn hơn ⇔ V nhỏ hơn.',
            bayCanTranh: 'Bẫy đọc ngược đồ thị: nhìn thấy đường (1) nằm trên cao hơn rồi chọn nhầm V₁ > V₂.'
          },
          {
            id: 'de01_p1_c4',
            chapter: '2',
            prompt: 'Hai bình kín chứa khí Hiđrô (H₂, M = 2 g/mol) và khí Oxi (O₂, M = 32 g/mol) ở cùng nhiệt độ 27 °C. Coi cả hai là khí lí tưởng. Tỉ số động năng tịnh tiến trung bình E_đ(H₂)/E_đ(O₂) và tỉ số tốc độ căn quân phương v_rms(H₂)/v_rms(O₂) lần lượt là:',
            options: ['1 và 4', '16 và 4', '1 và 16', '1/16 và 1/4'],
            answerIndex: 0,
            banChat: 'Động năng tịnh tiến trung bình chỉ phụ thuộc nhiệt độ tuyệt đối T, không phụ thuộc loại khí. Cùng nhiệt độ thì phân tử nhẹ hơn có tốc độ trung bình lớn hơn.',
            congThuc: 'E_đ = (3/2)kT ⇒ tỉ số = 1. v_rms = √(3RT/M) ⇒ v_rms(H₂)/v_rms(O₂) = √(32/2) = 4.',
            bayCanTranh: 'Bẫy tưởng phân tử nặng hơn (O₂) có động năng lớn hơn; hoặc quên khai căn khi tính tỉ số v_rms.'
          },
          {
            id: 'de01_p1_c5',
            chapter: '3',
            prompt: 'Một khung dây dẫn phẳng gồm 100 vòng, diện tích mỗi vòng 20 cm², đặt trong từ trường đều B = 0,2 T. Mặt phẳng khung dây hợp với vectơ cảm ứng từ B⃗ một góc 30°. Từ thông qua khung dây có độ lớn bằng:',
            options: ['20√3 mWb', '20 mWb', '0,2 Wb', '40 mWb'],
            answerIndex: 1,
            banChat: 'Từ thông phụ thuộc góc α giữa vectơ pháp tuyến n⃗ của mặt khung và vectơ B⃗, không phải góc với mặt phẳng khung.',
            congThuc: 'S = 20 cm² = 2×10⁻³ m²; α = 90° − 30° = 60° ⇒ Φ = NBS·cos(60°) = 100 × 0,2 × 2×10⁻³ × 0,5 = 0,02 Wb = 20 mWb.',
            bayCanTranh: 'Bẫy góc α: thay thẳng cos(30°) ra 20√3 mWb; hoặc đổi sai 20 cm² thành 0,2 m².'
          },
          {
            id: 'de01_p1_c6',
            chapter: '3',
            prompt: 'Từ thông qua một khung dây dẫn kín biến thiên điều hòa theo thời gian theo phương trình Φ = Φ₀·cos(ωt) (Φ₀ > 0). Biểu thức suất điện động cảm ứng xuất hiện trong khung là:',
            options: [
              'e = ωΦ₀·cos(ωt + π/2)',
              'e = ωΦ₀·cos(ωt)',
              'e = ωΦ₀·cos(ωt − π/2)',
              'e = −(Φ₀/ω)·sin(ωt)'
            ],
            answerIndex: 2,
            banChat: 'Suất điện động cảm ứng bằng âm đạo hàm của từ thông theo thời gian nên luôn trễ pha π/2 so với từ thông.',
            congThuc: 'e = −dΦ/dt = ωΦ₀·sin(ωt) = ωΦ₀·cos(ωt − π/2).',
            bayCanTranh: 'Bẫy quên dấu trừ định luật Faraday dẫn đến chọn nhầm pha +π/2.'
          },
          {
            id: 'de01_p1_c7',
            chapter: '4',
            prompt: 'Cho 4 hạt nhân có số khối và năng lượng liên kết lần lượt là: X (A = 4; E_lk = 28,3 MeV), Y (A = 16; E_lk = 127,6 MeV), Z (A = 56; E_lk = 492,3 MeV), T (A = 235; E_lk = 1784 MeV). Hạt nhân bền vững nhất trong bốn hạt nhân này là:',
            options: ['Hạt nhân X', 'Hạt nhân Y', 'Hạt nhân Z', 'Hạt nhân T'],
            answerIndex: 2,
            banChat: 'Mức độ bền vững của hạt nhân được đặc trưng bởi năng lượng liên kết riêng (năng lượng liên kết tính trên một nucleon), không phải tổng năng lượng liên kết.',
            congThuc: 'E_lkr(X) ≈ 7,08; E_lkr(Y) ≈ 7,98; E_lkr(Z) = 492,3/56 ≈ 8,79 MeV/nucleon; E_lkr(T) ≈ 7,59 MeV/nucleon ⇒ Z bền nhất.',
            bayCanTranh: 'Bẫy lấy tổng E_lk lớn nhất (1784 MeV) rồi chọn hạt nhân nặng T.'
          },
          {
            id: 'de01_p1_c8',
            chapter: '4',
            prompt: 'Chiếu một chùm tia phóng xạ hỗn hợp gồm α, β⁻, β⁺ và γ bay vào vùng điện trường đều giữa hai bản kim loại phẳng song song tích điện trái dấu (theo phương vuông góc với đường sức điện). Phát biểu nào sau đây đúng?',
            options: [
              'Cả bốn tia đều bị lệch quỹ đạo trừ tia α.',
              'Tia γ không bị lệch; tia β⁻ lệch về bản dương; hai tia α và β⁺ lệch về bản âm.',
              'Tia β⁻ và β⁺ lệch về bản dương; tia α lệch về bản âm; tia γ đi thẳng.',
              'Tia γ bị lệch ít nhất về bản âm do có bước sóng ngắn nhất.'
            ],
            answerIndex: 1,
            banChat: 'Tia γ là sóng điện từ không mang điện nên không chịu lực điện; α (+2e) và β⁺ (+e) mang điện dương nên lệch về bản âm; β⁻ (−e) mang điện âm nên lệch về bản dương.',
            congThuc: 'F_đ = qE: q = 0 ⇒ F_đ = 0 (tia γ đi thẳng); q > 0 ⇒ lệch theo chiều E⃗ (về bản âm); q < 0 ⇒ ngược chiều E⃗ (về bản dương).',
            bayCanTranh: 'Bẫy nhầm điện tích của hạt positron β⁺ (mang điện +e, không phải điện âm như β⁻).'
          }
        ],
        phan2: [
          {
            id: 'de01_p2_c1',
            chapter: '1',
            stem: 'Dùng một ấm điện có công suất tỏa nhiệt 1000 W (coi hiệu suất truyền nhiệt đạt 100%) để đun 0,5 kg nước đá tinh khiết từ −20 °C đến khi sôi ở 100 °C dưới áp suất tiêu chuẩn. Biết nhiệt dung riêng của nước đá c_đá = 2100 J/(kg·K), của nước c_nước = 4200 J/(kg·K), nhiệt nóng chảy riêng của nước đá λ = 3,34×10⁵ J/kg, nhiệt hóa hơi riêng của nước L = 2,26×10⁶ J/kg.',
            items: [
              { label: 'a', text: 'Nhiệt lượng cần thiết để làm nóng khối nước đá từ −20 °C lên 0 °C là 21 kJ.', answer: true },
              { label: 'b', text: 'Thời gian để khối nước đá nóng chảy hoàn toàn ở 0 °C là 167 s.', answer: true },
              { label: 'c', text: 'Trên đồ thị nhiệt độ theo thời gian T(t), độ dốc của đoạn làm nóng nước đá nhỏ hơn độ dốc của đoạn làm nóng nước lỏng.', answer: false },
              { label: 'd', text: 'Khi nước bắt đầu sôi ở 100 °C, nếu tiếp tục đun thì nhiệt độ không đổi nên tổng nội năng của lượng nước (lỏng + hơi) giữ nguyên.', answer: false }
            ],
            banChat: 'Độ dốc đồ thị T(t) bằng P/(mc) tỉ lệ nghịch với nhiệt dung riêng c; quá trình chuyển thể giữ nguyên động năng trung bình nhưng làm tăng thế năng phân tử nên nội năng vẫn tăng.',
            congThuc: 'a) Q₁ = 0,5×2100×20 = 21 000 J = 21 kJ (Đ). b) Q_nc = 0,5×3,34×10⁵ = 167 000 J ⇒ t_nc = Q_nc/P = 167 s (Đ). c) c_đá = 2100 < c_nước = 4200 ⇒ độ dốc đoạn đá LỚN GẤP ĐÔI đoạn nước (S). d) Đang sôi nhận nhiệt lượng Q > 0 ⇒ ΔU > 0 (S).',
            bayCanTranh: 'Cộng 273 vào hiệu Δt = 20 °C (sai), đọc ngược độ dốc đồ thị T(t), và bỏ sót thế năng phân tử khi chuyển thể.'
          },
          {
            id: 'de01_p2_c2',
            chapter: '2',
            stem: 'Xét 1 mol khí lí tưởng thực hiện chu trình khép kín 1 → 2 → 3 → 1 gồm ba quá trình: (1 → 2) đẳng tích từ trạng thái 1 (p₁ = 10⁵ Pa; V₁ = 24,93 lít; T₁ = 300 K) đến T₂ = 600 K; (2 → 3) giãn đẳng nhiệt ở T₂ đến p₃ = p₁; (3 → 1) nén đẳng áp về trạng thái 1. Lấy R = 8,31 J/(mol·K).',
            items: [
              { label: 'a', text: 'Áp suất của khí ở trạng thái 2 là p₂ = 2×10⁵ Pa.', answer: true },
              { label: 'b', text: 'Trong quá trình (1 → 2), nhiệt độ tuyệt đối tăng gấp đôi tương ứng nhiệt độ theo thang Celsius tăng từ 27 °C lên 54 °C.', answer: false },
              { label: 'c', text: 'Thể tích khí ở trạng thái 3 là 49,86 lít và công khí nhận được trong quá trình (3 → 1) là +2493 J.', answer: true },
              { label: 'd', text: 'Trong quá trình giãn đẳng nhiệt (2 → 3), thể tích tăng gấp đôi làm động năng tịnh tiến trung bình của mỗi phân tử khí giảm đi một nửa.', answer: false }
            ],
            banChat: 'Thang Kelvin dịch gốc 273 đơn vị so với Celsius; trong quá trình nén đẳng áp (V giảm) thì khí nhận công (A > 0); động năng trung bình chỉ phụ thuộc nhiệt độ T.',
            congThuc: 'a) Đẳng tích p₂ = p₁(T₂/T₁) = 10⁵×2 = 2×10⁵ Pa (Đ). b) 300 K = 27 °C, 600 K = 600 − 273 = 327 °C ≠ 54 °C (S). c) p₃ = p₁ ⇒ V₃ = V₁(T₂/T₁) = 49,86 lít; A₃₁ = −p₁(V₁ − V₃) = −10⁵×(−24,93×10⁻³) = +2493 J (Đ). d) Đẳng nhiệt T = const ⇒ E_đ = (3/2)kT không đổi (S).',
            bayCanTranh: 'Nhân đôi nhiệt độ theo °C thay vì K; nhầm dấu công A₃₁ khi khí bị nén (V₁ < V₃ ⇒ A > 0).'
          },
          {
            id: 'de01_p2_c3',
            chapter: '3',
            stem: 'Một khung dây dẫn phẳng gồm N = 200 vòng, diện tích mỗi vòng S = 50 cm², quay đều với tần số f = 50 Hz quanh một trục cố định nằm trong mặt phẳng khung và vuông góc với các đường sức của từ trường đều có cảm ứng từ B = 0,2/π T. Chọn gốc thời gian t = 0 lúc vectơ pháp tuyến n⃗ cùng hướng với B⃗.',
            items: [
              { label: 'a', text: 'Suất điện động cảm ứng cực đại xuất hiện trong khung dây là E₀ = 20 V.', answer: true },
              { label: 'b', text: 'Tại thời điểm t = 0, từ thông qua khung dây đạt cực đại nên độ lớn suất điện động cảm ứng cũng đạt cực đại.', answer: false },
              { label: 'c', text: 'Nối hai đầu khung dây (điện trở không đáng kể) với một vôn kế xoay chiều có điện trở rất lớn thì vôn kế chỉ xấp xỉ 14,1 V.', answer: true },
              { label: 'd', text: 'Nếu đưa điện áp hiệu dụng trên vào cuộn sơ cấp của một máy biến áp lí tưởng có tỉ số vòng dây N₁/N₂ = 2 thì điện áp hiệu dụng ở cuộn thứ cấp để hở là 20√2 V.', answer: false }
            ],
            banChat: 'Φ(t) và e(t) vuông pha nhau π/2; vôn kế xoay chiều luôn đo giá trị hiệu dụng U = U₀/√2; máy biến áp hạ áp (N₁ > N₂) làm giảm điện áp.',
            congThuc: 'a) ω = 2πf = 100π rad/s; S = 50×10⁻⁴ m² ⇒ E₀ = ωNBS = 100π × 200 × (0,2/π) × 50×10⁻⁴ = 20 V (Đ). b) t = 0: α = 0 ⇒ Φ = Φ₀ nhưng e = E₀·sin(0) = 0 V (S). c) E = E₀/√2 = 10√2 ≈ 14,14 V (Đ). d) U₂ = U₁·(N₂/N₁) = 10√2 / 2 = 5√2 V ≠ 20√2 V (S).',
            bayCanTranh: 'Đoán cực trị Φ và e trùng thời điểm; đọc nhầm tỉ số máy biến áp N₁/N₂ = 2 thành tăng áp gấp đôi.'
          },
          {
            id: 'de01_p2_c4',
            chapter: '4',
            stem: 'Đồng vị phóng xạ Poloni ²¹⁰₈₄Po phóng xạ α biến đổi thành hạt nhân chì ²⁰⁶₈₂Pb bền với chu kì bán rã T = 138 ngày. Ban đầu có một mẫu ²¹⁰Po nguyên chất khối lượng m₀ = 2,1 mg. Lấy N_A = 6,02×10²³ mol⁻¹, 1 ngày = 86 400 s, và lấy khối lượng mol nguyên tử theo g/mol xấp xỉ bằng số khối.',
            items: [
              { label: 'a', text: 'Nếu nung nóng mẫu Poloni đến nhiệt độ gấp đôi thì chu kì bán rã T vẫn bằng 138 ngày.', answer: true },
              { label: 'b', text: 'Sau thời gian t = 276 ngày, tỉ số giữa số hạt nhân Pb tạo thành và số hạt nhân Po còn lại bằng 3.', answer: true },
              { label: 'c', text: 'Sau 276 ngày, khối lượng chì Pb tạo thành trong mẫu bằng 1,575 mg.', answer: false },
              { label: 'd', text: 'Độ phóng xạ ban đầu của mẫu xấp xỉ bằng 3,50×10¹¹ Bq.', answer: true }
            ],
            banChat: 'Phóng xạ là quá trình tự phát ở mức hạt nhân, không phụ thuộc nhiệt độ hay áp suất; mỗi hạt mẹ ²¹⁰Po phân rã tạo 1 hạt con ²⁰⁶Pb nhẹ hơn vì hạt α (4 nucleon) bay ra; độ phóng xạ Bq tính theo giây.',
            congThuc: 'a) T bất biến với nhiệt độ (Đ). b) t = 2T ⇒ N_Pb/N_Po = 2^(t/T) − 1 = 2² − 1 = 3 (Đ). c) Δm_Po = 2,1×(1 − 1/4) = 1,575 mg ⇒ m_Pb = (206/210)×1,575 = 1,545 mg ≠ 1,575 mg (S). d) N₀ = (2,1×10⁻³/210)×6,02×10²³ = 6,02×10¹⁸ hạt; T_s = 138×86 400 = 11 923 200 s ⇒ H₀ = (ln2 / T_s)·N₀ ≈ 3,50×10¹¹ Bq (Đ).',
            bayCanTranh: 'Lấy khối lượng con bằng đúng khối lượng mẹ bị phân rã (1,575 mg) mà quên nhân hệ số 206/210; hoặc quên đổi T ra giây khi tính H theo Bq.'
          }
        ],
        phan3: [
          {
            id: 'de01_p3_c1',
            chapter: '1',
            prompt: 'Một lượng khí truyền ra môi trường xung quanh nhiệt lượng 350 J đồng thời nhận công 120 J từ lực bên ngoài nén lại. Độ biến thiên nội năng ΔU của lượng khí bằng bao nhiêu J? (Ghi rõ dấu âm nếu có).',
            answer: '-230',
            unit: 'J',
            banChat: 'Khí truyền nhiệt ra ngoài nên Q = −350 J; khí nhận công nên A = +120 J.',
            congThuc: 'ΔU = A + Q = 120 + (−350) = −230 J (nội năng giảm 230 J).',
            bayCanTranh: 'Quên dấu âm của Q khi truyền nhiệt hoặc quên dấu − trước đáp số 230 trong phiếu tô.'
          },
          {
            id: 'de01_p3_c2',
            chapter: '2',
            prompt: 'Một bình kín thể tích không đổi chứa khí lí tưởng ở áp suất 2,0 atm và nhiệt độ 27 °C. Khi đun nóng bình đến nhiệt độ 102 °C thì áp suất khí trong bình bằng bao nhiêu atm? (Làm tròn đến một chữ số thập phân).',
            answer: '2,5',
            unit: 'atm',
            banChat: 'Thể tích bình kín không đổi nên áp dụng quá trình đẳng tích p₁/T₁ = p₂/T₂ với nhiệt độ tuyệt đối tính bằng Kelvin.',
            congThuc: 'T₁ = 27 + 273 = 300 K; T₂ = 102 + 273 = 375 K ⇒ p₂ = 2,0 × (375/300) = 2,5 atm.',
            bayCanTranh: 'Lấy tỉ số 102/27 rồi nhân 2,0 (ra 7,56 atm) vì quên đổi °C sang K.'
          },
          {
            id: 'de01_p3_c3',
            chapter: '3',
            prompt: 'Một đoạn dây dẫn thẳng dài 40 cm mang dòng điện cường độ 5 A đặt trong từ trường đều có cảm ứng từ B = 0,6 T sao cho đoạn dây hợp với đường sức từ một góc 30°. Độ lớn lực từ tác dụng lên đoạn dây dẫn bằng bao nhiêu Newton (N)?',
            answer: '0,6',
            unit: 'N',
            banChat: 'Đoạn dây thẳng trong từ trường đều chịu lực từ F = BIL·sinθ với θ là góc hợp bởi dòng điện và vectơ cảm ứng từ.',
            congThuc: 'Đổi L = 40 cm = 0,40 m ⇒ F = 0,6 × 5 × 0,40 × sin(30°) = 0,6 N.',
            bayCanTranh: 'Quên đổi 40 cm sang 0,4 m (ra 60 N) hoặc nhầm công thức lực từ dùng cos(30°) thay vì sin(30°).'
          },
          {
            id: 'de01_p3_c4',
            chapter: '4',
            prompt: 'Xét phản ứng nhiệt hạch ²₁H + ³₁H → ⁴₂He + ¹₀n. Cho khối lượng các hạt nhân: m(²H) = 2,0136 u; m(³H) = 3,0160 u; m(⁴He) = 4,0015 u; m(n) = 1,0087 u và 1 u ≈ 931,5 MeV/c². Năng lượng tỏa ra của một phản ứng bằng bao nhiêu MeV? (Làm tròn đến một chữ số thập phân).',
            answer: '18,1',
            unit: 'MeV',
            banChat: 'Tổng khối lượng hạt nhân sau phản ứng nhỏ hơn trước phản ứng; phần khối lượng hụt đi chuyển thành năng lượng tỏa ra theo hệ thức Einstein.',
            congThuc: 'Δm = (2,0136 + 3,0160) − (4,0015 + 1,0087) = 0,0194 u ⇒ ΔE = 0,0194 × 931,5 = 18,0711 ≈ 18,1 MeV.',
            bayCanTranh: 'Bấm nhầm trừ trước cho sau ra số âm, hoặc làm tròn sai từ 18,0711 thành 18,0.'
          }
        ]
      }
    ]
  };

  global.LY_EXAM_BANK = LY_EXAM_BANK;
})(window);
