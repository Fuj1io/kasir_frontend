import React from 'react'

function AlertStokMenipis({ items = [], onClose }) {
    if (!items.length) return null;
    return (
        <div className="container" style={{ maxWidth: 420 + 'px', position: 'absolute', top: 250, right: 450, zIndex: 1055 }}>
            <div className="alert alert-warning border border-warning-subtle rounded-4 p-3 shadow-sm d-flex align-items-start m-0" role="alert">
                <div className="me-3 text-warning lh-1" style={{ fontSize: 2.5 + 'rem' }}>
                    <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
                <div className="flex-grow-1 text-dark">
                    <h5 className="fw-bold mb-1 fs-5">Stok Menipis! ({items.length} produk)</h5>
                    <div className="mb-1" style={{ maxHeight: 120, overflowY: 'auto' }}>
                        {items.map((p) => (
                            <div key={p.id_produk} className="small">Produk "{p.nama_produk}" tersisa {p.stok}</div>
                        ))}
                    </div>
                    <p className="mb-0 small">Segera lakukan restok</p>
                </div>
                <button type="button" className="btn-close ms-2" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default AlertStokMenipis;