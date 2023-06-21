import "./Headline.scss";
import React from "react";
import { createElement } from "react";

const Headline = ({ headlines }) => {
  return (
    <div className="headlines flx-clmn-cntr">
      {headlines.map(({ icon, text }, i) => (
        <div className="headline flx-clmn-cntr bold-span" key={i}>
          <div className="headline-icon">{createElement(icon)}</div>
          <div
            className="headline-text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      ))}
    </div>
  );
};

export default Headline;
