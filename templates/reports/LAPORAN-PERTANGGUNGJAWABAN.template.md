# Laporan Pertanggungjawaban Aplikasi — [nama aplikasi]

Sebelum mengisi, merevisi atau mengekspor laporan aplikasi, wajib lulus [prasyarat Anti-slop dan Ponytail](../../standards/generation-prerequisites.md). Jika salah satu plugin belum terpasang/aktif/terbaca/digunakan atau statusnya belum dapat diverifikasi, tolak generasi termasuk draf dan isi melalui chat. Salinan lokal bukan pengganti plugin. Status DRAFT berikut tidak membolehkan melewati prasyarat.

> TEMPLATE / DRAFT. Ganti petunjuk dengan uraian berdasarkan bukti. Belum merupakan hasil pemeriksaan aplikasi, pengesahan, atau bukti sertifikasi ISO.

Laporan ini membantu pembaca IT maupun non-IT memahami tujuan aplikasi, pekerjaan, cara penggunaan, hasil, dan risiko. Isi umum dijelaskan sebelum rincian teknis. Markdown ini merupakan sumber PDF; semua fakta, ID, versi, dan status harus konsisten dengan dokumen aplikasi. Ikuti [standar PDF](../../standards/accountability-report.md), [kebijakan dokumentasi](../../standards/documentation.md), [pemetaan ISO](../../standards/iso-mapping.md), dan [template alur per role](ALUR-PROGRAM-PER-ROLE.template.md).

Gunakan [anti-slop](../../standards/anti-slop.md) selama penyusunan, kemudian catat Delivery Gate dengan [template pemeriksaan](ANTI-SLOP-REVIEW.template.md). Penerapan anti-slop wajib menjaga struktur bab, penjelasan umum, rincian role/fitur/flowchart/output, dan bukti audit.

## Sampul

[Isi nama/judul laporan, aplikasi, organisasi/unit, periode, penyusun, tanggal terbit, versi dokumen, versi aplikasi, klasifikasi, dan status DRAFT atau status pengesahan nyata. Logo hanya jika diizinkan.]

## Identitas dan Kendali Dokumen

Jelaskan siapa bertanggung jawab atas ketepatan informasi, versi sumber yang diperiksa, penerima, serta aturan penggunaan/distribusi laporan. Status template berarti belum diisi; DRAFT berarti belum disahkan.

| Informasi | Isi |
| --- | --- |
| ID laporan | [isi] |
| Aplikasi dan versi | [isi] |
| Versi dokumen | [isi] |
| Branch, commit, tag | [isi berdasarkan Git; tidak membuktikan deployment] |
| Periode, tanggal, lingkungan | [isi] |
| Penyusun, pemilik, peninjau | [isi aktual atau Belum ditetapkan] |
| Status dan klasifikasi | DRAFT / [klasifikasi] |
| Distribusi dan lokasi arsip | [penerima/lokasi yang diizinkan] |

## Riwayat Revisi

Jelaskan perubahan yang memengaruhi pembaca. Catat revisi laporan ini, bukan menyalin riwayat template sebagai kejadian aplikasi.

| Tanggal | Versi | Penyusun | Perubahan dan alasan | Peninjauan/persetujuan aktual |
| --- | --- | --- | --- | --- |
| [isi] | [isi] | [isi] | [isi] | [atau Belum disahkan] |

## Lembar Pengesahan

Laporan tetap DRAFT sampai ada pengesahan nyata. Kolom pejabat, tanggal, dan tanda tangan dibiarkan kosong sampai diisi melalui proses resmi; jangan membuat tanda tangan atau menyatakan persetujuan berdasarkan dugaan.

| Tanggung jawab | Nama/jabatan | Tanggal | Tanda tangan/pengesahan aktual |
| --- | --- | --- | --- |
| Penyusun | | | |
| Peninjau | | | |
| Pengesah | | | |

## Daftar Isi, Gambar, dan Tabel

[Bangkitkan dari judul dan label setelah penataan PDF selesai. Periksa nomor halaman akhir dan tautan. Jangan menebak nomor halaman pada Markdown.]

## Bab 1. Ringkasan Eksekutif

Jelaskan kebutuhan organisasi, ruang lingkup pekerjaan, hasil terverifikasi, manfaat, keterbatasan, risiko utama, dan keputusan yang diperlukan. Bedakan manfaat yang diharapkan dari manfaat yang diukur. Ringkasan harus dapat dibaca mandiri oleh pimpinan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 2. Pendahuluan

Uraikan latar belakang, tujuan laporan, penerima, cakupan dan pengecualian, periode, versi/commit, lingkungan, sumber informasi, metode pemeriksaan, izin, dan keterbatasan. Bedakan pemeriksaan kode dari pengujian langsung.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 3. Profil Aplikasi

Jelaskan tujuan, pemilik, unit kerja/pengguna, layanan, modul, teknologi aktual, ketergantungan, lingkungan, dan batas sistem. Rujuk dokumen ISO 01/02 dan konteks proyek.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 4. Kebutuhan dan Proses Bisnis

Jelaskan kebutuhan KEB, sumber dan prioritas, aturan bisnis, kriteria penerimaan, urutan proses PRO, pihak yang terlibat, perubahan status, dan hasil. Hubungkan dokumen ISO 03/04/05 dengan bukti, tanpa menyamakan kebutuhan dengan implementasi.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 5. Role, Fitur, dan Batas Hak Akses

