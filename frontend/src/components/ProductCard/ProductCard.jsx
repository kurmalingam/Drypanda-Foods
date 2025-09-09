import React from "react";
import "./ProductCard.css";

const products = [
  {
    src: "/images/panda1.png",
    alt: "E-cart Dry Food Products",
    title: "E-cart for Dry Food Products",
    desc: "Discover our upcoming digital marketplace for premium dried goods",
    link: "#",
  },
  {
    src: "/images/panda2.jpg",
    alt: "Available Machinery",
    title: "Available Machinery",
    desc: "Explore our solar-powered drying equipment lineup",
    link: "#",
  },
];

export default function ProductCard() {
  return (
    <section id="product-details" className="container product-section">
      <div className="section-header text-center mb-5">
        <h2 className="display-5 fw-bold">Our Sustainable Solutions</h2>
        <p className="lead">
          Innovative technology for agricultural preservation
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {products.map((product, idx) => (
          <div key={idx} className="col-sm-6 col-md-5 col-lg-4">
            <div className="product-card">
              <div className="product-icon">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <a href={product.link} className="product-cta">
                <span>Coming Soon</span>
                <i className="bi bi-lightning-charge-fill"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
