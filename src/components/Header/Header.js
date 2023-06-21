import "./Header.scss";
import Button from "../Button/Button";
import { createElement } from "react";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">{createElement(Logo)}</div>
      <Button text="Join Waitlist" />
    </div>
  );
};

export default Header;
