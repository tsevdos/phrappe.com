/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import Link from "next/link";
import { PostData } from "../lib/types";

export type SidebarProps = {
  pages: PostData[];
  categories: string[];
};

const Sidebar: FC<SidebarProps> = ({ pages, categories }) => (
  <div id="sidebar" className="inactive">
    <div className="inner">
      {/* <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section> */}

      <section>
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <p>
          Hi, I’m a software engineer from Athens 🇬🇷 and huge fan of{" "}
          <a href="https://jamstack.org/" target="_blank" rel="noreferrer">
            Jamstack
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Serverless_computing"
            target="_blank"
            rel="noreferrer"
          >
            Serverless
          </a>
          . I'm working full-time at{" "}
          <a href="https://www.epignosishq.com" target="_blank" rel="noreferrer">
            Epignosis
          </a>{" "}
          and I'm sharing my JavaScript and React knowledge at{" "}
          <a
            href="https://www.codehub.gr/codelearn/our-instructors/"
            target="_blank"
            rel="noreferrer"
          >
            Code.Hub
          </a>{" "}
          and{" "}
          <a
            href="https://socialhackersacademy.org/meet-our-team/"
            target="_blank"
            rel="noreferrer"
          >
            Social Hackers Academy
          </a>
          !
        </p>
      </section>

      <nav id="menu">
        <header className="major">
          <h2>Pages</h2>
        </header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          {pages.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/page/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav id="menu">
        <header className="major">
          <h2>Links</h2>
        </header>
        <ul>
          <li>
            <a href="https://tsevdos.me/" target="_blank" rel="noreferrer">
              Tsevdos.me
            </a>
          </li>
          <li>
            <a href="http://phrappe.com/" target="_blank" rel="noreferrer">
              Phrappe.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tsevdosjohn" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/tsevdos" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tsevdos" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </nav>

      <nav id="menu">
        <header className="major">
          <h2>Categories</h2>
        </header>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/category/${encodeURIComponent(category)}/page/1`}>
                <a>{category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer id="footer">
        <p className="copyright">
          © John Tsevdos. All rights reserved. <br />
          Design:{" "}
          <a target="_blank" href="https://html5up.net" rel="noreferrer">
            HTML5 UP
          </a>
          .
        </p>
      </footer>
    </div>
    <a href="#sidebar" className="toggle">
      Toggle
    </a>
  </div>
);

export default Sidebar;
