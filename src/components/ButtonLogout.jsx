import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

function ButtonLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const urlUser = import.meta.env.VITE_USER_API;
      await axios.delete(`${urlUser}/logout`, { withCredentials: true });
    } catch (e) {
      console.log("Logout API error:", e.message);
    } finally {
      logout();
      navigate("/login", { replace: true, state: { logoutSuccess: true } });
    }
  };

  return (
    <div className="mt-auto p-3">
      <button onClick={handleLogout} className="logout d-flex align-items-center gap-2 btn btn-link text-decoration-none">
        <i className="bi bi-box-arrow-right"></i>
        <span className="logout-text">Logout</span>
      </button>
    </div>
  );
}

export default ButtonLogout;