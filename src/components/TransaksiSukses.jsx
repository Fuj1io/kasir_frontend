import React from 'react'

function TransaksiSukses() {
    return (
        <section className="mb-5">
            <div className="card shadow border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: 500 + "px" }}>
                <div className="text-center mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-white border border-dark rounded-circle"
                        style={{ width: 80 + "px", height: 80 + "px" }}>
                        <i className="bi bi-check-lg fs-1 text-dark"></i>
                    </div>
                    <h3 className="fw-bold mt-3 mb-1">Transaksi Berhasil!</h3>
                    <p className="text-muted mb-0">Terima kasih telah berbelanja</p>
                </div>
                <div className="border rounded-3 p-3 mb-3 bg-white">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Total Belanja</span>
                        {/* edit         */}              <span className="fw-semibold">Rp 32.000</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-secondary">Uang Dibayar</span>
                        {/* edit         */}<span className="fw-semibold">Rp 50.000</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-dark fs-5">Kembalian</span>
                        {/* edit         */}<span className="fw-bold text-success fs-5">Rp 18.000</span>
                    </div>
                </div>
                <button type="button"
                    className="btn btn-success btn-lg w-100 mb-2 rounded-3 py-2 fw-medium d-flex align-items-center justify-content-center gap-2">
                    {/* edit         */}                <i className="bi bi-cash-stack"></i> Kembalian: Rp 18.000
                </button>
                <button type="button"
                    className="btn btn-secondary btn-lg w-100 rounded-3 py-2 fw-medium bg-secondary text-white">
                    OK (Transaksi Baru)
                </button>
            </div>
        </section >
    )
}

export default TransaksiSukses