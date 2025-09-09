import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer" id="contact-us">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">
          
          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope me-2"></i> drypandafoods@gmail.com</p>
            <div className="d-flex contact-numbers">
              <i className="bi bi-telephone fs-5 me-3"></i>
              <div>
                <div>+91 7708509046</div>
                <div>+91 8220353966</div>
              </div>
            </div>
            <p><i className="bi bi-geo-alt me-2"></i> Visakhapatnam, AP, India</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><button onClick={() => handleScroll("glitter-static-section")}>Home</button></li>
              <li><button onClick={() => handleScroll("product-details")}>Product Details</button></li>
              <li><button onClick={() => handleScroll("newsroom-section")}>News Room</button></li>
              <li>
                <a 
                  href="https://forms.gle/FNU16sY7u1wUbH4d9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li><button onClick={() => handleScroll("about-section")}>About Us</button></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light my-4" />

        <div className="text-center small">
          &copy; 2025 <strong>Dry Pandas</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
