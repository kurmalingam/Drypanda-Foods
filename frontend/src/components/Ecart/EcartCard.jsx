import './EcartCard.css';

const EcartCard = ({ name, category, price, stock, image , onAddToCart }) => {
  return (
    <div className="ecart-card">
      <img src={image} alt={name} className="ecart-img" />
      <h5>{name}</h5>
      <p className="category">{category}</p>
      <h6>${price}</h6>

      <p className={stock ? "in-stock" : "out-of-stock"}>
        {stock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        className="btn btn-success"
        disabled={!stock}
        onClick={onAddToCart}
        aria-disabled={!stock}
        aria-label={stock ? `Add ${name} to cart` : `${name} out of stock`}
      >
        {stock ? "🛒 Add to Cart" : "Not Available"}
      </button>
    </div>
  );
};

export default EcartCard;
