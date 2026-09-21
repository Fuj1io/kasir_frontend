import "../styles/loginPage.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { userApi } from "../services/loader.js";
import AlertAuthentication from "../components/AlertAuthentication.jsx";

function LoginPage() {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ role, setRole ] = useState('');
    const [ password, setPassword ] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogoutAlert, setShowLogoutAlert] = useState(Boolean(location.state?.logoutSuccess));

    

    return (
        <>
        <h3 className="my-4">Sign Up Your Employ Here !</h3>
        <div className="card login-card">
            {/* Icon  */}
            <div className="text-center">
                <i className="bi bi-shop store-icon"></i>

                <h1 className="login-title">
                    KASIR UMKM
                </h1>

                <p className="login-subtitle">
                    Silakan Masukkan Data Diri, untuk melanjutkan
                </p>
                <span>{msg}</span>
            </div>
            {/* FORM LOGIN */}
            <form  onSubmit={""}>
                {/* USERNAME */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-person"></i>
                    </span>

                    <input type="text" className="form-control" placeholder="Your Username" aria-label="Your Username" onChange={(event) => setUsername(event.target.value)} required></input>
                </div>

                {/* Email   */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-person"></i>
                    </span>

                    <input type="text" className="form-control" placeholder="Email / Username" aria-label="Email atau Username" onChange={(event) => setEmail(event.target.value)} required></input>
                </div>

                {/* Email   */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-people-fill"></i>
                    </span>
                        <select className="form-select rounded-select" aria-label="Default select example">
                            <option value="1" id="1">Admin</option>
                            <option value="2" id="2">kasir</option>
                        </select>

                </div>

                {/* Password  */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                    </span>

                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(event) => setPassword(event.target.value)} required></input>
                </div>

                {/*CONFIRM Password  */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-lock-fill"></i>
                    </span>

                    <input type="password" className="form-control" placeholder="Confirm Your Password" aria-label="confPassword" onChange={(event) => setConfPassword(event.target.value)} required></input>
                </div>

                {/* Remember & Forgot Password  */}
                {/* <div className="d-flex justify-content-between align-items-center login-options">

                    <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" id="rememberMe"></input>

                        <label className="form-check-label" htmlFor="rememberMe">
                            Ingat saya
                        </label>
                    </div>
                    <a href="#" className="forgot-password">
                        Lupa password?
                    </a>
                </div> */}
                <button type="submit" className="btn btn-login btn-primary">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Daftar
                </button>

            </form>
        </div>
        </>
    )
}

export default LoginPage;