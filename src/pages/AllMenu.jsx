import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router";
import { produkApi } from "../services/loader.js";

//component 
import Keranjang from "../pages/Keranjang.jsx";
import Search from "../components/Search.jsx";
import KategoriButton from "../components/KategoriButton.jsx";
import ButtonAddItem from "../components/ButtonAddItem.jsx";
import LoadingElement from "../components/LoadingElement.jsx";

function AllMenuMenu() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [produks, setProduks] = useState([]);
    const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState(() => searchParams.get("s") || "");
    const [kategori, setKategori] = useState(() => searchParams.get("kategori") || "Semua");
    const loadingRef = useRef(false);

    // fetching_Data_start
    const fetchProduk = useCallback(async (pageNum, query, cat) => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        setLoading(true);
        try {
            const params = { page: pageNum, limit: 20 };
            if (query) params.s = query;
            if (cat !== "Semua") params.kategori = cat;
            const response = await produkApi(params);
            const newProduk = response.data || [];
            setProduks((prev) => (pageNum === 1 ? newProduk : [...prev, ...newProduk]));
            setHasMore(pageNum < (response.totalPages || 1));
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
            loadingRef.current = false;
        }
    }, []);
    // fetching_Data_end

    // category_filter_start
    const handleSelectKategori = (selectedCat) => {
        if (selectedCat === kategori && produks.length > 0) return;
        if (selectedCat === "Semua") {
            setKeyword("");
        }
        setKategori(selectedCat);
        setPage(1);
        setHasMore(true);
    };
    // category_filter_end

    // search_data_start
    const handleSearch = (value) => {
        if (value === keyword && produks.length > 0) return;
        setKeyword(value);
        setPage(1);
        setHasMore(true);
    };
    const handleResetSearch = () => {
        setKeyword("");
        setPage(1);
        setHasMore(true);
    };
    // search_data_end

    useEffect(() => {
        const nextParams = new URLSearchParams();
        nextParams.set("page", String(page));
        nextParams.set("limit", "20");
        if (keyword) nextParams.set("s", keyword);
        if (kategori !== "Semua") nextParams.set("kategori", kategori);

        if (nextParams.toString() !== searchParams.toString()) {
            setSearchParams(nextParams, { replace: true });
        }
    }, [page, keyword, kategori, searchParams, setSearchParams]);

    useEffect(() => {
        fetchProduk(page, keyword, kategori);
    }, [page, keyword, kategori, fetchProduk]);

    // fetch ketikaScroll_start
    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 50 && hasMore && !loadingRef.current) {
            setPage((prev) => prev + 1);
        }
    };
    // fetch ketikaScroll_end

    return (
        <>
            <section className="product-area flex-grow-1">
                {/* <!-- SEARCH --> */}
                <Search initialValue={keyword} onSearch={handleSearch} />

                {/* <!-- CATEGORY --> */}
                <KategoriButton selectedKategori={kategori} onSelectKategori={handleSelectKategori} />

                {keyword && (
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="text-muted small">Hasil pencarian: <strong>{keyword}</strong></span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={handleResetSearch}>Hapus</button>
                    </div>
                )}

                {/* <!-- PRODUCT LIST --> */}
                <div className="row row-cols-2 row-cols-md-4 g-2 text-center" style={{ maxHeight: "70vh", overflowY: "auto" }} onScroll={handleScroll}>
                    {produks?.map((produk, index) => (
                        <div className="col" key={index}>
                            <div className="product-card" style={{minHeight: "150px"}}>
                                <div className="product-image">
                                    <i className="bi bi-image"></i>
                                </div>
                                <div className="px-2 py-1 ">
                                    <div className="product-name">{produk.nama_produk}</div>
                                    <div className="product-price py-2">Rp.{produk.harga}</div>
                                    <ButtonAddItem produk={produk} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {loading && <LoadingElement />}
                {!loading && produks.length === 0 && <div className="py-3 text-muted text-center">Tidak ada data ditemukan</div>}
                {!loading && !hasMore && produks.length > 0 && <div className="py-3 text-muted text-center">Semua data telah ditampilkan</div>}
            </section>
            <Keranjang />
        </>
    );
}

export default AllMenuMenu;