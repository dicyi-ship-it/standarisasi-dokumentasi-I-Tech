# Template Laporan PDF

Template ini digunakan untuk menyusun laporan yang dipahami pimpinan dan tetap dapat diperiksa tim IT serta auditor. Markdown menjadi sumber isi; PDF merupakan bentuk penyajiannya. Isi harus berasal dari aplikasi yang diperiksa dan menjelaskan tujuan, proses, hasil, serta batas kesimpulan dalam bahasa umum.

## Cara menggunakan

1. Isi [konteks proyek](../PROJECT_CONTEXT.template.md) pada aplikasi dan periksa role, fitur, versi, serta batas lingkungannya.
2. Isi dokumen [ISO](../../docs/ISO/00-DOCUMENT-CONTROL.md) yang relevan dengan petunjuk khusus tiap topik; verifikasi acuan melalui [pedoman ISO](../../standards/iso-mapping.md).
3. Salin [laporan induk](LAPORAN-PERTANGGUNGJAWABAN.template.md) ke `docs/reports/` aplikasi. Pertahankan urutan bagian dan bab. Ganti petunjuk dengan narasi dan bukti; bagian tidak berlaku diberi alasan.
4. Isi [alur per role](ALUR-PROGRAM-PER-ROLE.template.md) untuk Bab 5–6: role aktual, seluruh fitur dan batas akses, flowchart wajib setiap role, proses, output, email bila ada, serta bukti. Jangan menambah role tamu berdasarkan asumsi; akses publik dicatat terpisah hanya jika ditemukan.
5. Hubungkan ID kebutuhan/pemetaan, role/fitur, proses/diagram, output, pengujian, bukti dan temuan. Bedakan pemeriksaan kode, pengujian, serta ketidakpastian.
6. Render diagram dan ekspor PDF sesuai [standar laporan](../../standards/accountability-report.md). Periksa isi dan seluruh halaman cetak sebelum penyerahan; status tetap DRAFT sampai pengesahan nyata.

Selama seluruh langkah tersebut, baca dan gunakan [anti-slop](../../standards/anti-slop.md) serta [aturan lokal upstream](../../standards/anti-slop/antislop.md) dalam mode during. Sebelum penyerahan, isi [catatan Delivery Gate](ANTI-SLOP-REVIEW.template.md) dengan bukti setiap butir yang berlaku dan sertakan pada lampiran/rujukan laporan. Aturan UI yang tidak berlaku diberi N/A beralasan; pemeriksaan wajib yang belum dilakukan bukan PASS. Jangan menghapus struktur laporan, fitur, flowchart, atau bukti atas nama anti-slop.

Untuk melihat pola narasi, fitur, diagram, output dan keterbatasan pemetaan, baca [contoh sintetis](CONTOH-SINTETIS.md). Contoh tersebut bukan hasil audit dan tidak menetapkan role atau fitur yang harus ada pada aplikasi.
