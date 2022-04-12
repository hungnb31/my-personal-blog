import type { NextPage } from 'next';
import {
  HeadArticle,
  ImageArticle,
  LargeImageArticle,
  SmallImageArticle,
  Series,
  Sidebar,
  Social,
  TextArticle,
  Layout,
} from '@howarddev/shared/ui';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Howard Blog" metaContent="Blog of Howard">
      <HeadArticle />
      <ImageArticle />
      <Social />
      <TextArticle />
      <LargeImageArticle />
      <SmallImageArticle />
      <Sidebar />
      <Series />
    </Layout>
  );
};

export default Home;
