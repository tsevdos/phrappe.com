import { useState, FC, useEffect } from "react";
import Head from "next/head";
import { tw } from "twind";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Config from "../lib/config";
import { PostData } from "../lib/types";

type LayoutProps = {
  pages: PostData[];
  categories: string[];
};

const Layout: FC<LayoutProps> = ({ pages, categories, children }) => {
  const [theme, setTheme] = useState<string>(() => localStorage?.theme || "dark");
  const changeTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (
      theme === "dark" ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
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
      <div
        className={tw`font-sans transition 
        bg-white text-gray-900 
        dark:(bg-gray-900 text-white)`}
      >
        <button onClick={changeTheme}>change theme</button>
        <div className={tw`container mx-auto lg:(flex flex-row-reverse)`}>
          <div className={tw`w-full lg:w-2/3 p-4`}>
            <Header />
            <main>{children}</main>
          </div>

          <aside className={tw`sticky w-full lg:w-1/3 px-4`}>
            <Sidebar pages={pages} categories={categories} />
          </aside>
        </div>
      </div>
      {/* Cloudflare Web Analytics */}
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "26d65e659d2645f9b6b590f6a79d072d"}'
      ></script>
      {/* End Cloudflare Web Analytics */}
    </>
  );
};

export default Layout;
