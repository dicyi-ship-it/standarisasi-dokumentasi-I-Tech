# Laporan Pertanggungjawaban PDF

Sebelum merencanakan isi, membuat sumber, merevisi atau mengekspor laporan, periksa [prasyarat plugin](generation-prerequisites.md). Jika Anti-slop atau Ponytail belum terpasang, nonaktif, tidak terbaca, tidak digunakan, atau statusnya belum dapat dibuktikan, tolak generasi termasuk draf. Salinan aturan bukan pengganti plugin. Status DRAFT pada laporan di bawah hanya berlaku setelah prasyarat lulus.

Laporan memberi pembaca IT maupun non-IT penjelasan tentang kebutuhan organisasi, aplikasi, pekerjaan, hasil, dan risiko yang memerlukan keputusan. Setiap bab mengawali rincian dengan narasi umum; tabel, diagram dan bukti teknis melengkapi penjelasan. Sumber isi adalah Markdown aplikasi yang telah diperiksa, dengan versi dan ID bukti yang konsisten.

## Struktur lintas aplikasi

Gunakan [template laporan induk](../templates/reports/LAPORAN-PERTANGGUNGJAWABAN.template.md). Urutan bagian awal dan 15 bab di template menjadi standar internal I-Tech untuk berbagai teknologi, bukan susunan bab wajib ISO. Bagian awal berisi sampul, kendali dokumen, riwayat revisi, lembar pengesahan, dan daftar isi/gambar/tabel. Bab berikutnya berurutan: ringkasan eksekutif; pendahuluan; profil aplikasi; kebutuhan/proses bisnis; role/fitur/hak akses; alur program per role; rancangan sistem/data/antarmuka/integrasi; keamanan; pengembangan/riwayat perubahan; pengujian; operasional/backup/pemulihan; pemetaan ISO; risiko/tindak lanjut; penutup/keputusan; lampiran/glosarium.

Pertahankan urutan bab pada semua aplikasi. Bagian yang tidak berlaku diberi N/A dengan alasan dan dasar pemeriksaan, bukan dihapus. Informasi yang belum diperiksa diberi Belum terverifikasi, dampak, dan pemeriksaan lanjutan. Ringkasan eksekutif harus bisa dibaca mandiri; jangan membuat klaim manfaat terukur tanpa pengukuran.

## Role, fitur, flowchart, dan output

Gunakan [template alur per role](../templates/reports/ALUR-PROGRAM-PER-ROLE.template.md) pada Bab 5–6. Inventaris role berasal dari definisi akses, konfigurasi, kode otorisasi dan data yang boleh diperiksa. Jangan menambahkan role tamu berdasarkan asumsi. Akses publik hanya dicatat bila ditemukan dan tidak otomatis dijadikan role. Sistem berbasis permission tanpa role bernama dijelaskan sesuai model aktual.

Setiap role aktual wajib mempunyai daftar seluruh fitur beserta tindakan, batas data, prasyarat, hasil, dan bukti, serta flowchart sendiri. Hubungkan setiap FIT ke node diagram utama atau diagram turunan dan PRO/OUT terkait. Diagram menerangkan awal, fitur, keputusan, kondisi alternatif, hasil, penyerahan antar-role dan akhir yang benar-benar ditemukan. Jangan menambahkan langkah agar diagram terlihat lengkap. Jelaskan jalur berdasarkan kode yang belum diuji sebagai Belum terverifikasi dalam pengujian aktual.

Setiap proses wajib menjabarkan seluruh output yang dihasilkan dan diterima oleh setiap role. Untuk output yang tersedia, jelaskan nama dan tujuan, pemicu pembentukan, bentuk/format, isi data utama, sumber data dan filter/periode, penerima dan batas akses, serta cara melihat, mengunduh, mencetak, atau menerima hasil. Output dapat berupa tampilan/rekap, dokumen atau file ekspor, notifikasi, respons API/integrasi, maupun data/status tersimpan; cantumkan hanya yang ditemukan pada aplikasi. Bedakan hasil yang diharapkan dari hasil aktual yang telah diperiksa, serta sertakan contoh dengan data sintetis dan referensi bukti. Jelaskan pula hasil pada kondisi kosong, gagal, atau ditolak jika berlaku.

