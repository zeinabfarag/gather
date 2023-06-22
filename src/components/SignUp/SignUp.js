import "./SignUp.scss";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-header">
        <div
          data-aos="zoom-in-down"
          data-aos-delay={50}
          className="signup-header-text"
        >
          Sign up
        </div>
        to our waitlist
      </div>
      <div data-aos="fade-up" data-aos-delay={150}>
        <Button text={"Join Waitlist"} />
      </div>
    </div>
  );
};

export default SignUp;
