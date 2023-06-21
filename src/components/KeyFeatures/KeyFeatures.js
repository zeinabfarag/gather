import "./KeyFeatures.scss";

const KeyFeatures = ({ features }) => {
  return (
    <div className="key-features">
      <h1>Key Features</h1>
      {features.map(({ icon, text }, i) => (
        <div className="key-feature" key={i}>
          <p className="key-feature-icon">{icon}</p>
          <div
            className="key-feature-text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      ))}
    </div>
  );
};

export default KeyFeatures;
