import styles from "./style.module.css";

function Title({ children }) {
  return <h1 className={`${styles.title}`}>{children}</h1>;
}

export default Title;
