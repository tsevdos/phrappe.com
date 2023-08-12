import { getCollection, CollectionEntry } from "astro:content";
import { POSTS_PER_PAGE } from "./config";

export type Post = CollectionEntry<"posts">;
export type Page = CollectionEntry<"pages">;

const byDate = (postA: Post, postB: Post) =>
  +new Date(postB.data.date) - +new Date(postA.data.date);

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const getCategories = async (): Promise<string[]> => {
  const posts = await getCollection("posts");

  return [...new Set(posts.map((post) => post.data.categories).flat())];
};

export const getPagesArr = (posts: number) => {
  const totalCategoryPages = Math.floor(posts / POSTS_PER_PAGE) + 1;

  return range(1, totalCategoryPages, 1).map((v) => v.toString());
};

export const getPagination = (currentPage: number, totalPosts: number) => {
  const isFirstPage = currentPage === 1;
  const isLastPage =
    totalPosts <= POSTS_PER_PAGE || Math.floor(totalPosts / POSTS_PER_PAGE) + 1 === currentPage;

  return { currentPage, isFirstPage, isLastPage };
};

export const getAllSortedPosts = async (): Promise<Post[]> => {
  const allCategoryPosts = await getCollection("posts");

  return allCategoryPosts.sort(byDate);
};

export const getSortedCategoryPosts = async (category: string): Promise<Post[]> => {
  const allCategoryPosts = await getCollection("posts", ({ data }) =>
    data.categories.includes(category),
  );

  return allCategoryPosts.sort(byDate);
};

export const getPageOfPosts = (posts: CollectionEntry<"posts">[], pageNum: number) =>
  posts.slice((pageNum - 1) * POSTS_PER_PAGE, pageNum * POSTS_PER_PAGE);
