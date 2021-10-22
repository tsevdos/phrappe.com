import { FC } from "react";
import { GetStaticPaths } from "next";
import Head from "next/head";
import PostPreview from "../../../../components/PostPreview";
import Pagination, { PaginationProps } from "../../../../components/Pagination";
import {
  getSortedPostsCategoryPage,
  getAllArchivePageNumbersPerCategory,
  getCategories,
  getPages,
  getPagination,
  getSortedPostsCategory,
} from "../../../../lib/helpers";
import Config from "../../../../lib/config";
import { PostData } from "../../../../lib/types";

type CategoryPageProps = {
  posts: PostData[];
  pagination: PaginationProps;
  category: string;
};

const CategoryPage: FC<CategoryPageProps> = ({ posts, pagination, category }) => (
  <>
    <Head>
      <title>{`${category} - ${Config.title}`}</title>
    </Head>

    <h1>Category: {category}</h1>
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
    <Pagination {...pagination} category={category} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArchivePageNumbersPerCategory();

  return { paths, fallback: false };
};

type Params = {
  params: {
    category: string;
    pageNum: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { category, pageNum } = params;
  const currentPage = parseInt(pageNum as string);
  const allCategoryPosts = getSortedPostsCategory(category);
  const categoryPagePosts = getSortedPostsCategoryPage({
    page: currentPage,
    category: category,
  });
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      posts: categoryPagePosts,
      pagination: getPagination(currentPage, allCategoryPosts.length),
      category,
      pages,
      categories,
    },
  };
};

export default CategoryPage;
