import { FC, Fragment } from "react";
import Link from "next/link";
import { PostData } from "../lib/types";
import styles from "../pages/page.module.css";

const PostPreview: FC<PostData> = ({ slug, title, date, categories }) => (
  <Fragment>
    <article className={styles["post-entry"]}>
      <h2>
        <Link href={`/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>

      <div>
        <div className={styles["categories-container"]}>
          <h4>Categories: </h4>
          <ul className={styles.categories}>
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
