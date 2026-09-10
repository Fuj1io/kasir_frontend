import React from 'react';
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

  return (
    <div className="dropdown">
      <span className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span>
          <i className="bi bi-person-fill"></i>
        </span>
        {user.username || user.email}
      </span>
      <ul className="dropdown-menu">
        <li><span className="dropdown-item-text text-muted small">{user.email}</span></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">{user.role || "User"}</a></li>
      </ul>
    </div>
  );
}

export default UserIsLogedIn;