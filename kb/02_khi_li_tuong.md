# Chương 2: Khí lí tưởng (GDPT 2018)

---

## [NỘI DUNG GỐC]

*(Khu vực giữ nguyên 100% nội dung SGK hoặc ghi chú gốc do bạn nạp vào qua lệnh `/ly-kb`. Không tự ý chỉnh sửa khối này.)*

- Trọng tâm Chương 2 SGK Vật lí 12 (GDPT 2018):
  1. Mô hình động học phân tử chất khí.
  2. Định luật Boyle (đẳng nhiệt) & Định luật Charles (đẳng áp).
  3. Phương trình trạng thái khí lí tưởng & Phương trình Clapeyron.
  4. Áp suất chất khí theo mô hình động học phân tử.

---

## [GHI CHÚ MỞ RỘNG / BẪY ĐỀ THI]

### Chủ đề 2.1: Các đẳng quá trình & Phương trình trạng thái khí lí tưởng

1. **Bản chất hiện tượng & mô hình vật lí**:
   - **Khí lí tưởng**: tập hợp các phân tử coi là chất điểm, chuyển động hỗn loạn không ngừng, chỉ tương tác khi va chạm đàn hồi với nhau và với thành bình; bỏ qua lực tương tác khi chưa va chạm và bỏ qua thể tích riêng của phân tử.
   - Áp suất khí lên thành bình do vô số phân tử va chạm đàn hồi liên tục vào thành bình gây ra.
2. **Công thức & ý nghĩa từng đại lượng**:
   - Đẳng nhiệt ($T = \text{const}$ — Định luật Boyle): $p_1 V_1 = p_2 V_2$.
   - Đẳng áp ($p = \text{const}$ — Định luật Charles): $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$.
   - Đẳng tích ($V = \text{const}$): $\dfrac{p_1}{T_1} = \dfrac{p_2}{T_2}$.
   - Phương trình trạng thái khí lí tưởng (khối lượng khí $m$ không đổi):
     $$\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$$
   - Phương trình Clapeyron:
     $$p V = n R T = \frac{m}{M} R T$$
     với $n$ là số mol, $M$ là khối lượng mol ($\text{kg/mol}$), $R = 8{,}31\ \text{J}/(\text{mol}\cdot\text{K})$.
3. **Thứ nguyên & đơn vị SI**:
   - $p$: $\text{Pa}$; $V$: $\text{m}^3$; $T$: $\text{K}$ ($T = t^\circ\text{C} + 273$); $n$: $\text{mol}$; $M$: $\text{kg/mol}$ (ví dụ: $\text{O}_2$ là $0{,}032\ \text{kg/mol}$, $\text{H}_2$ là $0{,}002\ \text{kg/mol}$).
   - Mẹo tính nhanh SI hỗn hợp: $p(\text{kPa}) \cdot V(\text{lít}) = n \cdot 8{,}31 \cdot T(\text{K})$ (vì $10^3\ \text{Pa} \times 10^{-3}\ \text{m}^3 = 1\ \text{Pa}\cdot\text{m}^3$).
4. **Điều kiện áp dụng & giới hạn mô hình**:
   - Khí thực tiến gần mô hình khí lí tưởng ở **áp suất thấp và nhiệt độ cao** (xa điểm hóa lỏng).
   - Hai phương trình trạng thái $\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$ chỉ dùng khi **khối lượng khí (số mol $n$) không đổi** (không rò rỉ, không bơm thêm khí). Nếu có bơm/thoát khí phải viết Clapeyron cho số mol từng phần.
5. **Ý nghĩa hình học của đồ thị**:
   - Hệ $(p - V)$: đường đẳng nhiệt là **hypebol**. Đường nằm xa gốc tọa độ hơn ứng với nhiệt độ $T$ cao hơn (xác định bằng cách kẻ đường đẳng tích hoặc đẳng áp cắt hai đường).
   - Hệ $(p - T)$: đường đẳng tích là **đoạn thẳng kéo dài đi qua gốc tọa độ $(0\ \text{K}; 0\ \text{Pa})$**. Độ dốc $\dfrac{p}{T} = \dfrac{nR}{V} \Rightarrow$ **đường nằm trên (dốc hơn) có $V$ nhỏ hơn**.
   - Hệ $(V - T)$: đường đẳng áp là **đoạn thẳng kéo dài đi qua gốc tọa độ $(0\ \text{K}; 0\ \text{m}^3)$**. Độ dốc $\dfrac{V}{T} = \dfrac{nR}{p} \Rightarrow$ **đường nằm trên (dốc hơn) có $p$ nhỏ hơn**.
