import React from "react";
import styles from "./style.module.css";

function ExperienceBox({ title, text, date, color, icon }) {
  return (
    <div className={`${styles.experience__box}`}>
      <div className="position-relative  d-flex justify-content-center  ">
        <div
          className={`d-flex justify-content-center align-items-center mt-4 rounded-5  ${styles.icon}`}
          style={{ backgroundColor: color }}
        >
          <i className={icon}></i>
        </div>
        <div className={`${styles.vertical_line}`}></div>
      </div>
      <div className="mt-3">
        <div className={`${styles.box}`}>
          <h3>
            <a href="#">{title}</a>
            <span>{date}</span>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceBox;
