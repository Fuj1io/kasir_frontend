import React from 'react'

function AlertStokMenipis() {
    return (
        <div class="container" style={{ maxWidth: 420 + 'px' }}>
            {/* <!-- Alert Box --> */}
            <div class="alert alert-warning border border-warning-subtle rounded-4 p-3 shadow-sm d-flex align-items-start m-0" role="alert">

                {/* <!-- Icon Warning --> */}
                <div class="me-3 text-warning lh-1" style={{ fontSize: 2.5 + 'rem' }}>
                    <i class="bi bi-exclamation-triangle-fill"></i>
                </div>

                {/* <!-- Text Content --> */}
                <div class="flex-grow-1 text-dark">
                    <h5 class="fw-bold mb-1 fs-5">Stok Menipis!</h5>
                    <p class="mb-1">Produk "Es Teh Manis"<br />tersisa 3</p>
                    <p class="mb-0">Segera lakukan restok</p>
                </div>

                {/* <!-- Close Button --> */}
                <button type="button" class="btn-close ms-2" data-bs-dismiss="alert" aria-label="Close"></button>

            </div>
        </div>
    )
}

export default AlertStokMenipis;