import Layout from "../components/Layout/Layout";
import "normalize.css/normalize.css";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
