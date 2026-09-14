import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import ButtonPay from "../components/ButtonPay.jsx";
import AlertTransaksi from "../components/AlertTransaksi.jsx";
import { transaksiApi } from "../services/loader.js";

function Keranjang({ onSuccess }) {
    const { cartItems, updateQty, removeFromCart, clearCart } = useCart();
    const [bayar, setBayar] = useState('');
    const [alertState, setAlertState] = useState(null); // { type: 'success' | 'danger', title: '', message: '' }

    const total = cartItems.reduce((acc, item) => acc + item.harga * item.qty, 0);
    const nominalBayar = parseInt(bayar.replace(/\D/g, '')) || 0;
    const kembalian = nominalBayar > total ? nominalBayar - total : 0;

    const [isPaying, setIsPaying] = useState(false);

    const handlePay = async () => {
        if (cartItems.length === 0) {
            setAlertState({
                type: 'danger',
                title: 'Transaksi Gagal!',
                message: 'Keranjang belanja masih kosong.'
            });
            return;
        }

        if (nominalBayar < total) {
            setAlertState({
                type: 'danger',
                title: 'Pembayaran Gagal!',
                message: `Uang dibayar kurang dari total belanja (Kurang Rp ${(total - nominalBayar).toLocaleString("id-ID")}).`
            });
            return;
        }

        setIsPaying(true);
        try {
            await transaksiApi(cartItems.map((item) => ({
                id_produk: item.id_produk,
                qty: item.qty
            })));

            setAlertState({
                type: 'success',
                title: 'Pembayaran Berhasil!',
                message: 'Transaksi dan detailnya berhasil disimpan.',
                total,
                paid: nominalBayar,
                change: kembalian
            });
            clearCart();
            setBayar('');
            onSuccess?.();
            window.dispatchEvent(new Event("produk:refresh"));
        } catch (error) {
            setAlertState({
                type: 'danger',
                title: 'Transaksi Gagal!',
                message: error.response?.data?.message || 'Transaksi tidak dapat disimpan.'
            });
        } finally {
            setIsPaying(false);
        }
    };

    return (
        <section className="cart-area d-flex flex-column">
            {alertState && (
                <AlertTransaksi 
                    type={alertState.type}
                    title={alertState.title}
                    message={alertState.message}
                    total={alertState.total}
                    paid={alertState.paid}
                    change={alertState.change}
                    onClose={() => setAlertState(null)}
                />
            )}

            {/* <!-- CART HEADER --> */}
            <div className="cart-header d-flex align-items-center justify-content-between px-3">
                <span className="cart-title">
                    Keranjang {cartItems.length > 0 && `(${cartItems.length})`}
                </span>
                <button 
                    className="btn btn-sm p-0 border-0" 
                    title="Hapus keranjang"
                    onClick={clearCart}
                    disabled={cartItems.length === 0}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>

            <div className="table-responsive" style={{ maxHeight: "40vh", overflowY: "auto" }}>
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
                        {cartItems.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center text-muted py-3">
                                    Keranjang kosong
                                </td>
                            </tr>
                        ) : (
                            cartItems.map((item) => (
                                <tr key={item.id_produk}>
                                    <td>{item.nama_produk}</td>
                                    <td>Rp {item.harga?.toLocaleString("id-ID")}</td>
                                    <td>
                                        <div className="qty-control d-flex align-items-center gap-1">
                                            <button onClick={() => updateQty(item.id_produk, -1)}>−</button>
                                            <span className="qty-number">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id_produk, 1)}>+</button>
                                        </div>
                                    </td>
                                    <td>Rp {(item.harga * item.qty)?.toLocaleString("id-ID")}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm p-0 border-0 text-danger"
                                            onClick={() => removeFromCart(item.id_produk)}
                                        >
                                            ×
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
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
                    <span className="summary-value fw-bold text-primary">
                        Rp {total.toLocaleString("id-ID")}
                    </span>
                </div>

                {/* <!-- UANG DIBAYAR --> */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="summary-label">
                        Uang Dibayar
                    </span>
                    <input 
                        type="text" 
                        className="form-control payment-input text-end" 
                        placeholder="0"
                        value={bayar}
                        onChange={(e) => setBayar(e.target.value)}
                        style={{ width: '150px' }}
                    />
                </div>

                {/* <!-- KEMBALIAN --> */}
                <div className="d-flex justify-content-between mb-3">
                    <span className="summary-label fw-semibold">
                        Kembalian
                    </span>
                    <span className="summary-value">
                        Rp {kembalian.toLocaleString("id-ID")}
                    </span>
                </div>

                {/* <!-- PAY BUTTON --> */}
                <ButtonPay 
                    disabled={cartItems.length === 0 || isPaying}
                    onClick={handlePay}
                />
            </div>
        </section>
    );
}

export default Keranjang;