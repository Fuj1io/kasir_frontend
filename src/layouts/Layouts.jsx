import UserIsLogedIn from "../components/UserIsLogedIn";
import "../styles/homePage.css";
import { NavLink, Outlet } from "react-router";

function Layouts() {
    return (
        <div className="d-flex" style={{ width: 100 + 'vw' }}>
            <aside className="sidebar d-flex flex-column">
                {/* <!-- BRAND --> */}
                <div className="brand d-flex align-items-center px-3 gap-2">
                    <i className="bi bi-shop brand-icon"></i>
                    <span className="brand-text">
                        KASIR UMKM
                    </span>
                </div>
                {/* <!-- MENU --> */}
                <nav className="nav flex-column p-2 gap-1">
                    {/* <!-- POS --> */}
                    <NavLink to="/menu" className="menu-item d-flex align-items-center gap-2 px-2 py-2 ">
                        <i className="bi bi-cart3 menu-icon"></i>
                        <span className="menu-text">
                            Kasir (POS)
                        </span>
                    </NavLink>
                    {/* <!-- STOK --> */}
                    <NavLink to="/products/stok" className="menu-item d-flex align-items-center gap-2 px-2 py-2 ">
                        <i className="bi bi-box-seam menu-icon"></i>
                        <span className="menu-text">
                            Stok Produk
                        </span>
                        <span className="badge bg-danger rounded-pill ms-auto">
                            3
                        </span>
                    </NavLink>
                    {/* <!-- LAPORAN --> */}
                    <NavLink to="/laporan" className="menu-item d-flex align-items-center gap-2 px-2 py-2 ">
                        <i className="bi bi-file-earmark-text menu-icon"></i>
                        <span className="menu-text">
                            Laporan
                        </span>
                    </NavLink>
                    {/* <!-- PENGATURAN --> */}
                    <NavLink to="/pengaturan" className="menu-item d-flex align-items-center gap-2 px-2 py-2 ">
                        <i className="bi bi-gear menu-icon"></i>
                        <span className="menu-text">
                            Pengaturan
                        </span>
                    </NavLink>
                </nav>
                {/* <!-- LOGOUT --> */}
                <div className="mt-auto p-3">
                    <NavLink to="/logout" className="logout d-flex align-items-center gap-2 ">
                        <i className="bi bi-box-arrow-right"></i>
                        <span className="logout-text">
                            Logout
                        </span>
                    </NavLink>
                </div>
            </aside>
            <main className="main-content flex-grow-1 d-flex flex-column">
                <header className="topbar d-flex align-items-center justify-content-between px-3">
                    <div className="d-flex align-items-center gap-3">
                        {/* <button className="btn btn-sm p-0 border-0" type="button">
                            <i className="bi bi-list fs-5"></i>
                        </button> */}
                        <span className="topbar-title">
                            Kasir (Point Of Sale)
                        </span>
                    </div>
                    {/* <!-- ADMIN --> */}
                    {/* <div className="d-flex align-items-center gap-2">
                        <div className="admin-avatar">
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <select id="" className="form-select">
                            <option selected>Admin</option>
                            <option value="1">Fuji</option>
                        </select>
                    </div> */}
                    < UserIsLogedIn />
                </header>
                <div className="pos-content d-flex gap-3 p-3">
                    {/* content */}
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layouts;