Gunakan inventaris serta tabel fitur dari template alur per role. Daftarkan hanya role aktual beserta sumber, seluruh FIT, tindakan, batas data, prasyarat, output, dan bukti kode/pengujian. Sertakan matriks ringkas role–fitur–tindakan–batas data. Jangan menambahkan role tamu berdasarkan asumsi. Akses publik, bila ditemukan, dijelaskan terpisah tanpa membuat role baru.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 6. Alur Program per Role

Ulangi pembahasan lengkap untuk setiap role aktual menggunakan template alur per role: narasi, flowchart wajib role, seluruh fitur/proses, validasi dan cabang aktual, output, penerima, serta hubungan antar-role. Hubungkan FIT ke node diagram utama/turunan. Jelaskan kasus kosong/gagal/ditolak yang ditemukan; tandai langkah yang belum diuji. Rincian output/email pada template tersebut wajib dipertahankan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 7. Rancangan Sistem, Data, Antarmuka, dan Integrasi

Terangkan komponen, hubungan, aliran dan arti data, tampilan, integrasi, serta alasan rancangan yang diketahui. Gunakan dokumen ISO 06–11; diagram dan contoh harus sesuai versi. Jika bagian tidak berlaku, jelaskan alasan dan dasar pemeriksaannya.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 8. Keamanan dan Perlindungan Informasi

Uraikan akses, perlindungan data, ancaman yang diperiksa, metode, bukti, temuan dan batasannya. Rujuk ISO 12 serta pemetaan klausul/kontrol yang telah diverifikasi. Pemeriksaan terbatas tidak menjadi klaim keamanan menyeluruh.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 9. Pekerjaan Pengembangan dan Riwayat Perubahan

Jelaskan kebutuhan pemicu, pekerjaan, kondisi sebelum/sesudah, dampak pada pengguna/data, dan dokumen yang berubah. Cantumkan branch/commit/tag, penulis sesuai metadata, serta bukti tes. Pisahkan pekerjaan direncanakan, selesai, diuji, dan diterapkan; commit tidak membuktikan deployment.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 10. Pengujian dan Hasil Verifikasi

Jelaskan cakupan, skenario, prasyarat, data sintetis, alat/versi, tanggal, lingkungan, pelaksana, hasil diharapkan dan aktual, lulus/gagal/belum dijalankan, dan BKT. Sertakan uji izin tindakan/data untuk role aktual, kasus gagal yang relevan, screenshot asli, keterbatasan dan hasil pemeriksaan ulang. Jangan menyamakan pemeriksaan kode dengan uji penggunaan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 11. Operasional, Pemeliharaan, Pencadangan, dan Pemulihan

Terangkan pelaksana, prosedur operasional, pemantauan, penanganan gangguan, perubahan, pemeliharaan, backup dan pemulihan sesuai bukti. Bedakan konfigurasi, pelaksanaan backup, dan uji restore. Catat target layanan/waktu pemulihan hanya jika disepakati dan dibuktikan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 12. Pemetaan ISO, Bukti, dan Kesenjangan

Jelaskan standar/edisi/amendemen yang dipilih, relevansi, klausul terverifikasi, penerapan, bagian dokumen, BKT, status penilaian, kesenjangan dan tindak lanjut. Gunakan format pedoman pemetaan ISO; rujuk ISO-ID pada dokumen sumber. Daftar katalog atau template terisi bukan bukti pemenuhan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 13. Risiko, Rekomendasi, dan Rencana Tindak Lanjut

Uraikan TEM, bukti, dampak bagi layanan/data/pekerjaan, prioritas beserta alasan, tindakan, pemilik, target yang disepakati atau Belum ditetapkan, ketergantungan, status, dan hasil pemeriksaan ulang. Jelaskan keputusan pimpinan yang dibutuhkan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 14. Penutup dan Keputusan yang Diperlukan

Simpulkan capaian, kesenjangan dan batas kesimpulan berdasarkan bukti. Sebut tindakan atau keputusan berikutnya beserta pihak yang berwenang jika diketahui. Jangan mengarang penerimaan pekerjaan atau persetujuan.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]

## Bab 15. Lampiran dan Glosarium

Sertakan daftar bukti ber-ID dengan lokasi, versi/tanggal, lingkungan, metode, pemeriksa, hasil aktual, dan batasnya; matriks keterlacakan KEB/ISO → ROL/FIT → PRO/diagram → OUT → UJI/BKT → TEM/tindakan; rincian teknis, gambar, dan arti istilah. Referensi kode/log panjang ditempatkan di sini, dengan informasi sensitif disamarkan.

Lampirkan atau rujuk catatan anti-slop berisi versi/commit aturan, mode dan cakupan, ringkasan empat blok, pemeriksaan per butir beserta bukti/N/A beralasan, temuan, serta hasil pemeriksaan ulang. Catatan yang belum diisi bukan PASS dan tidak menjadi bukti kesesuaian ISO.

[Isi narasi berdasarkan bukti. Informasi belum diketahui: Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Bagian tidak berlaku: N/A dengan alasan dan sumber pemeriksaan. Pertahankan bab dan urutannya.]
