import React from "react";
import styles from "./Location.module.sass";

function Location({ width }) {
  return (
    <div className={styles.location}>
      <div className={styles.location__info}>
        <h3 className={styles.info__title}>Местоположение</h3>
        <p className={styles.info__description}>
          Наши местоположения расположены в очень удобных местах доступны всеми
          транспортами
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.941653064124!2d74.62148491473971!3d42.937356906441806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb9e2b99cc43f%3A0x13b0c42285a36994!2z0JHQuNC30L3QtdGBLdCm0LXQvdGC0YAgItCQ0KHQnNCQ0J0i!5e0!3m2!1sru!2skg!4v1659006057809!5m2!1sru!2skg"
        width={width}
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
