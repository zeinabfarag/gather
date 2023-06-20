import "./Home.scss";
import Header from "../../components/Header/Header";
import KeyFeature from "../../KeyFeature/KeyFeature";
import HomeText from "./HomeText";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {HomeText.headline.map(({ icon, text }, i) => (
          <KeyFeature key={i} text={text} icon={icon} />
        ))}

        {HomeText.features.map(({ icon, text }, i) => (
          <KeyFeature key={i} text={text} icon={icon} />
        ))}
      </main>
    </div>
  );
};

export default Home;
