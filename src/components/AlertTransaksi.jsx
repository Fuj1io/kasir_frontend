import "../styles/components/alertSuccess.css";

function AlertTransaksi({ type = "success", title, message, onClose }) {
    const isSuccess = type === "success";

    return (
        <div 
            className={`alert card ${isSuccess ? "success-alert border-success" : "danger-alert border-danger"} shadow-lg position-fixed top-50 start-50 translate-middle z-3 text-center bg-light`} 
            style={{ maxWidth: "380px", width: "90%" }}
            role="alert"
        >
            <div className="card-body p-3">
                <div className="d-flex gap-3 align-items-start">
                    <div className={`rounded-circle d-flex align-items-center justify-content-center p-2 text-white ${isSuccess ? "bg-success" : "bg-danger"}`}>
                        <i className={`bi ${isSuccess ? "bi-check-lg" : "bi-x-lg"}`}></i>
                    </div>

                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-1">
                            <span className={`alert-title fw-bold text-center flex-grow-1 ${isSuccess ? "text-success" : "text-danger"}`}>
                                {title || (isSuccess ? "Transaksi Berhasil!" : "Transaksi Gagal!")}
                            </span>
                            <button 
                                className="btn btn-close btn-sm border-0 p-0 btn-close-custom" 
                                aria-label="Close" 
                                onClick={onClose}
                            >
                            </button>
                        </div>

                        <p className="alert-text mb-0 text-muted small">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertTransaksi;