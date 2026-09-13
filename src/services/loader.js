import axios from "axios";

const urlUser = import.meta.env.VITE_USER_API;
const urlProduk = import.meta.env.VITE_PRODUK_API;
const urlTransaksi = import.meta.env.VITE_TRANSAKSI_API || urlProduk.replace(/\/produk\/?$/, "/transaksi");

// API_USER
export const userApi = async (payload) => {
    const user = await axios.post(`${urlUser}/login`, payload, {
        withCredentials: true
    });
    return user.data;
};

// API_PRODUK
export const produkApi = async (params = {}) => {
    const produk = await axios.get(`${urlProduk}`, { params, withCredentials: true });
    return produk.data;
};

export const tambahProdukApi = async (payload) => {
    const res = await axios.post(urlProduk, payload, { withCredentials: true });
    return res.data;
};

export const transaksiApi = async (items) => {
    const token = localStorage.getItem("authToken");
    const transaksi = await axios.post(urlTransaksi, { items }, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return transaksi.data;
};


