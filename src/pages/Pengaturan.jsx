import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function Pengaturan() {
    const { user } = useAuth();
    const isAdmin = user?.role?.toLowerCase() === "admin";

    return (
        <div className="container-fluid p-4 ">
            <h1 className="mb-4">Pengaturan</h1>
           <div className="row">
            {/* 1. PENGATURAN TAMBAH USER */}
            <div className="col-lg-3">
                  {isAdmin ? (
                <NavLink
                    to="/register"
                    className="btn btn-success w-100 text-center d-flex flex-column align-items-center justify-content-center p-2 text-decoration-none shadow-sm"
                >
                    <i className="bi bi-person-add" style={{ fontSize: "50px" }}></i>
                    <span className="fw-semibold mt-1">Tambah User</span>
                </NavLink>
            ) : (
                <button
                    type="button"
                    disabled
                    className="btn btn-secondary w-100 text-center d-flex flex-column align-items-center justify-content-center p-2 opacity-50"
                    style={{ cursor: "not-allowed" }}
                    title="Hanya admin yang dapat menambah user"
                >
                    <i className="bi bi-person-add" style={{ fontSize: "50px" }}></i>
                    <span className="fw-semibold mt-1">Tambah User</span>
                    <small className="text-white-50" style={{ fontSize: "0.75rem" }}>(Hanya Admin)</small>
                </button>
            )}
            </div>
            <div className="col-lg-3">
                 {/* 2. hanya pemanis sahaja */}
            <button
                    type="button"
                    disabled
                    className="btn btn-secondary w-100 text-center d-flex flex-column align-items-center justify-content-center p-2 opacity-50"
                    style={{ cursor: "not-allowed" }}
                    title="Hanya admin yang dapat menambah user"
                >
                    <i className="bi bi-hourglass-split " style={{ fontSize: "50px" }}></i>
                    <span className="fw-semibold mt-1">Menu Lainnya...</span>
                    <small className="text-white-50" style={{ fontSize: "0.75rem" }}>(Next Progess..)</small>
            </button>
            </div>
           </div>
          

           
        </div>
    );
}

export default Pengaturan;