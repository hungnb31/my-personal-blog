import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { join } from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '@components/Layout';
import {
  getParsedFileContentBySlug,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@my-personal-blog/markdown';
import styles from '@styles/components/Article.module.sass';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), 'apps/blog/_articles');

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

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  const renderedHtml = await renderMarkdown(articleMarkdownContent.content);
  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHtml,
    },
  };
};

export const Article: React.FC<MarkdownRenderingResult> = ({
  frontMatter,
  html,
}) => {
  return (
    <Layout page="article" pageTitle="article" metaContent="article">
      <div className={styles.container}>
        <article>
          <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
            {frontMatter.title}
          </h1>
          <div>by {frontMatter.author}</div>
          <hr />

          <main dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  );
};

export default Article;
