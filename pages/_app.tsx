import { FC } from "react";
import { AppProps } from "next/app";
import { setup } from "twind";
import Layout from "../components/Layout";

setup({
  preflight: true,
  mode: "warn",
  hash: false,
  darkMode: "class",
  theme: {},
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout pages={pageProps.pages} categories={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
