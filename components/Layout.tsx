import { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "./Footer";
import Config from "../lib/config";
import { PostData } from "../lib/types";

type LayoutProps = {
  pages: PostData[];
  categories: string[];
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ pages, categories, children }) => (
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
    <div className="bg-white overflow-hidden">
      <Header pages={pages} />
      <div className="pb-12 container xl:max-w-7xl mx-auto px-4 lg:px-10">{children}</div>
      <Footer categories={categories} />
    </div>
  </>
);

export default Layout;
