import { FC } from "react";
import Link from "next/link";
import { tw } from "twind";
import Config from "../lib/config";

const Header: FC = () => (
  <header className={tw`mb-6 p-2 flex justify-between border(b-2 solid gray-800)`}>
    <Link href="/">
      <a>
        <h1 className={tw`text(3xl gray-800) font-medium dark:text-white transition`}>
          {Config.title}
        </h1>
      </a>
    </Link>
    <ul className={tw`flex`}>
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
