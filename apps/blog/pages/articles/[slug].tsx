import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { join } from 'path';

import Layout from '@components/Layout';
import { GetStaticPaths } from 'next';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), '_articles');

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export function Article(props: ArticleProps) {
  return (
    <Layout pageTitle="article" metaContent="article">
      <h1>Welcome to Article!</h1>
    </Layout>
  );
}

export default Article;
