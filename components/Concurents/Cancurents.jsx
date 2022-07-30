import React from 'react'
import styles from "./Concurents.module.sass";

export default function Concurents() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Конкуренты</h1>
      <div className={styles.card}>
        <div className={styles.cards}><img  className={`${styles.img } ${styles.img__dver}`} src="images/dver-image.svg" alt="" /></div>
        <div className={`${styles.cards } ${styles.cards__indoor}`}><img className={styles.img} src="images/estet-image.png" alt="" /></div>
        <div className={`${styles.cards } ${styles.cards__deka}`}><img className={styles.img} src="images/deka-image.png" alt="" /></div>
        <div className={styles.cards}><img className={`${styles.img } ${styles.img__indoor}`} src="images/indoor-image.png" alt="" /></div>
      </div>
    </div>
  )
}
