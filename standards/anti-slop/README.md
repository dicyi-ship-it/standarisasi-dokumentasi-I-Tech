# Sumber Anti-slop

Direktori ini menyimpan salinan lokal aturan resmi [miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop). Aturan membantu agen memeriksa keluaran yang generik, klaim rekaan, dan keputusan tampilan tanpa tujuan. Salinan lokal memungkinkan pemeriksaan memakai versi yang sama tanpa mengunduh instruksi baru pada setiap sesi.

## Identitas salinan

| Informasi | Nilai |
| --- | --- |
| Versi pada package.json sumber | 3.2.24 |
| Commit sumber | `3005235d030b4793146ad9afe8d01045efd90e1d` |
| Tanggal pengambilan | 2026-10-31 |
| Berkas aturan | [antislop.md](antislop.md), disalin tanpa perubahan |
| Berkas asli | [antislop.md pada commit sumber](https://github.com/miqdadbadjuber/anti-slop/blob/3005235d030b4793146ad9afe8d01045efd90e1d/antislop.md) |
| Lisensi | [MIT](LICENSE), pemberitahuan hak cipta dipertahankan |
| SHA-256 antislop.md | `c2341728e54e12db4f969f748c3431c701bbbccf67f276efa585a01e99e400d8` |
| SHA-256 LICENSE | `9fd83fb1fda52ca0094b96e2ed5a3d6c42a81b95a6c6326553f5bbe570f443de` |

## Cara penggunaan dan pembaruan

Gunakan varian single-file yang didukung upstream. Skill tambahan, pemasang CLI, dan dependensi runtime tidak dipasang. Contoh jalur `skills/` dalam salinan upstream bukan daftar skill yang terpasang di proyek ini. Baca [kebijakan integrasi I-Tech](../anti-slop.md) bersama aturan asli; kebijakan tersebut menjelaskan cakupan, mode generasi, dan format bukti pemeriksaan.

Pembaruan dilakukan sebagai perubahan repository yang ditinjau: pilih commit sumber, periksa perbedaan aturan dan lisensi, ganti salinan, hitung ulang hash, perbarui identitas di atas dan changelog, lalu periksa kembali instruksi agen. Jangan menjalankan pembaruan otomatis atau installer global dari sesi generasi aplikasi. Jangan mengedit salinan upstream untuk menyisipkan aturan internal; tulis penyesuaian pada kebijakan integrasi.
