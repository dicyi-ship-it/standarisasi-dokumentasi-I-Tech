# Dokumentasi Visual

Bukti visual membantu pembaca melihat tampilan dan hasil aplikasi pada kondisi yang benar-benar diperiksa. Setiap gambar perlu disertai penjelasan tentang siapa yang menggunakan halaman, tindakan yang dilakukan, hasil yang terlihat, dan hal yang belum dapat dibuktikan oleh gambar tersebut. Screenshot atau tangkapan layar melengkapi narasi, bukan menggantikan penjelasan cara kerja dan hasil pengujian.

Gunakan Playwright + Chromium untuk screenshot asli pada staging/lokal. Catat route, viewport, tanggal, commit, role uji, dan hasil tes. Gunakan data sintetis; redaksi data sensitif sebelum publikasi. Jangan mengarang screenshot atau status PASS. Simpan screenshot di `docs/assets/screenshots/` aplikasi, bukan repository standar pusat.

Gunakan BKT-ID dan nomor gambar untuk setiap screenshot; hubungkan dengan ROL/FIT/PRO/OUT dan UJI yang relevan. Pisahkan bukti tampilan dari bukti izin atau hasil pengujian. Diagram flowchart adalah penjelasan yang diturunkan dari sumber terverifikasi, bukan screenshot penggunaan. Setiap role aktual wajib memiliki flowchart sendiri; rujuk [template alur](../templates/reports/ALUR-PROGRAM-PER-ROLE.template.md) dan render Mermaid untuk PDF. Periksa gambar pada ukuran cetak dan lindungi data sensitif.
