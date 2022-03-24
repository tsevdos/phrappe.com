import { FC } from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout pages={pageProps.pages} categories={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
