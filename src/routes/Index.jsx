import { createBrowserRouter, Navigate } from "react-router";
import Layouts from "../layouts/Layouts.jsx";
import AllMenu from "../pages/AllMenu.jsx";
import StockProducts from "../pages/StockProducts.jsx";
import Laporan from "../pages/Laporan.jsx";
import Pengaturan from "../pages/Pengaturan.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import { useAuth } from "../context/AuthContext.jsx";

// testting

import Loading from "../components/LoadingElement.jsx";

const ProtectedRoute = ({ children }) => {
    const { token, loading } = useAuth();
    if (loading) return <div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>;
    if (!token) return <Navigate to="/login" replace />;
    return children;
};

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layouts />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Navigate to="/menu" replace /> },
            { path: "/menu", element: <AllMenu /> },
            { path: "/products/stok", element: <StockProducts /> },
            { path: "/laporan", element: <Laporan /> },
            { path: "/pengaturan", element: <Pengaturan /> },
        ]
    },
    // path testing view
    {
        path: "/view",
        element : < Loading/>
    }
]);
