import { FC, Fragment } from "react";
import Link from "next/link";
import { PostData } from "../lib/types";

const PostPreview: FC<PostData> = ({ slug, title, date, categories }) => (
  <Fragment>
    <article>
      <h2>
        <Link href={`/${categories[0].toLowerCase()}/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>

      <div>
        <div>
          <h4>Categories: </h4>
          <ul>
            {categories?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <p>{new Date(date).toLocaleDateString("el-GR")}</p>
      </div>
    </article>
    <hr />
  </Fragment>
);

export default PostPreview;
