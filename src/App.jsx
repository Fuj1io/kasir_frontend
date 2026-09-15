import { RouterProvider } from "react-router";
import { router } from "./routes/Index.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProdukProvider } from "./context/ProdukContext.jsx";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ProdukProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProdukProvider>
    </AuthProvider>
  );
}

export default App;