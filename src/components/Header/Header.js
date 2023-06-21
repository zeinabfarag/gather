import "./Header.scss";
import Button from "../Button/Button";
import { createElement } from "react";
import { ReactComponent as GatherLogo } from "../../assets/gather-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>Gather</h1>
      <Button text="Join Waitlist" />
    </div>
  );
};

export default Header;
