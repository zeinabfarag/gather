import "./KeyFeature.scss";

const KeyFeature = ({ text, icon }) => {
  return (
    <div className="key-feature">
      <p className="icon">{icon}</p>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default KeyFeature;
