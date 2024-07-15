import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

function Sidebar({ showSidebarHandle }) {
  const location = useLocation();
  const pathNameTemp = location.pathname.substring(1);
  const pathName = pathNameTemp == "" ? "home" : pathNameTemp;
  const [activeLink, setActiveLink] = useState(pathName);
  const setActiveLinkHandler = function (e) {
    setActiveLink(e.target.innerText.toLowerCase());
  };
  return (
    <aside className={`${styles.aside}`}>
      <div onClick={showSidebarHandle} className={`${styles.close}`}>
        <i className="fa-solid fa-xmark fa-2x"></i>
      </div>
      <div className={`${styles.profile__box}`}>
        <img src="./profile.jpg" alt="GalleryBox" />
      </div>
      <h1 className={`${styles.profile__name}`}>
        <a href="#">Jackson Ford</a>
      </h1>
      <p>
        <a href="#">UI/UX/DESIGNER </a>IN <br /> PHILIPPINES
      </p>
      <ul className={`${styles.list__pages}`}>
        <li
          onClick={setActiveLinkHandler}
          className={activeLink == "home" ? `${styles.active}` : ""}
        >
          <Link to="">home</Link>
        </li>
        <li
          onClick={setActiveLinkHandler}
          className={activeLink == "about" ? `${styles.active}` : ""}
        >
          <Link to="about">about</Link>
        </li>
        <li
          onClick={setActiveLinkHandler}
          className={activeLink == "skills" ? `${styles.active}` : ""}
        >
          <Link to="skills">skills</Link>
        </li>
        <li
          onClick={setActiveLinkHandler}
          className={activeLink == "experience" ? `${styles.active}` : ""}
        >
          <Link to="experience">experience</Link>
        </li>
        <li
          onClick={setActiveLinkHandler}
          className={activeLink == "work" ? `${styles.active}` : ""}
        >
          <Link to="work">work</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
