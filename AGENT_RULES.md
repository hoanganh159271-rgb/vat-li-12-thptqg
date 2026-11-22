# AGENT_RULES.md — Quy chuẩn Chuyên môn, Kỹ thuật & Lệnh tắt (Vật lí 12 GDPT 2018)

Tệp này lưu trữ toàn bộ quy chuẩn bắt buộc cho hệ sinh thái học tập Vật lí THPTQG ngoại tuyến. Mọi phiên làm việc tiếp theo đều phải tuân thủ tuyệt đối các quy tắc dưới đây.

---

## PHẦN 1: QUY CHUẨN CHUYÊN MÔN & KỸ THUẬT

### 1. CHUẨN VẬT LÍ CHƯƠNG TRÌNH GDPT 2018 (TUYỆT ĐỐI KHÔNG NHẦM SANG HỆ ANH/MỸ)

- Sử dụng **100% thuật ngữ tiếng Việt chuẩn chương trình GDPT 2018**: Vật lí nhiệt, Khí lí tưởng, Từ trường, Vật lí hạt nhân; mở rộng kiến thức nền lớp 11: Dao động, Sóng, Điện học.
- **Quy ước dấu Định luật I nhiệt động lực học**:
  $$\Delta U = A + Q$$
  - $Q > 0$: vật nhận nhiệt lượng | $Q < 0$: vật truyền nhiệt lượng.
  - $A > 0$: vật nhận công (khí bị nén) | $A < 0$: vật thực hiện công (khí giãn nở).
  *(Lưu ý: Tuyệt đối không viết theo quy ước hệ Anh/Mỹ $\Delta U = Q - W$ dễ gây nhầm dấu khi học sinh làm bài thi GDPT 2018).*
- **Quy ước hằng số và đổi đơn vị chuẩn thi THPTQG**:
  - $T(\text{K}) = t(^\circ\text{C}) + 273$ (ghi chú thêm $+273{,}15$ khi đề bài yêu cầu độ chính xác cao).
  - $R = 8{,}31\ \text{J}/(\text{mol}\cdot\text{K})$
  - $k = 1{,}38 \times 10^{-23}\ \text{J/K}$
  - $N_A = 6{,}02 \times 10^{23}\ \text{mol}^{-1}$
  - $1\ \text{atm} = 1{,}013 \times 10^5\ \text{Pa}$ | $1\ \text{bar} = 10^5\ \text{Pa}$ | $1\ \text{mmHg} \approx 133{,}3\ \text{Pa}$
  - $1\ \text{lít} = 1\ \text{dm}^3 = 10^{-3}\ \text{m}^3$
  - $1\ \text{eV} = 1{,}6 \times 10^{-19}\ \text{J}$ | $1\ \text{MeV} = 1{,}6 \times 10^{-13}\ \text{J}$
  - $1\ \text{u} \approx 931{,}5\ \text{MeV}/c^2$ | $1\ \text{Ci} = 3{,}7 \times 10^{10}\ \text{Bq}$
- **Khung 6 lớp bắt buộc trong mọi bài giảng, mô phỏng và lời giải**:
  1. Bản chất hiện tượng & mô hình vật lí
  2. Công thức & ý nghĩa từng đại lượng
  3. Thứ nguyên & đơn vị SI
  4. Điều kiện áp dụng & giới hạn mô hình
  5. Ý nghĩa hình học của đồ thị (độ dốc, diện tích hình phẳng, giao điểm)
  6. Bẫy thường gặp

### 2. CHUẨN CẤU TRÚC ĐỀ THI & THANG ĐIỂM THPTQG

- **Phần I (Trắc nghiệm nhiều lựa chọn)**: 18 câu $\times$ 0,25 điểm = 4,5 điểm.
- **Phần II (Trắc nghiệm Đúng/Sai)**: 4 câu $\times$ 4 ý (a, b, c, d). Chấm điểm lũy tiến **CHÍNH XÁC từng câu**:
  - Đúng 1 ý: **0,10 điểm**
  - Đúng 2 ý: **0,25 điểm**
  - Đúng 3 ý: **0,50 điểm**
  - Đúng cả 4 ý: **1,00 điểm**
