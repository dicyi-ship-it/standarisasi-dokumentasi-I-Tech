# Kebijakan Dokumentasi

Dokumentasi membantu pimpinan memahami sistem, pekerjaan yang dilakukan, hasil yang tersedia, dan keputusan yang perlu diambil. Dokumen juga menyediakan rincian bagi pelaksana teknis agar penjelasan tersebut dapat ditelusuri ke bukti. Karena itu, pembaca harus dapat memahami pokok persoalan tanpa membaca kode atau mengetahui istilah pemrograman terlebih dahulu.

Acuan: ISO/IEC/IEEE 15289 (dokumentasi), 12207 (siklus hidup), 29148 (kebutuhan), 42010 (arsitektur), ISO/IEC 25010 (kualitas), ISO/IEC 27001/27002 (keamanan), ISO/IEC/IEEE 29119 (pengujian), ISO/IEC 20000-1 (layanan), dan ISO 22301 (keberlangsungan).

Dokumen adalah adaptasi internal, bukan format wajib ISO. Setiap file harus mencantumkan identitas aplikasi, versi, tanggal, pemilik, status, bukti, dan riwayat revisi. Isi berdasarkan pemeriksaan nyata. Bagian yang belum berlaku ditandai N/A beserta alasan; bagian yang belum terbukti ditandai Belum terverifikasi.

## Kedalaman isi dan bahasa untuk pimpinan

Aturan ini berlaku untuk seluruh file Markdown, termasuk README, standar, panduan, template, dan dokumen ISO, serta laporan akhir yang dibuat darinya. Isi tidak boleh berupa ringkasan terlalu singkat yang membuat pembaca harus menebak maksud, hubungan proses, atau dampaknya. Panjang mengikuti kerumitan topik; tidak ada target jumlah kata yang menggantikan kelengkapan penjelasan.

Setiap dokumen diawali penjelasan umum tentang apa yang dibahas, mengapa diperlukan, siapa yang berkepentingan, serta bagaimana informasi itu digunakan. Pada setiap bagian substantif, jelaskan fakta atau proses dalam paragraf utuh sebelum menambahkan tabel, daftar, diagram, dan bukti teknis. Tabel atau screenshot harus diberi pengantar dan penjelasan arti hasilnya. Daftar referensi dan riwayat revisi boleh memakai format ringkas, dengan konteks perubahan yang jelas.

Gunakan bahasa Indonesia yang akrab bagi pembaca nonteknis. Jelaskan singkatan dan istilah ketika pertama digunakan, termasuk role (peran pengguna), API (penghubung pertukaran data antar-sistem), dan deployment (penerapan versi aplikasi ke lingkungan operasional). Hindari menjadikan nama file, route, tabel database, atau konfigurasi sebagai satu-satunya penjelasan perilaku sistem. Nama teknis tetap dicantumkan pada bagian bukti agar pelaksana dapat memeriksanya.

Alur penggunaan harus menjelaskan siapa melakukan apa, melalui langkah mana, mengapa langkah itu diperlukan, hasil yang diterima, dan tindakan berikutnya. Uraian output harus menjelaskan kegunaan hasil bagi penerima, isi yang dapat dibaca, cara memperoleh hasil, dan batasannya. Temuan pengujian atau keamanan harus diterjemahkan menjadi dampak pada pekerjaan, layanan, atau data, beserta tindak lanjut dan keputusan yang diperlukan. Jangan mengklaim manfaat terukur tanpa bukti pengukuran.

Template yang belum diisi wajib menyediakan petunjuk naratif sesuai topiknya, bukan hanya perintah umum “isi berdasarkan bukti”. Petunjuk bukan hasil pemeriksaan aplikasi. Saat digunakan, ganti petunjuk dengan penjelasan berdasarkan bukti; jika bukti belum tersedia, jelaskan apa yang belum diketahui, akibatnya bagi kesimpulan, dan pemeriksaan yang masih diperlukan.

## Pemeriksaan sebelum dokumen diserahkan

Pastikan pembaca dapat menjelaskan kembali tujuan dokumen, cara kerja pokok, pihak yang terlibat, hasil, serta risiko atau keputusan yang relevan tanpa membuka source code. Periksa konsistensi narasi dengan tabel, diagram, screenshot, dan versi aplikasi. Jika suatu bagian hanya berisi jargon, daftar teknis, atau kalimat umum tanpa penjelasan makna, lengkapi sebelum diserahkan. Ketidakpastian tetap dinyatakan secara jujur; kelengkapan narasi tidak membenarkan pengisian fakta yang belum diperiksa.
