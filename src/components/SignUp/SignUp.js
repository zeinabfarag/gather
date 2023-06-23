import "./SignUp.scss";
import Button from "../Button/Button";
// import { saveToDatabase } from "./firebase";

const SignUp = () => {
  // Handle Join Waitlist Button Click
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const isInterested = event.target.isInterested.checked;
    // saveToDatabase(name, email, isInterested);
    event.target.reset();
  };

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
