
function AlertAuthentication({ onClose }) {
  return (
       <div className="alert alert-success border border-success-subtle rounded-4 p-3 shadow-sm d-flex flex-column align-items-center position-fixed top-0 end-0 m-3 z-3" style={{ maxWidth: "420px" }} role="alert">
            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={onClose} aria-label="Close"></button>
                <div className="text-success lh-1" style={{ fontSize: "2.5rem" }}>
                    <i className="bi bi-box-arrow-left"></i>
                </div>

                <div className="text-dark text-center">
                    <h5 className="fw-bold mb-1 fs-5">Logout Berhasil</h5>
                    <p className="mb-0">Anda telah berhasil logout.</p>
                </div>
       </div>
  )
}

export default AlertAuthentication