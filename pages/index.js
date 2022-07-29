import Head from "next/head";
import Contacts from "../components/Contacts/Contacts";
import HeadPage from "../components/HeadPage/HeadPage";
import Price from "../components/Price/Price";
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
      <HeadPage />
      <Products />
      <Price/>
      <Contacts/>
    </>
  );
}
