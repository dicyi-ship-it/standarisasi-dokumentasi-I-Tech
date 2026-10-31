# Standarisasi Dokumentasi I-Tech

Repository ini menyediakan pedoman bersama agar dokumentasi aplikasi dapat menjelaskan pekerjaan dan hasilnya kepada pimpinan serta tetap dapat diperiksa oleh tim teknis. Dokumen yang disusun dari pedoman ini harus menerangkan kebutuhan organisasi, cara kerja, pihak yang terlibat, dan hasil secara utuh. Rincian kode dan pengujian menjadi bukti pendukung setelah pembaca memahami gambaran umumnya.

Kerangka kerja internal untuk standarisasi rekayasa perangkat lunak, dokumentasi, pengujian, dan pelaporan berbagai aplikasi dan teknologi universitas. **Bukan sertifikasi ISO**.

[Anti-slop wajib digunakan selama generasi](standards/anti-slop.md) aplikasi maupun dokumentasinya. Repository menyertakan [aturan resmi single-file](standards/anti-slop/antislop.md), [identitas sumber dan lisensi](standards/anti-slop/README.md), serta [template pemeriksaan akhir](templates/reports/ANTI-SLOP-REVIEW.template.md). Instruksi agen mengaktifkan mode during untuk generasi dan mewajibkan bukti pemeriksaan empat blok sebelum hasil dinyatakan final.

## Mulai

1. Baca [instruksi kerja](AGENTS.md) dan [standar pusat](standards/README.md).
2. Salin `templates/PROJECT_CONTEXT.template.md` menjadi `PROJECT_CONTEXT.md` pada repository aplikasi.
3. Isi [template dokumen ISO](docs/ISO/00-DOCUMENT-CONTROL.md) sesuai topik dan [pemetaan ISO](standards/iso-mapping.md). Verifikasi edisi/klausul sebelum menyimpulkan pemenuhan; jangan mengisi hasil audit tanpa bukti.
4. Inventaris role aktual, seluruh fitur/tindakan/batas data dan output menggunakan [template alur per role](templates/reports/ALUR-PROGRAM-PER-ROLE.template.md). Setiap role wajib memiliki flowchart sendiri. Jangan menambah role tamu berdasarkan asumsi; akses publik dicatat terpisah jika ditemukan.
5. Jalankan pengujian Playwright hanya pada lingkungan yang diizinkan.
6. Gunakan [template laporan induk](templates/reports/LAPORAN-PERTANGGUNGJAWABAN.template.md) dan [standar PDF](standards/accountability-report.md) untuk struktur lintas aplikasi. Render flowchart dan periksa PDF; status tetap DRAFT sampai disahkan. [Contoh sintetis](templates/reports/CONTOH-SINTETIS.md) hanya menunjukkan pola pengisian, bukan bukti aplikasi.

Dokumentasi teknis dan screenshot per aplikasi disimpan di repository aplikasi masing-masing. Repo ini berisi standar dan template.

Saat menyalin template ke aplikasi, sesuaikan tautan pedoman pusat dengan lokasi standar yang digunakan atau tautan GitHub pada commit/tag tetap. Catat versi standar pusat pada PROJECT_CONTEXT. Jangan meninggalkan tautan relatif ke `standards/` atau `templates/` yang tidak tersedia pada repository aplikasi.

Untuk anti-slop, sertakan `standards/anti-slop.md` dan direktori `standards/anti-slop/` beserta lisensinya, lalu tambahkan pointer pada instruksi agen aplikasi dan sesuaikan jalurnya. Catat commit upstream dan lokasi hasil pemeriksaan di PROJECT_CONTEXT. Integrasi ini adalah aturan kerja agen; repository ini tidak memiliki mesin generate yang dapat menjamin kepatuhan secara otomatis.
