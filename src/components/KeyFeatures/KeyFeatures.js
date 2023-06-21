import { createElement } from "react";
import "./KeyFeatures.scss";

const KeyFeatures = ({ features }) => {
  return (
    <div className="key-features">
      <h1>Key Features</h1>
      {features.map(({ icon, text }, i) => (
        <div className="key-feature" key={i}>
          <div className="key-feature-icon">{createElement(icon)}</div>
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
