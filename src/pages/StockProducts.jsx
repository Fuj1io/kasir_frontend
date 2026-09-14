import { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { produkApi, deleteProdukApi } from "../services/loader.js";
import "../styles/stockProducts.css";
import LoadingElement from "../components/LoadingElement.jsx";
import FormProduk from "../components/FormProduk.jsx";
import AlertSuksesAddData from "../components/AlertSuksesAddData.jsx";

function StockProducts() {
    const itemsPerPage = 20;
    const [produks, setProduks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true) ;
    const [alert, setAlert] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [editingProduk, setEditingProduk] = useState(null);
   
    useEffect(() => {
        setLoading(true);
        produkApi({ page: currentPage, limit: itemsPerPage, s: searchTerm.trim() })
            .then((r) => {
                setProduks(r.data || []);
                setTotalPages(Math.max(1, r.totalPages || 1));
            })
            .catch((e) => console.log(e.message))
            .finally(() => setLoading(false));
    }, [currentPage, searchTerm, refreshKey]);
    
    const handleSaved = (msg) => {
        setAlert({ message: msg, variant: "success" });
        setRefreshKey((k) => k + 1);
    };

    const handleFailed = (msg) => {
        setAlert({ message: msg, variant: "error" });
    };

    const handleAdd = () => {
        setEditingProduk(null);
        setTimeout(() => {
            const el = document.getElementById("modalAdd");
            if (el) new Modal(el).show();
        }, 0);
    };

    const handleEdit = (produk) => {
        setEditingProduk(produk);
        setTimeout(() => {
            const el = document.getElementById("modalAdd");
            if (el) new Modal(el).show();
        }, 0);
    };

    const handleDelete = async (produk) => {
        if (!window.confirm(`Hapus produk "${produk.nama_produk}"?`)) return;
        try {
            const res = await deleteProdukApi(produk.id_produk);
            setAlert({ message: res.message || res.msg || "Produk berhasil dihapus", variant: "success" });
            setRefreshKey((k) => k + 1);
        } catch (err) {
            setAlert({ message: err.response?.data?.msg || err.response?.data?.message || "Gagal hapus produk", variant: "error" });
        }
    };

    return (
        <main class="main-content flex-grow-1 d-flex flex-column">
            {/* fTOPBAR  */}
            <div class="content p-3">
                {alert && <AlertSuksesAddData message={alert.message} variant={alert.variant} onClose={() => setAlert(null)} />}
                {/* SEARCH + ADD BUTTON */}
                <div class="d-flex align-items-center justify-content-between mb-2 gap-1">
                    {/* SEARCH  */}
                    <div class="input-group search-box">
                        <span class="input-group-text bg-white">
                            <i class="bi bi-search search-icon"></i>
                        </span>
                        <input
                            type="text"
                            class="form-control border-start-0"
                            placeholder="Cari produk..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                        </input>
                    </div>
                    {/* TAMBAH PRODUK  */}
                    <button type="button" id="tambah-produk" class="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"  style={{marginBottom: "7px"}} onClick={handleAdd}>
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
                                {loading && <tr><td colSpan="8" className="text-center py-3">
                                    <LoadingElement/>
                                    </td></tr>}
                                {!loading && produks.length === 0 && <tr><td colSpan="8" className="text-center py-3">Tidak ada produk</td></tr>}
                                {!loading && produks.map((p, i) => {
                                    const s = p.stok === 0 ? ["habis","status-danger"] : p.stok <= 10 ? ["menipis","status-warning"] : ["Aman","status-safe"];
                                    return (
                                <tr key={p.id_produk || i}>
                                    <td className="text-center">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                                    <td><div className="product-image"><i className="bi bi-image"></i></div></td>
                                    <td className="fw-semibold">{p.nama_produk}</td>
                                    <td>{p.Kategori?.nama_kategori || "-"}</td>
                                    <td>Rp {Number(p.harga).toLocaleString("id-ID")}</td>
                                    <td>{p.stok}</td>
                                    <td className="text-center"><span className={`badge status-badge ${s[1]}`}>{s[0]}</span></td>
                                    <td><div className="d-flex gap-1"><button id="update-produk" className="btn btn-outline-primary action-btn btn-edit"  onClick={() => handleEdit(p)}><i className="bi bi-pencil"></i></button>
                                    <button id="delete-produk" className="btn btn-outline-danger action-btn" onClick={() => handleDelete(p)}><i className="bi bi-trash"></i></button></div></td>
                                </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* PAGINATION */}
                <div class="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <nav>
                        <ul class="pagination pagination-sm mb-0">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link" type="button" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                    «
                                </button>
                            </li>
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link" type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                    ‹
                                </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                                <li className={`page-item ${pageNumber === currentPage ? "active" : ""}`} key={pageNumber}>
                                    <button className="page-link" type="button" onClick={() => setCurrentPage(pageNumber)}>
                                        {pageNumber}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link" type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                                    ›
                                </button>
                            </li>
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link" type="button" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                                    »
                                </button>
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
                                Aman (Stok &gt; 10)
                            </span>
                        </div>
                        {/* MENIPIS */}
                        <div class="status-info-item d-flex align-items-center gap-1">
                            <span class="status-dot dot-orange"></span>
                            <span>
                                Menipis (Stok 1 - 10)
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
            <FormProduk key={editingProduk?.id_produk || "new"} initialData={editingProduk} onSaved={(msg) => { setEditingProduk(null); handleSaved(msg); }} onFailed={(msg) => { setEditingProduk(null); handleFailed(msg); }} />
        </main>
    )
}
export default StockProducts;
