import { FC } from "react";
import Link from "next/link";
import { PostData } from "../lib/types";

const PostPreview: FC<PostData> = ({ slug, title, date, categories }) => (
  <div className="my-2 lg:my-3">
    <Link href={`/${categories[0].toLowerCase()}/${slug}`}>
      <a className="transition group flex flex-row items-center p-4 border-b overflow-hidden border-gray-300 cursor-pointer hover:bg-indigo-100">
        <div className="hidden lg:block basis-1/12 font-semibold leading-4 text-sm text-indigo-700">
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "2-digit",
          })}
        </div>

        <h2 className="basis-full lg:basis-8/12 flex-auto font-bold text-xl md:text-2xl leading-7 text-gray-800 hover:text-gray-600 mr-1">
          {title}
        </h2>

        <p className="hidden lg:basis-1/12 lg:block text-right font-semibold text-indigo-700 transition translate-x-20 group-hover:translate-x-0">
          Read{" "}
          <svg
            className="hi-solid hi-arrow-right inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </a>
    </Link>
  </div>
);

export default PostPreview;
