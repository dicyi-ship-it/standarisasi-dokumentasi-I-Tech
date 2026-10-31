# Pemetaan Isi terhadap ISO

Pemetaan menjelaskan persyaratan ISO mana yang dibahas, bagaimana penerapannya, dan bukti yang mendukung hasil penilaian. Pembaca umum harus memahami makna persyaratan; auditor harus dapat menelusuri sumber, versi, dan dasar kesimpulan. Struktur laporan dalam repository ini adalah standar internal I-Tech, bukan susunan bab yang diwajibkan ISO atau bukti sertifikasi.

## Acuan dan edisi

Daftar berikut merupakan pilihan acuan menurut topik, bukan kewajiban menerapkan semuanya pada setiap aplikasi. Nama, edisi, dan lingkup umum diperiksa pada sumber penerbit resmi pada 31 Oktober 2026. Ringkasan katalog tidak membuktikan isi klausul maupun penerapan pada aplikasi. Pilih acuan bersama pemilik sistem dan catat alasannya di PROJECT_CONTEXT; verifikasi ulang status edisi dan amendemen ketika digunakan.

| Standar/edisi | Lingkup penggunaan internal | Sumber resmi |
| --- | --- | --- |
| ISO/IEC/IEEE 15289:2019 | Isi informasi dokumentasi sepanjang siklus hidup | [ISO](https://committee.iso.org/standard/74909.html) |
| ISO/IEC/IEEE 12207:2026 | Proses siklus hidup perangkat lunak | [IEEE](https://standards.ieee.org/ieee/12207/11416/) |
| ISO/IEC/IEEE 29148:2018 | Kebutuhan pengguna/sistem dan keterlacakannya | [ISO](https://www.iso.org/standard/72089.html) |
| ISO/IEC/IEEE 42010:2022 | Deskripsi arsitektur dan sudut pandang pihak terkait | [ISO](https://www.iso.org/standard/74393.html) |
| ISO/IEC 25010:2023 | Model kualitas produk untuk menentukan aspek yang dinilai | [ISO](https://www.iso.org/standard/78176.html) |
| ISO/IEC 27001:2022 | Persyaratan sistem manajemen keamanan informasi | [ISO](https://www.iso.org/standard/27001) |
| ISO/IEC 27002:2022 | Panduan pengendalian keamanan informasi | [ISO](https://www.iso.org/standard/75652.html) |
| ISO/IEC/IEEE 29119-3:2021 | Dokumentasi pengujian perangkat lunak | [ISO](https://www.iso.org/standard/79429.html) |
| ISO/IEC 20000-1:2018 | Sistem manajemen layanan | [ISO](https://www.iso.org/standard/70636.html) |
| ISO 22301:2019 | Sistem manajemen keberlangsungan kegiatan | [ISO](https://www.iso.org/standard/75106.html) |

ISO/IEC/IEEE 12207:2017 sudah digantikan edisi 2026 menurut penerbit. Jika organisasi masih menggunakan edisi lama, nyatakan edisi yang disepakati dan alasannya; jangan memindahkan nomor klausul antar-edisi. Untuk standar yang memiliki amendemen, catat nomor/tahun amendemen yang berlaku setelah diperiksa. Standar sistem manajemen memiliki cakupan organisasi; dokumentasi aplikasi hanya menjadi sebagian bukti pendukungnya.

## Verifikasi klausul sebelum menilai

Penulis memeriksa naskah standar yang sah atau pratinjau resmi yang benar-benar memuat klausul tersebut. Catat nomor, judul, edisi/amendemen, lokasi sumber, tanggal, dan pemeriksa. Ringkas makna dengan kata sendiri; jangan menyalin naskah berlisensi ke repository. Jika sumber dibatasi, gunakan identitas dokumen dan lokasi terkendali yang dapat diminta auditor tanpa membocorkan berkas.

Template ISO menyebut calon acuan sesuai topik, tetapi belum mengklaim nomor klausul atau pemenuhan. Kolom klausul wajib diganti dengan nomor/judul yang telah diperiksa sebelum menyimpulkan kesesuaian. Jika belum tersedia, tulis **Belum terverifikasi — naskah klausul belum diperiksa**, jelaskan dampak serta tindak lanjut, dan jangan menyatakan persyaratan terpenuhi. Ini adalah kesenjangan verifikasi yang terlihat, bukan izin menghapus pemetaan.

## Format pemetaan per dokumen

Awali bagian ini dengan narasi tentang alasan pemilihan standar dan batas penilaiannya. Ulangi tabel berbentuk pasangan informasi berikut untuk setiap persyaratan agar tetap terbaca di Markdown maupun PDF. Cantumkan acuan yang relevan saja; jangan menempel seluruh daftar ISO sebagai label.

| Informasi | Isi berdasarkan pemeriksaan |
| --- | --- |
| ID pemetaan | ISO-001; unik dalam aplikasi |
| Standar, edisi, amendemen | [nama lengkap, tahun, amendemen yang berlaku] |
| Klausul/kontrol dan judul | [nomor/judul terverifikasi; jika belum, tulis Belum terverifikasi] |
| Makna dan relevansi | [ringkasan bahasa umum dan alasan berlaku] |
| Sumber persyaratan | [identitas/lokasi naskah, bagian, tanggal, pemeriksa; status verifikasi sumber] |
| Penerapan pada aplikasi | [mekanisme aktual dan batas pemeriksaan] |
| Bagian dokumen | [tautan bagian yang menerangkan penerapan] |
| Bukti | [ID bukti, lokasi, versi, metode pemeriksaan] |
| Hasil penilaian | [pilih status di bawah beserta dasar kesimpulan] |
| Kesenjangan dan dampak | [apa yang kurang dan akibatnya] |
| Tindak lanjut | [tindakan, pemilik, target yang disepakati atau Belum ditetapkan] |

## Status dan batas kesimpulan

Status menggambarkan hasil penilaian atas persyaratan tertentu dalam ruang lingkup tertentu. Status ini berbeda dari status penerbitan dokumen (template, DRAFT, atau Disahkan), status temuan keamanan, maupun hasil pengujian (lulus/gagal/belum dijalankan).

| Status penilaian | Kapan digunakan |
| --- | --- |
| Terpenuhi dalam ruang lingkup yang diperiksa | Klausul sudah diverifikasi dan bukti mencukupi seluruh kriteria yang dinilai; sebut batasnya |
| Sebagian terpenuhi | Klausul sudah diverifikasi, sebagian kriteria terbukti dan sisanya belum dipenuhi |
| Belum terpenuhi | Ada bukti bahwa kriteria yang berlaku tidak dipenuhi |
| Belum terverifikasi | Sumber klausul atau bukti penerapan belum cukup untuk menyimpulkan |
| Tidak berlaku (N/A) | Ada alasan ruang lingkup yang dapat diperiksa, pencatat, dan peninjau yang nyata |

Pernyataan akhir harus berbentuk kesimpulan terbatas: sebut standar/edisi, klausul, aspek yang diperiksa, versi aplikasi, bukti, kesenjangan, dan batasnya. Jangan menyimpulkan sertifikasi, kesesuaian seluruh organisasi, atau keamanan menyeluruh dari satu dokumen, diagram, atau hasil tes. Peninjauan manusia tetap diperlukan untuk menilai kecukupan bukti.
