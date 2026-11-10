# ⌨️ e-typing Key Remapper (Chrome Extension)

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?logo=googlechrome&logoColor=white)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**e-typing Key Remapper** là tiện ích mở rộng (Chrome Extension) giúp can thiệp sự kiện bàn phím vật lý theo thời gian thực trên nền tảng luyện gõ phím tiếng Nhật [e-typing.ne.jp](https://www.e-typing.ne.jp/). Thay vì dùng bot tự động gõ (auto-typer) dễ bị phát hiện, tiện ích giữ nguyên nhịp gõ tay tự nhiên của người dùng (`event.isTrusted === true`) và tự động ánh xạ phím bất kỳ bạn nhấn sang ký tự đúng tiếp theo của bài.

> ⚠️ **Tuyên bố miễn trừ trách nhiệm (Disclaimer):**
> Dự án này được tạo ra với mục đích **học tập, nghiên cứu cơ chế DOM / Event Capture trong trình duyệt và giải trí cá nhân (For educational & entertainment purposes only)**. Vui lòng không lạm dụng công cụ để can thiệp vào bảng xếp hạng chung hoặc các kỳ thi chính thức.

---

## 📸 Hình ảnh Demo (Preview)

### Giao diện bảng trạng thái (HUD) hiển thị trực tiếp trên trang web
![HUD Preview](./assets/hud-preview.png)

---

## ✨ Tính năng nổi bật

- 🎯 **Chế độ gõ tay 100% (Human-Paced Remapping):** Không tự động chạy máy. Bạn gõ nhịp nhanh hay chậm, điểm WPM sẽ phản ánh đúng tốc độ tay của bạn.
- 🧠 **Đọc dữ liệu trực tiếp từ bộ nhớ ứng dụng:** Hoạt động chính xác 100% ngay từ phím đầu tiên kể cả khi tắt dòng gợi ý chữ Latinh (`ローマ字表示: OFF`) và tắt cả phiên âm Hiragana (`かな表示: OFF`).
- 🎚️ **Tuỳ chỉnh độ chính xác (Accuracy Slider):** Cho phép kéo chỉnh tỷ lệ chính xác từ `80%` đến `100%` để mô phỏng lỗi gõ tự nhiên của người thật.
- 👻 **Chế độ tàng hình (Stealth Mode):**
  - Bật/tắt bảng thông tin HUD ở góc màn hình chỉ với 1 cú click.
  - Làm trong suốt dòng gợi ý Romaji khi đang ở chế độ tắt gợi ý để không bị lộ trên màn hình nếu lỡ gõ sai.
- ⚡ **Phím tắt nhanh:** Bật/tắt nóng tiện ích ngay trong lúc làm bài bằng tổ hợp phím `Ctrl + Shift + F8`.

---

## 🚀 Hướng dẫn cài đặt (Installation)

### Bước 1: Tải mã nguồn về máy
- **Cách 1 (Tải file ZIP):** Bấm vào nút **Code** (màu xanh lá ở góc trên bên phải trang GitHub) $\rightarrow$ chọn **Download ZIP** và giải nén ra một thư mục trên máy tính.
- **Cách 2 (Dùng Git):**
  ```bash
  git clone https://github.com/DATLK-1002/Etyping-Keymapper.git
  ```

### Bước 2: Cài đặt vào trình duyệt (Chrome / Edge / Brave / Cốc Cốc)
1. Mở trình duyệt và nhập đường dẫn sau vào thanh địa chỉ rồi nhấn **Enter**:
   ```text
   chrome://extensions/
   ```
2. Ở góc trên cùng bên phải, gạt công tắc bật **Chế độ dành cho nhà phát triển (Developer mode)**.
3. Ở góc trên bên trái, bấm vào nút **Tải tiện ích đã giải nén (Load unpacked)**.
4. Chọn đúng thư mục vừa giải nén ở Bước 1 (thư mục chứa trực tiếp file `manifest.json`).

---

## 📖 Hướng dẫn sử dụng (Usage)

1. **Ghim tiện ích:** Bấm vào biểu tượng **Mảnh ghép (Extensions)** trên thanh công cụ Chrome và bấm nút **Ghim (Pin)** cạnh **e-typing Key Remapper**.
2. **Thiết lập cấu hình:** Bấm vào icon tiện ích trên thanh công cụ để tuỳ chỉnh:
   - **Độ chính xác (Accuracy):** Chỉnh `96% – 100%` tuỳ nhu cầu.
   - **Gõ đúng 100% khi tắt cả Hiragana & Gợi ý:** Tự động đạt `100%` độ chính xác khi bạn tắt cả 2 dòng gợi ý trên web.
   - **Tàng hình gợi ý Romaji khi đang tắt:** Giữ cho dòng gợi ý Romaji không bị hiện ra khi gõ sai.
   - **Hiển thị bảng trạng thái (HUD) trên web:** Tích chọn để hiện bảng theo dõi ở góc dưới bên phải, hoặc bỏ tích để ẩn hoàn toàn.
3. **Bắt đầu gõ:**
   - Mở trang [e-typing.ne.jp](https://www.e-typing.ne.jp/), chọn bài kiểm tra bất kỳ (ví dụ **腕試しレベルチェック**).
   - Bấm **スタート (Start)** $\rightarrow$ nhấn phím **Space** để bắt đầu đếm ngược.
   - Khi câu hỏi xuất hiện, chỉ cần gõ bất kỳ phím chữ cái nào trên bàn phím với tốc độ tự nhiên của bạn.
   - Nhấn **`Ctrl + Shift + F8`** bất cứ lúc nào nếu muốn bật/tắt nhanh công cụ.

---

## 📂 Cấu trúc thư mục

```text
├── assets/
│   └── hud-preview.png   # Ảnh chụp màn hình bảng trạng thái HUD
├── manifest.json         # Cấu hình Chrome Extension (Manifest V3)
├── injected.js           # Bắt sự kiện phím ở pha Capture & đọc bộ nhớ câu hỏi
├── content.js            # Đồng bộ cấu hình từ chrome.storage & hiển thị HUD
├── background.js         # Service Worker xử lý sự kiện nền
├── popup.html            # Giao diện menu điều khiển
├── popup.css             # Giao diện CSS của popup
├── popup.js              # Xử lý lưu cấu hình người dùng
├── .gitignore            # Danh sách file bỏ qua khi đẩy lên Git
├── LICENSE               # Giấy phép mã nguồn mở MIT
└── README.md             # Tài liệu giới thiệu và hướng dẫn dự án
```

---

## 📄 Giấy phép (License)

Dự án được phân phối dưới giấy phép **[MIT License](./LICENSE)**. Chỉ sử dụng cho mục đích giải trí và nghiên cứu học tập.
