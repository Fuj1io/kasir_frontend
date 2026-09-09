import "../styles/stockProducts.css";
function StockProducts() {
    return (
        <main class="main-content flex-grow-1 d-flex flex-column">
            {/* fTOPBAR  */}
            <div class="content p-3">
                {/* SEARCH + ADD BUTTON */}
                <div class="d-flex align-items-center justify-content-between mb-2">
                    {/* SEARCH  */}
                    <div class="input-group search-box">
                        <span class="input-group-text bg-white">
                            <i class="bi bi-search search-icon"></i>
                        </span>
                        <input type="text" class="form-control border-start-0" placeholder="Cari produk...">
                        </input>
                    </div>
                    {/* TAMBAH PRODUK  */}
                    <button type="button" class="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 mx-2"  >
                        <i class="bi bi-plus-lg me-1"></i>
                        <span>Tambah</span>
                    </button>
                </div>
                {/* TABLE */}
                <div class="table-wrapper">
                    <div class="table-responsive" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                        <table class="table table-bordered mb-0 stock-table">
                            <thead>
                                <tr>
                                    <th style={{ width: 35 + 'px' }}>
                                        No
                                    </th>
                                    <th style={{ width: 55 + 'px' }}>
                                        Gambar
                                    </th>
                                    <th>
                                        Nama Produk
                                    </th>
                                    <th>
                                        Kategori
                                    </th>
                                    <th>
                                        Harga
                                    </th>
                                    <th>
                                        Stok
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th style={{ width: 70 + 'px' }}>
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* ROW 1  */}
                                <tr>
                                    <td class="text-center">
                                        1
                                    </td>
                                    <td>
                                        <div class="product-image">
                                            <i class="bi bi-image"></i>
                                        </div>
                                    </td>
                                    <td class="fw-semibold">
                                        Nasi Goreng
                                    </td>
                                    <td>
                                        Makanan
                                    </td>
                                    <td>
                                        Rp 15.000
                                    </td>
                                    <td>
                                        25
                                    </td>
                                    <td class="text-center">
                                        <span class="badge status-badge status-safe">
                                            Aman
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* ROW 2  */}
                                <tr>
                                    <td class="text-center">
                                        1
                                    </td>
                                    <td>
                                        <div class="product-image">
                                            <i class="bi bi-image"></i>
                                        </div>
                                    </td>
                                    <td class="fw-semibold">
                                        Nasi Goreng
                                    </td>
                                    <td>
                                        Makanan
                                    </td>
                                    <td>
                                        Rp 15.000
                                    </td>
                                    <td>
                                        25
                                    </td>
                                    <td class="text-center">
                                        <span class="badge status-badge status-danger">
                                            habis
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* ROW 3  */}
                                <tr>
                                    <td class="text-center">
                                        1
                                    </td>
                                    <td>
                                        <div class="product-image">
                                            <i class="bi bi-image"></i>
                                        </div>
                                    </td>
                                    <td class="fw-semibold">
                                        Nasi Goreng
                                    </td>
                                    <td>
                                        Makanan
                                    </td>
                                    <td>
                                        Rp 15.000
                                    </td>
                                    <td>
                                        25
                                    </td>
                                    <td class="text-center">
                                        <span class="badge status-badge status-warning">
                                            menipis
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-outline-secondary action-btn">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* PAGINATION */}
                <div class="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <nav>
                        <ul class="pagination pagination-sm mb-0">
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    «
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    ‹
                                </a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    ›
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    »
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* PAGE SIZE
                    <select class="form-select page-size" style={{ height: "20px" }}>
                        <option>
                            10 / halaman
                        </option>
                        <option>
                            20 / halaman
                        </option>
                        <option>
                            50 / halaman
                        </option>
                    </select> */}
                </div>
                {/* STATUS INFORMATION */}
                <div class="status-info mt-2 p-2">
                    <div class="status-info-title mb-2">
                        Keterangan Status:
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        {/* AMAN  */}
                        <div class="status-info-item d-flex align-items-center gap-1">
                            <span class="status-dot dot-green"></span>
                            <span>
                                Aman (Stok &gt; 5)
                            </span>
                        </div>
                        {/* MENIPIS */}
                        <div class="status-info-item d-flex align-items-center gap-1">
                            <span class="status-dot dot-orange"></span>
                            <span>
                                Menipis (Stok 1 - 5)
                            </span>
                        </div>
                        {/* HABIS  */}
                        <div class="status-info-item d-flex align-items-center gap-1">
                            <span class="status-dot dot-red"></span>
                            <span>
                                Habis (Stok 0)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default StockProducts;
