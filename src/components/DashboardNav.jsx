import React from "react";
import { Link } from "react-router-dom";
import "./DashboardNav.css";

export const DashboardNav = () => {
  return (
    <nav className="na">
      <div className="navbar-brand">
        <Link to="/">NETFLIX</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Movies</Link>
        </li>
        <li>
          <Link to="/order">Download Movies</Link>
        </li>
        {/* <li>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </li> */}
      </ul>
    </nav>
  );
};
