import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts.jsx";
import AllMenu from "../pages/AllMenu.jsx";
import StockProducts from "../pages/StockProducts.jsx";
import Laporan from "../pages/Laporan.jsx";
import Pengaturan from "../pages/Pengaturan.jsx";


import LoginPage from "../pages/LoginPage.jsx";
// import HomePage from "../pages/Index.jsx";
// import AlertStokMenipis from "../components/AlertStokMenipis.jsx";
// import AlertSuccess from "../components/AlertSuccess.jsx";
// // import TransaksiSukses from "../components/TransaksiSukses.jsx";
// import FormAddData from "../components/FormAddData.jsx";
// import AlertSuksesAddData from "../components/AlertSuksesAddData.jsx";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: < Layouts />,
        children: [
            {
                index: true,
                element: <AllMenu />
            },

            {
                path: "/menu",
                element: <AllMenu />
            },
            {
                path: "/products/stok",
                element: <StockProducts />
            },
            {
                path: "/laporan",
                element: <Laporan />
            },
            {
                path: "/pengaturan",
                element: <Pengaturan />
            },

        ]
    },
    // {
    //     path: "/homePage",
    //     element: < HomePage />
    // }, {
    //     path: "/products",
    //     element: <StockProducts />
    // }, {
    //     path: "/stok/menipis",
    //     element: < AlertStokMenipis />
    // }, {
    //     path: "/alert/success",
    //     element: <AlertSuccess />
    // }, {
    //     path: "/alert/transaksi",
    //     element: < TransaksiSukses />
    // }, {
    //     path: "/alert/success/add",
    //     element: < AlertSuksesAddData />
    // }, {
    //     path: "/add",
    //     element: < FormAddData />
    // }, {
    //     path: "/laporan",
    //     element: < Laporan />
    // }
]);