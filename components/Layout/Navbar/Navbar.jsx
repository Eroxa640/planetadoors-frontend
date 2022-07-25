import React from "react";
import styles from "./Navbar.module.sass";
import { Fade as Hamburger } from "hamburger-react";

export default function Navbar() {
  return (
    <>
      <div class={styles.line}>Более 300 моделей в наличии</div>
      <header class={styles.navbar}>
        <div class={styles.container}>
          <div class={styles.logo}>
            <img src="../images/PLANETA_DOORS.png" alt="Planeta_Doors" />
          </div>
          <nav class={styles.nav}>
            <div class={styles.nav__list}>
              <a class={styles.nav__link} href="">
                Товары
              </a>
              <a class={styles.nav__link} href="">
                Контакты
              </a>
              <a class={styles.nav__link} href="">
                О нас
              </a>
            </div>
            <a class={styles.contact}>+996 (505) 840 840</a>
          </nav>
          <div className={styles.hamburger}>
            <Hamburger
              color="rgba(12,64,131,1)"
              size={30}
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(setOpen) => !setOpen}
            />
          </div>
        </div>
      </header>
    </>
  );
}
