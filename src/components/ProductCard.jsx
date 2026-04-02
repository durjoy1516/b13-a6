const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <span className={`tag ${product.tagType}`}>{product.tag}</span>

      <h3>{product.icon} {product.name}</h3>
      <p>{product.description}</p>

      <div className="price">
        ${product.price} / {product.period}
      </div>

      <ul className="features">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button className="btn-primary buy-btn" onClick={() => addToCart(product)}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;