import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import Head from "next/head";
import {
  getAllPageParams,
  getAllPostsParams,
  getCategories,
  getPages,
  getDataFromSlug,
} from "../../lib/helpers";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { PostData } from "../../lib/types";
import Config from "../../lib/config";

type PageProps = {
  pages: PostData[];
  categories: string[];
  title: PostData["title"];
  content: PostData["content"];
};

const Page: FC<PageProps> = ({ pages, categories, title, content }) => {
  const isContactPage = title === "Contact";

  return (
    <>
      <Head>
        <title>{`${title} - ${Config.title}`}</title>
      </Head>
      <Layout pages={pages} categories={categories}>
        <div className="bg-white">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h2>
            </div>

            <article className="prose prose-indigo prose-lg mx-auto">
              {isContactPage ? (
                <ContactForm />
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
              )}
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
};

type Path = { slug: string; category: string };

export const getStaticPaths: GetStaticPaths<Path> = async () => {
  const pages = getAllPageParams();
  const posts = getAllPostsParams();

  return {
    paths: [...pages, ...posts],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = await getDataFromSlug(params?.slug as string);
  const { data, content } = matter(postContent);
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      ...data,
      content,
      pages,
      categories,
    },
  };
};

export default Page;
