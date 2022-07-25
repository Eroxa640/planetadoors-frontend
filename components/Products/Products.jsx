import React from "react";
import styles from "./Products.module.sass";

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <div className={styles.products__titles}>
          <h3 className={styles.products__title}>Наши товары</h3>
          <p className={styles.products__description}>
            Наши двери очень качественные, которые привозятся из России,
            Казахстана и Белоруссии
          </p>
        </div>
        <div className={styles.doors}>
          <div className={styles.door}>
            <div className={styles.door__image}>
              <img
                className={styles.door__img}
                src="images/doors.example-1.png"
                alt="doors"
              />
            </div>
          </div>
          <div className={styles.door}>
            <div className={styles.door__image}>
              <img
                className={styles.door__img}
                src="images/doors.example-1.png"
                alt="doors"
              />
            </div>
          </div>
          <div className={styles.door}>
            <div className={styles.door__image}>
              <img
                className={styles.door__img}
                src="images/doors.example-1.png"
                alt="doors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
