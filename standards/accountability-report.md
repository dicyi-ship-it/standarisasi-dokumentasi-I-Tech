# Laporan Pertanggungjawaban PDF

Laporan akhir ditujukan kepada atasan/pimpinan untuk memahami pekerjaan pengembangan, cara aplikasi mendukung kegiatan organisasi, hasil yang sudah tersedia, serta persoalan yang memerlukan keputusan. Pembaca harus dapat memahami isi utama tanpa pengetahuan pemrograman. Setiap bab wajib memiliki penjelasan umum dan uraian yang cukup; rincian teknis berfungsi sebagai bukti pendukung.

Ringkasan eksekutif menjelaskan latar belakang kebutuhan, ruang lingkup pekerjaan, capaian terverifikasi, manfaat bagi pengguna, keterbatasan, dan keputusan yang diminta dari pimpinan bila ada. Setiap bab berikutnya mengembangkan penjelasan itu dalam bahasa sehari-hari: apa yang dilakukan, siapa yang terlibat, bagaimana proses berlangsung, hasilnya, dan dampaknya terhadap layanan. Jelaskan istilah teknis pada penggunaan pertama dan tempatkan daftar route, rincian konfigurasi, potongan kode, serta log panjang dalam bagian teknis atau lampiran. Tabel dan screenshot harus disertai narasi tentang arti dan implikasinya, bukan berdiri sendiri.

Buat satu PDF A4 berbahasa Indonesia pada saat diminta, milestone, atau rilis disetujui. Struktur: sampul, lembar pengesahan kosong, ringkasan eksekutif, pendahuluan, profil sistem, pekerjaan pengembangan, arsitektur/keamanan, hasil tes dan screenshot, riwayat Git, operasional, risiko/rekomendasi, penutup, lampiran.

## Alur program per role

Laporan akhir wajib memuat bab **Alur Program per Role** setelah profil sistem. Gunakan struktur pada `templates/reports/ALUR-PROGRAM-PER-ROLE.template.md` dan ulangi pembahasan untuk setiap role yang ditemukan pada aplikasi. Sertakan pengguna tanpa login jika memiliki alur publik.

Jelaskan tujuan dan batas hak akses setiap role, cara masuk dan dashboard awal, menu yang dapat diakses, serta langkah setiap proses dari input sampai hasil. Uraikan validasi, perubahan status/data, kondisi gagal atau akses ditolak, dan perpindahan pekerjaan ke role lain. Sertakan diagram alur dan rujukan screenshot asli untuk memperjelas langkah penggunaan.

Setiap proses wajib menjabarkan seluruh output yang dihasilkan dan diterima oleh setiap role. Untuk output yang tersedia, jelaskan nama dan tujuan, pemicu pembentukan, bentuk/format, isi data utama, sumber data dan filter/periode, penerima dan batas akses, serta cara melihat, mengunduh, mencetak, atau menerima hasil. Output dapat berupa tampilan/rekap, dokumen atau file ekspor, notifikasi, respons API/integrasi, maupun data/status tersimpan; cantumkan hanya yang ditemukan pada aplikasi. Bedakan hasil yang diharapkan dari hasil aktual yang telah diperiksa, serta sertakan contoh dengan data sintetis dan referensi bukti. Jelaskan pula hasil pada kondisi kosong, gagal, atau ditolak jika berlaku.

Untuk output melalui email, laporan wajib menjelaskan alamat tujuan To, CC, dan BCC jika digunakan, role penerima, sumber alamat (misalnya field akun, konfigurasi, atau input), serta aturan pemilihan penerima. Cantumkan subjek, ringkasan isi/lampiran, pemicu pengiriman, dan penanganan alamat kosong/tidak valid atau pengiriman gagal berdasarkan implementasi. Gunakan alamat sintetis atau samarkan alamat pribadi pada laporan; tetap jelaskan sumber dan aturan tujuannya secara tepat. Bedakan email yang baru dibuat/masuk antrean, diterima layanan pengirim, dan terbukti sampai ke kotak masuk. Jangan menyebut email terkirim atau diterima tanpa bukti tahap yang sesuai.

Daftar role harus dicocokkan dengan konfigurasi autentikasi, route, middleware, policy/gate, dan kode terkait yang tersedia. Hubungkan penjelasan dengan `docs/ISO/04-BUSINESS-PROCESS.md`, `docs/ISO/05-USE-CASE-SPECIFICATION.md`, serta bukti pengujian. Pemeriksaan kode tidak boleh disebut sebagai pengujian penggunaan; tandai langkah atau output yang belum diuji sebagai Belum terverifikasi. Jangan mengarang nama role atau fitur.

Hanya gunakan bukti terverifikasi. Jangan menciptakan tanda tangan, hasil audit, backup, atau klaim keamanan. PDF tetap DRAFT sampai disahkan. Simpan pada `docs/reports/` aplikasi, dengan nama versi rilis untuk arsip.
