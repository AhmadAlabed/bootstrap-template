import styles from "./style.module.css";

function MainButton({ children }) {
  return (
    <button
      type="button"
      className={`btn btn-transparent ${styles.button__text} ${styles.button__style} ${styles.button}`}
    >
      {children}
    </button>
  );
}

export default MainButton;
