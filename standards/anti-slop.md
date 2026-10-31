# Penggunaan Wajib Anti-slop

Anti-slop digunakan selama pembuatan atau perubahan aplikasi, antarmuka, teks, komentar kode, Markdown, flowchart, dan laporan PDF. Tujuannya agar hasil menjelaskan kebutuhan nyata, dapat digunakan, dan memiliki bukti. Untuk generasi dokumen standar, wajib lulus [prasyarat plugin Anti-slop dan Ponytail](generation-prerequisites.md) sebelum merencanakan isi atau menulis. Baca core/skill dari plugin yang aktif. [Salinan aturan lokal](anti-slop/antislop.md) dengan [identitas sumber](anti-slop/README.md) adalah acuan audit, bukan pengganti plugin.

## Aktivasi pada proyek

Untuk generasi dokumen standar, kebijakan I-Tech menetapkan Anti-slop **during** dan Ponytail **full**. Aturan diterapkan saat merencanakan, menulis, dan memeriksa hasil. Nyatakan mode serta bukti plugin aktif di awal. Mode after boleh digunakan untuk audit terpisah atas hasil yang sudah ada, tetapi tidak meluluskan permohonan generate. Permintaan mematikan atau melewati salah satu plugin membuat generasi ditolak sesuai prasyarat.

AGENTS.md dan instruksi Copilot mewajibkan pemeriksaan instalasi/aktivasi melalui host, pembacaan core/skill terkait dan penggunaan kedua plugin pada sesi aktif. Jangan menjalankan instalasi/pembaruan diam-diam. Plugin belum terpasang, nonaktif, tidak terbaca, tidak digunakan, atau status yang belum pasti berarti TOLAK generasi, termasuk draf; jangan membuat hasil dahulu lalu hanya memberinya label DRAFT. Setelah aktivasi, periksa ulang pada sesi yang dapat memuat kedua plugin.

Saat membawa standar ini ke repository aplikasi, sertakan kebijakan prasyarat, kebijakan ini dan direktori `anti-slop/` beserta lisensinya. Sesuaikan pointer pada instruksi agen aplikasi. Catat versi standar pusat, versi/sumber kedua plugin, bukti host, mode dan waktu pemeriksaan di PROJECT_CONTEXT setelah prasyarat lulus. Tautan sumber maupun salinan berkas saja tidak meluluskan instalasi/aktivasi.

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
