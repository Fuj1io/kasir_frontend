import "../styles/loginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { userApi } from "../services/loader.js";

function LoginPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async(event) => {
        event.preventDefault();
        
        try {
            const payload = {
                email : email,
                password : password
            }

            await userApi(payload);
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

                    <input type="text" className="form-control" placeholder="Email / Username" aria-label="Email atau Username" onChange={(event) => setEmail(event.target.value)} required></input>
                </div>

                {/* Password  */}
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                    </span>

                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(event) => setPassword(event.target.value)} required></input>
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
    )
}

export default LoginPage;