import styles from "./Button.module.css";

const Button = ({ name = "name", type = null, disabled = false, onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  return (
    <div className="button-container">
      <button
        disabled={disabled}
        className={`${styles.button} ${type}`}
        onClick={onButtonClick}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