Untuk output melalui email, laporan wajib menjelaskan alamat tujuan To, CC, dan BCC jika digunakan, role penerima, sumber alamat (misalnya field akun, konfigurasi, atau input), serta aturan pemilihan penerima. Cantumkan subjek, ringkasan isi/lampiran, pemicu pengiriman, dan penanganan alamat kosong/tidak valid atau pengiriman gagal berdasarkan implementasi. Gunakan alamat sintetis atau samarkan alamat pribadi pada laporan; tetap jelaskan sumber dan aturan tujuannya secara tepat. Bedakan email yang baru dibuat/masuk antrean, diterima layanan pengirim, dan terbukti sampai ke kotak masuk. Jangan menyebut email terkirim atau diterima tanpa bukti tahap yang sesuai.

## Acuan ISO dan keterlacakan

Bab pemetaan mengikuti [pedoman ISO](iso-mapping.md): standar/edisi/amendemen, klausul/kontrol yang diperiksa, makna, penerapan, bagian sumber, bukti, status, kesenjangan, dan tindak lanjut. PDF merujuk ID pemetaan pada Markdown sumber; jangan membuat kesimpulan baru yang berbeda. Rujuk KEB → ROL/FIT → PRO/diagram → OUT → UJI/BKT → kesimpulan/TEM/tindakan. Pemeriksaan kode bukan pengujian penggunaan, screenshot bukan bukti semua hak akses, dan commit bukan bukti penerapan versi.

## Tata letak dan penerbitan

Buat PDF A4 berbahasa Indonesia ketika diminta, pada milestone, atau rilis yang disetujui. Gunakan margin 20 mm, teks utama 11–12 pt, judul bertingkat yang konsisten, dan nomor halaman. Header/footer mencantumkan identitas singkat laporan, versi dan status. Halaman lebar dapat memakai lanskap jika diperlukan; jangan mengecilkan tabel/diagram sampai tidak terbaca. Logo dan warna mengikuti identitas organisasi yang diizinkan; makna status tidak boleh bergantung pada warna saja.

Gunakan nomor dan judul untuk tabel/gambar, penjelasan arti, serta referensi pada narasi. Diagram Mermaid harus dirender menjadi gambar atau SVG sebelum/ketika ekspor; kode Mermaid mentah bukan flowchart pada PDF. Pecah diagram kompleks, pertahankan label cabang, dan cek teks/panah tidak terpotong. Pada ekspor berbasis HTML, cegah pemisahan blok diagram antarhalaman dan batasi tinggi diagram sesuai area cetak; perintah break-inside pada SVG saja dapat tidak cukup jika pembungkusnya masih terpecah. Periksa hasil PDF, bukan hanya tampilan peramban. Daftar isi, gambar, tabel dan referensi halaman diperbarui setelah penataan akhir.

Gunakan alat ekspor yang sudah tersedia pada aplikasi/organisasi; repository ini tidak mewajibkan pembangkit PDF baru. Alur ekspor: selesaikan Markdown dan bukti → render diagram → ekspor A4 → periksa PDF → perbaiki sumber → ekspor ulang. Catat alat/versi dan sumber commit pada catatan penerbitan. Contoh ilustrasi tidak boleh dipublikasikan sebagai bukti aplikasi.

Periksa seluruh halaman: urutan bab, daftar isi, nomor halaman, header/footer, pemotongan tabel, resolusi screenshot, keterbacaan flowchart, tautan, dan penyamaran data. Cocokkan daftar role dan fitur dengan sumber. Peninjau IT memeriksa ketepatan/bukti; pembaca non-IT memeriksa kejelasan maksud dan dampak. Catat hasil serta bagian yang belum diperiksa secara jujur.

Gunakan [anti-slop](anti-slop.md) selama penyusunan sumber Markdown dan PDF. Sertakan catatan empat blok Delivery Gate pada Bab 15 atau rujuk berkas pemeriksaannya; gunakan [template pemeriksaan](../templates/reports/ANTI-SLOP-REVIEW.template.md). Pertahankan struktur 15 bab, narasi, flowchart tiap role, dan bukti. Aturan komposisi halaman UI tidak digunakan untuk menghapus bab audit. Jangan menyatakan laporan final ketika pemeriksaan yang berlaku masih FAIL atau belum dilakukan.

Hanya gunakan bukti nyata dan data sintetis yang diberi label. Jangan menciptakan tanda tangan, persetujuan, hasil audit, atau klaim backup. PDF tetap DRAFT sampai disahkan. Simpan sumber Markdown dan PDF pada `docs/reports/` aplikasi, misalnya `LAPORAN-[aplikasi]-[versi]-[tanggal].md` dan `.pdf`, dengan lokasi bukti yang terlindungi sesuai klasifikasi. Arsipkan revisi dan distribusikan hanya kepada pihak yang berhak.
