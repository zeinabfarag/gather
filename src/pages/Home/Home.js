import "./Home.scss";
import Header from "../../components/Header/Header";
import HomeText from "./HomeText";
import Headline from "../../components/Headline/Headline";
import Footer from "../../components/Footer/Footer";
import Tagline from "../../components/Tagline/Tagline";
import SignUp from "../../components/SignUp/SignUp";
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        {/* Headline */}
        <div className="headline-section">
          {HomeText.headline.map(({ icon, text }, i) => (
            <Headline key={i} text={text} icon={icon} />
          ))}
        </div>

        {/* Tag Lines */}
        <div className="tagline-section">
          {HomeText.taglines.map(({ icon, text, subtext }, i) => (
            <Tagline key={i} text={text} icon={icon} subtext={subtext} />
          ))}
        </div>

        {/* Key Features */}
        <div className="keyfeatures-section">
          <KeyFeatures features={HomeText.features} />
        </div>

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
