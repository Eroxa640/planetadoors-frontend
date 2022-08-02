import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import styles from "./HeadPage.module.sass";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeadPage() {
  return (
    <Swiper effect={"fade"} modules={[EffectFade]}>
      <SwiperSlide>
        <div className={styles.slide}>
          <div className="container">
            <div className={styles.content}>
              <div className={styles.contentLogo__img}>
                <img src="/images/logo-svg.svg" alt="planeta_doors" />
              </div>
              <span className={styles.content__text}>
                Наслаждение в каждом моменте
              </span>
            </div>
          </div>
          <div className={styles.slide__img}>
            <img src="/images/planeta__doors-1.png" alt="planeta_doors_slide" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slide}>
          <div className={`container ${styles.head__container}`}>
            <div className={styles.content}>
              <div className={styles.contentLogo__img}>
                <img src="/images/logo-svg.svg" alt="planeta_doors" />
              </div>
              <span className={styles.content__text}>
                Наслаждение в каждом моменте
              </span>
            </div>
          </div>
          <div className={styles.slide__img}>
            <img src="/images/planeta__doors-2.png" alt="planeta_doors_slide" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
