import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
