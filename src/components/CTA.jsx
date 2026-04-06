import "../styles/main.css";

const CTA = () => {
  return (
    
    <div className="cta-container">
        <div className="cta">
      <h2>Ready To Transform Your Workflow?</h2>

      <p>
        Join thousands of professionals using DigiTools to work smarter.
      </p>

      <div className="cta-buttons">
        <button className="btn-primary">
          <span className="gradient-text">Explore Products</span>
        </button>

        <button className="btn-outline">
          View Pricing
        </button>
      </div>

      <p style={{ fontSize: "14px" }}>
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
    </div>
  );
};

export default CTA;