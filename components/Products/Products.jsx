import React, { useEffect, useState } from "react";
import styles from "./Products.module.sass";
import axios from "../../api/axios";

function Products() {
  const [doors, setDoors] = useState([]);
  useEffect(() => {
    const getDoors = async () => {
      try {
        const res = await axios.get(`/doors?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setDoors(res.data.data);
      } catch (error) {
        setDoors(false);
      }
    };
    getDoors();
  }, []);
  console.log(doors);
  return (
    <div className="container">
      <div className={styles.products}>
        <div className={styles.products__titles}>
          <h3 className={styles.products__title}>Наши товары</h3>
          <p className={styles.products__description}>
            Наши двери очень качественные, которые привозятся из России,
            Казахстана и Белоруссии
          </p>
        </div>
        <div className={styles.flex}>
          <h3 className={styles.doors__title}>Входные</h3>
          <div className={styles.doors}>
            {doors?.map((door) => {
              return (
                <div key={door.id} className={styles.door}>
                  <div className={styles.door__image}>
                    <img
                      className={styles.door__img}
                      src={door.image.url}
                      alt="doors"
                    />
                  </div>
                  <div className={styles.doorInfo}>
                    <div className={styles.logo}>
                      <img src="images/PLANETA_DOORS.png" alt="logo" />
                    </div>
                    <div className={styles.door__info}>
                      <h3 className={styles.doorName}>{door.name}</h3>
                      <h3 className={styles.height}>Высота: {door.height}м</h3>
                      <p className={styles.info}>{door.info}</p>
                      <h3 className={styles.made}>Сделано: {door.madein}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
