# Website đăng ký visa – bản trình diễn tĩnh (Vercel)

Các tệp: `index.html`, `upload.html`, `admin.html`, `app.js`. Đưa cả 4 vào thư mục gốc dự án trên Vercel.

- Trang 1: tất cả ô thông tin đều có thể để trống hoặc nhập tùy ý và vẫn bấm Gửi Hồ Sơ sang trang 2.
- PIN: 6 ô hiển thị bị vô hiệu hóa, không nhận, lưu hay truyền mã PIN.
- Trang 2: có thể bỏ trống cả 4 tệp; nếu chọn tệp thì kiểm tra định dạng và dung lượng tối đa 10 MB/tệp, bấm Nộp Hồ Sơ để hiển thị bảng trạng thái mô phỏng.
- `admin.html`: hiển thị và đổi trạng thái của hồ sơ demo trong *cùng trình duyệt* bằng localStorage. Dữ liệu này không đồng bộ qua máy khác.
- Không có API, máy chủ, đăng nhập admin, lưu nội dung tệp, hay xét duyệt thực tế. Không dùng để thu thập hồ sơ thật.
- Không công bố trang `admin.html` như một trang quản trị thật: trang này chỉ là minh họa.
