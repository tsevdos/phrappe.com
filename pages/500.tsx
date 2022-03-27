import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getCategories, getPages } from "../lib/helpers";
import Config from "../lib/config";

const Custom500: FC = () => {
  return (
    <>
      <Head>
        <title>{`500 - service is down - ${Config.title}`}</title>
      </Head>
      <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="bg-white min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-orange-50 transform skew-x-6 -ml-48 md:-ml-28"></div>
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-orange-50 transform skew-x-6 -mr-48 md:-mr-28"></div>

            <div className="text-center space-y-10 relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
              <div>
                <div className="text-6xl md:text-9xl font-extrabold mb-10 md:mb-20 inline-block relative">
                  <div className="absolute inset-0 border-4 border-orange-50 animate-ping"></div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 relative">
                    500
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Error Occured</h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
                  We are sorry but your request contains bad syntax and cannot be fulfilled..
                </h3>
              </div>
              <Link href="/">
                <a className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-arrow-left inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Back to Home</span>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      pages,
      categories,
    },
  };
};

export default Custom500;
