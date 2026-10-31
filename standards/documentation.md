# Kebijakan Dokumentasi

Dokumentasi membantu pimpinan memahami sistem, pekerjaan yang dilakukan, hasil yang tersedia, dan keputusan yang perlu diambil. Dokumen juga menyediakan rincian bagi pelaksana teknis agar penjelasan tersebut dapat ditelusuri ke bukti. Karena itu, pembaca harus dapat memahami pokok persoalan tanpa membaca kode atau mengetahui istilah pemrograman terlebih dahulu.

Acuan, edisi, cara memeriksa klausul, dan format penilaian diatur pada [pemetaan ISO](iso-mapping.md). Setiap dokumen substantif aplikasi wajib menyebut acuan yang relevan, bukan sekadar label ISO. Dokumen administratif atau panduan yang tidak menilai persyaratan cukup merujuk pedoman ini dan menjelaskan fungsinya.

Dokumen adalah adaptasi internal, bukan format wajib ISO. Setiap file harus mencantumkan identitas aplikasi, versi, tanggal, pemilik, status, bukti, dan riwayat revisi. Isi berdasarkan pemeriksaan nyata. Bagian yang belum berlaku ditandai N/A beserta alasan; bagian yang belum terbukti ditandai Belum terverifikasi.

## Kedalaman isi dan bahasa untuk pimpinan

Aturan ini berlaku untuk seluruh file Markdown, termasuk README, standar, panduan, template, dan dokumen ISO, serta laporan akhir yang dibuat darinya. Isi tidak boleh berupa ringkasan terlalu singkat yang membuat pembaca harus menebak maksud, hubungan proses, atau dampaknya. Panjang mengikuti kerumitan topik; tidak ada target jumlah kata yang menggantikan kelengkapan penjelasan.

Setiap dokumen diawali penjelasan umum tentang apa yang dibahas, mengapa diperlukan, siapa yang berkepentingan, serta bagaimana informasi itu digunakan. Pada setiap bagian substantif, jelaskan fakta atau proses dalam paragraf utuh sebelum menambahkan tabel, daftar, diagram, dan bukti teknis. Tabel atau screenshot harus diberi pengantar dan penjelasan arti hasilnya. Daftar referensi dan riwayat revisi boleh memakai format ringkas, dengan konteks perubahan yang jelas.

Gunakan bahasa Indonesia yang akrab bagi pembaca nonteknis. Jelaskan singkatan dan istilah ketika pertama digunakan, termasuk role (peran pengguna), API (penghubung pertukaran data antar-sistem), dan deployment (penerapan versi aplikasi ke lingkungan operasional). Hindari menjadikan nama file, route, tabel database, atau konfigurasi sebagai satu-satunya penjelasan perilaku sistem. Nama teknis tetap dicantumkan pada bagian bukti agar pelaksana dapat memeriksanya.

Alur penggunaan harus menjelaskan siapa melakukan apa, melalui langkah mana, mengapa langkah itu diperlukan, hasil yang diterima, dan tindakan berikutnya. Uraian output harus menjelaskan kegunaan hasil bagi penerima, isi yang dapat dibaca, cara memperoleh hasil, dan batasannya. Temuan pengujian atau keamanan harus diterjemahkan menjadi dampak pada pekerjaan, layanan, atau data, beserta tindak lanjut dan keputusan yang diperlukan. Jangan mengklaim manfaat terukur tanpa bukti pengukuran.

Template yang belum diisi wajib menyediakan petunjuk naratif sesuai topiknya, bukan hanya perintah umum “isi berdasarkan bukti”. Petunjuk bukan hasil pemeriksaan aplikasi. Saat digunakan, ganti petunjuk dengan penjelasan berdasarkan bukti; jika bukti belum tersedia, jelaskan apa yang belum diketahui, akibatnya bagi kesimpulan, dan pemeriksaan yang masih diperlukan.

## Pemeriksaan sebelum dokumen diserahkan

Pastikan pembaca dapat menjelaskan kembali tujuan dokumen, cara kerja pokok, pihak yang terlibat, hasil, serta risiko atau keputusan yang relevan tanpa membuka source code. Periksa konsistensi narasi dengan tabel, diagram, screenshot, dan versi aplikasi. Jika suatu bagian hanya berisi jargon, daftar teknis, atau kalimat umum tanpa penjelasan makna, lengkapi sebelum diserahkan. Ketidakpastian tetap dinyatakan secara jujur; kelengkapan narasi tidak membenarkan pengisian fakta yang belum diperiksa.

## Role, fitur, dan flowchart

Inventaris role (peran pengguna) harus berasal dari definisi akses aplikasi. Periksa konfigurasi, kode pembatasan akses, dan data role yang diizinkan; bedakan definisi bawaan, data awal, dan role aktual pada lingkungan yang diperiksa. Jangan menambahkan role tamu berdasarkan asumsi. Halaman tanpa login dicatat terpisah sebagai akses publik jika ditemukan, bukan otomatis role tamu. Jika aplikasi memakai izin individual tanpa role bernama, jelaskan mekanisme aktualnya tanpa menciptakan nama role.

