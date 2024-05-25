# I. Installation

Cài đặt các package cần thiết bằng lệnh:

```bash
npm install
```

Để chạy được backend, trước tiên cần cài đặt các package cần thiết:

- Cài đặt môi trường ảo với `pipenv` (giả sử đã có `pipenv` trước đó):
```bash
pipenv sync
```

- Hoặc cài đặt vào `python` với `pip`:
```bash
pip install -r requirements.txt
```
# II. Development

Chạy front-end bằng lệnh:
```bash
npm run next-dev
```

Chạy backend bằng lệnh: 
```bash
npm run fastapi-dev
```

Để chạy cả backend và frontend, dùng lệnh:
```bash
npm run dev
```