import Head from "next/head";
import { useEffect, useState } from "react";
import HeadPage from "../components/HeadPage/HeadPage";
import Location from "../components/Location/Location";
import Products from "../components/Products/Products";
import Price from "../components/Price/Price";
import styles from "../styles/Home.module.sass";
import Contacts from "../components/Contacts/Contacts";
import Concurents from "../components/Concurents/Cancurents";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);
  const handleWidth = () => {
    const screenWidth = window.screen.width;
    setScreenWidth(screenWidth);
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="main page planeta doors" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script src="//code.jivosite.com/widget/A7IUO6jnwl" async></script>
      <HeadPage />
      <Products />
      <Price />
      <Contacts />
      <Concurents/>
      <Location width={screenWidth} />
    </>
  );
}
