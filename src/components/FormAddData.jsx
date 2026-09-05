import React from 'react'

function FormAddData() {
    return (
        // nanti dibuat modal NB:belum
        <section className="mb-5">
            <h4 className="text-secondary mb-3 border-bottom pb-2">3. Form Modal Tambah Produk</h4>
            <div className="card shadow border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: 520 + 'px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">Tambah Produk</h5>
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="alert"></button>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Nama Produk <span
                            className="text-danger">*</span></label>
                        <input type="text" className="form-control rounded-3" placeholder="Masukkan nama produk"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Kategori <span className="text-danger">*</span></label>
                        <select className="form-select rounded-3">
                            <option selected>Pilih kategori</option>
                            <option value="1">Makanan</option>
                            <option value="2">Minuman</option>
                        </select>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Harga <span className="text-danger">*</span></label>
                            <div className="input-group">
                                <span className="input-group-text bg-light text-muted">Rp</span>
                                <input type="text" className="form-control" placeholder="Masukkan harga"></input>
                            </div>
                        </div>
                        <div className="col-6">
                            <label className="form-label fw-semibold small">Stok <span className="text-danger">*</span></label>
                            <div className="input-group">
                                <button className="btn btn-outline-secondary" type="button">-</button>
                                <input type="text" className="form-control text-center" value="0"></input>
                                <button className="btn btn-outline-secondary" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Gambar Produk</label>
                        <div className="border border-2 border-dashed rounded-4 p-4 text-center bg-white"
                            style={{ borderStyle: "dashed !important" }}>
                            <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                            <p className="mb-1 text-dark fw-medium small mt-2">Drag & drop gambar di sini</p>
                            <p className="mb-0 text-muted small">atau <a href="#"
                                className="text-primary text-decoration-none">klik untuk upload</a></p>
                        </div>
                        <div className="form-text text-muted small mt-1">Format: JPG, PNG, WebP (Maks. 2MB)</div>
                    </div>
                    <div className="d-flex gap-2 pt-2">
                        <button type="button" className="btn btn-light border w-50 rounded-3 py-2 fw-medium">Batal</button>
                        <button type="submit" className="btn btn-dark w-50 rounded-3 py-2 fw-medium">Simpan Produk</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormAddData;