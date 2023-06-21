import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <h1>Gather</h1>
      <Button text="Join Waitlist" />
    </div>
  );
};

export default Header;
