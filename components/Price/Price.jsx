import React from "react";
import styles from "./Price.module.sass";

export default function Price() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.block}>
          <div className={styles.info}>
            <div className={styles.price__title}>
              Мы держим низкие цены как оптом так и в розницу
            </div>
            <div className={styles.price__des}>
              Многие из наших конкурентов завышают цены на двери, но из-за того
              что мы ценим чужой труд, у нас цены на своем уровне
            </div>
          </div>
          <div className={styles.image}>
            <img src="images/price-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
