import React from 'react';
import './ProductDetailModal.css';

const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="custom-close-btn" onClick={onClose}>
          &times;
        </button>

        <img src={product.image} alt={product.name} className="custom-modal-img" />
        <h2>{product.name}</h2>
        <p className="custom-modal-category">Category: {product.category}</p>
        <p className="custom-modal-price">Price: ${product.price}</p>

        <p className={`custom-modal-stock ${product.stock ? 'in-stock' : 'out-of-stock'}`}>
          {product.stock ? 'In Stock' : 'Out of Stock'}
        </p>

        <button
          className="custom-modal-add-btn btn btn-success"
          disabled={!product.stock}
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
        >
          {product.stock ? '🛒 Add to Cart' : 'Not Available'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
