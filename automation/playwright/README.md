# Playwright Chromium

Playwright adalah alat untuk menjalankan langkah penggunaan melalui peramban secara otomatis, sedangkan Chromium adalah peramban yang digunakan pada contoh ini. Keduanya membantu memeriksa perilaku aplikasi dan mengambil tangkapan layar dari proses nyata. Hasil pengujian perlu dijelaskan sebagai pekerjaan pengguna yang berhasil atau gagal, disertai akibatnya; contoh tes di repository ini belum merupakan bukti pengujian aplikasi tertentu.

Di repository aplikasi Laravel:

```bash
npm install --save-dev @playwright/test
npx playwright install chromium
```

Jalankan pada aplikasi lokal/staging yang diizinkan. Buat direktori screenshot, gunakan data uji, dan hindari data pribadi. Contoh tes terdapat pada `screenshot.spec.js`.
