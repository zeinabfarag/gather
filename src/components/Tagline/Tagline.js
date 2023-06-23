import { createElement } from "react";
import { ThreeDots } from "../../assets";

import "./Tagline.scss";

const Tagline = ({ taglines }) => {
  return (
    <div className="taglines flx-clmn-cntr">
      {/* Tagline 1 */}
      <div
        className="tagline flx-clmn-cntr bold-span"
        data-aos="fade-right"
        data-aos-delay={0}
      >
        <div className="tagline-icon">{createElement(taglines[0].icon)}</div>
        <div
          className="tagline-text"
          dangerouslySetInnerHTML={{ __html: taglines[0].text }}
        />
        <p
          className="tagline-subtext"
          dangerouslySetInnerHTML={{ __html: taglines[0].subtext }}
        />
      </div>

      <div className="dots">{createElement(ThreeDots)}</div>

      {/* Tagline 2 */}
      <div
        className="tagline flx-clmn-cntr bold-span"
        data-aos="fade-left"
        data-aos-delay={250}
      >
        <div className="tagline-icon">{createElement(taglines[1].icon)}</div>
        <div
          className="tagline-text"
          dangerouslySetInnerHTML={{ __html: taglines[1].text }}
        />
        <p
          className="tagline-subtext"
          dangerouslySetInnerHTML={{ __html: taglines[1].subtext }}
        />
      </div>
    </div>
  );
};

export default Tagline;
