import React from 'react'

function KategoriButton() {
  return (
      <div className="d-flex gap-2 mb-2 flex-wrap">
                    <button className="btn category-btn">Semua</button>
                    <button className="btn btn-outline-secondary category-btn">Makanan</button>
                    <button className="btn btn-outline-secondary category-btn">Minuman</button>
                    <button className="btn btn-outline-secondary category-btn">Snack</button>

                    <div className="dropdown">
                        <button className="btn btn-outline-secondary category-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Lainnya..
                        </button>
                        <ul className="dropdown-menu shadow-sm border-0 mt-1">
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><i className="bi bi-tag text-muted"></i> Bumbu Dapur</a></li>
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><i className="bi bi-tag text-muted"></i> Kebutuhan Harian</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><i className="bi bi-list-ul text-muted"></i> Tampilkan Semua</a></li>
                        </ul>
                    </div>
                </div>
  )
}

export default KategoriButton;