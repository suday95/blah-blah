import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" end>
        Dashboard
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>

      {/* Example dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="nav-link"
        style={{ cursor: 'pointer', minWidth: 'auto' }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
