import axios from "axios";

const urlUser = import.meta.env.VITE_USER_API;
const urlProduk = import.meta.env.VITE_PRODUK_API;


// API_USER
export const userApi = async(payload) => {
const user = await axios.post(`${urlUser}/login`, payload, {
    withCredentials: true
});

return user.data;
}

// API_PRODUK
export const produkApi = async (payload) => {
    const produk = await axios.get(`${urlProduk}`, {withCredential: false});

    return produk.data;
}

export const produkAPi = async(params = {}) => {
    const produk = await axios.get(`${urlProduk}`, { params }, { withCredentials: false});

    return produk.data;
}
