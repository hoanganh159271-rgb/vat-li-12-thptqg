# Kho Bẫy Đúng/Sai & Điều Kiện Mô Hình (4 Chương Vật lí 12 — GDPT 2018)

Tệp tổng hợp các bẫy kinh điển thường xuyên xuất hiện trong câu hỏi Đúng/Sai và Trả lời ngắn. Sử dụng lệnh `/ly-bay [tên chương]` để sinh bộ câu hỏi luyện bẫy từ kho này, hoặc `/ly-bay [câu sai]` để bổ sung bẫy mới.

---

## Chương 1: Vật lí nhiệt

1. **Bẫy 1.1 — Ngược quy ước dấu Định luật I NĐLH ($\Delta U = A + Q$)**:
   - *Phát biểu bẫy*: "Chất khí nhận nhiệt lượng $Q = 100\ \text{J}$ và thực hiện công $A = 40\ \text{J}$ thì độ biến thiên nội năng là $100 - (-40) = 140\ \text{J}$ (hoặc $100 + 40 = 140\ \text{J}$)."
   - *Bản chất đúng*: Theo chuẩn GDPT 2018: khí **thực hiện công** (giãn nở) thì $A < 0$, tức $A = -40\ \text{J}$. Khi đó $\Delta U = A + Q = -40 + 100 = +60\ \text{J}$.
   - *Thẻ chẩn đoán*: `Hổng bản chất` | `Quên điều kiện mô hình` (quy ước dấu hệ kín).

2. **Bẫy 1.2 — Nhiệt độ không đổi khi chuyển thể $\Rightarrow$ Nội năng không đổi**:
   - *Phát biểu bẫy*: "Trong giai đoạn nước đá đang tan ở $0^\circ\text{C}$ hoặc nước đang sôi ở $100^\circ\text{C}$, nhiệt độ không đổi nên nội năng của chất không đổi."
   - *Bản chất đúng*: Nhiệt độ không đổi chỉ suy ra **động năng trung bình** của phân tử không đổi. Chất vẫn đang nhận nhiệt lượng ($Q > 0$) để phá vỡ liên kết, làm khoảng cách phân tử tăng $\Rightarrow$ **thế năng tương tác phân tử tăng** $\Rightarrow$ **nội năng tăng** ($\Delta U > 0$).
   - *Thẻ chẩn đoán*: `Hổng bản chất`.

3. **Bẫy 1.3 — Đọc ngược độ dốc đồ thị $T(t)$ và cộng nhầm $+273$ vào hiệu nhiệt độ**:
   - *Phát biểu bẫy*: "Đoạn đồ thị $T(t)$ của nước đá dốc hơn đoạn của nước lỏng chứng tỏ nhiệt dung riêng của đá lớn hơn của nước; hoặc khi tính $Q = mc\Delta t$ thấy tăng $20^\circ\text{C}$ thì đổi $\Delta T = 20 + 273 = 293\ \text{K}$."
   - *Bản chất đúng*: Với nguồn công suất $P$ ổn định, độ dốc $\dfrac{\Delta T}{\Delta t} = \dfrac{P}{mc}$ tỉ lệ **nghịch** với $c$. Đoạn dốc hơn $\Rightarrow$ $c$ **nhỏ hơn** ($c_{\text{đá}} \approx 2100 < c_{\text{nước}} \approx 4180\ \text{J/(kg}\cdot\text{K)}$). Ngoài ra $\Delta T(\text{K}) = \Delta t(^\circ\text{C})$, tuyệt đối không cộng $273$ vào hiệu nhiệt độ!
   - *Thẻ chẩn đoán*: `Hổng bản chất` | `Lỗi đơn vị/thứ nguyên`.

---

## Chương 2: Khí lí tưởng

4. **Bẫy 2.1 — Chia tỉ lệ theo độ Celsius ($^\circ\text{C}$) thay vì Kelvin ($\text{K}$)**:
   - *Phát biểu bẫy*: "Nung nóng đẳng tích lượng khí từ $27^\circ\text{C}$ lên $54^\circ\text{C}$ thì áp suất tăng gấp đôi."
   - *Bản chất đúng*: Các định luật khí lí tưởng dùng **nhiệt độ tuyệt đối $T(\text{K}) = t(^\circ\text{C}) + 273$**. Từ $27^\circ\text{C}$ ($300\ \text{K}$) lên $54^\circ\text{C}$ ($327\ \text{K}$), áp suất chỉ tăng $327/300 = 1{,}09$ lần. Muốn tăng gấp đôi ($600\ \text{K}$) phải đun lên $327^\circ\text{C}$.
   - *Thẻ chẩn đoán*: `Lỗi đơn vị/thứ nguyên` | `Quên điều kiện mô hình`.

