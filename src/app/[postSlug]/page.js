import React, { cache } from "react";

import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";

const getBlogPost = cache(async (slug) => {
  return await loadBlogPost(slug);
});

export async function generateMetadata({ params: { postSlug } }) {
  const {
    frontmatter: { title, abstract },
  } = await getBlogPost(postSlug);

  return {
    title: title,
    description: abstract,
  };
}

async function BlogPost({ params: { postSlug } }) {
  const {
    frontmatter: { title, publishedOn },
    content,
  } = await getBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
