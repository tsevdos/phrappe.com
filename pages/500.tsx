import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getCategories, getPages } from "../lib/helpers";
import Config from "../lib/config";

const Custom404: FC = () => {
  return (
    <>
      <Head>
        <title>{`500 - service is down - ${Config.title}`}</title>
      </Head>
      <h1>500 - service is down :-(</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      pages,
      categories,
    },
  };
};

export default Custom404;
