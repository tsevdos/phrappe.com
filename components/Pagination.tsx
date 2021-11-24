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
    <nav>
      {!isFirstPage ? (
        <Link href={prevUrl}>
          <a className="button primary prev">Prev page</a>
        </Link>
      ) : (
        <span />
      )}
      {!isLastPage ? (
        <Link href={nextUrl}>
          <a className="button primary next">Next page</a>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default Pagination;
