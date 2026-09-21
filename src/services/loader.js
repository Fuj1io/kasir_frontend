import axios from "axios";

const urlUser = import.meta.env.VITE_USER_API;
const urlProduk = import.meta.env.VITE_PRODUK_API;
const urlTransaksi = import.meta.env.VITE_TRANSAKSI_API || urlProduk.replace(/\/produk\/?$/, "/transaksi");
const urlLaporan = import.meta.env.VITE_LAPORAN_API || urlProduk.replace(/\/produk\/?$/, "/laporan");

// API_USER
export const userApi = async (payload) => {
    const user = await axios.post(`${urlUser}/login`, payload, {
        withCredentials: true
    });
    return user.data;
};

//REGISTER-USER 
export const registerApi = async (payload) => {
    const res = await axios.post(`${urlUser}/register`, payload, {
        withCredentials: true
    });
    return res.data;
};

// API_PRODUK
export const produkApi = async (params = {}) => {
    const produk = await axios.get(`${urlProduk}`, { params, withCredentials: true });
    return produk.data;
};

// TAMBAH-PRODUK
export const tambahProdukApi = async (payload) => {
    const token = localStorage.getItem("authToken");
    const res = await axios.post(urlProduk, payload, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return res.data;
};

// UPDATE-PRODUK
export const updateProdukApi = async (id, payload) => {
    const token = localStorage.getItem("authToken");
    const res = await axios.put(`${urlProduk}/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return res.data;
};

// DELETE-PRODUK
export const deleteProdukApi = async (id) => {
    const token = localStorage.getItem("authToken");
    const res = await axios.delete(`${urlProduk}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return res.data;
};

// TRANSASKI
export const transaksiApi = async (items) => {
    const token = localStorage.getItem("authToken");
    const transaksi = await axios.post(urlTransaksi, { items }, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return transaksi.data;
};

// LAPORAN
export const laporanApi = async (params = {}) => {
    const token = localStorage.getItem("authToken");
    const res = await axios.get(urlLaporan, {
        params,
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
    });
    return res.data;
};


