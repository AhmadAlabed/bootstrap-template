import styles from "./style.module.css";

function SectionSubtitle({ children }) {
  return <h2 className={`${styles.section__subtitle}`}>{children}</h2>;
}

export default SectionSubtitle;
