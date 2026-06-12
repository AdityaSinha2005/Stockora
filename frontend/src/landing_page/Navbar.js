import React from "react";
import { useLocation, Link } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";

function Navbar() {
  const location = useLocation();

   const closeMenu = () => {
    const navbar = document.getElementById("navbarSupportedContent");

    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(navbar) || new Collapse(navbar);
      bsCollapse.hide();
    }
  };

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container py-2">

        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.png"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={closeMenu}>
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product" onClick={closeMenu}>
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={closeMenu}>
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={closeMenu}>
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;