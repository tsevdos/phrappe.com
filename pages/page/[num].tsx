import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PostPreview from "../../components/PostPreview";
import Pagination, { PaginationProps } from "../../components/Pagination";
import {
  getAllSortedPosts,
  getSortedPostsPage,
  getPages,
  getCategories,
  getAllArchivePageNumbers,
  getPagination,
} from "../../lib/helpers";
import { PostData } from "../../lib/types";

type ArchivePageProps = {
  posts: PostData[];
  pagination: PaginationProps;
};

const ArchivePage: FC<ArchivePageProps> = ({ posts, pagination }) => (
  <>
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
    <Pagination {...pagination} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArchivePageNumbers();

  console.log(paths);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = parseInt(params?.num as string);
  const allPosts = getAllSortedPosts();
  const pagePosts = getSortedPostsPage(currentPage);
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      posts: pagePosts,
      pagination: getPagination(currentPage, allPosts.length),
      pages,
      categories,
    },
  };
};

export default ArchivePage;
