import { RouterProvider } from "react-router";
import { router } from "./routes/Index.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;