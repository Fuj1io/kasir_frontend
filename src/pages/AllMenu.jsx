import { useEffect, useState } from "react";
import Keranjang from "../pages/Keranjang.jsx";
import { produkApi } from "../services/loader.js";

function AllMenuMenu() {
    const [produks, setProduks ] = useState([]);

    const fetchProduk = async() => {
      try {
        const response = await produkApi();
        setProduks(response.data);
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(() => {
        fetchProduk();
    }, []);

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
                                <button className="btn btn-sm btn-primary">+</button>
                            </div>
                        </div>
                    </div>
                        ))
                    }
</div>

            </section>
            < Keranjang />
        </>
    )
}

export default AllMenuMenu;