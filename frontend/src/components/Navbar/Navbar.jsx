import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarContent");
    if (window.innerWidth < 992 && navbarCollapse?.classList.contains("show")) {
      document.querySelector(".navbar-toggler")?.click();
    }
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark-green main-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/Logo.jpg"
            alt="Dry Pandas Logo"
            className="logo-img img-fluid"
          />
          <h4 className="m-0 brand-text">DRYPANDA FOODS</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav mx-auto gap-lg-3">
            <a
              className="nav-link px-3"
              href="#product-details"
              onClick={handleNavLinkClick}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
            >
              Product Details
            </a>
            <a
              className="nav-link px-3"
              href="#newsroom-section"
              onClick={handleNavLinkClick}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
            >
              News Room
            </a>
            <a
              className="nav-link px-3"
              href="#careers"
              onClick={handleNavLinkClick}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
            >
              Careers
            </a>
            <a
              className="nav-link px-3"
              href="#about-section"
              onClick={handleNavLinkClick}

              // data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
            >
              About Us
            </a>
            <a
              className="nav-link px-2"
              onClick={handleNavLinkClick}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact Us
            </a>
          </div>

          <div className="login-wrapper">
            <Link
              to="/auth"
              className="btn btn-outline-light px-3"
              style={{ fontSize: "large" }}
            >
              <i className="bi bi-person-fill me-2"></i>Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
