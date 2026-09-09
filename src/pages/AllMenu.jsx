import { useEffect, useState, useCallback } from "react";
import Keranjang from "../pages/Keranjang.jsx";
import { produkApi } from "../services/loader.js";

function AllMenuMenu() {
    const [produks, setProduks] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchProduk = useCallback(async (pageNum) => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await produkApi({ page: pageNum, limit: 20 });
            const newProduk = response.data || [];
            
            setProduks((prev) => pageNum === 1 ? newProduk : [...prev, ...newProduk]);
            setHasMore(pageNum < response.totalPages);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    useEffect(() => {
        fetchProduk(page);
    }, [page]);

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (scrollHeight - scrollTop <= clientHeight + 50 && hasMore && !loading) {
            setPage((prev) => prev + 1);
        }
    };

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
                <div className="row row-cols-2 row-cols-md-4 g-2 text-center" style={{ maxHeight: "70vh", overflowY: "auto" }} onScroll={handleScroll}>
                    {/* <!-- PRODUCT 1 --> */}
                    {
                        produks?.map((produk, index) => (
                    <div className="col" key={index}>
                        <div className="product-card">
                            <div className="product-image">
                                <i className="bi bi-image"></i>
                            </div>
                            <div className="px-2 py-1">
                                <div className="product-name">
                                    {produk.nama_produk}
                                </div>
                                <div className="product-price">
                                Rp.{produk.harga}
                                </div>
                                <button className="btn btn-sm btn-outline-primary">+</button>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                 <div className="col">
                    {loading && <div className="text-center py-3">Loading...</div>}
                    {!hasMore && produks.length > 0 && <div className="text-center py-3 text-muted">Semua data telah ditampilkan</div>}
                        </div>
                </div>


            </section>
            < Keranjang />
        </>
    )
}

export default AllMenuMenu;