5. **Bẫy 2.2 — Đọc ngược thứ tự đường đẳng tích trên $(p - T)$ và đẳng áp trên $(V - T)$**:
   - *Phát biểu bẫy*: "Trên đồ thị $(p - T)$, đường đẳng tích $V_1$ nằm phía trên đường đẳng tích $V_2$ nên $V_1 > V_2$."
   - *Bản chất đúng*: Từ $p = \left(\dfrac{nR}{V}\right)T$, độ dốc trên $(p - T)$ là $\dfrac{nR}{V}$. Đường nằm trên (dốc hơn) ứng với thể tích **$V$ nhỏ hơn** ($V_1 < V_2$). Tương tự trên $(V - T)$, đường đẳng áp nằm trên có áp suất **$p$ nhỏ hơn**. Mẹo kiểm tra chắc chắn: kẻ 1 đường thẳng đứng $T = \text{const}$ cắt hai đường, đường nào cắt ở $p$ cao hơn thì $V$ nhỏ hơn ($pV = \text{const}$).
   - *Thẻ chẩn đoán*: `Hổng bản chất`.

6. **Bẫy 2.3 — Nhầm động năng trung bình phụ thuộc khối lượng mol và quên đổi $M$ sang $\text{kg/mol}$**:
   - *Phát biểu bẫy*: "Ở cùng nhiệt độ $T$, phân tử $\text{O}_2$ nặng hơn $\text{H}_2$ 16 lần nên có động năng trung bình lớn hơn 16 lần."
   - *Bản chất đúng*: Động năng tịnh tiến trung bình $\overline{E_\text{đ}} = \dfrac{3}{2} k T$ **chỉ phụ thuộc nhiệt độ tuyệt đối $T$**, mọi khí lí tưởng ở cùng nhiệt độ có $\overline{E_\text{đ}}$ bằng nhau. Phân tử nhẹ hơn ($\text{H}_2$) chuyển động nhanh hơn ($\overline{v^2}$ lớn hơn gấp 16 lần, tốc độ căn quân phương $v_{\text{rms}}$ gấp 4 lần). Khi tính $v_{\text{rms}} = \sqrt{3RT/M}$, bắt buộc đổi $M$ sang $\text{kg/mol}$ ($\text{O}_2 = 0{,}032\ \text{kg/mol}$).
   - *Thẻ chẩn đoán*: `Hổng bản chất` | `Lỗi đơn vị/thứ nguyên`.

---

## Chương 3: Từ trường

7. **Bẫy 3.1 — Nhầm góc giữa $\vec{B}$ và mặt phẳng khung dây với góc $\alpha = (\vec{n}, \vec{B})$**:
   - *Phát biểu bẫy*: "Mặt phẳng khung dây hợp với đường sức từ góc $30^\circ$ nên từ thông là $\Phi = NBS\cos 30^\circ$."
   - *Bản chất đúng*: Trong $\Phi = NBS\cos\alpha$, $\alpha$ là góc giữa **pháp tuyến $\vec{n}$** (vuông góc mặt phẳng khung) và $\vec{B}$. Khi mặt phẳng khung hợp với $\vec{B}$ góc $\beta = 30^\circ$ thì $\alpha = 90^\circ - 30^\circ = 60^\circ \Rightarrow \Phi = NBS\cos 60^\circ$. Đồng thời chú ý đổi $S$ từ $\text{cm}^2 \to 10^{-4}\ \text{m}^2$.
   - *Thẻ chẩn đoán*: `Đọc sót dữ kiện` | `Lỗi đơn vị/thứ nguyên`.

8. **Bẫy 3.2 — Nghĩ $\Phi$ cực đại thì $|e|$ cực đại & Nhầm vuông pha $(\Phi, e)$ với cùng pha $(\vec{E}, \vec{B})$**:
   - *Phát biểu bẫy*: "Tại thời điểm từ thông qua khung dây đạt cực đại $\Phi_0$, suất điện động cảm ứng cũng đạt giá trị cực đại $E_0$."
   - *Bản chất đúng*: $e(t) = -\Phi'(t)$ nên $e$ và $\Phi$ **vuông pha $\pi/2$**. Khi $\Phi = \pm\Phi_0$ (đỉnh đồ thị hình sin), tiếp tuyến nằm ngang ($\Phi' = 0$) nên **$e = 0$**. Ngược lại, khi khung song song $\vec{B}$ ($\Phi = 0$) thì tốc độ biến thiên từ thông cực đại nên $|e| = E_0$. *(Phân biệt với sóng điện từ: trong sóng điện từ, $\vec{E}$ và $\vec{B}$ vuông phương nhưng biến thiên **cùng pha**).*
   - *Thẻ chẩn đoán*: `Hổng bản chất`.

