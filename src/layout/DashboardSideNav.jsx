import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.css";

export const DashboardSideNav = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard">Dashboard Home</Link>
        </li>
        <li>
          <Link to="/dashboard/orders">Orders</Link>
        </li>
        <li>
          <Link to="/dashboard/products">Products</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};
