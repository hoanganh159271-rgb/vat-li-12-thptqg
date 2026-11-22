# Chương 3: Từ trường (GDPT 2018)

---

## [NỘI DUNG GỐC]

*(Khu vực giữ nguyên 100% nội dung SGK hoặc ghi chú gốc do bạn nạp vào qua lệnh `/ly-kb`. Không tự ý chỉnh sửa khối này.)*

- Trọng tâm Chương 3 SGK Vật lí 12 (GDPT 2018):
  1. Từ trường. Cảm ứng từ & Lực từ tác dụng lên đoạn dây dẫn mang dòng điện.
  2. Từ thông & Hiện tượng cảm ứng điện từ (Định luật Lenz, Định luật Faraday).
  3. Đại cương về dòng điện xoay chiều & Máy phát điện, Máy biến áp.
  4. Sóng điện từ.

---

## [GHI CHÚ MỞ RỘNG / BẪY ĐỀ THI]

### Chủ đề 3.1: Từ trường & Lực từ tác dụng lên dây dẫn mang dòng điện

1. **Bản chất hiện tượng & mô hình vật lí**:
   - Từ trường là dạng vật chất tồn tại xung quanh nam châm, dòng điện hoặc điện tích chuyển động, biểu hiện cụ thể qua tác dụng lực từ lên nam châm khác hay dòng điện đặt trong nó.
   - Đường sức từ là đường cong kín (vào cực Nam, ra cực Bắc bên ngoài nam châm); tiếp tuyến tại mỗi điểm trùng với phương vectơ cảm ứng từ $\vec{B}$.
2. **Công thức & ý nghĩa từng đại lượng**:
   - Độ lớn lực từ tác dụng lên đoạn dây dẫn thẳng dài $L$ mang dòng điện $I$ đặt trong từ trường đều $\vec{B}$:
     $$F = B I L \sin\theta$$
     với $\theta$ là góc hợp bởi chiều dòng điện $I$ và vectơ cảm ứng từ $\vec{B}$.
   - Phương chiều $\vec{F}$ xác định theo **quy tắc bàn tay trái**: đặt bàn tay trái sao cho đường sức từ xuyên vào lòng bàn tay, chiều từ cổ tay đến bốn ngón tay chỉ chiều dòng điện $I$, ngón tay cái choãi ra $90^\circ$ chỉ chiều lực từ $\vec{F}$.
3. **Thứ nguyên & đơn vị SI**:
   - $B$: Tesla ($\text{T} = \text{N}/(\text{A}\cdot\text{m})$); $I$: Ampe ($\text{A}$); $L$: mét ($\text{m}$); $F$: Newton ($\text{N}$).
4. **Điều kiện áp dụng & giới hạn mô hình**:
   - $F = BIL\sin\theta$ chỉ áp dụng trực tiếp khi đoạn dây **thẳng** đặt trong **từ trường đều**. Nếu dây có hình dạng bất kì trong từ trường đều, $L$ là khoảng cách thẳng nối hai đầu đoạn dây.
   - Khi dây đặt song song đường sức từ ($\theta = 0^\circ$ hoặc $180^\circ$) thì $F = 0$.
5. **Ý nghĩa hình học của đồ thị**:
   - Độ lớn lực $F$ tỉ lệ thuận với dòng điện $I$ (đồ thị $F(I)$ qua gốc tọa độ có hệ số góc $B L \sin\theta$, dùng trong thí nghiệm cân dòng điện đo $B$).
6. **Bẫy thường gặp**:
   - Đọc góc giữa dây và mặt phẳng vuông góc với $\vec{B}$ rồi thay trực tiếp vào $\sin\theta$.
   - Quên đổi $L$ từ $\text{cm}$ sang $\text{m}$ hoặc dòng điện từ $\text{mA}$ sang $\text{A}$.

---

### Chủ đề 3.2: Từ thông, Cảm ứng điện từ & Dòng điện xoay chiều

1. **Bản chất hiện tượng & mô hình vật lí**:
   - **Từ thông ($\Phi$)** đặc trưng cho số đường sức từ xuyên qua diện tích $S$ giới hạn bởi một mạch kín.
   - Khi từ thông qua mạch kín biến thiên theo thời gian, trong mạch xuất hiện suất điện động cảm ứng và dòng điện cảm ứng (**hiện tượng cảm ứng điện từ**).
   - **Định luật Lenz**: Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra ($\vec{B}_c$) có tác dụng **chống lại sự biến thiên của từ thông ban đầu** ($\Phi$ tăng $\Rightarrow \vec{B}_c \uparrow\downarrow \vec{B}$; $\Phi$ giảm $\Rightarrow \vec{B}_c \uparrow\uparrow \vec{B}$).
