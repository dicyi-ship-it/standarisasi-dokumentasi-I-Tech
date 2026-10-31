# Instruksi AI I-Tech

Baca PROJECT_CONTEXT.md pada aplikasi, kemudian standar pusat. Periksa kode, route, migration, konfigurasi, status Git, dan pengujian sebelum membuat klaim. Jangan mengarang fitur, hasil audit, screenshot, versi, atau persetujuan.

## Alur kerja

Setiap dokumen Markdown dan laporan harus memiliki penjelasan umum dengan bahasa Indonesia yang mudah dipahami atasan/pimpinan tanpa latar belakang teknis. Uraikan tujuan, cara kerja, pihak yang terlibat, hasil, manfaat, serta dampak atau keterbatasannya dalam paragraf yang utuh. Jangan hanya mengisi poin singkat, tabel, istilah teknis, atau placeholder. Jelaskan istilah saat pertama digunakan; letakkan rincian kode, konfigurasi, dan bukti teknis setelah narasi umum atau dalam lampiran. Ikuti `standards/documentation.md` untuk kedalaman isi dan pemeriksaan keterbacaan. Pada template yang belum diisi, berikan petunjuk naratif yang spesifik tanpa mengarang fakta aplikasi.

1. Identifikasi aplikasi, teknologi dan versinya berdasarkan kode/config. Pemeriksaan khusus Laravel berlaku hanya jika Laravel digunakan.
2. Periksa `git status`, branch, dan commit relevan tanpa menimpa pekerjaan pengguna.
3. Analisis kebutuhan dan dampak perubahan.
4. Implementasikan perubahan minimal dengan validasi dan otorisasi.
5. Jalankan pengujian yang tersedia; catat yang belum dijalankan.
6. Perbarui dokumen `docs/ISO/` terkait dan changelog.
7. Ambil screenshot asli dengan Playwright/Chromium hanya dari lingkungan yang diizinkan dan data sintetis.
8. Inventaris hanya role aktual beserta seluruh fitur, tindakan dan batas data; setiap role wajib punya flowchart sendiri. Jangan menambahkan role tamu berdasarkan asumsi. Akses publik, jika ditemukan, dicatat terpisah dan tidak otomatis menjadi role.
9. Hubungkan kebutuhan, role/fitur, proses/diagram, output, tes/bukti dan temuan dengan ID konsisten. Menu terlihat bukan bukti izin; pemeriksaan kode bukan tes penggunaan.
10. Cantumkan standar ISO/edisi/amendemen, klausul atau kontrol terverifikasi, makna, penerapan, bukti, status dan kesenjangan sesuai `standards/iso-mapping.md`. Klausul yang belum diperiksa ditandai Belum terverifikasi; jangan mengklaim kesesuaian.
11. Gunakan struktur tetap `templates/reports/LAPORAN-PERTANGGUNGJAWABAN.template.md` untuk PDF lintas aplikasi. Render Mermaid; periksa keterbacaan, tabel, halaman, dan kesamaan versi dengan Markdown. PDF tetap DRAFT sampai pengesahan nyata.
12. Laporkan risiko dan bukti secara jujur, termasuk pemeriksaan yang belum dijalankan.

Jangan mengakses produksi, menjalankan pemindaian aktif, mengubah database destruktif, atau melakukan deployment tanpa izin. Tidak boleh memasukkan rahasia ke repository. Dokumen ISO adalah adaptasi internal, bukan bukti sertifikasi.
