import React from "react";
import styles from "./Concurents.module.sass";
import Link from "next/link";

export default function Concurents() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Конкуренты</h1>
      <div className={styles.cards}>
        <Link href="/">
          <div className={styles.card}>
            <img className={styles.img} src="images/dver-image.svg" alt="" />
          </div>
        </Link>
        <Link href="/">
          <div className={styles.card__black}>
            <img className={styles.img} src="images/estet-svg.svg" alt="" />
          </div>
        </Link>
        <Link href="/">
          <div className={styles.card__black}>
            <img className={styles.img} src="images/deka-ural-svg.svg" alt="" />
          </div>
        </Link>
        <Link href="/">
          <div className={styles.card}>
            <img className={styles.img} src="images/indoor-svg.svg" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
