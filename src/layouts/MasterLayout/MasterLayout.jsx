import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./style.module.css";
import { useState } from "react";

function MasterLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const showSidebarHandle = function () {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`${styles.layout__main}`}>
      <div className={`${styles.layout__aside}`}>
        <div
          onClick={showSidebarHandle}
          className={`${styles.sidebar__toggler}`}
        >
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        <div
          className={
            showSidebar
              ? `${styles.sidebar} ${styles.sidebar__show}`
              : `${styles.sidebar}`
          }
        >
          <Sidebar showSidebarHandle={showSidebarHandle} />
        </div>
      </div>
      <div
        onClick={() => {
          setShowSidebar(false);
        }}
        className={`${styles.layout__content}`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MasterLayout;
