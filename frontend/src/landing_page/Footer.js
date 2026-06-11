import React from 'react'
import { useLocation, Link } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="border-top" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5 border-top">

        <div className="row">

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <Link to="/">
            <img
              src="/media/images/logo.png"
              alt="Stockora Logo"
              style={{ maxHeight: "45px" }}
              className="mb-3"
            />
          </Link>

            <p className="text-muted">
              &copy; 2026 Stockora. All rights reserved.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>

            <Link to="/about" className="text-decoration-none d-block mb-2 text-muted">
              About
            </Link>

            <Link to="/product" className="text-decoration-none d-block mb-2 text-muted">
              Products
            </Link>

            <Link to="/pricing" className="text-decoration-none d-block mb-2 text-muted">
              Pricing
            </Link>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Referral Programme
            </a>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Careers
            </a>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Stockora.tech
            </a>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Press & Media
            </a>

            <a href="#" className="text-decoration-none d-block text-muted">
              Stockora Cares (CSR)
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="fw-bold mb-4">Support</h5>

            <Link to="/support" className="text-decoration-none d-block mb-2 text-muted">
              Contact Us
            </Link>

            <Link to="/support" className="text-decoration-none d-block mb-2 text-muted">
              Support Portal
            </Link>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Z-Connect Blog
            </a>

            <Link to="/pricing" className="text-decoration-none d-block mb-2 text-muted">
              List of Charges
            </Link>

            <a href="#" className="text-decoration-none d-block text-muted">
              Downloads & Resources
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="fw-bold mb-3">Account</h5>

            <Link to="/signup" className="text-decoration-none d-block mb-2 text-muted">
              Open an Account
            </Link>

            <a href="#" className="text-decoration-none d-block mb-2 text-muted">
              Fund Transfer
            </a>

            <a href="#" className="text-decoration-none d-block text-muted">
              60 Day Challenge
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;