9. **Bẫy 3.3 — Dùng máy biến áp cho dòng không đổi hoặc lộn tỉ số hiệu dụng $\sqrt{2}$**:
   - *Phát biểu bẫy*: "Nối cuộn sơ cấp máy biến áp ($N_1/N_2 = 2$) vào nguồn điện một chiều $12\ \text{V}$ thu được $6\ \text{V}$ ở thứ cấp; hoặc vôn kế xoay chiều chỉ giá trị cực đại $U_0$."
   - *Bản chất đúng*: Máy biến áp hoạt động dựa trên cảm ứng điện từ nên **chỉ hoạt động với dòng xoay chiều**, nối nguồn một chiều thì $\Delta\Phi = 0 \Rightarrow U_2 = 0\ \text{V}$. Ngoài ra, vôn kế/ampe kế xoay chiều luôn đo **giá trị hiệu dụng** ($U = U_0/\sqrt{2}$).
   - *Thẻ chẩn đoán*: `Quên điều kiện mô hình`.

---

## Chương 4: Vật lí hạt nhân

10. **Bẫy 4.1 — Nhầm $E_{\text{lk}}$ với $E_{\text{lkr}}$ khi so sánh độ bền vững & Đổi dấu $\Delta E$**:
    - *Phát biểu bẫy*: "Hạt nhân ${}^{235}_{92}\text{U}$ có năng lượng liên kết khoảng $1784\ \text{MeV}$ lớn hơn nhiều so với ${}^{56}_{26}\text{Fe}$ ($492{,}3\ \text{MeV}$) nên ${}^{235}\text{U}$ bền vững hơn ${}^{56}\text{Fe}$."
    - *Bản chất đúng*: Độ bền vững hạt nhân phụ thuộc **năng lượng liên kết riêng** $E_{\text{lkr}} = E_{\text{lk}}/A$. Với ${}^{56}\text{Fe}$: $492{,}3/56 \approx 8{,}79\ \text{MeV/nucleon} > 1784/235 \approx 7{,}59\ \text{MeV/nucleon}$, nên ${}^{56}\text{Fe}$ bền hơn nhiều. Trong tính toán $\Delta E = (m_{\text{trước}} - m_{\text{sau}})c^2 = E_{\text{lk, sau}} - E_{\text{lk, trước}}$, chú ý đừng lấy ngược dấu.
    - *Thẻ chẩn đoán*: `Hổng bản chất`.

11. **Bẫy 4.2 — Nhầm khối lượng hạt nhân con $m_{\text{con}}$ bằng khối lượng mẹ đã phân rã $\Delta m_{\text{mẹ}}$**:
    - *Phát biểu bẫy*: "Sau 2 chu kì bán rã từ $2{,}1\ \text{mg}$ Poloni ${}^{210}\text{Po}$ phóng xạ $\alpha$ thành Chì ${}^{206}\text{Pb}$, lượng $\text{Po}$ phân rã là $1{,}575\ \text{mg}$ nên khối lượng chì tạo thành là $1{,}575\ \text{mg}$."
    - *Bản chất đúng*: Mỗi hạt ${}^{210}\text{Po}$ phân rã cho 1 hạt ${}^{206}\text{Pb}$ **và 1 hạt $\alpha$** ($4\ \text{u}$) bay ra! Số hạt bằng nhau ($N_{\text{con}} = \Delta N_{\text{mẹ}}$), nhưng khối lượng hạt nhân con là $m_{\text{Pb}} = \dfrac{206}{210} \Delta m_{\text{Po}} = \dfrac{206}{210} \times 1{,}575 = 1{,}545\ \text{mg}$.
    - *Thẻ chẩn đoán*: `Hổng bản chất` | `Quên điều kiện mô hình`.

12. **Bẫy 4.3 — Quên đổi $T$ ra giây khi tính $H$ theo $\text{Bq}$ & Nghĩ nhiệt độ làm thay đổi chu kì bán rã $T$**:
    - *Phát biểu bẫy*: "Dùng $T = 138\ \text{ngày}$ thay thẳng vào $\lambda = \ln 2 / T$ để tính $H = \lambda N$ và kết luận đơn vị là $\text{Bq}$; hoặc nung nóng chất phóng xạ để tăng tốc độ phân rã."
    - *Bản chất đúng*: $1\ \text{Bq} = 1\ \text{phân rã/giây}$, nên bắt buộc phải đổi $T$ sang **giây** ($1\ \text{ngày} = 86\,400\ \text{s}$) khi tính $\lambda$ ($\text{s}^{-1}$) và $H$ ($\text{Bq}$). Đồng thời, quá trình phóng xạ có bản chất hạt nhân tự phát, hoàn toàn **không phụ thuộc** vào nhiệt độ, áp suất hay trạng thái hóa học.
    - *Thẻ chẩn đoán*: `Lỗi đơn vị/thứ nguyên` | `Hổng bản chất`.
