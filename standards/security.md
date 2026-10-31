# Audit Keamanan

Pemeriksaan keamanan membantu mengenali kelemahan yang dapat mengganggu layanan, membuka informasi kepada pihak yang tidak berhak, atau mengubah data tanpa wewenang. Hasilnya harus menjelaskan dampak bagi organisasi, dasar temuan, dan tindakan yang diperlukan. Istilah teknis serta keluaran alat perlu diterangkan; keluaran alat saja belum membuktikan adanya kelemahan atau bahwa sistem sudah aman.

Cloudflare Security Audit Skill: https://github.com/cloudflare/security-audit-skill

Skill adalah alat bantu, bukan sertifikasi atau pengganti penetration test. Tinjau kode dan provenance skill sebelum memasang. Jalankan hanya di sandbox terisolasi, dengan batas jaringan dan tanpa kredensial produksi. Jangan memindai target publik/produksi tanpa otorisasi.

Catat scope, SHA commit, tanggal, alat/versi, temuan confirmed/needs_validation/rejected, bukti, risiko, pemilik, tindakan, dan hasil retest. Tambahkan `composer audit` dan pemeriksaan konfigurasi Laravel sesuai izin. Simpan rincian eksploitasi dan data sensitif di lokasi terbatas.

Setiap temuan menggunakan TEM-ID dan BKT-ID, disertai versi/lingkungan, metode, pemeriksa, dampak, prioritas beserta alasan, tindak lanjut, pemilik, target yang disepakati atau Belum ditetapkan, serta hasil retest. Hubungkan uji akses dengan role dan FIT aktual; uji tindakan/data yang diizinkan maupun ditolak sesuai izin lingkungan. Jangan menciptakan role tamu untuk skenario uji. Pemetaan persyaratan keamanan mengikuti [pedoman ISO](iso-mapping.md); status temuan bukan status pemenuhan ISO. Untuk teknologi selain Laravel, gunakan pemeriksaan dan alat yang sesuai dependensi aktual.
