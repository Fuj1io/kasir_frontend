import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // {username, email, role}
    const [token, setToken] = useState(() => {
        const stored = localStorage.getItem("authToken");
        return stored ? stored : null;
    });
    const [loading, setLoading] = useState(true); // ketika data kosong

    useEffect(() => {
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setUser({
                    username: payload.username,
                    email: payload.email,
                    role: payload.role
                });
            } catch (e) {
                setUser(null);
                localStorage.removeItem("authToken");
                setToken(null);
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    }, [token]);

    const login = (accessToken) => {
        // decode token to get user info
        try {
            const payload = JSON.parse(atob(accessToken.split('.')[1]));
            const userInfo = {
                username: payload.username,
                email: payload.email,
                role: payload.role
            };
            setUser(userInfo);
            setToken(accessToken);
            localStorage.setItem("authToken", accessToken);
        } catch (e) {
            console.error("Invalid token", e);
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