import "./Home.scss";
import Header from "../../components/Header/Header";
import KeyFeature from "../../components/KeyFeature/KeyFeature";
import HomeText from "./HomeText";
import Headline from "../../components/Headline/Headline";
import Footer from "../../components/Footer/Footer";
import Tagline from "../../components/Tagline/Tagline";

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
          {HomeText.features.map(({ icon, text }, i) => (
            <KeyFeature key={i} text={text} icon={icon} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
