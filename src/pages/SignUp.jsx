import "../styles/loginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { registerApi } from "../services/loader.js";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("kasir");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setMsg("");
        setIsSuccess(false);

        if (password !== confPassword) {
            setMsg("Password dan Konfirmasi Password tidak cocok!");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                username,
                email,
                role,
                password,
                confPassword
            };
            const res = await registerApi(payload);
            setIsSuccess(true);
            setMsg(res.message || "User berhasil didaftarkan!");
            setTimeout(() => {
                navigate("/pengaturan");
            }, 1500);
        } catch (error) {
            setIsSuccess(false);
            if (error.response?.data?.message) {
                setMsg(error.response.data.message);
            } else if (error.response?.data?.error) {
                setMsg(error.response.data.error);
            } else {
                setMsg(error.message || "Registrasi gagal");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 p-3">
            <div className="card login-card shadow-sm">
                <div className="text-center">
                    <i className="bi bi-person-plus-fill store-icon"></i>
                    <h1 className="login-title">KASIR UMKM</h1>
                    <p className="login-subtitle">Tambah akun user / karyawan baru</p>
                    {msg && (
                        <div className={`alert ${isSuccess ? "alert-success" : "alert-danger"} py-2 small mb-3`} role="alert">
                            {msg}
                        </div>
                    )}
                </div>

                <form onSubmit={handleRegister}>
                    {/* USERNAME */}
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-person"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-envelope-at"></i>
                        </span>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* ROLE */}
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-people-fill"></i>
                        </span>
                        <select
                            className="form-select form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="kasir">Kasir</option>
                            {/* <option value="admin">Admin</option> */}
                        </select>
                    </div>

                    {/* PASSWORD */}
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-lock"></i>
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="btn bg-white border border-start-0 text-muted"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex="-1"
                        >
                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-lock-fill"></i>
                        </span>
                        <input
                            type={showConfPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Konfirmasi Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="btn bg-white border border-start-0 text-muted"
                            onClick={() => setShowConfPassword(!showConfPassword)}
                            tabIndex="-1"
                        >
                            <i className={`bi ${showConfPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                        </button>
                    </div>

                    <button type="submit" className="btn btn-login btn-primary mt-2" disabled={loading}>
                        {loading ? (
                            <span>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Mendaftarkan...
                            </span>
                        ) : (
                            <span>
                                <i className="bi bi-person-check me-2"></i>
                                Daftar User
                            </span>
                        )}
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm w-100 mt-2"
                        onClick={() => navigate("/pengaturan")}
                    >
                        Batal
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;