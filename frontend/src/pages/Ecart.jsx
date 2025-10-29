import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Ecart.css";
import EcartCard from "../components/Ecart/EcartCard";
import products from "../components/Ecart/EcartData";

const Ecart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showInStockOnly || item.stock) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  );

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing.count === 1) {
        return prev.filter((item) => item.name !== product.name);
      }
      return prev.map((item) =>
        item.name === product.name ? { ...item, count: item.count - 1 } : item
      );
    });
  };

  const handleDeleteFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.name !== product.name));
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    let message = "Hello! I want to order:\n";

    cartItems.forEach((item) => {
      message += `- ${item.name} x ${item.count} = $${item.price * item.count}\n`;
    });

    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    message += `Total: $${total}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="ecart-full-body">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark main-navbar">
        <div className="container-fluid">
          <Link to="" className="navbar-brand d-flex align-items-center">
            <img
              src="/images/Logo.jpg"
              alt="Dry Pandas Logo"
              className="logo-img img-fluid"
            />
            <h4 className="m-0 brand-text">Drypanda Foods-Ecart</h4>
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
            <ul className="navbar-nav mx-auto gap-lg-3 align-items-center">
              {/* Dropdown for categories */}
              <li className="nav-item dropdown ecart-dropdown">
                <button
                  className="nav-link dropdown-toggle no-underline"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedCategory} ▾
                </button>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("All")}
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("Fruits")}
                    >
                      Fruits
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCategory("Vegetables")}
                    >
                      Vegetables
                    </button>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <div className="nav-item search-box">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span className="search-icon">🔍</span>
                </div>
              </li>
            </ul>

            <div className="login-wrapper d-flex gap-4">
              <button
                className="btn btn-ecart px-3"
                onClick={() => setCartOpen(true)}
              >
                <i className="bi bi-cart4 me-2"></i>
                E-Cart ({cartItems.reduce((acc, item) => acc + item.count, 0)})
              </button>

              <Link to="/auth" className="btn btn-outline-light px-3">
                <i className="bi bi-person-fill me-2"></i>Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="stock-filter">
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={(e) => setShowInStockOnly(e.target.checked)}
        />
        Only Show Products in Stock
      </div>

      <div className="ecart-body">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <EcartCard
              key={index}
              {...item}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))
        ) : (
          <p
            className="text-center w-100"
            style={{ color: "brown", marginTop: "2rem" }}
          >
            No products found.
          </p>
        )}
      </div>

      <footer className="text-white text-center py-3">
        <div className="small">
          &copy; 2025 <strong>Dry Panda Foods</strong>. All rights reserved.
        </div>
      </footer>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${cartOpen ? "show" : ""}`}>
        <div className="cart-panel">
          <div className="cart-header d-flex justify-content-between align-items-center">
            <h5>Your Cart</h5>
            <button
              className="btn-close"
              onClick={() => setCartOpen(false)}
            ></button>
          </div>
          <div className="cart-body">
            {cartItems.length === 0 ? (
              <p>Oops! No items in cart.</p>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-center mb-3 cart-item"
                >
                  <div>
                    <strong>{item.name}</strong> - ${item.price * item.count}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => handleDeleteFromCart(item)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <button
                className="btn btn-success w-100 mt-3"
                onClick={handleWhatsAppCheckout}
              >
                Checkout via WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecart;
