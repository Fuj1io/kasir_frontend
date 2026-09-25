import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const decodeToken = (rawToken) => {
    if (!rawToken) return null;
    try {
        const payload = JSON.parse(atob(rawToken.split('.')[1]));
        if (payload.exp && payload.exp * 1000 <= Date.now()) {
            return null;
        }
        return payload;
    } catch {
        return null;
    }
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => {
        const stored = localStorage.getItem("authToken");
        const payload = decodeToken(stored);
        if (!payload) {
            localStorage.removeItem("authToken");
            return null;
        }
        return stored;
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            const payload = decodeToken(token);
            if (payload) {
                setUser({
                    username: payload.username,
                    email: payload.email,
                    role: payload.role
                });
            } else {
                setUser(null);
                setToken(null);
                localStorage.removeItem("authToken");
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    }, [token]);

    useEffect(() => {
        const handleInvalidToken = () => {
            setUser(null);
            setToken(null);
            localStorage.removeItem("authToken");
        };

        window.addEventListener("auth:invalid", handleInvalidToken);
        return () => window.removeEventListener("auth:invalid", handleInvalidToken);
    }, []);

    const login = (accessToken) => {
        const payload = decodeToken(accessToken);
        if (payload) {
            setUser({
                username: payload.username,
                email: payload.email,
                role: payload.role
            });
            setToken(accessToken);
            localStorage.setItem("authToken", accessToken);
        } else {
            console.error("Invalid or expired token");
            logout();
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("authToken");
    };

    const value = {
        user,
        token,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);