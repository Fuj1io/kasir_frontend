import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { produkApi } from "../services/loader.js";

const ProdukContext = createContext(null);

export const ProdukProvider = ({ children }) => {
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProduk = useCallback(async () => {
        setLoading(true);
        try {
            const res = await produkApi({ limit: 1000 });
            // produkApi return {data:[], total,...} atau array langsung
            const list = Array.isArray(res) ? res : (res?.data || []);
            setProduk(list);
        } catch (e) {
            console.error("ProdukContext fetch gagal:", e?.response?.data || e.message);
            setProduk([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchProduk(); }, [fetchProduk]);

    const barangMenipisList = produk.filter((p) => p.status === "menipis" || (Number(p.stok) > 0 && Number(p.stok) <= 10));
    const barangMenipisCount = barangMenipisList.length; //  client filter, pindah ke backend count jika produk >1000

    return (
        <ProdukContext.Provider value={{ produk, barangMenipisList, barangMenipisCount, loading, refresh: fetchProduk }}>
            {children}
        </ProdukContext.Provider>
    );
};

export const useProduk = () => {
    const ctx = useContext(ProdukContext);
    if (!ctx) throw new Error("useProduk must inside ProdukProvider");
    return ctx;
};
