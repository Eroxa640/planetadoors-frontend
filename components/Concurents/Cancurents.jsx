import React from "react";
import styles from "./Concurents.module.sass";
import Link from "next/link";

export default function Concurents() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Конкуренты</h1>
      <div className={styles.card}>
        <Link href="/">
          <div className={styles.cards}>
            <img
              className={`${styles.img} ${styles.img__dver}`}
              src="images/dver-image.svg"
              alt=""
            />
          </div>
        </Link>
        <Link href="/">
          <div className={`${styles.cards} ${styles.cards__indoor}`}>
            <img className={styles.img} src="images/estet-svg.svg" alt="" />
          </div>
        </Link>
        <Link href="/">
          <div className={`${styles.cards} ${styles.cards__deka}`}>
            <img className={styles.img} src="images/deka-ural-svg.svg" alt="" />
          </div>
        </Link>
        <Link href="/">
          <div className={styles.cards}>
            <img
              className={`${styles.img} ${styles.img__indoor}`}
              src="images/indoor-svg.svg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
