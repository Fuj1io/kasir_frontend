import "../styles/homePage.css";

function HomePage() {
    return (
        <div className="d-flex" style={{ width: 100 + 'vw' }}>
            <aside className="sidebar d-flex flex-column">
                {/* <!-- BRAND --> */}
                <div className="brand d-flex align-items-center px-3 gap-2">
                    <i className="bi bi-shop brand-icon"></i>
                    <span className="brand-text">
                        KASIR UMKM
                    </span>
                </div>
                {/* <!-- MENU --> */}
                <nav className="nav flex-column p-2 gap-1">
                    {/* <!-- POS --> */}
                    <a href="/" type="button" onClick={(event) => event.preventDefault()} className="menu-item active d-flex align-items-center gap-2 px-2 py-2">
                        <i className="bi bi-cart3 menu-icon"></i>
                        <span className="menu-text">
                            Kasir (POS)
                        </span>
                    </a>
                    {/* <!-- STOK --> */}
                    <a href="#" className="menu-item d-flex align-items-center gap-2 px-2 py-2">
                        <i className="bi bi-box-seam menu-icon"></i>
                        <span className="menu-text">
                            Stok Produk
                        </span>
                        <span className="badge bg-danger rounded-pill ms-auto">
                            3
                        </span>
                    </a>
                    {/* <!-- LAPORAN --> */}
                    <a href="#" className="menu-item d-flex align-items-center gap-2 px-2 py-2">
                        <i className="bi bi-file-earmark-text menu-icon"></i>
                        <span className="menu-text">
                            Laporan
                        </span>
                    </a>
                    {/* <!-- PENGATURAN --> */}
                    <a href="#" className="menu-item d-flex align-items-center gap-2 px-2 py-2">
                        <i className="bi bi-gear menu-icon"></i>
                        <span className="menu-text">
                            Pengaturan
                        </span>
                    </a>
                </nav>
                {/* <!-- LOGOUT --> */}
                <div className="mt-auto p-3">
                    <a href="#" className="logout d-flex align-items-center gap-2">
                        <i className="bi bi-box-arrow-right"></i>
                        <span className="logout-text">
                            Logout
                        </span>
                    </a>
                </div>
            </aside>
            <main className="main-content flex-grow-1 d-flex flex-column">
                <header className="topbar d-flex align-items-center justify-content-between px-3">
                    <div className="d-flex align-items-center gap-3">
                        {/* <button className="btn btn-sm p-0 border-0" type="button">
                            <i className="bi bi-list fs-5"></i>
                        </button> */}
                        <span className="topbar-title">
                            Kasir (Point Of Sale)
                        </span>
                    </div>
                    {/* <!-- ADMIN --> */}
                    <div className="d-flex align-items-center gap-2">
                        <div className="admin-avatar">
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <select id="" className="form-select">
                            <option selected>Admin</option>
                            <option value="1">Fuji</option>
                        </select>
                    </div>
                </header>
                <div className="pos-content d-flex gap-3 p-3">

                    {/* PRODUCT AREA */}

                    <section className="product-area flex-grow-1">

                        {/* <!-- SEARCH --> */}
                        <div className="input-group mb-2">
                            <span className="input-group-text bg-white search-logo">
                                <i className="bi bi-search"></i>
                            </span>
                            <input type="text" className="form-control search-box border-start-0"
                                placeholder="Cari produk..."></input>
                        </div>


                        {/* <!-- CATEGORY --> */}
                        <div className="d-flex gap-2 mb-2 flex-wrap">

                            <button className="btn category-btn active">
                                Semua
                            </button>

                            <button className="btn btn-outline-secondary category-btn">
                                Makanan
                            </button>

                            <button className="btn btn-outline-secondary category-btn">
                                Minuman
                            </button>

                            <button className="btn btn-outline-secondary category-btn">
                                Snack
                            </button>

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


                        {/* <!-- PRODUCT LIST --> */}
                        <div className="row row-cols-2 row-cols-md-4 g-2">

                            {/* <!-- PRODUCT 1 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Nasi Goreng
                                        </div>

                                        <div className="product-price">
                                            Rp 15.000
                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- PRODUCT 2 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Mie Goreng
                                        </div>

                                        <div className="product-price">
                                            Rp 13.000
                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- PRODUCT 3 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Es Teh Manis
                                        </div>

                                        <div className="product-price">
                                            Rp 5.000
                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- PRODUCT 4 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Es Jeruk
                                        </div>

                                        <div className="product-price">
                                            Rp 6.000
                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- PRODUCT 5 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Aqua 600ml
                                        </div>

                                        <div className="product-price">
                                            Rp 4.000
                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- PRODUCT 6 --> */}
                            <div className="col">
                                <div className="product-card">

                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>

                                    <div className="px-2 py-1">

                                        <div className="product-name">
                                            Keripik Kentang
                                        </div>
                                        <div className="product-price">
                                            Rp 7.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- PRODUCT 7 --> */}
                            <div className="col">
                                <div className="product-card">
                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>
                                    <div className="px-2 py-1">
                                        <div className="product-name">
                                            Permen Mint
                                        </div>
                                        <div className="product-price">
                                            Rp 2.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- PRODUCT 8 --> */}
                            <div className="col">
                                <div className="product-card">
                                    <div className="product-image">
                                        <i className="bi bi-image"></i>
                                    </div>
                                    <div className="px-2 py-1">
                                        <div className="product-name">
                                            Kopi Sachet
                                        </div>
                                        <div className="product-price">
                                            Rp 3.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CART / KERANJANG */}
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
                </div>
            </main>
        </div>
    )
}

export default HomePage;