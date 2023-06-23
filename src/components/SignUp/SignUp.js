import { useState, createElement } from "react";
import Button from "../Button/Button";
import { saveToDatabase } from "../../firebase";
import { Mail } from "../../assets";

import "./SignUp.scss";

const SignUp = ({ showJoinForm, joinWaitlist, formRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isInterested, setIsInterested] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    saveToDatabase({ name, email, isInterested });
    setSignedUp(true);
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
      {!showJoinForm ? (
        <div data-aos="fade-up" data-aos-delay={150} data-aos-duration={850}>
          <Button text={"Join Waitlist"} onClick={joinWaitlist} />
        </div>
      ) : (
        <form
          ref={formRef}
          className="signup-form border-main flx-clmn-cntr"
          onSubmit={handleSubmit}
          data-aos="flip-up"
          data-aos-delay={250}
        >
          {signedUp ? (
            <div className="signup-submitted flx-clmn-cntr">
              {createElement(Mail)}

              <div className="signup-submitted-text">
                <span data-aos="zoom-out" data-aos-duration="2000">
                  Thank you
                </span>{" "}
                for signing up to our waitlist!
              </div>
            </div>
          ) : (
            <>
              <div className="signup-form-input">
                <div>Name</div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="signup-form-input">
                <div>Email</div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup-form-checkbox">
                <input
                  type="checkbox"
                  checked={isInterested}
                  onChange={() => setIsInterested(!isInterested)}
                />
                <div>
                  I would like to participate in or provide feedback for product
                  development.
                </div>
              </div>
              <Button text={"Submit"} type="submit" fullWidth />
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default SignUp;
