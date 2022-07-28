import React, { useState } from "react";
import styles from "./Products.module.sass";
import axios from "../../api/axios";
import cn from "classnames";

function Products() {
  const [entranceDoors, setentranceDoors] = useState([]);
  const [interiorDoors, setInteriorDoors] = useState([]);
  const [OpenInteriorDoor, setOpenInteriorDoor] = useState(false);
  const [OpenEntranceDoor, setOpenEntranceDoor] = useState(false);
  const getEntranceDoors = async () => {
    try {
      const res = await axios.get(`/entrance-doors?populate=image`);
      if (!res.data) {
        throw new Error();
      }
      setentranceDoors(res.data.data);
    } catch (error) {
      setentranceDoors(false);
    }
    setOpenEntranceDoor(!OpenEntranceDoor);
  };
  const getInteriorDoors = async () => {
    try {
      const res = await axios.get(`/interiordoors?populate=image`);
      if (!res.data) {
        throw new Error();
      }
      setInteriorDoors(res.data.data);
    } catch (error) {
      setInteriorDoors(false);
    }
    setOpenInteriorDoor(!OpenInteriorDoor);
  };
  return (
    <div className="container">
      <div className={styles.products__titles}>
        <h3 className={styles.products__title}>Наши товары</h3>
        <p className={styles.products__description}>
          Наши двери очень качественные, которые привозятся из России,
          Казахстана и Белоруссии
        </p>
      </div>
      <div
        className={cn(styles.flex, {
          [styles.visible]: OpenEntranceDoor,
        })}
      >
        <h3 onClick={getEntranceDoors} className={styles.doors__title}>
          Входные
        </h3>
        {OpenEntranceDoor ? (
          <div className={styles.doors}>
            {entranceDoors.map((door) => {
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
                      <p className={styles.info}>{door.info}</p>
                      <h3 className={styles.height}>Высота: {door.height}м</h3>
                      <h3 className={styles.made}>
                        Производство: {door.madein}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* //Межкомнатные */}
      <div className={styles.flex}>
        <h3 onClick={getInteriorDoors} className={styles.doors__title}>
          Межкомнатные
        </h3>
        {OpenInteriorDoor ? (
          <div className={styles.doors}>
            {interiorDoors.map((door) => {
              return (
                <div key={door.id} className={styles.door2}>
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
                      <p className={styles.info}>{door.info}</p>
                      <h3 className={styles.height}>Высота: {door.height}м</h3>
                      <h3 className={styles.made}>
                        Производство: {door.madein}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Products;
