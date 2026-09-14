import { useState, useRef, useEffect } from 'react';
import { Modal } from "bootstrap";
import { tambahProdukApi, updateProdukApi } from "../services/loader.js";

function FormProduk({ onSaved, onFailed, initialData = null }) {
    const [form, setForm] = useState({
        nama_produk: initialData?.nama_produk || "",
        kategori: initialData?.id_kategori ? String(initialData.id_kategori) : "",
        harga: initialData?.harga ? String(initialData.harga) : "",
        stok: initialData?.stok !== undefined ? String(initialData.stok) : "0",
    });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const modalRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const isEdit = !!initialData;

    useEffect(() => {
        if (initialData) {
            setForm({
                nama_produk: initialData.nama_produk || "",
                kategori: initialData.id_kategori ? String(initialData.id_kategori) : "",
                harga: initialData.harga ? String(initialData.harga) : "",
                stok: initialData.stok !== undefined ? String(initialData.stok) : "0",
            });
        } else {
            setForm({ nama_produk: "", kategori: "", harga: "", stok: "0" });
            setError("");
        }
    }, [initialData]);

    const adjustStok = (delta) => {
        setForm((prev) => ({ ...prev, stok: String(Math.max(0, Number(prev.stok) + delta)) }));
    };

    const closeModal = () => {
        const el = modalRef.current;
        if (!el) return;
        const instance = Modal.getInstance(el);
        if (instance) instance.hide();
        else new Modal(el).hide();
        setTimeout(() => {
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
            document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const harga = Number(form.harga);
        const stok = Number(form.stok);
        if (!form.nama_produk.trim() || !form.kategori || harga < 0 || stok < 0) {
            setError("Lengkapi data produk dengan nilai yang valid.");
            return;
        }
        setSaving(true);
        try {
            const payload = {
                nama_produk: form.nama_produk.trim(),
                kategori: Number(form.kategori),
                harga,
                stok,
            };
            const result = isEdit
                ? await updateProdukApi(initialData.id_produk, payload)
                : await tambahProdukApi(payload);
            setForm({ nama_produk: "", kategori: "", harga: "", stok: "0" });
            closeModal();
            onSaved(result.message || result.msg || `Produk "${form.nama_produk.trim()}" berhasil ${isEdit ? "diupdate" : "ditambahkan"}`);
        } catch (err) {
            const msg = err.response?.data?.message || err.response?.data?.msg || `Produk gagal ${isEdit ? "diupdate" : "ditambahkan"}.`;
            setError(msg);
            closeModal();
            onFailed(msg);
        } finally {
            setSaving(false);
        }
    };
    return (
        <div className="modal fade" id="modalAdd" ref={modalRef} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 rounded-4 p-3">
                    <div className="modal-header border-0 pb-0">
                        <h5 className="fw-bold mb-0">{isEdit ? "Edit Data" : "Tambah"}</h5>
                        <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {error && <div className="alert alert-danger py-2">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold small">Nama Produk <span className="text-danger">*</span></label>
                                <input type="text" name="nama_produk" className="form-control rounded-3" placeholder="Masukkan nama produk" value={form.nama_produk} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold small">Kategori <span className="text-danger">*</span></label>
                                <select name="kategori" className="form-select rounded-3" value={form.kategori} onChange={handleChange} required>
                                    <option value="">Pilih kategori</option>
                                    <option value="1">Bahan Makanan</option>
                                    <option value="2">Makanan</option>
                                    <option value="3">Minuman</option>
                                    <option value="4">Snack</option>
                                    <option value="5">Kebutuhan Harian</option>
                                </select>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Harga <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light text-muted">Rp</span>
                                        <input type="number" min="0" name="harga" className="form-control" placeholder="Masukkan harga" value={form.harga} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Stok <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => adjustStok(-1)}>-</button>
                                        <input type="number" min="0" name="stok" className="form-control text-center" value={form.stok} onChange={handleChange} required />
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => adjustStok(1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 pt-2">
                                <button type="button" className="btn btn-light border w-50 rounded-3 py-2 fw-medium" data-bs-dismiss="modal">Batal</button>
                                <button type="submit" className="btn btn-dark w-50 rounded-3 py-2 fw-medium" disabled={saving}>
                                    {saving ? "Menyimpan..." : isEdit ? "Update" : "Simpan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormProduk;