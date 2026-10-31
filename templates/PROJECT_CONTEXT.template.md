# Konteks Proyek — [nama aplikasi]

Status: TEMPLATE. Jelaskan aplikasi, kebutuhan organisasi, pengguna, manfaat yang diharapkan, serta batas pemeriksaan dengan bahasa yang dipahami pembaca IT dan non-IT. Ganti petunjuk dengan fakta; jangan mengisi versi, role, fitur, atau persetujuan berdasarkan dugaan.

## Identitas dan tanggung jawab

- ID/nama aplikasi dan tujuan: [isi]
- Unit kerja, pengguna dan pemilik sistem: [isi aktual]
- Penyusun/peninjau konteks, tanggal, versi dokumen, status persetujuan: [isi; belum ada ditandai belum tersedia]
- Repository, versi aplikasi, branch, commit, tag: [periksa Git]
- Teknologi/framework dan versi: [periksa; Laravel hanya jika digunakan]
- Lingkungan dan periode pemeriksaan: [lokal/staging/lingkungan lain yang diizinkan]
- Klasifikasi, pembaca, distribusi, lokasi arsip: [isi]

## Ruang lingkup dan kondisi aplikasi

Jelaskan modul, data, integrasi, ketergantungan, dan layanan yang ditemukan. Bedakan kondisi aktual, rencana, dan informasi yang belum diketahui. Catat pengecualian ruang lingkup serta akibatnya bagi kesimpulan.

- Modul/FIT dan sumber bukti: [isi]
- Role/permission aktual dan sumbernya: [definisi akses, kode, data yang diizinkan; bedakan data awal dari kondisi aktual]
- Akses publik bila ditemukan: [terpisah dari role; jangan membuat role tamu]
- Basis data/penyimpanan dan klasifikasi data: [isi]
- Integrasi dan pemilik layanan terkait: [isi]
- Izin lingkungan, alat, dan batas aktivitas: [isi; jangan mengakses produksi tanpa izin]

## Acuan dan metode verifikasi

Pilih acuan ISO menurut kebutuhan organisasi dan relevansi, menggunakan [pedoman pusat](../standards/iso-mapping.md). Saat template disalin ke aplikasi, sesuaikan tautan ini dengan lokasi standar pusat yang digunakan. Sebut versi/tag/commit standar pusat agar pedoman yang berlaku dapat ditelusuri.

| Acuan/edisi/amendemen | Alasan relevansi | Sumber naskah dan status verifikasi klausul | Pemilik penilaian |
| --- | --- | --- | --- |
| [isi] | [isi] | [Belum terverifikasi jika belum diperiksa] | [atau Belum ditetapkan] |

Jelaskan metode pemeriksaan kode, pengujian, visual, operasional, dan keterangan pihak terkait yang tersedia. Catat lokasi bukti, penanggung jawab, pemeriksaan belum dilakukan, dampak ketidakpastian, dan tindak lanjut. Jangan menaruh rahasia pada konteks proyek.

## Penggunaan anti-slop

Anti-slop wajib selama generasi aplikasi dan dokumen menurut [kebijakan integrasi](../standards/anti-slop.md). Catat versi/commit upstream dari [identitas salinan](../standards/anti-slop/README.md), lokasi kebijakan dan berkas aturan lokal, serta pointer pada instruksi agen aplikasi. Sesuaikan tautan ketika template disalin. Mode generasi adalah during kecuali pengguna memilih mode sesi lain secara eksplisit; perubahan ini tidak mengubah pengaturan global.

- Versi/commit aturan anti-slop dan standar pusat: [isi]
- Lokasi aturan, lisensi, dan pointer instruksi agen: [isi; verifikasi tersedia dan sudah dibaca]
- Mode sesi dan dasar pemilihannya: [during berdasarkan kebijakan proyek atau pilihan eksplisit pengguna]
- Arah pemilik/DESIGN.md untuk pekerjaan UI: [lokasi arahan aktual; jika belum ada, nyatakan draft without direction]
- Lokasi catatan Delivery Gate, versi hasil, tanggal/pemeriksa: [isi berdasarkan pemeriksaan; belum dilakukan bukan PASS]

## Riwayat revisi

Catat perubahan konteks dan sumbernya; jangan menganggap riwayat template sebagai kejadian aplikasi.

| Tanggal/versi | Perubahan dan alasan | Penyusun/peninjau aktual |
| --- | --- | --- |
| [isi] | [isi] | [isi] |
