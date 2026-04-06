import "../styles/main.css";
import bannerImg from "../assets/banner.png";
import dotImg from "../assets/dot.png";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="banner-text">
        <div className="badge-img">
          <img src={dotImg} alt="" />
          <span className="badge"> New: AI-Powered Tools Available</span>
        </div>
        

        <h1>Supercharge Your Digital Workflow</h1>

        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place.
        </p>

        <div className="banner-buttons">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-outline"><i class="fa-regular fa-circle-play"></i>Watch Demo</button>
        </div>
      </div>

      <img src={bannerImg} alt="Banner Image" />
    </div>
  );
};

export default Banner;