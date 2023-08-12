import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    cat: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
