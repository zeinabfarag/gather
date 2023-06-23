import "./SignUp.scss";
import Button from "../Button/Button";
import { saveToDatabase } from "./firebase";

const SignUp = () => {
  // Handle Join Waitlist Button Click
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const isInterested = event.target.isInterested.checked;
    saveToDatabase(name, email, isInterested);
    event.target.reset();
  };

  return (
    <div className="signup">
      <div className="signup-header">
        <div
          data-aos="zoom-in-down"
          data-aos-delay={50}
          data-aos-duration={850}
          className="signup-header-text"
        >
          Sign up
        </div>
        to our waitlist
      </div>
      <div data-aos="fade-up" data-aos-delay={150} data-aos-duration={850}>
        <Button text={"Join Waitlist"} />
      </div>
      <form className="signup-form border-main flx-clmn-cntr">
        <div className="signup-form-input">
          <div>Name</div>
          <input type="text" required />
        </div>
        <div className="signup-form-input">
          <div>Email</div>
          <input type="email" required />
        </div>
        <div className="signup-form-checkbox">
          <input type="checkbox" />
          <div>
            I would like to participate in or provide feedback for product
            development.
          </div>
        </div>
        <Button text={"Submit"} type="submit" fullWidth />
      </form>
    </div>
  );
};

export default SignUp;
