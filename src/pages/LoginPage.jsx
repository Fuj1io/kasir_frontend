import "../styles/loginPage.css";

import React from 'react'

function LoginPage() {
    return (
        <div className="card login-card">
            {/* Icon  */}
            <div class="text-center">
                <i class="bi bi-shop store-icon"></i>

                <h1 class="login-title">
                    KASIR UMKM
                </h1>

                <p class="login-subtitle">
                    Silakan login untuk melanjutkan
                </p>
            </div>
            {/* FORM LOGIN */}
            <form>

                {/* Email / Username  */}
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="bi bi-person"></i>
                    </span>

                    <input type="text" class="form-control" placeholder="Email / Username" aria-label="Email atau Username"></input>
                </div>

                {/* Password  */}
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="bi bi-lock"></i>
                    </span>

                    <input type="password" class="form-control" placeholder="Password" aria-label="Password"></input>
                </div>

                {/* Remember & Forgot Password  */}
                <div class="d-flex justify-content-between align-items-center login-options">

                    <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="rememberMe"></input>

                        <label class="form-check-label" for="rememberMe">
                            Ingat saya
                        </label>
                    </div>
                    <a href="#" class="forgot-password">
                        Lupa password?
                    </a>
                </div>
                <button type="submit" class="btn btn-login btn-primary">
                    <i class="bi bi-box-arrow-in-right me-2"></i>
                    Login
                </button>

            </form>
        </div>
    )
}

export default LoginPage;