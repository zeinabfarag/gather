import "./KeyFeature.scss";

const KeyFeature = ({ text, icon }) => {
  return (
    <div className="key-feature">
      <p className="key-feature-icon">{icon}</p>
      <div
        className="key-feature-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default KeyFeature;
