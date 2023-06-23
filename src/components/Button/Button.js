import "./Button.scss";

const Button = ({ text, type = "button", fullWidth, onClick }) => {
  return (
    <button
      onClick={onClick}
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
