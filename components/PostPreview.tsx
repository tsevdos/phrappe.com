import { FC } from "react";
import Link from "next/link";
import { PostData } from "../lib/types";

const PostPreview: FC<PostData> = ({ slug, title, date, categories }) => (
  <div className="flex flex-col">
    <p className="text-gray-600 text-sm font-medium mb-1">
      {new Date(date).toLocaleDateString("el-GR")}
    </p>
    <h2 className="font-bold text-xl md:text-2xl mb-2">
      <Link href={`/${categories[0].toLowerCase()}/${slug}`}>
        <a className="leading-7 text-gray-800 hover:text-gray-600">{title}</a>
      </Link>
    </h2>
    <ul>
      {categories?.map((tag) => (
        <li
          key={tag}
          className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-indigo-700 bg-indigo-200 mr-2"
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export default PostPreview;
