import cartImg from "../assets/products/shopping-cart.png";

const Navbar = ({ cartCount }) => {
  return (
    <div className="container navbar">
      <div className="logo">DigiTools</div>

      <div className="nav-links">
        <a href="#">Products</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <a href="#">FAQ</a>
      </div>

      <div className="nav-right">
        <div className="cart-wrapper">
          <img src={cartImg} alt="cart" />
          <span className="cart-badge">{cartCount}</span>
        </div>

        <a href="#">Login</a>
        <button className="btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;