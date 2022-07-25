import Head from "next/head";
import Products from "../components/Products/Products";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="main page planeta doors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products />
    </>
  );
}
