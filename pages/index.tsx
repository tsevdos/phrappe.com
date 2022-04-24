import { FC } from "react";
import { GetStaticProps } from "next";
import LayoutWithPromo from "../components/LayoutWithPromo";
import PostPreview from "../components/PostPreview";
import Pagination from "../components/Pagination";
import { getSortedPostsPage, getPages, getCategories, buildFeeds } from "../lib/helpers";
import { PostData } from "../lib/types";

type HomeProps = {
  posts: PostData[];
  pages: PostData[];
  categories: string[];
};

const Home: FC<HomeProps> = ({ posts, pages, categories }) => (
  <LayoutWithPromo pages={pages} categories={categories}>
    <div className="space-y-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
      <h2 className="text-center text-3xl md:text-4xl md:text-left font-extrabold ">
        Latest Posts
      </h2>
      <hr />
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      <Pagination currentPage={1} isFirstPage={true} isLastPage={false} />
    </div>
  </LayoutWithPromo>
);

export const getStaticProps: GetStaticProps = async () => {
  const indexPosts = getSortedPostsPage(1);
  const pages = getPages();
  const categories = getCategories();
  await buildFeeds(); // Build RSS Feed

  return {
    props: {
      posts: indexPosts,
      pages,
      categories,
    },
  };
};

export default Home;
