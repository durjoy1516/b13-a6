import "../styles/main.css";

const Pricing = () => {
  return (
    <div className="container pricing">
      <h2>Simple, Transparent Pricing</h2>
      <p>Choose the plan that fits your needs</p>

      <div className="pricing-grid">

        {/* STARTER */}
        <div className="pricing-card">
          <h3>Starter</h3>
          <p>Perfect for getting started</p>

          <div className="price">$0 / Month</div>

          <ul className="starter">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn-primary">Get Started Free</button>
        </div>

        {/* PRO */}
        <div className="pricing-card pro">
          <span className="badge-popular">Most Popular</span>

          <h3>Pro</h3>
          <p>Best for professionals</p>

          <div className="price">$29 / Month</div>

          <ul>
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="btn-primary"><span className="gradient-text">Start Pro Trial</span></button>
        </div>

        {/* ENTERPRISE */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>For teams and businesses</p>

          <div className="price">$99 / Month</div>

          <ul>
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn-primary">Contact Sales</button>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="cta">
        <h2>Ready To Transform Your Workflow?</h2>
        <p>
          Join thousands of professionals using DigiTools to work smarter.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary"><span className="gradient-text">Explore Products</span></button>
          <button className="btn-outline">View Pricing</button>
        </div>

        <p style={{ fontSize: "14px" }}>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Pricing;