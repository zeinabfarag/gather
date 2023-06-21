import "./SignUp.scss";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-header">
        <span>Sign up </span> to our waitlist
      </div>
      <Button text={"Join Waitlist"} />
    </div>
  );
};

export default SignUp;
