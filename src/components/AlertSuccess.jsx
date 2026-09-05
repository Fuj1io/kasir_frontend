import "../styles/components/alertSuccess.css";

function AlertSuccess() {
    return (
        <div className="alert  card success-alert shadow-sm" role="alert">
            <div className="card-body p-3">

                <div className="d-flex gap-3 align-items-start">

                    <div className="success-icon">
                        <i className="bi bi-check-lg"></i>
                    </div>

                    <div className="flex-grow-1">

                        <div className="d-flex justify-content-between align-items-start mb-1">

                            <span className="alert-title">
                                Berhasil!
                            </span>

                            <button className="btn btn-close btn-sm border-0 p-0 btn-close-custom" aria-label="Close" data-bs-dismiss="alert">
                                <i className="bi bi-x-lg"></i>
                            </button>

                        </div>

                        <p className="alert-text mb-3">
                            Produk "Nasi Goreng"<br />
                            berhasil ditambahkan
                        </p>

                        <button className="btn btn-outline-secondary btn-view w-100">
                            Lihat Produk
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AlertSuccess;