import "./Header.scss";
import Button from "../Button/Button";
import { createElement } from "react";
import { ReactComponent as GatherLogo } from "../../assets/gather-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">{createElement(GatherLogo)}</div>
      <Button btntext="Join Waitlist" />
    </div>
  );
};

export default Header;
