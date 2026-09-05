import React from 'react'

function AlertSuksesAddData() {
    return (
        <section className="mb-5">
            <div className="alert card border border-success-subtle bg-success bg-opacity-10 rounded-4 p-4 mx-auto shadow-sm"
                style={{ maxWidth: 480 + "px" }} role='alert'>
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-start gap-3">
                        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{ width: 48 + "px", height: 48 + "px", fontSize: 1.5 + "rem" }}>
                            <i className="bi bi-check"></i>
                        </div>
                        <div>
                            <h5 className="fw-bold text-success mb-1">Berhasil!</h5>
                            <p className="mb-3 text-dark">Produk "Nasi Goreng"<br />berhasil ditambahkan</p>
                            <button type="button"
                                className="btn btn-outline-secondary bg-white text-dark border px-4 rounded-3">Lihat
                                Produk</button>
                        </div>
                    </div>
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="alert"></button>
                </div>
            </div>
        </section>
    )
}

export default AlertSuksesAddData;