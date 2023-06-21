import "./Header.scss";
import Button from "../Button/Button";
import { createElement } from "react";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">{createElement(Logo)}</div>
        <Button text="Join Waitlist" />
      </div>
    </div>
  );
};

export default Header;
