import React from 'react'

function keranjang() {
    return (
        <section className="cart-area d-flex flex-column">
            {/* <!-- CART HEADER --> */}
            <div className="cart-header d-flex align-items-center justify-content-between px-3">
                <span className="cart-title">
                    Keranjang
                </span>
                <button className="btn btn-sm p-0 border-0" title="Hapus keranjang">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-sm mb-0 cart-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Harga</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- ITEM 1 --> */}
                        <tr>
                            <td>
                                Nasi Goreng
                            </td>
                            <td>
                                Rp 15.000
                            </td>
                            <td>
                                <div className="qty-control">
                                    <button>
                                        −
                                    </button>
                                    <span className="qty-number">
                                        1
                                    </span>
                                    <button>
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                Rp 15.000
                            </td>
                            <td>
                                <button className="btn btn-sm p-0 border-0">
                                    ×
                                </button>
                            </td>
                        </tr>
                        {/* <!-- ITEM 2 --> */}
                        <tr>
                            <td>
                                Es Teh Manis
                            </td>
                            <td>
                                Rp 5.000
                            </td>
                            <td>
                                <div className="qty-control">
                                    <button>
                                        −
                                    </button>
                                    <span className="qty-number">
                                        2
                                    </span>
                                    <button>
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                Rp 10.000
                            </td>
                            <td>
                                <button className="btn btn-sm p-0 border-0">
                                    ×
                                </button>
                            </td>
                        </tr>
                        {/* <!-- ITEM 3 --> */}
                        <tr>
                            <td>
                                Keripik Kentang
                            </td>
                            <td>
                                Rp 7.000
                            </td>
                            <td>
                                <div className="qty-control">
                                    <button>
                                        −
                                    </button>
                                    <span className="qty-number">
                                        1
                                    </span>
                                    <button>
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                Rp 7.000
                            </td>
                            <td>
                                <button className="btn btn-sm p-0 border-0">
                                    ×
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <!-- CART SUMMARY --> */}
            <div className="cart-summary mt-auto p-3">
                {/* <!-- TOTAL --> */}
                <div className="d-flex justify-content-between mb-3">
                    <span className="summary-label fw-semibold">
                        Total
                    </span>
                    <span className="summary-value">
                        Rp 32.000
                    </span>
                </div>
                {/* <!-- UANG DIBAYAR --> */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="summary-label">
                        Uang Dibayar
                    </span>
                    <input type="text" className="form-control payment-input" value="50.000"
                        style={{ width: 190 + 'px' }}></input>
                </div>
                {/* <!-- KEMBALIAN --> */}
                <div className="d-flex justify-content-between mb-3">
                    <span className="summary-label fw-semibold">
                        Kembalian
                    </span>
                    <span className="summary-value">
                        Rp 18.000
                    </span>
                </div>
                {/* <!-- PAY BUTTON --> */}
                <button type="button" className="btn btn-dark pay-button w-100">
                    <i className="bi bi-credit-card me-2"></i>
                    BAYAR
                </button>
            </div>
        </section>
    )
}

export default keranjang;