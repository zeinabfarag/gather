import "./Tagline.scss";
import { createElement } from "react";

const Tagline = ({ taglines }) => {
  return (
    <div className="taglines flx-clmn-cntr">
      {taglines.map(({ icon, text }, i) => (
        <div className="tagline flx-clmn-cntr bold-span" key={i}>
          <div className="tagline-icon">{createElement(icon)}</div>
          <div
            className="tagline-text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      ))}
    </div>
  );
};

export default Tagline;
