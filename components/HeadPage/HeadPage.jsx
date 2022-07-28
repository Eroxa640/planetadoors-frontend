import React from "react";
import styles from "./HeadPage.module.sass";

export default function HeadPage() {
  return (
    <div className={styles.slide}>
      <div className={`container ${styles.head__container}`}>
        <div className={styles.content}>
          <div className={styles.contentLogo__img}>
            <img src="/images/PLANETA_DOORS.png" alt="planeta_doors" />
          </div>
          <span className={styles.content__text}>
            Наслаждение в каждом моменте
          </span>
        </div>
      </div>
      <div className={styles.slide__img}>
        <img src="/images/planeta__doors.png" alt="planeta_doors_slide" />
      </div>
    </div>
  );
}
