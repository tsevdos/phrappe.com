import { FC } from "react";
import Head from "next/head";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Config from "../lib/config";
import { PostData } from "../lib/types";

type LayoutProps = {
  pages: PostData[];
  categories: string[];
};

const LayoutWithPromo: FC<LayoutProps> = ({ pages, categories, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{`${Config.title} | ${Config.tagline}`}</title>
      <meta name="Description" content={Config.tagline}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="phrappe.com &raquo; Feed"
        href="https://www.phrappe.com/rss/feed.xml"
      />
    </Head>

    <Header pages={pages} />
    <Hero />
    <div className="bg-gray-100">{children}</div>
    <Footer categories={categories} />
  </>
);

export default LayoutWithPromo;
