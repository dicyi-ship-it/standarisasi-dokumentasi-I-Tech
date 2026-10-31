# Pemeriksaan Anti-slop

Pengisian catatan aplikasi ini hanya boleh dimulai setelah [prasyarat Anti-slop dan Ponytail](../../standards/generation-prerequisites.md) lulus. Jika salah satu plugin belum memenuhi atau belum dapat diverifikasi, tolak generasi termasuk draf. N/A pada aturan UI di bawah tidak meluluskan plugin yang hilang.

Status: TEMPLATE / DRAFT. Catatan ini menjelaskan bagian hasil yang diperiksa, aturan yang digunakan, bukti, dan batas kesimpulannya. Ganti petunjuk berdasarkan pemeriksaan nyata; template kosong tidak berarti PASS. Ikuti [kebijakan integrasi](../../standards/anti-slop.md) dan [Delivery Gate upstream](../../standards/anti-slop/antislop.md).

## Identitas dan cakupan

Jelaskan aplikasi/dokumen yang berubah, tujuan perubahan, bagian yang diperiksa, dan bagian di luar lingkup. Cantumkan versi dokumen/aplikasi, commit sumber, lingkungan, tanggal, pemeriksa, bukti host bahwa kedua plugin terpasang/aktif, versi/sumber, core/skill yang dibaca dan penggunaannya. Catat Anti-slop during serta Ponytail full untuk generasi; audit terpisah boleh menyebut mode auditnya tanpa menjadi izin generate. Catat commit/hash salinan acuan terpisah dari versi plugin aktif.

[Isi identitas, cakupan, versi sumber, lokasi hasil, dan batas pemeriksaan.]

## Ringkasan empat blok

Simpulkan setelah mengisi pemeriksaan per butir di bawah. PASS membutuhkan bukti untuk seluruh butir yang berlaku. N/A menyebut alasan ketidakberlakuan; pemeriksaan wajib yang belum dijalankan adalah FAIL (Belum terverifikasi). Jangan menyalin status dari pekerjaan lain.

| Blok | Status PASS/FAIL/N/A | Dasar, bukti, dan batas kesimpulan |
| --- | --- | --- |
| Hard Gate | [isi] | [kejujuran isi, fungsi/aksesibilitas/verifikasi jika relevan] |
| Purpose-Gate | [isi] | [teknik yang digunakan dan alasan; N/A jika tidak mengubah visual] |
| Liveliness | [isi] | [arah desain, Design Read, dials dan bukti hasil; N/A untuk pekerjaan tanpa UI] |
| Craftsmanship & Quality Locks | [isi] | [tujuan isi, ketepatan teks, konsistensi, ketahanan/fungsi sesuai lingkup] |

## Hasil per butir

Baca seluruh pertanyaan gate pada aturan upstream dan catat satu baris untuk setiap butir dalam empat blok. Untuk butir yang berbagi nomor aturan, bedakan juga pertanyaannya; jangan menganggap satu PASS mewakili semua pertanyaan. Hubungkan bukti dengan BKT-ID jika sudah tersedia. Penjelasan N/A harus berdasarkan cakupan aktual, bukan karena pemeriksaannya sulit.

| Blok dan aturan/pertanyaan | Lokasi hasil | Berlaku dan alasan | Metode dan hasil aktual | Bukti | Status |
| --- | --- | --- | --- | --- | --- |
| [blok, R-ID/C-ID atau pertanyaan] | [berkas/bagian/kontrol] | [ya/tidak, alasan] | [pemeriksaan kode/isi/uji langsung/ekspor] | [BKT-ID/lokasi, versi/tanggal] | [PASS/FAIL/N/A] |

Jika UI dibuat atau diubah, sertakan arah desain yang digunakan, alasan keputusan visual, Design Read, ENERGY/RHYTHM/MOTION, serta daftar setiap kontrol dan hasil uji aktualnya. Catat keadaan kosong/loading/gagal, ukuran layar, tema, keyboard/fokus, kontras, semantik, dan mekanisme performa yang diperiksa. Jangan menyatakan angka performa yang tidak diukur.

Untuk Markdown/PDF, jelaskan hasil pemeriksaan bahasa, sumber klaim, inventaris role/fitur, flowchart, tautan, konsistensi pemetaan ISO dan bukti, serta hasil ekspor jika PDF berubah. Salinan upstream dan materi sumber diberi identitas; jangan mengubahnya untuk mengejar hasil pemeriksaan gaya.

## Temuan dan pemeriksaan ulang

Terangkan masalah, dampak, perbaikan, dan hasil pemeriksaan ulang. Jika belum dapat diselesaikan, catat pemilik/target yang benar-benar disepakati atau Belum ditetapkan. Hasil tetap DRAFT selama ada FAIL; catatan ini tidak menjadi pengesahan aplikasi atau kesesuaian ISO.

| Temuan/aturan | Dampak dan bukti | Perbaikan/tindak lanjut | Pemilik/target | Hasil pemeriksaan ulang |
| --- | --- | --- | --- | --- |
| [isi atau tidak ada temuan setelah pemeriksaan] | [isi] | [isi] | [isi] | [isi] |
