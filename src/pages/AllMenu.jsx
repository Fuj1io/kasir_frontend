import Keranjang from "../pages/Keranjang.jsx";

function AllMenuMenu() {
    return (
        <>
            <section className="product-area flex-grow-1">

                {/* <!-- SEARCH --> */}
                <div className="input-group mb-2" >
                    <span className="input-group-text bg-white search-logo">
                        <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control search-box border-start-0"
                        placeholder="Cari produk..."></input>
                </div>


                {/* <!-- CATEGORY --> */}
                <div className="d-flex gap-2 mb-2 flex-wrap">

                    <button className="btn category-btn" >
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


                <div className="row row-cols-2 row-cols-md-4 g-2 " style={{ maxHeight: "70vh", overflowY: "auto" }} >

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


                    {/*  ==*/}
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
            < Keranjang />
        </>
    )
}

export default AllMenuMenu;