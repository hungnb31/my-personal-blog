import { ParsedUrlQuery } from 'querystring';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {}

export function Article(props: ArticleProps) {
  return (
    <div className="">
      <h1>Welcome to Article!</h1>
    </div>
  );
}

export default Article;
