import "../styles/loginPage.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { userApi } from "../services/loader.js";
import { useAuth } from "../context/AuthContext.jsx";
import AlertAuthentication from "../components/AlertAuthentication.jsx";

function LoginPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogoutAlert, setShowLogoutAlert] = useState(Boolean(location.state?.logoutSuccess));
    const { login } = useAuth();

    const closeLogoutAlert = () => {
        setShowLogoutAlert(false);
        navigate(location.pathname, { replace: true, state: null });
    };

    const Auth = async(event) => {
        event.preventDefault();
        
        try {
            const payload = {
                email : email,
                password : password
            }

            const response = await userApi(payload);
            // response.data is accessToken
            const accessToken = response.data || response.accessToken || response.token;
            if (accessToken) {
                login(accessToken);
            }
            navigate("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.message);
            } else {
                setMsg(error.message);
            }
        }
    }

    return (
        <>
        {showLogoutAlert && <AlertAuthentication onClose={closeLogoutAlert} />}
        <div className="card login-card">
            {/* Icon  */}
            <div className="text-center">
                <i className="bi bi-shop store-icon"></i>

                <h1 className="login-title">
                    KASIR UMKM
                </h1>

                <p className="login-subtitle">
                    Silakan login untuk melanjutkan
                </p>
                <span>{msg}</span>
            </div>
            {/* FORM LOGIN */}
            <form  onSubmit={Auth}>

                {/* Email / Username  */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-person"></i>
                    </span>

                    <input type="text" className="form-control" placeholder="Email" aria-label="Email atau Username" onChange={(event) => setEmail(event.target.value)} required></input>
                </div>

                {/* Password  */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                    </span>

                    <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" aria-label="Password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                    <button
                        type="button"
                        className="btn bg-white border border-start-0 text-muted"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex="-1"
                    >
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                    </button>
                </div>

                {/* Remember & Forgot Password  */}
                <div className="d-flex justify-content-between align-items-center login-options">

                    {/* <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" id="rememberMe"></input>

                        <label className="form-check-label" htmlFor="rememberMe">
                            Ingat saya
                        </label>
                    </div> */}
                    {/* <a href="#" className="forgot-password">
                        Lupa password?
                    </a> */}
                </div>
                <button type="submit" className="btn btn-login btn-primary">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                </button>

            </form>
        </div>
        </>
    )
}

export default LoginPage;