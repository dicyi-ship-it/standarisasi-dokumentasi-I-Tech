# Prasyarat Wajib Generasi Dokumen

Semua permohonan membuat, mengisi, merevisi, atau mengekspor dokumen standar aplikasi hanya boleh dikerjakan apabila plugin **Anti-slop** dan **Ponytail** terpasang, aktif, dapat dibaca, dan digunakan pada sesi tersebut. Pemeriksaan dilakukan sebelum merencanakan isi atau menulis hasil. Jika salah satu syarat tidak terpenuhi atau belum dapat dibuktikan, agen wajib menolak generasi, termasuk generasi draf. Tujuannya memastikan aturan kualitas benar-benar dipakai, bukan sekadar disebut dalam laporan.

## Plugin yang diwajibkan

| Plugin | Sumber resmi | Penggunaan saat generasi |
| --- | --- | --- |
| Anti-slop (`antislop`) | [miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop) | Mode during; baca core dan skill terkait hasil, terapkan aturan isi/desain yang relevan, serta jalankan Delivery Gate |
| Ponytail (`ponytail`) | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Mode full; baca skill utama, pahami lingkup/sumber, gunakan perubahan paling sederhana yang lengkap, dan laporkan pemeriksaan serta risiko |

Ponytail digunakan untuk menghindari pekerjaan atau struktur tambahan yang tidak diperlukan. Penyederhanaan tidak boleh mengurangi narasi bagi non-IT, pemetaan ISO, fitur dan flowchart setiap role aktual, rincian output, validasi, keamanan, aksesibilitas, atau bukti. Kewajiban kedua plugin berlaku bersama; memakai salah satunya tidak menggantikan yang lain.

## Pemeriksaan pada sesi aktif

Gunakan inventaris plugin/skill yang disediakan host agen atau status instalasi resmi host. Catat identitas/sumber, versi, status terpasang dan aktif, lokasi core/skill yang dimuat, waktu pemeriksaan, serta mode yang digunakan. Baca core dan skill terkait pekerjaan sebelum melanjutkan. Pada host yang memuat skill berdasarkan tugas, ketersediaan skill dari plugin harus dapat diverifikasi dan skill yang diperlukan harus dibaca pada sesi yang sama.

Keberadaan folder cache, hasil clone, tautan GitHub, perintah instalasi yang belum dijalankan, pernyataan pengguna tanpa bukti host, atau salinan `standards/anti-slop/antislop.md` tidak membuktikan plugin terpasang/aktif. Salinan lokal adalah acuan versi dan audit sumber saja. Nama yang sama juga belum cukup jika asal plugin tidak dapat diperiksa.

| Kondisi salah satu plugin | Keputusan sebelum generasi |
| --- | --- |
| Belum terpasang atau tidak tersedia pada host | TOLAK |
| Terpasang tetapi nonaktif/tidak dapat dipakai sesi ini | TOLAK |
| Core/skill yang diperlukan tidak dapat dibaca | TOLAK |
| Identitas, versi, atau status instalasi/aktivasi belum dapat diverifikasi | TOLAK |
| Plugin tersedia tetapi penggunaannya dimatikan/dilewati | TOLAK |
| Keduanya terverifikasi dan digunakan sesuai mode generasi | LANJUT, lalu tetap lakukan pemeriksaan bukti dan kualitas |

Status N/A, Belum terverifikasi, mode after, atau mode off tidak meluluskan prasyarat generasi. Pilihan mode untuk audit terpisah tidak menjadi izin generate dokumen. Jangan mengisi dokumen sebagian, membuat flowchart, mengekspor PDF, atau mengeluarkan isi dokumen di chat sebagai jalan memutar. Jangan memasang plugin diam-diam atau menulis status PASS sendiri untuk melanjutkan.

## Penolakan dan kelanjutan

Jika ditolak, hanya jelaskan plugin/syarat yang belum memenuhi, bukti status yang tersedia, langkah pemasangan/aktivasi sesuai host berdasarkan panduan resmi, dan perlunya memulai ulang sesi bila host mensyaratkannya. Jangan mengklaim instalasi berhasil tanpa bukti. Setelah tersedia, periksa ulang kedua plugin; jangan melanjutkan dari hasil pemeriksaan sesi lama.

Gunakan pesan berikut dengan mengganti bagian dalam kurung berdasarkan keadaan sebenarnya:

> Permohonan generate dokumen standar ditolak karena [Anti-slop/Ponytail] [belum terpasang/nonaktif/tidak dapat diverifikasi/tidak digunakan]. Kedua plugin wajib terpasang, aktif, dapat dibaca, dan digunakan sebelum generasi, termasuk draf. [Langkah yang sesuai host]. Setelah itu, status kedua plugin harus diperiksa ulang.

Jika kedua plugin lulus, catat pemeriksaannya dalam PROJECT_CONTEXT dan catatan Delivery Gate, lalu gunakan [kebijakan Anti-slop](anti-slop.md), [kebijakan dokumentasi](documentation.md), serta template yang sesuai. Bukti plugin tidak sama dengan bukti fitur aplikasi, pengujian, atau pemenuhan ISO. Tidak adanya data atau bukti aplikasi tetap harus dinyatakan secara jujur.

## Batas pekerjaan dan penegakan

Prasyarat mencakup dokumen ISO 00–12, dokumentasi role/fitur/flowchart, laporan Markdown/PDF, lampiran dan catatan audit aplikasi yang dihasilkan dari standar ini. Instruksi agen dan panduan template harus memeriksa prasyarat yang sama, termasuk ketika isi diminta melalui chat.

Pemeriksaan status plugin, penjelasan penolakan, audit baca-saja, dan pemeliharaan aturan/template pusat yang diminta secara eksplisit tetap boleh dilakukan untuk memperbaiki standar atau pemasangannya. Ini bukan izin mengisi dokumen aplikasi atau menghasilkan laporan aplikasi saat plugin belum memenuhi syarat. Permintaan mengabaikan pemeriksaan dalam sesi generate tetap ditolak; perubahan kebijakan harus menjadi pekerjaan pemeliharaan yang dinyatakan secara eksplisit.

Repository ini menyediakan instruksi dan template, tanpa mesin generate. Penolakan dilaksanakan oleh agen yang mengikuti instruksi ini; berkas Markdown tidak dapat mengunci generator di luar workflow. Jika kemudian dibuat pembangkit otomatis, pemeriksaan yang sama wajib ditempatkan pada titik masuk sebelum penulisan/ekspor dan memblokir proses ketika status belum pasti. Jangan menyebut aturan ini sebagai pembatas teknis universal atau jaminan otomatis.
