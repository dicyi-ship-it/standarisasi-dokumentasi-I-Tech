# Alur Program per Role

Status: DRAFT. Isi berdasarkan aplikasi yang diperiksa; placeholder bukan hasil verifikasi. Bab ini ditempatkan setelah profil sistem dalam laporan akhir.

- Aplikasi dan versi: [isi]
- Branch dan commit yang diperiksa: [isi]
- Tanggal dan penanggung jawab: [isi]
- Lingkungan pemeriksaan/pengujian: [isi]
- Referensi: [dokumen ISO 04/05, kode, hasil tes, screenshot]

## 1. Daftar role dan cakupan akses

Daftarkan seluruh role yang ditemukan, termasuk akses publik bila tersedia. Jelaskan pembatasan kepemilikan data atau unit kerja jika berlaku. Jangan menggunakan daftar role asumsi.

| Role | Tujuan/tanggung jawab | Menu dan tindakan yang diizinkan | Batas akses data/tindakan | Bukti kode dan status verifikasi |
| --- | --- | --- | --- | --- |
| [role] | [isi] | [isi] | [isi] | [path/simbol pada commit terkait; status] |

## 2. Alur penggunaan setiap role

Ulangi bagian berikut untuk **setiap role**, lalu ulangi tabel proses untuk **setiap proses yang dapat dijalankan role tersebut**.

### Role: [nama role terverifikasi]

- Tujuan penggunaan: [isi]
- Prasyarat akun, hak akses, dan data: [isi]
- Cara masuk dan halaman/dashboard awal: [isi; N/A dengan alasan untuk akses publik]
- Menu yang tersedia dan fungsinya: [isi]
- Cara mengakhiri sesi: [isi jika berlaku]

#### Proses: [nama proses / ID use case]

- Pemicu dan kondisi awal: [isi]
- Hasil akhir yang diharapkan: [isi]

| Langkah | Menu/halaman | Tindakan pengguna dan input | Respons sistem/validasi | Perubahan data atau status | Bukti dan status verifikasi |
| --- | --- | --- | --- | --- | --- |
| 1 | [isi] | [isi] | [isi] | [isi atau tidak berubah] | [referensi kode, ID tes, gambar; status] |

- Alur alternatif/kegagalan: [input tidak valid, data tidak tersedia, atau kondisi lain yang ditemukan beserta respons sistem]
- Batas otorisasi: [tindakan/data yang ditolak dan bukti pemeriksaan atau tesnya]
- Penyerahan ke role lain: [role tujuan, kondisi penyerahan, status/data yang diterima, dan langkah berikutnya; N/A beserta alasan jika tidak ada]
- Diagram alur: [sertakan diagram dari awal, keputusan/validasi, hasil, sampai penyerahan bila ada]
- Screenshot: [nomor gambar, keterangan langkah, lokasi bukti asli dengan data sintetis; Belum terverifikasi bila belum tersedia]

#### Output proses

Ulangi rincian berikut untuk **setiap output** proses ini. Sertakan hasil yang dibuat role ini maupun hasil yang diterima dari role lain, dengan merujuk proses asalnya. Catat hanya jenis output yang benar-benar ditemukan; bila proses tidak menghasilkan output, tulis N/A dengan alasan berdasarkan pemeriksaan.

- ID, nama, dan tujuan output: [isi]
- Proses asal, role pemicu, dan waktu/kondisi pembentukan: [isi]
- Bentuk dan format: [tampilan, data/status tersimpan, dokumen, ekspor, notifikasi, respons API, atau bentuk lain yang ditemukan; format file jika ada]
- Isi utama: [kolom/field, arti data, satuan, ringkasan/perhitungan, dan status yang ditampilkan jika berlaku]
- Sumber dan cakupan data: [sumber data, filter, periode, serta batas kepemilikan/unit kerja jika berlaku]
- Penerima dan hak akses: [role yang dapat melihat/menerima, mengunduh, mencetak, atau meneruskan output sesuai fitur yang tersedia]
- Cara memperoleh hasil: [menu/halaman, tindakan unduh/cetak, kanal penerimaan, atau endpoint yang terverifikasi]
- Hasil yang diharapkan: [isi berdasarkan kebutuhan/use case]
- Hasil aktual: [isi dari pemeriksaan/pengujian beserta status; Belum terverifikasi jika belum diperiksa]
- Kondisi kosong/gagal/ditolak: [hasil atau pesan sistem dan apakah output tetap terbentuk; N/A beserta alasan bila tidak berlaku]
- Contoh output: [cuplikan/screenshot atau berkas contoh dengan data sintetis, nomor gambar/lampiran, dan lokasi bukti]
- Referensi verifikasi: [path/simbol kode pada commit terkait, ID tes, dan bukti aktual; bedakan pemeriksaan kode dari pengujian]

#### Tujuan dan pengiriman email (jika output melalui email)

Ulangi untuk setiap jenis email. Jika tidak menggunakan email, tulis N/A berdasarkan pemeriksaan. Gunakan alamat sintetis atau samarkan alamat pribadi dalam laporan, tanpa menghilangkan penjelasan sumber dan aturan pemilihannya.

| Jenis penerima | Role/pihak tujuan | Alamat tujuan (sintetis/disamarkan) | Sumber alamat | Aturan pemilihan penerima | Referensi kode/bukti |
| --- | --- | --- | --- | --- | --- |
| To | [isi] | [isi] | [field akun, konfigurasi, input, atau sumber terverifikasi lainnya] | [kondisi/relasi penentu penerima] | [isi] |
| CC | [isi atau N/A] | [isi atau N/A] | [isi atau N/A] | [isi atau N/A] | [isi] |
| BCC | [isi atau N/A] | [isi atau N/A] | [isi atau N/A] | [isi atau N/A] | [isi] |

- Subjek dan ringkasan isi/lampiran: [isi]
- Pemicu dan mekanisme pengiriman: [langsung/antrean sesuai implementasi, serta waktu/kondisi pengiriman]
- Penanganan alamat kosong/tidak valid dan kegagalan: [respons, retry, atau tindak lanjut yang terverifikasi]
- Status aktual dan bukti: [dibuat/masuk antrean, diterima layanan pengirim, atau terbukti masuk kotak penerima; tulis Belum terverifikasi untuk tahap tanpa bukti]

## 3. Hubungan alur antar-role


| Proses | Role asal dan tindakan | Status sebelum → sesudah | Role penerima dan tindak lanjut | Kondisi penolakan/perbaikan | Referensi bukti |
| --- | --- | --- | --- | --- | --- |
| [isi] | [isi] | [isi] | [isi] | [isi atau N/A beserta alasan] | [isi] |

Jika tidak ada proses antar-role, tulis N/A beserta alasan berdasarkan pemeriksaan.

## 4. Kelengkapan dan batas verifikasi

- Cocokkan seluruh role dan proses dengan dokumen ISO 04/05 serta kode aplikasi.
- Pisahkan bukti pemeriksaan kode, pengujian aktual, dan screenshot. Cantumkan hasil aktual beserta ID bukti; jangan mengklaim lulus tanpa pengujian.
- Catat role, proses, alur alternatif, atau batas akses yang belum diuji sebagai Belum terverifikasi, beserta dampak dan tindak lanjutnya.
- Pastikan diagram, tabel langkah, perubahan status, dan screenshot konsisten dengan versi yang dilaporkan.
- Pastikan setiap proses memiliki rincian seluruh output, termasuk penerima, isi, cara memperoleh hasil, dan bukti; catat output yang belum diuji sebagai Belum terverifikasi.
