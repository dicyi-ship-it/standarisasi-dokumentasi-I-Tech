# Keterlacakan Git

Riwayat Git adalah catatan perubahan berkas yang membantu menghubungkan pekerjaan, versi aplikasi, dan bukti pemeriksaannya. Dalam laporan kepada pimpinan, jelaskan perubahan yang berpengaruh pada penggunaan atau layanan dan alasan perubahan itu diperlukan. Nomor commit, yaitu identitas catatan perubahan, disertakan untuk penelusuran; nomor tersebut sendiri bukan bukti bahwa fitur telah diuji atau diterapkan.

Git adalah sumber kebenaran riwayat commit. Catat SHA, branch, tag, penulis sesuai metadata, perubahan relevan, tes, dan dokumen terdampak. Jangan otomatis commit `git log` setiap commit karena berpotensi loop. Hindari force push, hapus branch, atau mengubah pekerjaan orang lain tanpa persetujuan.

Versi dokumen, versi aplikasi, dan commit sumber dicatat terpisah. Gunakan ID kebutuhan/fitur/proses/output/pengujian/bukti/temuan yang sama pada Markdown dan PDF sesuai [kebijakan dokumentasi](documentation.md). Bukti kode merujuk path dan simbol pada commit tertentu; bukti pengujian juga mencatat lingkungan dan waktu aktual. Catat revisi, sumber commit, alat ekspor, serta status pengesahan pada penerbitan laporan. Jangan menyebut commit sebagai bukti pengujian, backup, atau deployment.
