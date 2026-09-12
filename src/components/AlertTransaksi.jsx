function AlertTransaksi({ type = "success", title = "Transaksi Berhasil!", message, total, paid, change, onClose }) {
    const isSuccess = type === "success";

    return (
        <section className="position-fixed top-50 start-50 translate-middle z-3" style={{ width: "min(500px, 90vw)" }}>
            <div className="card shadow border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: 500 + "px" }}>
                <div className="text-center mb-4">
                    <div className={`d-inline-flex align-items-center justify-content-center bg-white border border-${isSuccess ? "success" : "danger"} rounded-circle`}
                        style={{ width: 80 + "px", height: 80 + "px" }}>
                        <i className={`bi bi-${isSuccess ? "check-lg" : "x-lg"} fs-1 text-${isSuccess ? "success" : "danger"}`}></i>
                    </div>
                    <h3 className="fw-bold mt-3 mb-1">{title}</h3>
                    <p className="text-muted mb-0">{message || "Terima kasih telah berbelanja"}</p>
                </div>
                {isSuccess && <div className="border rounded-3 p-3 mb-3 bg-white">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Total Belanja</span>
                        <span className="fw-semibold">Rp {total?.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Uang Dibayar</span>
                        <span className="fw-semibold">Rp {paid?.toLocaleString("id-ID")}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-dark fs-5">Kembalian</span>
                        <span className="fw-bold text-success fs-5">Rp {change?.toLocaleString("id-ID")}</span>
                    </div>
                </div>}
                <button type="button"
                    className={`btn btn-${isSuccess ? "secondary" : "danger"} btn-lg w-100 rounded-3 py-2 fw-medium text-white`}
                    onClick={onClose}>
                    {isSuccess ? "OK (Transaksi Baru)" : "Tutup"}
                </button>
            </div>
        </section >
    )
}

export default AlertTransaksi;