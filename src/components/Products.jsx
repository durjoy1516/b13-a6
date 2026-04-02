import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, cart, removeFromCart, clearCart }) => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("products");

  useEffect(() => {
    fetch("/src/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container products-section">
      <h2>Premium Digital Tools</h2>
      <p>Boost your productivity with our tools</p>

      <div className="toggle-buttons">
        <button
          className={active === "products" ? "active-btn" : ""}
          onClick={() => setActive("products")}
        >
          Products
        </button>

        <button
          className={active === "cart" ? "active-btn" : ""}
          onClick={() => setActive("cart")}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCTS */}
      {active === "products" && (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* CART */}
      {active === "cart" && (
        <div className="cart-section">
          <h2>Your Cart</h2>
      
          {cart.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            <>
              <div className="cart-list">
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    
                    {/* LEFT SIDE */}
                    <div className="cart-info">
                      <h3>{item.icon} {item.name}</h3>
                      <p>${item.price}</p>
                    </div>
                
                    {/* RIGHT SIDE */}
                    <button
                      className="btn-outline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              {/* TOTAL */}
              <div className="cart-total">
                <h3>Total</h3>
                <h3>
                  ${cart.reduce((total, item) => total + item.price, 0)}
                </h3>
              </div>
              
              {/* CHECKOUT */}
              <button className="btn-primary" onClick={clearCart}>
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;