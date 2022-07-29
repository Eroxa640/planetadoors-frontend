import React from "react";
import styles from "./Footer.module.sass";
function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className="container">
          <div>
            <img src="images/logo-svg.svg" alt="logo" />
          </div>
          <div className={styles}></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
