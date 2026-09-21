
import { useState, useEffect } from "react";
import { laporanApi } from "../services/loader.js";
import { useProduk } from "../context/ProdukContext.jsx";

const JENIS_MAP = {
    "Laporan Hasil Akhir": "akhir",
    "Laporan User": "user",
    "Laporan Barang Masuk": "masuk",
    "Laporan Barang Keluar": "keluar",
};
const VALUE_TO_LABEL = Object.fromEntries(Object.entries(JENIS_MAP).map(([k, v]) => [v, k]));

function Laporan() {
    const [jenis, setJenis] = useState("akhir");
    const [dari, setDari] = useState("");
    const [sampai, setSampai] = useState("");
    const [activeTab, setActiveTab] = useState("akhir");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { barangMenipisCount, loading: produkLoading } = useProduk();

    const fetchLaporan = async (targetJenis = jenis) => {
        setLoading(true);
        setError("");
        try {
            const res = await laporanApi({ jenis: targetJenis, dari: dari || undefined, sampai: sampai || undefined });
            setResult(res);
            setActiveTab(targetJenis);
        } catch (e) {
            setError(e.response?.data?.message || e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchLaporan("akhir"); }, []);

    const handleTampilkan = () => fetchLaporan(jenis);
    const handleTabClick = (v) => { setJenis(v); fetchLaporan(v); };

    const fmtDate = (d) => d ? new Date(d).toLocaleDateString("id-ID") : "-";
    const fmtDateTime = (d) => d ? new Date(d).toLocaleString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "-";
    const fmtRp = (n) => `Rp ${Number(n || 0).toLocaleString("id-ID")}`;
    const dataUser = result?.jenis === "user" ? result.data : [];
    const dataMasuk = result?.jenis === "masuk" ? result.data : [];
    const dataKeluar = result?.jenis === "keluar" ? result.data : [];
    const dataAkhir = result?.jenis === "akhir" ? result.data : null;


    return (
        <section className="mb-5 container-fluid">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                {/* Filter Header */}
                <div className="bg-white p-3 border-bottom">
                    <div className="row g-2 align-items-end">
                        <div className="col-md-3 mb-3">
                            <label className="form-label small text-muted">Jenis Laporan</label>
                            <select className="form-select form-select-sm rounded-3" value={Object.keys(JENIS_MAP).find(k => JENIS_MAP[k] === jenis)} onChange={e => setJenis(JENIS_MAP[e.target.value])}>
                                <option>Laporan Hasil Akhir</option>
                                <option>Laporan User</option>
                                <option>Laporan Barang Masuk</option>
                                <option>Laporan Barang Keluar</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted mb-1">Dari Tanggal</label>
                            <div className="input-group input-group-sm">
                                <input type="date" className="form-control" value={dari} onChange={e => setDari(e.target.value)} />
                                {/* <span className="input-group-text bg-white"><i className="bi bi-calendar"></i></span> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted mb-1">Sampai Tanggal</label>
                            <div className="input-group input-group-sm">
                                <input type="date" className="form-control" value={sampai} onChange={e => setSampai(e.target.value)} />
                                {/* <span className="input-group-text bg-white"><i className="bi bi-calendar"></i></span> */}
                            </div>
                        </div>
                        <div className="col-md-3 d-flex gap-1 mb-3">
                            <button className="btn btn-dark btn-sm w-100 rounded-3" onClick={handleTampilkan} disabled={loading}>{loading ? "Memuat..." : "Tampilkan"}</button>
                            <div className="dropdown w-100">
                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle w-100 rounded-3"
                                    type="button" data-bs-toggle="dropdown">Export</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">PDF</a></li>
                                    <li><a className="dropdown-item" href="#">Excel</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub Navigation Tabs */}
                <div className="bg-light p-3 border-bottom">
                    <ul className="nav nav-pills gap-2" role="tablist">
                        <li className="nav-item"><button className={`nav-link btn-sm rounded-3 px-3 py-2 border fw-medium ${activeTab === "user" ? "active bg-white text-dark shadow-sm" : "bg-white text-dark"}`} onClick={() => handleTabClick("user")} type="button">Laporan User</button></li>
                        <li className="nav-item"><button className={`nav-link btn-sm rounded-3 px-3 py-2 border fw-medium ${activeTab === "masuk" ? "active bg-white text-dark shadow-sm" : "bg-white text-dark"}`} onClick={() => handleTabClick("masuk")} type="button">Laporan Barang Masuk</button></li>
                        <li className="nav-item"><button className={`nav-link btn-sm rounded-3 px-3 py-2 border fw-medium ${activeTab === "keluar" ? "active bg-white text-dark shadow-sm" : "bg-white text-dark"}`} onClick={() => handleTabClick("keluar")} type="button">Laporan Barang Keluar</button></li>
                        <li className="nav-item"><button className={`nav-link btn-sm rounded-3 px-3 py-2 border fw-medium ${activeTab === "akhir" ? "active bg-white text-dark shadow-sm" : "bg-white text-dark"}`} onClick={() => handleTabClick("akhir")} type="button">Laporan Hasil Akhir</button></li>
                    </ul>
                </div>
                {error && <div className="alert alert-danger py-2 small m-3 mb-0">{error}</div>}
                {/* Tab Content Area */}
                <div className="p-4 bg-white">
                    {loading && <div className="text-center py-4"><div className="spinner-border spinner-border-sm"></div> <span className="small text-muted ms-2">Memuat laporan...</span></div>}
                    {!loading && activeTab === "user" && (
                        <div>
                            <h6 className="fw-bold mb-3">LAPORAN USER</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Nama User</th>
                                            <th>Role</th>
                                            <th>Email</th>
                                            <th>Login</th>
                                            <th>Logout</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataUser.length === 0 ? <tr><td colSpan={6} className="text-muted">Tidak ada data</td></tr> : dataUser.map((u, i) => (
                                            <tr key={u.id_user}><td>{i + 1}</td><td>{u.username}</td><td>{u.role}</td><td>{u.email}</td><td>{fmtDateTime(u.last_login)}</td><td>{fmtDateTime(u.last_logout)}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {!loading && activeTab === "masuk" && (
                        <div>
                            <h6 className="fw-bold mb-3">LAPORAN BARANG MASUK</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light"><tr><th>No</th><th>Tanggal</th><th>Nama Produk</th><th>Jumlah Masuk</th><th>Keterangan</th></tr></thead>
                                    <tbody>
                                        {dataMasuk.length === 0 ? <tr><td colSpan={5} className="text-muted">Tidak ada data</td></tr> : dataMasuk.map((r, i) => (
                                            <tr key={r.id_masuk}><td>{i + 1}</td><td>{fmtDate(r.tanggal)}</td><td>{r.Produk?.nama_produk || "-"}</td><td>{r.qty}</td><td>{r.laporan?.keterangan || "-"}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {!loading && activeTab === "keluar" && (
                        <div>
                            <h6 className="fw-bold mb-3">LAPORAN BARANG KELUAR</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light"><tr><th>No</th><th>Tanggal</th><th>Nama Produk</th><th>Jumlah Keluar</th><th>Total Harga</th></tr></thead>
                                    <tbody>
                                        {dataKeluar.length === 0 ? <tr><td colSpan={5} className="text-muted">Tidak ada data</td></tr> : dataKeluar.map((r, i) => (
                                            <tr key={r.id_keluar}><td>{i + 1}</td><td>{fmtDate(r.tanggal)}</td><td>{r.Produk?.nama_produk || "-"}</td><td>{r.qty}</td><td>{fmtRp((r.Produk?.harga || 0) * r.qty)}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {activeTab === "akhir" && (
                        <div>
                            <h6 className="fw-bold mb-3">LAPORAN HASIL AKHIR</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-md-3"><div className="card border p-3 rounded-3 shadow-sm"><span className="text-muted small">Total Penjualan</span><h4 className="fw-bold text-dark mt-1 mb-0" style={{minHeight:"45px"}}>{loading ? "..." : fmtRp(dataAkhir?.summary?.totalPenjualan ?? 0)}</h4></div></div>
                                <div className="col-md-3"><div className="card border p-3 rounded-3 shadow-sm"><span className="text-muted small">Total Barang Terjual</span><h4 className="fw-bold text-dark mt-1 mb-0" style={{minHeight:"45px"}}>{loading ? "..." : `${dataAkhir?.summary?.totalBarangTerjual ?? 0} item`}</h4></div></div>
                                <div className="col-md-3"><div className="card border p-3 rounded-3 shadow-sm"><span className="text-muted small">Barang Menipis</span><h4 className="fw-bold text-dark mt-1 mb-0" id="barang-menipis">{produkLoading && !dataAkhir ? "..." : `${barangMenipisCount || dataAkhir?.summary?.barangMenipis || 0} produk`}</h4><small className="text-muted" style={{ fontSize: "0.7rem" }}>status: menipis (stok 1-10)</small></div></div>
                                <div className="col-md-3"><div className="card border p-3 rounded-3 shadow-sm"><span className="text-muted small">Total Transaksi</span><h4 className="fw-bold text-dark mt-1 mb-0" style={{minHeight:"45px"}}>{loading ? "..." : `${dataAkhir?.summary?.totalTransaksi ?? 0} transaksi`}</h4></div></div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light"><tr><th>No</th><th>Tanggal</th><th>Kasir</th><th>Total</th><th>Item</th></tr></thead>
                                    <tbody>
                                        {!dataAkhir || dataAkhir.transaksiList.length === 0 ? <tr><td colSpan={5} className="text-muted">Tidak ada transaksi</td></tr> : dataAkhir.transaksiList.map((t, i) => (
                                            <tr key={t.id_transaksi}><td>{i + 1}</td><td>{fmtDate(t.tanggal_transaksi)}</td><td>{t.User?.username || t.id_user}</td><td>{fmtRp(t.total_bayar)}</td><td>{t.detail_transaksis?.map(d => `${d.Produk?.nama_produk} x${d.qty}`).join(", ") || "-"}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Laporan;