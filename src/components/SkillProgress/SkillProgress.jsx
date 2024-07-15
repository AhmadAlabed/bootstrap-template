import styles from "./style.module.css";

function SkillProgress({ percentage, color, title }) {
  return (
    <>
      <h3 className={`${styles.progressbar__title}`}>{title}</h3>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: "6px", overflow: "visible" }}
      >
        <div
          className={`progress-bar ${styles.progressbar__circle}`}
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            color: color,
          }}
          data-before={`${percentage}%`}
        ></div>
      </div>
    </>
  );
}

export default SkillProgress;
