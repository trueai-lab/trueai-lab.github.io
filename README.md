# TrueAI

Lab website của **TrueAI** — **TRU**stworthy & g**E**neralizable **AI** — nhóm nghiên cứu tại
Khoa Khoa học & Kỹ thuật Máy tính, Trường Đại học Bách Khoa TP.HCM (HCMUT).

Tên nhóm là từ ghép: **TRU**stworthy + g**E**neralizable + **AI**. Khi viết ra dạng đầy đủ
trên site thì dùng "Trustworthy & Generalizable AI" (viết hoa bình thường).

Site tĩnh thuần HTML/CSS/JS, không có build step. Mở thẳng `index.html`, hoặc chạy local:

```sh
python3 -m http.server 8000
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Hero, Research Areas, Featured Publications, News |
| `people.html` | Thành viên lab |
| `publications.html` | Danh sách công bố |
| `contact.html` | Liên hệ, thông tin tuyển thành viên |
| `css/style.css` | Toàn bộ style của site chính |
| `js/main.js` | Script của site chính |
| `efficient-det-2025/` | Project page mẫu cho một bài báo (CSS/JS riêng) |

Navbar và footer được lặp lại trong cả 4 trang — sửa một chỗ thì phải sửa cả 4.

## Deploy lên https://trueai-lab.github.io

Tên `trueai` trên GitHub đã bị một tài khoản khác chiếm (user có thật, id 20025989), nên
không tạo được org tên `trueai`. Dùng `trueai-lab` thay thế.

**1. Tạo organization** (chỉ làm được trên web, không có lệnh CLI):
   - Vào https://github.com/organizations/plan → chọn gói **Free**
   - Organization name: `trueai-lab`

**2. Tạo repo trong org đó**, tên đúng **`trueai-lab.github.io`**, để **Public**.
   Tên repo phải trùng khít tên org thì Pages mới phục vụ ở domain gốc.

**3. Đẩy code lên:**

```sh
git add -A
git commit -m "TrueAI lab website"
git branch -M main
git remote add origin https://github.com/trueai-lab/trueai-lab.github.io.git
git push -u origin main
```

**4. Bật GitHub Pages:** repo → Settings → Pages → Source: **Deploy from a branch**,
   branch `main`, folder `/ (root)` → Save.

Sau 1–2 phút site chạy ở https://trueai-lab.github.io, project page ở
https://trueai-lab.github.io/efficient-det-2025/.

File `.nojekyll` ở thư mục gốc để Jekyll không xử lý lại nội dung — đừng xóa.

## Còn là placeholder

- Tên PI, thành viên, danh sách publication, tin tức trong News
- Số liệu ở hero (`30+`, `15+`, `5+`)
- Các link `href="#"` rải rác
- Icon navbar đang là chữ `AI` trong ô vuông — thay bằng logo thật nếu có
- Link social/GitHub của lab

## Ghi chú

- `_reference/` chứa các trang gốc từ template VAiL, giữ lại **chỉ để tham khảo markup**.
  Nó có tên và ảnh người thật — đã nằm trong `.gitignore`, không được deploy.
