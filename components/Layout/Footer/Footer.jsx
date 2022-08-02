import React from "react";
import styles from "./Footer.module.sass";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.footer__info}>
            <Link href="/">
              <img
                className={styles.logo}
                src="images/logo-svg.svg"
                alt="logo"
              />
            </Link>
            <div className={styles.flex}>
              <div className={styles.products}>
                <h3 className={styles.title}>Товары</h3>
                <p className={styles.parag}>
                  <Link href="/">Межкомнатные</Link>
                </p>
                <p className={styles.parag}>
                  <Link href="/">Входные</Link>
                </p>
                <p className={styles.parag}>
                  <Link href="/">Входные</Link>
                </p>
              </div>
              <div className={styles.products}>
                <h3 className={styles.title}>О нас</h3>
                <p className={styles.parag}>
                  <Link href="/">Миссия</Link>
                </p>
                <p className={styles.parag}>
                  <Link href="/">Партнеры</Link>
                </p>
                <p className={styles.parag}>
                  <Link href="/">Конкуренты</Link>
                </p>
              </div>
              <div className={styles.products}>
                <h3 className={styles.title}>
                  <Link href="/">Контакты</Link>
                </h3>
                <div className={styles.contact}>
                  <img
                    className={styles.image}
                    src="images/contact-icon.svg"
                    alt="contact"
                  />
                  <p className={styles.contact__title}>+996 (505) 840 840</p>
                </div>
                <div className={styles.contact}>
                  <img
                    className={styles.image}
                    src="images/message-icon.svg"
                    alt="email"
                  />
                  <p className={styles.contact__title}>
                    planeta-doors@gmail.com
                  </p>
                </div>
                <div className={styles.contact}>
                  <img
                    className={styles.image}
                    src="images/maps-icon.svg"
                    alt="maps"
                  />
                  <p className={styles.contact__title}>БЦ "Асман"</p>
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.network}>
            <p className={styles.name}>ОсОО «КЕНДАЛА Кейджи»</p>
            <div className={styles.socials}>
              <Link href="/">
                <img src="images/instagram-icon.svg" alt="Instagram" />
              </Link>
              <Link href="/">
                <img src="images/youtube-icon.svg" alt="YouTube" />
              </Link>
              <Link href="/">
                <img src="images/facebook-icon.svg" alt="Facebook" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
