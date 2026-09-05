# PRD – KASIR

## Latar belakang
Aplikasi kasir berbasis web diperlukan untuk memudahkan proses penjualan, pencatatan transaksi, dan manajemen stok pada usaha kecil‑menengah.

## Tujuan
- Menyediakan antarmuka sederhana untuk kasir.
- Menyimpan riwayat transaksi.
- Mengelola stok barang secara real‑time.

## User story
- **Sebagai** kasir, **saya ingin** menambah item ke keranjang, **agar** dapat memproses penjualan.
- **Sebagai** manajer, **saya ingin** melihat laporan penjualan harian, **agar** dapat memantau performa.

## Acceptance criteria
1. Kasir dapat menambah, mengedit, menghapus item di keranjang.
2. Sistem menghitung total otomatis.
3. Transaksi tersimpan di database dengan timestamp.
4. Stok barang berkurang setelah transaksi selesai.
5. Laporan penjualan menampilkan total penjualan per hari.

## Timeline (sprint)
- Sprint 1: Setup proyek, API transaksi, model produk.
- Sprint 2: UI keranjang, proses checkout.
- Sprint 3: Laporan penjualan, manajemen stok.

## Referensi
- Issue #1: Setup backend Express.
- Issue #2: Implement frontend dengan Vite + React.

---
*Dokumen ini berada di repository dan dapat di‑update melalui pull request.*