import { FC } from "react";
import Link from "next/link";

export type PaginationProps = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  category?: string;
};

const Pagination: FC<PaginationProps> = ({
  currentPage = 1,
  isFirstPage = false,
  isLastPage = false,
  category = null,
}) => {
  const prevUrl = category
    ? `/category/${category}/page/${currentPage - 1}`
    : `/page/${currentPage - 1}`;
  const nextUrl = category
    ? `/category/${category}/page/${currentPage + 1}`
    : `/page/${currentPage + 1}`;

  return (
    <div className="text-center">
      <nav className="flex">
        {!isFirstPage && (
          <Link
            href={prevUrl}
            aria-label="Previous page"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              className="hi-solid hi-chevron-left inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
        <div className="flex items-center grow justify-center px-2 sm:px-4"></div>
        {!isLastPage && (
          <Link
            href={nextUrl}
            aria-label="Next page"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              className="hi-solid hi-chevron-right inline-block w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
