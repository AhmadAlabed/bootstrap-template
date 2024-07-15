import styles from "./style.module.css";

function ServiceBox({ text, color, icon }) {
  return (
    <div
      className={`${styles.service__box}`}
      style={{ borderBottomColor: color }}
    >
      <i className={icon} style={{ color: color }}></i>
      <h3>{text}</h3>
    </div>
  );
}

export default ServiceBox;
