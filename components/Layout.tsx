import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Config from "../lib/config";
import { PostData } from "../lib/types";

type LayoutProps = {
  pages: PostData[];
  categories: string[];
};

const Layout: FC<LayoutProps> = ({ pages, categories, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{`${Config.title} | ${Config.tagline}`}</title>
      <meta name="Description" content={Config.tagline}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/assets/css/main.css" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="tsevdos.com &raquo; Feed"
        href="http://www.tsevdos.com/rss/feed.xml"
      />
    </Head>
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <section>{children}</section>
        </div>
      </div>
      <Sidebar pages={pages} categories={categories} />
    </div>

    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/browser.min.js"></script>
    <script src="/assets/js/breakpoints.min.js"></script>
    <script src="/assets/js/util.js"></script>
    <script src="/assets/js/main.js"></script>
  </>
);

export default Layout;
