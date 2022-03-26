import { FC } from "react";
import Link from "next/link";
import Config from "../lib/config";
import { PostData } from "../lib/types";

export type HeaderProps = {
  pages: PostData[];
};

const Header: FC<HeaderProps> = ({ pages }) => (
  <>
    <header id="page-header" className="flex flex-none items-center bg-white py-10">
      <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        <div>
          <Link href="/">
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400">
              {Config.title}
            </a>
          </Link>
        </div>

        <nav className="text-sm md:text-base space-x-4 md:space-x-6">
          {pages.map(({ slug, title }) => (
            <Link key={slug} href={`/p/${slug}`}>
              <a className="font-semibold text-gray-900 hover:text-indigo-600 hover:underline">
                {title}
              </a>
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/tsevdosjohn/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-linkedin inline-block w-5 h-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/tsevdos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-github inline-block w-5 h-5"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/tsevdos"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-twitter inline-block w-5 h-5"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </header>

    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in touch</h2>
        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
          Hi, I’m a software engineer from Athens 🇬🇷 and huge fan of everything{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-indigo-600 underline decoration-indigo-600"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://jamstack.org/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-pink-500 underline decoration-pink-500"
          >
            Jamstack
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Serverless_computing"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-fuchsia-600 underline decoration-fuchsia-600"
          >
            Serverless
          </a>
          . I&apos;m working full-time at{" "}
          <a
            href="https://www.epignosishq.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-blue-600 underline decoration-blue-600"
          >
            Epignosis
          </a>{" "}
          and I&apos;m sharing my JavaScript and React knowledge at{" "}
          <a
            href="https://www.codehub.gr/codelearn/our-instructors/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-orange-600 underline decoration-orange-600"
          >
            Code.Hub
          </a>
          !
        </p>

        <p></p>
      </div>
    </div>
  </>
);

export default Header;
