import axios from "axios";

const urlUser = import.meta.env.VITE_USER_API;
const urlProduk = import.meta.env.VITE_PRODUK_API;
const urlTransaksi = import.meta.env.VITE_TRANSAKSI_API || urlProduk.replace(/\/produk\/?$/, "/transaksi");
const urlLaporan = import.meta.env.VITE_LAPORAN_API || urlProduk.replace(/\/produk\/?$/, "/laporan");

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            const isAuthRoute = error.config?.url?.includes("/login") || error.config?.url?.includes("/register");
            if (!isAuthRoute) {
                localStorage.removeItem("authToken");
                window.dispatchEvent(new Event("auth:invalid"));
                if (window.location.pathname !== "/login") {
                    window.location.href = "/login";
                }
            }
        }
        return Promise.reject(error);
    }
);

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
    const res = await axios.post(urlProduk, payload, {
        withCredentials: true
    });
    return res.data;
};

// UPDATE-PRODUK
export const updateProdukApi = async (id, payload) => {
    const res = await axios.put(`${urlProduk}/${id}`, payload, {
        withCredentials: true
    });
    return res.data;
};

// DELETE-PRODUK
export const deleteProdukApi = async (id) => {
    const res = await axios.delete(`${urlProduk}/${id}`, {
        withCredentials: true
    });
    return res.data;
};

// TRANSASKI
export const transaksiApi = async (items) => {
    const transaksi = await axios.post(urlTransaksi, { items }, {
        withCredentials: true
    });
    return transaksi.data;
};

// LAPORAN
export const laporanApi = async (params = {}) => {
    const res = await axios.get(urlLaporan, {
        params,
        withCredentials: true
    });
    return res.data;
};


