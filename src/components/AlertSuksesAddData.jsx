import React from 'react'

function AlertSuksesAddData({ message, variant = "success", onClose }) {
    const isSuccess = variant === "success";

    console.log(message)
    return (
        <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(75, 72, 72, 0.5)", zIndex: 1060, padding: "16px", text: "center" }} onClick={onClose}>
            <div className={`alert card border ${isSuccess ? "border-success-subtle bg-white bg-opacity-0" : "border-danger-subtle bg-danger bg-opacity-10"} rounded-4 p-4 shadow-sm`}
                style={{ maxWidth: 480 + "px", width: "100%" }} role='alert' onClick={(e) => e.stopPropagation()}>
                <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                        <div className={`${isSuccess ? "bg-success" : "bg-danger"} text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0`}
                            style={{ width: 48 + "px", height: 48 + "px", fontSize: 1.5 + "rem" }}>
                            <i className={`bi ${isSuccess ? "bi-check" : "bi-x-lg"}`}></i>
                        </div>
                        <div>
                            <h5 className={`fw-bold ${isSuccess ? "text-success" : "text-danger"} mb-1`}>{isSuccess ? "Berhasil Add Data!" : "Gagal!"}</h5>
                            <p className="mb-3 text-dark">{message}</p>
                            <button type="button"
                                className="btn btn-outline-secondary bg-white text-dark border px-4 rounded-3" onClick={onClose}>Tutup</button>
                        </div>
                    </div>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                </div>
            </div>
        </div>
    )
}

export default AlertSuksesAddData;