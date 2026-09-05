import { RouterProvider } from "react-router";
import { router } from "./routes/Index.jsx";
import "./App.css";

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App