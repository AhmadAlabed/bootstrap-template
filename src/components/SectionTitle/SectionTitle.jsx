import React from "react";
import styles from "./style.module.css";

function SectionTitle({ children }) {
  return <p className={`${styles.section__title}`}>{children}</p>;
}

export default SectionTitle;
