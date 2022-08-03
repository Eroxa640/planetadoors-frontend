import React from "react";
import styles from "./Location.module.sass";

function Location() {
  return (
    <>
      <div className="container">
        <div className={styles.location__info}>
          <h3 className={styles.info__title}>Местоположение</h3>
          <p className={styles.info__description}>
            Наши местоположения расположены в очень удобных местах доступны
            всеми транспортами
          </p>
        </div>
      </div>
      <script
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A360ec0f26e5201a2534c2455d41ede473a271c77343f2ef06323aa2852fb3c79&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
      ></script>
      <div className={`container ${styles.container}`}>
        <a
          className={styles.dg_widget_link}
          href="http://2gis.kg/bishkek/firm/70000001054886284/center/74.61663007736207,42.87459603035436/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
        >
          <div className={styles.icon}>
            <img src="images/watching-icon.png" alt="watch" />
          </div>
          <span className={styles.span}>Посмотреть на карте Бишкека</span>
        </a>
        <div className={styles.dg_widget_link}>
          <div className={styles.icon}>
            <img src="images/photo-icon.png" alt="watch" />
          </div>
          <a
            className={styles.link}
            href="http://2gis.kg/bishkek/firm/70000001054886284/photos/70000001054886284/center/74.61663007736207,42.87459603035436/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos"
          >
            Фотографии компании
          </a>
        </div>
        <div className={styles.dg_widget_link}>
          <div className={styles.icon}>
            <img src="images/find-icon.png" alt="watch" />
          </div>
          <a
            className={styles.link}
            href="http://2gis.kg/bishkek/center/74.616626,42.873997/zoom/16/routeTab/rsType/bus/to/74.616626,42.873997╎Planeta Doors, салон дверей?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route"
          >
            Найти проезд до Planeta Doors, салон дверей
          </a>
        </div>
      </div>
    </>
  );
}

export default Location;
