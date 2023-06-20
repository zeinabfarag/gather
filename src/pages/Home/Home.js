import "./Home.scss";
import KeyFeature from "../../KeyFeature/KeyFeature";
import HomeText from "./HomeText";

const Home = () => {
  return (
    <div className="App">
      <h1>Gather</h1>
      {HomeText.features.map(({ icon, text }, i) => (
        <KeyFeature key={i} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default Home;