Setiap role terverifikasi wajib memiliki daftar seluruh fitur, tindakan yang diizinkan, batas data, prasyarat, output, dan referensi bukti. Setiap role juga wajib memiliki flowchart sendiri. Hubungkan seluruh fitur ke proses pada diagram utama atau diagram turunannya. Ikuti [template alur per role](../templates/reports/ALUR-PROGRAM-PER-ROLE.template.md). Tampilan menu saja bukan bukti otorisasi; bedakan pemeriksaan kode dari pengujian izin aktual.

## Keterlacakan dan daftar bukti

Gunakan ID unik dalam aplikasi untuk kebutuhan (KEB), role (ROL), fitur (FIT), proses (PRO), output (OUT), pengujian (UJI), bukti (BKT), temuan (TEM), dan pemetaan (ISO), misalnya FIT-001. Pertahankan ID saat direvisi; hindari mengganti ID lama sehingga referensi putus. Nama role tetap mengikuti aplikasi. Hubungkan kebutuhan/persyaratan → role/fitur → proses → output → pengujian/bukti → kesimpulan → tindak lanjut. Tidak semua hubungan berlaku; jelaskan alasan jika suatu hubungan tidak tersedia.

Setiap bukti memiliki catatan berikut. Lokasi dapat berupa path dan simbol kode pada commit, berkas hasil tes, atau arsip terkendali; jangan menaruh rahasia maupun data pribadi mentah ke laporan.

| ID bukti | Jenis dan lokasi | Versi/commit, tanggal, lingkungan | Metode, pemeriksa, hasil aktual | Yang dibuktikan dan batasnya |
| --- | --- | --- | --- | --- |
| [BKT-ID] | [kode/pengujian/visual/operasional/keterangan pihak terkait] | [isi] | [isi; keterangan tanpa bukti tetap belum terverifikasi] | [isi] |

Versi dokumen dan versi aplikasi dicatat terpisah. Identitas minimum dokumen substantif adalah ID/judul, aplikasi, versi dokumen, versi/commit aplikasi, status, klasifikasi, pemilik, pemeriksa, tanggal, dan persetujuan aktual. Nilai yang belum diketahui dinyatakan belum tersedia, bukan diisi perkiraan. Setiap temuan mencatat dampak, prioritas beserta alasan, tindak lanjut, penanggung jawab, target yang disepakati, dan hasil pemeriksaan ulang.

Gunakan judul berbahasa Indonesia dengan istilah teknis bila membantu. Tambahkan glosarium untuk istilah berulang. Markdown merupakan sumber isi laporan PDF; gunakan ID, fakta, status, dan referensi yang sama. Perbaiki sumbernya ketika menemukan ketidaksesuaian, kemudian terbitkan ulang PDF sesuai versi.

## Pemeriksaan kelengkapan akhir

Sebelum penyerahan, cocokkan inventaris role, fitur, proses, output, flowchart, dan hasil tes. Tidak boleh ada role tambahan tanpa bukti, fitur tanpa penjelasan alur, diagram tanpa sumber, atau klaim pemenuhan ISO tanpa klausul dan bukti. Bagian tidak berlaku tetap dijelaskan alasannya; informasi yang belum diperiksa ditandai Belum terverifikasi beserta dampak dan rencana pemeriksaannya. Periksa tautan, ID, referensi gambar, serta kesamaan versi pada Markdown dan PDF. Pemeriksaan struktur tidak menggantikan penilaian isi oleh pembaca IT dan non-IT.

## Anti-slop selama penulisan

Baca dan terapkan [kebijakan anti-slop](anti-slop.md) serta [aturan upstream lokal](anti-slop/antislop.md) sebelum menyusun isi. Gunakan mode during untuk generasi, bahasa spesifik dan alami, serta klaim yang memiliki sumber. Jangan mengurangi esensi, penjelasan bagi non-IT, rincian fitur/output, atau bukti untuk mengejar tulisan singkat. Label template, ilustrasi, dan ketidakpastian tetap terlihat. Salinan upstream dipertahankan utuh beserta lisensinya.

Sebelum penyerahan, catat empat blok Delivery Gate menggunakan [template pemeriksaan](../templates/reports/ANTI-SLOP-REVIEW.template.md). Periksa setiap butir yang berlaku dengan bukti; bagian UI yang tidak relevan pada perubahan dokumentasi diberi N/A dengan alasan. Pemeriksaan yang wajib tetapi belum dijalankan tidak boleh ditulis PASS. Catatan gate menjadi lampiran/rujukan laporan, bukan pengganti pemetaan ISO atau pengesahan dokumen.
