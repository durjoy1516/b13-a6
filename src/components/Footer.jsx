import "../styles/main.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-grid">

        <div>
          <h3 className="footer-logo">DigiTools</h3>
          <p>
            Premium digital tools for creators, professionals, and businesses.
          </p>
        </div>

        <div>
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3>Resources</h3>
          <ul>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Social Link</h3>
          <div className="link-icon">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="info">
          <span style={{ marginRight: "10px" }}>Privacy Policy</span>
          <span style={{ marginRight: "10px" }}>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;