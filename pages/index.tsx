import { FC } from "react";
import { GetStaticProps } from "next";
import PostPreview from "../components/PostPreview";
import Pagination from "../components/Pagination";
import { getSortedPostsPage, getPages, getCategories, buildFeeds } from "../lib/helpers";
import { PostData } from "../lib/types";

type HomeProps = {
  posts: PostData[];
};

const Home: FC<HomeProps> = ({ posts }) => (
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
      <Pagination currentPage={1} isFirstPage={true} isLastPage={false} />
    </div>
  </div>
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
