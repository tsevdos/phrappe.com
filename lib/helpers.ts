import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";
import { PostData } from "./types";
import Config, { POSTS_PER_PAGE } from "./config";

const contentDirectory = path.join(process.cwd(), "_posts");
const fileNames = fs.readdirSync(contentDirectory);

const filenameToData = (filename: string) => {
  const slug = filename.replace(".md", "");
  const fullPath = path.join(contentDirectory, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return { ...data, slug, content, date: data.date, type: data.type } as PostData;
};

const byPostType = ({ type }: PostData) => type === "post";
const byPageType = ({ type }: PostData) => type === "page";
const byDate = (postA: PostData, postB: PostData) => +new Date(postB.date) - +new Date(postA.date);
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const getPagesArr = (posts: number) => {
  const totalCategoryPages = Math.floor(posts / POSTS_PER_PAGE) + 1;

  return range(1, totalCategoryPages, 1).map((v) => v.toString());
};

// Exported fns
export const getDataFromSlug = (slug: string): string => {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const content = fs.readFileSync(fullPath, "utf8");

  return content;
};

export const getAllPostsParams = () =>
  fileNames
    .map(filenameToData)
    .filter(byPostType)
    .map((post) => {
      const postContent = getDataFromSlug(post.slug);
      const { data } = matter(postContent);
      const categories = data.categories.map((cat: string) => cat.toLowerCase());

      return categories.map((category: string) => ({
        params: {
          slug: post.slug,
          category,
        },
      }));
    })
    .flat(2); // In odrer to generate posts in multiple categories

export const getAllPageParams = () =>
  fileNames
    .map(filenameToData)
    .filter(byPageType)
    .map((page) => ({
      params: {
        slug: page.slug,
        category: "page",
      },
    }));

export const getAllArchivePageNumbers = () => {
  const totalPosts = fileNames.map(filenameToData).filter(byPostType).length;
  const totalPages = Math.floor(totalPosts / POSTS_PER_PAGE) + 1;
  const pagesArr = range(1, totalPages, 1).map((v) => v.toString());

  return pagesArr.map((v) => ({
    params: {
      num: v,
    },
  }));
};

export const getAllSortedPosts = () =>
  fileNames.map(filenameToData).filter(byPostType).sort(byDate);

export const getSortedPostsPage = (page: number) =>
  getAllSortedPosts().slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const getSortedPostsCategory = (category: string) =>
  getAllSortedPosts().filter(({ categories }) => categories.includes(category));

export const getSortedPostsCategoryPage = ({
  page,
  category,
}: {
  page: number;
  category: string;
}) => getSortedPostsCategory(category).slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const getCategories = () => {
  return fileNames
    .map(filenameToData)
    .filter(byPostType)
    .reduce((allCategories, post) => {
      if (post?.categories?.length) {
        const uniqueCategories: string[] = Array.from(
          new Set([...allCategories, ...post.categories.flat()]),
        );
        return [...uniqueCategories];
      }

      return allCategories;
    }, [] as string[]);
};

export const getAllArchivePageNumbersPerCategory = () => {
  const categories = getCategories();
  const categoryPages = categories.map((category) => {
    const totalCategoryPosts = fileNames
      .map(filenameToData)
      .filter(byPostType)
      .filter((post: PostData) => post.categories.includes(category)).length;

    return {
      category,
      pagesArr: getPagesArr(totalCategoryPosts),
    };
  });

  const paths = categoryPages.map((obj) =>
    obj.pagesArr.map((page) => ({
      params: {
        category: obj.category,
        pageNum: page,
      },
    })),
  );

  return paths.flat();
};

export const getPages = () =>
  fileNames
    .map(filenameToData)
    .filter(byPageType)
    .reduce((allPages, page) => [...allPages, page], [] as PostData[]);

export const getPagination = (currentPage: number, totalPosts: number) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = Math.floor(totalPosts / POSTS_PER_PAGE) + 1 === currentPage;

  return { currentPage, isFirstPage, isLastPage };
};

export const buildFeeds = async () => {
  const posts = await getAllSortedPosts();
  const siteURL = Config.url;
  const date = new Date();
  const author = {
    name: Config.author,
    email: "tsevdosjohn@gmail.com",
    link: Config.url,
  };

  const feed = new Feed({
    title: Config.title,
    description: Config.tagline,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, John Tsevdos`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.content,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