6. **Bẫy thường gặp**:
   - Chia tỉ lệ nhiệt độ bằng $^\circ\text{C}$ thay vì $\text{K}$ (ví dụ: nói "từ $27^\circ\text{C}$ lên $54^\circ\text{C}$ nhiệt độ tuyệt đối tăng gấp đôi" $\to$ **SAI**, $300\ \text{K} \to 327\ \text{K}$).
   - Nhầm quy tắc so sánh độ dốc: thấy đường đẳng tích trên hệ $(p-T)$ dốc hơn lại chọn $V$ lớn hơn.
   - Đề vẽ đồ thị trục hoành $t(^\circ\text{C})$ chứ không phải $T(\text{K})$: khi đó đường thẳng kéo dài cắt trục hoành tại $-273^\circ\text{C}$, không đi qua gốc $(0; 0)$.

---

### Chủ đề 2.2: Áp suất theo mô hình động học phân tử & Động năng phân tử

1. **Bản chất hiện tượng & mô hình vật lí**:
   - Áp suất chất khí tỉ lệ thuận với mật độ phân tử và động năng tịnh tiến trung bình của phân tử khí.
2. **Công thức & ý nghĩa từng đại lượng**:
   - Áp suất chất khí:
     $$p = \frac{1}{3} \mu m \overline{v^2} = \frac{2}{3} \mu \overline{E_\text{đ}}$$
     với $\mu = \dfrac{N}{V}$ là mật độ phân tử ($\text{m}^{-3}$), $m$ là khối lượng 1 phân tử ($\text{kg}$), $\overline{v^2}$ là trung bình bình phương tốc độ ($\text{m}^2/\text{s}^2$).
   - Động năng tịnh tiến trung bình của một phân tử:
     $$\overline{E_\text{đ}} = \frac{3}{2} k T$$
     với $k = \dfrac{R}{N_A} = 1{,}38 \times 10^{-23}\ \text{J/K}$ (hằng số Boltzmann).
   - Tốc độ căn quân phương (căn bậc hai của trung bình bình phương tốc độ):
     $$v_{\text{rms}} = \sqrt{\overline{v^2}} = \sqrt{\frac{3 k T}{m}} = \sqrt{\frac{3 R T}{M}}$$
3. **Thứ nguyên & đơn vị SI**:
   - $\mu$: $\text{m}^{-3}$; $\overline{E_\text{đ}}$: $\text{J}$; $k$: $\text{J/K}$; $v_{\text{rms}}$: $\text{m/s}$; $M$: $\text{kg/mol}$.
4. **Điều kiện áp dụng & giới hạn mô hình**:
   - $\overline{E_\text{đ}} = \dfrac{3}{2} k T$ là động năng **tịnh tiến** trung bình của phân tử khí lí tưởng (chưa tính động năng quay/dao động của khí đa nguyên tử; tuy nhiên ở THPTQG luôn xét động năng tịnh tiến trung bình).
5. **Ý nghĩa hình học của đồ thị**:
   - Đồ thị $\overline{E_\text{đ}}(T)$ là tia đi qua gốc $0\ \text{K}$ với độ dốc chung bằng $\dfrac{3}{2} k$ cho mọi loại khí lí tưởng.
6. **Bẫy thường gặp**:
   - Cho $\text{H}_2$ và $\text{O}_2$ ở cùng nhiệt độ $T$, học sinh hay nhầm $\overline{E_\text{đ}}$ khác nhau vì khối lượng phân tử khác nhau $\to$ **SAI**, cùng nhiệt độ $T$ thì $\overline{E_\text{đ}}$ bằng nhau, chỉ có $v_{\text{rms}}$ tỉ lệ nghịch với $\sqrt{M}$.
   - Quên đổi $M$ từ $\text{g/mol}$ sang $\text{kg/mol}$ (chia $1000$) khi bấm $\sqrt{3RT/M}$, làm sai đáp số đúng $\sqrt{1000} \approx 31{,}6$ lần!
