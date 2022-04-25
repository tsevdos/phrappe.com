import { FC } from "react";
import Link from "next/link";
import Config from "../lib/config";
import { PostData } from "../lib/types";

export type HeaderProps = {
  pages: PostData[];
};

const Header: FC<HeaderProps> = ({ pages }) => (
  <div className="bg-gray-800">
    <header className="flex flex-none items-center py-10">
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div>
          <Link href="/">
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75">
              {Config.title}
            </a>
          </Link>
        </div>

        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <nav className="space-x-4 md:space-x-6">
            {pages.map(({ slug, title }) => (
              <Link key={slug} href={`/p/${slug}`}>
                <a className="font-semibold text-gray-300 hover:text-gray-400 hover:underline">
                  {title}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
