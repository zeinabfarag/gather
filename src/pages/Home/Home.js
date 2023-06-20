import "./Home.scss";
import Header from "../../components/Header/Header";
import KeyFeature from "../../components/KeyFeature/KeyFeature";
import HomeText from "./HomeText";
import Headline from "../../components/Headline/Headline";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {HomeText.headline.map(({ icon, text }, i) => (
          <Headline key={i} text={text} icon={icon} />
        ))}

        {HomeText.features.map(({ icon, text }, i) => (
          <KeyFeature key={i} text={text} icon={icon} />
        ))}
      </main>
    </div>
  );
};

export default Home;
