import { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import HomeText from "./HomeText";
import Headline from "../../components/Headline/Headline";
import Footer from "../../components/Footer/Footer";
import Tagline from "../../components/Tagline/Tagline";
import SignUp from "../../components/SignUp/SignUp";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import { createElement } from "react";
import { Illustration, Arrow } from "../../assets";

import "./Home.scss";

const Home = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);

  const formRef = useRef(null);

  const joinWaitlist = () => {
    setShowJoinForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView();
      }
    }, 0);
  };

  return (
    <div className="home">
      <Header joinWaitlist={joinWaitlist} />
      <main>
        {/* Headline */}
        <div className="headline-section">
          <Headline headlines={HomeText.headline} />
        </div>

        {/* Headline Image */}
        <div
          className="headline-image"
          data-aos="zoom-in"
          data-aos-duration={850}
        >
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
          <SignUp
            showJoinForm={showJoinForm}
            joinWaitlist={joinWaitlist}
            formRef={formRef}
          />
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
