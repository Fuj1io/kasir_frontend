import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

function UserIsLogedIn() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="d-flex align-items-center gap-2 text-muted">
        <i className="bi bi-person-fill"></i>
        <span>Belum Login</span>
      </div>
    );
  }

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button className="btn btn-light dropdown-toggle d-flex align-items-center gap-1" type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <i className="bi bi-person-fill"></i>
        {user.username || user.email}
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""}`} style={{ position: "relative", marginTop: "50px" }}>
        <li><span className="dropdown-item-text text-muted small">{user.email}</span></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#" onClick={() => setOpen(false)}>{user.role || "User"}</a></li>
      </ul>
    </div>
  );
}

export default UserIsLogedIn;