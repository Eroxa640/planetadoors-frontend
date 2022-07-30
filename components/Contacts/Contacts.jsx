import React from "react";
import styles from "./Contacts.module.sass";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.block}>
        <img src="images/contact-image.png" alt="" className={styles.image} />
        <form action="" className={styles.form}>
          <input type="text" placeholder="Имя" className={styles.name} />
          <input type="text" placeholder="Email" className={styles.email} />
          <input type="text" placeholder="Номер" className={styles.number} />
          <textarea
            type="text"
            placeholder="Сообщение"
            className={styles.text}
          />
          <button className={styles.btn__contacts}>Отправить</button>
        </form>
      </div>
    </div>
  );
}
