import "./Home.scss";
import Header from "../../components/Header/Header";
import HomeText from "./HomeText";
import Headline from "../../components/Headline/Headline";
import Footer from "../../components/Footer/Footer";
import Tagline from "../../components/Tagline/Tagline";
import SignUp from "../../components/SignUp/SignUp";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import { createElement } from "react";
import { Illustration, Arrow } from "../../assets";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        {/* Headline */}
        <div className="headline-section">
          <Headline headlines={HomeText.headline} />
        </div>

        {/* Headline Image */}
        <div className="headline-image" data-aos="zoom-in" data-aos-delay={750}>
          {createElement(Illustration)}
        </div>

        {/* Arrow */}
        <div className="arrow">{createElement(Arrow)}</div>

        {/* Tag Lines */}
        <div className="taglines-section">
          <Tagline taglines={HomeText.taglines} />
        </div>

        {/* Arrow */}
        <div className="arrow">{createElement(Arrow)}</div>

        {/* Key Features */}
        <div className="keyfeatures-section">
          <KeyFeatures features={HomeText.features} />
        </div>

        {/* Arrow */}
        <div className="arrow">{createElement(Arrow)}</div>

        {/* Sign Up*/}
        <div className="signup-section">
          <SignUp />
        </div>
      </main>
      {/* Footer */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
