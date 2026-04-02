import "../styles/main.css";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <section className="steps container">
      <h2>Get Started In 3 Steps</h2>
      <p>Start using premium digital tools in minutes</p>

      <div className="steps-grid">

        {/* CARD 1 */}
        <div className="step-card">
          <div className="step-number">01</div>


            <img src={userImg} alt="" />

          <h3>Create Account</h3>
          <p>Sign up for free in seconds. No credit card required.</p>
        </div>

        {/* CARD 2 */}
        <div className="step-card">
          <div className="step-number">02</div>

          <img src={packageImg} alt="" />

          <h3>Choose Products</h3>
          <p>Browse our catalog and select the tools you need.</p>
        </div>

        {/* CARD 3 */}
        <div className="step-card">
          <div className="step-number">03</div>

          <img src={rocketImg} alt="" />

          <h3>Start Creating</h3>
          <p>Download and start using your tools instantly.</p>
        </div>

      </div>
    </section>
  );
};

export default Steps;