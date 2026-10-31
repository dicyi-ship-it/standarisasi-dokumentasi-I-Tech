---
document_id: ITECH-ISO-12
title: "Dokumentasi Keamanan"
application: "[nama aplikasi]"
application_version: "[versi aplikasi]"
source_commit: null
document_version: 0.2.0
status: template
classification: internal
owner: "[penanggung jawab]"
reviewer: null
approved_by: null
last_updated: null
---

# 12 — Dokumentasi Keamanan

> Template internal; belum berisi hasil pemeriksaan aplikasi dan bukan bukti sertifikasi ISO.

Sebelum mengisi atau merevisi dokumen aplikasi ini, wajib lulus [prasyarat Anti-slop dan Ponytail](../../standards/generation-prerequisites.md). Jika salah satu plugin belum terpasang/aktif/terbaca/digunakan atau statusnya belum dapat diverifikasi, tolak generasi termasuk draf dan isi melalui chat. Salinan aturan lokal bukan pengganti plugin.

## Penjelasan umum

Dokumentasi keamanan menjelaskan bagaimana akses dan informasi dilindungi, ancaman yang diperiksa, serta keterbatasan pemeriksaan. Terjemahkan temuan menjadi dampak pada kerahasiaan dan ketepatan data atau ketersediaan layanan, tanpa menyimpulkan sistem aman dari pemeriksaan yang terbatas.

Ganti petunjuk dengan narasi khusus aplikasi. Jelaskan tujuan, pihak yang terlibat, proses, hasil, dan batasannya sebelum tabel atau rincian teknis. Gunakan bahasa yang dipahami pembaca IT maupun non-IT; jelaskan istilah pada penggunaan pertama.

## 1. Identitas, tujuan, dan ruang lingkup

Jelaskan versi aplikasi/commit, versi dokumen, pemilik, pemeriksa, tanggal, lingkungan, pembaca, serta status persetujuan aktual. Terangkan tujuan dokumen, cakupan dan batas pemeriksaan, sumber informasi, serta keputusan yang akan didukung. Nilai null pada metadata berarti belum tersedia, bukan persetujuan.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 2. Acuan dan pemetaan ISO

Calon acuan sesuai topik: **ISO/IEC 27001:2022; ISO/IEC 27002:2022**. Jelaskan alasan relevansinya dan pilih yang benar-benar digunakan. Acuan ini belum membuktikan pemenuhan. Ikuti [pedoman pemetaan ISO](../../standards/iso-mapping.md) untuk memeriksa edisi/amendemen dan naskah klausul. Ulangi tabel untuk setiap persyaratan yang dinilai; jangan mengarang nomor klausul.

| Informasi | Isi |
| --- | --- |
| ID pemetaan | [ISO-ID unik] |
| Standar, edisi, amendemen | [pilihan acuan terverifikasi] |
| Klausul/kontrol dan judul | Belum terverifikasi — isi setelah naskah klausul diperiksa |
| Makna dan relevansi | [ringkasan bahasa umum dan alasan berlaku] |
| Sumber persyaratan | [lokasi/identitas, bagian, tanggal, pemeriksa, status verifikasi] |
| Penerapan dan bagian dokumen | [mekanisme aktual, tautan bagian] |
| Bukti dan batas penilaian | [BKT-ID, lokasi, versi, metode, ruang lingkup] |
| Hasil penilaian | Belum terverifikasi — template belum menilai aplikasi |
| Kesenjangan, dampak, tindak lanjut | [kekurangan, tindakan, pemilik, target yang disepakati atau Belum ditetapkan] |

## 3. Ruang lingkup, aset, dan risiko

Jelaskan informasi/layanan yang dilindungi, pihak terkait, ancaman yang diperiksa, izin pemeriksaan, versi, lingkungan, metode, dan batasannya.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 4. Akses dan perlindungan informasi

Uraikan autentikasi, role/permission aktual, pembatasan data/tindakan, perlindungan rahasia, pencatatan, serta pengendalian lain yang ditemukan. Rujuk matriks fitur setiap role dan uji akses yang diizinkan/ditolak.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 5. Temuan dan verifikasi perbaikan

Catat temuan confirmed/needs_validation/rejected dengan bukti dan alasan, dampak bagi organisasi, prioritas, tindakan, pemilik, target yang disepakati, dan hasil retest. Pemeriksaan terbatas tidak membuktikan sistem aman seluruhnya.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 6. Bukti dan hasil verifikasi

Jelaskan keadaan yang benar-benar ditemukan, cara pemeriksaan, dan batas kesimpulannya. Bedakan pemeriksaan kode, pengujian langsung, bukti visual, operasional, serta keterangan pihak terkait. Hubungkan ID kebutuhan/fitur/proses/output yang relevan dengan UJI/BKT dan pemetaan ISO; gunakan [aturan keterlacakan](../../standards/documentation.md). Jangan menyebut pengujian lulus hanya karena kode tersedia.

| ID bukti | Lokasi dan jenis | Versi/commit, tanggal, lingkungan | Metode, pemeriksa, hasil aktual | Yang dibuktikan dan batasnya |
| --- | --- | --- | --- | --- |
| [BKT-ID] | [isi] | [isi] | [isi] | [isi] |

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 7. Temuan, risiko, dan tindak lanjut

Jelaskan kekurangan atau ketidakpastian, pihak terdampak, akibat bagi pekerjaan/data/layanan, dan keputusan yang dibutuhkan. Status pemenuhan ISO berbeda dari hasil tes atau status penerbitan dokumen.

| ID temuan | Masalah dan bukti | Dampak dan prioritas beserta alasan | Tindakan dan penanggung jawab | Target yang disepakati | Status dan hasil pemeriksaan ulang |
| --- | --- | --- | --- | --- | --- |
| [TEM-ID] | [isi] | [isi] | [isi] | [atau Belum ditetapkan] | [isi] |

## 8. Riwayat revisi

Catat tanggal, versi dokumen, penyusun, ringkasan perubahan, serta peninjau/persetujuan nyata. Baris di bawah mencatat revisi template pusat, bukan revisi atau pengesahan dokumen aplikasi; ganti ketika digunakan.

| Tanggal | Versi | Perubahan template |
| --- | --- | --- |
| 2026-10-29 | 0.1.0 | Panduan narasi untuk pembaca pimpinan |
| 2026-10-31 | 0.2.0 | Isi khusus topik, acuan ISO eksplisit, keterlacakan bukti, dan kendali yang seragam |
