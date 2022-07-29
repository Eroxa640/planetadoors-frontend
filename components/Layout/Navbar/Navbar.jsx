import React, { useState } from "react";
import styles from "./Navbar.module.sass";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import cn from "classnames";

export default function Navbar() {
  //state
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={styles.line}>Более 300 моделей в наличии</div>
      <header className={styles.navbar}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.logo}>
            <img src="/images/logo-svg.svg" alt="Planeta_Doors" />
          </div>
          <nav
            className={cn(styles.nav, {
              [styles.visible]: isOpen,
            })}
          >
            <div className={styles.nav__list}>
              <Link href="/">
                <a className={styles.nav__link}>Товары</a>
              </Link>
              <Link href="/">
                <a className={styles.nav__link}>Контакты</a>
              </Link>
              <Link href="/">
                <a className={styles.nav__link}>О нас</a>
              </Link>
            </div>
            <a className={styles.contact}>+996 (505) 840 840</a>
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
