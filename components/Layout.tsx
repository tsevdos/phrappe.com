import { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Config from "../lib/config";
import { PostData } from "../lib/types";

type LayoutProps = {
  pages: PostData[];
  categories: string[];
  children: ReactNode;
  withHero?: boolean;
};

const Layout: FC<LayoutProps> = ({ withHero = false, pages, categories, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{`${Config.title} | ${Config.tagline}`}</title>
      <meta name="Description" content={Config.tagline}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="phrappe.com &raquo; Feed"
        href="https://www.phrappe.com/rss/feed.xml"
      />
    </Head>

    <Header pages={pages} />
    {withHero && <Hero />}
    <main>{children}</main>
    <Footer categories={categories} />
  </>
);

export default Layout;
