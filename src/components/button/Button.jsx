import "./Button.scss";

function Button({ className, onClick, text }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;