- **Phần III (Trắc nghiệm Trả lời ngắn)**: 6 câu $\times$ 0,25 điểm = 1,5 điểm.
  - Ô nhập câu trả lời phải kiểm tra định dạng chuẩn phiếu tô: **tối đa 4 ký tự** (tính cả dấu âm `-` và dấu phẩy `,` hoặc chấm `.` thập phân), nhắc kiểm tra quy tắc làm tròn và đơn vị đề bài yêu cầu.

### 3. NGUYÊN TẮC QUẢN LÝ KHO KIẾN THỨC (KB) & CHỐNG HỌC ẢO

- **Bảo toàn nội dung gốc**: Tuyệt đối KHÔNG tự ý chỉnh sửa nội dung gốc khi người dùng nạp ghi chú hoặc tài liệu SGK. Luôn tách biệt rõ 2 khối:
  - `[NỘI DUNG GỐC]`
  - `[GHI CHÚ MỞ RỘNG / BẪY ĐỀ THI]`
- **Chống học ảo**: KHÔNG tự động chuyển đổi kho lý thuyết thành flashcard hay giải hộ toàn bộ bài tập khi người dùng chưa thử tự làm.
- **Quy trình kiểm tra lý thuyết 7 bước** (áp dụng khi người dùng gửi lý thuyết để kiểm tra):
  1. Soi từng mục
  2. Chỉ lỗi sai bản chất / số liệu
  3. Soát định nghĩa & thuật ngữ
  4. Soát giả định & điều kiện áp dụng
  5. Bổ sung ngoại lệ còn thiếu
  6. Giải thích lý do cần sửa
  7. Phân loại lỗi nghiêm trọng vs lỗi trình bày
  *(Chỉ viết lại bản sạch khi người dùng yêu cầu rõ).*
- **Hệ thống phân loại 8 nhóm lỗi + 2 thẻ phụ đặc thù Vật lí**:
  - 8 nhóm chẩn đoán:
    1. `Hổng kiến thức`
    2. `Hổng bản chất`
    3. `Thiếu ý tưởng`
    4. `Lỗi vận dụng`
    5. `Tính toán ẩu`
    6. `Đọc sót dữ kiện`
    7. `Quản lý thời gian`
    8. `Bất cẩn`
  - 2 thẻ phụ đặc thù Vật lí:
    - `Lỗi đơn vị/thứ nguyên`
    - `Quên điều kiện mô hình`

### 4. KIẾN TRÚC KỸ THUẬT BẮT BUỘC (100% OFFLINE & TABLET-FRIENDLY)

- **KHÔNG phụ thuộc CDN ngoài**: Không gọi Tailwind CDN, Chart.js CDN, MathJax/KaTeX CDN, Google Fonts hay bất kỳ tài nguyên `http://`/`https://` nào từ internet, đảm bảo mở trực tiếp bằng `file://` trên máy tính bảng khi không có Wi-Fi vẫn chạy 100% mượt mà (không dùng `type="module"`, không dùng `fetch()` cục bộ để tránh lỗi CORS khi chạy `file://`).
- **Công nghệ thuần bản địa**: HTML5 + CSS3 + Vanilla JS + HTML5 Canvas API / SVG thuần, đóng gói gọn gàng qua `<script src="...">` gắn lên namespace toàn cục (`window.LY_COMMON`, `window.LY_DOCS`, `window.LY_EXAM_BANK`). Khi cập nhật bất kỳ tệp `.md` nào trong `kb/`, `luyen_tap/kho_bay_dung_sai.md` hoặc `chan_doan/`, bắt buộc đồng bộ lại `assets/docs_data.js` để trình đọc tài liệu ngoại tuyến trên `index.html` luôn hiển thị bản mới nhất.
- **Thiết kế tối ưu cho máy tính & máy tính bảng cảm ứng/bút**:
  - Chữ sắc nét (tối thiểu `15px–16px`), line-height thoáng (`1.5–1.7`), số liệu dùng `tabular-nums`.
  - Thanh trượt (`input[type="range"]`) và nút bấm đủ lớn (`min-height: 44px`, thumb `>= 28px`) để kéo mượt bằng ngón tay hoặc bút cảm ứng.
  - Hỗ trợ chế độ Sáng/Tối (`Light / Dark Mode`), lưu tiến độ tự động bằng `localStorage` kèm nút Xuất/Nhập JSON để sao lưu giữa máy tính và máy tính bảng.

