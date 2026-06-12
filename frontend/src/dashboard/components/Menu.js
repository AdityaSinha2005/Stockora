import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
   const navigate = useNavigate();

  const username =
    localStorage.getItem("username") ||
    localStorage.getItem("email") ||
    "User";


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    navigate("/");
  };
  return (

    <div className="menu-container">
      <img
        src="/media/images/logo.png"
        className="dashboard-logo"
        alt="logo"
      />

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/holdings"
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/positions"
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/funds"
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Funds
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/apps"
              className={({ isActive }) =>
                isActive
                  ? "dashboard-menu selected"
                  : "dashboard-menu"
              }
            >
              Apps
            </NavLink>
          </li>
        </ul>
      </div>
       
       <div className="profile-row">
        <div className="profile" >
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>

        <p className="username">
          {username}
        </p>
      </div>

      <button
        className="dashboard-logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Menu;