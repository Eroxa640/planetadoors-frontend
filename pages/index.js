import Head from "next/head";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Главная</title>
        <meta name="description" content="main page planeta doors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
