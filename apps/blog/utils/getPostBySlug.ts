import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export const getPostBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
};
