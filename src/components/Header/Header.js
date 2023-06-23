import Button from "../Button/Button";
import { createElement } from "react";
import { Logo } from "../../assets";

import "./Header.scss";

const Header = ({ joinWaitlist }) => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">{createElement(Logo)}</div>
        <Button text="Join Waitlist" onClick={joinWaitlist} />
      </div>
    </div>
  );
};

export default Header;
