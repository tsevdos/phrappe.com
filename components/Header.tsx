import { FC } from "react";
import Link from "next/link";
import Config from "../lib/config";

const Header: FC = () => (
  <header id="header">
    <Link href="/">
      <a className="logo">
        <strong>{Config.title}</strong>
      </a>
    </Link>
    <ul className="icons">
      <li>
        <a href="https://www.linkedin.com/in/tsevdosjohn/" className="icon brands fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/tsevdos" className="icon brands fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tsevdos" className="icon brands fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      {/* <li>
          <a href="https://tsevdos.me/" className="icon brands user">
            <span className="label">tsevdos.me</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-rss">
            <span className="label">RSS (soon)</span>
          </a>
        </li> */}
    </ul>
  </header>
);

export default Header;
