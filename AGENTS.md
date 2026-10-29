# Instruksi AI I-Tech

Baca PROJECT_CONTEXT.md pada aplikasi, kemudian standar pusat. Periksa kode, route, migration, konfigurasi, status Git, dan pengujian sebelum membuat klaim. Jangan mengarang fitur, hasil audit, screenshot, versi, atau persetujuan.

## Alur kerja

Setiap dokumen Markdown dan laporan harus memiliki penjelasan umum dengan bahasa Indonesia yang mudah dipahami atasan/pimpinan tanpa latar belakang teknis. Uraikan tujuan, cara kerja, pihak yang terlibat, hasil, manfaat, serta dampak atau keterbatasannya dalam paragraf yang utuh. Jangan hanya mengisi poin singkat, tabel, istilah teknis, atau placeholder. Jelaskan istilah saat pertama digunakan; letakkan rincian kode, konfigurasi, dan bukti teknis setelah narasi umum atau dalam lampiran. Ikuti `standards/documentation.md` untuk kedalaman isi dan pemeriksaan keterbacaan. Pada template yang belum diisi, berikan petunjuk naratif yang spesifik tanpa mengarang fakta aplikasi.

1. Identifikasi aplikasi dan versi Laravel.
2. Periksa `git status`, branch, dan commit relevan tanpa menimpa pekerjaan pengguna.
3. Analisis kebutuhan dan dampak perubahan.
4. Implementasikan perubahan minimal dengan validasi dan otorisasi.
5. Jalankan pengujian yang tersedia; catat yang belum dijalankan.
6. Perbarui dokumen `docs/ISO/` terkait dan changelog.
7. Ambil screenshot asli dengan Playwright/Chromium hanya dari lingkungan yang diizinkan dan data sintetis.
8. Laporkan risiko dan bukti secara jujur.

Jangan mengakses produksi, menjalankan pemindaian aktif, mengubah database destruktif, atau melakukan deployment tanpa izin. Tidak boleh memasukkan rahasia ke repository. Dokumen ISO adalah adaptasi internal, bukan bukti sertifikasi.
