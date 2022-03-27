import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import LayoutWithPromo from "../../components/LayoutWithPromo";
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
  pages: PostData[];
  categories: string[];
  pagination: PaginationProps;
};

const ArchivePage: FC<ArchivePageProps> = ({ posts, pages, categories, pagination }) => (
  <LayoutWithPromo pages={pages} categories={categories}>
    <div className="bg-white">
      <div className="space-y-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <h2 className="text-center text-3xl md:text-4xl md:text-left font-extrabold ">
          Latest Posts
        </h2>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
        <Pagination {...pagination} />
      </div>
    </div>
  </LayoutWithPromo>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArchivePageNumbers();

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