2. **Công thức & ý nghĩa từng đại lượng**:
   - Từ thông qua khung dây $N$ vòng, diện tích mỗi vòng $S$:
     $$\Phi = N B S \cos\alpha$$
     với $\alpha = (\vec{n}, \vec{B})$ là góc giữa **pháp tuyến** $\vec{n}$ của mặt khung và $\vec{B}$.
   - Định luật Faraday (suất điện động cảm ứng):
     $$e = -\frac{\Delta \Phi}{\Delta t} \quad \text{hoặc} \quad e(t) = -\Phi'(t)$$
   - Khi khung dây quay đều với tốc độ góc $\omega = 2\pi f = \dfrac{2\pi}{T}$:
     $$\Phi(t) = N B S \cos(\omega t + \varphi) = \Phi_0 \cos(\omega t + \varphi)$$
     $$e(t) = \omega N B S \sin(\omega t + \varphi) = E_0 \cos\left(\omega t + \varphi - \frac{\pi}{2}\right)$$
     với $E_0 = \omega \Phi_0 = \omega N B S$.
   - Giá trị hiệu dụng (đo bởi ampe kế / vôn kế xoay chiều):
     $$I = \frac{I_0}{\sqrt{2}}, \quad U = \frac{U_0}{\sqrt{2}}, \quad E = \frac{E_0}{\sqrt{2}}$$
   - Công thức máy biến áp lí tưởng:
     $$\frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$$
3. **Thứ nguyên & đơn vị SI**:
   - $\Phi$: Weber ($\text{Wb} = \text{T}\cdot\text{m}^2$); $S$: $\text{m}^2$ ($1\ \text{cm}^2 = 10^{-4}\ \text{m}^2$); $e, U, E$: Volt ($\text{V}$); $\omega$: $\text{rad/s}$; $f$: $\text{Hz}$; $T$: $\text{s}$.
4. **Điều kiện áp dụng & giới hạn mô hình**:
   - Khung dây phải là mạch kín thì mới có dòng điện cảm ứng; mạch hở vẫn có suất điện động cảm ứng ở hai đầu.
   - Tỉ số hiệu dụng $I = I_0/\sqrt{2}$ chỉ đúng cho dòng điện **điều hòa hình sin** (không áp dụng cho xung vuông, dòng một chiều).
   - Máy biến áp **chỉ hoạt động với dòng điện xoay chiều** (hoặc dòng biến thiên), KHÔNG hoạt động với dòng điện không đổi ($\Delta \Phi = 0 \Rightarrow U_2 = 0$).
   - Công thức $\dfrac{U_1}{U_2} = \dfrac{N_1}{N_2} = \dfrac{I_2}{I_1}$ áp dụng cho máy biến áp lí tưởng (bỏ qua hao phí đồng/lõi thép, bỏ qua điện trở dây quấn).
5. **Ý nghĩa hình học của đồ thị**:
   - Đồ thị $\Phi(t)$ và $e(t)$ **vuông pha nhau $\dfrac{\pi}{2}$** ($e$ trễ pha $\dfrac{\pi}{2}$ so với $\Phi$): khi $\Phi$ đạt cực đại ($\pm\Phi_0$) thì độ dốc $\Phi'(t) = 0 \Rightarrow e = 0$; khi $\Phi = 0$ thì độ dốc $|\Phi'(t)|$ lớn nhất $\Rightarrow |e| = E_0$.
   - Hệ thức độc lập thời gian (đồ thị pha $e - \Phi$ là đường elip): $\left(\dfrac{\Phi}{\Phi_0}\right)^2 + \left(\dfrac{e}{E_0}\right)^2 = 1$.
6. **Bẫy thường gặp**:
   - **Bẫy góc kinh điển**: Đề cho góc giữa $\vec{B}$ và **mặt phẳng khung dây** là $\beta$ $\Rightarrow \alpha = (\vec{n}, \vec{B}) = 90^\circ - \beta$, học sinh thay thẳng $\cos\beta$ là sai!
   - Nhầm đơn vị diện tích $1\ \text{cm}^2 = 10^{-2}\ \text{m}^2$ (đúng phải là $10^{-4}\ \text{m}^2$).
   - Quên nhân số vòng dây $N$ trong $\Phi = NBS\cos\alpha$.
   - Khi nói $\Phi$ cực đại thì kết luận $|e|$ cực đại $\to$ **SAI**, tại đó $e = 0$.

---

### Chủ đề 3.3: Sóng điện từ

1. **Bản chất hiện tượng & mô hình vật lí**:
   - Điện trường biến thiên sinh ra từ trường biến thiên và ngược lại; hai trường thống nhất tạo thành **điện từ trường** lan truyền trong không gian dưới dạng **sóng điện từ**.
2. **Công thức & ý nghĩa từng đại lượng**:
   - Bước sóng trong chân không/không khí: $\lambda = c T = \dfrac{c}{f}$ với $c = 3 \times 10^8\ \text{m/s}$.
3. **Thứ nguyên & đơn vị SI**:
   - $\lambda$: $\text{m}$; $f$: $\text{Hz}$; $T$: $\text{s}$.
4. **Điều kiện áp dụng & giới hạn mô hình**:
   - Sóng điện từ là **sóng ngang**, truyền được cả trong **chân không** (khác sóng cơ).
   - Tại mọi điểm truyền sóng, $\vec{E} \perp \vec{B} \perp \vec{v}$ (tạo tam diện thuận) và $\vec{E}, \vec{B}$ biến thiên **cùng pha** nhau (khác cặp $\Phi, e$ vuông pha).
5. **Ý nghĩa hình học của đồ thị**:
   - Sóng hình sin có hai thành phần $\vec{E}$ và $\vec{B}$ dao động trên hai mặt phẳng vuông góc, cùng đi qua nút $0$ và cùng đạt cực đại tại một vị trí.
6. **Bẫy thường gặp**:
   - Nhầm $\vec{E}$ và $\vec{B}$ trong sóng điện từ là vuông pha nhau $\to$ **SAI**, chúng vuông **phương** nhưng **cùng pha**.
