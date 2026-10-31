---
document_id: ITECH-ISO-05
title: "Skenario Penggunaan"
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

# 05 — Skenario Penggunaan

> Template internal; belum berisi hasil pemeriksaan aplikasi dan bukan bukti sertifikasi ISO.

## Penjelasan umum

Skenario penggunaan menjelaskan interaksi pengguna dengan aplikasi untuk menyelesaikan satu tujuan pekerjaan. Ceritakan langkah normal, kemungkinan kendala, serta hasil akhirnya agar pimpinan memahami apa yang dapat dilakukan setiap peran dan batas kewenangannya.

Ganti petunjuk dengan narasi khusus aplikasi. Jelaskan tujuan, pihak yang terlibat, proses, hasil, dan batasannya sebelum tabel atau rincian teknis. Gunakan bahasa yang dipahami pembaca IT maupun non-IT; jelaskan istilah pada penggunaan pertama.

## 1. Identitas, tujuan, dan ruang lingkup

Jelaskan versi aplikasi/commit, versi dokumen, pemilik, pemeriksa, tanggal, lingkungan, pembaca, serta status persetujuan aktual. Terangkan tujuan dokumen, cakupan dan batas pemeriksaan, sumber informasi, serta keputusan yang akan didukung. Nilai null pada metadata berarti belum tersedia, bukan persetujuan.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 2. Acuan dan pemetaan ISO

Calon acuan sesuai topik: **ISO/IEC/IEEE 29148:2018**. Jelaskan alasan relevansinya dan pilih yang benar-benar digunakan. Acuan ini belum membuktikan pemenuhan. Ikuti [pedoman pemetaan ISO](../../standards/iso-mapping.md) untuk memeriksa edisi/amendemen dan naskah klausul. Ulangi tabel untuk setiap persyaratan yang dinilai; jangan mengarang nomor klausul.

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

## 3. Daftar skenario dan role

Daftarkan skenario/PRO, KEB dan FIT terkait, role aktual yang dapat menjalankan, tujuan, pemicu, dan prasyarat. Jangan menambah aktor atau role tamu berdasarkan dugaan.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 4. Langkah dan respons sistem

Untuk setiap skenario, uraikan tindakan pengguna, input, validasi, respons, keputusan, kondisi alternatif, kegagalan, dan penolakan akses. Hubungkan dengan flowchart setiap role dan referensi kode.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

## 5. Hasil dan penerimaan skenario

Jelaskan kondisi akhir berhasil/gagal, perubahan data, OUT dan penerimanya, UJI beserta hasil aktual, serta bukti. Tulis langkah yang belum diuji sebagai Belum terverifikasi.

[Ganti petunjuk dengan uraian berdasarkan bukti aplikasi. Jika belum diketahui, tulis Belum terverifikasi beserta dampak dan pemeriksaan lanjutan. Jika tidak berlaku, tulis N/A dengan alasan.]

Untuk rincian wajib setiap role, fitur, flowchart, langkah, seluruh output (isi, sumber, filter/periode, penerima, akses, cara memperoleh, contoh, kondisi gagal), serta pengiriman email bila ada, gunakan [template alur per role](../../templates/reports/ALUR-PROGRAM-PER-ROLE.template.md). Bagian ini menjadi sumber Bab 5–6 laporan; pertahankan ID dan status bukti yang sama.

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
