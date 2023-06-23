import "./Button.scss";

const Button = ({ text, type = "button", fullWidth }) => {
  return (
    <button
      type={type}
      className={`button`}
      style={{
        width: fullWidth ? "100%" : "",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
