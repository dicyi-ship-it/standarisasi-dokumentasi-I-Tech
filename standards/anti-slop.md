# Penggunaan Wajib Anti-slop

Anti-slop digunakan selama pembuatan atau perubahan aplikasi, antarmuka, teks, komentar kode, Markdown, flowchart, dan laporan PDF. Tujuannya agar hasil menjelaskan kebutuhan nyata, dapat digunakan, dan memiliki bukti. Agen wajib membaca [aturan resmi yang disimpan lokal](anti-slop/antislop.md), bukan hanya menyebut nama anti-slop dalam laporan. Sumber, versi, hash, dan lisensinya tercatat pada [identitas salinan](anti-slop/README.md).

## Aktivasi pada proyek

Untuk pekerjaan generasi, kebijakan I-Tech menetapkan mode **during**: aturan diterapkan saat merencanakan, menulis, dan memeriksa hasil. Nyatakan di awal bahwa anti-slop aktif dalam mode during berdasarkan kebijakan proyek. Ini penyesuaian lokal atas pemilihan mode upstream agar kewajiban saat generate tidak bergantung pada pertanyaan instalasi setiap sesi. Pilihan mode yang dinyatakan pengguna untuk suatu sesi tetap didahulukan. Mode after digunakan jika pengguna meminta audit terpisah atas hasil yang sudah ada; temuan tidak otomatis menjadi izin mengubah di luar lingkup permintaan.

Integrasi memakai single-file dengan pointer pada AGENTS.md dan instruksi Copilot. Tidak diperlukan wizard pemasangan tambahan, skill opsional, akun layanan, atau pengaturan global. Jangan menjalankan perintah instalasi/pembaruan dalam salinan upstream sebagai bagian generasi. Jika salinan tidak tersedia atau tidak dapat dibaca, laporkan kekurangan tersebut dan pertahankan hasil sebagai DRAFT; jangan mengklaim pemeriksaan telah dilakukan.

Saat membawa standar ini ke repository aplikasi, sertakan kebijakan ini dan direktori `anti-slop/` beserta lisensinya. Sesuaikan pointer pada instruksi agen aplikasi dan catat versi standar pusat serta commit upstream di PROJECT_CONTEXT. Tautan sumber saja tidak menggantikan pembacaan aturan.

## Penerapan sesuai hasil yang dibuat

Aturan diterapkan sesuai lingkup perubahan. Tabel berikut mengarahkan pemeriksaan; nomor aturan merujuk salinan upstream. Pemeriksaan anti-slop tidak menjadi bukti pemenuhan ISO.

| Hasil | Pemeriksaan yang diwajibkan |
| --- | --- |
| Aplikasi dan antarmuka | Fungsi sesuai kebutuhan, setiap kontrol bekerja, navigasi nyata, responsif, keadaan kosong/loading/gagal, semantik, keyboard/fokus, kontras, tema yang disediakan, dan verifikasi aktual (R-03, R-24 sampai R-27, R-32, R-34, R-35, R-39, R-40) |
| Arah tampilan | Baca DESIGN.md atau arahan pemilik yang tersedia, tulis alasan keputusan visual, dan lakukan Design Read serta ENERGY/RHYTHM/MOTION menurut upstream (R-31, R-37). Tanpa arah yang cukup, hasil UI diberi label draft without direction; jangan mengarang identitas organisasi |
| Teks dan dokumentasi | Bahasa umum, informasi spesifik, istilah dijelaskan, tanpa jargon promosi, pengulangan kosong, atau tanda pisah panjang pada teks baru yang ditulis agen (R-02, R-15, R-16, R-36) |
| Role, fitur, dan flowchart | Hanya yang ditemukan pada aplikasi; tidak menambah role tamu, fitur, jalur, atau hasil agar tampak lengkap. Hubungkan sumber kode, status verifikasi, dan bukti (R-36, R-38) |
| Klaim dan hasil pemeriksaan | Angka, keamanan, ISO, performa, pengujian, backup, persetujuan, dan manfaat harus memiliki dasar yang sesuai (R-17, R-18, R-35, R-36, R-38) |
| PDF | Struktur internal tetap, narasi, bukti, tabel dan diagram terbaca, tanpa dekorasi pengisi. Periksa hasil ekspor menurut standar PDF; jangan mengeklaim uji UI dari ekspor dokumen |
| Komentar kode | Jelaskan alasan atau batas yang diperlukan pemelihara; hindari komentar generik yang hanya mengulang kode. Pertahankan validasi, keamanan, dan penanganan kesalahan |

Kewajiban ISO, daftar fitur, flowchart per role, status ketidakpastian, dan struktur 15 bab PDF tetap berlaku. Aturan anti-slop tentang komposisi halaman UI tidak membatalkan struktur laporan audit. Mengurangi kalimat pengisi tidak boleh menghilangkan konteks, rincian output/email, bukti, atau informasi penting bagi pembaca non-IT.

Salinan sumber, judul resmi, kutipan bukti, dan data historis dipertahankan sesuai sumbernya; tandai sebagai materi sumber, bukan teks baru agen. Jangan mengubah fakta atau menghapus penanda Belum terverifikasi agar tulisan tampak lebih lancar. Contoh sintetis wajib tetap diberi label ilustrasi.

## Pemeriksaan sebelum penyerahan

Jalankan Delivery Gate upstream dalam empat blok: Hard Gate, Purpose-Gate, Liveliness, serta Craftsmanship & Quality Locks. Catat setiap butir yang berlaku beserta nomor aturan, lokasi hasil, metode, dan bukti konkret. Gunakan [template pemeriksaan](../templates/reports/ANTI-SLOP-REVIEW.template.md); simpan catatan aktual di `docs/reports/` aplikasi dan rujuk pada lampiran laporan. Tampilkan ringkasan empat blok saat penyerahan.

Dalam penerapan lintas aplikasi I-Tech, status per butir adalah PASS, FAIL, atau N/A. PASS hanya setelah diperiksa dengan bukti. N/A wajib menjelaskan mengapa suatu aturan tidak berlaku, misalnya tidak ada perubahan UI pada pekerjaan dokumentasi saja; N/A bukan PASS pengujian UI. Pemeriksaan yang diperlukan tetapi belum dijalankan dicatat sebagai FAIL dengan alasan Belum terverifikasi. Blok berstatus PASS hanya jika seluruh butir yang berlaku lulus; blok tanpa butir yang berlaku berstatus N/A beserta alasan. Ini penyesuaian pelaporan internal atas gate upstream agar ruang lingkup tidak disamarkan.

Jika ada FAIL, perbaiki sesuai ruang lingkup dan jalankan pemeriksaan ulang. Jika masih memerlukan bukti atau keputusan, laporkan hasil sebagai DRAFT dengan kekurangan dan tindak lanjut; jangan menyatakan siap diserahkan sebagai hasil final. Gate tidak dapat digantikan pernyataan umum seperti sudah memakai anti-slop. Pemeriksaan struktur otomatis hanya mendukung penilaian manusia, bukan pengganti pemeriksaan isi, penggunaan aktual, atau audit ISO.
