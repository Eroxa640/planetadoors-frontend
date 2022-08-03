import Head from "next/head";
import HeadPage from "../components/HeadPage/HeadPage";
import Location from "../components/Location/Location";
import Products from "../components/Products/Products";
import Price from "../components/Price/Price";
import styles from "../styles/Home.module.sass";
import Contacts from "../components/Contacts/Contacts";
import Concurents from "../components/Concurents/Cancurents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="title" content="Ислам Курулуш - строительная компания" />
        <meta
          name="description"
          content="Мы держим низкие цены как оптом так и в розницу
Многие из наших конкурентов завышают цены на двери, но из-за того что мы ценим чужой труд, у нас цены на своем уровне"
        />
        <meta
          name="keywords"
          content="Planeta Doors, Двери, Межкомнатные двери, входные двери, двери бишкек, куплю двери, Планета дуурс"
        />
        <meta
          name="robots"
          content="Planeta Doors, Двери, Межкомнатные двери, входные двери, двери бишкек, куплю двери, Планета дуурс"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="images/\favicon.ico" />
      </Head>
      <script src="//code.jivosite.com/widget/A7IUO6jnwl" async></script>
      <HeadPage />
      <Products />
      <Price />
      <Location />
      <Contacts />
      <Concurents />
    </>
  );
}
