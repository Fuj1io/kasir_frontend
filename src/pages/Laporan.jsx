
function Laporan() {
    return (
        <section className="mb-5 container-fluid">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                {/* Filter Header  */}
                <div className="bg-white p-3 border-bottom">
                    <div className="row g-2 align-items-end">
                        <div className="col-md-3 mb-3" >
                            <label className="form-label small text-muted ">Jenis Laporan</label>
                            <select className="form-select form-select-sm rounded-3">
                                <option selected>Laporan Hasil Akhir</option>
                                <option>Laporan User</option>
                                <option>Laporan Barang Masuk</option>
                                <option>Laporan Barang Keluar</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted mb-1">Dari Tanggal</label>
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" value="01/05/2024"></input>
                                <span className="input-group-text bg-white"><i className="bi bi-calendar"></i></span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted mb-1">Sampai Tanggal</label>
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" value="31/05/2024"></input>
                                <span className="input-group-text bg-white"><i className="bi bi-calendar"></i></span>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex gap-1 mb-3">
                            <button className="btn btn-dark btn-sm w-100 rounded-3">Tampilkan</button>
                            <div className="dropdown w-100">
                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle w-100 rounded-3"
                                    type="button" data-bs-toggle="dropdown">Export</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">PDF</a></li>
                                    <li><a className="dropdown-item" href="#">Excel</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub Navigation Tabs */}
                <div className="bg-light p-3 border-bottom">
                    <ul className="nav nav-pills gap-2" id="reportTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active btn-sm rounded-3 px-3 py-2 bg-white text-dark border fw-medium shadow-sm"
                                id="tab-user" data-bs-toggle="pill" data-bs-target="#content-user" type="button">
                                Laporan User</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-sm rounded-3 px-3 py-2 bg-white text-dark border fw-medium"
                                id="tab-masuk" data-bs-toggle="pill" data-bs-target="#content-masuk" type="button">
                                Laporan Barang Masuk</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-sm rounded-3 px-3 py-2 bg-white text-dark border fw-medium"
                                id="tab-keluar" data-bs-toggle="pill" data-bs-target="#content-keluar" type="button">
                                Laporan Barang Keluar</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link btn-sm rounded-3 px-3 py-2 bg-white text-dark border fw-medium"
                                id="tab-akhir" data-bs-toggle="pill" data-bs-target="#content-akhir" type="button">
                                Laporan Hasil Akhir</button>
                        </li>
                    </ul>
                </div>
                {/* Tab Content Area  */}
                <div className="p-4 bg-white">
                    <div className="tab-content" id="reportTabsContent">

                        {/* 4.1 Laporan User */}
                        <div className="tab-pane fade show " id="content-user" role="tabpanel">
                            <h6 className="fw-bold mb-3"> LAPORAN USER</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Nama User</th>
                                            <th>Role</th>
                                            <th>Aktivitas</th>
                                            <th>Login</th>
                                            <th>Logout</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Admin</td>
                                            <td>Admin</td>
                                            <td>Login</td>
                                            <td>08:00</td>
                                            <td>12:00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Kasir 1</td>
                                            <td>Kasir</td>
                                            <td>Transaksi</td>
                                            <td>08:05</td>
                                            <td>12:00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Kasir 2</td>
                                            <td>Kasir</td>
                                            <td>Tambah Produk</td>
                                            <td>10:15</td>
                                            <td>14:30</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Admin</td>
                                            <td>Admin</td>
                                            <td>Laporan</td>
                                            <td>13:00</td>
                                            <td>15:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 4.2 Laporan Barang Masuk  */}
                        <div className="tab-pane fade" id="content-masuk" role="tabpanel">
                            <h6 className="fw-bold mb-3">2. LAPORAN BARANG MASUK</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Tanggal</th>
                                            <th>Nama Produk</th>
                                            <th>Jumlah Masuk</th>
                                            <th>Supplier</th>
                                            <th>Admin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>02/05/2024</td>
                                            <td>Aqua 600ml</td>
                                            <td>50</td>
                                            <td>Agen Sumber</td>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>05/05/2024</td>
                                            <td>Keripik Kentang</td>
                                            <td>30</td>
                                            <td>Agen Sumber</td>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>07/05/2024</td>
                                            <td>Kopi Sachet</td>
                                            <td>20</td>
                                            <td>Agen Makmur</td>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>10/05/2024</td>
                                            <td>Nasi Goreng</td>
                                            <td>25</td>
                                            <td>Agen Makmur</td>
                                            <td>Admin</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 4.3 Laporan Barang Keluar  */}
                        <div className="tab-pane fade" id="content-keluar" role="tabpanel">
                            <h6 className="fw-bold mb-3">3. LAPORAN BARANG KELUAR</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle text-center small">
                                    <thead className="table-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Tanggal</th>
                                            <th>Nama Produk</th>
                                            <th>Jumlah Keluar</th>
                                            <th>Total Harga</th>
                                            <th>Kasir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>10/05/2024</td>
                                            <td>Nasi Goreng</td>
                                            <td>5</td>
                                            <td>Rp 75.000</td>
                                            <td>Kasir 1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>10/05/2024</td>
                                            <td>Es Teh Manis</td>
                                            <td>10</td>
                                            <td>Rp 50.000</td>
                                            <td>Kasir 1</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>10/05/2024</td>
                                            <td>Keripik Kentang</td>
                                            <td>8</td>
                                            <td>Rp 56.000</td>
                                            <td>Kasir 2</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>10/05/2024</td>
                                            <td>Aqua 600ml</td>
                                            <td>6</td>
                                            <td>Rp 24.000</td>
                                            <td>Kasir 2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 4.4 Laporan Hasil Akhir  */}
                        <div className="tab-pane fade" id="content-akhir" role="tabpanel">
                            <h6 className="fw-bold mb-3">4. LAPORAN HASIL AKHIR</h6>
                            {/* Summary Cards */}
                            <div className="row g-3 mb-4">
                                <div className="col-md-3">
                                    <div className="card border p-3 rounded-3 shadow-sm">
                                        <span className="text-muted small">Total Penjualan</span>
                                        <h4 className="fw-bold text-dark mt-1 mb-0">Rp 2.500.000</h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border p-3 rounded-3 shadow-sm">
                                        <span className="text-muted small">Total Barang Terjual</span>
                                        <h4 className="fw-bold text-dark mt-1 mb-0">320 item</h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border p-3 rounded-3 shadow-sm">
                                        <span className="text-muted small">Barang Menipis</span>
                                        <h4 className="fw-bold text-dark mt-1 mb-0">4 produk</h4>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card border p-3 rounded-3 shadow-sm">
                                        <span className="text-muted small">Total Transaksi</span>
                                        <h4 className="fw-bold text-dark mt-1 mb-0">85 transaksi</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Laporan;