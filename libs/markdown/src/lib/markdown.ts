import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import matter from 'gray-matter';

import { MarkdownDocument } from './types';

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { content, data } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};

export const renderMarkdown = async (markdownContent: string) => {
  return serialize(markdownContent || '');
};
