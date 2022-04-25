import { FC } from "react";
import { GetStaticPaths } from "next";
import Head from "next/head";
import Layout from "../../../../components/Layout";
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
  pages: PostData[];
  pagination: PaginationProps;
  category: string;
  categories: string[];
};

const CategoryPage: FC<CategoryPageProps> = ({
  posts,
  pages,
  categories,
  pagination,
  category,
}) => (
  <>
    <Head>
      <title>{`${category} - ${Config.title}`}</title>
    </Head>
    <Layout withHero pages={pages} categories={categories}>
      <div className="space-y-6 container mx-auto px-4 py-12 lg:px-8 lg:py-32 xl:max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl md:text-left font-extrabold ">
          Category: {category}
        </h2>
        <hr />
        <div className="flex flex-col">
          {posts.map((post) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
        <Pagination {...pagination} category={category} />
      </div>
    </Layout>
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
