import React, { useState } from "react";
import styles from "./Products.module.sass";
import axios from "../../api/axios";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

function Products() {
  // const [entranceDoors, setentranceDoors] = useState([]);
  // const [interiorDoors, setInteriorDoors] = useState([]);
  // const [OpenInteriorDoor, setOpenInteriorDoor] = useState(false);
  // const [OpenEntranceDoor, setOpenEntranceDoor] = useState(false);
  // const getEntranceDoors = async () => {
  //   try {
  //     const res = await axios.get(`/entrance-doors?populate=image`);
  //     if (!res.data) {
  //       throw new Error();
  //     }
  //     setentranceDoors(res.data.data);
  //   } catch (error) {
  //     setentranceDoors(false);
  //   }
  //   setOpenEntranceDoor(!OpenEntranceDoor);
  // };
  // const getInteriorDoors = async () => {
  //   try {
  //     const res = await axios.get(`/interiordoors?populate=image`);
  //     if (!res.data) {
  //       throw new Error();
  //     }
  //     setInteriorDoors(res.data.data);
  //   } catch (error) {
  //     setInteriorDoors(false);
  //   }
  //   setOpenInteriorDoor(!OpenInteriorDoor);
  // };
  const [entranceDoorsVisible, setEntranceDoorsVisible] = useState(true);
  const [interiorVisible, setInteriorVisible] = useState(false);
  return (
    <div className="container">
      <div className={styles.products__titles}>
        <h3 className={styles.products__title}>Наши товары</h3>
        <p className={styles.products__description}>
          Наши двери очень качественные, которые
          <span className="d-block">
            привозятся из России, Казахстана и Белоруссии
          </span>
        </p>
      </div>
      <h3
        onClick={() =>
          setEntranceDoorsVisible(
            (entranceDoorsVisible) => !entranceDoorsVisible
          )
        }
        className={cn(styles.entranceDoors__title, {
          [styles.center__title]: entranceDoorsVisible,
        })}
      >
        Входные
      </h3>
      <div
        className={cn(styles.entranceDoors, {
          [styles.visible]: entranceDoorsVisible,
        })}
      >
        <AnimatePresence>
          {entranceDoorsVisible && (
            <motion.div
              initial={{
                opacity: 0,
                y: "-100%",
              }}
              animate={{
                opacity: 1,
                y: "0",
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                y: "-100%",
              }}
              className={styles.door__list}
            >
              <div className={styles.door__item}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
              <div className={styles.door__item}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
              <div className={styles.door__item}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h3
        onClick={() =>
          setInteriorVisible((interiorVisible) => !interiorVisible)
        }
        className={cn(styles.interior__title, {
          [styles.center__title]: interiorVisible,
        })}
      >
        Межкомнатные
      </h3>
      <div
        className={cn(styles.interior, {
          [styles.visible]: interiorVisible,
        })}
      >
        <AnimatePresence>
          {interiorVisible && (
            <motion.div
              className={styles.door__list}
              initial={{
                opacity: 0,
                y: "-100%",
              }}
              animate={{
                opacity: 1,
                y: "0",
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                y: "-100%",
              }}
            >
              <div className={`${styles.door__item} ${styles.blueBack}`}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
              <div className={`${styles.door__item} ${styles.blueBack}`}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
              <div className={`${styles.door__item} ${styles.blueBack}`}>
                <div className={styles.door__image}>
                  <img
                    className={styles.door__img}
                    src="/images/door-icon.png"
                    alt="doors"
                  />
                </div>
                <div className={styles.doorInfo}>
                  <div className={styles.logo}>
                    <img src="images/PLANETA_DOORS.png" alt="logo" />
                  </div>
                  <div className={styles.door__info}>
                    <h3 className={styles.doorName}>карина</h3>
                    <p className={styles.info}>
                      Тип: дверное полотно; Высота: 2000 мм; Ширина: 700 мм;
                      Толщина: 40 мм; Цвет: венге;
                    </p>
                    <h3 className={styles.height}>Высота: каринам</h3>
                    <h3 className={styles.made}>Производство: карина</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Products;