---

## PHẦN 3: HỆ THỐNG LỆNH TẮT MỞ RỘNG

Khi người dùng nhập các lệnh sau trong các phiên làm việc tiếp theo, phải thực thi đúng quy trình:

- **`/ly-kb [chương/chủ đề]`**:
  Xây dựng hoặc cập nhật bài học vào tệp `kb/` tương ứng theo đúng khung 6 lớp (Mô hình $\to$ Công thức & ý nghĩa $\to$ Thứ nguyên/Đơn vị $\to$ Điều kiện áp dụng $\to$ Đồ thị $\to$ Bẫy đề thi). Bảo toàn 100% `[NỘI DUNG GỐC]` do người dùng cung cấp, rồi đồng bộ lại `assets/docs_data.js`.

- **`/ly-check [dán ghi chú/bài giải]`**:
  Chạy quy trình thẩm định 7 bước (kiểm tra định nghĩa, dấu, đơn vị, điều kiện áp dụng, ngoại lệ). Trình bày danh sách phát hiện lỗi và phân loại nghiêm trọng/trình bày trước, KHÔNG tự ý viết lại toàn bộ trừ khi người dùng yêu cầu rõ.

- **`/ly-mophong [tên hiện tượng/bài toán]`**:
  Tạo thêm 1 tệp HTML5 Canvas mới trong `mo_phong/` (100% offline, HiDPI, Light/Dark, tablet-friendly) có thanh trượt thông số, vẽ đồ thị thời gian thực, có bảng "Điều kiện mô hình & Bẫy hay gặp", rồi tự động thêm thẻ liên kết vào `index.html`.

- **`/ly-dothi [mô tả đồ thị cần luyện]`**:
  Tạo bộ bài tập đọc đồ thị (so sánh độ dốc, diện tích dưới đường cong, chuyển đổi hệ trục tọa độ) kèm lời giải 3 lớp (`banChat`, `congThuc`, `bayCanTranh`) và nạp vào `luyen_tap/data_cau_hoi.js`.

- **`/ly-loi [câu sai + lý do mình làm nhầm]`**:
  Chẩn đoán đúng vào 8 nhóm lỗi + thẻ phụ đơn vị/mô hình $\to$ ghi vào `chan_doan/nhat_ky_loi_sai.md` $\to$ nếu lỗi cùng loại lặp $\ge 2$ lần thì đẩy cảnh báo lên đầu `chan_doan/checklist_truoc_khi_thi.md` kèm 1 bài tập vá lỗ hổng nhỏ, rồi đồng bộ lại `assets/docs_data.js`.

- **`/ly-bay [chương hoặc nội dung sai]`**:
  Nếu người dùng gửi câu sai: bóc tách bẫy vào `luyen_tap/kho_bay_dung_sai.md` và đồng bộ lại `assets/docs_data.js`. Nếu người dùng gọi theo tên chương: sinh mới 4 câu Đúng/Sai (16 ý) + 4 câu Trả lời ngắn xoáy đúng vào các bẫy trong kho và nạp vào `luyen_tap/data_cau_hoi.js`.

- **`/ly-de [số chương / loại đề]`**:
  Tạo 1 đề luyện tập chuẩn cấu trúc THPTQG (hoặc mini-test 20 phút) nạp vào `luyen_tap/data_cau_hoi.js` để làm trực tiếp trên `luyen_tap/phong_thi_thptqg.html`.

- **`/ly-tongket`**:
  Quét toàn bộ `chan_doan/nhat_ky_loi_sai.md` và `luyen_tap/kho_bay_dung_sai.md` $\to$ tạo báo cáo mới trong `bao_cao_tuan/` xếp hạng 3 lỗ hổng nặng nhất, tỷ lệ lỗi đơn vị/bản chất và lịch ôn lặp lại ngắt quãng (1-3-7-14 ngày) cho tuần tới.

- **`/ly-update`**:
  Đồng bộ toàn bộ 8 tệp `.md` vào `assets/docs_data.js`, tăng số phiên bản `CACHE_NAME` trong `sw.js` (ví dụ `v1` $\to$ `v2`) và đẩy toàn bộ thay đổi lên kho GitHub `hoanganh159271-rgb/vat-li-12-thptqg` nhánh `main` qua `github-mcp-server` để link web tự cập nhật.
