import React from 'react';
import './ProductDetailModal.css'; // We'll create this CSS file

const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={product.image} alt={product.name} className="modal-img" />
        <h2>{product.name}</h2>
        <p className="modal-category">Category: {product.category}</p>
        <p className="modal-price">Price: ${product.price}</p>
        <p className={`modal-stock ${product.stock ? "in-stock" : "out-of-stock"}`}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>
        <button
          className="btn btn-success modal-add-btn"
          disabled={!product.stock}
          onClick={() => {
            onAddToCart(product);
            onClose(); // Optionally close modal after adding
          }}
          aria-disabled={!product.stock}
          aria-label={product.stock ? `Add ${product.name} to cart` : `${product.name} out of stock`}
        >
          {product.stock ? "🛒 Add to Cart" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
