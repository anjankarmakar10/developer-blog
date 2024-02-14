import React, { cache } from "react";
import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import COMPONENT_MAP from "@/helpers/mdx-components";
import { notFound } from "next/navigation";

const getBlogPost = cache(async (slug) => {
  return loadBlogPost(slug)
    .then((data) => data)
    .catch(notFound);
});

export async function generateMetadata({ params: { postSlug } }) {
  const {
    frontmatter: { title, abstract },
  } = await getBlogPost(postSlug);

  return {
    title: `${title} · ${BLOG_TITLE}`,
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
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
