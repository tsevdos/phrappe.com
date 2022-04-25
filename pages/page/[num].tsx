import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
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
  <Layout withHero pages={pages} categories={categories}>
    <div className="space-y-6 container mx-auto px-4 py-12 lg:px-8 lg:py-32 xl:max-w-7xl">
      <h2 className="text-center text-3xl md:text-4xl md:text-left font-extrabold ">
        Page {pagination.currentPage} of all posts
      </h2>
      <hr />
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      <Pagination {...pagination} />
    </div>
  </Layout>
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
